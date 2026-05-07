import React, { useRef, useEffect } from "react";

export const ExamTicker = ({
  targetedExams,
  selectedExam,
  setSelectedExam,
}: {
  targetedExams: any[];
  selectedExam: string;
  setSelectedExam: (id: string) => void;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-center on mount or external selection change
  useEffect(() => {
    if (scrollRef.current && selectedExam) {
      const activeBtn = scrollRef.current.querySelector('[data-active="true"]');
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    }
  }, [selectedExam, targetedExams]);

  return (
    <div className="p-1.5 w-full max-w-2xl mx-auto relative group">
      {/* Premium Smoothened Edge Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface via-surface/60 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface via-surface/60 to-transparent pointer-events-none z-10" />

      <div 
        ref={scrollRef}
        className="flex flex-nowrap gap-2 overflow-x-auto px-12 py-4 botanical-scrollbar scroll-smooth pb-4 leading-none relative"
      >
        {targetedExams?.map((item: any, index: number) => (
          <button
            key={index}
            data-active={selectedExam === item.id}
            onClick={(e) => {
              setSelectedExam(item.id);
              e.currentTarget.scrollIntoView({ 
                behavior: 'smooth', 
                inline: 'center', 
                block: 'nearest' 
              });
            }}
            className={`px-8 py-3 rounded-full font-technical font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 cursor-pointer shrink-0 ${
              selectedExam === item.id
                ? "bg-primary text-on-primary shadow-lg shadow-primary/20 scale-105"
                : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface border border-outline-variant/10"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};
