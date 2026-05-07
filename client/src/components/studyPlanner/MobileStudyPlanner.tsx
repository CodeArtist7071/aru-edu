import React, { useMemo, useRef, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Target,
  Zap,
  Award,
  Calendar,
  MoreVertical,
  CheckCircle2,
  Sparkles,
  X,
  ChevronDown,
  Trash2,
  Edit3
} from "lucide-react";
import { type Habit } from "./types";

interface MobileStudyPlannerProps {
  habits: Habit[];
  progress: Record<string, boolean[]>;
  onToggle: (id: string, index: number) => void;
  viewMonth: number;
  viewYear: number;
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  onMonthChange: (direction: "prev" | "next") => void;
  stats: {
    totalCompleted: number;
    currentStreak: number;
    xp: number;
    level: number;
    xpInLevel: number;
  };
  onAddHabit: (mode: "routine" | "test") => void;
  onEditHabit: (habit: Habit) => void;
  onSync: (habit: Habit) => void;
  onSyncAll: () => void;
  onDeleteHabit: (id: string, isMastery: boolean) => void;
  isSettingUp: boolean;
  hasPrevMonthTasks: boolean;
  onCopyPrevious: () => void;
  onStartFresh: () => void;
  manifestDemo: () => void;
  onJumpToToday: () => void;
}

export const getTodayStr = () => new Date().toISOString().split('T')[0];

export const DEMO_HABITS: Habit[] = [
  { 
    id: "demo-1", 
    name: "Morning Theory Review (General Awareness)", 
    priority: "HIGH", 
    category: "theory", 
    start_time: "08:00", 
    end_time: "09:30",
    duration_type: "DAILY", 
    is_recurring: true,
    isDemo: true,
    scheduled_date: getTodayStr()
  },
  { 
    id: "demo-2", 
    name: "MCQ Practice Session (Reasoning)", 
    priority: "MEDIUM", 
    category: "mcq", 
    start_time: "14:00", 
    end_time: "15:30",
    duration_type: "DAILY", 
    is_recurring: true,
    isDemo: true,
    scheduled_date: getTodayStr()
  },
  { 
    id: "demo-3", 
    name: "Evening Subject Revision (Mathematics)", 
    priority: "MEDIUM", 
    category: "mcq", 
    start_time: "19:00", 
    end_time: "20:30",
    duration_type: "DAILY", 
    is_recurring: true,
    isDemo: true,
    scheduled_date: getTodayStr()
  },
  { 
    id: "demo-4", 
    name: "Weekly Mock Test (Full Length)", 
    priority: "HIGH", 
    category: "theory", 
    is_mastery: true, 
    start_time: "10:00", 
    end_time: "13:00",
    duration_type: "DAILY",
    isDemo: true,
    scheduled_date: getTodayStr()
  }
];

