import { 
  Verified, 
  ChevronRight, 
  ArrowRight, 
  Notebook, 
  GalleryHorizontal, 
  User2Icon, 
  NotebookPen, 
  Presentation,
  TrendingUp,
  Zap,
  Globe,
  Award,
  History
} from "lucide-react";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const featuresData = [
    {
      icon: <Notebook className="size-6" />,
      title: "Daily Practice Tests",
      desc: "New questions every day. Just like the real exam. Practice for 10 minutes or 1 hour — your choice.",
      tag: "Free"
    },
    {
      icon: <GalleryHorizontal className="size-6" />,
      title: "Previous Year Questions (PYQ)",
      desc: "Practice with actual questions from past OPSC and OSSC exams. The best way to know what the real exam asks.",
      tag: "Most Useful"
    },
    {
      icon: <TrendingUp className="size-6" />,
      title: "Your Own Report Card",
      desc: "See your marks for every subject. Know exactly which topics you need to study more. No guesswork.",
      tag: "Simple"
    }
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface font-narrative overflow-x-hidden transition-colors duration-700">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-5 md:pt-24 pb-10 md:pb-32 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col-reverse  md:grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="space-y-3 md:space-y-10 relative z-10 text-left lg:text-left">
              {/* <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-widest border border-primary/10 leading-none">
                <Verified size={14} />
                🎓 Free Practice Tests for OPSC, OSSC & OSSSC
              </div> */}
              
              <h1 className="text-2xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-on-surface">
                Pass Your <span className="text-primary italic">Government Exam.</span> <br className="hidden sm:block" />
                 Practice with Real Questions.
              </h1>
              
              <p className="text-xs md:text-lg lg:text-xl text-on-surface-variant max-w-xl text-wrap mx-auto lg:mx-0 leading-relaxed font-medium">
                Try a free 5-minute test right now. No signup needed. <span className="text-primary font-bold">10,000+ students</span> from Odisha are already preparing.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
                <button 
                  onClick={() => navigate("/guest/select-exams")}
                  className="w-full sm:w-auto bg-primary text-on-primary px-8 py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-lg hover:bg-primary-container transition-all active:scale-95"
                >
                  🎯 Start a Free Test.
                </button>
                <button 
                  onClick={() => navigate("/guest/subjects")}
                  className="w-full sm:w-auto bg-surface-container-low text-on-surface px-6 py-3 rounded-full text-xs sm:text-sm font-bold border border-on-surface/10 shadow-sm hover:bg-white transition-all active:scale-95"
                >
                  📚 See All Subjects
                </button>
              </div>

              <div className="hidden md:flex flex-col sm:flex-row items-center gap-6 pt-8 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="size-10 md:size-12 rounded-full border-4 border-surface overflow-hidden bg-surface-container-high shadow-sm">
                      <img 
                        src={`https://i.pravatar.cc/100?img=${i+10}`} 
                        alt="user" 
                        className="size-full object-cover" 
                      />
                    </div>
                  ))}
                </div>
                <div className=" md:flex flex-col items-center sm:items-start text-on-surface">
                  <span className="text-xl sm:text-2xl font-bold tracking-tighter leading-none">10,000+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/40 mt-1 leading-none">Students from Odisha</span>
                </div>
              </div>
            </div>

            <div className="relative lg:scale-110">
              <div className="relative aspect-1 md:aspect-4/5 bg-surface-container-low rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
                <img 
                  src="/hero-botanical.png" 
                  alt="Practice Tests for Government Exams" 
                  className="size-full object-cover hover:scale-105 transition-transform duration-[3s]"
                  fetchPriority="high"
                />
              </div>
            </div>
           </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-surface-container-lowest py-4 sm:py-6 border-y border-on-surface/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-xs sm:text-sm font-bold text-on-surface-variant/60">
              <span className="flex items-center gap-2">✓ Free Forever</span>
              <span className="flex items-center gap-2">✓ Works on Any Phone</span>
              <span className="flex items-center gap-2">✓ 50,000+ Questions</span>
              <span className="flex items-center gap-2">✓ 2,000+ Previous Year Papers</span>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-surface-container-lowest py-5 sm:py-32 border-y border-on-surface/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-10 sm:gap-16 items-center">
              <div className="lg:col-span-1">
                <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] [writing-mode:vertical-lr] hidden lg:block opacity-40 leading-none">
                  Built for Odisha
                </span>
              </div>
              <div className="lg:col-span-7 space-y-6 sm:space-y-10 group">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-tight">
                  How Arumind <br />
                  Helps You <span className="text-primary italic">Pass</span>
                </h2>
                <div className="space-y-6 text-base text-on-surface-variant/80 max-w-prose leading-relaxed font-medium">
                  <p>
                    Most students fail government exams because they don't practice enough. We built Arumind to fix that one problem.
                  </p>
                  <p>
                    We give you unlimited practice questions, exactly like the real exam. Previous year papers, daily mock tests, and your own report card — so you know exactly what to study.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 lg:pl-10">
                <div className="p-8 sm:p-10 rounded-3xl bg-primary/5 border border-primary/10 space-y-6">
                  <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <History size={24} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-primary italic leading-snug">"Pass your exam, one practice session at a time."</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/40 leading-none">— Built by students who passed OPSC</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exam Selection Section */}
        <section className="bg-surface py-20 sm:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 sm:gap-12 mb-12 sm:mb-20">
              <div className="space-y-4">
                <h3 className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest leading-none">Choose Your Exam</h3>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-tight">
                  Which Exam Are You <br className="hidden sm:block" /> <span className="italic">Preparing For?</span>
                </h2>
              </div>
              <p className="text-base text-on-surface-variant/60 max-w-sm leading-relaxed font-medium">
                Pick your exam. We'll show you the exact questions you need to practice.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-10">
              {[
                { name: "OPSC", job: "Civil Services", desc: "IAS, OAS, and Officer posts (Group A & B)", icon: <Award className="size-8" /> },
                { name: "OSSC", job: "Staff Selection", desc: "CGL, Auditor, Inspector, and other posts", icon: <Zap className="size-8" /> },
                { name: "OSSSC", job: "Field Roles", desc: "RI, ARI, Amin, and other field posts", icon: <Globe className="size-8" /> }
              ].map((exam, i) => (
                <div key={i} className="bg-surface-container-low p-8 sm:p-12 rounded-3xl group cursor-pointer border border-transparent hover:border-primary/10 hover:bg-white transition-all duration-300">
                   <div className="size-14 sm:size-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-primary mb-6 sm:mb-8 shadow-sm group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      {exam.icon}
                   </div>
                   <h4 className="text-xl sm:text-2xl font-bold text-on-surface mb-1 sm:mb-1">{exam.name}</h4>
                   <p className="text-sm text-primary font-bold mb-3 sm:mb-4">{exam.job}</p>
                   <p className="text-sm sm:text-base text-on-surface-variant/70 mb-8 sm:mb-10 leading-relaxed font-medium">
                    {exam.desc}
                   </p>
                   <div className="pt-6 sm:pt-8 border-t border-on-surface/5 flex justify-between items-center group-hover:border-primary/10">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest leading-none">See Practice Questions</span>
                      <ArrowRight className="size-5 text-on-surface-variant/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5 sm:py-40 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 sm:gap-20 items-center">
            <div className="lg:col-span-5 space-y-10 sm:space-y-12">
               <div className="space-y-4">
                <h3 className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest leading-none">What You Get</h3>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-tight">
                  Everything You Need to <span className="text-primary italic">Pass</span>
                </h2>
              </div>
              
              <div className="space-y-8 sm:space-y-10">
                {featuresData.map((f, i) => (
                  <div key={i} className="flex gap-6 sm:gap-8 group">
                    <div className="size-12 sm:size-14 bg-surface-container-low rounded-xl sm:rounded-2xl flex items-center justify-center text-primary shrink-0 transition-shadow">
                      {f.icon}
                    </div>
                    <div className="space-y-2">
                       <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                         <h4 className="text-lg sm:text-xl font-bold text-on-surface leading-snug">{f.title}</h4>
                         <span className="w-fit text-xs font-bold text-primary px-3 py-1 bg-primary/5 rounded-full border border-primary/10 tracking-widest uppercase leading-none">{f.tag}</span>
                       </div>
                       <p className="text-sm sm:text-base text-on-surface-variant/70 leading-relaxed font-medium max-w-prose">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:col-span-7 md:grid grid-cols-2 gap-6 sm:gap-10 items-start text-on-surface">
              <div className="space-y-6 sm:space-y-10 pt-12 sm:pt-24">
                <div className="aspect-square bg-surface-container-low rounded-3xl overflow-hidden shadow-lg border-2 sm:border-4 border-white">
                   <img 
                     src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" 
                     alt="Students preparing for exam" 
                     className="size-full object-cover" 
                   />
                </div>
                <div className="bg-primary p-8 sm:p-12 rounded-4xl text-on-primary shadow-xl">
                   <p className="text-4xl sm:text-6xl font-extrabold tracking-tighter mb-2 leading-none">10,000<span className="text-xl sm:text-2xl opacity-60">+</span></p>
                   <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">Students from <br /> Odisha preparing</p>
                </div>
              </div>
              <div className="space-y-6 sm:space-y-10">
                 <div className="bg-surface-container-highest p-8 sm:p-10 rounded-4xl shadow-sm relative group overflow-hidden">
                    <div className="absolute -top-4 -right-4 size-24 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
                    <NotebookPen className="size-8 sm:size-10 text-primary mb-4 sm:mb-6" />
                    <p className="text-lg sm:text-xl font-bold leading-snug">Track how long you study each day. Build the habit.</p>
                 </div>
                 <div className="aspect-3/4 bg-surface-container-low rounded-4xl overflow-hidden shadow-lg border-2 sm:border-4 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop" 
                      alt="Study notes" 
                      className="size-full object-cover" 
                    />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pb-20 sm:pb-32">
          <div className="bg-primary rounded-4xl sm:rounded-[3.5rem] p-10 sm:p-16 lg:p-24 relative overflow-hidden text-center lg:text-left shadow-2xl">
            <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
               <Notebook size={300} className="text-on-primary" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center relative z-10">
              <div className="space-y-6 sm:space-y-8 text-on-primary">
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter leading-tight">
                  Try a Free Test Right Now. <br className="hidden sm:block" /> <span className="italic">No Signup Needed.</span>
                </h3>
                <p className="text-base sm:text-lg text-on-primary/80 max-w-prose leading-relaxed font-medium">
                  Practice 5 questions. See your score. If you like it, create a free account to save your progress.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:justify-end">
                <button 
                  onClick={() => navigate("/register")}
                  className="bg-white text-primary px-8 sm:px-10 py-4 sm:py-5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xl hover:bg-surface-container-low transition-all active:scale-95 leading-none"
                >
                  🎯 Start Free Test
                </button>
                <button 
                  onClick={() => navigate("/guest/subjects")}
                  className="bg-transparent border-2 border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95 leading-none"
                >
                  📚 Browse Subjects
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
