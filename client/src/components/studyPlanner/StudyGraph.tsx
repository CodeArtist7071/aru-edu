import React, { useState, useMemo } from 'react';
import { Activity, BarChart2, Clock, LineChart, Sparkles, Trophy } from "lucide-react";
import { WEEK_COLORS } from "./constants";
import { type Habit } from "./types";

interface StudyGraphProps {
    habits: Habit[];
    progress: Record<string, boolean[]>;
    viewMonth: number;
    viewYear: number;
}

export const StudyGraph = ({ habits, progress, viewMonth, viewYear }: StudyGraphProps) => {
    const [chartType, setChartType] = useState<'bar' | 'line' | 'histogram'>('bar');

    const daysInMonth = useMemo(() => new Date(viewYear, viewMonth, 0).getDate(), [viewMonth, viewYear]);

    const dailyHours = useMemo(() => {
        const hours = Array(31).fill(0);
        const realHabits = habits.filter(h => !h.isDemo);

        for (let dayIdx = 0; dayIdx < 31; dayIdx++) {
            let totalMins = 0;
            realHabits.forEach(h => {
                if (progress[h.id]?.[dayIdx]) {
                    if (!h.start_time || !h.end_time) return;
                    const [sh, sm] = h.start_time.split(':').map(Number);
                    const [eh, em] = h.end_time.split(':').map(Number);
                    const duration = (eh * 60 + em) - (sh * 60 + sm);
                    if (duration > 0) totalMins += duration;
                }
            });
            hours[dayIdx] = totalMins / 60;
        }
        return hours;
    }, [habits, progress]);

    const maxDailyHours = useMemo(() => {
        const max = Math.max(...dailyHours, 1);
        return max > 12 ? max : 12; // Baseline 12h for scale
    }, [dailyHours]);

    const histogramData = useMemo(() => {
        const activeDays = dailyHours.slice(0, daysInMonth);
        const bins = [
            { label: "0h", count: 0, color: "#cbd5e1" },
            { label: "1-2h", count: 0, color: "#94a3b8" },
            { label: "3-4h", count: 0, color: "#3b82f6" },
            { label: "5-6h", count: 0, color: "#10b981" },
            { label: "7h+", count: 0, color: "#f59e0b" },
        ];

        activeDays.forEach(h => {
            if (h === 0) bins[0].count++;
            else if (h <= 2) bins[1].count++;
            else if (h <= 4) bins[2].count++;
            else if (h <= 6) bins[3].count++;
            else bins[4].count++;
        });

        const maxCount = Math.max(...bins.map(b => b.count), 1);
        return { bins, maxCount };
    }, [dailyHours, daysInMonth]);

    return (
        <div className="mt-12 mb-20 bg-surface-container-low rounded-[3rem] shadow-ambient overflow-hidden max-w-7xl mx-auto">
            <div className="bg-primary px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                <div className="absolute top-0 left-0 p-8 opacity-5 pointer-events-none">
                    <Trophy size={140} />
                </div>
                <div className="flex items-center gap-6 relative z-10">
                    <div className="size-14 bg-white/10 rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <Clock size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-white tracking-tighter uppercase">Study Hour Graph</h3>
                        <p className="text-[10px] font-technical font-black text-secondary-container uppercase tracking-[0.4em] opacity-60">Track your daily study hours and progress</p>
                    </div>
                </div>

                {/* CHART TYPE TOGGLE: Botanical Tube */}
                <div className="flex bg-white/10 p-1.5 rounded-full backdrop-blur-3xl border border-white/10 relative z-10">
                    <button
                        onClick={() => setChartType('bar')}
                        className={`flex items-center gap-3 px-4 md:px-6 py-2.5 rounded-full text-[10px] font-technical font-black uppercase tracking-[0.2em] transition-all duration-500 scale-90 ${chartType === 'bar' ? 'bg-white text-primary shadow-xl scale-100' : 'text-white/60 hover:text-white'}`}
                    >
                        <BarChart2 size={16} /> <span className="hidden sm:inline">Bar</span>
                    </button>
                    <button
                        onClick={() => setChartType('line')}
                        className={`flex items-center gap-3 px-4 md:px-6 py-2.5 rounded-full text-[10px] font-technical font-black uppercase tracking-[0.2em] transition-all duration-500 scale-90 ${chartType === 'line' ? 'bg-white text-primary shadow-xl scale-100' : 'text-white/60 hover:text-white'}`}
                    >
                        <LineChart size={16} /> <span className="hidden sm:inline">Line</span>
                    </button>
                    <button
                        onClick={() => setChartType('histogram')}
                        className={`flex items-center gap-3 px-4 md:px-6 py-2.5 rounded-full text-[10px] font-technical font-black uppercase tracking-[0.2em] transition-all duration-500 scale-90 ${chartType === 'histogram' ? 'bg-white text-primary shadow-xl scale-100' : 'text-white/60 hover:text-white'}`}
                    >
                        <Activity size={16} /> <span className="hidden sm:inline">Distro</span>
                    </button>
                </div>
            </div>

            <div className="p-8 md:p-12">
                <div className="h-[250px] w-full relative pt-6">
                    {chartType === 'bar' && (
                        <div className="h-full w-full flex items-end gap-[4px] md:gap-1 lg:gap-1.5 relative border-b border-slate-100">
                            {/* Y-axis labels */}
                            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[8px] font-black text-slate-300 uppercase pointer-events-none">
                                <span>{Math.ceil(maxDailyHours)}h</span>
                                <span>{Math.ceil(maxDailyHours / 2)}h</span>
                                <span>0h</span>
                            </div>

                            {dailyHours.slice(0, daysInMonth).map((h, i) => {
                                const height = (h / maxDailyHours) * 100;
                                const weekIdx = i < 28 ? Math.floor(i / 7) : 4;
                                const barColor = WEEK_COLORS[weekIdx] || WEEK_COLORS[4];

                                return (
                                    <div key={i} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none whitespace-nowrap shadow-xl">
                                            Day {i + 1}: {h.toFixed(1)}h
                                        </div>
                                        <div
                                            className="w-full rounded-t-sm transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-x-110 shadow-sm"
                                            style={{
                                                height: `${height}%`,
                                                backgroundColor: h > 0 ? undefined : '#f1f5f9',
                                                background: h > 0 ? `linear-gradient(to top, ${barColor}, ${barColor}dd)` : undefined
                                            }}
                                        />
                                        <span className="text-[7px] font-black text-slate-400 mt-2 group-hover:text-slate-600 transition-colors">{i + 1}</span>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {chartType === 'line' && (
                        <div className="h-full w-full relative">
                            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[8px] font-black text-slate-300 uppercase pointer-events-none pr-4 border-r border-slate-100">
                                <span>{Math.ceil(maxDailyHours)}h</span>
                                <span>{Math.ceil(maxDailyHours / 2)}h</span>
                                <span>0h</span>
                            </div>
                            <div className="ml-8 h-full relative">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 250" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#16a34a" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#16a34a" stopOpacity="0.05" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d={`M 0 250 ${dailyHours.slice(0, (daysInMonth || 31)).map((h, i) => {
                                            const x = (i / ((daysInMonth || 31) - 1)) * 1000;
                                            const y = 250 - (h / maxDailyHours) * 250;
                                            return `L ${x} ${y}`;
                                        }).join(' ')} L 1000 250 Z`}
                                        fill="url(#areaGradient)"
                                    />
                                    <path
                                        d={`M ${dailyHours.slice(0, (daysInMonth || 31)).map((h, i) => {
                                            const x = (i / ((daysInMonth || 31) - 1)) * 1000;
                                            const y = 250 - (h / maxDailyHours) * 250;
                                            return i === 0 ? `${x} ${y}` : `L ${x} ${y}`;
                                        }).join(' ')}`}
                                        fill="none"
                                        stroke="#16a34a"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    {/* Data dots */}
                                    {dailyHours.slice(0, (daysInMonth || 31)).map((h, i) => {
                                        const x = (i / ((daysInMonth || 31) - 1)) * 1000;
                                        const y = 250 - (h / maxDailyHours) * 250;
                                        return (
                                            <circle
                                                key={i}
                                                cx={x}
                                                cy={y}
                                                r="4"
                                                fill={h > 0 ? "#16a34a" : "#cbd5e1"}
                                                stroke="white"
                                                strokeWidth="2"
                                                className="transition-all hover:r-8 cursor-help"
                                            />
                                        );
                                    })}
                                </svg>

                                {/* Interactive Tooltip Overlay */}
                                <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                                    {dailyHours.slice(0, (daysInMonth || 31)).map((h, i) => {
                                        const y = 250 - (h / maxDailyHours) * 250;
                                        return (
                                            <div key={i} className="flex-1 h-full relative group pointer-events-auto">
                                                <div
                                                    className="absolute bg-slate-800 text-white text-[9px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none whitespace-nowrap shadow-xl"
                                                    style={{
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        top: `${(y / 250) * 100}%`,
                                                        marginTop: '-35px'
                                                    }}
                                                >
                                                    Day {i + 1}: {h.toFixed(1)}h
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {chartType === 'histogram' && (
                        <div className="h-full w-full flex items-end gap-4 px-4 border-b border-slate-100">
                            {/* Y-axis labels (for histogram, it's day frequency) */}
                            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[8px] font-black text-slate-300 uppercase pointer-events-none pr-2">
                                <span>{histogramData.maxCount}d</span>
                                <span>{Math.ceil(histogramData.maxCount / 2)}d</span>
                                <span>0d</span>
                            </div>

                            {histogramData.bins.map((bin, i) => {
                                const height = (bin.count / histogramData.maxCount) * 100;
                                return (
                                    <div key={i} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none whitespace-nowrap shadow-xl">
                                            {bin.count} {bin.count === 1 ? 'day' : 'days'}
                                        </div>
                                        <div
                                            className="w-full rounded-t-xl transition-all duration-500 ease-out hover:brightness-110 shadow-lg"
                                            style={{
                                                height: `${height}%`,
                                                backgroundColor: bin.color,
                                                background: `linear-gradient(to top, ${bin.color}, ${bin.color}dd)`
                                            }}
                                        >
                                            {bin.count > 0 && (
                                                <div className="absolute inset-x-0 bottom-2 text-white font-black text-[10px] text-center drop-shadow-md">{bin.count}</div>
                                            )}
                                        </div>
                                        <span className="text-[9px] font-black text-slate-400 mt-3 group-hover:text-slate-600 transition-colors uppercase tracking-widest">{bin.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                <div className="mt-8 flex flex-wrap gap-4 md:gap-6 justify-center">
                    {chartType === 'bar' ? (
                        WEEK_COLORS.map((c, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-low rounded-full ">
                                <div className="size-2.5 rounded-full shadow-sm" style={{ backgroundColor: c }} />
                                <span className="text-[9px] font-black uppercase text-on-surface-variant tracking-wider">Week {idx + 1}</span>
                            </div>
                        ))
                    ) : chartType === 'histogram' ? (
                        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-2xl border border-green-100">
                            <Trophy size={16} className="text-primary" />
                            <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">
                                Day frequency by study time range
                            </span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-700">
                            <Sparkles size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Studying Momentum Trend</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
