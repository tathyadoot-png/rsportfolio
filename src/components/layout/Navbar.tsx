import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Globe, Menu, X, ArrowRight, Home, User, Map, Briefcase, Award, Star, Tv } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import hi from "@/locales/hi";
import en from "@/locales/en";

type Lang = "hi" | "en";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const Navbar = ({ lang, setLang }: NavbarProps) => {
  const t = lang === "hi" ? hi : en;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const navItems = [
    { label: t.nav.home, href: "#home", icon: <Home size={20} /> },
    { label: t.nav.about, href: "#about", icon: <User size={20} /> },
    { label: lang === "hi" ? "राजनीतिक यात्रा" : "Journey", href: "#journey", icon: <Map size={20} /> },
    { label: lang === "hi" ? "प्रमुख कार्य" : "Work", href: "#contributions", icon: <Briefcase size={20} /> },
    { label: t.nav.achievements, href: "#achievements", icon: <Award size={20} /> },
    { label: lang === "hi" ? "नेतृत्व" : "Leadership", href: "#leadership", icon: <Star size={20} /> },
    { label: t.nav.media, href: "#media", icon: <Tv size={20} /> },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".nav-reveal", 
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: "power3.out" }
      );
    }, navRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 z-[100] w-full px-4 md:px-8 py-4 sm:py-6">
      <div 
        className={`mx-auto max-w-7xl flex items-center justify-between px-5 py-3.5 transition-all duration-300 rounded-[1.5rem] sm:rounded-2xl ${
          scrolled 
            ? "bg-white shadow-2xl border border-gray-100" 
            : "bg-white/95 backdrop-blur-md shadow-lg border border-white"
        }`}
      >
        {/* LOGO */}
        <div className="nav-reveal flex items-center gap-2.5">
          <div className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-xl bg-[#112250] text-white shadow-lg shrink-0">
             <span className="font-[Gotu] font-black text-lg sm:text-xl">R</span>
          </div>
          <div className="flex flex-col">
            <h2 className="font-[Gotu] font-[1000] text-[#112250] text-[15px] sm:text-lg tracking-tighter uppercase leading-none">
              {lang === "hi" ? "राजेन्द्र शुक्ल" : "R. Shukla"}
            </h2>
            <span className="text-[7px] sm:text-[9px] font-black text-[#E46B2E] tracking-[0.2em] uppercase mt-0.5">
               {lang === "hi" ? "उपमुख्यमंत्री" : "Deputy CM"}
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-reveal text-[11px] font-[1000] uppercase tracking-widest text-[#112250] hover:text-[#E46B2E] transition-all relative group">
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E46B2E] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="nav-reveal flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setLang(lang === "hi" ? "en" : "hi")}
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-[#112250] font-black text-[10px] uppercase hover:bg-gray-100"
          >
            <Globe size={13} className="text-[#E46B2E]" />
            {lang === "hi" ? "EN" : "हिंदी"}
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#E46B2E] px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-[10px] font-black uppercase text-white shadow-md hover:bg-[#112250] transition-all"
          >
            {t.cta.contact}
            <ArrowRight size={14} className="hidden xs:block" />
          </a>

          <button className="xl:hidden p-2 text-[#112250] bg-gray-50 rounded-xl active:scale-90 transition-transform" onClick={() => setIsOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU: Ultra Modern Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[110] bg-[#112250] p-6 lg:hidden flex flex-col overflow-hidden"
          >
            {/* Background Decor */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#E46B2E]/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-[-5%] left-[-5%] w-48 h-48 bg-white/5 blur-[80px] rounded-full" />

            {/* Header */}
            <div className="flex justify-between items-center mb-8 relative z-10">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-white text-[#112250] rounded-xl flex items-center justify-center font-black text-xl">R</div>
                <span className="text-white font-[Gotu] font-bold text-lg uppercase tracking-tight">Rajendra Shukla</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-3 bg-white/10 text-white rounded-full backdrop-blur-md">
                <X size={24} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-2 relative z-10 overflow-y-auto pr-2">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-white group active:bg-[#E46B2E] transition-all"
                >
                  <div className="p-2 bg-white/10 rounded-lg group-active:bg-white/20 text-[#E46B2E]">
                    {item.icon}
                  </div>
                  <span className="font-[Gotu] text-xl font-medium tracking-tight uppercase">{item.label}</span>
                </motion.a>
              ))}
            </nav>

            {/* Footer Actions */}
            <div className="mt-auto pt-6 flex flex-col gap-3 relative z-10">
               <button 
                onClick={() => { setLang(lang === "hi" ? "en" : "hi"); setIsOpen(false); }}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white text-[#112250] font-black uppercase text-xs tracking-widest shadow-xl"
               >
                 <Globe size={18} />
                 {lang === "hi" ? "Switch to English" : "हिंदी में बदलें"}
               </button>
               <p className="text-center text-white/30 text-[10px] uppercase tracking-[0.3em] mt-2 font-bold">
                 Governance with Vision
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;