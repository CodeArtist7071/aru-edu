import { Edit3Icon, Layers, WorkflowIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

interface cardDataProps {
    title: string;
    description: string;
    completed: number;
    avgScore: string;
    icon: React.ReactNode;
    buttonText: string;
}


const cardData: cardDataProps[] = [
    {
        title: "Practice Test Results",
        description: "Track your chapter-wise performance with accuracy, speed, and topic mastery.",
        completed: 124,
        avgScore: "78%",
        icon: <Edit3Icon className="size-4 md:size-20" />,
        buttonText: "View All Practice Results"
    },
    {
        title: "Mock Exam Results",
        description: "Full-length simulated exams. Analyze ranking and readiness.",
        completed: 8,
        avgScore: "#42",
        icon: <Layers className="size-4 md:size-20" />,
        buttonText: "View All Mock Results"
    }
]


const latestReportData = [
    {
        title: "Prelims Mock Test #12",
        date: "Completed on Oct 24, 2023",
        score: "142/200",
        status: "Full Report"
    }
]

const ResultSelection = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-surface font-narrative text-on-surface antialiased transition-colors duration-700 selection:bg-primary/10 selection:text-primary overflow-hidden flex flex-col">
            {/* BOTANICAL ATMOSPHERE: Consistency with Growth Series */}
            <div className="fixed top-0 right-0 -z-10 opacity-30 pointer-events-none">
                <div className="w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] rounded-full bg-linear-to-br from-primary/15 via-primary-container/10 to-transparent blur-[100px] lg:blur-[160px] -mr-20 lg:-mr-40 -mt-20 lg:-mt-40 animate-pulse-slow" />
                <div className="absolute top-40 right-40 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[80px] animate-bounce-slow" />
            </div>

            {/* Main Content: Tactical Spacing for Mobile App Shell */}
            <main className="max-w-5xl mx-auto w-full px-4 lg:px-6 pt-6 md:pt-10 pb-32 flex-1 overflow-y-auto no-scrollbar overscroll-contain">

                {/* Header - Compact App-Native Manifest */}
                <div className="mb-6 md:mb-15 animate-reveal px-2 lg:px-0">
                    <div className="flex items-center gap-2 mb-2 lg:mb-3">
                        <div className="size-1 bg-primary rounded-full animate-pulse" />
                        <span className="text-[8px] md:text-[10px] font-technical font-black uppercase tracking-[0.4em] text-primary/60">Performance Manifest</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight lg:leading-[0.85] text-on-surface">
                        Growth <span className="text-primary italic">Matrix</span>
                    </h1>
                    <p className="max-w-md mt-2 text-on-surface-variant/60 text-xs md:text-lg font-medium leading-relaxed">
                        Assess your cognitive evolution across focused drills and exam simulations.
                    </p>
                </div>

                {/* Cards - App-Native Vertical Sheets */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-10">
                    {cardData.map((el, index) => (
                        <div 
                            key={index} 
                            onClick={() => navigate("history")}
                            style={{ animationDelay: `${index * 120}ms` }}
                            className="bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/5 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between hover:bg-surface-container-high/60 active:scale-[0.98] active:translate-y-1 transition-all duration-500 group shadow-ambient-sm hover:shadow-ambient-lg animate-reveal opacity-0 cursor-pointer relative overflow-hidden"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <div className="w-full flex items-start gap-4 md:gap-5">
                                    <div className="size-12 md:size-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-primary/20 shrink-0">
                                        <div className="scale-100 md:scale-150">
                                            {el.icon}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="font-black text-lg md:text-2xl tracking-tight text-on-surface">
                                            {el.title}
                                        </h2>
                                        <p className="text-on-surface-variant/50 text-[10px] md:text-sm font-medium leading-normal max-w-[200px] md:max-w-full">
                                            {el.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8 border-t border-outline-variant/10 pt-5">
                                <div className="flex flex-col gap-0.5">
                                    <p className="font-mono font-bold text-[7px] md:text-[9px] uppercase tracking-widest text-on-surface-variant/40">Tests Completed</p>
                                    <p className="font-mono font-black text-lg md:text-3xl text-primary">{el.completed}</p>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <p className="font-mono font-bold text-[7px] md:text-[9px] uppercase tracking-widest text-on-surface-variant/40">Efficiency Rating</p>
                                    <p className="font-mono font-black text-lg md:text-3xl text-secondary">{el.avgScore}</p>
                                </div>
                            </div>

                            <div className="w-full py-4 md:py-6 bg-primary text-white rounded-2xl md:rounded-full font-mono font-black text-[9px] md:text-[10px] uppercase tracking-[0.25em] shadow-xl shadow-primary/20 transition-all group-hover:bg-primary/90 flex items-center justify-center gap-3">
                                <span>{el.buttonText}</span>
                                <Edit3Icon size={12} className="opacity-40 group-hover:rotate-12 group-hover:translate-x-1 transition-all" />
                            </div>

                            {/* App-Style Tonal Overlay on touch */}
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-active:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ResultSelection;
