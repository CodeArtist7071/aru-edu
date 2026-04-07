import { useState, useMemo, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useNotifications } from "reapop";
import { supabase } from "../../../utils/supabase";
import type { RootState, AppDispatch } from "../../../store";
import { updateUserLocally } from "../../../slice/userSlice";
import { useGoogleCalendar } from "../../../utils/useGoogleCalender";
import { type Habit } from "../types";

export const useTrackerGridLogic = (
  initialHabits: Habit[],
  initialProgress: Record<string, boolean[]>,
  viewMonth: number,
  viewYear: number,
  onRefresh: () => void,
  onModalOpenHandled?: () => void,
  onShowAddTask?: () => void,
  setEditingHabitId?: (id: string | null) => void,
  setValue?: any,
  selectedDate?: Date
) => {
  const { eid: examId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { notify } = useNotifications();
  const { connected, addEvent, editEvent } = useGoogleCalendar();
  const { user, profile } = useSelector((state: RootState) => state.user);

  const now = new Date();
  const currentMonthIdx = now.getMonth();
  const currentYear = now.getFullYear();
  const currentMonth = currentMonthIdx + 1;
  const today = now.getDate();

  const daysInMonth = new Date(viewYear, viewMonth, 0).getDate();
  const rotatedDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const [viewMode, setViewMode] = useState<'monthly' | 'weekly'>('monthly');
  const [activeWeek, setActiveWeek] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [unlockPastDays, setUnlockPastDays] = useState(false);
  const [reminderTest, setReminderTest] = useState<any>(null);
  const [lastTriggeredId, setLastTriggeredId] = useState<string | null>(null);
  const [dismissedRenewals, setDismissedRenewals] = useState<Set<string>>(new Set());

  // Sync active week to current date
  useEffect(() => {
    if (viewMonth === currentMonth && viewYear === currentYear) {
      const weekIdx = Math.floor((today - 1) / 7);
      setActiveWeek(Math.min(weekIdx, 4));
    } else {
      setActiveWeek(0);
    }
  }, [viewMonth, viewYear, currentMonth, currentYear, today]);

  const realHabits = useMemo(() => initialHabits.filter(h => !h.isDemo), [initialHabits]);
  
  const filteredHabits = useMemo(() => {
    let list = initialHabits;

    // Search filter
    if (searchTerm) {
      list = list.filter((h) => h.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Selected Date Filter
    if (selectedDate) {
      list = list.filter((habit) => {
        if (!habit.scheduled_date) return true; // fallback
        
        const cellDate = new Date(selectedDate);
        const startDate = new Date(habit.scheduled_date);
        startDate.setHours(0, 0, 0, 0);
        cellDate.setHours(0, 0, 0, 0);

        // Include habits that are active today
        let isActive = true;
        if (cellDate < startDate) {
          isActive = false;
        } else {
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
        }

        if (isActive) return true;

        // ALSO include habits that ended exactly yesterday for "Renew Suggestion"
        const prevDate = new Date(selectedDate);
        prevDate.setDate(prevDate.getDate() - 1);
        prevDate.setHours(0, 0, 0, 0);

        if (habit.duration_type === "DAILY") {
          return prevDate.getTime() === startDate.getTime();
        } else if (habit.duration_type === "WEEKLY") {
          const endDate = new Date(startDate);
          endDate.setDate(startDate.getDate() + 6);
          endDate.setHours(0, 0, 0, 0);
          return prevDate.getTime() === endDate.getTime();
        } else if (habit.duration_type === "CUSTOM" && habit.scheduled_end_date) {
          const endDate = new Date(habit.scheduled_end_date);
          endDate.setHours(0, 0, 0, 0);
          return prevDate.getTime() === endDate.getTime();
        }

        return false;
      });
    }

    return list;
  }, [initialHabits, searchTerm, selectedDate]);

  const duplicateHabit = useCallback(async (habit: Habit) => {
    if (!user?.id || !selectedDate) return;
    try {
      const table = habit.is_mastery ? "user_mastery" : "study_habits";
      const newProgress = Array(31).fill(false);
      newProgress[selectedDate.getDate() - 1] = true;

      // Smart Temporal Interval Manifestation
      let scheduled_end_date = null;
      if (habit.duration_type === "WEEKLY") {
        const end = new Date(selectedDate);
        end.setDate(end.getDate() + 6);
        scheduled_end_date = end.toISOString().split('T')[0];
      } else if (habit.duration_type === "MONTHLY") {
        const end = new Date(selectedDate);
        end.setMonth(end.getMonth() + 1);
        end.setDate(end.getDate() - 1);
        scheduled_end_date = end.toISOString().split('T')[0];
      }

      const newStartStr = selectedDate.toISOString().split('T')[0];

      // Existence Manifestation Check
      const { data: existing } = await supabase
        .from(table)
        .select("id")
        .eq("user_id", user.id)
        .eq("name", habit.name)
        .eq("scheduled_date", newStartStr)
        .maybeSingle();

      if (existing) {
        notify({ message: `"${habit.name}" already persists for this manifestation period.`, title: "Already Manifested", status: "info" });
        onRefresh();
        return;
      }

      const newHabitData: any = {
        user_id: user.id,
        name: habit.name,
        priority: habit.priority,
        category: habit.category,
        start_time: habit.start_time,
        end_time: habit.end_time,
        chapter_id: habit.chapter_id,
        is_recurring: habit.is_recurring,
        duration_type: habit.duration_type,
        scheduled_date: newStartStr,
        scheduled_end_date,
        month: selectedDate.getMonth() + 1,
        year: selectedDate.getFullYear(),
        progress: newProgress,
        exam_id: examId,
      };

      const { error } = await supabase.from(table).insert(newHabitData);
      if (error) throw error;
      
      notify({ message: `"${habit.name}" renewed for ${selectedDate.toDateString()}`, title: "Manifested", status: "success" });
      onRefresh();
    } catch (err: any) {
      notify({ message: err.message || "Renewal failed", title: "Persistence Error", status: "error" });
    }
  }, [user?.id, selectedDate, examId, onRefresh, notify]);

  const dismissRenewal = useCallback((habitId: string) => {
    setDismissedRenewals(prev => new Set(prev).add(habitId));
  }, []);

  const renderedDays = useMemo(() => {
    if (viewMode === 'monthly') return rotatedDays;
    const start = activeWeek * 7;
    return activeWeek === 4 ? rotatedDays.slice(28) : rotatedDays.slice(start, start + 7);
  }, [viewMode, activeWeek, rotatedDays]);

  const dailyStats = useMemo(() => {
    return rotatedDays.map((_, dayIdx) => {
      const actualDayIdx = dayIdx;
      let completed = 0;
      realHabits.forEach((h) => {
        if (initialProgress[h.id]?.[actualDayIdx]) completed++;
      });
      const total = realHabits.length || 1;
      const percent = Math.round((completed / total) * 100);
      return { completed, total, percent };
    });
  }, [realHabits, initialProgress, rotatedDays]);

  const overallProgress = useMemo(() => {
    let totalCells = realHabits.length * daysInMonth;
    let completedCells = 0;
    realHabits.forEach((h) => {
      initialProgress[h.id]?.forEach((done) => {
        if (done) completedCells++;
      });
    });
    return totalCells === 0 ? "0.0" : ((completedCells / totalCells) * 100).toFixed(1);
  }, [realHabits, initialProgress, daysInMonth]);

  const dailyPercents = useMemo(() => dailyStats.map(s => s.percent), [dailyStats]);

  const weeklyDone = useMemo(() => {
    return [0, 1, 2, 3, 4].map(weekIdx => {
      if (realHabits.length === 0) return 0;
      const start = weekIdx * 7;
      const end = weekIdx === 4 ? daysInMonth : Math.min(start + 7, daysInMonth);
      const weekLength = end - start;
      if (weekLength <= 0) return 0;

      let totalCells = realHabits.length * weekLength;
      let completedCells = 0;
      realHabits.forEach(h => {
        const p = initialProgress[h.id] || [];
        for (let i = start; i < end; i++) {
          if (p[i]) completedCells++;
        }
      });
      return Math.round((completedCells / totalCells) * 100);
    });
  }, [realHabits, initialProgress, daysInMonth]);

  const dailyHours = useMemo(() => {
    const hours = Array(31).fill(0);
    realHabits.forEach((habit) => {
      if (!habit.start_time || !habit.end_time) return;
      const [sh, sm] = habit.start_time.split(":").map(Number);
      const [eh, em] = habit.end_time.split(":").map(Number);
      const duration = (eh * 60 + em - (sh * 60 + sm)) / 60;
      if (duration <= 0) return;

      const prog = initialProgress[habit.id] || [];
      prog.forEach((done, dayIdx) => {
        if (done) hours[dayIdx] += duration;
      });
    });
    return hours;
  }, [realHabits, initialProgress]);

  const habitsWithStreaks = useMemo(() => {
    return filteredHabits.map((h) => {
      const progressArr = initialProgress[h.id] || [];
      let currentStreak = 0;
      let maxStreak = 0;
      let tempStreak = 0;

      progressArr.forEach((done) => {
        if (done) {
          tempStreak++;
          maxStreak = Math.max(maxStreak, tempStreak);
        } else {
          tempStreak = 0;
        }
      });

      for (let i = progressArr.length - 1; i >= 0; i--) {
        if (progressArr[i]) {
          currentStreak++;
        } else if (currentStreak > 0) {
          break;
        }
      }
      return { ...h, currentStreak, maxStreak };
    });
  }, [filteredHabits, initialProgress]);

  const handleAddMastery = useCallback(async (chapter: any, date: string, startTime: string, endTime: string, syncToCalendar?: boolean) => {
    if (!user?.id) return;
    try {
      const initialProg = Array(31).fill(false);
      const scheduledDate = new Date(date);
      if (scheduledDate.getMonth() + 1 === viewMonth && scheduledDate.getFullYear() === viewYear) {
        const dayIdx = scheduledDate.getDate() - 1;
        if (dayIdx >= 0 && dayIdx < 31) initialProg[dayIdx] = true;
      }

      const { data: insertedMastery, error: insertError } = await supabase
        .from("user_mastery")
        .insert({
          user_id: user.id,
          chapter_id: chapter.id,
          priority: "MEDIUM",
          start_time: startTime,
          end_time: endTime,
          progress: initialProg,
          month: viewMonth,
          year: viewYear,
          exam_id: examId,
        })
        .select().single();

      if (insertError) throw insertError;

      if (connected && syncToCalendar && insertedMastery) {
        const start = new Date(date);
        const [sh, sm] = startTime.split(':').map(Number);
        start.setHours(sh, sm, 0, 0);
        const end = new Date(date);
        const [eh, em] = endTime.split(':').map(Number);
        end.setHours(eh, em, 0, 0);

        await addEvent({
          summary: `Test: ${chapter.name || "Study Mastery"}`,
          description: `Scheduled Test for ${chapter.name}. Odisha Exam Prep.`,
          colorId: "5",
          start: { dateTime: start.toISOString(), timeZone: "Asia/Kolkata" },
          end: { dateTime: end.toISOString(), timeZone: "Asia/Kolkata" },
        });
      }

      notify({ message: "Test scheduled successfully!", title: "Success", status: "success" });
      onRefresh();
    } catch (err: any) {
      notify({ message: err.message || "Failed to schedule test", title: "Error", status: "error" });
    }
  }, [user?.id, viewMonth, viewYear, examId, connected, addEvent, notify, onRefresh]);

  const editHabit = useCallback((habit: Habit) => {
    onModalOpenHandled?.();
    if (setEditingHabitId) {
      setEditingHabitId(habit.id);
      onShowAddTask?.();
    }
    if (setValue) {
      setValue("habit", habit.name);
      setValue("priority", habit.priority);
      setValue("start_time", habit.start_time || "");
      setValue("end_time", habit.end_time || "");
    }
    window.scrollTo({ top: 300, behavior: "smooth" });
  }, [onModalOpenHandled, setEditingHabitId, onShowAddTask, setValue]);

  const handleDelete = useCallback(async (habit: Habit) => {
    if (!window.confirm(`Are you sure you want to delete "${habit.name}"? This action is permanent.`)) return;
    try {
      const table = habit.is_mastery ? "user_mastery" : "study_habits";
      const { error } = await supabase.from(table).delete().eq("id", habit.id);
      if (error) throw error;
      notify({ message: "Manifestation removed", title: "Success", status: "success" });
      onRefresh();
    } catch (err: any) {
      notify({ message: err.message || "Failed to remove ritual", title: "Error", status: "error" });
    }
  }, [notify, onRefresh]);

  return {
    viewMonth, viewYear, monthName: new Date(viewYear, viewMonth - 1).toLocaleString("default", { month: "long" }),
    daysInMonth, today, viewMode, setViewMode, activeWeek, setActiveWeek, 
    searchTerm, setSearchTerm, unlockPastDays, setUnlockPastDays,
    reminderTest, setReminderTest, renderedDays, realHabits, filteredHabits,
    dailyStats, overallProgress, dailyHours, habitsWithStreaks,
    dailyPercents, weeklyDone,
    handleAddMastery, editHabit, handleDelete,
    duplicateHabit, dismissRenewal, dismissedRenewals
  };
};
