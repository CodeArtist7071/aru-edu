import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate, useParams, useSearchParams, useBlocker } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import {
  fetchQuestionsByIds
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

export const useMockTestLogic = () => {
  const { eid, attemptId: urlAttemptId } = useParams();
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
  const [minimized, setMinimized] = useState(false);
  const [flash, setFlash] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [faceDetected, setFaceDetected] = useState(false);
  const [showCameraModal, setShowCameraModal] = useState(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [examId, setExamId] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [confirmedAnswers, setConfirmedAnswers] = useState<Record<number, boolean>>({});
  const [language, setLanguage] = useState<"en" | "od">("en");
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [counts, setCounts] = useState({ attempted: 0, total: 0 });

  const isCreatingRef = useRef(false);
  const isNavigatingAwayRef = useRef(false);

  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "proctored";

  const { data: questions } = useSelector((state: RootState) => state.questions);
  const { user } = useSelector((state: RootState) => state.user);
  const { triggerSubmit } = useSelector((state: RootState) => state.ui);

  const methods = useForm<any>({
    defaultValues: { answers: {} },
  });

  const { handleSubmit, reset, watch, setValue } = methods;
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
    dispatch(startTestSession({ title: "Mock Manifestation", language: "en" }));
    return () => {
      dispatch(clearTestSession());
    };
  }, [dispatch]);

  // Sync timer with Redux
  useEffect(() => {
    if (timeLeft === null) return;
    dispatch(updateTestTime(timeLeft));
  }, [timeLeft, dispatch]);

  // Watch for Parent-Triggered Submit from Global Header
  useEffect(() => {
    if (triggerSubmit) {
      handlePreSubmit();
    }
  }, [triggerSubmit]);

  // Initialization for Mock Test
  useEffect(() => {
    setAttemptId(null);
    setExamId(null);
    setConfirmedAnswers({});
    reset({ answers: {} });

    if (urlAttemptId) {
      const loadMockAttempt = async () => {
        try {
          const { data: attempt, error } = await supabase
            .from("test_attempts")
            .select("question_ids, time_limit, exam_id")
            .eq("id", urlAttemptId)
            .single();

          if (error) throw error;
          if (attempt?.question_ids) {
            dispatch(fetchQuestionsByIds(attempt.question_ids));
            if (attempt.time_limit) {
              setTimeLeft(attempt.time_limit * 60);
            }
            if (attempt.exam_id) {
              setExamId(attempt.exam_id);
            }
            setAttemptId(urlAttemptId);
          }
        } catch (err) {
          console.error("Failed to load mock attempt:", err);
          notify({ title: "Error", message: "Failed to load mock test session", status: "error" });
        }
      };
      loadMockAttempt();
    }
  }, [urlAttemptId, dispatch, reset]);

  const stopProctoring = useCallback(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) videoRef.current.srcObject = null;
    setCameraReady(false);
    setProctoringStatus("Proctoring Stopped");
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
        setProctoringStatus("Model Ready");

        detect({
          videoRef, detector, animationRef, isProcessingRef, frameCountRef, noFaceStreakRef,
          registerViolation: (type) => registerViolationRef.current(type),
          onFaceStatusChange: (detected) => {
            setFaceDetected(detected);
            if (detected) setProctoringStatus("Monitoring");
          },
          onDiagnostic: (data) => {
            if (!faceDetected) {
              setProctoringStatus(`Searching... (${Math.round(data.inferenceTime)}ms)`);
            }
          }
        });
      } catch (err: any) {
        console.error("Proctoring init failed:", err);
        setProctoringStatus(`Error: ${err.message || 'Initialization failed'}`);
        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError' || err.message?.includes('Permission denied')) {
          setShowCameraModal(true);
        }
      }
    };

    initProctoring();
    return () => {
      cancelled = true;
      stopProctoring();
    };
  }, [mode, stopProctoring, faceDetected]);

  const onSubmit = async (data: any) => {
    if (!attemptId) return;

    try {
      const total_questions = questions?.length || 0;
      let total_marks = 0;
      let score = 0;

      questions?.forEach((q: any) => {
        const marks = q.marks || 0;
        total_marks += marks;
        if (data.answers[q.id] === q.correct_answer) {
          score += marks;
        }
      });

      const payload = (questions || []).map((q: any) => ({
        attempt_id: attemptId,
        question_id: q.id,
        is_submitted: true,
        ...(data.answers[q.id] ? { selected_option: data.answers[q.id] } : {})
      }));

      const { error: answerError } = await supabase
        .from("test_attempt_answers")
        .upsert(payload, { onConflict: "attempt_id,question_id" });

      if (answerError) throw answerError;

      await supabase
        .from("test_attempts")
        .update({ 
          status: "COMPLETED", 
          submitted_at: new Date().toISOString(),
          total_questions, total_marks, score
        })
        .eq("id", attemptId);

      stopProctoring();
      await seedAbilityFromMockTest(user?.id, examId, attemptId);
      
      notify({ title: "Success", message: "Mock Test submitted successfully!", status: "success" });
      isNavigatingAwayRef.current = true;
      navigate(`/user/results/${attemptId}`);
    } catch (error: any) {
      console.error("Submission failed:", error);
      notify({ title: "Error", message: error.message, status: "error" });
    }
  };

  const handlePreSubmit = () => {
    const total = questions?.length || 0;
    const attempted = questions?.filter(q => watchedAnswers?.[q.id]).length || 0;
    setCounts({ attempted, total });
    setShowSubmitConfirm(true);
  };

  const registerViolation = useCallback(async (type: string) => {
    // Suspend rules if minimized to avoid false triggers during UI collapse
    if (minimized) return;

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
      supabase.from("exam_violations").insert({
        attempt_id: attemptId, user_id: user.id, exam_id: examId, type, occurred_at: newViolation.occurred_at,
      });
    }
  }, [attemptId, user, examId]);

  useEffect(() => { registerViolationRef.current = registerViolation; }, [registerViolation]);

  const handleAutoSubmit = useCallback(() => {
    handleSubmit(onSubmit)();
  }, [handleSubmit, onSubmit]);

  // Timer Logic
  useEffect(() => {
    if (mode === "normal" || timeLeft === null) return;

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
  }, [mode, timeLeft, handleAutoSubmit]);

  const confirmExit = async () => {
    setOpenAlert(false);
    if (attemptId) {
      await supabase
        .from("test_attempts")
        .update({ status: "LEFT THE EXAM", submitted_at: new Date().toISOString() })
        .eq("id", attemptId);
    }
    isNavigatingAwayRef.current = true;
    if (blocker.state === "blocked") blocker.reset();
    navigate(attemptId ? `/user/results/${attemptId}` : "/user/mock-tests");
  };

  const handleConfirm = async (questionId: number, answer: string) => {
    if (!attemptId) return;
    try {
      await supabase.from("test_attempt_answers").upsert(
        { attempt_id: attemptId, question_id: questionId, selected_option: answer, is_submitted: false },
        { onConflict: "attempt_id,question_id" }
      );

      const { data: attempt } = await supabase
        .from("test_attempts")
        .select("attempted_questions")
        .eq("id", attemptId)
        .single();
      
      if (attempt?.attempted_questions) {
        const updated = attempt.attempted_questions.map((q: any) => 
          q.question_id === questionId.toString() ? { ...q, user_answered: answer } : q
        );
        await supabase.from("test_attempts")
          .update({ attempted_questions: updated })
          .eq("id", attemptId);
      }
    } catch (error) {
      console.error("Failed to sync answer:", error);
    }
  };

  return {
    questions, language, timeLeft, violations, lastViolation, proctoringStatus, showWarning, cameraReady, faceDetected,
    showCameraModal, setShowCameraModal, openAlert, showSubmitConfirm, counts, attemptId, confirmedAnswers, setConfirmedAnswers,
    methods, onSubmit, handlePreSubmit, registerViolation, handleAutoSubmit, handleConfirm,
    confirmExit, videoRef, mode, setShowWarning, setShowSubmitConfirm, setOpenAlert,
    minimized, setMinimized
  };
};
