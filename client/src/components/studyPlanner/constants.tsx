import { type Habit } from "./types";

export const getTodayStr = () => new Date().toISOString().split('T')[0];

export const WEEK_COLORS = ["#10B981", "#A855F7", "#F43F5E", "#F59E0B", "#94A3B8"];

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
