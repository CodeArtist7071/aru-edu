import React, { useMemo, useEffect } from "react";
import { Trash2, RefreshCw, X, CheckSquare, Pencil } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { type Habit } from "./types";
import { WEEK_COLORS } from "./constants";
import { InlineTimePicker } from "./grid/InlineTimePicker";

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
  onUpdate?: (id: string, updates: Partial<Habit>) => void;
  onSave?: (id: string, data: Habit) => void;
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
  onUpdate,
  onSave,
  unlockPastDays = false,
  isExpired = false,
}) => {
  const [isPickerOpen, setIsPickerOpen] = React.useState(false);
  const { register, control, handleSubmit, reset } = useForm<Habit>({
    defaultValues: habit
  });

  // Sync with prop changes (e.g. after save/refresh)
  useEffect(() => {
    reset(habit);
  }, [habit, reset]);

  const onSubmit = (data: Habit) => {
    // If name is empty, we don't save
    if (!data.name?.trim()) return;

    // OPTIMIZATION: Dirty manifestation check. If no reality shift, cease synchronization.
    const isDirty = (
      data.name !== habit.name || 
      data.start_time !== habit.start_time || 
      data.end_time !== habit.end_time
    );

    if (!isDirty && !habit.id?.toString().startsWith("draft-")) return;
    
    if (habit.id?.toString().startsWith("draft-")) {
       onSave?.(habit.id, data);
    } else {
       onUpdate?.(habit.id, data);
    }
  };

  const current_streak = useMemo(() => {
    let streak = 0;
    for (let i = cells.length - 1; i >= 0; i--) {
      if (cells[i].isDone) streak++;
      else if (streak > 0) break;
    }
    return streak;
  }, [cells]);

  const max_streak = useMemo(() => {
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

  return (
    <tr key={habit.id} className={`group/row hover:bg-slate-50/50 transition-all duration-500 h-12 border-b border-slate-100 last:border-0 relative animate-in fade-in slide-in-from-bottom-1 ease-out ${isPickerOpen ? "z-100" : ""}`}>
      <td className={`sticky left-0 bg-white/80 backdrop-blur-md border-r border-slate-300 p-0 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] transition-all group-hover/row:bg-slate-50/50 w-[440px] ${isPickerOpen ? "z-100" : "z-20"}`}>
        <div className="flex h-full w-full">
          {isExpired ? (
            <div className="flex-1 flex items-center gap-3 px-6 animate-in fade-in slide-in-from-left-4 duration-500">
              <button
                onClick={onDuplicate}
                className="flex-1 h-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-technical font-black text-[9px] uppercase tracking-widest shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <RefreshCw size={12} className="group-hover:rotate-180 transition-transform duration-500" />
                Copy Previous Task
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
              <div className="w-[220px] h-full flex items-center pl-2 pr-4 gap-4 border-r border-slate-100 relative">
                {/* <div className={`w-1 h-8 rounded-full shrink-0 ${habit.priority === "HIGH" ? "bg-red-500" : habit.priority === "MEDIUM" ? "bg-amber-500" : "bg-emerald-500"}`} /> */}
                <div className="flex-1 w-full">
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    onBlur={handleSubmit(onSubmit)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.currentTarget.blur();
                      }
                    }}
                    className="w-full bg-transparent border-none text-[11px] h-[40px] font-black tracking-tight text-slate-800 uppercase focus:ring-1 focus:ring-emerald-500/20 rounded px-1 outline-none"
                    placeholder="Add Task Here"
                  />
                  {habit.isDemo && (
                    <span className="text-[8px] font-technical font-black px-1.5 py-0.5 bg-primary/10 text-primary rounded-md uppercase tracking-wider mt-0.5 inline-block">Template</span>
                  )}
                </div>
              </div>
              {/* Start Time Column */}
              <div className="w-[100px] border-r border-slate-100 flex items-center justify-center p-1">
                <Controller
                  name="start_time"
                  control={control}
                  render={({ field }) => (
                    <InlineTimePicker 
                      value={habit.start_time || "09:00"} 
                      onOpenChange={setIsPickerOpen}
                      onChange={(val) => {
                        field.onChange(val);
                        // Direct manifestation: bypass form race condition for immediate sync
                        onUpdate?.(habit.id, { start_time: val });
                      }} 
                    />
                  )}
                />
              </div>
              {/* End Time Column */}
              <div className="w-[100px] border-r border-slate-100 flex items-center justify-center p-1">
                <Controller
                  name="end_time"
                  control={control}
                  render={({ field }) => (
                    <InlineTimePicker 
                      value={habit.end_time || "10:00"} 
                      onOpenChange={setIsPickerOpen}
                      onChange={(val) => {
                        field.onChange(val);
                        // Direct manifestation: bypass form race condition for immediate sync
                        onUpdate?.(habit.id, { end_time: val });
                      }} 
                    />
                  )}
                />
              </div>
              {/* Actions Column */}
              <div className="w-[80px] flex items-center justify-center gap-1 p-1 group-hover/row:opacity-100 transition-opacity">
                <button
                  onClick={onEdit}
                  className="p-2 hover:bg-emerald-50 text-emerald-600 rounded-full transition-all active:scale-95"
                  title="Refine Ritual"
                >
                  <Pencil className="size-3.5" />
                </button>
                <button
                  onClick={onDelete}
                  className="p-2 hover:bg-red-50 text-primary rounded-full transition-all active:scale-95"
                  title="Remove Task"
                >
                  <Trash2 className="text-primary size-3.5" />
                </button>
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
            className={`w-[36px] min-w-[36px] p-0.5 relative  transition-all group/cell ${!isActive ? "cursor-not-allowed opacity-100" : "cursor-pointer"
              }`}
            style={{ backgroundColor: isActive ? `${weekColor}26` : "transparent" }}
          >
            <div
              className={`size-6 mx-auto rounded-md shadow-sm flex items-center justify-center transition-all duration-300 relative z-10 ${cell.isDone ? "opacity-100 rotate-0 scale-100" : "opacity-20 rotate-0 scale-90"
                }`}
              style={{ backgroundColor:`${weekColor}90` }}
            >
              <CheckSquare className="text-white size-3.5" strokeWidth={3} />
            </div>

            {cell.isToday && isActive && !cell.isDone && (
              <div
                className={`absolute inset-1 rounded-md border-2 border-dashed opacity-40 animate-pulse z-20`}
                style={{ borderColor: weekColor }}
              />
            )}

            {!isActive && (
              <div
                className="absolute inset-0 opacity-100 z-0"
                style={{ backgroundColor: `${weekColor}90` }}
                title="Out of temporal manifestation range"
              />
            )}
          </td>
        );
      })}

      <td className="sticky right-[40px] z-30 bg-surface border-l border-slate-200 px-2 text-[11px] font-technical font-black text-slate-800 text-center w-[40px]">
        {current_streak}
      </td>
      <td className="sticky right-0 z-30 bg-surface border-l border-slate-200 px-2 text-[11px] font-technical font-black text-slate-800 text-center w-[40px]">
        {max_streak}
      </td>
    </tr>
  );
};