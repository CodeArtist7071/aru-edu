import React from "react";
import { TrendingUp, FlaskConical, ChevronRight } from "lucide-react";
import { ExamTicker } from "../../components/ui/ExamTicker";
import { GrowthChart } from "../../components/performanceAnalytics/GrowthChart";
import SubjectMastery from "../../components/performanceAnalytics/SubjectMastery";
import { FocusBalance } from "../../components/performanceAnalytics/FocusBalance";
import QuestionDistribution from "../../components/performanceAnalytics/QuestionDistribution";
import AiInsights from "../../components/performanceAnalytics/AiInsights";
import { MastHeadChapters } from "../../components/performanceAnalytics/MastHeadChapters";
import { SoilEnrichment } from "../../components/performanceAnalytics/SoilEnrichment";
import { useNavigate } from "react-router";

interface MobilePerformanceAnalyticsProps {
  metrics: any;
  selectedExam: string;
  setSelectedExam: (id: string) => void;
  targetedExams: any[];
  chartMode: "Practice" | "Mock";
  setChartMode: (mode: "Practice" | "Mock") => void;
  attempts: any[];
  className?: string;
}

export const MobilePerformanceAnalytics: React.FC<MobilePerformanceAnalyticsProps> = ({
  metrics,
  selectedExam,
  setSelectedExam,
  targetedExams,
  chartMode,
  setChartMode,
  attempts,
  className,
}) => {
  const navigate = useNavigate();
  const performanceTrajectory = metrics?.performanceTrajectory || [];
  const maxScore = 100;
  
  const aiInsights = [
    ...(metrics?.weakChapters?.length > 0 ? [{
      type: "Focus Area",
      title: `${metrics.weakChapters[0].name} Concepts`,
      desc: `Your accuracy is ${metrics.weakChapters[0].accuracy}% in this chapter.`,
    }] : []),
    ...(metrics?.totalSkipped > 5 ? [{
      type: "Action Required",
      title: "Time Management",
      desc: `You've skipped ${metrics.totalSkipped} questions.`,
    }] : []),
    {
      type: "Next Recommended",
      title: metrics?.strongChapters?.length > 0
        ? `${metrics.strongChapters[0].subject} Mastery`
        : "General Practice",
      desc: "Maintain your momentum with a session.",
    }
  ].slice(0, 3);

  return (
    <div className={`px-4 pb-24 space-y-8 ${className}`}>
      {/* Editorial Header */}
      <section className="pt-6">
        <h1 className="text-2xl font-black leading-tight tracking-tighter text-on-surface">
          Growth <span className="text-primary italic">&</span> Precision.
        </h1>
        <p className="mt-4 text-xs font-medium text-on-surface-variant opacity-70 leading-relaxed">
           Analytics for <span className="text-primary font-bold">{targetedExams?.find((e: any) => e.id === selectedExam)?.name || "Your Curriculum"}</span>.
        </p>
      </section>

      {/* Persistent Ticker */}
      <ExamTicker
        targetedExams={targetedExams}
        selectedExam={selectedExam}
        setSelectedExam={setSelectedExam}
      />

      {!metrics ? (
        <section className="text-center py-20 bg-surface-container-low/40 rounded-3xl border border-dashed border-outline-variant/10">
          <FlaskConical className="size-12 text-primary/10 mx-auto mb-6 animate-pulse" />
          <h2 className="text-xl font-black text-on-surface tracking-tighter">
            Data Seedlings Needed
          </h2>
          <p className="text-on-surface-variant max-w-xs text-[11px] mx-auto mt-4 px-4 leading-relaxed">
            No technical manifestations found. Complete a session to begin generating trends.
          </p>
          <button
            onClick={() => navigate("/user/dashboard")}
            className="mt-8 px-8 py-3 bg-primary text-white rounded-full font-technical font-black uppercase tracking-widest text-[10px] shadow-lg shadow-primary/20 transition-all"
          >
            Initiate Preparation
          </button>
        </section>
      ) : (
        <div className="space-y-2">
          {/* Momentum Banner */}
          <div className="bg-primary p-2 rounded-3xl shadow-ambient flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-8 bg-white/20 rounded-xl flex items-center justify-center text-white">
                <TrendingUp size={15} />
              </div>
              <div>
                <h3 className="text-[9px] font-technical font-black uppercase tracking-widest text-white/60">
                  Momentum
                </h3>
                <p className="text-sm font-bold text-white">Sessions Archive</p>
              </div>
            </div>
            <p className="text-4xl font-technical font-black text-white tracking-tighter">
              {metrics.testsCount || 0}
            </p>
          </div>

          <GrowthChart
            performanceTrajectory={performanceTrajectory}
            maxScore={maxScore}
            chartMode={chartMode}
            setChartMode={setChartMode}
          />

          <SubjectMastery examid={selectedExam} metrics={metrics} />

          <div className="grid grid-cols-1 gap-6">
            <FocusBalance metrics={metrics} />
            <QuestionDistribution metrics={metrics} />
            <AiInsights aiInsights={aiInsights} />
          </div>

          <MastHeadChapters metrics={metrics} />
          <SoilEnrichment metrics={metrics} />
        </div>
      )}

      {/* Mobile Footer Actions */}
      <section className="pt-6 space-y-4">
        <div className="bg-surface-container-high p-6 rounded-3xl border border-primary/5">
             <h3 className="text-sm font-black text-on-surface mb-1">Cultivate your potential.</h3>
             <p className="text-[11px] text-on-surface-variant opacity-60">Your metrics are synced for precision growth.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => attempts.length > 0 && navigate(`/user/results/${attempts[0].id}`)}
            className="py-4 bg-surface-container-high rounded-full font-technical font-black text-[9px] uppercase tracking-widest text-on-surface shadow-sm active:scale-95 transition-all"
          >
             Errors Review
          </button>
          <button
            onClick={() => navigate("/user/dashboard")}
            className="py-4 bg-primary text-white rounded-full font-technical font-black text-[9px] uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-all"
          >
            Study Lab
          </button>
        </div>
      </section>
    </div>
  );
};
