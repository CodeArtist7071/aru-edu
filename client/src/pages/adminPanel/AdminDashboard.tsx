import React from "react";
import { Users, School, BookOpen, HelpCircle } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const AdminDashboard: React.FC = () => {
  const { profile } = useSelector((state: RootState) => state.user);

  const stats = [
    { title: "Total Students", value: "1,245", icon: <Users size={20}/>, change: "+12%" },
    { title: "Active Exams", value: "8", icon: <School size={20}/> },
    { title: "Total Chapters", value: "317", icon: <BookOpen size={20}/> },
    { title: "Questions Live", value: "8,450", icon: <HelpCircle size={20}/>, change: "Syncing..." },
  ];

  return (
    <div className="p-4 lg:p-10 min-h-screen bg-surface-container-low dark:bg-slate-950 space-y-8 animate-in fade-in duration-700">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-on-surface tracking-tighter italic">Admin Portal</h1>
          <p className="text-[10px] text-[#16a34a] lg:text-xs font-technical uppercase tracking-[0.3em] mt-1 lg:mt-2 opacity-80">
            System Admin — {profile?.email || "Administrator"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 lg:px-5 lg:py-2.5 bg-surface-container-high dark:bg-slate-900 rounded-full border border-outline-variant/10 flex items-center gap-2 shadow-sm">
            <div className="size-2 bg-[#16a34a] rounded-full animate-pulse shadow-[0_0_8px_#16a34a]" />
            <span className="text-[9px] lg:text-[10px] font-technical font-black uppercase tracking-widest text-[#16a34a]">Engine Live</span>
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* System Status Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface/50 dark:bg-slate-900/50 backdrop-blur-xl p-6 lg:p-10 rounded-3xl border border-outline-variant/10 shadow-2xl">
          <h3 className="text-xs font-black uppercase tracking-widest text-[#16a34a] mb-6">System Progress</h3>
          <div className="space-y-6">
            {[
              { label: "Database Sync", status: "OPERATIONAL", color: "text-emerald-500" },
              { label: "AI Question Engine", status: "PROCESSING", color: "text-amber-500" },
              { label: "Security Shield", status: "HARDENED", color: "text-emerald-500" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-outline-variant/5">
                <span className="text-sm text-on-surface-variant font-medium">{item.label}</span>
                <span className={`text-[10px] font-black tracking-widest uppercase ${item.color}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 flex flex-col justify-center items-center text-center group">
          <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-500">
            <LayoutDashboard size={32} />
          </div>
          <h4 className="text-lg font-bold text-on-surface mb-2">Portal Health</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed px-4">
            System performance is optimal. Latency recorded at <span className="text-primary font-bold">24ms</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, change }: any) => (
  <div className="bg-surface dark:bg-slate-900 p-6 lg:p-8 rounded-2xl border border-outline-variant/5 shadow-ambient-sm hover:shadow-ambient-lg hover:-translate-y-1 transition-all duration-300 group">
    <div className="flex items-center justify-between mb-4">
      <div className="size-10 lg:size-12 bg-surface-container-high dark:bg-slate-800 rounded-xl flex items-center justify-center text-[#16a34a] group-hover:bg-[#16a34a] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      {change && <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">{change}</span>}
    </div>
    <p className="text-[10px] uppercase font-black tracking-widest text-on-surface-variant/60 mb-1">{title}</p>
    <h3 className="text-2xl lg:text-3xl font-black text-on-surface italic">{value}</h3>
  </div>
);

import { LayoutDashboard } from "lucide-react";
export default AdminDashboard;
