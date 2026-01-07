import hi from "@/locales/hi";
import en from "@/locales/en";
import type { Lang } from "@/layouts/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, ShieldCheck, Zap, ArrowRight, MousePointer2 } from "lucide-react";

interface AboutSectionProps {
  lang: Lang;
}

const AboutSection = ({ lang }: AboutSectionProps) => {
  const isHi = lang === "hi";
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="relative min-h-screen bg-bg py-20 flex items-center overflow-hidden">
      {/* --- AESTHETIC TECH BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
        {/* Abstract Tech Line */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* LEFT SIDE: KINETIC TEXT */}
          <div className="w-full lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-7xl md:text-9xl font-black text-text/5 leading-none absolute -top-10 left-0 select-none">
                ABOUT
              </h2>
              <div className="relative z-10">
                <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase mb-4 block">
                   {isHi ? "व्यक्तित्व" : "The Persona"}
                </span>
                <h3 className="text-5xl md:text-7xl font-black text-text tracking-tighter leading-[0.9]">
                  Rajendra <br /> 
                  <span className="text-primary">Shukla</span>
                </h3>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-muted leading-relaxed max-w-md border-l-2 border-primary/20 pl-6 italic"
            >
              {isHi 
                ? "इंजीनियरिंग की सटीकता और सेवा का संकल्प—एक ऐसा नेतृत्व जो आधुनिक मध्यप्रदेश की नींव रख रहा है।" 
                : "A legacy built on engineering precision and public service—redefining leadership for modern MP."}
            </motion.p>

            {/* Simple Clean Stats */}
            <div className="flex gap-10">
               <div>
                  <p className="text-3xl font-black text-text tracking-tighter italic">1986</p>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">Graduate</p>
               </div>
               <div className="h-10 w-[1px] bg-border my-auto" />
               <div>
                  <p className="text-3xl font-black text-text tracking-tighter italic">1998</p>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">Politics</p>
               </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE ULTRA-MODERN FLIP CARD */}
          <div className="w-full lg:w-1/2 flex justify-center perspective-2000">
            <div 
              className="relative w-full max-w-[380px] aspect-[4/5] cursor-pointer group"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Floating Decoration */}
              <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
              
              <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-full"
              >
                {/* --- FRONT: THE VISION --- */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-white/40 rounded-[3rem] p-10 flex flex-col justify-between shadow-2xl">
                  <div className="space-y-6">
                    <div className="w-14 h-14 bg-text text-bg rounded-2xl flex items-center justify-center">
                      <Zap size={28} />
                    </div>
                    <h4 className="text-4xl font-black text-text leading-none uppercase tracking-tighter">
                      The <br /> <span className="text-primary italic">Visionary</span>
                    </h4>
                    <p className="text-sm text-muted font-medium leading-relaxed">
                       {isHi 
                        ? "रीवा इंजीनियरिंग कॉलेज से शुरू हुआ यह सफर आज मध्यप्रदेश के विकास की मुख्यधारा बना हुआ है।" 
                        : "From the corridors of REWA Engineering College to leading the health reforms of the state."}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                    <span className="text-[10px] font-black uppercase tracking-widest">Tap to Flip Info</span>
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* --- BACK: THE INTEL --- */}
                <div 
                  className="absolute inset-0 w-full h-full backface-hidden bg-bg-soft border-2 border-primary/20 rounded-[3rem] p-10 flex flex-col justify-between shadow-2xl"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <div className="space-y-8">
                    <div className="flex justify-between items-start">
                       <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary italic">Data Archive</h4>
                       <MousePointer2 size={16} className="text-primary animate-bounce" />
                    </div>
                    
                    <div className="space-y-6">
                       <div className="group/item flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                             <GraduationCap size={20} />
                          </div>
                          <div>
                             <p className="text-[9px] font-bold text-muted uppercase">Degree</p>
                             <p className="text-sm font-black text-text">B.E. Mechanical '86</p>
                          </div>
                       </div>
                       
                       <div className="group/item flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                             <ShieldCheck size={20} />
                          </div>
                          <div>
                             <p className="text-[9px] font-bold text-muted uppercase">Political Party</p>
                             <p className="text-sm font-black text-text">BJP State Executive</p>
                          </div>
                       </div>
                    </div>
                  </div>

                  <div className="mt-10 bg-text p-6 rounded-2xl text-bg text-center relative overflow-hidden group/box">
                     <p className="text-[10px] font-black uppercase tracking-widest opacity-50 relative z-10">Current Designation</p>
                     <p className="text-lg font-black italic mt-1 relative z-10">{isHi ? "स्वास्थ्य मंत्री" : "Health Minister"}</p>
                     <div className="absolute top-0 right-0 w-20 h-full bg-primary/20 -skew-x-12 translate-x-10 group-hover/box:translate-x-0 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-2000 { perspective: 2000px; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
      `}</style>
    </section>
  );
};

export default AboutSection;