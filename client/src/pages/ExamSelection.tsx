import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { fetchExams } from "../slice/examSlice";
import { supabase } from "../utils/supabase";
import { Check, Sparkles, Search, ArrowRight, Target, Bookmark } from "lucide-react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router";
import { useNotifications } from "reapop";
import { fetchUserProfile } from "../slice/userSlice";

export default function ExamGoalSelection() {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { notify } = useNotifications();
  const { examData } = useSelector((state: RootState) => state.exams);
  const { profile } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchExams());
    if (profile?.target_exams) {
      setSelected(profile.target_exams);
    }
  }, [dispatch, profile]);

  const handleSaveExams = async () => {
    if (selected.length === 0) {
      notify({ title: "Selection Required", message: "Please select at least one exam to proceed.", status: "warning" });
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          target_exams: selected,
          user_selected: true,
        })
        .eq("id", user.id);

      if (error) throw error;
      
      // CRITICAL: Synchronize Redux manifest so GoalGuard permits entry
      await dispatch(fetchUserProfile());
      
      notify({ title: "Goals Set", message: "Your exam goals have been successfully set.", status: "success" });
      navigate("/user/dashboard");
    } catch (error: any) {
      console.error("Error saving exams", error);
      notify({ title: "Connection Interrupted", message: error.message || "Failed to update exam selection.", status: "error" });
    }
  };

  const toggleExam = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const filteredExams = useMemo(() => {
    return examData.filter(
      (exam) =>
        exam.name.toLowerCase().includes(search.toLowerCase()) ||
        exam.full_name.toLowerCase().includes(search.toLowerCase()),
    ).sort((a, b) => {
      const aSelected = selected.includes(a.id);
      const bSelected = selected.includes(b.id);
      if (aSelected === bSelected) return 0;
      return aSelected ? -1 : 1;
    });
  }, [examData, search, selected]);

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-narrative selection:bg-primary/20 selection:text-primary transition-colors duration-700 overflow-x-hidden">
      {/* BOTANICAL GRADIENT LAYER: Deep Multi-Layered Atmosphere */}
      <div className="fixed top-0 right-0 -z-10 opacity-30 pointer-events-none">
        <div className="w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] rounded-full bg-linear-to-br from-primary/15 via-primary-container/10 to-transparent blur-[100px] lg:blur-[160px] -mr-20 lg:-mr-40 -mt-20 lg:-mt-40 animate-pulse-slow" />
        <div className="absolute top-40 right-40 w-[300px] h-[300px] rounded-full bg-tertiary/5 blur-[80px] animate-bounce-slow" />
      </div>

      <div className="flex-1 flex flex-col max-w-[1200px] mx-auto w-full px-6 lg:px-16 pt-4 lg:pt-24 pb-48 lg:pb-48">
        {/* EDITORIAL HEADER: Tightened Mobile Spacing */}
        <header className="mb-8 lg:mb-20 animate-reveal">
          <div className="flex items-center gap-3 mb-2 lg:mb-8">
            <div className="size-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(var(--primary-rgb),0.4)]" />
            <span className="text-[9px] lg:text-[10px] font-technical font-black uppercase tracking-[0.4em] lg:tracking-[0.6em] text-primary/60">Set Your Exam Goals</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12 text-left">
            <div className="max-w-3xl relative">
              <h1 className="text-3xl lg:text-5xl font-black tracking-tighter leading-[0.95] lg:leading-[0.85] text-on-surface mb-3 lg:mb-10">
                Choose Your<br />
                <span className="text-primary italic transition-all duration-1000 delay-300">Target Exams</span>
              </h1>
              <p className="text-md lg:text-2xl font-medium text-on-surface-variant leading-relaxed opacity-70 max-w-xl">
                 Select the examination boards you intend to practice this season.
              </p>
            </div>
            
            {/* TECHNICAL STAMP: Bounce Feedback on selection change */}
            <div className="flex flex-col items-start lg:items-end gap-3 pt-0 lg:pt-10">
              <div className={`bg-surface-container-low px-5 lg:px-8 py-2.5 lg:py-4 rounded-3xl border border-outline-variant/5 shadow-ambient flex items-center gap-4 group transition-all duration-500 ${selected.length > 0 ? 'scale-105 border-primary/20 bg-primary/5' : ''}`}>
                 <Target className={`size-5 lg:size-6 text-primary ${selected.length > 0 ? 'animate-bounce' : 'animate-pulse'}`} />
                 <span className="text-2xl lg:text-5xl font-technical font-black tracking-tighter text-on-surface">
                    {selected.length.toString().padStart(2, '0')}
                 </span>
                 <span className="text-[9px] lg:text-[10px] font-technical font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-40">Selected Exams</span>
              </div>
            </div>
          </div>
        </header>

        {/* Glassmorphic Search Pod: Internal Glow and Tactile Focus */}
        <div className="relative mb-8 lg:mb-16 group animate-reveal duration-700 delay-100 w-full max-w-2xl">
          <div className="absolute inset-y-0 left-6 lg:left-8 flex items-center pointer-events-none z-10">
            <Search className="size-5 text-on-surface-variant/40 group-focus-within:text-primary group-focus-within:scale-110 transition-all" />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            disabled={examData.length === 0}
            placeholder="Search Exams..."
            className="w-full bg-surface-container-low/80 backdrop-blur-md border border-outline-variant/10 rounded-3xl py-4 lg:py-6 pl-16 lg:pl-18 pr-8 text-base lg:text-lg font-narrative placeholder:text-on-surface-variant/20 focus:ring-4 focus:ring-primary/10 focus:bg-white focus:border-primary/20 transition-all outline-hidden shadow-inner"
          />
          <div className="absolute inset-px rounded-3xl border border-white/20 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity" />
        </div>

        {/* Tactile Exam Pill Garden: Enhanced Feedback Loop */}
        <div className="flex flex-wrap gap-4 lg:gap-5 justify-start">
          {filteredExams.length === 0 && examData.length > 0 && (
            <div className="w-full py-16 lg:py-20 text-center bg-surface-container-low/40 backdrop-blur-sm rounded-4xl border border-primary/5 transition-all animate-reveal">
              <Sparkles className="size-10 lg:size-12 mx-auto text-primary/20 mb-4" />
              <p className="text-on-surface-variant font-narrative italic text-lg lg:text-xl px-4 leading-relaxed opacity-50">No exams manifest in this landscape.</p>
            </div>
          )}

          {filteredExams.map((exam, idx) => {
            const isSelected = selected.includes(exam.id);

            return (
              <button
                key={exam.id}
                onClick={() => toggleExam(exam.id)}
                style={{ animationDelay: `${idx * 30}ms` }}
                className={`group relative px-6 lg:px-10 py-3 lg:py-5 rounded-full flex items-center gap-3 lg:gap-4 transition-all duration-500 ease-botanical hover:scale-[1.05] active:scale-90 ring-1 ring-black/5 shadow-ambient animate-reveal opacity-0 ${
                  isSelected 
                    ? "bg-primary text-white shadow-xl shadow-primary/30 scale-[1.08] z-10" 
                    : "bg-surface-container-low/60 text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface backdrop-blur-sm"
                }`}
              >
                {/* Custom Selection Pulse Ritual */}
                <div className={`size-2 lg:size-2 rounded-full transition-all duration-700 ${
                    isSelected ? "bg-white scale-110 shadow-[0_0_12px_rgba(255,255,255,0.9)]" : "bg-primary/20 group-hover:bg-primary/60 scale-75"
                }`} />

                <div className="flex flex-col items-start gap-0.5 pointer-events-none">
                   <span className={`text-xs lg:text-sm font-technical font-black uppercase tracking-[0.25em] transition-colors duration-500 ${
                      isSelected ? "text-white" : "text-on-surface"
                   }`}>
                      {exam.name}
                   </span>
                </div>

                {isSelected && (
                   <Check className="size-3 lg:size-4 text-white ml-1 lg:ml-2" strokeWidth={5} />
                )}
                
                {/* Fluid Glow Layer */}
                <div className={`absolute inset-0 rounded-full transition-opacity duration-700 pointer-events-none ${
                    isSelected ? "bg-white/10 opacity-100" : "bg-primary/5 opacity-0 group-hover:opacity-100 font-bold"
                }`} />
              </button>
            );
          })}
        </div>

        {/* Floating Action Pod: Unified Global Ready State */}
        <div className="fixed bottom-0 left-0 right-0 p-6 lg:p-16 pointer-events-none z-50">
          <div className="max-w-[1200px] mx-auto flex justify-end">
            <button
              onClick={handleSaveExams}
              className={`pointer-events-auto min-w-[180px] lg:min-w-[280px] bg-linear-to-r from-primary to-primary-container text-white h-16 lg:h-22 px-10 lg:px-16 rounded-full font-technical font-black text-[11px] lg:text-sm uppercase tracking-[0.4em] lg:tracking-[0.5em] flex items-center justify-center gap-4 lg:gap-6 transition-all duration-700 shadow-ambient-lg group active:scale-90 ${
                selected.length > 0
                  ? "opacity-100 scale-100 shadow-primary/40 hov-bloom animate-ready-pulse"
                  : "bg-surface-container-highest cursor-not-allowed grayscale opacity-60 scale-95 border border-black/5"
              }`}
            >
              <span className="shrink-0">{selected.length > 0 ? "Commit Changes" : "Select Ritual"}</span>
              <ArrowRight className={`size-4 lg:size-5 transition-transform duration-700 flex-none ${selected.length > 0 ? "translate-x-1 lg:translate-x-6 group-hover:translate-x-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
