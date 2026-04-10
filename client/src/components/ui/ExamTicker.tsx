export const ExamTicker = ({
  targetedExams,
  selectedExam,
  setSelectedExam,
}: {
  targetedExams: any[];
  selectedExam: string;
  setSelectedExam: (id: string) => void;
}) => {
  return (
    <div className="bg-surface-container-high rounded-xl p-1.5 w-full max-w-fit shadow-ambient backdrop-blur-xl border border-outline-variant/5">
      <div className="flex flex-nowrap gap-2 overflow-x-auto botanical-scrollbar scroll-smooth pb-2 leading-none">
        {targetedExams?.map((item: any, index: number) => (
          <button
            key={index}
            onClick={() => setSelectedExam(item.id)}
            className={`px-8 py-3 rounded-full font-technical font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 cursor-pointer shrink-0 ${
              selectedExam === item.id
                ? "bg-primary text-on-primary shadow-lg shadow-primary/20 scale-105"
                : "text-on-surface-variant hover:bg-surface/50 hover:text-on-surface"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};
