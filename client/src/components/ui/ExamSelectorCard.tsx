import { ChevronRight, Notebook, Plus } from "lucide-react";
import type { examProps } from "../../slice/examSlice";

interface ExamSelectorCardProps {
  targetRef?: React.RefObject<HTMLElement> | null;
  targetedExams: examProps[];
  onSelect: (exam: examProps) => void;
  onViewAll: () => void;
  loading?: boolean;
}

const ExamSkeleton = () => (
  <div className="px-3 py-4 w-full md:p-8 bg-surface-container-high/20 rounded-4xl animate-pulse border border-on-surface/5">
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
    <section className="hidden md:block scroll-mt-15">
      <div className="flex justify-between items-center mb-8 px-2">
        <div className="space-y-1">
          <h3 className="text-sm font-technical font-black uppercase tracking-[0.2em] text-primary">
            Select Exams.
          </h3>
          <p className="text-sm text-on-surface-variant opacity-40 font-medium">
            Please Select exam you are preparing for.
          </p>
        </div>
        <button
          onClick={onViewAll}
          className="text-md cursor-pointer font-technical bg-primary/10 text-primary border border-primary/20 p-2 rounded-full font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
        >
          <Plus size={20} className="text-md"/>
        </button>
      </div>

    <div className="columns-2 md:columns-none md:grid md:grid-cols-2 md:gap-6">
  {loading ? (
    Array.from({ length: 2 }).map((_, i) => (
      <div key={i} className="break-inside-avoid mb-3 md:mb-0">
        <ExamSkeleton />
      </div>
    ))
  ) : targetedExams.length > 0 ? (
    targetedExams.map((exam, index) => (
      <div
        key={index}
        className="break-inside-avoid mb-3 md:mb-0"
        onClick={() => onSelect(exam)}
      >
        <div className="px-5 py-4 md:p-8 bg-surface-container-high/40 rounded-sm lg:rounded-4xl shadow-ambient hover:bg-surface-container-high group cursor-pointer relative overflow-hidden">
          {/* Hover "Take Test" badge — desktop only */}
          <div className="absolute right-2 top-0 p-4">
            <div className="relative w-full px-4 h-10 hidden border-t group-hover:bg-primary rounded-full border-on-surface/5 md:flex items-center justify-between">
              <div className="flex justify-center items-center gap-2">
                <p className="text-[10px] font-technical font-black text-primary group-hover:text-surface-container-high uppercase tracking-widest leading-none">
                  Take Test
                </p>
              </div>
              <ChevronRight className="size-5 text-primary group-hover:text-surface-container-high opacity-10 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" />
            </div>
          </div>

          <div className="flex flex-row md:flex-col md:items-start items-center gap-2 md:gap-4">
            <div className="size-8 lg:size-14 bg-surface-container-high rounded-2xl flex items-center justify-center text-primary mb-0 lg:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
              <Notebook className="size-4 lg:size-6" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-black text-sm md:text-2xl ml-2 md:ml-0 mb-0 md:mb-2 text-on-surface tracking-tighter leading-none">
                {exam.name}
            </h4>
              <p className="md:block text-xs w-40 md:w-full text-on-surface-variant mb-0 md:mb-6 font-medium leading-relaxed opacity-60">
                {exam.full_name}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="col-span-full py-12 text-center bg-surface-container-high/20 rounded-3xl border-2 border-dashed border-on-surface/5">
      <h2 className="text-on-surface-variant font-black text-primary">No target exams selected yet.</h2>
      <p className="text-on-surface-variant font-medium text-sm mb-6">Please add exams to your profile to get started.</p>
      <button
        onClick={onViewAll}
        className="text-xs font-technical bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
      >
        Add Exams Here
      </button>
    </div>
  )}
</div>
    </section>
  );
};
