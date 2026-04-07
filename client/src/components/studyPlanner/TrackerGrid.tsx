import {
  Plus,
  Loader,
  Book,
  ArrowRight,
  Sparkles,
  CheckSquare
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";
import { HabitRow } from "./HabitRow";
import { GridHeader } from "./GridHeader";
import { GridDayHeaderRow } from "./grid/GridDayHeaderRow";
import { GridWeekFooterRow } from "./grid/GridWeekFooterRow";

// Modular Logic
import { useTrackerGridLogic } from "./hooks/useTrackerGridLogic";
import { AlertPopup } from "../ui/AlertPopup";
import { type Habit } from "./types";

const FastHabitRow = React.memo(HabitRow);

interface TrackerGridProps {
  initialHabits?: Habit[];
  initialProgress?: Record<string, boolean[]>;
  onToggle: (id: string, index: number) => void;
  onRefresh: () => void;
  isLoading?: boolean;
  viewMonth: number;
  viewYear: number;
  onMonthChange: (direction: "prev" | "next") => void;
  isSettingUp?: boolean;
  onCopyPrevious?: () => void;
  onStartFresh?: () => void;
  autoOpenAddModal?: boolean;
  onModalOpenHandled?: () => void;
  hasPrevMonthTasks?: boolean;
  isPastMonth?: boolean;
  onShowMastery?: () => void;
  onShowAddTask?: () => void;
  selectedDate?: Date;
  onSelectDate?: (date: Date) => void;
  initialUseChapter?: boolean;
  editingHabitId?: string | null;
  setEditingHabitId: (id: string | null) => void;
  setShowSelector: (show: boolean) => void;
  manifestDemo?: () => void;
}

export default function TrackerGrid(props: TrackerGridProps) {
  const {
    initialHabits = [],
    initialProgress = {},
    onToggle,
    onRefresh,
    isLoading = false,
    viewMonth,
    viewYear,
    selectedDate,
    onSelectDate,
    onMonthChange,
    isSettingUp = false,
    onModalOpenHandled,
    onShowMastery,
    onShowAddTask,
    setEditingHabitId,
    manifestDemo,
  } = props;

    const {
    monthName,
    viewMode, setViewMode, activeWeek, setActiveWeek,
    searchTerm, setSearchTerm, unlockPastDays, setUnlockPastDays,
    reminderTest, setReminderTest, renderedDays, realHabits,
    dailyStats, overallProgress, habitsWithStreaks,
    editHabit, handleDelete, dailyPercents, weeklyDone,
    duplicateHabit, dismissRenewal, dismissedRenewals
  } = useTrackerGridLogic(
    initialHabits,
    initialProgress,
    viewMonth,
    viewYear,
    onRefresh,
    onModalOpenHandled,
    onShowAddTask,
    setEditingHabitId,
    () => {}, // mock setValue
    selectedDate
  );

  return (
    <div className="flex flex-col text-on-surface w-full h-full bg-white min-w-0 relative animate-in fade-in duration-700">
      {/* Top Header Section (Emily Excels Title & Active Days) */}
      <div className="bg-emerald-800 text-white p-6 shadow-lg border-b-4 border-emerald-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div>
              <h1 className="text-6xl font-black tracking-tighter uppercase leading-none">{monthName}</h1>
              <p className="text-[10px] font-technical font-black tracking-[0.4em] text-emerald-300 opacity-60 uppercase mt-2 pl-2">Monthly Study Persistence</p>
           </div>
           <div className="flex-1 max-w-md w-full space-y-2">
              <div className="flex justify-between items-end">
                 <span className="text-[10px] font-technical font-black uppercase tracking-widest text-emerald-300 opacity-60">Active Days Manifestation</span>
                 <span className="text-4xl font-black leading-none">{overallProgress}%</span>
              </div>
              <div className="h-6 bg-emerald-950/50 rounded-lg overflow-hidden border border-emerald-700/50 p-1">
                 <div 
                   className="h-full bg-emerald-400 rounded shadow-lg shadow-emerald-400/20 transition-all duration-1000 ease-out"
                   style={{ width: `${overallProgress}%` }}
                 />
              </div>
           </div>
        </div>
      </div>

      <GridHeader
        monthName={monthName}
        viewYear={viewYear}
        viewMonth={viewMonth}
        overallProgress={overallProgress}
        onMonthChange={onMonthChange}
        viewMode={viewMode}
        setViewMode={setViewMode}
        activeWeek={activeWeek}
        setActiveWeek={setActiveWeek}
        unlockPastDays={unlockPastDays}
        setUnlockPastDays={setUnlockPastDays}
      />

      <div className="flex-1 overflow-auto bg-white relative shadow-inner">
        <table className="w-max min-w-full border-separate border-spacing-0 text-xs select-none">
          <thead>
            <GridDayHeaderRow 
              days={renderedDays} 
              dailyPercents={dailyPercents} 
              viewYear={viewYear} 
              viewMonth={viewMonth}
              onSelectDate={onSelectDate}
              selectedDate={selectedDate}
              onShowAddTask={onShowAddTask}
              onShowMastery={onShowMastery}
            />
          </thead>

          <tbody>
            {(isLoading && realHabits.length === 0) ? (
              <tr><td colSpan={renderedDays.length + 3} className="p-10 text-center"><Loader className="animate-spin text-slate-400 mx-auto" /></td></tr>
            ) : (
              <>
                {isSettingUp && (
                   <tr className="border-none">
                     <td colSpan={renderedDays.length + 3} className="p-0 border-none relative">
                       <div className="sticky left-0 right-0 mx-auto w-full max-w-5xl px-6 py-8 animate-in fade-in slide-in-from-top-4 duration-700">
                         <div className="bg-surface/80 backdrop-blur-2xl rounded-[2.5rem] shadow-ambient-2xl border border-emerald-500/10 p-10 flex flex-col md:flex-row items-center gap-10">
                           <div className="flex-1 space-y-4">
                             <div className="flex items-center gap-3">
                               <div className="size-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center animate-pulse">
                                 <Sparkles size={20} />
                               </div>
                               <h3 className="text-2xl font-black tracking-tighter text-slate-800">Laboratory Onboarding</h3>
                             </div>
                             <p className="text-sm font-medium text-on-surface-variant leading-relaxed opacity-70">
                               Your Greenhouse is currently hosting <span className="text-primary font-black">Laboratory Templates</span>. Manifest ritual manifestation to start your study persistence voyage.
                             </p>
                             <div className="flex flex-wrap gap-4 pt-2">
                                <button onClick={manifestDemo} className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-technical font-black text-[10px] uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                                  Manifest Rituals <ArrowRight size={14} />
                                </button>
                                <button onClick={onShowAddTask} className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-technical font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">
                                  Start Fresh +
                                </button>
                             </div>
                           </div>
                         </div>
                       </div>
                     </td>
                   </tr>
                )}
                {habitsWithStreaks.map((habit) => {
                  let habitIsActiveToday = false;
                  const cells = renderedDays.map((day) => {
                    const actualDayIdx = day - 1;
                    const cellDate = new Date(viewYear, viewMonth - 1, day);
                    const isToday = new Date().toDateString() === cellDate.toDateString();
                    
                    // Temporal Activation Logic
                    let isActive = true;
                    if (habit.scheduled_date) {
                      const startDate = new Date(habit.scheduled_date);
                      startDate.setHours(0, 0, 0, 0);
                      cellDate.setHours(0, 0, 0, 0);

                      if (cellDate < startDate) {
                        isActive = false;
                      } else {
                        // Handle End Dates based on duration_type
                        if (habit.duration_type === "DAILY") {
                          if (cellDate.getTime() !== startDate.getTime()) isActive = false;
                        } else if (habit.duration_type === "WEEKLY") {
                          const endDate = new Date(startDate);
                          endDate.setDate(startDate.getDate() + 6);
                          if (cellDate > endDate) isActive = false;
                        } else if (habit.duration_type === "CUSTOM" && habit.scheduled_end_date) {
                          const endDate = new Date(habit.scheduled_end_date);
                          endDate.setHours(23, 59, 59, 999);
                          if (cellDate > endDate) isActive = false;
                        }
                        // MONTHLY is active for the whole visible month (or until end of time)
                      }
                    }

                    if (selectedDate && cellDate.toDateString() === selectedDate.toDateString() && isActive) {
                      habitIsActiveToday = true;
                    }

                    return {
                      actualDayIdx,
                      isDone: initialProgress[habit.id]?.[actualDayIdx] || false,
                      isToday,
                      isActive,
                    };
                  });

                  // Calculate Expiration for "Renew Manifestation" suggestment
                  let isRecentlyExpired = false;
                  if (selectedDate && !habitIsActiveToday && !dismissedRenewals.has(habit.id)) {
                    // Check if it ended exactly yesterday relative to selectedDate
                    const prevDate = new Date(selectedDate);
                    prevDate.setDate(prevDate.getDate() - 1);
                    prevDate.setHours(0, 0, 0, 0);

                    if (habit.scheduled_date) {
                      const startDate = new Date(habit.scheduled_date);
                      startDate.setHours(0, 0, 0, 0);

                      if (habit.duration_type === "DAILY") {
                        if (prevDate.getTime() === startDate.getTime()) isRecentlyExpired = true;
                      } else if (habit.duration_type === "WEEKLY") {
                        const endDate = new Date(startDate);
                        endDate.setDate(startDate.getDate() + 6);
                        endDate.setHours(0, 0, 0, 0);
                        if (prevDate.getTime() === endDate.getTime()) isRecentlyExpired = true;
                      } else if (habit.duration_type === "CUSTOM" && habit.scheduled_end_date) {
                        const endDate = new Date(habit.scheduled_end_date);
                        endDate.setHours(0, 0, 0, 0);
                        if (prevDate.getTime() === endDate.getTime()) isRecentlyExpired = true;
                      }
                    }
                  }

                  return (
                    <FastHabitRow
                      key={habit.id}
                      habit={habit}
                      cells={cells}
                      onToggle={onToggle}
                      onEdit={() => editHabit(habit)}
                      onDelete={() => handleDelete(habit)}
                      onDuplicate={() => duplicateHabit(habit)}
                      onDismiss={() => dismissRenewal(habit.id)}
                      unlockPastDays={unlockPastDays}
                      isExpired={isRecentlyExpired}
                    />
                  );
                })}
                {/* Weekly Summary Row */}
                <GridWeekFooterRow days={renderedDays} weeklyDone={weeklyDone} />

                {/* Spacer logic if needed */}
              </>
            )}
          </tbody>
        </table>
      </div>

      <AlertPopup 
        isOpen={!!reminderTest} 
        onClose={() => setReminderTest(null)}
        title="Study Manifestation Reminder"
        message={`It's time for "${reminderTest?.name}". Growing your knowledge forest requires consistent manifestation.`}
      >
        <div className="flex gap-4 w-full justify-end mt-4">
          <button onClick={() => setReminderTest(null)} className="px-6 py-2 rounded-full text-[10px] font-technical font-black uppercase tracking-widest text-slate-400 hover:bg-slate-50 transition-all text-right">Acknowledge</button>
          <button onClick={() => {/* test logic */}} className="px-6 py-2 bg-emerald-600 text-white rounded-full text-[10px] font-technical font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all text-right">Initiate manifestation</button>
        </div>
      </AlertPopup>
    </div>
  );
}
