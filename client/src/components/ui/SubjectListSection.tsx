import { useEffect, useState } from "react";
import {
  ChevronRight,
  BookOpen,
  GraduationCap,
  Plus,
  ArrowDown,
  ArrowUp,
} from "lucide-react";
import type { examProps } from "../../slice/examSlice";
import type { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchExamSubjects } from "../../slice/examSubjectSlice";

interface Subject {
  id: string;
  name: string;
  totalChapters: number;
  totalQuestions: number;
  progress: number;
  icon: string;
}

interface ExamWithSubjects extends examProps {
  subjects: Subject[];
}

interface SubjectListSectionProps {
  targetedExams: ExamWithSubjects[];
}

export const SubjectListSection = ({
  targetedExams,
}: SubjectListSectionProps) => {
  // If multiple exams, show tabs; if single, hide tabs and use that exam
  const {
    data: subjectsData,
    e_data: chaptersData,
    loading: subjectsLoading,
  } = useSelector(
    (state: RootState) =>
      state.examSubject ?? { data: [], e_data: [], loading: false },
  );
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  console.log("subjectsData", subjectsData);
  const hasMultipleExams = targetedExams.length > 1;
  console.log("targetedExams", targetedExams);
  // Default to first exam (or only exam)
  const [activeExamId, setActiveExamId] = useState<string>(
    targetedExams[0]?.id || "",
  );
  useEffect(() => {
    if (activeExamId) {
      dispatch(fetchExamSubjects(activeExamId));
    }
  }, [activeExamId]);

  // Get currently active exam data
  const activeExam = targetedExams.find((e) => e.id === activeExamId);

  return (
    <section onClick={()=>setToggle(!toggle)} className="block md:hidden bg-surface-container-high/20 rounded-2xl p-4">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4 px-4">
        <div className="space-y-1">
          <h3 className="text-md font-technical font-black text-primary">
            Practice by Subject
          </h3>
          <p className="text-xs text-on-surface-variant opacity-60 font-medium">
            {hasMultipleExams
              ? "Give tests from the subjects "
              : "Master one subject at a time"}
          </p>
        </div>
        <button className="p-2 border border-primary rounded-full" onClick={() => setToggle(!toggle)}>
          <ArrowUp size={15} className={`transform transition-transform text-primary ${toggle ? "rotate-180" : "rotate-0"}`} />
        </button>
      </div>
      <div className={`${toggle ? "block" : "hidden"} space-y-2 transform transition-all duration-500`}>
        {/* EXAM TABS — Only show if multiple exams */}
        {hasMultipleExams && (
          <div className="px-4 mb-4">
            <div
              className="flex gap-2 overflow-x-auto scrollbar-hide pb-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {targetedExams.map((exam) => (
                <button
                  key={exam.id}
                  onClick={() => setActiveExamId(exam.id)}
                  className={`shrink-0 px-4 py-2.5 rounded-full text-xs font-technical font-black uppercase tracking-widest transition-all duration-300 ${
                    activeExamId === exam.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-surface-container-high/40 text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <GraduationCap className="size-4" />
                    <span>{exam.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
        {/* SINGLE EXAM HEADER — Show when only one exam (no tabs) */}
        {!hasMultipleExams && activeExam && (
          <div className="px-4 mb-3">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <GraduationCap className="size-4 text-primary" />
              <span className="text-sm font-black text-on-surface">
                {activeExam.name}
              </span>
              <span className="text-xs opacity-50">
                — {activeExam.subjects?.length || 0} subjects
              </span>
            </div>
          </div>
        )}
        {/* SUBJECT LIST */}
        <div className="h-50 overflow-auto px-4 space-y-2 scrollbar-thin scrollbar-none! scrollbar-thumb-gray-400 scrollbar-track-transparent">
          {subjectsData.map((subject, index) => (
            <div
              key={index}
              className="bg-surface-container-high/40 rounded-2xl p-3 hover:bg-surface-container-high transition-all duration-300 cursor-pointer group"
              onClick={() => setActiveExamId(subject.exam_id)}
            >
              <div className="flex items-start gap-3">
                {/* Subject Icon */}
                {/* <div className="size-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm flex-shrink-0">
                <BookOpen className="size-5" />
              </div> */}

                {/* Subject Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-black text-sm text-on-surface tracking-tight">
                      {subject.subjects.name}
                    </h4>
                    <ChevronRight className="size-4 text-on-surface-variant opacity-40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* <p className="text-[11px] text-on-surface-variant opacity-60 mb-3">
                  {subject.totalChapters} chapters · {subject.totalQuestions}{" "}
                  questions
                </p> */}

                  {/* Progress Bar */}
                  {/* <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full transition-all duration-500"
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-technical font-black text-primary">
                    {subject.progress}%
                  </span>
                </div> */}
                </div>
              </div>

              {/* Quick Action Row */}
              {/* <div className="mt-3 pt-3 border-t border-on-surface/5 flex items-center justify-between">
              <span className="text-[10px] font-technical text-on-surface-variant opacity-50">
                {subject.progress > 0
                  ? "Continue where you left off"
                  : "Not started yet"}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onStartTest(activeExamId, subject.id);
                }}
                className="text-[10px] font-technical font-black text-primary uppercase tracking-widest hover:underline"
              >
                {subject.progress > 0 ? "Resume" : "Start"}
              </button>
            </div> */}
            </div>
          ))}

          {/* Empty State */}
          {(!subjectsData || subjectsData.length === 0) && (
            <div className="py-12 text-center bg-surface-container-high/20 rounded-2xl border-2 border-dashed border-on-surface/5">
              <BookOpen className="size-8 text-on-surface-variant opacity-30 mx-auto mb-3" />
              <h4 className="text-sm font-black text-on-surface-variant mb-1">
                No subjects available
              </h4>
              <p className="text-xs text-on-surface-variant opacity-60">
                Subjects will appear once content is added
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
