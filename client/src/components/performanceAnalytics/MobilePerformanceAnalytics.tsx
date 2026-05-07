import React from "react";
import {
  Menu,
  TrendingUp,
  BarChart3,
  Sprout,
  BookOpen,
  Archive,
  User,
  ArrowUpRight,
  TrendingDown,
  FlaskConical,
  ChevronLeft
} from "lucide-react";
import { useNavigate } from "react-router";
import { ExamTicker } from "../../components/ui/ExamTicker";

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

  // Calculate Growth Indicator
  const currentAccuracy = performanceTrajectory.length > 0 ? performanceTrajectory[performanceTrajectory.length - 1].accuracy : 0;
  const previousAccuracy = performanceTrajectory.length > 1 ? performanceTrajectory[performanceTrajectory.length - 2].accuracy : currentAccuracy;
  const growth = currentAccuracy - previousAccuracy;

  // SVG Path for Accuracy Flow
  const chartPoints = performanceTrajectory.map((pt: any, i: number) => {
    const x = (i / (performanceTrajectory.length - 1 || 1)) * 360 + 20;
    const y = 180 - (pt.accuracy / 100) * 140;
    return { x, y };
  });

  const generatePath = () => {
    if (chartPoints.length < 2) return "";
    return `M ${chartPoints[0].x} ${chartPoints[0].y} ` +
      chartPoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(" ");
  };

  return (
    <div className={`relative bg-surface text-on-surface min-h-screen font-narrative animate-reveal ${className}`}>
      {/* Scrollable Content Container */}
      <main className="pb-32 px-6 max-w-md mx-auto space-y-10">

        {/* Exam Selection Ticker (Always Visible) */}
        {/* Exam Selection Ticker (Sticky Header Style) */}
        <section className="sticky top-0 left-0 right-0 z-20 bg-surface/80 backdrop-blur-xl -mx-6 px-6 py-4 border-b border-outline-variant/5 animate-reveal-stagger" style={{ animationDelay: '0.1s' }}>
          <div className="mb-2">
            <span className="text-[10px] font-technical font-black uppercase tracking-[0.2em] text-primary opacity-60 ml-2">Active Landscape</span>
          </div>
          <ExamTicker
            targetedExams={targetedExams}
            selectedExam={selectedExam}
            setSelectedExam={setSelectedExam}
          />
        </section>

        {!metrics ? (
          <section className="py-20 text-center p-8 bg-surface-container-low/40 rounded-[3rem] border border-dashed border-outline-variant/20 animate-reveal">
            <FlaskConical className="size-16 text-primary/20 mx-auto mb-8 animate-pulse" />
            <h2 className="text-2xl font-technical font-black text-on-surface tracking-tighter leading-tight">
              Data Manifestation Required
            </h2>
            <p className="text-on-surface-variant text-[12px] leading-relaxed opacity-60 mt-4 font-medium italic">
              No attempt records found for this landscape. Complete a session to begin generating trends.
            </p>
            <button
              onClick={() => navigate("/user/dashboard")}
              className="mt-10 w-full py-4 bg-primary text-white rounded-full font-technical font-black uppercase tracking-widest text-[10px] shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
            >
              Initiate Preparation
            </button>
          </section>
        ) : (
          <div className="space-y-10 animate-reveal">
            {/* Accuracy Flow Section */}
            <section>
              <div className="flex justify-between items-end mb-6">
                <div>
                  <span className="text-[10px] font-technical font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-50">
                    Performance Graph
                  </span>
                  <h2 className="text-3xl font-technical font-black text-on-surface leading-none mt-1">
                    Accuracy Flow
                  </h2>
                </div>

                <div className="text-right">
                  <div className={`flex items-center justify-end font-technical font-black text-xl ${growth >= 0 ? "text-primary" : "text-error"}`}>
                    {growth >= 0 ? <ArrowUpRight className="size-4 mr-1" /> : <TrendingDown className="size-4 mr-1" />}
                    {growth >= 0 ? "+" : ""}{growth}%
                  </div>
                  <span className="block text-[10px] text-on-surface-variant opacity-60 uppercase tracking-widest">
                    vs last session
                  </span>
                </div>
              </div>

              {/* Dynamic Growth Chart */}
              <div className="relative h-56 bg-surface-container-low rounded-xl p-6 shadow-inner border border-outline-variant/5">
                <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines (Subtle) */}
                  <line x1="20" y1="40" x2="380" y2="40" stroke="currentColor" strokeWidth="1" className="text-on-surface/5" />
                  <line x1="20" y1="110" x2="380" y2="110" stroke="currentColor" strokeWidth="1" className="text-on-surface/5" />
                  <line x1="20" y1="180" x2="380" y2="180" stroke="currentColor" strokeWidth="1" className="text-on-surface/5" />

                  <path
                    d={generatePath()}
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-1000"
                  />

                  {chartPoints.map((p, i) => (
                    <circle
                      key={i}
                      cx={p.x}
                      cy={p.y}
                      r="5"
                      className={`${i === chartPoints.length - 1 ? "fill-primary" : "fill-surface border-2 border-primary"}`}
                      fill={i === chartPoints.length - 1 ? "var(--primary)" : "var(--surface)"}
                      stroke="var(--primary)"
                      strokeWidth="2"
                    />
                  ))}
                </svg>

                <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[9px] font-technical font-black text-on-surface-variant/40 uppercase tracking-widest">
                  <span>Past</span>
                  <span className="text-primary opacity-100">Now</span>
                </div>
              </div>
            </section>

            {/* Analytic Cards Cluster */}
            <div className="space-y-6">

              {/* Subject Mastery List */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-technical font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-50 px-2">Subject Mastery</h3>
                {(metrics.subjectBreakdown || []).slice(0, 3).map((sub: any, i: number) => (
                  <div key={i} className="bg-surface-container-high/40 backdrop-blur-xl p-6 rounded-[2rem] border border-outline-variant/10 hover:border-primary/20 transition-all duration-300 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-on-surface leading-tight">
                          {sub.subject}
                        </h3>
                        <p className="text-xs text-on-surface-variant opacity-60 italic mt-1 font-medium">
                          Focusing on precision.
                        </p>
                      </div>
                      <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-technical font-black">
                        {sub.accuracy}%
                      </div>
                    </div>
                    <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-1000 ease-botanical"
                        style={{ width: `${sub.accuracy}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Question Distribution Manifestation */}
              <div className="bg-surface-container-high/40 backdrop-blur-xl p-6 rounded-[2rem] border border-outline-variant/10 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary">
                    <BarChart3 size={20} />
                  </div>
                  <h3 className="font-technical font-black text-lg text-on-surface">
                    Session Breakdown
                  </h3>
                </div>

                <div className="flex h-5 rounded-full overflow-hidden mb-6 shadow-inner">
                  <div className="bg-primary transition-all duration-1000" style={{ width: `${(metrics.totalCorrect / (metrics.totalCorrect + metrics.totalIncorrect + metrics.totalSkipped || 1)) * 100}%` }} />
                  <div className="bg-error/60 transition-all duration-1000" style={{ width: `${(metrics.totalIncorrect / (metrics.totalCorrect + metrics.totalIncorrect + metrics.totalSkipped || 1)) * 100}%` }} />
                  <div className="bg-on-surface-variant/20 transition-all duration-1000" style={{ width: `${(metrics.totalSkipped / (metrics.totalCorrect + metrics.totalIncorrect + metrics.totalSkipped || 1)) * 100}%` }} />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-[9px] font-technical font-black uppercase tracking-wider opacity-60">
                      <span className="size-1.5 bg-primary rounded-full transition-transform hover:scale-150" />
                      Correct
                    </div>
                    <span className="text-sm font-technical font-black ml-3.5">{metrics.totalCorrect}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-[9px] font-technical font-black uppercase tracking-wider opacity-60">
                      <span className="size-1.5 bg-error/60 rounded-full transition-transform hover:scale-150" />
                      Wrong
                    </div>
                    <span className="text-sm font-technical font-black ml-3.5">{metrics.totalIncorrect}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-[9px] font-technical font-black uppercase tracking-wider opacity-60">
                      <span className="size-1.5 bg-on-surface-variant/30 rounded-full transition-transform hover:scale-150" />
                      Skipped
                    </div>
                    <span className="text-sm font-technical font-black ml-3.5">{metrics.totalSkipped}</span>
                  </div>
                </div>
              </div>

              {/* Soil Enrichment: Path to Mastery */}
              <section className="mt-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-outline-variant/20" />
                  <span className="text-[10px] font-technical font-black uppercase tracking-[0.3em] text-primary opacity-60">
                    Soil Enrichment
                  </span>
                  <div className="h-px flex-1 bg-outline-variant/20" />
                </div>

                <div className="relative bg-surface-container-highest/20 p-8 rounded-[2.5rem] border border-primary/20 shadow-ambient group overflow-hidden">
                  <div className="absolute top-0 right-0 size-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors" />

                  <div className="flex gap-6 mb-8 relative z-10">
                    <div className="size-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                      <Sprout size={28} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-technical font-black text-xl text-on-surface">
                        Path to Mastery
                      </h3>
                      <p className="text-sm text-on-surface-variant mt-1 leading-relaxed opacity-80">
                        {metrics.weakChapters?.length > 0
                          ? `Review incorrect questions in ${metrics.weakChapters[0].name}.`
                          : "Continue your journey to build stronger habits."}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate("/user/dashboard")}
                    className="w-full bg-primary text-white py-5 rounded-full font-technical font-black uppercase tracking-widest text-[11px] shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                  >
                    Initiate Lab Review
                  </button>
                </div>
              </section>

              {/* Aesthetic Spacing Ritual */}
              <div className="py-12 flex justify-center items-center gap-3 opacity-20">
                <div className="w-1.5 h-1.5 bg-on-surface rounded-full" />
                <div className="w-1.5 h-1.5 bg-on-surface rounded-full" />
                <div className="w-1.5 h-1.5 bg-on-surface rounded-full" />
              </div>

            </div>
          </div>
        )}
      </main>
    </div>
  );
};
