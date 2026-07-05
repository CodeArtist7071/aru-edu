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

interface ChapterListSectionProps {
  targetedExams: ExamWithSubjects[];
}

export const ChapterListSection = ({
  targetedExams,
}: ChapterListSectionProps) => {
  // If multiple exams, show tabs; if single, hide tabs and use that exam
  const {
    data: subjectData,
    e_data: chaptersData,
    loading: subjectsLoading,
  } = useSelector(
    (state: RootState) =>
      state.examSubject ?? { data: [], e_data: [], loading: false },
  );
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  console.log("subjectData", subjectData);
  const hasMultipleExams = targetedExams.length > 1;
  const listofExams = targetedExams.map((exam) => exam.id);
  console.log("targetedExams", chaptersData);
  // Default to first exam (or only exam)
  const [activeSubjectId, setActiveSubjectId] = useState<string>(
    subjectData[0]?.subject_id || subjectData[0]?.subjects?.id || "",
  );
  const filteredChaptersData = chaptersData.filter((chapter => chapter.subjects.id === activeSubjectId));
 console.log(activeSubjectId, "activeSubjectId");
  useEffect(() => {
    dispatch(fetchExamSubjects(listofExams));
    // setActiveSubjectId(subjectData[0]?.subject_id || subjectData[0]?.subjects?.id || "");
  }, [activeSubjectId]);

  // Get currently active exam data
  const activeExam = targetedExams.find((e) => e.id === activeSubjectId);

  return (
    <section className={`block md:hidden mb-10 bg-surface-container-high/40 shadow-ambient rounded-2xl p-4`}>
      {/* Section Header */}
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h3 className="text-md font-technical font-black text-primary">
            Practice Chapter Wise
          </h3>
          <p className="text-xs text-on-surface-variant opacity-60 font-medium">
            {hasMultipleExams
              ? "Select Chapters and give tests."
              : "Master one subject at a time"}
          </p>
        </div>
        <button
          className={`p-2 w-fit transition-transform  bg-primary rounded-full`}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <X size={15} className="text-white text-sm"/> : <p className="text-xs text-white px-2">View Here</p>}
             
        </button>
      </div>
      <div
        className={`${toggle ? "block" : "hidden"} space-y-2 transform transition-all duration-500`}
      >
        {/* EXAM TABS — Only show if multiple exams */}
        <div className="mb-4">
          <div
            className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {subjectData.map((subject, index) => (
              <button
                key={index}
                onClick={() => setActiveSubjectId(subject.subjects.id)}
                className={`shrink-0 px-4 py-2.5 rounded-full text-xs font-technical font-black uppercase tracking-widest transition-all duration-300 ${
                  activeSubjectId === subject.subjects.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-surface-container-high/40 text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="size-4" />
                  <span>{subject.subjects.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        {/* CHAPTER LIST */}
        <div className="h-50 overflow-auto space-y-2 scrollbar-thin scrollbar-none! scrollbar-thumb-gray-400 scrollbar-track-transparent">
          {filteredChaptersData.map((chapter, index) => (
            <div
              key={index}
              className="bg-surface-container-high/40 rounded-2xl p-3 hover:bg-surface-container-high transition-all duration-300 cursor-pointer group"
              onClick={() => setActiveSubjectId(chapter.id)}
            >
              <div className="flex items-start gap-3">
                {/* Chapter Icon */}
                {/* <div className="size-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm flex-shrink-0">
                <BookOpen className="size-5" />
              </div> */}

                {/* Subject Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-black text-sm text-on-surface tracking-tight">
                      {chapter.name}
                    </h4>
                    <ChevronRight className="size-4 text-on-surface-variant opacity-40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>          
            
            </div>
          ))}

          {/* Empty State */}
          {(!subjectData || subjectData.length === 0) && (
            <div className="py-12 text-center bg-surface-container-high/20 rounded-2xl border-2 border-dashed border-on-surface/5">
              <BookOpen className="size-8 text-on-surface-variant opacity-30 mx-auto mb-3" />
              <h4 className="text-sm font-black text-on-surface-variant mb-1">
                No chapters available
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
