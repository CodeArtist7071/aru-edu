import { Notebook, Search, Moon, Sun } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import type { RootState } from "../store";
import { useTheme } from "../hooks/useTheme";

export const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { user } = useSelector((state: RootState) => state.user ?? null);
  console.log("usersss.....!!", user);

  return (
    <header className="flex h-16 sm:h-20 px-4 sm:px-8 lg:px-12 items-center justify-between bg-surface/95 sticky top-0 z-50 backdrop-blur-xl border-b border-on-surface/5 shadow-sm">
      <div className="flex items-center gap-4 sm:gap-10 h-full">
        <div 
          className="flex items-center gap-2 sm:gap-3 text-primary group cursor-pointer transition-transform active:scale-95" 
          onClick={() => navigate("/")}
        >
          <div className="size-8 sm:size-10 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
            <Notebook className="size-5 sm:size-6" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-md sm:text-2xl font-bold leading-none tracking-tight text-on-surface">
              Arumind
            </h2>
            <span className="hidden sm:block text-[10px] sm:text-[11px] font-semibold text-on-surface-variant/60 uppercase tracking-widest mt-0.5">Free Exam Prep</span>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {["Free Tests", "Subjects", "Mock Tests", "Current Affairs"].map((item) => (
            <a
              key={item}
              className="text-on-surface-variant hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors relative group h-full flex items-center leading-none"
              href="#"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <div className="hidden md:flex relative group items-center">
          <Search className="absolute left-4 text-on-surface-variant/40 size-4 group-focus-within:text-primary transition-colors" />
          <input
            className="bg-surface-container-low border border-transparent focus:border-primary/20 rounded-full pl-11 pr-5 py-2 text-xs font-bold uppercase tracking-widest w-48 lg:w-64 transition-all leading-none"
            placeholder="Search subjects or topics..."
            type="text"
          />
        </div>

        <button
          onClick={toggleTheme}
          className="hidden size-9 sm:size-10 rounded-full bg-surface-container-low md:flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors border border-on-surface/5"
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
        </button>

        {user ? (
          <div className="flex items-center gap-3 sm:gap-6 h-full">
            <button
              onClick={() => navigate("/user/dashboard")}
              className="bg-primary text-on-primary px-5 sm:px-8 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-colors shadow-sm"
            >
              Dashboard
            </button>
            <div className="size-8 sm:size-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm sm:text-base cursor-pointer hover:bg-primary hover:text-white transition-colors">
              {user.email?.[0].toUpperCase()}
            </div>
          </div>
        ) : (
          <div className="flex gap-2 sm:gap-4 items-center h-full">
            <button
              onClick={() => navigate("/login")}
              className="text-on-surface-variant hover:text-primary px-5 md:px-6 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-primary text-on-primary px-5 sm:px-8 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-colors shadow-sm"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
