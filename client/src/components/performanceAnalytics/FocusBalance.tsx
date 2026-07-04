export const FocusBalance = ({ metrics }) => {
    return (
        <div className="lg:col-span-4 bg-primary p-4 rounded-3xl shadow-ambient">
            <h3 className="text-md font-black text-on-primary mb-10 tracking-tight">Your Score</h3>
            <div className="space-y-4">
                <div className="flex items-center gap-8">
                    <div className="shrink-0 size-24 border-10 border-on-primary/20 rounded-full flex items-center justify-center text-2xl font-technical font-black text-on-primary bg-primary/5 shadow-inner">
                        {metrics.accuracy || 0}<span className="text-xs opacity-40">%</span>
                    </div>
                    <div>
                        <p className="text-[8px] font-technical font-black text-on-primary uppercase tracking-widest opacity-40">Correct</p>
                        <p className="text-md font-bold text-on-primary leading-tight mt-1">Questions you got right</p>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className="shrink-0 size-24 border-10 border-on-primary/20 rounded-full flex items-center justify-center text-xl font-technical font-black text-on-primary bg-primary/5 shadow-inner">
                        {metrics.avgTimeSec || 0}<span className="text-xs opacity-40">s</span>
                    </div>
                    <div>
                        <p className="text-[8px] font-technical font-black text-on-primary uppercase tracking-widest opacity-40">Time</p>
                        <p className="text-md font-bold text-on-primary leading-tight mt-1">Average time per question</p>
                    </div>
                </div>
            </div>
        </div>
    )
}