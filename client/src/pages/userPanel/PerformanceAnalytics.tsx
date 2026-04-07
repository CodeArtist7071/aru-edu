import {
  Bell,
  Book,
  CheckCircle,
  Edit3Icon,
  FileWarning,
  History,
  Layers,
  Pen,
  TrendingUp,
  Trophy,
  Target,
  Globe,
  Clock,
  FlaskConical,
  WorkflowIcon,
} from "lucide-react";
import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../../utils/supabase";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { fetchExams } from "../../slice/examSlice";
import SubjectMastery from "../../components/performanceAnalytics/SubjectMastery";
import AiInsights from "../../components/performanceAnalytics/AiInsights";
import QuestionDistribution from "../../components/performanceAnalytics/QuestionDistribution";
import { GrowthChart } from "../../components/performanceAnalytics/GrowthChart";
import { MastHeadChapters } from "../../components/performanceAnalytics/MastHeadChapters";
import { SoilEnrichment } from "../../components/performanceAnalytics/SoilEnrichment";
import { FocusBalance } from "../../components/performanceAnalytics/FocusBalance";
import { ExamTicker } from "../../components/ui/ExamTicker";

import { DesktopPerformanceAnalytics } from "../../components/performanceAnalytics/DesktopPerformanceAnalytics";
import { MobilePerformanceAnalytics } from "../../components/performanceAnalytics/MobilePerformanceAnalytics";

