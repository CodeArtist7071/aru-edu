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
        <div className="min-h-screen font-narrative text-on-surface antialiased transition-colors duration-700 selection:bg-primary/10 selection:text-primary">

            {/* Main Content */}
            <main className="max-w-5xl px-6">

                {/* Header - Massive Editorial */}
                <div className="mb-5 md:mb-15">
                    <h1 className="mt-4 md:text-6xl font-black tracking-tighter leading-[0.85]">
                        Growth <span className="text-primary">Matrix</span>
                    </h1>
                    <p className="max-w-2xl mt-2 text-on-surface-variant/70 font-medium leading-relaxed">
                        Assess your cognitive evolution across focused chapter drills and comprehensive exam simulations.
                    </p>
                </div>

                {/* Cards - Tonal Sectioning */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                    {cardData.map((el, index) => (
                        <div key={index} className="bg-surface-container-low p-1 md:p-10 rounded-3xl flex flex-col justify-between hover:bg-surface-container-high transition-all duration-500 group shadow-ambient-sm hover:shadow-ambient-lg">
                            <div className="flex justify-between items-center">
                                <div className="w-full flex flex-row md:flex-col gap-4">
                                    <div className="w-15 h-15 bg-surface-container-high rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                        <div className="w-8 flex justify-center items-center h-5 md:text-primary">
                                            {el.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="font-bold mb-3 tracking-tight">
                                            {el.title}
                                        </h2>
                                        <p className="text-on-surface-variant/70 mb-5 md:mb-10 leading-relaxed">
                                            {el.description}
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-10 mb-4 md:mb-10">
                                <div>
                                    <p className=" font-mono font-bold uppercase tracking-widest text-on-surface-variant/40 mb-1">Test Completed</p>
                                    <p className=" font-mono font-black text-primary">{el.completed}</p>
                                </div>
                                <div>
                                    <p className=" font-mono font-bold uppercase tracking-widest text-on-surface-variant/40 mb-1">Average Score Obtained</p>
                                    <p className=" font-mono font-black text-secondary">{el.avgScore}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate("history")}
                                className="w-full cursor-pointer py-3 md:py-5 bg-primary text-white rounded-full font-mono font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                            >
                                {el.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Latest Report - Technical Slip */}
                {/* <div className="mt-5 md:mt-24">
                    <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-on-surface-variant/40 mb-8 flex items-center gap-6">
                        Latest Sync Report
                        <div className="h-px flex-1 bg-on-surface-variant/10"></div>
                    </h4>
                    {latestReportData.map((el, index) => (
                        <div key={index} className="bg-surface-container-high/20 rounded-4xl p-6 md:px-8 md:py-6 flex flex-col md:flex-row items-center justify-between hover:bg-surface-container-high transition-all duration-300 group/item cursor-pointer hover-bloom gap-6">
                            <div className="flex items-center gap-6 w-full md:w-auto">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center p-3 animate-pulse shrink-0">
                                    <WorkflowIcon size={24} />
                                </div>
                                <div className="flex flex-col gap-1 min-w-0">
                                    <p className="text-md md:text-lg font-bold tracking-tight truncate">{el.title}</p>
                                    <p className="text-[9px] md:text-[10px] font-mono font-bold text-on-surface-variant/40 uppercase tracking-widest">
                                        Acknowledged <span className="text-on-surface-variant">{el.date}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between md:justify-end gap-8 md:gap-12 w-full md:w-auto">
                                <div className="flex flex-col items-end md:items-end">
                                    <p className="text-xl md:text-2xl font-mono font-black text-on-surface">{el.score}</p>
                                    <p className="text-[9px] font-mono font-bold uppercase tracking-widest text-on-surface-variant/40">Terminal Score</p>
                                </div>
                                <button className="flex-1 md:flex-none px-6 md:px-8 py-3 bg-surface-container-highest text-on-surface rounded-full text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-on-surface hover:text-white transition-all whitespace-nowrap">
                                    {el.status}
                                </button>
                            </div>
                        </div>
                    ))}
                </div> */}
            </main>
        </div>
    );
};

export default ResultSelection;
