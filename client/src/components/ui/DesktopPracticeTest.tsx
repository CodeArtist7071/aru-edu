import React, { useRef } from "react";
import { FormProvider } from "react-hook-form";
import { QuestionList } from "../pracTiceTest/QuestionList";
import { QuestionPalette } from "./QuestionPalette";
import AdvancedProctoring from "./AdvanceProctoring";
import ViolationFeed from "./ViolationFeed";
import ViolationWarningModal from "./ViolationWarningModel";
import { AlertPopup } from "./AlertPopup";
import { Target } from "lucide-react";

export const DesktopPracticeTest = ({ logic }: { logic: any }) => {
  const {
    questions, language, timeLeft, violations, lastViolation, proctoringStatus, 
    showWarning, cameraReady, faceDetected, openAlert, showSubmitConfirm, counts, 
    confirmedAnswers, setConfirmedAnswers, methods, onSubmit, 
    handleConfirm, cancelExit, confirmExit, videoRef, mode, setShowWarning, setShowSubmitConfirm,
    minimized, setMinimized
  } = logic;

  const questionRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="text-on-surface font-narrative min-h-screen flex flex-col transition-colors duration-700 ease-botanical">
          <main className="flex-1 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 p-6 lg:p-12 animate-reveal relative">
            <div className="col-span-full lg:col-span-8">
              <QuestionList 
                confirmedAnswers={confirmedAnswers} 
                setConfirmedAnswers={setConfirmedAnswers} 
                questionRef={questionRef} 
                onConfirm={handleConfirm} 
                language={language} 
              />
            </div>
            
            <div className="hidden lg:block lg:col-span-4">
               <QuestionPalette questionRefs={questionRef} confirmed={confirmedAnswers} mode="desktop" />
            </div>
          </main>

          {mode === "proctored" && (
            <div className="z-50">
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
               <div className="fixed bottom-8 right-8 z-40 pointer-events-auto">
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
            title="Are you sure you want to leave the examination?"
          >
            <div className="flex justify-between items-center gap-2 mt-8">
               <button type="button" onClick={confirmExit} className="px-4 py-2 bg-surface-container-high text-on-surface-variant font-technical font-black uppercase tracking-widest rounded-full hover:bg-surface-dim transition-all">Yes, Evacuate</button>
               <button type="button" onClick={cancelExit} className="px-4 py-2 bg-primary text-white font-technical font-black uppercase tracking-widest rounded-full shadow-ambient hover:scale-105 transition-all">Cancel</button>
            </div>
          </AlertPopup>

          <AlertPopup 
            isOpen={showSubmitConfirm} 
            title="Final Submission" 
            onClose={() => setShowSubmitConfirm(false)} 
            message=""
          >
             <div className="space-y-10 py-6">
                <div className="bg-linear-to-br from-surface-container-low to-surface p-12 rounded-[3.5rem] relative overflow-hidden shadow-inner">
                   <div className="grid grid-cols-2 gap-10 relative z-10">
                      <div className="flex flex-col items-center justify-center p-8 bg-surface/60 backdrop-blur-xl rounded-4xl shadow-ambient ring-1 ring-white/20">
                         <p className="text-[10px] font-technical font-black text-primary uppercase tracking-[0.2em] mb-3">Manifested</p>
                         <p className="text-5xl font-technical font-black text-on-surface tracking-tighter">{counts.attempted}</p>
                      </div>
                      <div className="flex flex-col items-center justify-center p-8 bg-surface/60 backdrop-blur-xl rounded-4xl shadow-ambient ring-1 ring-white/20">
                         <p className="text-xs font-technical font-black text-tertiary uppercase tracking-[0.2em] mb-3">Remaining</p>
                         <p className="text-5xl font-technical font-black text-tertiary tracking-tighter">{counts.total - counts.attempted}</p>
                      </div>
                   </div>
                </div>

                <div className="text-center space-y-4">
                   <h4 className="text-3xl font-black tracking-tight text-on-surface">Ready to Submit..?</h4>
                   <p className="text-sm text-on-surface-variant font-medium leading-relaxed max-w-sm mx-auto">Your study data is curated for professional grading. Manifesting will finalize this entry in your digital journal.</p>
                </div>

                <div className="flex gap-6">
                   <button type="button" onClick={() => setShowSubmitConfirm(false)} className="flex-1 p-4 text-xs font-technical font-black uppercase tracking-widest text-on-surface-variant/60 hover:text-on-surface transition-all">Re-evaluate</button>
                   <button type="button" onClick={() => methods.handleSubmit(onSubmit)()} className="flex-1 p-4 bg-linear-to-r from-primary to-primary-container text-white rounded-full font-technical font-black text-xs uppercase tracking-widest shadow-ambient-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">Manifest Submission <Target size={18} /></button>
                </div>
             </div>
          </AlertPopup>
        </div>
      </form>
    </FormProvider>
  );
};
