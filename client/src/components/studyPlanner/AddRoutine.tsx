import { Loader, X, Sparkles, CheckCircle2, AlertCircle, Tag, Calendar, ChevronLeft, Book, RefreshCw } from "lucide-react";
import { supabase } from "../../utils/supabase";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import { updateUserLocally } from "../../slice/userSlice";
import { useForm, Controller } from "react-hook-form";
import { useGoogleCalendar } from "../../utils/useGoogleCalender";
import { getChaptersByExamID } from "../../services/examService";
import { useEffect, useState } from "react";
import { TimePicker } from "./TimePicker";
import { getLocalDateString } from "../../utils/getLocaleDateString";
import { parseRoutineWithAI } from "../../utils/parseRoutineWithAI";
import { useNavigate, useParams, useOutletContext } from "react-router";
import { type Habit } from "./types";

// Define the context shape received from StudyPlanner
interface PlannerContext {
  viewMonth: number;
  viewYear: number;
  initialHabits: Habit[];
  examId: string;
  onRefresh: () => void;
  onRequestConnection: () => void;
  initialProgress: Record<string, boolean[]>;
}

type ToastType = "success" | "error" | "info" | "loading";

interface Toast {
  type: ToastType;
  message: string;
}

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

// ── Toast component ────────────────────────────────────────────────────────
const ToastBanner = ({ toast }: { toast: Toast | null }) => {
  if (!toast) return null;

  const styles: Record<ToastType, { bg: string; text: string; border: string; icon: React.ReactNode }> = {
    success: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200", icon: <CheckCircle2 size={14} className="text-green-600 shrink-0" /> },
    error: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200", icon: <AlertCircle size={14} className="text-red-600 shrink-0" /> },
    info: { bg: "bg-primary-container/10", text: "text-primary", border: "border-primary/20", icon: <Sparkles size={14} className="text-primary shrink-0" /> },
    loading: { bg: "bg-surface-container-low", text: "text-on-surface-variant/60", border: "border-on-surface/5", icon: <Loader size={14} className="animate-spin text-on-surface-variant shrink-0" /> },
  };

  const s = styles[toast.type];
  return (
    <div className={`flex items-center gap-2 px-4 py-3 rounded-2xl border text-[10px] font-black uppercase tracking-widest ${s.bg} ${s.text} ${s.border} transition-all duration-300 animate-reveal`}>
      {s.icon}
      <span>{toast.message}</span>
    </div>
  );
};

const priorityMeta = {
  HIGH: { bg: "bg-red-100", text: "text-red-700", dot: "bg-red-500" },
  MEDIUM: { bg: "bg-amber-100", text: "text-amber-700", dot: "bg-amber-500" },
  LOW: { bg: "bg-surface-container-high", text: "text-slate-600", dot: "bg-slate-400" },
};

