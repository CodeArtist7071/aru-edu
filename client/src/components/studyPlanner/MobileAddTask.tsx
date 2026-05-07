import React, { useEffect, useState, useMemo } from "react";
import {
  Loader,
  X,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Clock,
  Tag,
  Zap,
  Calendar,
  ChevronLeft,
  ArrowRight,
  Book,
  RefreshCw
} from "lucide-react";
import { supabase } from "../../utils/supabase";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import { updateUserLocally } from "../../slice/userSlice";
import { useForm, Controller } from "react-hook-form";
import { useGoogleCalendar } from "../../utils/useGoogleCalender";
import { getChaptersByExamID } from "../../services/examService";
import { type Habit } from "./types";


interface MobileAddTaskProps {
  isOpen: boolean;
  onClose: () => void;
  initialHabits: Habit[];
  examId: string;
  title?: string;
  viewMonth: number;
  viewYear: number;
  editingHabitId?: string;
  onRefresh?: () => void;
  initialProgress?: Record<string, boolean[]>;
  onRequestConnection?: () => void;
  initialUseChapter?: boolean;
}

type ToastType = "success" | "error" | "info" | "loading";
interface Toast { type: ToastType; message: string; }

type FormValues = {
  habit: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  start_time: string;
  end_time: string;
  chapter_id?: string;
  date?: string;
  end_date?: string;
  duration_type: "DAILY" | "WEEKLY" | "MONTHLY" | "CUSTOM";
  syncToCalendar: boolean;
};

// ── Shared Logic (Replicated for Stability) ──────────────────────────────────
const parseRoutineWithAI = async (text: string): Promise<Partial<FormValues>> => {
  const key = import.meta.env.VITE_GEMINI_API_KEY;
  if (!key) throw new Error("No Gemini API key found");
  const res = await fetch(`https://aiplatform.googleapis.com/v1/publishers/google/models/gemini-2.0-flash:generateContent?key=${key}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `Extract routine details from this text and return ONLY valid JSON.\nText: "${text}"\nShape: {"habit": "name", "priority": "HIGH|MEDIUM|LOW", "start_time": "HH:MM", "end_time": "HH:MM"}` }] }],
      generationConfig: { temperature: 0.1, maxOutputTokens: 150 },
    }),
  });
  if (!res.ok) throw new Error(`Gemini error ${res.status}`);
  const data = await res.json();
  const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  return JSON.parse(raw.replace(/```json|```/g, "").trim());
};

const PriorityBadge = ({ priority, selected, onSelect }: { priority: "HIGH" | "MEDIUM" | "LOW", selected: boolean, onSelect: () => void }) => {
  const styles = {
    HIGH: "bg-red-50 text-red-700 border-red-100",
    MEDIUM: "bg-amber-50 text-amber-700 border-amber-100",
    LOW: "bg-slate-50 text-slate-600 border-slate-100"
  };
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex-1 flex flex-col items-center gap-1 p-3 rounded-2xl border transition-all ${selected ? "ring-2 ring-primary border-primary bg-primary/5" : styles[priority]}`}
    >
      <span className="text-[10px] font-black uppercase tracking-widest">{priority}</span>
    </button>
  );
};

