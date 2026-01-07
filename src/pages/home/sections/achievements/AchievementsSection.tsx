import { motion } from "framer-motion";
import type { Lang } from "@/layouts/MainLayout";

interface AchievementsSectionProps {
  lang: Lang;
}

const AchievementsSection = ({ lang }: AchievementsSectionProps) => {
  const isHi = lang === "hi";

  const achievements = [
    {
      titleHi: "एशिया का सबसे बड़ा सोलर पावर प्लांट – रीवा",
      titleEn: "Asia’s Largest Solar Power Plant – Rewa",
      descHi:
        "नवकरणीय ऊर्जा मंत्री रहते हुए रीवा में एशिया के सबसे बड़े सोलर पावर प्लांट की स्थापना की गई, जिसका लोकार्पण माननीय प्रधानमंत्री श्री नरेन्द्र मोदी जी द्वारा किया गया।",
      descEn:
        "During his tenure as Renewable Energy Minister, Asia’s largest solar power plant was established in Rewa and inaugurated by Hon’ble Prime Minister Shri Narendra Modi.",
    },
    {
      titleHi: "व्हाइट टाइगर जू – मुकुन्दपुर",
      titleEn: "White Tiger Zoo – Mukundpur",
      descHi:
        "46 वर्षों बाद विन्ध्य क्षेत्र में विलुप्त हो चुके व्हाइट टाइगर को पुनः अपनी धरती पर लाने हेतु मुकुन्दपुर में व्हाइट टाइगर जू की स्थापना की गई, जो आज देश-विदेश के पर्यटकों का प्रमुख आकर्षण है।",
      descEn:
        "After 46 years, the extinct White Tiger was reintroduced to the Vindhya region through the establishment of the White Tiger Zoo at Mukundpur, now a major attraction for national and international tourists.",
    },
  ];

  return (
    <section className="bg-bg-soft py-20">
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
            {isHi ? "विशेष उपलब्धियाँ" : "Landmark Achievements"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text">
            {isHi
              ? "प्रदेश को राष्ट्रीय पहचान दिलाने वाले कार्य"
              : "Milestones that Gave National Recognition"}
          </h2>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-border bg-bg p-10 shadow-soft"
            >
              <h3 className="text-xl sm:text-2xl font-extrabold text-secondary">
                {isHi ? item.titleHi : item.titleEn}
              </h3>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted">
                {isHi ? item.descHi : item.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