export const AddRoutine = () => {
  const { habitId: editingHabitId } = useParams();
  const navigate = useNavigate();
  const context = useOutletContext<PlannerContext>();

  // Use context or defaults if for some reason context is missing (though it shouldn't be)
  const {
    viewMonth,
    viewYear,
    initialHabits,
    examId,
    onRefresh,
    onRequestConnection,
    initialProgress: incomingProgress
  } = context || {
    viewMonth: new Date().getMonth() + 1,
    viewYear: new Date().getFullYear(),
    initialHabits: [],
    examId: "",
    onRefresh: () => { },
    onRequestConnection: () => { },
    initialProgress: {}
  };

  const { user, profile } = useSelector((state: RootState) => state.user || { user: null, profile: null });
  const dispatch = useDispatch<AppDispatch>();
  const { connected, addEvent, editEvent } = useGoogleCalendar();

  const [toast, setToast] = useState<Toast | null>(null);
  const [showWelcome, setShowWelcome] = useState<boolean>(false);

  useEffect(() => {
    // const seen = localStorage.getItem("arumind_planner_welcome_seen");
    setShowWelcome(true);
  }, []);

  const handleProceed = () => {
    localStorage.setItem("arumind_planner_welcome_seen", "true");
    setShowWelcome(false);
  };
  const [aiInput, setAiInput] = useState("");
  const [aiParsing, setAiParsing] = useState(false);
  const [aiFilled, setAiFilled] = useState(false);
  const [computedEndDate, setComputedEndDate] = useState<string>("");
  const [chapters, setChapters] = useState<any[]>([]);
  const [useChapter, setUseChapter] = useState(false);
  const unlockPastDays = false;

  const { reset, register, handleSubmit, setValue, watch, control, formState: { isSubmitting, errors } } = useForm<FormValues>({
    defaultValues: { priority: "MEDIUM", start_time: "09:00", end_time: "10:00", duration_type: "MONTHLY", syncToCalendar: connected },
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

  useEffect(() => {
    // Force present date when switching to DAILY (if not editing an existing habit)
    if (durationType === "DAILY" && !editingHabitId) {
      setValue("date", getLocalDateString(new Date()));
    }
  }, [durationType, editingHabitId, setValue]);

  const showToast = (type: ToastType, message: string, duration = 3000) => {
    setToast({ type, message });
    if (type !== "loading") setTimeout(() => setToast(null), duration);
  };

  useEffect(() => {
    if (examId) {
      getChaptersByExamID(examId).then((data) => { setChapters(data || []); });
    }
  }, [examId]);

  useEffect(() => {
    if (editingHabitId) {
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

        if (h.chapter_id) {
          setValue("chapter_id", h.chapter_id);
          setUseChapter(true);
        }
      }
    } else {
      const now = new Date();
      const isCurrentView = now.getMonth() + 1 === viewMonth && now.getFullYear() === viewYear;
      const initialDay = isCurrentView ? now.getDate() : 1;

      reset({
        priority: "MEDIUM",
        duration_type: "MONTHLY",
        syncToCalendar: connected,
        date: getLocalDateString(new Date(viewYear, viewMonth - 1, initialDay))
      });
    }
  }, [editingHabitId, initialHabits, reset, setValue, connected, viewYear, viewMonth, incomingProgress]);

  const handleAIParse = async () => {
    if (!aiInput.trim()) { showToast("error", "Please describe your routine first"); return; }
    setAiParsing(true);
    setAiFilled(false);
    showToast("loading", "AI is reading your task...");
    try {
      const result = await parseRoutineWithAI(aiInput);
      if (result.habit) setValue("habit", result.habit);
      if (result.priority) setValue("priority", result.priority as any);
      if (result.start_time) setValue("start_time", result.start_time);
      if (result.end_time) setValue("end_time", result.end_time);
      setAiFilled(true);
      showToast("success", "Fields auto-filled from your description!");
    } catch {
      showToast("error", "AI unavailable — please fill fields manually");
    } finally { setAiParsing(false); }
  };

  async function onSubmit(data: FormValues) {
    let name = data.habit?.trim() || "";
    if (useChapter && data.chapter_id) {
      const ch = chapters.find(c => c.id === data.chapter_id);
      if (ch) name = ch.name;
    }
    if (!user?.id || !name) { showToast("error", "Routine name or chapter is required"); return; }

    showToast("loading", editingHabitId ? "Updating task..." : "Adding task...");

    try {
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

        if (data.date) {
          const newDate = new Date(data.date);
          const newDayIdx = newDate.getDate() - 1;
          const newMonth = newDate.getMonth() + 1;
          const newYear = newDate.getFullYear();
          const newProgress = Array(31).fill(false);
          if (data.duration_type === "DAILY") newProgress[newDayIdx] = true;

          updateData.scheduled_date = newDate.toISOString().split('T')[0];
          if (data.duration_type === "CUSTOM" && data.end_date) {
            updateData.scheduled_end_date = new Date(data.end_date).toISOString().split('T')[0];
          } else {
            updateData.scheduled_end_date = null;
          }
          updateData.month = newMonth;
          updateData.year = newYear;
          updateData.progress = newProgress;
        }

        const { error } = await supabase.from("study_habits").update(updateData).eq("id", editingHabitId);
        if (error) throw error;

        if (connected && data.syncToCalendar) {
          const { data: prof } = await supabase.from("profiles").select("google_calendar_event_ids").eq("id", user.id).single();
          const gcId = prof?.google_calendar_event_ids?.[editingHabitId];
          if (gcId) {
            const execDate = data.duration_type === "DAILY" && data.date ? data.date : new Date().toISOString().split('T')[0];
            const [sh, sm] = data.start_time.split(':').map(Number);
            const [eh, em] = data.end_time.split(':').map(Number);
            const startDT = new Date(execDate); startDT.setHours(sh, sm, 0, 0);
            const endDT = new Date(execDate); endDT.setHours(eh, em, 0, 0);
            await editEvent(gcId, {
              summary: useChapter ? `Chapter: ${name}` : name,
              description: useChapter ? `Scheduled Chapter for ${name}. Odisha Exam Prep.` : `OPSC Study - ${data.priority} priority`,
              start: { dateTime: startDT.toISOString(), timeZone: "Asia/Kolkata" },
              end: { dateTime: endDT.toISOString(), timeZone: "Asia/Kolkata" },
            });
            showToast("info", "Google Calendar event updated too!");
          }
        }
        showToast("success", `"${name}" updated successfully!`);
      } else {
        if (!profile?.planner_start_date) {
          await supabase.from("profiles").update({ planner_start_date: new Date().toISOString() }).eq("id", user.id);
          dispatch(updateUserLocally({ planner_start_date: new Date().toISOString() }));
        }
        const scheduledDate = data.date ? new Date(data.date) : new Date();
        const habitData: any = {
          user_id: user.id,
          priority: data.priority,
          start_time: data.start_time,
          end_time: data.end_time,
          progress: Array(31).fill(false),
          month: viewMonth,
          year: viewYear,
          exam_id: examId,
          chapter_id: useChapter ? data.chapter_id : null,
          is_recurring: data.duration_type !== "DAILY",
          duration_type: data.duration_type,
          scheduled_date: scheduledDate.toISOString().split('T')[0]
        };

        if (data.duration_type === "CUSTOM" && data.end_date) {
          habitData.scheduled_end_date = new Date(data.end_date).toISOString().split('T')[0];
        }

        if (!useChapter) habitData.name = name;
        const isTargetMonth = scheduledDate.getMonth() + 1 === viewMonth && scheduledDate.getFullYear() === viewYear;
        if (isTargetMonth && data.duration_type === "DAILY") habitData.progress[scheduledDate.getDate() - 1] = true;

        const { data: newHabit, error } = await supabase.from("study_habits").insert(habitData).select().single();
        if (error) throw error;

        if (connected && data.syncToCalendar && newHabit) {
          const [sh, sm] = data.start_time.split(':').map(Number);
          const [eh, em] = data.end_time.split(':').map(Number);
          const todayStr = new Date().toISOString().split('T')[0];
          const startDT = new Date(todayStr); startDT.setHours(sh, sm, 0, 0);
          const endDT = new Date(todayStr); endDT.setHours(eh, em, 0, 0);
          const event = await addEvent({ summary: name, description: `OPSC Study - ${data.priority} priority`, start: { dateTime: startDT.toISOString(), timeZone: "Asia/Kolkata" }, end: { dateTime: endDT.toISOString(), timeZone: "Asia/Kolkata" } });
          if (event?.id) {
            const newIds = { ...profile?.google_calendar_event_ids, [newHabit.id]: event.id };
            await supabase.from("profiles").update({ google_calendar_event_ids: newIds }).eq("id", user.id);
            dispatch(updateUserLocally({ google_calendar_event_ids: newIds }));
          }
        }
        showToast("success", `"${name}" added to your program!`);
      }
      reset(); setAiInput(""); setAiFilled(false);
      setTimeout(() => {
        onRefresh();
        navigate(-1);
      }, 1200);
    } catch (err) { console.error(err); showToast("error", "Something went wrong. Please try again."); }
  }

  if (showWelcome) {
    return (
      <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-500">
        <div className="w-full max-w-md h-[85vh] liquid-glass flex flex-col rounded-t-[3rem] animate-in slide-in-from-bottom-full duration-700 ease-premium overflow-hidden">
          <div className="h-1.5 w-12 bg-white/20 rounded-full mx-auto mt-4 shrink-0" />
          
          <div className="flex-1 flex flex-col px-10 pt-8 pb-10 overflow-y-auto custom-scrollbar">
            <div className="mb-10 text-center">
              <h1 className="text-4xl font-black tracking-tighter text-on-surface leading-tight">
                Design Your <br />
                <span className="text-primary italic">Ritual Flow</span>
              </h1>
              <p className="text-[10px] font-technical uppercase tracking-[0.4em] text-primary mt-6">
                Strategic Planning Protocol
              </p>
            </div>

            <div className="space-y-8 flex-1">
              {[
                { icon: <Book size={20} />, title: "Custom Durations", desc: "Flexibly set tasks for Today, Weekly, or Monthly cycles." },
                { icon: <RefreshCw size={20} />, title: "Auto-Calculated Cycles", desc: "End dates computed automatically for consistency." },
                { icon: <Sparkles size={20} />, title: "Syllabus Integration", desc: "Native support for exam-specific chapter rituals." },
                { icon: <Calendar size={20} />, title: "Cloud Manifestation", desc: "Bi-directional sync with Google Calendar." },
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-on-surface mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[11px] text-on-surface-variant/60 font-medium leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button 
                onClick={handleProceed}
                className="w-full py-6 bg-primary text-on-primary rounded-[2.5rem] font-black uppercase text-[10px] tracking-[0.4em] transition-all shadow-xl shadow-primary/20 active:scale-95 flex items-center justify-center gap-3 group"
              >
                Enter Creator Workspace <ArrowRight size={16} />
              </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-500">
      <div className="w-full max-w-md h-[85vh] liquid-glass flex flex-col rounded-t-[3rem] animate-in slide-in-from-bottom-full duration-700 ease-premium overflow-hidden">
        <div className="h-1.5 w-12 bg-white/20 rounded-full mx-auto mt-4 shrink-0" />

        <div className="flex items-center justify-between px-8 pt-6 pb-6">
          <div>
            <h2 className="text-2xl font-black tracking-tighter text-on-surface leading-none">
              {editingHabitId ? "Refine Ritual" : "Open Ritual"}
            </h2>
            <p className="text-[9px] font-technical uppercase tracking-[0.3em] text-primary mt-2">
              {editingHabitId ? "Optimize Patterns" : "Design Persistence"}
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="size-12 rounded-full bg-white/5 text-on-surface-variant hover:text-on-surface transition-all duration-300 flex items-center justify-center"
          >
            <X className="size-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 pb-10 space-y-8 custom-scrollbar scroll-smooth">
          <ToastBanner toast={toast} />

          {/* DURATION TOGGLE */}
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

          {/* SOURCE TOGGLE */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-2">Protocol Source</label>
            <div className="flex bg-black/20 p-1.5 rounded-3xl">
              <button type="button" onClick={() => setUseChapter(false)} className={`flex-1 py-3 text-[9px] font-black uppercase tracking-widest rounded-2xl transition-all duration-500 ${!useChapter ? "bg-primary text-on-primary shadow-lg" : "text-on-surface/40"}`}>Custom Task</button>
              <button type="button" onClick={() => setUseChapter(true)} className={`flex-1 py-3 text-[9px] font-black uppercase tracking-widest rounded-2xl transition-all duration-500 ${useChapter ? "bg-primary text-on-primary shadow-lg" : "text-on-surface/40"}`}>Syllabus Chapter</button>
            </div>
          </div>

          {/* NAME / CHAPTER SECTION */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-2">
              {useChapter ? "Select Chapter Segment" : "Ritual Identifier"}
            </label>
            {useChapter ? (
              <select {...register("chapter_id", { required: useChapter ? "Chapter is required" : false })} className="w-full bg-white/5 border border-white/5 px-6 py-5 rounded-[2rem] text-sm font-bold text-on-surface outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                <option value="">-- Choose Segment --</option>
                {chapters.map(c => <option key={c.id} value={c.id} className="bg-surface">{c.name}</option>)}
              </select>
            ) : (
              <input
                {...register("habit", { required: !useChapter ? "Task name is required" : false, minLength: { value: 2, message: "At least 2 characters" } })}
                placeholder="e.g. MCQ Practice: Ancient History..."
                className={`w-full bg-white/5 border border-white/5 px-6 py-5 rounded-[2rem] text-sm font-bold text-on-surface outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.habit ? "border-red-500" : ""}`}
              />
            )}
          </div>

          {/* TIME SELECTION */}
          <div className="grid grid-cols-2 gap-6">
            <Controller name="start_time" control={control} render={({ field }) => (
              <TimePicker label="Start Epoch" value={field.value} onChange={field.onChange} />
            )} />
            <Controller name="end_time" control={control} render={({ field }) => (
              <TimePicker label="End Epoch" value={field.value} onChange={field.onChange} />
            )} />
          </div>

          {/* DATE SELECTION */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-2">Temporal Window</label>
            <div className="flex items-center gap-4">
              <input
                type="date"
                {...register("date", { required: true })}
                className="flex-1 bg-white/5 border border-white/5 px-6 py-5 rounded-[2rem] text-sm font-technical font-black text-on-surface outline-none focus:ring-2 focus:ring-primary/20"
              />
              {computedEndDate && (
                <div className="flex-1 bg-primary/5 border border-primary/20 px-6 py-5 rounded-[2rem] text-sm font-technical font-black text-primary flex items-center justify-center gap-2">
                  <ArrowRight size={14} /> {computedEndDate}
                </div>
              )}
            </div>
          </div>

          {/* GOOGLE CALENDAR SYNC */}
          <div className="p-6 bg-white/5 rounded-[2.5rem] border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`size-12 rounded-2xl flex items-center justify-center transition-all ${connected ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/20'}`}>
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-on-surface uppercase tracking-widest">Calendar Sync</p>
                <p className="text-[8px] text-on-surface-variant font-technical uppercase mt-0.5 tracking-wider">
                  {connected ? "Identity Linked" : "Cloud Disconnected"}
                </p>
              </div>
            </div>
            {connected ? (
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" {...register("syncToCalendar")} className="sr-only peer" />
                <div className="w-14 h-7 rounded-full transition-all bg-white/10 peer-checked:bg-primary after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-7"></div>
              </label>
            ) : (
              <button type="button" onClick={onRequestConnection} className="px-5 py-2.5 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-primary hover:bg-primary hover:text-on-primary transition-all">Link</button>
            )}
          </div>

          <button
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="w-full py-6 bg-primary text-on-primary rounded-[2.5rem] font-black uppercase text-[10px] tracking-[0.4em] transition-all shadow-2xl shadow-primary/40 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isSubmitting ? (
              <Loader size={18} className="animate-spin" />
            ) : (
              <>{editingHabitId ? "Update Manifestation" : "Establish Ritual"} <Sparkles size={16} /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper constant for manual ArrowRight icon since it's not imported at top
const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
