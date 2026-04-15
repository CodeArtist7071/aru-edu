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
      title: "Daily Mock Tests",
      desc: "Simulate the real exam experience with daily tests based on the latest OPSC and OSSC patterns.",
      tag: "Active Cycle"
    },
    {
      icon: <GalleryHorizontal className="size-6" />,
      title: "Living Knowledge Archive",
      desc: "Access curated PDF notes, previous year question banks, and localized current affairs for Odisha.",
      tag: "Curated"
    },
    {
      icon: <TrendingUp className="size-6" />,
      title: "Personalized Analytics",
      desc: "Track your performance with detailed reports highlighting your strengths and areas needing improvement.",
      tag: "AI Powered"
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
              <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-widest border border-primary/10 leading-none">
                <Verified size={14} />
                Odisha's 1st AI Focus Journal
              </div>
              
              <h1 className="text-2xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-on-surface">
                Ace Your <span className="text-primary italic">Mind.</span> <br className="hidden sm:block" />
                Draft Your Legacy.
              </h1>
              
              <p className="text-xs md:text-lg lg:text-xl text-on-surface-variant max-w-xl text-wrap mx-auto lg:mx-0 leading-relaxed font-medium">
                A calm, focused sanctuary for <span className="text-primary font-bold">OPSC</span> & <span className="text-primary font-bold">OSSC</span> aspirants. Experience a structured approach to knowledge mastery through our AI-integrated journal.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
                <button 
                  onClick={() => navigate("/register")}
                  className="w-full sm:w-auto bg-primary text-on-primary px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest shadow-lg hover:bg-primary-container transition-all active:scale-95"
                >
                  Begin Your Study
                </button>
                {/* <div className="w-full sm:w-auto flex items-center justify-center gap-4 px-6 py-4 rounded-full bg-surface-container-low shadow-sm group cursor-pointer hover:bg-white transition-all">
                   <div className="size-8 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <Presentation size={18} />
                   </div>
                   <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-on-surface-variant">Free Orientation</span>
                </div> */}
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
                  <span className="text-xl sm:text-2xl font-bold tracking-tighter leading-none">Increasing</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/40 mt-1 leading-none">Verified Aspirants</span>
                </div>
              </div>
            </div>

            <div className="relative lg:scale-110">
              <div className="relative aspect-1 md:aspect-4/5 bg-surface-container-low rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
                <img 
                  src="/hero-botanical.png" 
                  alt="Knowledge Archive" 
                  className="size-full object-cover hover:scale-105 transition-transform duration-[3s]"
                  fetchPriority="high"
                />
              </div>
            </div>
           </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-surface-container-lowest py-5 sm:py-32 border-y border-on-surface/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-10 sm:gap-16 items-center">
              <div className="lg:col-span-1">
                <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] [writing-mode:vertical-lr] hidden lg:block opacity-40 leading-none">
                  Established MMXXIV
                </span>
              </div>
              <div className="lg:col-span-7 space-y-6 sm:space-y-10 group">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-tight">
                  The <span className="text-primary italic">Aru.edu</span> Philosophy: <br />
                  Learning as a Ritual.
                </h2>
                <div className="space-y-6 text-base text-on-surface-variant/80 max-w-prose leading-relaxed font-medium">
                  <p>
                    We believe exam preparation isn't a race of speed, but a ritual of focus. Our platform is designed as a <span className="text-primary font-bold italic">Digital Greenhouse</span>—where knowledge is cultivated with intentionality, not just consumed.
                  </p>
                  <p>
                    From the "Tactile Editorial" design to our AI-driven "Growth Nodes," every element is crafted to reduce cognitive friction and amplify focus for Odisha's most dedicated aspirants.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 lg:pl-10">
                <div className="p-8 sm:p-10 rounded-3xl bg-primary/5 border border-primary/10 space-y-6">
                  <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <History size={24} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-primary italic leading-snug">"Draft your legacy, one entry at a time."</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/40 leading-none">— The Curator's Note</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Landscapes Section */}
        <section className="bg-surface py-20 sm:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 sm:gap-12 mb-12 sm:mb-20">
              <div className="space-y-4">
                <h3 className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest leading-none">Landscape Discovery</h3>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-tight">
                  What defines your <br className="hidden sm:block" /> <span className="italic">Horizon?</span>
                </h2>
              </div>
              <p className="text-base text-on-surface-variant/60 max-w-sm leading-relaxed font-medium">
                Choose your specific target path. Our AI identifies the most critical nodes for your architectural growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-10">
              {[
                { name: "OPSC", desc: "Group A & B Civil Services, Medical & Judicial excellence.", icon: <Award className="size-8" /> },
                { name: "OSSC", desc: "Combined Graduate Level (CGL) and specialized technical cadres.", icon: <Zap className="size-8" /> },
                { name: "OSSSC", desc: "RI, ARI, Amin, and vital field administration roles.", icon: <Globe className="size-8" /> }
              ].map((exam, i) => (
                <div key={i} className="bg-surface-container-low p-8 sm:p-12 rounded-3xl group cursor-pointer border border-transparent hover:border-primary/10 hover:bg-white transition-all duration-300">
                   <div className="size-14 sm:size-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-primary mb-6 sm:mb-8 shadow-sm group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      {exam.icon}
                   </div>
                   <h4 className="text-xl sm:text-2xl font-bold text-on-surface mb-3 sm:mb-4">{exam.name}</h4>
                   <p className="text-sm sm:text-base text-on-surface-variant/70 mb-8 sm:mb-10 leading-relaxed font-medium">
                    {exam.desc}
                   </p>
                   <div className="pt-6 sm:pt-8 border-t border-on-surface/5 flex justify-between items-center group-hover:border-primary/10">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest leading-none">Explore Syllabus</span>
                      <ArrowRight className="size-5 text-on-surface-variant/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Pods Section */}
        <section className="py-5 sm:py-40 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 sm:gap-20 items-center">
            <div className="lg:col-span-5 space-y-10 sm:space-y-12">
               <div className="space-y-4">
                <h3 className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest leading-none">Growth Architecture</h3>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-tight">
                  A learning experience that <span className="text-primary italic">breathes.</span>
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
                     alt="study" 
                     className="size-full object-cover" 
                   />
                </div>
                <div className="bg-primary p-8 sm:p-12 rounded-4xl text-on-primary shadow-xl">
                   <p className="text-4xl sm:text-6xl font-extrabold tracking-tighter mb-2 leading-none">98<span className="text-xl sm:text-2xl opacity-60">%</span></p>
                   <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">Syllabus <br /> Penetration Rate</p>
                </div>
              </div>
              <div className="space-y-6 sm:space-y-10">
                 <div className="bg-surface-container-highest p-8 sm:p-10 rounded-4xl shadow-sm relative group overflow-hidden">
                    <div className="absolute -top-4 -right-4 size-24 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
                    <NotebookPen className="size-8 sm:size-10 text-primary mb-4 sm:mb-6" />
                    <p className="text-lg sm:text-xl font-bold leading-snug">Personalized focus timers and session-tracking journals.</p>
                 </div>
                 <div className="aspect-3/4 bg-surface-container-low rounded-4xl overflow-hidden shadow-lg border-2 sm:border-4 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop" 
                      alt="notes" 
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
                  Ready to draft your <br className="hidden sm:block" /> <span className="italic">Success?</span>
                </h3>
                <p className="text-base sm:text-lg text-on-primary/80 max-w-prose leading-relaxed font-medium">
                  Join Odisha's most intentional learning community and secure your government career through structured focus.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:justify-end">
                <button 
                  onClick={() => navigate("/register")}
                  className="bg-white text-primary px-8 sm:px-10 py-4 sm:py-5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xl hover:bg-surface-container-low transition-all active:scale-95 leading-none"
                >
                  Create Account
                </button>
                <button className="bg-transparent border-2 border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95 leading-none">
                  Consult Faculty
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
