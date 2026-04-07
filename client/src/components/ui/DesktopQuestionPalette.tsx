import React from "react";
import { Grid2X2, Sparkles } from "lucide-react";

type DesktopQuestionPaletteProps = {
  data: any[];
  confirmed: Record<string, boolean>;
  questionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  progressPercentage: number;
  completedQuestions: number;
};

export const DesktopQuestionPalette = ({
  data,
  confirmed,
  questionRefs,
  progressPercentage,
  completedQuestions,
}: DesktopQuestionPaletteProps) => {
  const totalQuestions = data.length;

  return (
    <aside className="hidden lg:block lg:col-span-4 transition-all duration-700 ease-botanical animate-reveal relative h-full">
      <div className="sticky top-0 space-y-8 h-fit">
        <div className="bg-surface-container-low rounded-4xl p-8 xl:p-10 shadow-ambient transition-all duration-700 ease-botanical hover:shadow-ambient-lg group/q border border-on-surface/5">
          <div className="flex flex-col mb-10">
            <span className="text-[9px] font-technical font-black text-on-surface-variant/40 uppercase tracking-[0.4em] mb-2">
              Subject Navigation
            </span>
            <h3 className="text-xl font-black text-on-surface flex items-center gap-3">
              <Grid2X2 size={24} className="text-primary" />
              Question Palette
            </h3>
          </div>

          <div className="grid grid-cols-4 xl:grid-cols-5 gap-3">
            {data.map((_, i) => {
              const isConfirmed = confirmed[data[i].id];

              return (
                <button
                  key={data[i].id}
                  type="button"
                  onClick={() =>
                    questionRefs.current[i]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                  className={`aspect-square cursor-pointer flex items-center justify-center rounded-2xl font-technical font-black text-xs transition-all duration-500
                    ${
                      isConfirmed
                        ? "bg-primary text-white shadow-ambient scale-110 rotate-3 group-hover:rotate-0"
                        : "bg-surface-container-highest/60 hover:bg-white hover:text-primary hover:shadow-md hover:scale-105 text-on-surface-variant/40 border border-outline-variant/10"
                    }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-surface-container-low/50 backdrop-blur-xl rounded-[3rem] p-8 xl:p-10 border border-outline-variant/10 shadow-ambient-sm">
          <div className="flex justify-between items-end mb-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-technical font-black text-on-surface-variant/40 uppercase tracking-[0.4em] mb-2">
                Growth Progress
              </span>
              <span className="text-base font-black text-on-surface">
                Session Velocity
              </span>
            </div>
            <span className="text-3xl font-technical font-black text-primary tracking-tighter">
              {progressPercentage}%
            </span>
          </div>

          <div className="h-4 w-full bg-surface-container-high rounded-full overflow-hidden shadow-inner p-1">
            <div
              className="h-full bg-linear-to-r from-primary to-primary-container rounded-full transition-all duration-[1.5s] ease-premium shadow-sm"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-primary animate-pulse" />
              <p className="text-[11px] font-technical font-black text-on-surface-variant/60 uppercase tracking-widest">
                {completedQuestions} / {totalQuestions}
              </p>
            </div>
            <p className="text-[10px] font-technical font-black text-primary uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
              Grading Active
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
