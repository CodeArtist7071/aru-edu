import { useState, useEffect, useCallback, useMemo } from "react";
import { supabase } from "../../../utils/supabase";
import { type Habit } from "../types";
import { DEMO_HABITS } from "../constants";

export const useStudyPlanner = (user: any, examId: string | undefined, profile: any) => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [progress, setProgress] = useState<Record<string, boolean[]>>({});
  const [loading, setLoading] = useState(true);
  
  const now = new Date();
  const [viewMonth, setViewMonth] = useState(now.getMonth() + 1);
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isSettingUp, setIsSettingUp] = useState(false);
  const [hasPrevMonthTasks, setHasPrevMonthTasks] = useState(false);

  const fetchData = useCallback(async () => {
    if (!user?.id) return;
    try {
      setLoading(true);
      const [habitsRes, masteryRes] = await Promise.all([
        supabase
          .from("study_habits")
          .select("*")
          .eq("user_id", user.id)
          .eq("exam_id", examId)
          .eq("month", String(viewMonth))
          .eq("year", String(viewYear)),
        supabase
          .from("user_mastery")
          .select("*, chapters(name)")
          .eq("user_id", user.id)
          .eq("exam_id", examId)
          .eq("month", String(viewMonth))
          .eq("year", String(viewYear)),
      ]);

      const allHabits: Habit[] = [];
      const allProgress: Record<string, boolean[]> = {};

      const safeParseProgress = (p: any) => {
        if (Array.isArray(p)) return p;
        if (typeof p === "string") {
          try {
            return JSON.parse(p);
          } catch {
            return Array(31).fill(false);
          }
        }
        return Array(31).fill(false);
      };

      const habitsData = habitsRes.data || [];
      const masteryData = masteryRes.data || [];

      habitsData.forEach((h) => {
        allHabits.push({
          id: h.id,
          name: h.name,
          priority: h.priority,
          category: h.category,
          start_time: h.start_time,
          end_time: h.end_time,
          is_recurring: h.is_recurring !== false,
          duration_type: h.duration_type || "MONTHLY",
          scheduled_date: h.scheduled_date,
          scheduled_end_date: h.scheduled_end_date,
        });
        allProgress[h.id] = safeParseProgress(h.progress);
      });

      masteryData.forEach((m) => {
        allHabits.push({
          id: m.id,
          name: m.chapters?.name || "Unknown Chapter",
          priority: m.priority as any,
          category: "theory",
          start_time: m.start_time,
          end_time: m.end_time,
          is_mastery: true,
          chapter_id: m.chapter_id,
          exam_id: examId,
          is_recurring: m.is_recurring !== false,
          duration_type: "DAILY",
          scheduled_date: m.scheduled_date,
          scheduled_end_date: m.scheduled_end_date,
        });
        allProgress[m.id] = safeParseProgress(m.progress);
      });

      const finalHabits = allHabits.length === 0 ? DEMO_HABITS : allHabits;
      setHabits(finalHabits);
      setProgress(allProgress);
      setIsSettingUp(allHabits.length === 0);

      const prevMonth = viewMonth === 1 ? 12 : viewMonth - 1;
      const prevYear = viewMonth === 1 ? viewYear - 1 : viewYear;

      const [{ count: habitCount }, { count: masteryCount }] = await Promise.all([
        supabase
          .from("study_habits")
          .select("*", { count: "exact", head: true })
          .eq("user_id", user.id)
          .eq("exam_id", examId)
          .eq("month", String(prevMonth))
          .eq("year", String(prevYear)),
        supabase
          .from("user_mastery")
          .select("*", { count: "exact", head: true })
          .eq("exam_id", examId)
          .eq("user_id", user.id)
          .eq("month", String(prevMonth))
          .eq("year", String(prevYear)),
      ]);

      setHasPrevMonthTasks((habitCount || 0) + (masteryCount || 0) > 0);
    } catch (err) {
      console.error("Error fetching study data:", err);
    } finally {
      setLoading(false);
    }
  }, [user?.id, examId, viewMonth, viewYear]);

  const handleToggle = useCallback(async (id: string, index: number) => {
    const habit = habits.find((h) => h.id === id);
    if (!habit || !user?.id) return;

    const newProg = [...(progress[id] || Array(31).fill(false))];
    newProg[index] = !newProg[index];

    setProgress((prev) => ({ ...prev, [id]: newProg }));

    try {
      const table = habit.is_mastery ? "user_mastery" : "study_habits";
      await supabase
        .from(table)
        .update({
          progress: newProg,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id);
    } catch (err) {
      console.error("Toggle Error:", err);
      fetchData();
    }
  }, [habits, progress, user?.id, fetchData]);

  const handleCopyPreviousMonth = useCallback(async () => {
    if (!user?.id) return;
    try {
      setLoading(true);
      const prevMonth = viewMonth === 1 ? 12 : viewMonth - 1;
      const prevYear = viewMonth === 1 ? viewYear - 1 : viewYear;

      const [{ data: prevHabits }, { data: prevMastery }] = await Promise.all([
        supabase.from("study_habits").select("*").eq("user_id", user.id).eq("month", prevMonth).eq("year", prevYear),
        supabase.from("user_mastery").select("*").eq("user_id", user.id).eq("month", prevMonth).eq("year", prevYear),
      ]);

      const news: any[] = [];
      if (prevHabits) {
        prevHabits.forEach((h) => {
          const { id, created_at, updated_at, ...rest } = h;
          news.push(supabase.from("study_habits").insert({ ...rest, month: String(viewMonth), year: String(viewYear), exam_id: examId, progress: Array(31).fill(false) }));
        });
      }
      if (prevMastery) {
        prevMastery.forEach((m) => {
          const { id, created_at, ...rest } = m;
          news.push(supabase.from("user_mastery").insert({ ...rest, month: String(viewMonth), year: String(viewYear), exam_id: examId, progress: Array(31).fill(false) }));
        });
      }

      if (news.length > 0) await Promise.all(news);
      setIsSettingUp(false);
      fetchData();
    } catch (err) {
      console.error("Copy Failed:", err);
    } finally {
      setLoading(false);
    }
  }, [user?.id, examId, viewMonth, viewYear, fetchData]);

  const handleMonthChange = useCallback((direction: "prev" | "next") => {
    setHabits([]);
    setProgress({});
    setLoading(true);
    let newMonth = viewMonth;
    let newYear = viewYear;

    if (direction === "prev") {
      if (viewMonth === 1) { newMonth = 12; newYear = viewYear - 1; }
      else { newMonth = viewMonth - 1; }
    } else {
      if (viewMonth === 12) { newMonth = 1; newYear = viewYear + 1; }
      else { newMonth = viewMonth + 1; }
    }
    setViewMonth(newMonth);
    setViewYear(newYear);
    setSelectedDate(new Date(newYear, newMonth - 1, 1));
  }, [viewMonth, viewYear]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    habits,
    progress,
    loading,
    viewMonth,
    viewYear,
    selectedDate,
    isSettingUp,
    hasPrevMonthTasks,
    setSelectedDate,
    setIsSettingUp,
    fetchData,
    handleToggle,
    handleCopyPreviousMonth,
    handleMonthChange,
    manifestDemo: async () => {
      if (!user?.id || habits.length === 0) return;
      setLoading(true);
      try {
        const demoRoutines = habits.filter(h => h.isDemo && !h.is_mastery);
        const demoMastery = habits.filter(h => h.isDemo && h.is_mastery);

        const routinesToInsert = demoRoutines.map(h => ({
          user_id: user.id,
          name: h.name,
          priority: h.priority,
          category: h.category,
          start_time: h.start_time,
          end_time: h.end_time,
          month: String(viewMonth),
          year: String(viewYear),
          exam_id: examId,
          is_recurring: true,
          progress: Array(31).fill(false)
        }));

        const masteryToInsert = demoMastery.map(h => ({
          user_id: user.id,
          chapter_id: h.chapter_id,
          priority: h.priority,
          start_time: h.start_time,
          end_time: h.end_time,
          month: viewMonth,
          year: viewYear,
          exam_id: examId,
          progress: Array(31).fill(false)
        }));

        if (routinesToInsert.length > 0) {
          const { error: rErr } = await supabase.from("study_habits").insert(routinesToInsert);
          if (rErr) throw rErr;
        }

        if (masteryToInsert.length > 0) {
          const { error: mErr } = await supabase.from("user_mastery").insert(masteryToInsert);
          if (mErr) throw mErr;
        }

        setIsSettingUp(false);
        fetchData();
      } catch (err) {
        console.error("Manifest Error:", err);
      } finally {
        setLoading(false);
      }
    }
  };
};