const PerformanceAnalytics = () => {
  const { profile } = useSelector(
    (state: RootState) => state.user ?? { profile: null },
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [attempts, setAttempts] = useState<any[]>([]);
  const [allAnswers, setAllAnswers] = useState<any[]>([]);
  const [chapters, setChapters] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [selectedExam, setSelectedExam] = useState<string>("");
  const [chartMode, setChartMode] = useState<"Practice" | "Mock">("Practice");
  const { examData } = useSelector(
    (state: RootState) => state.exams ?? { examData: [] },
  );

  const targetedExams = useMemo(() => {
    if (!examData || !profile?.target_exams) return [];
    return examData.filter((el) => profile.target_exams.includes(el.id));
  }, [examData, profile?.target_exams]);

  const { user } = useSelector((state: RootState) => state.user ?? { user: null });
  const activeUserId = profile?.id || user?.id;

  useEffect(() => {
    dispatch(fetchExams());
  }, [dispatch]);

  useEffect(() => {
    if (profile?.target_exams?.[0] && !selectedExam) {
      setSelectedExam(profile.target_exams[0]);
    }
  }, [profile, selectedExam]);

  useEffect(() => {
    const discoverAndFetch = async () => {
      if (!activeUserId) return;
      try {
        setLoading(true);

        let finalExamId = selectedExam;

        // 1. If no selectedExam, try to find the most recent attempt overall
        if (!finalExamId) {
          const { data: recentAtt } = await supabase
            .from("test_attempts")
            .select("exam_id")
            .eq("user_id", activeUserId)
            .order("submitted_at", { ascending: false })
            .limit(1)
            .maybeSingle();
          
          if (recentAtt?.exam_id) {
            finalExamId = recentAtt.exam_id;
            setSelectedExam(finalExamId);
          }
        }

        if (!finalExamId) {
          setLoading(false);
          return;
        }

        // 2. Fetch attempts for the determined exam context
        const { data: atts } = await supabase
          .from("test_attempts")
          .select("*")
          .eq("exam_id", finalExamId)
          .eq("user_id", activeUserId)
          .order("submitted_at", { ascending: false });

        // 3. (REMOVED) Fallback logic no longer force-switching away from empty choices

        const attemptIds = (atts || []).map((a) => a.id);
        const { data: answersData } =
          attemptIds.length > 0
            ? await supabase
                .from("test_attempt_answers")
                .select("*, questions(*)")
                .in("attempt_id", attemptIds)
            : { data: [] };

        const [chapRes, subRes] = await Promise.all([
          supabase.from("chapters").select("*"),
          supabase.from("subjects").select("*"),
        ]);

        setAttempts(atts || []);
        setAllAnswers(answersData || []);
        setChapters(chapRes.data || []);
        setSubjects(subRes.data || []);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      } finally {
        setLoading(false);
      }
    };
    discoverAndFetch();
  }, [activeUserId, selectedExam]);

  const filteredAttempts = useMemo(() => {
    return attempts.filter((att) => {
      if (chartMode === "Mock") return att.is_mock_test === true;
      return !att.is_mock_test; // Practice mode: is_mock_test is null/false
    });
  }, [attempts, chartMode]);

  const filteredAnswers = useMemo(() => {
    const attemptIds = new Set(filteredAttempts.map((a) => a.id));
    return allAnswers.filter((ans) => attemptIds.has(ans.attempt_id));
  }, [allAnswers, filteredAttempts]);

  const metrics = useMemo(() => {
    if (filteredAttempts.length === 0) return null;

    let totalCorrect = 0,
      totalIncorrect = 0,
      totalSkipped = 0,
      totalTimeMs = 0;
    const subjectStats: Record<string, any> = {};
    const chapterStats: Record<string, any> = {};

    const answersByAttempt: Record<string, any[]> = {};
    filteredAnswers.forEach((ans) => {
      if (!answersByAttempt[ans.attempt_id])
        answersByAttempt[ans.attempt_id] = [];
      answersByAttempt[ans.attempt_id].push(ans);
    });

    const performanceTrajectory: any[] = [];
    [...filteredAttempts].reverse().forEach((att) => {
      const attAnswers = answersByAttempt[att.id] || [];
      let correct = 0,
        answered = 0;
      attAnswers.forEach((ans) => {
        if (!ans.questions) return;
        if (ans.selected_option === ans.questions.correct_answer) correct++;
        if (ans.selected_option) answered++;
      });
      const chapter = chapters.find((c) => c.id === att.chapter_id);
      performanceTrajectory.push({
        accuracy: answered > 0 ? Math.round((correct / answered) * 100) : 0,
        chapterName: chapter?.name || "Practice Session",
      });
    });

    filteredAnswers.forEach((ans) => {
      const q = ans.questions;
      if (!q) return;
      const subId = q.subject_id;
      const chapId = q.chapter_id;

      if (!subjectStats[subId])
        subjectStats[subId] = {
          correct: 0,
          total: 0,
          totalMarks: 0,
          maxMarks: 0,
        };
      if (!chapterStats[chapId])
        chapterStats[chapId] = { correct: 0, total: 0, subId };

      subjectStats[subId].total++;
      subjectStats[subId].maxMarks += q.marks || 0;
      chapterStats[chapId].total++;

      if (ans.selected_option === q.correct_answer) {
        totalCorrect++;
        subjectStats[subId].correct++;
        subjectStats[subId].totalMarks += q.marks || 0;
        chapterStats[chapId].correct++;
      } else if (ans.selected_option) {
        totalIncorrect++;
      } else {
        totalSkipped++;
      }
    });

    filteredAttempts.forEach((a) => {
      if (a.started_at && a.submitted_at) {
        totalTimeMs +=
          new Date(a.submitted_at).getTime() - new Date(a.started_at).getTime();
      }
    });

    const accuracy =
      totalCorrect + totalIncorrect > 0
        ? Math.round((totalCorrect / (totalCorrect + totalIncorrect)) * 100)
        : 0;
    const avgTimeSec =
      filteredAttempts.length > 0
        ? Math.round(totalTimeMs / filteredAttempts.length / 1000)
        : 0;

    const sortedChapters = Object.entries(chapterStats)
      .map(([id, stats]: [string, any]) => ({
        id,
        name: chapters.find((c) => c.id === id)?.name || "Unknown",
        subject: subjects.find((s) => s.id === stats.subId)?.name || "Unknown",
        accuracy:
          stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
      }))
      .sort((a, b) => b.accuracy - a.accuracy);

    const breakdown = Object.entries(subjectStats)
      .map(([id, s]) => {
        const subject = subjects.find((sub) => sub.id === id);
        return {
          subject: subject?.name || "Unknown",
          accuracy: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0,
        };
      })
      .sort((a, b) => b.accuracy - a.accuracy);

    return {
      accuracy,
      avgTimeSec,
      testsCount: filteredAttempts.length,
      totalCorrect,
      totalIncorrect,
      totalSkipped,
      subjectBreakdown: breakdown,
      strongChapters: sortedChapters
        .filter((c) => c.accuracy >= 80)
        .slice(0, 2),
      weakChapters: sortedChapters.filter((c) => c.accuracy < 50).slice(0, 2),
      performanceTrajectory: performanceTrajectory.slice(-12),
    };
  }, [filteredAttempts, filteredAnswers, chapters, subjects]);

  if (loading) return <PerformanceSkeleton />;

  return (
    <>
      <MobilePerformanceAnalytics
        className="lg:hidden"
        metrics={metrics}
        selectedExam={selectedExam}
        setSelectedExam={setSelectedExam}
        targetedExams={targetedExams}
        chartMode={chartMode}
        setChartMode={setChartMode}
        attempts={attempts}
      />
      <DesktopPerformanceAnalytics
        className="hidden lg:block pb-24"
        metrics={metrics}
        selectedExam={selectedExam}
        setSelectedExam={setSelectedExam}
        targetedExams={targetedExams}
        chartMode={chartMode}
        setChartMode={setChartMode}
        attempts={attempts}
      />
    </>
  );
};

export default PerformanceAnalytics;

function PerformanceSkeleton() {
  return (
    <main className="pb-20 px-6 lg:px-12 max-w-7xl mx-auto space-y-16 animate-pulse">
      <section className="pt-8 space-y-6">
        <div className="h-16 w-2/3 bg-surface-container-high rounded-xl" />
        <div className="h-6 w-1/2 bg-surface-container-high rounded-lg" />
      </section>

      <div className="flex gap-3 flex-wrap">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-10 w-28 rounded-full bg-surface-container-high"
          />
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 bg-surface-container-low p-10 rounded-[3rem] space-y-6">
          <div className="size-16 bg-surface-container-high rounded-2xl" />
          <div className="h-4 w-24 bg-surface-container-high rounded" />
          <div className="h-16 w-32 bg-surface-container-high rounded" />
          <div className="h-4 w-40 bg-surface-container-high rounded" />
        </div>
        <div className="lg:col-span-8 bg-surface-container-low p-10 rounded-[3rem] h-[300px]" />
        <div className="lg:col-span-8 bg-surface-container-low p-10 rounded-[3rem] h-[250px]" />
        <div className="lg:col-span-4 bg-surface-container-low p-10 rounded-[3rem] space-y-10">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="size-20 rounded-full bg-surface-container-high" />
              <div className="space-y-2">
                <div className="h-3 w-20 bg-surface-container-high rounded" />
                <div className="h-4 w-32 bg-surface-container-high rounded" />
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-6 bg-surface-container-low p-10 rounded-[3rem] h-[200px]" />
        <div className="lg:col-span-6 bg-surface-container-low p-10 rounded-[3rem] space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-16 bg-surface-container-high rounded-2xl"
            />
          ))}
        </div>
        <div className="lg:col-span-6 bg-surface-container-low p-10 rounded-[3rem] space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-20 bg-surface-container-high rounded-2xl"
            />
          ))}
        </div>
        <div className="lg:col-span-6 bg-surface-container-low p-10 rounded-[3rem] space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-20 bg-surface-container-high rounded-2xl"
            />
          ))}
        </div>
      </div>

      <footer className="p-12 rounded-[4rem] bg-primary/5 flex flex-col md:flex-row gap-8 justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="size-20 bg-primary/20 rounded-3xl" />
          <div className="space-y-3">
            <div className="h-6 w-48 bg-surface-container-high rounded" />
            <div className="h-4 w-64 bg-surface-container-high rounded" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="h-12 w-32 bg-surface-container-high rounded-full" />
          <div className="h-12 w-36 bg-surface-container-high rounded-full" />
        </div>
      </footer>
    </main>
  );
}
