import { motion } from "framer-motion";
import type { Lang } from "@/layouts/MainLayout";

interface LeadershipSectionProps {
  lang: Lang;
}

const LeadershipSection = ({ lang }: LeadershipSectionProps) => {
  const isHi = lang === "hi";

  const points = [
    {
      hi: "पिछले 15 वर्षों से विन्ध्य क्षेत्र में होने वाले सभी लोकसभा एवं विधानसभा चुनावों के प्रभारी के रूप में कार्य किया।",
      en: "Served as the in-charge for all Lok Sabha and Assembly elections in the Vindhya region for the past 15 years.",
    },
    {
      hi: "कुशल चुनाव प्रबंधन के माध्यम से लगभग सभी उपचुनावों में भारतीय जनता पार्टी को प्रचंड बहुमत से विजय दिलाई।",
      en: "Through efficient election management, ensured BJP’s decisive victories in almost all by-elections.",
    },
    {
      hi: "वर्ष 2018 के विधानसभा चुनावों में सत्ता विरोधी लहर के बावजूद विन्ध्य क्षेत्र की 30 में से 24 सीटों पर जीत दर्ज कराई।",
      en: "In the 2018 Assembly elections, despite strong anti-incumbency, secured victory in 24 out of 30 seats in the Vindhya region.",
    },
    {
      hi: "विन्ध्य क्षेत्र के सभी जिलों में प्रभारी मंत्री रहते हुए संगठन को मजबूत आधार प्रदान किया।",
      en: "Strengthened the party organization across all districts of the Vindhya region while serving as the in-charge minister.",
    },
  ];

  return (
    <section className="bg-bg py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            {isHi ? "नेतृत्व क्षमता" : "Leadership Strength"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text">
            {isHi
              ? "संगठन, रणनीति और विजय का अनुभव"
              : "Experience in Organization, Strategy & Victory"}
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-3xl border border-border bg-bg-soft p-8 shadow-soft"
            >
              <p className="text-base sm:text-lg leading-relaxed text-text">
                {isHi ? item.hi : item.en}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
