import { motion } from "framer-motion";
import type { Lang } from "@/layouts/MainLayout";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

interface JourneySectionProps {
  lang: Lang;
}

const JourneySection = ({ lang }: JourneySectionProps) => {
  const isHi = lang === "hi";

  const timeline = [
    {
      year: "1998",
      title: isHi ? "शुरुआत" : "The Beginning",
      desc: isHi ? "भारतीय जनता पार्टी की सदस्यता ग्रहण की एवं प्रदेश कार्यसमिति सदस्य बने।" : "Joined the BJP and became a member of the State Executive Committee.",
      color: "#112250",
    },
    {
      year: "2003",
      title: isHi ? "ऐतिहासिक जीत" : "Record Victory",
      desc: isHi ? "रीवा विधानसभा से रिकॉर्ड मतों से जीतकर पहली बार विधायक निर्वाचित हुए।" : "Elected as MLA for the first time from Rewa with a record margin.",
      color: "#E46B2E",
    },
    {
      year: "2008",
      title: isHi ? "कैबिनेट में विस्तार" : "Cabinet Expansion",
      desc: isHi ? "दूसरी बार विधायक निर्वाचित; वन, खनिज, विधि एवं विधायी कार्य मंत्री।" : "Re-elected as MLA and appointed Minister for Forests and Minerals.",
      color: "#112250",
    },
    {
      year: "2013",
      title: isHi ? "विकास का दौर" : "Era of Development",
      desc: isHi ? "तीसरी बार विधायक; ऊर्जा, उद्योग एवं जनसंपर्क मंत्री।" : "Third term MLA; handled Energy, Industry & PR portfolios.",
      color: "#E46B2E",
    },
    {
      year: "2023",
      title: isHi ? "उप मुख्यमंत्री" : "Deputy CM",
      desc: isHi ? "उप मुख्यमंत्री, मध्य प्रदेश शासन। लोक स्वास्थ्य एवं चिकित्सा शिक्षा मंत्री।" : "Deputy Chief Minister, Govt of MP. Minister for Health & Medical Education.",
      color: "#112250",
    },
  ];

  return (
    <section className="relative w-full bg-[#f8f9fa] py-24">
      <div className="mx-auto  px-4 ">
        
        {/* Section Heading */}
        <div className="w-full pt-20 pb-10 bg-gradient-to-b from-gray-50 to-white">
          <SectionHeading
            subtitle={isHi ? "समय रेखा" : "Timeline"}
            title={isHi ? "राजनीतिक यात्रा का सफर" : "The Political Journey"}
          />
        </div>

        {/* STICKY STACK CONTAINER */}
        <div className="relative flex flex-col gap-0">
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className="sticky w-full"
              style={{
                top: `${150 + index * 40}px`, // Stacking offset
                paddingBottom: "100px", // Scroll space
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ 
                   backgroundColor: item.color,
                   boxShadow: "0px -10px 40px rgba(0,0,0,0.15)" 
                }}
                className="relative overflow-hidden rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-16 min-h-[400px] flex flex-col justify-between group border border-white/10"
              >
                {/* Background Number Watermark */}
                <div className="absolute -right-10 -top-10 text-[15rem] font-black text-white/5 leading-none pointer-events-none group-hover:text-white/10 transition-all duration-700">
                  {item.year.slice(-2)}
                </div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                  <div className="space-y-4 max-w-2xl">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-bold tracking-widest uppercase">
                      Year {item.year}
                    </div>
                    <h3 className="text-4xl md:text-6xl font-[Gotu] font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-2xl text-white/80 font-[Martel] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="hidden md:flex h-32 w-32 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-xl">
                    <span className="text-white font-bold text-xl">{item.year}</span>
                  </div>
                </div>

                {/* Bottom Line decorative */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent mt-12"></div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Finishing bottom space to allow last card to be fully seen */}
      <div className="h-[40vh]" />
    </section>
  );
};

export default JourneySection;