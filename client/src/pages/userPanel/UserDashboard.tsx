import { FireIcon } from "@heroicons/react/24/outline";
import {
  Bell,
  ChevronRight,
  SearchAlert,
  Settings,
  Notebook,
  TrendingUp,
  History,
  Target,
  CheckSquare,
  Clock,
  Loader,
  Sparkles,
  Trash,
  Edit3,
  Menu,
  Globe,
  LayoutGrid,
  List,
  User as UserIcon,
  Activity
} from "lucide-react";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import { fetchExams } from "../../slice/examSlice";
import { useNavigate } from "react-router";
import { supabase } from "../../utils/supabase";
import { UpcomingMockTest } from "../../components/userDashboard/UpcomingMockTest";
import { DashboardDailyRoutine } from "../../components/userDashboard/DashboardDailyRoutine";
import { ExamSelectorCard } from "../../components/ui/ExamSelectorCard";

export interface Habit {
  id: string;
  name: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  category: "theory" | "mcq" | "revision" | "mock";
  start_time?: string;
  end_time?: string;
  is_mastery?: boolean;
  chapter_id?: string;
  exam_id?: string;
  is_recurring?: boolean;
}

const format12h = (timeStr: string | undefined) => {
  if (!timeStr) return "";
  const [h, m] = timeStr.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, "0")} ${ampm}`;
};

const UserDashboard = () => {
  const { user, profile } = useSelector((state: RootState) => state.user);
  const { examData, loading: examsLoading } = useSelector((state: RootState) => state.exams ?? { examData: [], loading: false });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const targetRef = useRef<HTMLDivElement>(null);

  const [habits, setHabits] = useState<Habit[]>([]);
  const [progress, setProgress] = useState<Record<string, boolean[]>>({});
  const [ritualsLoading, setRitualsLoading] = useState(true);

  const now = new Date();
  const currentMonthIdx = now.getMonth();
  const currentYear = now.getFullYear();
  const currentMonth = currentMonthIdx + 1;
  const today = now.getDate();

  const [isDailRoutineOpen, setIsDailRoutineOpen] = useState(false);
  const [isQuickEditOpen, setIsQuickEditOpen] = useState(false);
  const [quickEditData, setQuickEditData] = useState<{ habit: Habit, day: number } | null>(null);

  const isMobile = useMediaQuery("(max-width: 1023px)");

  const fetchDailyData = async () => {
    if (!user?.id) return;
    try {
      setRitualsLoading(true);
      const [habitsRes, masteryRes] = await Promise.all([
        supabase
          .from("study_habits")
          .select("*")
          .eq("user_id", user.id)
          .eq("month", currentMonth)
          .eq("year", currentYear),
        supabase
          .from("user_mastery")
          .select("*, chapters(name)")
          .eq("user_id", user.id)
          .eq("month", currentMonth)
          .eq("year", currentYear),
      ]);

      const allHabits: Habit[] = [];
      const allProgress: Record<string, boolean[]> = {};

      (habitsRes.data || []).forEach((h) => {
        allHabits.push({
          id: h.id,
          name: h.name,
          priority: h.priority,
          category: h.category,
          start_time: h.start_time,
          end_time: h.end_time,
          is_recurring: h.is_recurring !== false,
        });
        allProgress[h.id] = h.progress || Array(31).fill(false);
      });

      (masteryRes.data || []).forEach((m) => {
        allHabits.push({
          id: m.id,
          name: m.chapters?.name || "Unknown Chapter",
          priority: m.priority as any,
          category: "theory",
          start_time: m.start_time,
          end_time: m.end_time,
          is_mastery: true,
          chapter_id: m.chapter_id,
          exam_id: m.exam_id,
          is_recurring: m.is_recurring !== false,
        });
        allProgress[m.id] = m.progress || Array(31).fill(false);
      });

      setHabits(allHabits);
      setProgress(allProgress);
    } catch (err) {
      console.error("Error fetching daily data:", err);
    } finally {
      setRitualsLoading(false);
    }
  };

  const handleUpdateSchedule = async (id: string, isMastery: boolean, newDay: number, newTime: string) => {
    if (!user?.id) return;
    try {
      const table = isMastery ? "user_mastery" : "study_habits";
      const newProgress = Array(31).fill(false);
      newProgress[newDay - 1] = true;

      const { error } = await supabase
        .from(table)
        .update({
          progress: newProgress,
          start_time: newTime,
          updated_at: new Date().toISOString()
        })
        .eq("id", id);

      if (error) throw error;
      await fetchDailyData();
    } catch (err) {
      console.error("Timeline Sync Failed:", err);
    }
  };

  const handleDeleteRitual = async (id: string, isMastery: boolean) => {
    if (!user?.id) return;
    try {
      const table = isMastery ? "user_mastery" : "study_habits";
      const { error } = await supabase.from(table).delete().eq("id", id);
      if (error) throw error;
      fetchDailyData();
    } catch (err) {
      console.error("Deletion failed:", err);
    }
  };

  useEffect(() => {
    dispatch(fetchExams());
    fetchDailyData();

    if (!isMobile) {
      const timer = setTimeout(() => {
        const element = targetRef.current;
        if (!element) return;
        const scrollableParent = element.closest('.overflow-y-auto');
        if (scrollableParent) {
          scrollableParent.scrollTop = element.offsetTop - 80;
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [dispatch, user?.id, isMobile]);

  const handleToggle = async (id: string) => {
    if (!user?.id) return;
    const habit = habits.find((h) => h.id === id);
    if (!habit) return;

    const dayIdx = today - 1;
    const newProg = [...(progress[id] || Array(31).fill(false))];
    newProg[dayIdx] = !newProg[dayIdx];

    setProgress((prev) => ({ ...prev, [id]: newProg }));

    try {
      const table = habit.is_mastery ? "user_mastery" : "study_habits";
      await supabase
        .from(table)
        .update({ progress: newProg, updated_at: new Date().toISOString() })
        .eq("id", id);
    } catch (err) {
      console.error("Toggle failed:", err);
      fetchDailyData();
    }
  };

  const dailyRituals = useMemo(() => {
    return habits
      .filter((h) => !h.is_mastery)
      .sort((a, b) => (a.start_time || "").localeCompare(b.start_time || ""));
  }, [habits]);

  const targetedExams = useMemo(() => {
    if (!examData || !profile?.target_exams) return [];
    return examData.filter((el) => profile.target_exams.includes(el.id));
  }, [examData, profile?.target_exams]);

  const dashboardProps: DashboardProps = {
    user,
    profile,
    habits,
    progress,
    ritualsLoading,
    examsLoading,
    today,
    currentMonth,
    currentYear,
    isDailRoutineOpen,
    setIsDailRoutineOpen,
    isQuickEditOpen,
    setIsQuickEditOpen,
    quickEditData,
    setQuickEditData,
    dailyRituals,
    targetedExams,
    handleToggle,
    handleDeleteRitual,
    handleUpdateSchedule,
    targetRef,
    navigate,
    format12h,
  };

  if (examsLoading) return <DashboardSkeleton />;

  return (
    <>
      {isMobile ? (
        <MobileUserDashboard {...dashboardProps} />
      ) : (
        <DesktopUserDashboard {...dashboardProps} />
      )}

      <DashboardDailyRoutine
        isOpen={isDailRoutineOpen}
        onClose={() => setIsDailRoutineOpen(false)}
        targetedExams={targetedExams}
        dailyRituals={dailyRituals}
        progress={progress}
        today={today}
        handleToggle={handleToggle}
      />
      <QuickScheduleModal
        isOpen={isQuickEditOpen}
        onClose={() => setIsQuickEditOpen(false)}
        habit={quickEditData?.habit || null}
        day={quickEditData?.day || 0}
        onUpdate={handleUpdateSchedule}
      />
    </>
  );
};

// ── Responsive Hook ─────────────────────────────────────────────────────────

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

// ── Interfaces ──────────────────────────────────────────────────────────────

interface DashboardProps {
  user: any;
  profile: any;
  habits: Habit[];
  progress: Record<string, boolean[]>;
  ritualsLoading: boolean;
  examsLoading: boolean;
  today: number;
  currentMonth: number;
  currentYear: number;
  isDailRoutineOpen: boolean;
  setIsDailRoutineOpen: (open: boolean) => void;
  isQuickEditOpen: boolean;
  setIsQuickEditOpen: (open: boolean) => void;
  quickEditData: { habit: Habit, day: number } | null;
  setQuickEditData: (data: { habit: Habit, day: number } | null) => void;
  dailyRituals: Habit[];
  targetedExams: any[];
  handleToggle: (id: string) => Promise<void>;
  handleDeleteRitual: (id: string, isMastery: boolean) => Promise<void>;
  handleUpdateSchedule: (id: string, isMastery: boolean, newDay: number, newTime: string) => Promise<void>;
  targetRef: React.RefObject<HTMLDivElement | null>;
  navigate: ReturnType<typeof useNavigate>;
  format12h: (timeStr: string | undefined) => string;
}

// ── Sub-components ─────────────────────────────────────────────────────────

const DesktopUserDashboard = (props: DashboardProps) => {
  const {
    profile,
    user,
    habits,
    progress,
    today,
    targetedExams,
    handleDeleteRitual,
    setIsDailRoutineOpen,
    setIsQuickEditOpen,
    setQuickEditData,
    targetRef,
    navigate,
    examsLoading
  } = props;

  return (
    <div className="relative min-h-screen">
      <div className="space-y-6 p-2 lg:p-6 animate-reveal">
        <section className="relative px-2">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="animate-greeting">
              <span className="text-xl lg:text-5xl font-black tracking-tighter text-on-surface leading-[0.85] pb-4">
                Namaskar,
                <span className="text-primary italic font-serif -ml-2 lg:-ml-4 drop-shadow-sm select-none">
                  {" "}{(profile?.full_name || user?.user_metadata?.full_name || user?.email)?.split(' ')[0]}
                </span>
              </span>
              <p className="text-on-surface-variant max-w-xl text-sm lg:text-xl leading-relaxed opacity-0 animate-greeting-delay font-medium font-narrative">
                Your preparation is <span className="font-technical font-black text-primary border-b-2 border-primary/20">0%</span> complete.
              </p>
            </div>

            <div className="hidden lg:flex gap-4">
              <div className="bg-surface-container-low px-8 py-6 rounded-xl shadow-ambient hover:scale-105 transition-transform duration-500 group">
                <p className="text-[9px] font-technical text-on-surface-variant uppercase font-black tracking-[0.2em] mb-2 opacity-50">Daily Streak</p>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-technical font-black text-tertiary">12</span>
                  <FireIcon className="size-8 text-tertiary animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-0 md:pt-8">
          <div className="lg:col-span-8 space-y-4 md:space-y-12">
            <ExamSelectorCard
              targetedExams={targetedExams}
              onSelect={(exam) => navigate(`exam/${exam.id}`)}
              onViewAll={() => navigate("/select-exams")}
              loading={examsLoading}
            />
          </div>

          <div className="lg:col-span-4 space-y-12">
            <UpcomingMockTest
              habits={habits}
              progress={progress}
              onDelete={handleDeleteRitual}
              onEdit={(habit, day) => {
                setQuickEditData({ habit, day });
                setIsQuickEditOpen(true);
              }}
              onNavigate={(examId, chapterId) => navigate(`exam/${examId}`, { state: { autoOpenChapterId: chapterId } })}
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsDailRoutineOpen(true)}
        className="fixed bottom-10 right-5 size-16 bg-primary text-white rounded-[2.5rem] shadow-ambient-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-500 z-50 group"
      >
        <CheckSquare className="size-6" />
      </button>
    </div>
  );
};

const MobileUserDashboard = (props: DashboardProps) => {
  const { profile, user, targetedExams, navigate,examsLoading } = props;

  return (
    <div className="bg-surface-container-low text-on-surface min-h-screen font-narrative">
      {/* <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10 flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-4">
          <Menu className="size-6 text-primary" />
          <span className="text-xl font-black tracking-tighter text-primary">ARUMIND</span>
        </div>
        <button className="text-primary text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl border border-primary/20">EN/OD</button>
      </header> */}

      <main className="pt-10 px-3 space-y-6">
        <header className="animate-greeting">
          <h1 className="text-2xl font-black tracking-tighter text-on-surface">
            Namaskar, <span className=" italic font-serif">{(profile?.full_name || user?.user_metadata?.full_name || user?.email)?.split(' ')[0]}</span>
          </h1>
          <p className="text-md text-on-surface-variant font-medium">Focused learning leads to mastery.</p>
        </header>

        {/* <section className="bg-surface-container rounded-3xl p-6 shadow-ambient space-y-6">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-technical font-black uppercase tracking-widest opacity-60">Daily Goal</span>
            <button onClick={() => navigate("/user/performance")} className="text-[10px] text-primary font-black uppercase tracking-widest">Details</button>
          </div>
          <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full w-[65%]" />
          </div>
        </section> */}

        <section className="space-y-6">
          {/* <h2 className="text-2xl font-black tracking-tight">Exam Registry</h2> */}
          <div className="space-y-4">
            <ExamSelectorCard
              targetedExams={targetedExams}
              onSelect={(exam) => navigate(`exam/${exam.id}`)}
              onViewAll={() => navigate("/select-exams")}
              loading={examsLoading}
            />
          </div>
        </section>
      </main>

    </div>
  );
};

const QuickScheduleModal = ({ isOpen, onClose, habit, day, onUpdate }: any) => {
  const [selectedDay, setSelectedDay] = useState(day);
  const [selectedTime, setSelectedTime] = useState(habit?.start_time || "09:00");

  useEffect(() => {
    if (habit) {
      setSelectedDay(day);
      setSelectedTime(habit.start_time || "09:00");
    }
  }, [habit, day]);

  if (!isOpen || !habit) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-6 backdrop-blur-xl">
      <div className="absolute inset-0 bg-on-surface/20" onClick={onClose} />
      <div className="relative bg-white dark:bg-surface-container-high rounded-[3rem] p-10 max-w-lg w-full shadow-ambient-lg border border-white/20">
        <h3 className="text-3xl font-black mb-6">Update Schedule</h3>
        <input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="w-full p-4 bg-surface-container-low rounded-2xl text-xl font-black mb-8 border-none" />
        <div className="flex gap-4">
          <button onClick={onClose} className="flex-1 py-5 rounded-full font-black text-xs uppercase opacity-60">Discard</button>
          <button onClick={() => onUpdate(habit.id, habit.is_mastery, selectedDay, selectedTime).then(onClose)} className="flex-1 py-5 bg-primary text-white rounded-full font-black text-xs uppercase">Save</button>
        </div>
      </div>
    </div>
  );
};

const DashboardSkeleton = () => (
  <div className="p-6 space-y-12 animate-pulse">
    <div className="h-20 w-3/4 bg-surface-container-low rounded-3xl" />
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-8 h-64 bg-surface-container-low rounded-3xl" />
      <div className="col-span-4 h-64 bg-surface-container-low rounded-3xl" />
    </div>
  </div>
);

export default UserDashboard;