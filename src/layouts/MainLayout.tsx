import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PiFlowerLotusThin } from "react-icons/pi"; // React Icon added
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import bjp from "@/assets/bjp.png"
import StickySocial from "@/components/layout/StickySocial";
import ScrollToTop from "@/components/layout/ScrollToTop";
export type Lang = "hi" | "en";

const MainLayout = () => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "hi";
    return localStorage.getItem("lang") === "en" ? "en" : "hi";
  });

  const [loading, setLoading] = useState(true);
  const isHi = lang === "hi";

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, [lang]);

  return (
    <>
      <style>{`
        .uiverse-loader {
          display: flex;
          justify-content: center;
          align-items: center;
          --color: #FF9933; 
          --animation: 2s ease-in-out infinite;
        }
        .uiverse-loader .circle {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 12px;
          height: 12px;
          border: solid 1px rgba(255, 153, 51, 0.2);
          border-radius: 50%;
          margin: 0 12px;
          animation: circle-keys var(--animation);
        }
        .uiverse-loader .circle .dot {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FF9933;
          box-shadow: 0 0 15px #FF9933;
          animation: dot-keys var(--animation);
        }
        .uiverse-loader .circle .outline {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          animation: outline-keys var(--animation);
        }
        
        .uiverse-loader .circle:nth-child(2), .uiverse-loader .circle:nth-child(2) .dot { animation-delay: 0.3s; }
        .uiverse-loader .circle:nth-child(3), .uiverse-loader .circle:nth-child(3) .dot { animation-delay: 0.6s; }
        .uiverse-loader .circle:nth-child(4), .uiverse-loader .circle:nth-child(4) .dot { animation-delay: 0.9s; }

        @keyframes circle-keys {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.3; }
        }
        @keyframes dot-keys {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.5); }
        }
        @keyframes outline-keys {
          0% { transform: scale(0); outline: solid 8px var(--color); outline-offset: 0; opacity: 0.6; }
          100% { transform: scale(1.2); outline: solid 0 transparent; outline-offset: 12px; opacity: 0; }
        }
      `}</style>

      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] bg-[#0F1115] flex flex-col items-center justify-between p-12 md:p-24"
            exit={{ 
              clipPath: "inset(0 0 100% 0)", // Modern curtain lift exit
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
          >
            {/* TOP: MINIMAL LOGO */}
            <div className="w-full flex justify-between items-center z-10">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-orange-500/40" />
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-medium">Madhya Pradesh</p>
               </motion.div>
               
               <motion.div 
                 animate={{ rotate: [0, 5, -5, 0] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="text-orange-500/80"
               >
                  <img className="w-24" src={bjp} alt="" />
               </motion.div>
            </div>

            {/* MIDDLE: TYPOGRAPHY (Super Suttle) */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-white text-[10vw] md:text-[6vw] font-black tracking-tighter leading-none mb-2">
                  {isHi ? "राजेन्द्र" : "RAJENDRA"}
                </h2>
                <h2 className="text-orange-500/90 text-[10vw] md:text-[6vw] font-light tracking-[0.1em] leading-none italic uppercase">
                  {isHi ? "शुक्ल" : "SHUKLA"}
                </h2>
              </motion.div>
            </div>

            {/* BOTTOM: UIVERSE LOADER & REWA INFO */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-12 z-10">
               <div className="flex flex-col items-center md:items-start gap-5">
                  <div className="uiverse-loader">
                    <div className="circle"><div className="dot"></div><div className="outline"></div></div>
                    <div className="circle"><div className="dot"></div><div className="outline"></div></div>
                    <div className="circle"><div className="dot"></div><div className="outline"></div></div>
                    <div className="circle"><div className="dot"></div><div className="outline"></div></div>
                  </div>
                  <p className="text-white/10 text-[9px] uppercase tracking-[0.5em] font-bold">
                    System Initializing
                  </p>
               </div>

               <div className="text-center md:text-right">
                  <h3 className="text-white/80 font-bold text-xl tracking-widest leading-none mb-2">REWA MP 17</h3>
                  <div className="h-[1px] w-full bg-gradient-to-l from-orange-500/50 to-transparent mb-2" />
                  <p className="text-white/20 text-[9px] font-bold tracking-[0.3em] uppercase">
                    {isHi ? "रीवा का गौरव" : "Pride of the White Tigers"}
                  </p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
{!loading && (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
    <Navbar lang={lang} setLang={setLang} />
    
    <StickySocial /> 
    <ScrollToTop /> {/* <--- Ye naya button yahan add ho gaya */}

    <main className="min-h-screen bg-white">
      <Outlet context={{ lang }} />
    </main>
    <Footer lang={lang} />
  </motion.div>
)}
    </>
  );
};

export default MainLayout;