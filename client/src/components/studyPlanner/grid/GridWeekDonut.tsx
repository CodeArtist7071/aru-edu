import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface GridWeekDonutProps {
  percent: number;
  color: string;
  label: string;
}

export const GridWeekDonut: React.FC<GridWeekDonutProps> = ({ percent, color, label }) => {
  const data = [
    { value: percent },
    { value: 100 - percent },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-2 min-h-[160px] animate-in fade-in zoom-in-95 duration-700">
      <div className="relative w-24 h-24">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={32}
              outerRadius={44}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
              startAngle={90}
              endAngle={-270}
            >
              <Cell fill={color} />
              <Cell fill={`${color}20` || "#f1f5f9"} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-sm font-black text-slate-800 tracking-tighter">
            {percent}%
          </span>
        </div>
      </div>
      <span className="mt-2 text-[10px] font-technical font-black uppercase text-slate-400 tracking-widest whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};
