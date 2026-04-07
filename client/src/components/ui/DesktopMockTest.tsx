import React, { useRef } from "react";
import { FormProvider } from "react-hook-form";
import { QuestionList } from "../pracTiceTest/QuestionList";
import { QuestionPalette } from "./QuestionPalette";
import AdvancedProctoring from "./AdvanceProctoring";
import ViolationFeed from "./ViolationFeed";
import ViolationWarningModal from "./ViolationWarningModel";
import { AlertPopup } from "./AlertPopup";
import { Button } from "./Button";

export const DesktopMockTest = ({ logic }: { logic: any }) => {
  const {
    questions, language, timeLeft, violations, lastViolation, proctoringStatus, 
    showWarning, cameraReady, faceDetected, showCameraModal, 
    openAlert, setOpenAlert, showSubmitConfirm, counts, 
    confirmedAnswers, setConfirmedAnswers, methods, onSubmit, 
    handleConfirm, confirmExit, videoRef, mode, setShowWarning, setShowSubmitConfirm,
    minimized, setMinimized
  } = logic;

  const questionRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="bg-background-light dark:bg-background-dark text-on-surface dark:text-slate-100 font-display min-h-screen flex flex-col">
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
            </div>
          )}

          <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 50 }}>
            <ViolationFeed violations={violations} totalCount={violations.length} autoSubmitAt={7} />
          </div>

          <ViolationWarningModal isOpen={showWarning} violation={lastViolation} totalCount={violations.length} autoSubmitAt={7} onClose={() => setShowWarning(false)} />

          <AlertPopup 
            isOpen={showCameraModal} 
            title="Camera Permission Required" 
            onClose={() => {}} 
            message="This mock exam requires camera access for proctoring. Please enable your camera and restart the session."
          >
            <div className="flex flex-col gap-4 mt-4">
               <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-100 dark:border-green-800">
                  <p className="text-sm text-green-700 dark:text-green-300">
                     1. Click the lock icon in your browser's address bar.<br/>
                     2. Toggle "Camera" to <b>On</b>.<br/>
                     3. Click the button below to reload.
                  </p>
               </div>
               <Button 
                 onClick={async () => {
                   try {
                     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                     stream.getTracks().forEach(track => track.stop());
                     window.location.reload();
                   } catch (err) {
                     window.location.reload();
                   }
                 }} 
                 title="Grant Permission & Reload" 
                 className="w-full bg-primary hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-green-600/20"
               />
            </div>
          </AlertPopup>

          <AlertPopup isOpen={openAlert} title="Leave Mock Exam" onClose={() => setOpenAlert(false)} message="Are you sure you want to exit this mock exam?">
            <div className="flex w-full gap-3 justify-between mt-4">
              <Button onClick={confirmExit} title="Yes, Exit" />
              <Button onClick={() => setOpenAlert(false)} title="Cancel" className="bg-surface text-primary! border border-primary!" />
            </div>
          </AlertPopup>

          <AlertPopup isOpen={showSubmitConfirm} title="Final Submission" onClose={() => setShowSubmitConfirm(false)} message="">
             <div className="space-y-6">
                <div className="bg-surface-container-low dark:bg-slate-800/50 p-6 rounded-2xl  dark:border-slate-800">
                   <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-surface dark:bg-slate-900 rounded-xl shadow-sm">
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Attempted</p>
                         <p className="text-3xl font-black text-primary">{counts.attempted}</p>
                      </div>
                      <div className="text-center p-4 bg-surface dark:bg-slate-900 rounded-xl shadow-sm">
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Unattempted</p>
                         <p className="text-3xl font-black text-orange-500">{counts.total - counts.attempted}</p>
                      </div>
                   </div>
                </div>
                <div className="flex gap-4 pt-2">
                   <button type="button" onClick={() => setShowSubmitConfirm(false)} className="flex-1 py-4 text-sm font-bold text-on-surface-variant hover:bg-surface-container-high rounded-2xl">Review</button>
                   <button type="button" onClick={() => { setShowSubmitConfirm(false); methods.handleSubmit(onSubmit)(); }} className="flex-1 py-4 text-sm font-bold bg-primary text-white rounded-2xl">Submit</button>
                </div>
             </div>
          </AlertPopup>

          <main className="flex-1 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 p-6 lg:p-12 animate-reveal relative">
            <div className="col-span-12 lg:col-span-8">
                <QuestionList confirmedAnswers={confirmedAnswers} setConfirmedAnswers={setConfirmedAnswers} questionRef={questionRef} onConfirm={handleConfirm} language={language} />
            </div>
            <div className="hidden lg:block lg:col-span-4">
                <QuestionPalette questionRefs={questionRef} confirmed={confirmedAnswers} mode="desktop" />
            </div>
          </main>
        </div>
      </form>
    </FormProvider>
  );
};
