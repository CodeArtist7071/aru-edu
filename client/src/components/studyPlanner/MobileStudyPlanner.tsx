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
  Sparkles
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
  isSettingUp: boolean;
  hasPrevMonthTasks: boolean;
  onCopyPrevious: () => void;
  onStartFresh: () => void;
  manifestDemo: () => void;
  masteryOnly: (Habit & { scheduledDay: number })[];
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
  isSettingUp,
  hasPrevMonthTasks,
  onCopyPrevious,
  onStartFresh,
  manifestDemo,
  masteryOnly
}) => {
  const [isMilestoneOpen, setIsMilestoneOpen] = React.useState(false);
  const [isAddExpanded, setIsAddExpanded] = React.useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [viewMode, setViewMode] = useState<'weekly' | 'monthly'>('weekly');
  const scrollRef = useRef<HTMLDivElement>(null);
  const today = new Date();
  const isCurrentMonth = today.getMonth() + 1 === viewMonth && today.getFullYear() === viewYear;

  const monthName = useMemo(() => {
    return new Date(viewYear, viewMonth - 1).toLocaleString('default', { month: 'long' });
  }, [viewMonth, viewYear]);

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
        if (h.isDemo) return true;
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

    if (viewMode === 'monthly') {
      // For calendar view, we need the first day of the month to align correctly
      const firstDayOfMonth = new Date(viewYear, viewMonth - 1, 1).getDay();
      // Adjust if your week starts on Monday (Monday = 1, Sunday = 0 originally)
      // Arumind seems to use Sunday as 0 based on standard Date object
      const padding = Array.from({ length: firstDayOfMonth }, (_, i) => ({
        dayNum: -i,
        dayName: "",
        date: new Date(),
        hasTask: false,
        isPadding: true
      }));
      return [...padding, ...allDays];
    }

    // Weekly Window Logic: Show 7 days centered on selectedDate if possible
    const selectedIdx = selectedDate.getDate() - 1;
    let start = Math.max(0, selectedIdx - 3);
    let end = Math.min(daysInMonth, start + 7);
    if (end === daysInMonth) start = Math.max(0, end - 7);
    
    return allDays.slice(start, end);
  }, [daysInMonth, viewMonth, viewYear, viewMode, selectedDate, hasTasksByDay]);

  // Auto-scroll logic remains for centering in ticker mode
  useEffect(() => {
    if (scrollRef.current && viewMode === 'weekly') {
      const selectedEl = scrollRef.current.querySelector('[data-selected="true"]');
      if (selectedEl) {
        selectedEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [selectedDate, viewMode]);

  const realHabits = useMemo(() => {
    return habits.filter(h => !h.isDemo);
  }, [habits]);

  const dailyTasks = useMemo(() => {
    const dayIndex = selectedDate.getDate() - 1;
    return habits
      .filter(h => {
        if (h.isDemo) return true; // Demos always show up in the planner for initial setup

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

          if (h.duration_type === "DAILY") return cellDate.getTime() === startDate.getTime();
          if (h.duration_type === "WEEKLY") {
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + 6);
            return cellDate <= endDate;
          }
          if (h.duration_type === "CUSTOM" && h.scheduled_end_date) {
            const endDate = new Date(h.scheduled_end_date);
            endDate.setHours(23,59,59,999);
            return cellDate <= endDate;
          }
          return true; // Monthly
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
    <>
      <div className="relative p-2 animate-reveal bg-surface">
        {/* Month Ribbon & View Toggle */}
        <div className="flex items-center justify-between px-4 mb-4">
          <div className="flex items-center gap-2">
            <button onClick={() => onMonthChange("prev")} className="p-2 rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <ChevronLeft size={16} />
            </button>
            <div className="flex flex-col">
              <h3 className="text-sm font-black uppercase tracking-tighter text-on-surface leading-tight">{monthName}</h3>
              <span className="text-[8px] font-technical text-on-surface-variant opacity-40 uppercase tracking-widest font-black">{viewYear}</span>
            </div>
            <button onClick={() => onMonthChange("next")} className="p-2 rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="flex bg-surface-container-low p-1 rounded-2xl border border-on-surface/5 shadow-inner">
            <button 
              onClick={() => setViewMode('weekly')}
              className={`px-4 py-2 text-[8px] font-black uppercase tracking-widest rounded-xl transition-all duration-300 ${viewMode === 'weekly' ? 'bg-primary text-white shadow-ambient shadow-primary/20 scale-105' : 'text-on-surface-variant/40 hover:text-on-surface-variant'}`}
            >
              Week
            </button>
            <button 
              onClick={() => setViewMode('monthly')}
              className={`px-4 py-2 text-[8px] font-black uppercase tracking-widest rounded-xl transition-all duration-300 ${viewMode === 'monthly' ? 'bg-primary text-white shadow-ambient shadow-primary/20 scale-105' : 'text-on-surface-variant/40 hover:text-on-surface-variant'}`}
            >
              Month
            </button>
          </div>
        </div>

        {/* Date Ribbon */}
        <div 
          ref={scrollRef}
          className={`grid grid-cols-7 gap-1 px-1 pb-4 bg-surface transition-all duration-700 ease-(--ease-premium) overflow-hidden ${
            viewMode === 'monthly' ? 'max-h-[400px] opacity-100' : 'max-h-[80px]'
          }`}
        >
          {days.map((d, i) => {
            if ((d as any).isPadding) {
               return <div key={`padding-${i}`} className="h-12 w-full invisible" />;
            }

            const isSelected = selectedDate.getDate() === d.dayNum && 
                               selectedDate.getMonth() === d.date.getMonth() &&
                               selectedDate.getFullYear() === d.date.getFullYear();
            const isCurrentToday = today.getDate() === d.dayNum && 
                                   today.getMonth() === d.date.getMonth() &&
                                   today.getFullYear() === d.date.getFullYear();
            
            // Apply delay to Monthly cells that are not in the first row to create a "bloom" effect
            const isExtendedDay = viewMode === 'monthly' && i > 6;

            return (
              <button
                key={d.dayNum}
                data-selected={isSelected}
                onClick={() => onSelectDate(d.date)}
                className={`py-3 rounded-2xl flex flex-col items-center relative transition-all duration-500 w-full active:scale-95 ${
                  isSelected ? 'bg-primary text-white shadow-ambient-lg scale-105 z-10' : 
                  isCurrentToday ? 'bg-primary/10 text-primary border border-primary/20' : 
                  'bg-surface-container-low text-on-surface-variant'
                } ${isExtendedDay ? 'animate-in fade-in slide-in-from-bottom-4' : ''}`}
                style={isExtendedDay ? { animationDelay: `${(i - 7) * 20}ms` } : {}}
              >
                <span className="text-[8px] font-black uppercase tracking-tighter mb-1">{d.dayName}</span>
                <span className="text-xs font-black">{d.dayNum}</span>
                {d.hasTask && (
                  <div className={`absolute bottom-1.5 size-1 rounded-full transition-all duration-500 ${isSelected ? 'bg-white' : 'bg-primary animate-pulse'}`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 flex flex-col px-4 pb-20 overflow-y-auto">
        <div className="space-y-6 animate-reveal">
          {/* Daily Tasks */}
          <section>
            <div className="flex items-center justify-between my-4 px-2">
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-primary" />
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-on-surface-variant">Daily Tasks</h3>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={onSyncAll}
                  className="text-xs font-black uppercase tracking-widest text-primary hover:opacity-60 transition-opacity"
                >
                  Sync All
                </button>
                <span className="text-xs font-technical font-black text-on-surface-variant/40">
                  {dailyTasks.filter(t => !t.isDemo && t.isCompleted).length} / {dailyTasks.filter(t => !t.isDemo).length} Done
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {dailyTasks.length > 0 ? dailyTasks.map((task: any) => (
                <div 
                  key={task.id}
                  onClick={() => !task.isDemo && onToggle(task.id, selectedDate.getDate() - 1)}
                  className={`group relative p-4 rounded-4xl border transition-all duration-500 flex items-center justify-between active:scale-[0.98] ${
                    task.isCompleted ? 'bg-primary/5 border-primary/20' : 
                    task.isDemo ? 'bg-surface-container-low border-on-surface/5 opacity-80' :
                    'bg-surface-container-low border-on-surface/5'
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className={`size-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      task.isCompleted ? 'bg-primary text-white shadow-ambient shadow-primary/20' : 
                      'bg-surface-container-high text-on-surface-variant/40'
                    }`}>
                      {task.isCompleted ? <CheckCircle2 size={24} className="animate-in zoom-in-50 duration-300" /> : <Target size={24} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-xs font-black tracking-tight leading-none mb-1.5 transition-all duration-500 ${task.isCompleted ? "text-primary/60 line-through grayscale italic" : "text-on-surface"} ${task.isDemo ? "opacity-40" : ""}`}>
                        {task.name} {task.isDemo && "(Demo)"}
                      </h4>
                      <div className="flex items-center gap-3">
                        <span className={`text-[8px] font-technical font-black uppercase tracking-widest px-2 py-0.5 rounded-full transition-colors duration-500 ${task.priority === 'HIGH' ? 'bg-red-500/10 text-red-600' : 'bg-surface-container-highest text-on-surface-variant/60'
                          }`}>
                          {task.priority}
                        </span>
                        <div className="flex items-center gap-1 text-[8px] font-technical font-black text-on-surface-variant/40 uppercase tracking-widest">
                          <Clock size={10} /> {task.start_time || "--:--"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {task.isDemo ? (
                      <button
                        onClick={(e) => { e.stopPropagation(); manifestDemo(); }}
                        className="px-4 py-2 rounded-full bg-primary text-white text-[9px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                      >
                         <Sparkles size={10} /> Add
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={(e) => { e.stopPropagation(); onEditHabit(task); }}
                          className="size-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant/60 hover:text-primary active:scale-90 transition-all duration-300"
                        >
                          <MoreVertical size={18} />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); onSync(task); }}
                          className="size-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant/60 hover:text-primary active:scale-90 transition-all duration-300"
                        >
                          <Calendar size={16} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )) : (
                <div className="p-8 rounded-4xl bg-surface-container-low border border-dashed border-on-surface/5 text-center space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">No tasks scheduled for today</p>
                  <button onClick={() => onAddHabit("routine")} className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center justify-center gap-2 mx-auto">
                    <Plus size={12} /> Add Habit
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Mastery Section (Scrollable horizontal) */}
          <section className="pb-4">
            <div className="flex items-center gap-2 mb-4 px-2">
              <Award size={16} className="text-primary" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Syllabus Milestones</h3>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
              {masteryOnly.length > 0 ? masteryOnly.map((m) => (
                <div key={m.id} className="shrink-0 w-48 p-4 rounded-4xl bg-emerald-50 border border-emerald-100/50 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="size-8 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                      <Target size={16} />
                    </div>
                    <span className="text-[8px] font-technical font-black bg-white px-2 py-1 rounded-full text-primary uppercase shadow-sm">Day {m.scheduledDay}</span>
                  </div>
                  <h4 className="text-[11px] font-black text-on-surface line-clamp-2 leading-tight">{m.name}</h4>
                </div>
              )) : (
                <div className="w-full p-6 bg-surface-container-low rounded-4xl border border-dashed border-on-surface/5 text-center">
                  <p className="text-[10px] font-black uppercase text-on-surface-variant opacity-40">No milestones set</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

const Clock = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 16 14" />
  </svg>
);
