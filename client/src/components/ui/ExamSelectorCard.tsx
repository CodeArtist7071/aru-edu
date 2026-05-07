// No lucide-react imports needed for the updated design
import { GitGraph, Plus, PlusCircle } from "lucide-react";
import type { examProps } from "../../slice/examSlice";

interface ExamSelectorCardProps {
  targetRef?: React.RefObject<HTMLElement> | null;
  targetedExams: examProps[];
  onSelect: (exam: examProps) => void;
  onViewAll: () => void;
  loading?: boolean;
}

const ExamSkeleton = () => (
  <div className="px-3 py-4 w-full md:p-6 bg-surface-container-high/20 backdrop-blur-md rounded-2xl animate-pulse border border-on-surface/10">
    <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
      <div className="size-8 lg:size-14 bg-surface-container-high rounded-2xl" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-surface-container-high rounded w-24 md:w-32" />
        <div className="hidden md:block h-3 bg-surface-container-high rounded w-48" />
      </div>
    </div>
  </div>
);

export const ExamSelectorCard = ({

  targetedExams,
  onSelect,
  onViewAll,
  loading,
}: ExamSelectorCardProps) => {
  return (
    <section className="scroll-mt-15">
      <div className="flex justify-between items-center mb-8">
        <div className="space-y-1">
          <h3 className="text-sm font-technical font-black uppercase tracking-[0.2em] text-primary">
            Your Selected Exams.
          </h3>
          <p className="text-[10px] text-on-surface-variant opacity-40 font-medium">
            Your selected career paths
          </p>
        </div>
        <button
          onClick={onViewAll}
          className="text-xs cursor-pointer font-technical bg-primary/10 backdrop-blur-md text-primary border border-primary/20 p-2 rounded-full font-black uppercase tracking-widest hover:bg-primary hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
        >
          <Plus className="size-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-h-[70dvh] overflow-y-auto pr-2 pb-24 custom-scrollbar">
        {loading ? (
          Array.from({ length: 2 }).map((_, i) => <ExamSkeleton key={i} />)
        ) : targetedExams.length > 0 ? (
          targetedExams.map((exam, index) => (
            <div
              key={index}
              className="group relative overflow-hidden min-h-[160px] md:min-h-[200px] bg-surface-container-low/40 backdrop-blur-md rounded-2xl p-6 hover:bg-surface-container-high/60 transition-all duration-500 border border-on-surface/10 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-on-surface font-headline leading-tight">
                    {exam.name}
                  </h3>
                  <p className="text-sm text-on-surface-variant font-body opacity-70">
                    {exam.type} • {exam.full_name}
                  </p>
                </div>
                {exam.is_active && (
                  <div className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">
                    ACTIVE
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => onSelect(exam)}
                  className="flex-1 bg-surface-container-highest/50 backdrop-blur-sm py-3 rounded-xl text-sm font-semibold text-on-surface hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer"
                >
                  Take Tests
                </button>
                <button className="p-3 bg-surface-container-highest/50 backdrop-blur-sm rounded-xl text-primary hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined" data-icon="analytics">
                    <GitGraph/>
                  </span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-16 text-center bg-surface-container-high/10 backdrop-blur-md rounded-2xl border-2 border-dashed border-on-surface/10">
            <h2 className="text-on-surface-variant font-black text-primary">No target exams selected yet.</h2>
            <p className="text-on-surface-variant font-medium text-sm mb-6">Please add exams to your profile to get started.</p>
            <button
              onClick={onViewAll}
              className="text-xs font-technical bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
            >
              Add Exams Here.
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
