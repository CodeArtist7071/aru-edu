import React, { useState, useRef, useEffect } from "react";
import { Clock } from "lucide-react";

interface InlineTimePickerProps {
  value: string;
  onChange: (val: string) => void;
  onOpenChange?: (open: boolean) => void;
}

export const InlineTimePicker: React.FC<InlineTimePickerProps> = ({ value, onChange, onOpenChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempValue, setTempValue] = useState(value);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = (val: boolean) => {
    // Commit logic: Only manifests when closing
    if (val === false && tempValue !== value) {
      onChange(tempValue);
    }
    setIsOpen(val);
    onOpenChange?.(val);
  };

  // Sync tempValue when external value changes
  useEffect(() => {
    if (!isOpen) {
      setTempValue(value);
    }
  }, [value, isOpen]);

  const [h24, m] = (tempValue || "09:00").split(":");
  let hNum = parseInt(h24);
  const ampm = hNum >= 12 ? "PM" : "AM";
  const h12 = hNum % 12 || 12;

  const handleHChange = (newH12: number) => {
    let nh = newH12;
    if (ampm === "PM" && nh < 12) nh += 12;
    if (ampm === "AM" && nh === 12) nh = 0;
    setTempValue(`${nh.toString().padStart(2, "0")}:${m}`);
  };

  const handleMChange = (newM: number) => {
    setTempValue(`${h24}:${newM.toString().padStart(2, "0")}`);
  };

  const handleAMPMChange = (newAMPM: string) => {
    if (newAMPM === ampm) return;
    let nh = hNum;
    if (newAMPM === "PM" && hNum < 12) nh += 12;
    if (newAMPM === "AM" && hNum >= 12) nh -= 12;
    setTempValue(`${nh.toString().padStart(2, "0")}:${m}`);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        toggleOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={containerRef}>
      <button
        type="button"
        onClick={() => toggleOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all duration-300 font-technical font-black text-[10px] tracking-tight ${
          isOpen 
            ? "border-emerald-600 bg-emerald-600 text-white ring-4 ring-emerald-500/20 shadow-lg scale-105" 
            : "border-slate-200 text-slate-600 hover:border-emerald-300 hover:bg-slate-50 shadow-sm active:scale-95"
        }`}
      >
        <Clock size={12} className={isOpen ? "text-white animate-pulse" : "text-slate-400"} />
        <span className="uppercase">{h12}:{m} {ampm}</span>
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 p-3 bg-white border border-slate-200 rounded-4xl shadow-2xl z-9999 w-60 ring-1 ring-slate-900/10 select-none animate-in fade-in zoom-in-95 duration-300 ease-out-quint"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3 h-36">
              {/* Hours Column */}
              <div className="flex-1 flex flex-col h-full">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 text-center">Hour</span>
                <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar scroll-smooth">
                  <div className="flex flex-col gap-1">
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                      <button
                        key={h}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleHChange(h);
                        }}
                        className={`py-1.5 rounded-lg text-[11px] font-black transition-all duration-200 ${
                          (hNum % 12 || 12) === h 
                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20 scale-[1.05]" 
                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center pt-6 text-slate-300 font-bold self-start mt-2 opacity-50">:</div>

              {/* Minutes Column */}
              <div className="flex-1 flex flex-col h-full">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 text-center">Min</span>
                <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar scroll-smooth">
                  <div className="flex flex-col gap-1">
                    {Array.from({ length: 12 }, (_, i) => i * 5).map((min) => {
                      const mStr = min.toString().padStart(2, "0");
                      const isSelected = m === mStr;
                      return (
                        <button
                          key={min}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMChange(min);
                          }}
                          className={`py-1.5 rounded-lg text-[11px] font-black transition-all duration-200 ${
                            isSelected 
                              ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20 scale-[1.05]" 
                              : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          {mStr}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
              {["AM", "PM"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAMPMChange(type);
                  }}
                  className={`flex-1 py-1.5 px-2 rounded-[0.6rem] text-[9px] font-black uppercase tracking-widest transition-all duration-300 ${
                    ampm === type 
                      ? "bg-white text-emerald-600 shadow-sm ring-1 ring-black/5" 
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleOpen(false);
              }}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-technical font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
