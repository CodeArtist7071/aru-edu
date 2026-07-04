import { ChevronRight, Notebook, Plus } from "lucide-react";
import type { examProps } from "../../slice/examSlice";
import { useRef, useState, useEffect, useCallback } from "react";

interface ExamSelectorCardProps {
  targetRef?: React.RefObject<HTMLElement> | null;
  targetedExams: examProps[];
  onSelect: (exam: examProps) => void;
  onViewAll: () => void;
  loading?: boolean;
}

const ExamSkeleton = () => (
  <div className="px-3 py-4 w-full bg-surface-container-high/20 rounded-4xl animate-pulse border border-on-surface/5 flex-shrink-0">
    <div className="flex flex-row items-center gap-4">
      <div className="size-8 lg:size-14 bg-surface-container-high rounded-2xl" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-surface-container-high rounded w-24" />
        <div className="h-3 bg-surface-container-high rounded w-32" />
      </div>
    </div>
  </div>
);

export const ExamSelectorCardMobile = ({
  targetedExams,
  onSelect,
  onViewAll,
  loading,
}: ExamSelectorCardProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position — left arrow hides at exactly 0
  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Left arrow: hidden when scrollLeft is 0 (at start)
      setCanScrollLeft(scrollLeft > 17);
      // Right arrow: hidden when near end (with 10px buffer)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      // Also check on resize
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [checkScroll, targetedExams]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="block md:hidden scroll-mt-15">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 px-4">
        <div className="space-y-1">
          <h3 className="text-md font-technical font-black text-primary">
            Continue Learning
          </h3>
        </div>
        <button
          onClick={onViewAll}
          className="text-xs cursor-pointer text-primary hover:bg-primary hover:text-white transition-all duration-300 px-3 py-1.5 rounded-full"
        >
          View All
        </button>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        {/* Left Arrow — ONLY shows when scrolled past start (scrollLeft > 0) */}
        <button
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 shadow-md flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 ${
            canScrollLeft
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!canScrollLeft}
        >
          <ChevronRight className="size-4 text-primary rotate-180" />
        </button>

        {/* Right Arrow — shows when more content exists */}
        <button
          onClick={() => scroll("right")}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 shadow-md flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 ${
            canScrollRight
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!canScrollRight}
        >
          <ChevronRight className="size-4 text-primary" />
        </button>

        {/* Scrollable Track — padding is on container, not affecting scrollLeft */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Add Exam Card (Always First) */}
          {/* <button
            onClick={onViewAll}
            className="flex-shrink-0 w-[160px] snap-start px-5 py-6 bg-surface-container-high/30 rounded-2xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center gap-2 hover:bg-surface-container-high/50 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Plus className="size-5 text-primary" />
            </div>
            <span className="text-xs font-technical font-black text-primary uppercase tracking-widest">
              Add Exam
            </span>
          </button> */}

          {/* Loading State */}
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="shrink-0 w-70 snap-start">
                <ExamSkeleton />
              </div>
            ))
          ) : targetedExams.length > 0 ? (
            targetedExams.map((exam, index) => (
              <div
                key={index}
                className="shrink-0 w-70 snap-start"
                onClick={() => onSelect(exam)}
              >
                <div className="px-5 py-10 bg-surface-container-high/40 rounded-2xl shadow-ambient hover:bg-surface-container-high group cursor-pointer relative overflow-hidden transition-all duration-300">
                  {/* Progress Badge */}
                  <div className="absolute right-3 top-3">
                    <div className="rounded-full">
                      <span className="text-[10px] font-technical font-black text-primary">
                        {exam.progress || 0}% Done
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-3">
                    <div className="size-10 bg-surface-container-high px-3 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                      <Notebook className="size-5" />
                    </div>
                    <div className="flex flex-col pr-16">
                      <h4 className="font-black text-sm text-on-surface tracking-tight leading-tight">
                        {exam.name}
                      </h4>
                      <p className="text-[11px] text-on-surface-variant font-medium leading-relaxed opacity-60 line-clamp-1">
                        {exam.full_name}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full transition-all duration-500"
                        style={{ width: `${exam.progress || 0}%` }}
                      />
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-technical text-on-surface-variant opacity-50">
                      Last: {exam.last_practiced || "Not started"}
                    </span>
                    <div className="flex items-center gap-1 text-primary">
                      <span className="text-[10px] font-technical font-black uppercase tracking-widest">
                        Resume
                      </span>
                      <ChevronRight className="size-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* Empty State */
            <div className="shrink-0 w-70 snap-start py-8 px-4 text-center bg-surface-container-high/20 rounded-2xl border-2 border-dashed border-on-surface/5">
              <h2 className="text-on-surface-variant font-black text-primary text-sm">
                No exams yet
              </h2>
              <p className="text-on-surface-variant font-medium text-xs mb-4">
                Add exams to start preparing
              </p>
              <button
                onClick={onViewAll}
                className="text-xs font-technical bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
              >
                Add Exams
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
