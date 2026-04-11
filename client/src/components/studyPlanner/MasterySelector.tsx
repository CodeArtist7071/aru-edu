import React, { useState, useEffect, useMemo } from 'react';
import { Search, ChevronRight, Book, BookOpen, Layers, Plus, CheckCircle2, X, Clock, Calendar, ChevronLeft, Loader, Sparkles, AlertCircle } from 'lucide-react';
import { supabase } from "../../utils/supabase";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import { updateUserLocally } from "../../slice/userSlice";
import { useGoogleCalendar } from '../../utils/useGoogleCalender';
import { getChaptersByExamID } from '../../services/examService';
import { useNavigate, useOutletContext } from "react-router";
import { type Habit, type Chapter } from "./types";
import { TimePicker } from "./TimePicker";

interface PlannerContext {
  viewMonth: number;
  viewYear: number;
  initialHabits: Habit[];
  examId: string;
  onRefresh: () => void;
  onRequestConnection: () => void;
}

type ToastType = "success" | "error" | "info" | "loading";
interface Toast { type: ToastType; message: string; }

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
      {s.icon} <span>{toast.message}</span>
    </div>
  );
};

export default function MasterySelector() {
  const navigate = useNavigate();
  const context = useOutletContext<PlannerContext>();
  const { viewMonth, viewYear, initialHabits, examId, onRefresh, onRequestConnection } = context || {
    viewMonth: new Date().getMonth() + 1,
    viewYear: new Date().getFullYear(),
    initialHabits: [],
    examId: "",
    onRefresh: () => {},
    onRequestConnection: () => {}
  };

  const { user, profile } = useSelector((state: RootState) => state.user || { user: null, profile: null });
  const dispatch = useDispatch<AppDispatch>();
  const { connected, addEvent } = useGoogleCalendar();

  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  
  const [testDate, setTestDate] = useState(new Date().toISOString().split('T')[0]);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("10:00");
  const [syncToCalendar, setSyncToCalendar] = useState(connected);
  const [toast, setToast] = useState<Toast | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const existingIds = useMemo(() => 
    initialHabits.filter(h => h.is_mastery).map(h => h.chapter_id!), 
  [initialHabits]);

  useEffect(() => { setSyncToCalendar(connected); }, [connected]);

  const showToast = (type: ToastType, message: string, duration = 3000) => {
    setToast({ type, message });
    if (type !== "loading") setTimeout(() => setToast(null), duration);
  };

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        setLoading(true);
        const data = await getChaptersByExamID(examId);
        setChapters(data as any);
      } catch (err) { console.error(err); } finally { setLoading(false); }
    };
    if (examId) fetchChapters();
  }, [examId]);

  const filtered = chapters.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.subjects?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const grouped = filtered.reduce((acc, cur) => {
    const subName = cur.subjects?.name || "Other";
    if (!acc[subName]) acc[subName] = [];
    acc[subName].push(cur);
    return acc;
  }, {} as Record<string, Chapter[]>);

  const handleManifest = async () => {
    if (!user?.id || !selectedChapter) return;
    if (endTime <= startTime) { showToast("error", "End time must be after start time"); return; }

    setIsSubmitting(true);
    showToast("loading", "Manifesting Mastery Ritual...");

    try {
      const scheduledDate = new Date(testDate);
      const m = scheduledDate.getMonth() + 1;
      const y = scheduledDate.getFullYear();
      const progressArr = Array(31).fill(false);
      progressArr[scheduledDate.getDate() - 1] = true;

      const masteryData = {
        user_id: user.id,
        chapter_id: selectedChapter.id,
        exam_id: examId,
        priority: "HIGH",
        start_time: startTime,
        end_time: endTime,
        month: m,
        year: y,
        scheduled_date: testDate,
        progress: progressArr,
        is_recurring: false
      };

      const { data, error } = await supabase.from("user_mastery").insert(masteryData).select().single();
      if (error) throw error;

      if (syncToCalendar && connected && data) {
         const [sh, sm] = startTime.split(':').map(Number);
         const [eh, em] = endTime.split(':').map(Number);
         const startDT = new Date(testDate); startDT.setHours(sh, sm, 0, 0);
         const endDT = new Date(testDate); endDT.setHours(eh, em, 0, 0);

         const event = await addEvent({
           summary: `Test: ${selectedChapter.name}`,
           description: `Syllabus Mastery Test for ${selectedChapter.name}. Odisha Exam Prep.`,
           start: { dateTime: startDT.toISOString(), timeZone: "Asia/Kolkata" },
           end: { dateTime: endDT.toISOString(), timeZone: "Asia/Kolkata" },
         });

         if (event?.id) {
           const newIds = { ...profile?.google_calendar_event_ids, [data.id]: event.id };
           await supabase.from("profiles").update({ google_calendar_event_ids: newIds }).eq("id", user.id);
           dispatch(updateUserLocally({ google_calendar_event_ids: newIds }));
         }
      }

      showToast("success", `Mastery for "${selectedChapter.name}" manifested!`);
      setTimeout(() => { onRefresh(); navigate(-1); }, 1200);
    } catch (err: any) {
      showToast("error", `Manifestation failed: ${err.message}`);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full bg-surface shadow-ambient-lg border-l border-on-surface/5 flex flex-col animate-reveal-right overflow-hidden md:rounded-[2.5rem]">
      <div className="h-1 w-full bg-linear-to-r from-green-500 via-emerald-400 to-green-600" />
      
      <div className="flex items-center justify-between px-8 pt-6 pb-6">
        <div>
          <h2 className="text-2xl font-black tracking-tighter text-on-surface leading-none">Syllabus Mastery</h2>
          <p className="text-[9px] font-technical uppercase tracking-[0.3em] text-on-surface-variant opacity-40 mt-2">Targeted Chapter Rituals</p>
        </div>
        <button onClick={() => navigate(-1)} className="size-10 rounded-2xl bg-surface-container-high/40 text-on-surface-variant hover:bg-surface-container-highest hover:text-primary transition-all duration-300 flex items-center justify-center group">
          <ChevronLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-8 pb-10 space-y-6 custom-scrollbar scroll-smooth">
        <ToastBanner toast={toast} />

        {selectedChapter ? (
           /* --- SCHEDULING FLOW --- */
           <div className="space-y-8 animate-reveal">
              <div className="bg-surface-container-low border border-on-surface/5 rounded-[2.5rem] p-6 flex items-center gap-5 shadow-inner">
                <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-sm border border-primary/5">
                  <BookOpen size={28} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-primary opacity-60">Syllabus Manifestation</p>
                  <h4 className="text-lg font-black text-on-surface leading-tight mt-1">{selectedChapter.name}</h4>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary opacity-60 ml-2">Scheduled Manifestation</label>
                  <input 
                    type="date" 
                    value={testDate}
                    onChange={(e) => setTestDate(e.target.value)}
                    className="w-full bg-surface-container-low px-6 py-5 rounded-4xl text-sm font-technical font-black text-on-surface border-none outline-none focus:ring-2 focus:ring-primary/10 shadow-sm transition-all" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <TimePicker label="Ascension" value={startTime} onChange={setStartTime} />
                  <TimePicker label="Closure" value={endTime} onChange={setEndTime} />
                </div>

                {/* Google Sync Ritual */}
                <div className="p-8 bg-linear-to-br from-surface-container-low to-surface rounded-[3rem] border border-on-surface/5 flex items-center justify-between shadow-inner">
                   <div className="flex items-center gap-5">
                     <div className={`size-14 rounded-2xl flex items-center justify-center transition-all ${connected ? 'bg-primary/10 text-primary shadow-sm' : 'bg-surface-container-high text-on-surface-variant/40'}`}>
                       <Calendar size={24} />
                     </div>
                     <div>
                        <p className="text-xs font-black text-on-surface tracking-widest uppercase">Calendar Sync</p>
                        <p className="text-[9px] text-on-surface-variant font-medium mt-1 font-technical uppercase tracking-widest leading-loose">
                          {connected ? "Manifested in your Cloud" : "Authentication Pending"}
                        </p>
                     </div>
                   </div>
                   {connected ? (
                       <label className="relative inline-flex items-center cursor-pointer group">
                          <input type="checkbox" checked={syncToCalendar} onChange={(e) => setSyncToCalendar(e.target.checked)} className="sr-only peer" />
                          <div className="w-16 h-8 rounded-full transition-all bg-surface-container-highest peer-checked:bg-primary after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-8 shadow-inner"></div>
                       </label>
                   ) : (
                       <button type="button" onClick={() => onRequestConnection && onRequestConnection()} className="px-6 py-3 bg-surface-container-highest rounded-full text-[9px] font-technical font-black uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all">Link</button>
                   )}
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setSelectedChapter(null)} className="flex-1 py-6 bg-surface-container-high text-on-surface-variant rounded-[3rem] font-black uppercase text-xs tracking-widest transition-all hover:bg-surface-container-highest active:scale-95">Back</button>
                <button 
                  onClick={handleManifest} 
                  disabled={isSubmitting}
                  className="flex-2 py-6 bg-linear-to-r from-green-600 to-emerald-500 text-white rounded-[3rem] font-black uppercase text-xs tracking-[0.3em] transition-all shadow-xl shadow-green-500/20 active:scale-95 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? <Loader className="animate-spin" size={18} /> : <>Commence Mastery <Plus size={16} /></>}
                </button>
              </div>
           </div>
        ) : (
           /* --- SELECTION FLOW --- */
           <div className="space-y-6 animate-reveal">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 size-5 text-on-surface-variant opacity-40 group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Scan syllabus layers..."
                  className="w-full pl-16 pr-6 py-5 bg-surface-container-low border border-on-surface/5 rounded-4xl text-sm font-bold text-on-surface placeholder:text-on-surface-variant/30 outline-none focus:ring-4 focus:ring-primary/5 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {loading ? (
                 <div className="py-20 flex flex-col items-center justify-center gap-4 opacity-40">
                   <div className="size-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Deciphering Syllabus Lattice</p>
                 </div>
              ) : Object.keys(grouped).length === 0 ? (
                 <div className="py-20 text-center space-y-4">
                   <div className="text-on-surface-variant/20 inline-block"><Book size={48} /></div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">No matching subjects manifested</p>
                 </div>
              ) : (
                 Object.entries(grouped).map(([subject, subChapters]) => (
                   <div key={subject} className="space-y-4">
                      <div className="flex items-center gap-3 ml-2">
                        <div className="size-1 w-6 bg-primary/20 rounded-full" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary opacity-60">{subject}</span>
                      </div>
                      <div className="grid gap-3">
                        {subChapters.map(chapter => {
                          const isAdded = existingIds.includes(chapter.id);
                          return (
                            <button
                              key={chapter.id}
                              onClick={() => !isAdded && setSelectedChapter(chapter)}
                              disabled={isAdded}
                              className={`w-full p-6 flex items-center justify-between rounded-[2.5rem] border transition-all duration-500 overflow-hidden relative group ${isAdded ? 'bg-surface-container-high/40 border-transparent opacity-60' : 'bg-surface border-on-surface/5 hover:border-primary/20 hover:bg-surface-container-low hover:shadow-ambient-md'}`}
                            >
                              <div className="flex items-center gap-5">
                                <div className={`size-12 rounded-2xl flex items-center justify-center transition-all ${isAdded ? 'bg-surface-container-high text-on-surface-variant/40' : 'bg-primary/5 text-primary group-hover:scale-110 group-hover:bg-primary/10'}`}>
                                   {isAdded ? <CheckCircle2 size={20} /> : <BookOpen size={20} />}
                                </div>
                                <div className="text-left">
                                  <h5 className="text-sm font-bold text-on-surface leading-snug">{chapter.name}</h5>
                                  {isAdded ? <span className="text-[9px] font-black uppercase tracking-widest text-green-600">Already Manifested</span> : <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">Available Segment</span>}
                                </div>
                              </div>
                              <div className={`size-10 rounded-2xl flex items-center justify-center transition-all ${isAdded ? 'text-green-600' : 'bg-surface-container-high/60 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                                {isAdded ? <CheckCircle2 size={16} /> : <Plus size={16} />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                   </div>
                 ))
              )}
           </div>
        )}
      </div>
    </div>
  );
}
