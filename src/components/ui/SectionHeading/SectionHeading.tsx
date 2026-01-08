import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion"; // ✅ Fix: Import motion
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal Line animation
      gsap.from(".connector-line", {
        width: 0,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 90%" },
      });

      // Text reveal from bottom
      gsap.from(".reveal-up", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 90%" },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
 <div
  ref={containerRef}
  className="relative w-[96%] lg:w-[88%] mx-auto mb-16 md:mb-24 px-4 md:px-6 overflow-hidden"
>

      {/* WRAPPER: Flex-row for Desktop, Col for Mobile */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
        
        {/* LEFT: HEADING (Massive & Bold) */}
        <div className="flex-shrink-0">
          <div className="overflow-hidden py-2">
            <h2 className="reveal-up font-[Gotu] text-3xl md:text-5xl lg:text-6xl font-[1000] text-[#112250] leading-[0.85] tracking-tighter uppercase">
              {title}
            </h2>
          </div>
        </div>

        {/* MIDDLE: DESIGNER LINE (Visible only on Desktop) */}
        <div className="hidden lg:block flex-grow mb-8">
          <div className="connector-line h-[2px] w-full bg-gradient-to-r from-[#112250] to-[#E46B2E]/20" />
        </div>

        {/* RIGHT: SUBTITLE & TAG (Clean & Minimal) */}
        <div className="md:w-1/3 md:pb-6">
          <div className="overflow-hidden">
            {subtitle && (
              <p className="reveal-up font-[Martel] text-sm md:text-lg font-black uppercase tracking-[0.4em] text-[#E46B2E] mb-4 leading-tight">
                {subtitle}
              </p>
            )}
            <div className="reveal-up flex items-center gap-3">
              <span className="h-px w-10 bg-[#112250]/30" />
              <span className="text-[10px] font-bold text-[#112250]/40 uppercase tracking-widest whitespace-nowrap">
                Public Leader • Vision 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM PROGRESS BAR (Seamless) */}
      <div className="mt-10 w-full h-[1px] bg-gray-100 relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "30%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-0 top-0 h-full bg-[#E46B2E]"
        />
      </div>
    </div>
  );
};

export default SectionHeading;