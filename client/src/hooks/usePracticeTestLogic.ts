import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate, useParams, useSearchParams, useBlocker } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import {
  fetchFilteredQuestion,
  fetchQuestion,
} from "../slice/questionSlice";
import { 
  startTestSession, 
  updateTestTime, 
  clearTestSession,
} from "../slice/uiSlice";
import { useNotifications } from "reapop";
import { useForm } from "react-hook-form";
import { supabase } from "../utils/supabase";
import { detect } from "../utils/detect";
import { startCamera } from "../utils/startCamera";
import type { Violation } from "../components/ui/ViolationFeed";
import { seedAbilityFromMockTest } from "../services/questionService";

const SESSION_TTL = 30 * 60 * 1000; // 30 minutes in milliseconds

export const usePracticeTestLogic = () => {
  const { eid, sid, cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { notify } = useNotifications();

  // Refs for proctoring
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationRef = useRef<number | null>(null);
  const detectorRef = useRef<any>(null);
  const isProcessingRef = useRef(false);
  const frameCountRef = useRef(0);
  const noFaceStreakRef = useRef(0);
  const violationTimestamps = useRef<Record<string, number>>({});
  const registerViolationRef = useRef<(type: string) => void>(() => {});
  const streamRef = useRef<MediaStream | null>(null);

  // States
  const [violations, setViolations] = useState<Violation[]>([]);
  const [lastViolation, setLastViolation] = useState<Violation | null>(null);
  const [proctoringStatus, setProctoringStatus] = useState<string>("Initializing...");
  const [showWarning, setShowWarning] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [faceDetected, setFaceDetected] = useState(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [lastSaved, setLastSaved] = useState<number>(Date.now());
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [confirmedAnswers, setConfirmedAnswers] = useState<Record<number, boolean>>({});
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [counts, setCounts] = useState({ attempted: 0, total: 0 });

  const isCreatingRef = useRef(false);
  const isNavigatingAwayRef = useRef(false);

  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "proctored";
  const timeLimit = parseInt(searchParams.get("time") || "30");

  const { data: questions } = useSelector((state: RootState) => state.questions);
  const { user } = useSelector((state: RootState) => state.user);
  const { testLanguage, triggerSubmit } = useSelector((state: RootState) => state.ui);

  const methods = useForm<any>({
    defaultValues: { answers: {} },
  });

  const { handleSubmit, reset, watch } = methods;
  const watchedAnswers = watch("answers");

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      !isNavigatingAwayRef.current &&
      Object.keys(watchedAnswers || {}).length > 0 && 
      currentLocation.pathname !== nextLocation.pathname
  );

  useEffect(() => {
    if (blocker.state === "blocked") {
      setOpenAlert(true);
    }
  }, [blocker]);

  // Sync test session with global header on mount
  useEffect(() => {
    dispatch(startTestSession({ title: "Subject Manifestation", language: "en" }));
    return () => {
      dispatch(clearTestSession());
    };
  }, [dispatch]);

  // Sync timer with Redux
  useEffect(() => {
    if (timeLeft === null) return;
    dispatch(updateTestTime(timeLeft));
  }, [timeLeft, dispatch]);

  // Watch for Parent-Triggered Submit
  useEffect(() => {
    if (triggerSubmit) {
      handlePreSubmit();
    }
  }, [triggerSubmit]);

  // Restore/Init Logic
  useEffect(() => {
    setAttemptId(null);
    setConfirmedAnswers({});
    reset({ answers: {} });

    const storageKey = `practice_test_${cid}`;
    const savedState = localStorage.getItem(storageKey);

    if (savedState) {
      try {
        const { answers, timestamp, confirmed, attemptId: savedAttemptId } = JSON.parse(savedState);
        if (Date.now() - timestamp < SESSION_TTL) {
          reset({ answers });
          setConfirmedAnswers(confirmed || {});
          if (savedAttemptId) setAttemptId(savedAttemptId);
          setLastSaved(timestamp);
        } else {
          localStorage.removeItem(storageKey);
        }
      } catch (e) {
        console.error("Failed to parse storage state:", e);
      }
    }
    dispatch(fetchQuestion(cid as string));
    dispatch(fetchFilteredQuestion(user?.id));
  }, [cid, dispatch, reset, user]);

  // Save to localStorage
  useEffect(() => {
    if (Object.keys(watchedAnswers || {}).length > 0) {
      const storageKey = `practice_test_${cid}`;
      localStorage.setItem(storageKey, JSON.stringify({
        answers: watchedAnswers,
        confirmed: confirmedAnswers,
        attemptId: attemptId,
        timestamp: Date.now(),
      }));
      setLastSaved(Date.now());
    }
  }, [watchedAnswers, cid, confirmedAnswers, attemptId]);

  const stopProctoring = useCallback(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) videoRef.current.srcObject = null;
    setCameraReady(false);
  }, []);

  // Proctoring Init
  useEffect(() => {
    let cancelled = false;
    if (mode !== "proctored") {
      setProctoringStatus("Standard Mode");
      return;
    }

    const initProctoring = async () => {
      try {
        const stream = await startCamera({ videoRef });
        streamRef.current = stream;
        if (cancelled) return;
        setCameraReady(true);
        setProctoringStatus("Loading AI Engine...");
        
        const tf = await import("@tensorflow/tfjs");
        await import("@tensorflow/tfjs-backend-webgl");
        await tf.setBackend("webgl");
        await tf.ready();
        
        const faceLandmarksDetection = await import("@tensorflow-models/face-landmarks-detection");
        const detector = await faceLandmarksDetection.createDetector(
          faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh,
          { 
            runtime: "mediapipe", 
            maxFaces: 1, 
            refineLandmarks: true,
            solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh"
          }
        );
        if (cancelled) return;
        detectorRef.current = detector;
        setProctoringStatus("Monitoring");

        detect({
          videoRef, detector, animationRef, isProcessingRef, frameCountRef, noFaceStreakRef,
          registerViolation: (type) => registerViolationRef.current(type),
          onFaceStatusChange: (detected) => setFaceDetected(detected)
        });
      } catch (err: any) {
        console.error("Proctoring init failed:", err);
        setProctoringStatus("Model Initialization Failed");
      }
    };

    initProctoring();
    return () => {
      cancelled = true;
      stopProctoring();
    };
  }, [mode, stopProctoring]);

  const onSubmit = async (data: any) => {
    if (!attemptId) return;

    try {
      const total_questions = questions?.length || 0;
      let total_marks = 0;
      let score = 0;

      questions?.forEach((q: any) => {
        total_marks += q.marks || 0;
        if (data.answers[q.id] === q.correct_answer) score += q.marks || 0;
      });

      const payload = (questions || []).map((q: any) => ({
        attempt_id: attemptId,
        question_id: q.id,
        is_submitted: true,
        ...(data.answers[q.id] ? { selected_option: data.answers[q.id] } : {})
      }));

      await supabase.from("test_attempt_answers").upsert(payload, { onConflict: "attempt_id,question_id" });
      const { data: updateData, error: attemptError } = await supabase
        .from("test_attempts")
        .update({ 
          status: "COMPLETED", 
          submitted_at: new Date().toISOString(),
          total_questions, total_marks, score
        })
        .eq("id", attemptId)
        .select();

      if (attemptError) throw attemptError;

      localStorage.removeItem(`practice_test_${cid}`);
      stopProctoring();
      await seedAbilityFromMockTest(user?.id, eid, attemptId);
      
      notify({ title: "Success", message: "Examination Manifested.", status: "success" });
      isNavigatingAwayRef.current = true;
      navigate(`/user/results/${attemptId}`);
    } catch (error: any) {
      console.error("Submission failed:", error);
      notify({ title: "Error", message: "Submission unsuccessful.", status: "error" });
    }
  };

  const handlePreSubmit = () => {
    const total = questions?.length || 0;
    const attempted = questions?.filter(q => watchedAnswers?.[q.id]).length || 0;
    setCounts({ attempted, total });
    setShowSubmitConfirm(true);
  };

  const registerViolation = useCallback(async (type: string) => {
    const now = Date.now();
    const last = violationTimestamps.current[type] ?? 0;
    if (now - last < 3000) return;
    violationTimestamps.current[type] = now;

    const newViolation: Violation = { id: crypto.randomUUID(), type, occurred_at: new Date().toISOString() };
    setViolations((prev) => {
      const next = [newViolation, ...prev];
      if (next.length >= 3) setShowWarning(true);
      if (next.length >= 7) handleAutoSubmit();
      return next;
    });
    setLastViolation(newViolation);

    if (attemptId && user?.id) {
      await supabase.from("exam_violations").insert({
        attempt_id: attemptId, user_id: user.id, exam_id: eid, subject_id: sid, chapter_id: cid, type, occurred_at: newViolation.occurred_at
      });
    }
  }, [attemptId, user, eid, sid, cid]);

  useEffect(() => { registerViolationRef.current = registerViolation; }, [registerViolation]);

  const handleAutoSubmit = useCallback(() => {
    handleSubmit(onSubmit)();
  }, [handleSubmit, onSubmit]);

  // Timer Logic
  useEffect(() => {
    if (mode === "normal") return;
    if (timeLeft === null) setTimeLeft(timeLimit * 60);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 0) {
          clearInterval(timer);
          if (prev === 0) handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [mode, timeLimit, handleAutoSubmit]);

  // Event Listeners
  useEffect(() => {
    if (mode !== "proctored") return;
    const onBlur = () => registerViolation("window_blur");
    const onVisibility = () => document.visibilityState === "hidden" && registerViolation("tab_switch");
    const onCopy = (e: ClipboardEvent) => { e.preventDefault(); registerViolation("copy_attempt"); };
    const onBeforeUnload = (e: BeforeUnloadEvent) => { e.preventDefault(); e.returnValue = ""; };

    window.addEventListener("blur", onBlur);
    document.addEventListener("visibilitychange", onVisibility);
    document.addEventListener("copy", onCopy);
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      window.removeEventListener("blur", onBlur);
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("copy", onCopy);
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [registerViolation, mode]);

  // Attempt Tracking
  useEffect(() => {
    const createAttempt = async () => {
      if (!user?.id || !cid || attemptId || isCreatingRef.current) return;
      isCreatingRef.current = true;
      try {
        const { data: existing } = await supabase.from("test_attempts").select("id").eq("user_id", user.id).eq("chapter_id", cid).eq("status", "STARTED").order("started_at", { ascending: false }).limit(1).maybeSingle();
        if (existing) {
          setAttemptId(existing.id);
          return;
        }
        const { data } = await supabase.from("test_attempts").insert({ user_id: user.id, exam_id: eid, subject_id: sid, chapter_id: cid, status: "STARTED", started_at: new Date().toISOString() }).select().single();
        if (data) setAttemptId(data.id);
      } catch (err) { console.error("Attempt creation failed:", err); }
      finally { isCreatingRef.current = false; }
    };
    createAttempt();
  }, [user, eid, sid, cid, attemptId]);

  const handleConfirm = async (questionId: number, answer: string) => {
    if (!attemptId) return;
    try {
      await supabase.from("test_attempt_answers").upsert({ attempt_id: attemptId, question_id: questionId, selected_option: answer, is_submitted: false }, { onConflict: "attempt_id,question_id" });
      if (user?.id) {
        await supabase.from("question_attempt_tracking").insert({ user_id: user.id, question_id: questionId, attempt_id: attemptId, selected_option: answer, attempted_at: new Date().toISOString() });
      }
    } catch (err) { console.error("Answer sync failed:", err); }
  };

  const cancelExit = () => { setOpenAlert(false); blocker.reset(); };
  const confirmExit = async () => {
    if (attemptId) await supabase.from("test_attempts").update({ status: "LEFT THE EXAM", submitted_at: new Date().toISOString() }).eq("id", attemptId);
    isNavigatingAwayRef.current = true;
    blocker.proceed?.();
    navigate(`/user/results/${attemptId}`);
  };

  return {
    questions, language: testLanguage, timeLeft, violations, lastViolation, proctoringStatus, showWarning, cameraReady, faceDetected,
    openAlert, showSubmitConfirm, counts, attemptId, confirmedAnswers, setConfirmedAnswers,
    methods, onSubmit, handlePreSubmit, registerViolation, handleAutoSubmit, handleConfirm,
    cancelExit, confirmExit, videoRef, mode, setShowWarning, setShowSubmitConfirm
  };
};
