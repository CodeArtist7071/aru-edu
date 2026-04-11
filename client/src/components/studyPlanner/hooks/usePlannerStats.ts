import { useMemo } from "react";
import { type Habit, type PlannerStats } from "../types";

export const usePlannerStats = (habits: Habit[], progress: Record<string, boolean[]>) => {
  
  const realHabits = useMemo(() => habits.filter(h => !h.isDemo), [habits]);

  const stats = useMemo<PlannerStats>(() => {
    let totalCompleted = 0;
    realHabits.forEach((h) => {
      const p = progress[h.id];
      if (Array.isArray(p)) {
        totalCompleted += p.filter((v) => v).length;
      }
    });

    let currentStreak = 0;
    const maxDays = 31;
    for (let day = maxDays - 1; day >= 0; day--) {
      const anyDone = realHabits.some((h) => Array.isArray(progress[h.id]) && progress[h.id][day]);
      if (anyDone) {
        currentStreak++;
      } else if (currentStreak > 0) {
        break;
      }
    }

    const xp = totalCompleted * 10;
    const level = Math.floor(xp / 500) + 1;
    const xpInLevel = xp % 500;

    return { totalCompleted, currentStreak, xp, level, xpInLevel };
  }, [realHabits, progress]);

  const consistency = useMemo(() => {
    if (realHabits.length === 0) return 0;
    let totalToggles = 0;
    let correctToggles = 0;
    realHabits.forEach((h) => {
      const p = progress[h.id] || [];
      if (Array.isArray(p)) {
        totalToggles += p.length;
        correctToggles += p.filter((v) => v).length;
      }
    });
    return totalToggles > 0 ? (correctToggles / totalToggles) * 100 : 0;
  }, [realHabits, progress]);

  const overallCompletion = useMemo(() => {
    if (realHabits.length === 0) return 0;
    let completed = 0;
    realHabits.forEach((h) => {
      const prog = progress[h.id] || [];
      completed += prog.filter((v) => v).length;
    });
    return completed;
  }, [realHabits, progress]);

  const momentum = useMemo(() => {
    if (realHabits.length === 0) return 0;
    let totalStreaks = 0;
    realHabits.forEach((h) => {
      let current = 0;
      const p = progress[h.id] || [];
      for (let i = p.length - 1; i >= 0; i--) {
        if (p[i]) current++;
        else if (current > 0) break;
      }
      totalStreaks += current;
    });
    return totalStreaks;
  }, [realHabits, progress]);

  const hoursOfStudy = useMemo(() => {
    if (realHabits.length === 0) return 0;
    let totalMins = 0;
    realHabits.forEach((h) => {
      if (!h.start_time || !h.end_time) return;
      const [sh, sm] = h.start_time.split(":").map(Number);
      const [eh, em] = h.end_time.split(":").map(Number);
      const startMins = sh * 60 + sm;
      const endMins = eh * 60 + em;
      const diff = endMins - startMins;
      const doneCount = (progress[h.id] || []).filter((v) => v).length;
      totalMins += diff * doneCount;
    });
    return Math.round(totalMins / 60);
  }, [realHabits, progress]);

  const weeklyForecast = useMemo(() => {
    const forecast = [1, 2, 3, 4, 5, 6, 7].map((offset) => {
      let count = 0;
      realHabits.forEach((h) => {
        if (!h.is_recurring && h.scheduled_date) return;
        count++;
      });
      return count;
    });
    return forecast;
  }, [realHabits]);

  return {
    stats,
    consistency,
    overallCompletion,
    momentum,
    hoursOfStudy,
    weeklyForecast,
    dailyPercents: Array(31).fill(0).map((_, dayIdx) => {
      if (realHabits.length === 0) return 0;
      let completed = 0;
      realHabits.forEach(h => {
        if (progress[h.id]?.[dayIdx]) completed++;
      });
      return Math.round((completed / realHabits.length) * 100);
    }),
    weeklyDone: [0, 1, 2, 3].map(weekIdx => {
      const weekHabits = habits.filter(h => !h.isDemo);
      if (weekHabits.length === 0) return 0;
      let totalCells = weekHabits.length * 7;
      let completedCells = 0;
      weekHabits.forEach(h => {
        const p = progress[h.id] || [];
        for (let i = 0; i < 7; i++) {
          if (p[weekIdx * 7 + i]) completedCells++;
        }
      });
      return Math.round((completedCells / totalCells) * 100);
    })
  };
};
