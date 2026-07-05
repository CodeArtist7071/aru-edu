import { useEffect, useState } from "react";
import {
  ChevronRight,
  BookOpen,
  GraduationCap,
  Plus,
  X,
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
    <section className="block bg-surface-container-high/40 shadow-ambient rounded-2xl p-4 md:hidden">
      {/* Section Header */}
      <div className="flex justify-between items-center">
        <div className="">
          <h3 className="text-md font-technical font-black text-primary">
            Practice by Subject
          </h3>
          <p className="text-xs text-on-surface-variant opacity-60 font-medium">
            {hasMultipleExams
              ? "Give tests from the subjects "
              : "Master one subject at a time"}
          </p>
        </div>
        <button className="p-2 w-fit transition-transform  bg-primary rounded-full" onClick={() => setToggle(!toggle)}>
          {/*<ArrowUp size={15} className={`transform transition-transform text-primary ${toggle ? "rotate-180" : "rotate-0"}`} />*/}
          {toggle ? <X size={15} className="text-white text-sm"/> : <p className="text-xs text-white px-2">View Here</p>}
        </button>
      </div>
      <div className={`${toggle ? "block": "hidden"} mt-4 space-y-2 transform transition-all duration-500`}>
        {/* EXAM TABS — Only show if multiple exams */}
        {hasMultipleExams && (
          <div className=" mb-4">
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
        <div className="gap-1 columns-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          {subjectsData.map((subject, index) => (
            <div
              key={index}
              className="mb-1 rounded-xl bg-surface-container-high/40 p-3 hover:bg-surface-container-high transition-all duration-300 cursor-pointer group"
              onClick={() => setActiveExamId(subject.exam_id)}
            >
              <div className="flex items-start gap-1">
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
                    {/*<ChevronRight className="size-4 text-on-surface-variant opacity-40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />*/}
                  </div>

              
                </div>
              </div>
            </div>
          ))}

          {/* Empty State */}
        </div>
        {(!subjectsData || subjectsData.length === 0) && (
          <div className="py-12 block text-center bg-surface-container-high/20 rounded-2xl border-2 border-dashed border-on-surface/5">
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
    </section>
  );
};
