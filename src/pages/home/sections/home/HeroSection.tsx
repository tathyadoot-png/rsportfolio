import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { PiFlowerLotusThin } from "react-icons/pi";
import hi from "@/locales/hi";
import en from "@/locales/en";

// Images
import img4 from "@/assets/4.jpg";
import img11 from "@/assets/11.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpg";
import img9 from "@/assets/9.jpg";
import img10 from "@/assets/10.jpg";

export type Lang = "hi" | "en";

interface HeroSectionProps {
  lang?: Lang;
}

const HeroSection = ({ lang = "hi" }: HeroSectionProps) => {
  const t = lang === "hi" ? hi : en;
  const isHi = lang === "hi";

  const containerRef = useRef<HTMLDivElement | null>(null);
  const images = [img4, img11, img6, img7, img8, img9, img10];
  const [currentIndex, setCurrentIndex] = useState(0);

  /* ---------- GSAP ENTRY ---------- */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.from(".hero-badge", { y: -20, opacity: 0, duration: 0.8 })
        .from(".hero-text", { 
          y: "110%", 
          skewY: 2, 
          opacity: 0, 
          duration: 1.2, 
          stagger: 0.15 
        }, "-=0.4")
        .from(".hero-details", { 
          x: -30, 
          opacity: 0, 
          duration: 0.8, 
          stagger: 0.1 
        }, "-=0.8")
        .from(".hero-image-container", { 
          scale: 1.05, 
          opacity: 0, 
          duration: 1.5 
        }, "-=1.2")
        .from(".floating-card", { 
          scale: 0, 
          opacity: 0, 
          duration: 0.8, 
          ease: "back.out(1.7)" 
        }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ---------- IMAGE ROTATION ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-bg pt-32 pb-20 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-30">
        <div className="absolute top-[5%] left-[-5%] w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full" />
      </div>

      {/* FIXED MAX-WIDTH CONTAINER */}
      <div className="mx-auto  w-full px-8 md:px-12 lg:px-36 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-20">
          {/* Badge */}
          <div className="hero-badge mb-10">
            <div className="inline-flex items-center gap-3 rounded-full bg-primary/5 px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.25em] text-primary border border-primary/20 shadow-sm">
              <PiFlowerLotusThin className="text-xl animate-pulse" />
              {isHi ? "जनसेवा का संकल्प" : "Commitment to People"}
            </div>
          </div>

          {/* NAME: Using Gotu Font & Fixed Padding for Matras */}
          <div className="relative mb-10 space-y-2">
            <div className="overflow-visible py-2">
              <h1 className="hero-text font-[Gotu] font-bold uppercase tracking-tight text-primary leading-[1.1] text-[clamp(3.5rem,7.5vw,6rem)]">
                {isHi ? "राजेन्द्र" : "RAJENDRA"}
              </h1>
            </div>
            <div className="overflow-visible py-3">
              <h1 className="hero-text font-[Gotu] font-bold uppercase tracking-tight text-secondary leading-[1.1] text-[clamp(3.5rem,7.5vw,6rem)]">
                {isHi ? "शुक्ल" : "SHUKLA"}
              </h1>
            </div>
          </div>

          {/* DETAILS: Using Martel for Body Text */}
          <div className="hero-details space-y-8">
            <div className="flex items-center gap-6">
              <div className="h-[2px] w-16 bg-primary rounded-full" />
              <p className="font-[Gotu] text-xl md:text-2xl font-bold text-secondary italic">
                {isHi ? "उपमुख्यमंत्री, मध्य प्रदेश" : "Deputy Chief Minister, MP"}
              </p>
            </div>
            <p className="font-[Martel] text-lg md:text-xl text-text-muted leading-relaxed max-w-lg">
              {isHi
                ? "स्वस्थ समाज, सशक्त प्रदेश और बेहतर भविष्य के लिए निरंतर कार्य और समर्पण।"
                : "Continuous dedication towards a healthy society and a prosperous state."}
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-14 flex flex-wrap gap-6 hero-details">
            <a href="#contact" className="group relative overflow-hidden rounded-full bg-primary px-12 py-5 text-sm font-black uppercase tracking-widest text-white shadow-2xl shadow-primary/30 transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10">{t.cta.contact}</span>
              <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <a href="#about" className="rounded-full border-2 border-border px-12 py-5 text-sm font-black uppercase tracking-widest text-secondary hover:bg-bg-soft transition-all duration-300">
              {isHi ? "परिचय" : "About"}
            </a>
          </div>
        </div>

        {/* ================= RIGHT CAROUSEL (FIXED WIDTH) ================= */}
        <div className="hero-image-container relative h-[550px] lg:h-[700px] w-full flex items-center justify-center lg:justify-end pr-4">
          
          <div className="relative w-full h-full rounded-[4.5rem] overflow-hidden border-[14px] border-white shadow-[0_50px_100px_rgba(0,0,0,0.12)] bg-bg-soft">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover object-top"
                alt="Rajendra Shukla"
              />
            </AnimatePresence>

            {/* Gradient Overlay using Governance Blue */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent pointer-events-none" />
            
            {/* Progress Dots */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 transition-all duration-700 rounded-full ${currentIndex === idx ? "w-14 bg-primary" : "w-3 bg-white/40"}`} 
                />
              ))}
            </div>
          </div>

          {/* Floating Badge (20+ Years) */}
          <motion.div 
            className="floating-card absolute -top-8 -right-4 bg-white p-10 rounded-[3rem] shadow-2xl z-40 hidden sm:block border border-border text-center"
          >
            <p className="text-primary font-[Gotu] font-black text-5xl leading-none">20+</p>
            <p className="font-[Martel] text-[11px] font-bold text-text-muted uppercase tracking-widest mt-3">Years of Service</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;