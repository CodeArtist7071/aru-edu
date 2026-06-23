import {
  BarChart,
  Box,
  HelpCircle,
  LayoutDashboard,
  Layers,
  LogOut,
  Notebook,
  NotebookText,
  Package,
  School,
  Users,
  Layout,
  Menu,
  X,
  ChevronLeft,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import type { AppDispatch, RootState } from "../store";
import { supabase } from "../utils/supabase";
import { clearUser } from "../slice/userSlice";
import { useState } from "react";

const navItems = [
  {
    label: "Curriculum Designer",
    icon: <BarChart size={20} />,
    path: "/admin/lattice",
  },
  {
    label: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    path: "/admin/dashboard",
  },
  {
    label: "Boards",
    icon: <Layout size={20} />,
    path: "/admin/boards",
  },
  {
    label: "Exams",
    icon: <School size={20} />,
    path: "/admin/exams",
  },
  {
    label: "Subjects",
    icon: <Notebook size={20} />,
    path: "/admin/subjects",
  },
  {
    label: "Chapters",
    icon: <Layers size={20} />,
    path: "/admin/chapters",
  },
  {
    label: "Questions",
    icon: <HelpCircle size={20} />,
    path: "/admin/questions",
  },
  {
    label: "Users",
    icon: <Users size={20} />,
    path: "/admin/users",
  },
];

export default function AdminPanelLayout() {
  const { user } = useSelector((state: RootState) => state.user ?? null);
  const dispatch = useDispatch<AppDispatch>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    const { error }: any = supabase.auth.signOut();
    if (error) {
      console.log("Logout Error", error);
    }
    dispatch(clearUser());
    console.log("Logout Successfully");
  };
   return (
    <div className="flex h-screen bg-surface-container-low dark:bg-slate-950 overflow-hidden relative">
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/5 flex items-center justify-between px-5 z-50">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#16a34a] rounded flex items-center justify-center text-white">
              <School size={16} />
            </div>
            <span className="text-xs font-technical font-black tracking-[0.2em] uppercase text-on-surface">Exam Portal</span>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
          AD
        </div>
      </div>

      {/* Backdrop for Mobile Drawer */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-50 animate-in fade-in duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar / Responsive Drawer */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 ${isCollapsed ? "w-20" : "w-72 lg:w-64"} 
        bg-surface dark:bg-slate-900 border-r border-outline-variant/5 lg:border-r 
        z-50 flex flex-col transition-all duration-500 ease-botanical
        ${isSidebarOpen ? "translate-x-0 shadow-2xl shadow-black/20" : "-translate-x-full lg:translate-x-0"}
      `}>
        {/* Mobile Close Button */}
        <div className="lg:hidden absolute top-4 right-4">
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Logo */}
        <div className={`p-6 lg:p-8 flex items-center ${isCollapsed ? 'justify-center px-2' : 'gap-3'}`}>
          <div className="w-8 h-8 shrink-0 bg-[#16a34a] rounded-lg flex items-center justify-center text-white">
            <School color="white" size={20} />
          </div>
          {!isCollapsed && <h2 className="text-xl font-bold tracking-tight text-on-surface whitespace-nowrap overflow-hidden">Exam Portal</h2>}
        </div>

        {/* User Profile */}
        {!isCollapsed && <UserProfile user={user} />}

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center ${isCollapsed ? 'justify-center p-3' : 'gap-3 px-4 py-3'} rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-[#16a34a]/10 text-[#16a34a] font-bold shadow-xs"
                    : "hover:bg-surface-container-high dark:hover:bg-slate-800 text-on-surface-variant"
                }`
              }
              title={isCollapsed ? item.label : undefined}
            >
              <span className="opacity-70 shrink-0">{item.icon}</span>
              {!isCollapsed && <span className="text-sm tracking-tight whitespace-nowrap overflow-hidden">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Upgrade CTA / Footer */}
        <div className="p-4 border-t border-outline-variant/5 space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="flex-1 hidden lg:flex items-center justify-center p-2 rounded-full bg-surface-container-high text-[#16a34a] hover:bg-surface-container-highest transition-all duration-300"
            >
              <ChevronLeft
                className={`size-5 transition-transform duration-500 ${isCollapsed ? "rotate-180" : ""}`}
              />
            </button>
          </div>
          <button
            onClick={handleLogout}
            className={`w-full py-3 bg-surface-container-high dark:bg-slate-800 text-[#16a34a] flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all duration-300 ${isCollapsed ? "px-2" : ""}`}
            title={isCollapsed ? "Sign Out" : undefined}
          >
            {isCollapsed ? <LogOut size={18} /> : "Sign Out"}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-full pt-16 lg:pt-0">
        <Outlet />
      </main>
    </div>
  );
}

const UserProfile = ({ user }: any) => {
  return (
    <div className="px-4 mb-6">
      <div className="p-4 bg-[#16a34a]/5 rounded-xl border border-[#16a34a]/10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary/20 px-5 flex justify-center items-center rounded-full bg-cover bg-center shadow-lg"></div>
          <div className="flex flex-col">
            <span className="w-30 text-sm font-semibold truncate">
              {user?.email || ""}
            </span>
            <span className="text-xs text-on-surface-variant">OPSC Aspirant</span>
          </div>
        </div>
        <Link
          to={"/user/profile"}
          className="w-full px-5 flex items-center justify-center py-1.5 text-xs font-bold bg-[#16a34a] text-white rounded-lg hover:bg-[#16a34a]/90 transition-all duration-200"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};