const getLocalDateString = (d: Date) => {
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const MobileAddTask: React.FC<MobileAddTaskProps> = ({
  isOpen,
  onClose,
  initialHabits,
  viewMonth,
  examId,
  viewYear,
  editingHabitId,
  title,
  onRefresh,
  initialProgress: incomingProgress,
  onRequestConnection,
  initialUseChapter,
}) => {
  const { user, profile } = useSelector((state: RootState) => state.user || { user: null, profile: null });
  const dispatch = useDispatch<AppDispatch>();
  const { connected, addEvent, editEvent } = useGoogleCalendar();

  const [toast, setToast] = useState<Toast | null>(null);
  const [aiInput, setAiInput] = useState("");
  const [aiParsing, setAiParsing] = useState(false);
  const [chapters, setChapters] = useState<any[]>([]);
  const [useChapter, setUseChapter] = useState(false);
  const [computedEndDate, setComputedEndDate] = useState<string>("");
  const [showWelcome, setShowWelcome] = useState<boolean>(false);
  const [showReward, setShowReward] = useState<boolean>(false);

  // Animation Lifecycle
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsAnimatingOut(false);
      
      // Check for welcome showing
      const seen = localStorage.getItem("arumind_planner_mobile_welcome_seen");
      if (!seen && !editingHabitId) setShowWelcome(true);
    } else if (shouldRender) {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsAnimatingOut(false);
      }, 850);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender, editingHabitId]);

  const handleProceedWelcome = () => {
    localStorage.setItem("arumind_planner_mobile_welcome_seen", "true");
    setShowWelcome(false);
  };

  const { reset, register, handleSubmit, setValue, watch, control, formState: { isSubmitting, errors } } = useForm<FormValues>({
    defaultValues: { priority: "MEDIUM", start_time: "09:00", end_time: "10:00", duration_type: "MONTHLY", syncToCalendar: connected },
    shouldUnregister: true
  });

  const priority = watch("priority");
  const durationType = watch("duration_type");
  const dateValue = watch("date");

  useEffect(() => {
    if (!dateValue) return;
    const start = new Date(dateValue);

    if (durationType === "DAILY") {
      setComputedEndDate("");
    } else if (durationType === "WEEKLY") {
      const end = new Date(start);
      end.setDate(end.getDate() + 6);
      setComputedEndDate(getLocalDateString(end));
    } else if (durationType === "MONTHLY") {
      const end = new Date(start);
      end.setMonth(end.getMonth() + 1);
      end.setDate(end.getDate() - 1);
      setComputedEndDate(getLocalDateString(end));
    } else if (durationType === "CUSTOM") {
      setComputedEndDate("");
    }
  }, [dateValue, durationType, useChapter]);

  // Mobile Debug: Watch errors
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.warn("⚠️ [MobileAddTask] Form Validation Errors:", errors);
    }
  }, [errors]);

  useEffect(() => {
    if (durationType === "DAILY" && !editingHabitId) {
      setValue("date", getLocalDateString(new Date()));
    }
  }, [durationType, editingHabitId, setValue]);

  useEffect(() => {
    if (examId && isOpen) {
      getChaptersByExamID(examId).then((data) => setChapters(data || []));
    }
  }, [examId, isOpen]);

  useEffect(() => {
    if (editingHabitId && isOpen) {
      const h = initialHabits.find(x => x.id === editingHabitId);
      if (h) {
        setValue("habit", h.name);
        setValue("priority", h.priority as any);
        setValue("start_time", h.start_time || "09:00");
        setValue("end_time", h.end_time || "10:00");
        setValue("duration_type", h.duration_type || (h.is_recurring === false ? "DAILY" : "MONTHLY"));

        if (h.scheduled_date) {
          setValue("date", h.scheduled_date);
        }
        if (h.scheduled_end_date) {
          setValue("end_date", h.scheduled_end_date);
        }

        if (h.chapter_id) { setUseChapter(true); setValue("chapter_id", h.chapter_id); }
      }
    } else if (isOpen) {
      console.log("🔍 [MobileAddTask] Adding New Study Session, Mode:", initialUseChapter ? "Mastery" : "Routine", "ExamID:", examId);
      const now = new Date();
      const isCurrentView = now.getMonth() + 1 === viewMonth && now.getFullYear() === viewYear;
      const initialDay = isCurrentView ? now.getDate() : 1;

      setToast({ type: "loading", message: "Syncing Schedule..." });
      reset({
        priority: "MEDIUM",
        duration_type: "MONTHLY",
        syncToCalendar: connected,
        date: getLocalDateString(new Date(viewYear, viewMonth - 1, initialDay))
      });
      setUseChapter(initialUseChapter || false);
    }
  }, [editingHabitId, isOpen, initialHabits, reset, setValue, connected, viewYear, viewMonth, initialUseChapter, examId]);

  const onSubmit = async (data: FormValues) => {
    console.log("🚀 [MobileAddTask] Form Submitted Successfully:", data);
    setToast({ type: "loading", message: "Syncing Schedule..." });

    // Safety check for examId
    const finalExamId = examId === "add" ? undefined : examId;
    let name = data.habit?.trim() || "";
    if (useChapter && data.chapter_id) {
      const ch = chapters.find(c => c.id === data.chapter_id);
      if (ch) name = ch.name;
      else name = "Syllabus Mastery Quest"; // Fallback if chapter not found in local state
    }

    if (!user?.id) {
      console.error("❌ [MobileAddTask] Missing User ID");
      setToast({ type: "error", message: "Validating session..." });
      return;
    }

    if (!name && !useChapter) {
      console.error("❌ [MobileAddTask] Missing Routine Name");
      setToast({ type: "error", message: "Session name is required" });
      return;
    }

    try {
      // 1. New Ritual Initialization Sync (Matches AddRoutine logic)
      if (!editingHabitId && !profile?.planner_start_date) {
        console.log("🌱 [MobileAddTask] Initializing first planner start date...");
        const startDate = new Date().toISOString();
        const { error: profErr } = await supabase.from("profiles").update({ planner_start_date: startDate }).eq("id", user.id);
        if (profErr) console.error("❌ [MobileAddTask] Profile update error:", profErr);
        dispatch(updateUserLocally({ planner_start_date: startDate }));
      }

      if (editingHabitId && !editingHabitId.startsWith("demo-")) {
        const updateData: any = {
          priority: data.priority,
          start_time: data.start_time,
          end_time: data.end_time,
          chapter_id: useChapter ? data.chapter_id : null,
          is_recurring: data.duration_type !== "DAILY",
          duration_type: data.duration_type
        };
        if (!useChapter) updateData.name = name;
        await supabase.from("study_habits").update(updateData).eq("id", editingHabitId);

        if (data.date) {
          const newDate = new Date(data.date);
          await supabase.from("study_habits").update({
            scheduled_date: newDate.toISOString().split('T')[0],
            month: String(newDate.getMonth() + 1),
            year: String(newDate.getFullYear()),
            progress: Array(31).fill(false).map((_, i) => i === newDate.getDate() - 1 && data.duration_type === "DAILY")
          }).eq("id", editingHabitId);
        }
      } else {
        const scheduledDate = data.date ? new Date(data.date) : new Date();
        const habitData: any = {
          user_id: user.id,
          priority: data.priority,
          start_time: data.start_time,
          end_time: data.end_time,
          progress: Array(31).fill(false),
          month: String(viewMonth),
          year: String(viewYear),
          exam_id: examId,
          chapter_id: useChapter ? data.chapter_id : null,
          is_recurring: data.duration_type !== "DAILY",
          duration_type: data.duration_type,
          scheduled_date: scheduledDate.toISOString().split('T')[0]
        };

        if (!useChapter) habitData.name = name;
        if (scheduledDate.getMonth() + 1 === viewMonth && scheduledDate.getFullYear() === viewYear) {
          habitData.progress[scheduledDate.getDate() - 1] = data.duration_type === "DAILY";
        }

        const { error } = await supabase.from("study_habits").insert(habitData);
        if (error) throw error;
      }
      console.log("✅ [MobileAddTask] Manifestation Successful");
      setToast({ type: "success", message: "Schedule updated!" });
      setShowReward(true);
      setTimeout(() => { 
        setShowReward(false);
        onClose(); 
        onRefresh?.(); 
      }, 2000);
    } catch (e: any) {
      console.error("❌ [MobileAddTask] Manifestation Failed:", e);
      setToast({ type: "error", message: e.message || "System error. Try again." });
    }
  };

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center">
      {/* Backdrop with lush fade */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-700 ease-premium ${isAnimatingOut ? "animate-out fade-out" : "animate-in fade-in"}`} 
        onClick={onClose} 
      />

      {/* Action Sheet Container with buttery slide */}
      <div className={`relative w-full h-[85vh] liquid-glass flex flex-col rounded-t-[3rem] shadow-ambient-2xl overflow-hidden animate-reveal transition-all duration-850 ease-premium ${isAnimatingOut ? "animate-out slide-out-to-bottom-full" : "animate-in slide-in-from-bottom-full"}`}>
        
        {/* Drag Handle Ritual */}
        <div className="pt-4 pb-2 shrink-0 cursor-grab active:cursor-grabbing" onClick={onClose}>
          <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto" />
        </div>

        {/* ── Welcome Workflow (Step 1) ────────────────────────────────────── */}
        {showWelcome ? (
          <div className="flex-1 flex flex-col px-10 pt-4 pb-10 overflow-y-auto custom-scrollbar-hide animate-in fade-in zoom-in-95 duration-700">
             <div className="mb-8 text-center">
              <h1 className="text-3xl font-black tracking-tighter text-on-surface leading-tight">
                Design Your <br />
                <span className="text-primary italic">Ritual Flow</span>
              </h1>
              <p className="text-[10px] font-technical uppercase tracking-[0.4em] text-primary mt-6">Strategic Planning Protocol</p>
            </div>

            <div className="space-y-6 flex-1">
              {[
                { icon: <Book size={18} />, title: "Custom Durations", desc: "Flexibly set tasks for Today, Weekly, or Monthly cycles." },
                { icon: <RefreshCw size={18} />, title: "Auto-Calculated Cycles", desc: "End dates computed automatically for consistency." },
                { icon: <Sparkles size={18} />, title: "Syllabus Integration", desc: "Native support for exam-specific chapter rituals." },
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="size-10 rounded-2xl bg-white/5 flex items-center justify-center text-primary shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-on-surface mb-0.5">{feature.title}</h3>
                    <p className="text-[10px] text-on-surface-variant/60 font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button 
                onClick={handleProceedWelcome}
                className="w-full py-5 bg-primary text-on-primary rounded-[2rem] font-black uppercase text-[10px] tracking-[0.4em] transition-all shadow-xl shadow-primary/20 active:scale-95 flex items-center justify-center gap-3"
              >
                Enter Creator Workspace <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* ── Mobile Header ────────────────────────────────────────────────── */}
            <header className="px-8 pt-4 pb-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-black tracking-tighter text-on-surface leading-none">
                  {editingHabitId ? "Refine Ritual" : "Open Ritual"}
                </h2>
                <p className="text-[9px] font-technical uppercase tracking-[0.3em] text-primary mt-2">
                  {editingHabitId ? "Optimize Patterns" : "Design Persistence"}
                </p>
              </div>
              <button onClick={onClose} className="size-12 rounded-full bg-white/5 text-on-surface-variant flex items-center justify-center active:scale-95 transition-transform">
                <X className="size-6" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-8 pb-32 space-y-8 custom-scrollbar scroll-smooth">
              {/* Toast Placeholder mapped in Refined style */}
              {toast && (
                <div className="sticky top-0 z-50 py-2 animate-reveal">
                  <div className={`flex items-center gap-2 px-4 py-3 rounded-2xl border text-[10px] font-black uppercase tracking-widest bg-black/40 backdrop-blur-xl ${
                    toast.type === 'success' ? 'border-green-500/20 text-green-400' : 
                    toast.type === 'loading' ? 'border-primary/20 text-primary' : 'border-red-500/20 text-red-400'
                  }`}>
                    {toast.type === 'loading' ? <Loader className="animate-spin" size={14} /> : <Zap size={14} />}
                    {toast.message}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* 1. DURATION TOGGLE */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2 flex items-center gap-2">
                    <Calendar size={12} /> Cycle Duration
                  </label>
                  <div className="flex bg-black/20 p-1.5 rounded-3xl">
                    {["DAILY", "WEEKLY", "MONTHLY", "CUSTOM"].map((d) => (
                      <button 
                        key={d}
                        type="button" 
                        onClick={() => setValue("duration_type", d as any)} 
                        className={`flex-1 py-3 text-[9px] font-black uppercase tracking-widest rounded-2xl transition-all duration-500 ${
                          durationType === d ? "bg-primary text-on-primary shadow-lg" : "text-on-surface/40"
                        }`}
                      >
                        {d === "DAILY" ? "Today" : d.toLowerCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. SOURCE TOGGLE */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-2">Protocol Source</label>
                  <div className="flex bg-black/20 p-1.5 rounded-3xl">
                    <button type="button" onClick={() => setUseChapter(false)} className={`flex-1 py-3 text-[9px] font-black uppercase rounded-2xl transition-all duration-500 ${!useChapter ? "bg-primary text-on-primary shadow-lg" : "text-on-surface/40"}`}>Custom Task</button>
                    <button type="button" onClick={() => setUseChapter(true)} className={`flex-1 py-3 text-[9px] font-black uppercase rounded-2xl transition-all duration-500 ${useChapter ? "bg-primary text-on-primary shadow-lg" : "text-on-surface/40"}`}>Syllabus Chapter</button>
                  </div>
                </div>

                {/* 3. NAME / CHAPTER */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-2">
                    {useChapter ? "Select Chapter Segment" : "Ritual Identifier"}
                  </label>
                  {useChapter ? (
                    <select {...register("chapter_id", { required: useChapter })} className="w-full bg-white/5 border border-white/5 px-6 py-5 rounded-[2rem] text-sm font-bold text-on-surface outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                      <option value="">-- Choose Segment --</option>
                      {chapters.map(c => <option key={c.id} value={c.id} className="bg-surface">{c.name}</option>)}
                    </select>
                  ) : (
                    <input
                      {...register("habit", { required: !useChapter })}
                      placeholder="e.g. MCQ Practice..."
                      className="w-full bg-white/5 border border-white/5 px-6 py-5 rounded-[2rem] text-sm font-bold text-on-surface outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  )}
                </div>

                {/* 4. TEMPORAL WINDOW */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-2">Start Epoch</label>
                    <input type="time" {...register("start_time")} className="w-full bg-white/5 border border-white/5 px-6 py-4 rounded-3xl text-sm font-bold text-on-surface outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-2">End Epoch</label>
                    <input type="time" {...register("end_time")} className="w-full bg-white/5 border border-white/5 px-6 py-4 rounded-3xl text-sm font-bold text-on-surface outline-none" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-2">Calendar Window</label>
                  <div className="flex gap-4">
                    <input type="date" {...register("date", { required: true })} className="flex-1 bg-white/5 border border-white/5 px-6 py-4 rounded-3xl text-sm font-bold text-on-surface outline-none" />
                    {computedEndDate && (
                      <div className="flex-1 bg-primary/5 border border-primary/20 px-6 py-4 rounded-3xl text-[10px] font-black text-primary flex items-center justify-center gap-2">
                        <ArrowRight size={12} /> {computedEndDate}
                      </div>
                    )}
                  </div>
                </div>

                {/* 5. PERSISTENCE SYNC */}
                {connected && (
                  <div className="p-6 bg-white/5 rounded-[2.5rem] border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`size-12 rounded-2xl flex items-center justify-center transition-all ${watch("syncToCalendar") ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/20'}`}>
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-on-surface">Calendar Sync</p>
                        <p className="text-[8px] font-technical uppercase text-on-surface-variant/40 mt-1">Identity Connected</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" {...register("syncToCalendar")} className="sr-only peer" />
                      <div className="w-14 h-7 rounded-full bg-white/10 peer-checked:bg-primary after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-7" />
                    </label>
                  </div>
                )}
              </form>
            </div>

            {/* Sticky Action Zone */}
            <footer className="absolute bottom-0 inset-x-0 p-8 bg-linear-to-t from-surface to-transparent pt-12">
               <button
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="w-full py-6 bg-primary text-on-primary rounded-[2.5rem] font-black uppercase text-[10px] tracking-[0.4em] transition-all shadow-2xl shadow-primary/40 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? <Loader className="animate-spin" size={18} /> : (editingHabitId ? "Update Manifestation" : "Establish Ritual")}
              </button>
            </footer>
          </>
        )}

        {/* Reward Overlay */}
        {showReward && (
          <div className="absolute inset-0 z-[110] bg-surface/90 backdrop-blur-xl flex flex-col items-center justify-center text-center p-10 animate-in fade-in duration-500">
            <div className="size-24 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6 animate-bounce">
              <Sparkles size={48} />
            </div>
            <h3 className="text-3xl font-black tracking-tighter text-on-surface italic mb-2">Ritual Locked</h3>
            <p className="text-[10px] font-technical uppercase tracking-[0.4em] text-primary">+50 XP Initialized</p>
            <p className="text-xs text-on-surface-variant/60 mt-4 leading-relaxed">Your study manifest has been updated. The path is set.</p>
          </div>
        )}
      </div>
    </div>
  );
};
