import React, { useMemo, useState, useRef, useEffect } from "react";
import { Edit2, CheckSquare, Trash2, Sparkles, RefreshCw, X } from "lucide-react";
import { type Habit } from "./types";
import { WEEK_COLORS } from "./constants";
import { RitualTooltip } from "./grid/RitualTooltip";

interface HabitRowProps {
  habit: Habit;
  cells: {
    actualDayIdx: number;
    isDone: boolean;
    isToday: boolean;
    isActive?: boolean;
  }[];
  onToggle: (id: string, index: number) => void;
  onEdit: () => void;
  onDelete: () => void;
  onDuplicate?: () => void;
  onDismiss?: () => void;
  unlockPastDays?: boolean;
  isExpired?: boolean;
}

const format12h = (time: string) => {
  if (!time) return "N/A";
  const [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hours = h % 12 || 12;
  return `${hours}:${String(m).padStart(2, "0")} ${ampm}`;
};

export const HabitRow: React.FC<HabitRowProps> = ({
  habit,
  cells,
  onToggle,
  onEdit,
  onDelete,
  onDuplicate,
  onDismiss,
  unlockPastDays = false,
  isExpired = false,
}) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentStreak = useMemo(() => {
    let streak = 0;
    for (let i = cells.length - 1; i >= 0; i--) {
      if (cells[i].isDone) streak++;
      else if (streak > 0) break;
    }
    return streak;
  }, [cells]);

  const maxStreak = useMemo(() => {
    let max = 0;
    let current = 0;
    cells.forEach((c) => {
      if (c.isDone) current++;
      else {
        max = Math.max(max, current);
        current = 0;
      }
    });
    return Math.max(max, current);
  }, [cells]);

  // Long press logic for mobile
  const handlePointerDown = () => {
    longPressTimer.current = setTimeout(() => {
      setTooltipVisible(true);
    }, 500);
  };

  const handlePointerUp = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  const handlePointerLeave = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
    setTooltipVisible(false);
  };

  useEffect(() => {
    return () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current);
      }
    };
  }, []);

  return (
    <tr key={habit.id} className="group/row hover:bg-slate-50/50 transition-all duration-500 h-12 border-b border-slate-100 last:border-0 relative animate-in fade-in slide-in-from-bottom-1 ease-out">
      <td className={`sticky left-0 bg-white/95 backdrop-blur-md border-r border-slate-300 p-0 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] transition-all group-hover/row:bg-slate-50 w-[400px] ${tooltipVisible ? "z-40" : "z-20"}`}>
        <div className="flex h-full w-full">
          {isExpired ? (
            <div className="flex-1 flex items-center gap-3 px-6 animate-in fade-in slide-in-from-left-4 duration-500">
               <button 
                 onClick={onDuplicate}
                 className="flex-1 h-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-technical font-black text-[9px] uppercase tracking-widest shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 group"
               >
                 <RefreshCw size={12} className="group-hover:rotate-180 transition-transform duration-500" />
                 Renew Ritual Manifestation
               </button>
               <button 
                 onClick={onDismiss}
                 className="size-8 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 rounded-lg flex items-center justify-center transition-all"
                 title="Dismiss Suggestion"
               >
                 <X size={14} />
               </button>
            </div>
          ) : (
            <>
              {/* Main Habit Column */}
              <div 
                className="w-[220px] h-full flex items-center pl-6 pr-4 gap-4 border-r border-slate-100 relative"
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={handlePointerLeave}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
              >
                <RitualTooltip habit={habit} visible={tooltipVisible} />
                <div className={`w-1 h-8 rounded-full shrink-0 ${habit.priority === "HIGH" ? "bg-red-500" : habit.priority === "MEDIUM" ? "bg-amber-500" : "bg-emerald-500"}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black tracking-tight text-slate-800 truncate uppercase cursor-help">{habit.name}</span>
                    {habit.isDemo && (
                      <span className="text-[8px] font-technical font-black px-1.5 py-0.5 bg-primary/10 text-primary rounded-md uppercase tracking-wider">Template</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover/row:opacity-100 transition-all shrink-0">
                  <button 
                    onClick={onEdit}
                    className="p-2 hover:bg-primary/10 rounded-full text-slate-400 hover:text-primary transition-all active:scale-90"
                    title="Refine Ritual"
                  >
                    <Edit2 className="size-3.5" />
                  </button>
                  <button 
                    onClick={onDelete}
                    className="p-2 hover:bg-red-50 rounded-full text-slate-400 hover:text-red-500 transition-all active:scale-95"
                    title="Remove Manifestation"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
              </div>
              {/* Start Time Column */}
              <div className="w-[90px] border-r border-slate-100 flex items-center justify-center p-2 text-[10px] font-technical font-black text-slate-500/80">
                {format12h(habit.start_time || "")}
              </div>
              {/* End Time Column */}
              <div className="w-[90px] flex items-center justify-center p-2 text-[10px] font-technical font-black text-slate-500/80 uppercase">
                {format12h(habit.end_time || "")}
              </div>
            </>
          )}
        </div>
      </td>
      
      {cells.map((cell, i) => {
        const weekIdx = Math.floor(i / 7);
        const weekColor = WEEK_COLORS[weekIdx] || WEEK_COLORS[WEEK_COLORS.length - 1];
        const isActive = cell.isActive !== false;

        return (
          <td
            key={i}
            onClick={() => isActive && onToggle(habit.id, cell.actualDayIdx)}
            className={`w-[36px] min-w-[36px] p-0.5 relative transition-all group/cell ${
              !isActive ? "cursor-not-allowed opacity-30 grayscale" : "cursor-pointer"
            }`}
            style={{ backgroundColor: isActive ? `${weekColor}${cell.isDone ? "60" : "25"}` : "transparent" }}
          >
             <div 
               className={`size-6 mx-auto rounded-md shadow-sm flex items-center justify-center transition-all duration-300 ${
                 cell.isDone ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-45 scale-50"
               }`}
               style={{ backgroundColor: isActive ? weekColor : "transparent" }}
             >
                <CheckSquare className="text-white size-3.5" strokeWidth={3} />
             </div>
             
             {cell.isToday && isActive && !cell.isDone && (
               <div 
                 className={`absolute inset-1 rounded-md border-2 border-dashed opacity-40 animate-pulse`}
                 style={{ borderColor: weekColor }}
               />
             )}
             
             {!isActive && (
               <div className="absolute inset-0 bg-slate-50/10" title="Out of temporal manifestation range" />
             )}
          </td>
        );
      })}
      
      <td className="sticky right-[40px] z-30 bg-surface border-l border-slate-200 px-2 text-[11px] font-technical font-black text-slate-800 text-center w-[40px]">
        {currentStreak}
      </td>
      <td className="sticky right-0 z-30 bg-surface border-l border-slate-200 px-2 text-[11px] font-technical font-black text-slate-800 text-center w-[40px]">
        {maxStreak}
      </td>
    </tr>
  );
};