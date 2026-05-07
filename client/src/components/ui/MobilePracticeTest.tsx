import React, { useRef } from "react";
import { ChevronLeft } from "lucide-react";
import { FormProvider } from "react-hook-form";
import { QuestionList } from "../pracTiceTest/QuestionList";
import { QuestionPalette } from "./QuestionPalette";
import AdvancedProctoring from "./AdvanceProctoring";
import ViolationFeed from "./ViolationFeed";
import ViolationWarningModal from "./ViolationWarningModel";
import { AlertPopup } from "./AlertPopup";
import { Target } from "lucide-react";

export const MobilePracticeTest = ({ logic }: { logic: any }) => {
  const {
    questions, language, timeLeft, violations, lastViolation, proctoringStatus, 
    showWarning, cameraReady, faceDetected, openAlert, showSubmitConfirm, counts, 
    confirmedAnswers, setConfirmedAnswers, methods, onSubmit, 
    setShowWarning, setShowSubmitConfirm, setOpenAlert,
    minimized, setMinimized, handlePreSubmit, handleConfirm, mode, videoRef,
    confirmExit, cancelExit
  } = logic;

  const formatTime = (seconds: number | null) => {
    if (seconds === null) return "00:00";
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const questionRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="text-on-surface font-narrative min-h-screen flex flex-col transition-colors duration-700 ease-botanical pb-20">
          {/* Persistent Examination Header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-2xl border-b border-outline-variant/10 h-20 flex items-center px-4 md:px-8">
            <div className="flex-1">
              <button 
                type="button"
                onClick={() => setOpenAlert(true)}
                className="size-10 flex items-center justify-center bg-surface-container-high rounded-xl text-on-surface-variant hover:text-primary transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center">
              <span className="text-[10px] font-technical font-black uppercase tracking-[0.3em] text-primary mb-1">Chronos</span>
              <div className={`text-xl font-technical font-black tracking-tighter ${timeLeft !== null && timeLeft < 300 ? 'text-error animate-pulse' : 'text-on-surface'}`}>
                {formatTime(timeLeft)}
              </div>
            </div>

            <div className="flex-1 flex justify-end">
              <button 
                type="button"
                onClick={handlePreSubmit}
                className="bg-primary text-white px-6 py-2.5 rounded-full font-technical font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
              >
                Submit
              </button>
            </div>
          </header>

          <main className="flex-1 w-full pt-24 pb-4 pl-2 pr-12 md:pr-32 animate-reveal relative">
            <div className="w-full">
              <QuestionList 
                confirmedAnswers={confirmedAnswers} 
                setConfirmedAnswers={setConfirmedAnswers} 
                questionRef={questionRef} 
                onConfirm={handleConfirm} 
                language={language} 
              />
            </div>
          </main>

          {/* Mobile manifestation outside main to escape transform stacking context */}
          <div className="lg:hidden">
             <QuestionPalette questionRefs={questionRef} confirmed={confirmedAnswers} mode="mobile" />
          </div>

          {/* Mobile Proctoring status - Draggable */}
          {mode === "proctored" && (
            <div className="z-40">
               <AdvancedProctoring 
                 videoRef={videoRef} 
                 isCameraReady={cameraReady} 
                 isFaceDetected={faceDetected} 
                 statusText={proctoringStatus} 
                 violationCount={violations.length} 
                 autoSubmitAt={7} 
                 minimized={minimized}
                 setMinimized={setMinimized}
               />
               <div className="fixed bottom-24 right-4 z-40 pointer-events-auto max-h-32 overflow-y-auto scale-90 origin-bottom-right">
                 <ViolationFeed violations={violations} totalCount={violations.length} autoSubmitAt={7} />
               </div>
            </div>
          )}

          <ViolationWarningModal 
            isOpen={showWarning} 
            violation={lastViolation} 
            totalCount={violations.length} 
            autoSubmitAt={7} 
            onClose={() => setShowWarning(false)} 
          />
          
          <AlertPopup 
            isOpen={openAlert} 
            message="Your current progress will be preserved." 
            onClose={cancelExit} 
            title="Leave Examination?"
          >
            <div className="flex justify-between items-center gap-3 mt-6">
               <button type="button" onClick={confirmExit} className="w-full p-4 bg-surface-container-high text-on-surface-variant font-technical font-black uppercase tracking-widest rounded-2xl hover:bg-surface-dim transition-all text-xs">Yes, Evacuate</button>
               <button type="button" onClick={cancelExit} className="w-full p-4 bg-primary text-white font-technical font-black uppercase tracking-widest rounded-2xl shadow-ambient hover:scale-105 transition-all text-xs">Cancel</button>
            </div>
          </AlertPopup>

          <AlertPopup 
            isOpen={showSubmitConfirm} 
            title="Final Submission" 
            onClose={() => setShowSubmitConfirm(false)} 
            message=""
          >
             <div className="space-y-8 py-4">
                <div className="bg-linear-to-br from-surface-container-low to-surface p-6 rounded-3xl relative overflow-hidden shadow-inner">
                   <div className="grid grid-cols-2 gap-4 relative z-10">
                      <div className="flex flex-col items-center justify-center p-4 bg-surface/60 backdrop-blur-xl rounded-2xl shadow-ambient">
                         <p className="text-[8px] font-technical font-black text-primary uppercase tracking-widest mb-1">Manifested</p>
                         <p className="text-3xl font-technical font-black text-on-surface tracking-tighter">{counts.attempted}</p>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-surface/60 backdrop-blur-xl rounded-2xl shadow-ambient">
                         <p className="text-[8px] font-technical font-black text-tertiary uppercase tracking-widest mb-1">Remaining</p>
                         <p className="text-3xl font-technical font-black text-tertiary tracking-tighter">{counts.total - counts.attempted}</p>
                      </div>
                   </div>
                </div>

                <div className="text-center space-y-2">
                   <h4 className="text-xl font-black text-on-surface">Ready to Submit?</h4>
                   <p className="text-[10px] text-on-surface-variant font-medium leading-relaxed">Your study data is curated for professional grading.</p>
                </div>

                <div className="flex flex-col gap-3">
                   <button type="button" onClick={methods.handleSubmit(onSubmit)} className="w-full p-4 bg-linear-to-r from-primary to-primary-container text-white rounded-full font-technical font-black text-xs uppercase tracking-widest shadow-ambient-lg flex items-center justify-center gap-3">Manifest Submission <Target size={16} /></button>
                   <button type="button" onClick={() => setShowSubmitConfirm(false)} className="w-full p-3 text-[10px] font-technical font-black uppercase tracking-widest text-on-surface-variant/60">Re-evaluate</button>
                </div>
             </div>
          </AlertPopup>
        </div>
      </form>
    </FormProvider>
  );
};
