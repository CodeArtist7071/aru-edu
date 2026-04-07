import React from "react";
import { GridWeekDonut } from "./GridWeekDonut";
import { WEEK_COLORS } from "../constants";

interface GridWeekFooterRowProps {
  days: number[];
  weeklyDone: number[];
}

export const GridWeekFooterRow: React.FC<GridWeekFooterRowProps> = ({
  days,
  weeklyDone,
}) => {
  return (
    <tr className="bg-slate-50 border-t-2 border-slate-200 shadow-inner">
      <td className="sticky left-0 z-30 bg-white border-r border-slate-300 p-6 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] w-[400px]">
        <div className="flex flex-col items-center justify-center">
           <h4 className="text-xl font-black text-slate-800 tracking-tighter leading-none whitespace-nowrap">Weekly Done %</h4>
           <p className="text-[10px] font-technical font-black text-slate-400 uppercase tracking-widest mt-2">Manifestation Distribution</p>
        </div>
      </td>
      {/* Week 1 Donut (7 Days) */}
      <td colSpan={7} className="border-r border-slate-100 p-0 text-center" style={{ backgroundColor: `${WEEK_COLORS[0]}15` }}>
        <GridWeekDonut percent={weeklyDone[0] || 0} color={WEEK_COLORS[0]} label="Week 1" />
      </td>
      {/* Week 2 Donut (7 Days) */}
      <td colSpan={7} className="border-r border-slate-100 p-0 text-center" style={{ backgroundColor: `${WEEK_COLORS[1]}15` }}>
        <GridWeekDonut percent={weeklyDone[1] || 0} color={WEEK_COLORS[1]} label="Week 2" />
      </td>
      {/* Week 3 Donut (7 Days) */}
      <td colSpan={7} className="border-r border-slate-100 p-0 text-center" style={{ backgroundColor: `${WEEK_COLORS[2]}15` }}>
        <GridWeekDonut percent={weeklyDone[2] || 0} color={WEEK_COLORS[2]} label="Week 3" />
      </td>
      {/* Week 4 Donut (7 Days) */}
      <td colSpan={7} className="border-r border-slate-100 p-0 text-center" style={{ backgroundColor: `${WEEK_COLORS[3]}15` }}>
        <GridWeekDonut percent={weeklyDone[3] || 0} color={WEEK_COLORS[3]} label="Week 4" />
      </td>
      {/* Week 5 / Extra Days (Remaining Days) */}
      <td colSpan={days.length - 28} className="p-0 text-center" style={{ backgroundColor: `${WEEK_COLORS[4]}15` }}>
        {days.length > 28 && (
          <GridWeekDonut percent={weeklyDone[4] || 0} color={WEEK_COLORS[4]} label="Extra Days" />
        )}
      </td>
      <td colSpan={2} className="sticky right-0 z-30 bg-slate-50 border-l border-slate-200 px-2 shadow-left">
         {/* Spacer for streaks */}
      </td>
    </tr>
  );
};
