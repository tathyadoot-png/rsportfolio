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
    { label: t.nav.home, href: "#home", icon: <Home size={18} /> },
    { label: t.nav.about, href: "#about", icon: <User size={18} /> },
    { label: lang === "hi" ? "राजनीतिक यात्रा" : "Journey", href: "#journey", icon: <Map size={18} /> },
    { label: lang === "hi" ? "प्रमुख कार्य" : "Contributions", href: "#contributions", icon: <Briefcase size={18} /> },
    { label: t.nav.achievements, href: "#achievements", icon: <Award size={18} /> },
    { label: lang === "hi" ? "नेतृत्व" : "Leadership", href: "#leadership", icon: <Star size={18} /> },
    { label: t.nav.media, href: "#media", icon: <Tv size={18} /> },
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
            ? "bg-bg shadow-2xl border border-border" 
            : "bg-bg/95 backdrop-blur-md shadow-lg border border-white"
        }`}
      >
        {/* LOGO - Added a subtle Green accent to the container */}
        <div className="nav-reveal flex items-center gap-2.5 group cursor-pointer">
          <div className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-xl bg-secondary text-white shadow-lg shrink-0 transition-transform group-hover:rotate-6 border-b-2 border-green">
             <span className="font-gotu font-black text-lg sm:text-xl">R</span>
          </div>
          <div className="flex flex-col">
            <h2 className="font-gotu font-[1000] text-green text-[15px] sm:text-lg tracking-tighter uppercase leading-none">
              {lang === "hi" ? "राजेन्द्र शुक्ल" : "Rajendra Shukla"}
            </h2>
            <div className="flex items-center gap-1.5 mt-0.5">
               <span className="text-[7px] sm:text-[9px] font-black text-primary tracking-[0.2em] uppercase">
                  {lang === "hi" ? "उपमुख्यमंत्री" : "Deputy CM Of MP"}
               </span>
               <div className="h-1 w-1 rounded-full bg-green" /> {/* Tiny Green dot indicator */}
            </div>
          </div>
        </div>

        {/* DESKTOP NAV - Green Hover Underline */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-reveal text-[11px] font-[1000] uppercase tracking-widest text-secondary hover:text-green transition-all relative group">
              <h1> {item.label}</h1>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="nav-reveal flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setLang(lang === "hi" ? "en" : "hi")}
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-bg-soft border border-border text-secondary font-black text-[10px] uppercase hover:border-green transition-colors"
          >
            <Globe size={13} className="text-green" /> {/* Green Globe */}
            {lang === "hi" ? "EN" : "हिंदी"}
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 bg-primary px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-[10px] font-black uppercase text-white shadow-md hover:bg-secondary transition-all hover:shadow-primary/20"
          >
            {t.cta.contact}
            <ArrowRight size={14} className="hidden xs:block" />
          </a>

          <button className="xl:hidden p-2 text-secondary bg-bg-soft rounded-xl active:scale-90 transition-transform border border-border" onClick={() => setIsOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU: Added Green accents to cards and icons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[110] bg-secondary p-6 lg:hidden flex flex-col overflow-hidden"
          >
            {/* Background Decor - Saffron and Green Blurs */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-[-5%] left-[-5%] w-48 h-48 bg-green/10 blur-[80px] rounded-full" />

            {/* Header */}
            <div className="flex justify-between items-center mb-8 relative z-10">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-white text-secondary rounded-xl flex items-center justify-center font-black text-xl border-b-2 border-green">R</div>
                <span className="text-white font-gotu font-bold text-lg uppercase tracking-tight">Rajendra Shukla</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-3 bg-white/10 text-white rounded-full backdrop-blur-md hover:bg-white/20">
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
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-white group active:bg-green transition-all"
                >
                  <div className="p-2 bg-white/10 rounded-lg group-active:bg-white/20 text-green transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-gotu text-xl font-medium tracking-tight uppercase">{item.label}</span>
                </motion.a>
              ))}
            </nav>

            {/* Footer Actions */}
            <div className="mt-auto pt-6 flex flex-col gap-3 relative z-10">
               <button 
                onClick={() => { setLang(lang === "hi" ? "en" : "hi"); setIsOpen(false); }}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white text-secondary font-black uppercase text-xs tracking-widest shadow-xl border-b-4 border-green active:border-b-0 active:translate-y-1 transition-all"
               >
                 <Globe size={18} className="text-green" />
                 {lang === "hi" ? "Switch to English" : "हिंदी में बदलें"}
               </button>
               <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="h-1 w-1 rounded-full bg-green" />
                  <p className="text-center text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">
                    Vikas aur Vishwas
                  </p>
                  <div className="h-1 w-1 rounded-full bg-primary" />
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;