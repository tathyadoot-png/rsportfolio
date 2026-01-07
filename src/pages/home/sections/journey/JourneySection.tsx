import { motion } from "framer-motion";
import hi from "@/locales/hi";
import en from "@/locales/en";
import type { Lang } from "@/layouts/MainLayout";

interface JourneySectionProps {
  lang: Lang;
}

const JourneySection = ({ lang }: JourneySectionProps) => {
  const isHi = lang === "hi";

  const timeline = [
    {
      year: "1998",
      hi: "भारतीय जनता पार्टी की सदस्यता ग्रहण की एवं प्रदेश कार्यसमिति सदस्य बने।",
      en: "Joined the Bharatiya Janata Party and became a member of the State Executive Committee.",
    },
    {
      year: "2003",
      hi: "रीवा विधानसभा से रिकॉर्ड मतों से जीतकर पहली बार विधायक निर्वाचित हुए।",
      en: "Elected as MLA for the first time from Rewa constituency with a record margin.",
    },
    {
      year: "2004–05",
      hi: "उमाश्री भारती सरकार में राज्यमंत्री (स्वतंत्र प्रभार), आवास एवं पर्यावरण।",
      en: "Served as Minister of State (Independent Charge) for Housing and Environment in Uma Bharti government.",
    },
    {
      year: "2008",
      hi: "दूसरी बार विधायक निर्वाचित; वन, खनिज, विधि एवं विधायी कार्य मंत्री।",
      en: "Re-elected as MLA and appointed Minister for Forests, Minerals, Law & Legislative Affairs.",
    },
    {
      year: "2012",
      hi: "शिवराज मंत्रिमंडल में पदोन्नत होकर कैबिनेट मंत्री बनाए गए।",
      en: "Promoted as Cabinet Minister in the Shivraj Singh Chouhan cabinet.",
    },
    {
      year: "2013",
      hi: "तीसरी बार विधायक; ऊर्जा, नवकरणीय ऊर्जा, उद्योग एवं जनसंपर्क मंत्री।",
      en: "Elected for the third term and handled portfolios including Energy, Renewable Energy, Industry & Public Relations.",
    },
    {
      year: "2018",
      hi: "चौथी बार विधायक निर्वाचित; वर्तमान में रीवा विधानसभा का प्रतिनिधित्व।",
      en: "Elected for the fourth term and currently representing Rewa Assembly constituency.",
    },
  ];

  return (
    <section className="bg-bg-soft py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            {isHi ? "राजनीतिक यात्रा" : "Political Journey"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text">
            {isHi ? "सेवा और नेतृत्व की यात्रा" : "A Journey of Service & Leadership"}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-border pl-6 space-y-10">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative"
            >
              {/* Dot */}
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-primary" />

              {/* Card */}
              <div className="rounded-2xl border border-border bg-bg p-6 shadow-soft">
                <p className="text-sm font-bold text-primary">{item.year}</p>
                <p className="mt-2 text-base sm:text-lg text-text leading-relaxed">
                  {isHi ? item.hi : item.en}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
