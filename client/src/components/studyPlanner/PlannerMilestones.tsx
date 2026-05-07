import React from "react";
import { Award, ChevronRight, Sparkles, PlusIcon, Zap, MoreVertical } from "lucide-react";
import { type Habit } from "./types";

interface PlannerMilestonesProps {
  isMilestoneDrawerOpen: boolean;
  setIsMilestoneDrawerOpen: (open: boolean) => void;
  isAddExpanded: boolean;
  setIsAddExpanded: (expanded: boolean) => void;
  masteryOnly: (Habit & { scheduledDay: number })[];
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  onAddHabit: (mode: "routine" | "test") => void;
  setEditingHabitId: (id: string | null) => void;
  setAddMode: (mode: "routine" | "test") => void;
  setAutoOpenAddModal: (open: boolean) => void;
  monthName: string;
  viewYear: number;
  viewMonth: number;
}

export const PlannerMilestones: React.FC<PlannerMilestonesProps> = ({
  isMilestoneDrawerOpen,
  setIsMilestoneDrawerOpen,
  isAddExpanded,
  setIsAddExpanded,
  masteryOnly,
  selectedDate,
  setSelectedDate,
  onAddHabit,
  setEditingHabitId,
  setAddMode,
  setAutoOpenAddModal,
  monthName,
  viewYear,
  viewMonth
}) => {
  return (
    <>
      {/* FIXED FAB: Monthly Milestones Trigger (Desktop Only) */}
      <div className="hidden lg:flex fixed bottom-10 right-6 flex-col gap-4 items-end z-50">
        <button
          onClick={() => setIsMilestoneDrawerOpen(true)}
          className="size-14 bg-tertiary text-on-tertiary rounded-[1.75rem] shadow-ambient-lg shadow-tertiary/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-500 overflow-hidden relative"
        >
          <Award className="size-5" />
          {masteryOnly.length > 0 && (
            <div className="absolute -top-1 -right-1 size-5 bg-primary text-white rounded-full border-2 border-white flex items-center justify-center animate-bounce">
              <span className="text-[9px] font-black">{masteryOnly.length}</span>
            </div>
          )}
        </button>
      </div>

      {/* MILESTONE DRAWER: Monthly Test Overview */}
      <div
        className={`fixed inset-0 z-60 transition-all duration-700 ease-botanical ${isMilestoneDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className="absolute inset-0 bg-on-surface/5 backdrop-blur-sm"
          onClick={() => setIsMilestoneDrawerOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-96 bg-surface-container-high/95 backdrop-blur-3xl shadow-ambient-lg border-l border-on-surface/5 px-4 py-10 transform transition-transform duration-700 ease-botanical ${isMilestoneDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-between items-center mb-12 px-2">
            <div>
              <h3 className="text-2xl font-black tracking-tighter text-on-surface leading-none">
                Monthly Milestones
              </h3>
              <p className="text-[10px] font-technical font-black uppercase tracking-widest text-primary mt-2">
                Active Cycle: {monthName} {viewYear}
              </p>
            </div>
            <button
              onClick={() => setIsMilestoneDrawerOpen(false)}
              className="size-10 rounded-full bg-on-surface/5 flex items-center justify-center hover:bg-on-surface/10 transition-colors"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          <div className="px-2 space-y-6">
            <div className="p-6 bg-white/40 rounded-[2.5rem] border border-on-surface/5 shadow-inner">
              <p className="text-[10px] font-technical font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-40 leading-relaxed italic">
                "Each test is a seedling. Master them to grow your OPSC
                knowledge forest."
              </p>
            </div>

            <div className="space-y-4 max-h-[calc(100vh-320px)] overflow-y-auto custom-scrollbar pr-4 pb-10">
              {masteryOnly.length === 0 ? (
                <div className="py-20 text-center bg-white/40 rounded-4xl border border-dashed border-primary/20 p-8">
                  <Sparkles className="size-8 text-primary/40 mx-auto mb-4 opacity-40" />
                  <p className="text-[10px] font-technical font-black uppercase tracking-widest text-on-surface-variant opacity-40">
                    Zero milestones manifested for this cycle
                  </p>
                </div>
              ) : (
                masteryOnly.map((test) => (
                  <button
                    key={test.id}
                    onClick={() => {
                      setSelectedDate(
                        new Date(viewYear, viewMonth - 1, test.scheduledDay),
                      );
                      setIsMilestoneDrawerOpen(false);
                    }}
                    className={`w-full group/test text-left p-4 rounded-4xl transition-all duration-500 border border-outline-variant/10 ${selectedDate?.getDate() === test.scheduledDay
                      ? "bg-primary text-on-primary shadow-lg scale-105"
                      : "bg-white hover:shadow-md hover:scale-[1.02]"
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`size-12 rounded-2xl flex items-center justify-center font-technical font-black text-xs transition-colors ${selectedDate?.getDate() === test.scheduledDay
                          ? "bg-white/20 text-white"
                          : "bg-primary/10 text-primary"
                          }`}
                      >
                        {test.scheduledDay}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-black tracking-tight truncate ${selectedDate?.getDate() === test.scheduledDay ? "text-on-primary" : "text-on-surface"}`}
                        >
                          {test.name}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5 opacity-60">
                          <span
                            className={`text-[9px] font-technical font-black uppercase tracking-widest ${selectedDate?.getDate() === test.scheduledDay ? "text-white" : "text-primary"}`}
                          >
                            Day {test.scheduledDay}
                          </span>
                          {test.start_time && (
                            <div
                              onClick={(e) => { e.stopPropagation(); setEditingHabitId(test.id); setAddMode("test"); setAutoOpenAddModal(true); setIsMilestoneDrawerOpen(false); }}
                              className="size-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant/40 hover:text-primary active:scale-90 transition-all duration-300"
                            >
                              <MoreVertical size={18} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          <div className="absolute bottom-10 left-10 right-10">
            <button
              onClick={() => {
                setIsMilestoneDrawerOpen(false);
                setAutoOpenAddModal(true);
              }}
              className="w-full py-4 bg-tertiary text-on-tertiary rounded-full font-technical font-black text-[11px] uppercase tracking-widest shadow-lg shadow-tertiary/20 hover:scale-105 active:scale-95 transition-all"
            >
              Add Milestone +
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE SPEED DIAL */}
      <div className="hidden fixed bottom-20 right-6 flex flex-col gap-4 items-end z-50">
        <div className={`flex flex-col gap-3 transition-all duration-500 ease-botanical transform ${isAddExpanded ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-10 pointer-events-none"}`}>
          <div
            className="flex items-center gap-3 group"
            style={{ transitionDelay: isAddExpanded ? '100ms' : '0ms' }}
          >
            <span className="bg-surface/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-technical font-black text-tertiary uppercase tracking-widest shadow-sm">Manifest Test</span>
            <button
              onClick={() => { onAddHabit("test"); setIsAddExpanded(false); }}
              className="size-14 bg-tertiary text-on-tertiary rounded-2xl shadow-ambient-lg shadow-tertiary/10 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <Award className="size-5" />
            </button>
          </div>

          <div
            className="flex items-center gap-3 group"
            style={{ transitionDelay: isAddExpanded ? '50ms' : '0ms' }}
          >
            <span className="bg-surface/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-technical font-black text-primary uppercase tracking-widest shadow-sm">Manifest Routine</span>
            <button
              onClick={() => { onAddHabit("routine"); setIsAddExpanded(false); }}
              className="size-14 bg-primary text-white rounded-2xl shadow-ambient-lg shadow-primary/10 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <Zap className="size-5" />
            </button>
          </div>
        </div>

        <button
          onClick={() => setIsAddExpanded(!isAddExpanded)}
          className={`size-12 rounded-4xl shadow-ambient-lg flex items-center justify-center transition-all duration-500 ${isAddExpanded ? 'bg-on-surface text-surface rotate-45' : 'bg-primary text-white'}`}
        >
          <PlusIcon className="size-6" />
        </button>
      </div>
    </>
  );
};
