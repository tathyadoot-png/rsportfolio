import { motion } from "framer-motion";
import type { Lang } from "@/layouts/MainLayout";

interface ContributionsSectionProps {
  lang: Lang;
}

const ContributionsSection = ({ lang }: ContributionsSectionProps) => {
  const isHi = lang === "hi";

  const contributions = [
    {
      titleHi: "अटल ज्योति योजना",
      titleEn: "Atal Jyoti Yojana",
      descHi:
        "गुजरात की ग्राम ज्योति योजना से प्रेरित होकर मध्यप्रदेश में अटल ज्योति योजना का शुभारंभ किया गया, जिससे प्रदेश में 24 घंटे निर्बाध विद्युत आपूर्ति सुनिश्चित हुई।",
      descEn:
        "Inspired by Gujarat’s Gram Jyoti Yojana, Atal Jyoti Yojana was launched in Madhya Pradesh to ensure 24×7 uninterrupted electricity supply.",
    },
    {
      titleHi: "ऊर्जा एवं नवकरणीय ऊर्जा सुधार",
      titleEn: "Energy & Renewable Reforms",
      descHi:
        "ऊर्जा एवं नवकरणीय ऊर्जा मंत्री के रूप में प्रदेश में विद्युत संरचना को सुदृढ़ किया गया तथा नवीकरणीय ऊर्जा परियोजनाओं को गति प्रदान की गई।",
      descEn:
        "As Energy and Renewable Energy Minister, he strengthened the power infrastructure and accelerated renewable energy initiatives across the state.",
    },
    {
      titleHi: "औद्योगिक एवं जनसंपर्क पहल",
      titleEn: "Industry & Public Relations Initiatives",
      descHi:
        "उद्योग एवं जनसंपर्क मंत्री रहते हुए औद्योगिक विकास, निवेश प्रोत्साहन और जनसंपर्क को नई दिशा दी।",
      descEn:
        "During his tenure as Industry and Public Relations Minister, he promoted industrial growth, investment opportunities, and transparent public communication.",
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
            {isHi ? "प्रमुख कार्य" : "Major Contributions"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text">
            {isHi
              ? "विकास और सेवा की ठोस पहल"
              : "Concrete Initiatives for Development & Service"}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contributions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-3xl border border-border bg-bg-soft p-8 shadow-soft"
            >
              <h3 className="text-lg font-extrabold text-secondary">
                {isHi ? item.titleHi : item.titleEn}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-muted">
                {isHi ? item.descHi : item.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContributionsSection;
