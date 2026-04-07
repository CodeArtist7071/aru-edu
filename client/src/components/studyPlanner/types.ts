export type Habit = {
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
  duration_type?: "DAILY" | "WEEKLY" | "MONTHLY" | "CUSTOM";
  scheduled_date?: string;
  scheduled_end_date?: string;
  isDemo?: boolean;
};

export type PlannerStats = {
  totalCompleted: number;
  currentStreak: number;
  xp: number;
  level: number;
  xpInLevel: number;
  dailyPercents?: number[];
  weeklyDone?: number[];
};

export interface Chapter {
  id: string;
  name: string;
  subjects?: {
    id: string;
    name: string;
  };
}
