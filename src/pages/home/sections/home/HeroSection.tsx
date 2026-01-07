import hi from "@/locales/hi";
import en from "@/locales/en";
import type { Lang } from "@/layouts/MainLayout";

const HeroSection = ({ lang }: { lang: Lang }) => {
  const t = lang === "hi" ? hi : en;

  return (
    <div className="pt-32 text-center">
      <h1 className="text-4xl font-extrabold text-text">
        {lang === "hi" ? "राजेन्द्र शुक्ल" : "Rajendra Shukla"}
      </h1>

      <p className="mt-4 text-muted">
        {lang === "hi"
          ? "जनसेवा ही हमारा संकल्प"
          : "Committed to Public Service"}
      </p>
    </div>
  );
};

export default HeroSection;
