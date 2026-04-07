import React from "react";

interface GridDailyFlowProps {
  percent: number;
  color: string;
}

export const GridDailyFlow: React.FC<GridDailyFlowProps> = ({ percent, color }) => {
  return (
    <div className="flex flex-col items-center justify-end h-full w-full py-1 group cursor-help transition-all duration-300">
      <div className="relative w-5 bg-slate-200/50 rounded-sm h-12 overflow-hidden">
        <div 
          className="absolute bottom-0 left-0 right-0 transition-all duration-1000 ease-out shadow-sm"
          style={{ height: `${percent}%`, backgroundColor: color }}
        />
      </div>
      <span className="mt-1 text-[8px] font-technical font-black text-slate-800 opacity-60 group-hover:opacity-100 transition-opacity">
        {percent}%
      </span>
    </div>
  );
};