export const MobileStudyPlanner: React.FC<MobileStudyPlannerProps> = ({
  habits,
  progress,
  onToggle,
  viewMonth,
  viewYear,
  selectedDate,
  onSelectDate,
  onMonthChange,
  stats,
  onAddHabit,
  onEditHabit,
  onSync,
  onSyncAll,
  onDeleteHabit,
  isSettingUp,
  hasPrevMonthTasks,
  onCopyPrevious,
  onStartFresh,
  manifestDemo,
  onJumpToToday,
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReward, setShowReward] = useState<{ show: boolean, xp: number } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number | null>(null);
  const today = new Date();
  
  // DYNAMIC HEADER STATE (Syncs with selection)
  const [displayMonth, setDisplayMonth] = useState(viewMonth);
  const [displayYear, setDisplayYear] = useState(viewYear);

  useEffect(() => {
    setDisplayMonth(selectedDate.getMonth() + 1);
    setDisplayYear(selectedDate.getFullYear());
  }, [selectedDate, viewMonth, viewYear]);

  const displayMonthName = useMemo(() => {
    return new Date(displayYear, displayMonth - 1).toLocaleString('default', { month: 'long' });
  }, [displayMonth, displayYear]);

  const infiniteDays = useMemo(() => {
    // STABLE ANCHOR: Use the 1st of the currently viewed month as the reference point
    // This prevents the ticker from "jumping" when you select different days
    const anchor = new Date(viewYear, viewMonth - 1, 1);
    const startRange = new Date(anchor);
    // Runway: 90 days before the 1st, 180 total days to cover roughly 6 months
    startRange.setDate(anchor.getDate() - 90);

    return Array.from({ length: 180 }, (_, i) => {
      const d = new Date(startRange);
      d.setDate(startRange.getDate() + i);
      d.setHours(0, 0, 0, 0); // Normalize ticker dates
      return {
        dayNum: d.getDate(),
        dayName: d.toLocaleString('default', { weekday: 'short' }),
        date: d
      };
    });
  }, [viewMonth, viewYear]); // Ticker stable per month switch

  // Generate days for the Month Ribbon
  const daysInMonth = useMemo(() => {
    const date = new Date(viewYear, viewMonth, 0);
    return date.getDate();
  }, [viewMonth, viewYear]);

  // Task Presence Visualization Logic (Parity with Desktop)
  const hasTasksByDay = useMemo(() => {
    const presenceArray = Array(daysInMonth).fill(false);
    for (let d = 1; d <= daysInMonth; d++) {
      const cellDate = new Date(viewYear, viewMonth - 1, d);
      cellDate.setHours(0, 0, 0, 0);

      const hasTask = habits.some(h => {
        if (h.isDemo) return false;
        if (!h.scheduled_date) return false;
        
        const startDate = new Date(h.scheduled_date);
        startDate.setHours(0,0,0,0);

        if (cellDate < startDate) return false;

        if (h.duration_type === "DAILY") {
           return cellDate.getTime() === startDate.getTime();
        } else if (h.duration_type === "WEEKLY") {
           const endDate = new Date(startDate);
           endDate.setDate(startDate.getDate() + 6);
           return cellDate <= endDate;
        } else if (h.duration_type === "CUSTOM" && h.scheduled_end_date) {
           const endDate = new Date(h.scheduled_end_date);
           endDate.setHours(23,59,59,999);
           return cellDate <= endDate;
        }
        return true; // Monthly
      });
      presenceArray[d - 1] = hasTask;
    }
    return presenceArray;
  }, [habits, daysInMonth, viewMonth, viewYear]);

  const days = useMemo(() => {
    const allDays = Array.from({ length: daysInMonth }, (_, i) => {
      const date = new Date(viewYear, viewMonth - 1, i + 1);
      return {
        dayNum: i + 1,
        dayName: date.toLocaleString('default', { weekday: 'short' }),
        date: date,
        hasTask: hasTasksByDay[i]
      };
    });

    if (isExpanded) {
      // Month Grid Alignment
      const firstDayOfMonth = new Date(viewYear, viewMonth - 1, 1).getDay();
      const padding = Array.from({ length: firstDayOfMonth }, (_, i) => ({
        dayNum: -i,
        dayName: "",
        date: new Date(),
        hasTask: false,
        isPadding: true
      }));
      return [...padding, ...allDays];
    }

    // Weekly Window Logic (Horizontally scrolling ticker)
    const selectedIdx = selectedDate.getDate() - 1;
    let start = Math.max(0, selectedIdx - 3);
    let end = Math.min(daysInMonth, start + 7);
    if (end === daysInMonth) start = Math.max(0, end - 7);
    
    return allDays.slice(start, end);
  }, [daysInMonth, viewMonth, viewYear, isExpanded, selectedDate, hasTasksByDay]);

  // Handle Swipe-to-Expand gesture on the header
  const handleTouchStart = (e: React.TouchEvent) => { touchStartY.current = e.touches[0].clientY; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (deltaY > 50) setIsExpanded(true);
    if (deltaY < -50) setIsExpanded(false);
    touchStartY.current = null;
  };

  const scrollTimeout = useRef<any>(null);
  const isScrollSelecting = useRef(false);

  const handleTickerScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (isExpanded) return;
    const container = e.currentTarget;
    
    // Clear previous timeout
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    
    scrollTimeout.current = setTimeout(() => {
      // ITEM_WIDTH = button (48px) + gap (8px) = 56px
      const ITEM_WIDTH = 56;
      const index = Math.round(container.scrollLeft / ITEM_WIDTH);
      
      if (index >= 0 && index < infiniteDays.length) {
        const closestDate = infiniteDays[index].date;
        if (closestDate.getTime() !== selectedDate.getTime()) {
          isScrollSelecting.current = true;
          onSelectDate(closestDate);
        }
      }
    }, 40); // Tighter 40ms debounce for near-instant response
  };

  const onCenterDate = (date: Date) => {
    if (scrollRef.current && !isExpanded) {
      const el = scrollRef.current.querySelector(`[data-date="${date.toISOString()}"]`);
      if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
    onSelectDate(date);
  };

  // INITIAL MOUNT: Always show the present date as selected and centered
  useEffect(() => {
    // Force immediate sync of header month name
    setDisplayMonth(today.getMonth() + 1);
    setDisplayYear(today.getFullYear());

    const timer = setTimeout(() => {
      onJumpToToday();
    }, 50); // Immediate reset to today
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Only auto-scroll to center if the change DID NOT come from a scroll event
    // (e.g., first load, returning from month grid, or external selection)
    if (isScrollSelecting.current) {
      isScrollSelecting.current = false;
      return;
    }

    if (scrollRef.current && !isExpanded) {
      const selectedEl = scrollRef.current.querySelector(`[data-date="${selectedDate.toISOString()}"]`);
      if (selectedEl) {
        selectedEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [isExpanded, selectedDate]);

  const realHabits = useMemo(() => {
    return habits.filter(h => !h.isDemo);
  }, [habits]);

  const dailyTasks = useMemo(() => {
    const dayIndex = selectedDate.getDate() - 1;
    return habits
      .filter(h => {
        if (h.isDemo) return false; // Demos hidden as requested

        // 1. One-Off rituals or Mastery milestones: Manifest on their exact date
        if (h.is_mastery || (h as any).is_recurring === false) {
           if (!h.scheduled_date) return false;
           const sd = new Date(h.scheduled_date);
           return sd.getDate() === selectedDate.getDate() && 
                  sd.getMonth() === selectedDate.getMonth() && 
                  sd.getFullYear() === selectedDate.getFullYear();
        }

        // 2. Scheduled persistence logic (Daily/Weekly/Monthly)
        if (h.scheduled_date) {
          const startDate = new Date(h.scheduled_date);
          startDate.setHours(0,0,0,0);
          const cellDate = new Date(selectedDate);
          cellDate.setHours(0,0,0,0);
          
          if (cellDate < startDate) return false;

          // Daily Rituals should show every day from start onwards
          if (h.duration_type === "DAILY") return true;

          // Weekly rituals show for the first 7 days
          if (h.duration_type === "WEEKLY") {
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + 7);
            return cellDate < endDate;
          }
          
          // Custom rituals show until their end date
          if (h.duration_type === "CUSTOM" && h.scheduled_end_date) {
            const endDate = new Date(h.scheduled_end_date);
            endDate.setHours(23, 59, 59, 999);
            return cellDate <= endDate;
          }

          // Monthly rituals show for the entire month context
          return true;
        }

        return true;
      })
      .map(h => ({
        ...h,
        isCompleted: progress[h.id]?.[dayIndex] || false
      }));
  }, [habits, progress, selectedDate]);

  // if (isSettingUp && realHabits.length === 0) {
  //   return (
  //     <div className="flex-1 flex flex-col relative px-4 pt-20 justify-center items-center overflow-y-auto">
  //       <div className="absolute inset-x-2 bottom-0 z-40 p-1 animate-in fade-in zoom-in-95 duration-1000 ease-botanical">
  //         <div className="bg-surface-container-high/95 backdrop-blur-xl rounded-[3rem] p-8 shadow-ambient-lg border border-primary/10 text-center space-y-6">
  //           <div className="size-16 bg-primary/10 rounded-4xl flex items-center justify-center mx-auto text-primary">
  //             <Calendar className="size-8" />
  //           </div>
  //           <div>
  //             <h3 className="text-2xl font-black tracking-tighter text-on-surface">Setup Planner</h3>
  //             <p className="text-[10px] font-technical font-black uppercase tracking-widest text-primary mt-2 flex items-center justify-center gap-2">
  //                <Sparkles className="size-3" /> Sample Tasks Active
  //             </p>
  //             <p className="text-[10px] font-technical font-black uppercase tracking-widest text-on-surface-variant opacity-60 mt-2">New plan for {monthName}</p>
  //           </div>

  //           <div className="grid grid-cols-1 gap-4">
  //             {hasPrevMonthTasks && (
  //               <button
  //                 onClick={onCopyPrevious}
  //                 className="w-full py-4 bg-primary text-white rounded-full font-technical font-black text-[11px] uppercase tracking-[0.2em] shadow-lg shadow-primary/20 active:scale-95 transition-all"
  //               >
  //                 Synchronize Prev Month
  //               </button>
  //             )}
  //             <button
  //               onClick={onStartFresh}
  //               className="w-full py-4 bg-surface-container-low text-on-surface rounded-full font-technical font-black text-[11px] uppercase tracking-[0.2em] active:scale-95 transition-all"
  //             >
  //               Start Fresh
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="relative min-h-screen bg-surface flex flex-col font-editorial select-none">
      {/* Liquid Glass Date Ribbon - Stacks beneath Layout Header */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`sticky top-0 z-30 liquid-glass pt-2 pb-4 px-4 flex flex-col gap-4 border-b border-white/10 transition-all duration-700 ease-premium ${
          isExpanded ? 'h-auto pb-6' : 'h-auto'
        }`}
      >
        <div className="w-full flex items-center justify-between">
           {/* QUICK JUMP: TODAY */}
           <button 
             onClick={onJumpToToday}
             className="px-4 py-2 bg-primary/10 text-primary rounded-full text-[8px] font-technical font-black uppercase tracking-[0.2em] active:scale-90 transition-all border border-primary/20"
           >
             Jump to Today
           </button>

          <div className="flex justify-end items-center gap-3">
            <button 
              onClick={() => onMonthChange("prev")} 
              className="size-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-on-surface transition-all active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <div onClick={() => setIsExpanded(!isExpanded)}>
              <h3 className="text-xl px-2 font-black tracking-tight text-on-surface flex items-center gap-2 text-right">
                {displayMonthName} <ChevronDown size={14} className={`text-primary transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
              </h3>
              <p className="text-[10px] font-technical uppercase tracking-[0.2em] text-primary text-right">{displayYear}</p>
            </div>
            <button 
              onClick={() => onMonthChange("next")} 
              className="size-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-on-surface transition-all active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Liquid Transition Wrapper: Ticker & Grid Layers */}
        <div className={`relative transition-all duration-700 ease-premium overflow-hidden ${
          isExpanded ? 'min-h-[300px]' : 'h-20'
        }`}>
          {/* LAYER 1: HORIZONTAL TICKER (Infinite Runway) */}
          <div 
            ref={scrollRef}
            onScroll={!isExpanded ? handleTickerScroll : undefined}
            className={`flex gap-2 overflow-x-auto no-scrollbar transition-all duration-700 ease-premium absolute inset-0 py-2 snap-x snap-mandatory px-[45%] ${
              isExpanded ? 'opacity-0 blur-md scale-95 pointer-events-none translate-y-4' : 'opacity-100 blur-0 scale-100 translate-y-0'
            }`}
          >
            {/* SELECTION FOCUS RING - Tactile Lens */}
            {!isExpanded && (
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 size-12 border-2 border-primary/40 rounded-xl pointer-events-none z-20 shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)] ring-4 ring-primary/5" />
            )}

            {infiniteDays.map((d, i) => {
               const isSelected = selectedDate.getDate() === d.dayNum && 
                                 selectedDate.getMonth() === d.date.getMonth() &&
                                 selectedDate.getFullYear() === d.date.getFullYear();
               const isCurrentToday = today.getDate() === d.dayNum && 
                                      today.getMonth() === d.date.getMonth() &&
                                      today.getFullYear() === d.date.getFullYear();
               
               const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
               const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
               const isYesterday = d.date.toDateString() === yesterday.toDateString();
               const isTomorrow = d.date.toDateString() === tomorrow.toDateString();

               return (
                 <button
                   key={`${d.date.toISOString()}-${i}`}
                   data-date={d.date.toISOString()}
                   onClick={() => onCenterDate(d.date)}
                   className={`date-button shrink-0 flex flex-col items-center justify-center gap-1 transition-all duration-300 active:scale-95 snap-center w-12 py-2 rounded-xl relative ${
                     isSelected 
                       ? 'text-primary border border-primary/40 bg-primary/10 transition-all font-black scale-125' 
                       : isCurrentToday 
                         ? 'text-primary opacity-100 border border-primary/20' 
                         : 'text-on-surface/20 border border-transparent'
                   }`}
                 >
                   <span className={`text-[8px] font-black uppercase tracking-tighter ${isSelected ? 'opacity-100' : 'opacity-40'}`}>
                     {isCurrentToday ? 'Today' : isYesterday ? 'Yest' : isTomorrow ? 'Tomw' : d.dayName}
                   </span>
                   <span className="text-base font-black tracking-tighter">{d.dayNum}</span>
                   {isCurrentToday && (
                     <div className="size-1 bg-primary rounded-full absolute -bottom-1" />
                   )}
                 </button>
               );
            })}
          </div>

          {/* LAYER 2: MONTH GRID (Calendar View) */}
          <div 
            className={`flex flex-wrap justify-center gap-2 py-2 transition-all duration-700 ease-premium ${
              isExpanded ? 'opacity-100 blur-0 scale-100 translate-y-0' : 'opacity-0 blur-md scale-105 pointer-events-none -translate-y-4'
            }`}
          >
            {days.map((d, i) => {
               if ((d as any).isPadding) return <div key={`padding-${i}`} className="size-10 shrink-0" />;

               const isSelected = selectedDate.getDate() === d.dayNum && 
                                 selectedDate.getMonth() === d.date.getMonth() &&
                                 selectedDate.getFullYear() === d.date.getFullYear();
               const isCurrentToday = today.getDate() === d.dayNum && 
                                      today.getMonth() === d.date.getMonth() &&
                                      today.getFullYear() === d.date.getFullYear();

               return (
                 <button
                   key={`grid-${d.date.toISOString()}-${i}`}
                   onClick={() => {
                     onCenterDate(d.date);
                     setIsExpanded(false);
                   }}
                   className={`size-10 rounded-xl shrink-0 flex flex-col items-center justify-center gap-0.5 transition-all duration-300 active:scale-90 ${
                     isSelected 
                       ? 'bg-primary text-on-primary shadow-lg shadow-primary/30' 
                       : isCurrentToday 
                         ? 'bg-primary/20 border border-primary/30 text-primary' 
                         : 'bg-white/5 border border-white/5 text-on-surface/60'
                   }`}
                 >
                   <span className="text-[7px] font-black uppercase tracking-tighter opacity-40">{d.dayName}</span>
                   <span className="text-xs font-black tracking-tighter">{d.dayNum}</span>
                 </button>
               );
            })}
          </div>
        </div>

        {/* Pull Tab Indicator */}
        <div className="flex justify-center mt-1">
          <div className="w-10 h-1 bg-white/10 rounded-full" />
        </div>
      </div>

      {/* Daily Agenda: Visibility Loop */}
      <div className="flex-1 px-4 pt-4 pb-10 space-y-2 relative flex flex-col overflow-hidden">
        <header className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-black tracking-tighter text-on-surface">Today’s All Tasks</h2>
            <p className="text-[10px] font-technical uppercase tracking-[0.3em] text-primary/60">Explore all your tasks</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-black text-on-surface tracking-tighter">{dailyTasks.filter(t => t.isCompleted).length}/{dailyTasks.length}</p>
            <p className="text-[10px] font-technical uppercase tracking-widest text-on-surface-variant/40">Tasks Complete</p>
          </div>
        </header>

        <section className="flex-1 overflow-y-auto pt-6 pb-10 space-y-8 custom-scrollbar relative">
          {dailyTasks.length > 0 ? dailyTasks.map((task: any) => (
            <SwipeableRitualCard
              key={task.id}
              task={task}
              onEdit={() => onEditHabit(task)}
              onDelete={() => onDeleteHabit(task.id, !!task.is_mastery)}
              onToggle={() => {
                onToggle(task.id, selectedDate.getDate() - 1);
                if (!task.isCompleted) {
                  setShowReward({ show: true, xp: 50 });
                  setTimeout(() => setShowReward(null), 3000);
                }
              }}
              onSync={() => onSync(task)}
            />
          )) : (
            <div className="p-12 rounded-xl border border-dashed border-white/10 text-center space-y-4">
              <div className="size-16 bg-white/5 rounded-full flex items-center justify-center mx-auto text-white/20">
                <Calendar size={32} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/40">No Task Found</p>
              <button 
                onClick={() => onAddHabit("routine")} 
                className="px-8 py-4 bg-primary text-on-primary rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 active:scale-95 transition-all"
              >
                Add Task
              </button>
            </div>
          )}

          {/* Glimpse Factor: Show next day edge if tasks exist */}
          <div className="h-20 bg-linear-to-b from-white/5 to-transparent rounded-t-[3rem] opacity-20 border-t border-white/5 text-center pt-4">
            <p className="text-[8px] font-technical uppercase tracking-[0.5em] text-white/60">Horizon Glimpse</p>
          </div>
        </section>
      </div>

      {/* Floating Action Button: Control Zone */}
      <button 
        onClick={() => onAddHabit("routine")}
        className="fixed bottom-32 right-6 size-16 bg-primary text-on-primary rounded-3xl shadow-2xl shadow-primary/40 flex items-center justify-center z-40 active:scale-90 transition-all hover:scale-105 group"
      >
        <Plus size={32} className="group-hover:rotate-90 transition-transform duration-500" />
      </button>

      {/* Reward Feedback Modal (Screen 3) */}
      {showReward && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 animate-in fade-in zoom-in-95 duration-500">
          <div className="liquid-glass p-8 rounded-[3rem] border border-primary/30 text-center shadow-3xl shadow-primary/20 space-y-4 max-w-xs w-full">
            <div className="size-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary animate-bounce">
              <Sparkles size={40} />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black tracking-tighter text-on-surface">Task Complete!</h3>
              <p className="text-[10px] font-technical uppercase tracking-[0.3em] text-primary">+{showReward.xp} XP Earned</p>
            </div>
            <p className="text-xs font-medium text-on-surface-variant/60">Task Completed. Your neural pathways are strengthening.</p>
          </div>
        </div>
      )}
    </div>
  );
};

// ── SWIPEABLE RITUAL CARD ───────────────────────────────────────────────────
const SwipeableRitualCard = ({ task, onEdit, onDelete, onToggle, onSync }: any) => {
  const [offset, setOffset] = useState(0);
  const touchStart = useRef<number | null>(null);
  const isDragging = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || touchStart.current === null) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - touchStart.current;
    
    // Limits
    if (deltaX > 80) setOffset(80);
    else if (deltaX < -80) setOffset(-80);
    else setOffset(deltaX);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    // Snap logic
    if (offset > 40) setOffset(80);
    else if (offset < -40) setOffset(-80);
    else setOffset(0);
  };

  return (
    <div className="relative overflow-visible group">
      {/* Background Actions */}
      <div className="absolute inset-0 flex items-center justify-between rounded-lg overflow-hidden">
        {/* EDIT (Right Swamp) */}
        <button 
          onClick={() => {
            setOffset(0);
            onEdit();
          }}
          className={`h-full w-25 flex flex-col rounded-tl-xl rounded-bl-xl items-center justify-center gap-1 bg-primary text-on-primary transition-all duration-300 ${offset > 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <Edit3 size={20} />
          <span className="text-[8px] font-black uppercase tracking-widest">Edit</span>
        </button>

        {/* DELETE (Left Swamp) */}
        <button 
          onClick={() => {
            if (confirm("Abolish this ritual?")) {
              setOffset(0);
              onDelete();
            }
          }}
          className={`h-full w-25 flex rounded-tr-xl rounded-br-xl flex-col items-center justify-center gap-1 bg-red-600 text-white transition-all duration-300 ${offset < 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          <Trash2 size={20} />
          <span className="text-[8px] font-black uppercase tracking-widest">Delete</span>
        </button>
      </div>

      {/* Main Card */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => offset !== 0 && setOffset(0)}
        style={{ transform: `translateX(${offset}px)` }}
        className={`relative p-2 h-20 rounded-xl border transition-all duration-300 flex flex-col gap-4 glass z-10 ${
          task.isCompleted ? 'opacity-40 border-primary/20 scale-[0.98]' : 'border-white/5 shadow-ambient-lg'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 flex-1 pr-4 transition-opacity">
            <div className={`size-10 rounded-xl flex items-center justify-center transition-all duration-700 ${
              task.isCompleted ? 'bg-primary/10 text-primary shadow-inner shadow-primary/20' : 'bg-surface-container-high/60 text-on-surface-variant/40'
            }`}>
              {task.isCompleted ? <CheckCircle2 size={20} className="animate-in zoom-in-50" /> : <Zap size={20} />}
            </div>

            <div className="space-y-1.5 flex-1">
              <h4 className={`text-sm font-black tracking-tight leading-tight transition-all duration-700 ${
                task.isCompleted ? "line-through grayscale italic text-primary" : "text-on-surface"
              }`}>
                {task.name}
              </h4>
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-technical font-black tracking-widest text-primary uppercase opacity-60">
                  {task.priority || 'MEDIUM'}
                </span>
                <div className="flex items-center gap-1.5 text-[9px] font-technical font-black text-on-surface-variant/40 uppercase tracking-widest">
                  <Clock size={10} /> {task.start_time || "--:--"}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className={`size-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 active:scale-90 ${
              task.isCompleted 
                ? 'bg-primary border-primary text-on-primary shadow-lg shadow-primary/40' 
                : 'bg-transparent border-white/10 text-white/20 hover:border-primary/40'
            }`}
          >
            <CheckCircle2 size={25} />
          </button>
        </div>
        
        {/* Mini Meta info */}
         {!task.isDemo && task.is_mastery && (
          <div className="flex items-center gap-2 pt-2 border-t border-white/5">
              <span className="text-[8px] font-technical font-black text-primary uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded-full">
                Mastery Quest
              </span>
          </div>
         )}
      </div>
    </div>
  );
};

const Clock = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 16 14" />
  </svg>
);
