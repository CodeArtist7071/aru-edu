import React from "react";
import { type Habit } from "../types";
import { Zap, Book, ClipboardList, RefreshCcw, Clock } from "lucide-react";

interface RitualTooltipProps {
  habit: Habit;
  visible: boolean;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  theory: <Book className="size-3" />,
  mcq: <ClipboardList className="size-3" />,
  revision: <RefreshCcw className="size-3" />,
  mock: <Zap className="size-3" />,
};

const format12h = (time: string) => {
  if (!time) return "N/A";
  const [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hours = h % 12 || 12;
  return `${hours}:${String(m).padStart(2, "0")} ${ampm}`;
};

export const RitualTooltip: React.FC<RitualTooltipProps> = ({ habit, visible }) => {
  if (!visible) return null;

  return (
    <div 
      className="absolute bottom-full left-6 mb-2 z-50 w-64 pointer-events-none animate-in fade-in slide-in-from-bottom-1 duration-200"
    >
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl p-4 overflow-hidden relative">
        {/* Accent Glow */}
        <div 
          className="absolute top-0 left-0 w-1 h-full"
          style={{ backgroundColor: habit.priority === "HIGH" ? "#ef4444" : habit.priority === "MEDIUM" ? "#f59e0b" : "#10b981" }}
        />

        <div className="flex flex-col gap-3">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Manifest Ritual</span>
            <h5 className="text-sm font-black text-white leading-tight uppercase tracking-tight">{habit.name}</h5>
          </div>

          <hr className="border-slate-800" />

          {/* Technical Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Priority */}
            <div className="flex flex-col gap-1">
               <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Priority</span>
               <div className="flex items-center gap-1.5">
                  <div className={`size-1.5 rounded-full ${habit.priority === "HIGH" ? "bg-red-500" : habit.priority === "MEDIUM" ? "bg-amber-500" : "bg-emerald-500"}`} />
                  <span className="text-[10px] font-bold text-slate-300 uppercase">{habit.priority}</span>
               </div>
            </div>

            {/* Category */}
            <div className="flex flex-col gap-1">
               <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Category</span>
               <div className="flex items-center gap-1.5 text-slate-300">
                  {CATEGORY_ICONS[habit.category] || <Book className="size-3" />}
                  <span className="text-[10px] font-bold uppercase">{habit.category}</span>
               </div>
            </div>

            {/* Timing */}
            <div className="flex flex-col gap-1 col-span-2">
               <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Manifestation Window</span>
               <div className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="size-3 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-tight">
                    {format12h(habit.start_time || "")} — {format12h(habit.end_time || "")}
                  </span>
               </div>
            </div>

            {/* Cycle */}
            <div className="flex flex-col gap-1 col-span-2">
               <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Scheduled Cycle</span>
               <div className="flex items-center gap-1.5 text-slate-300">
                  <RefreshCcw className="size-3 text-emerald-400" />
                  <span className="text-[10px] font-bold uppercase tracking-tight">
                    {habit.duration_type === "DAILY" ? "Today" : habit.duration_type || "Custom"} Persistence
                  </span>
               </div>
            </div>
          </div>
        </div>

        {/* Technical Stamp Overlay */}
        <div className="absolute -bottom-1 -right-1 opacity-10 rotate-12 pointer-events-none">
           <Zap className="size-16 text-white" />
        </div>
      </div>
      
      {/* Tooltip Arrow alternative (refined line) */}
      <div className="mx-8 w-px h-2 bg-slate-700" />
    </div>
  );
};
