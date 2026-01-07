import { Globe } from "lucide-react";
import hi from "@/locales/hi";
import en from "@/locales/en";
import type { Lang } from "@/layouts/MainLayout";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const Navbar = ({ lang, setLang }: NavbarProps) => {
  const t = lang === "hi" ? hi : en;

  // ✅ FINAL NAV ITEMS (ONLY EXISTING SECTIONS)
  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: lang === "hi" ? "राजनीतिक यात्रा" : "Journey", href: "#journey" },
    {
      label: lang === "hi" ? "प्रमुख कार्य" : "Contributions",
      href: "#contributions",
    },
    { label: t.nav.achievements, href: "#achievements" },
    {
      label: lang === "hi" ? "नेतृत्व" : "Leadership",
      href: "#leadership",
    },
    { label: t.nav.media, href: "#media" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-bg border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        {/* Left */}
        <div className="font-bold text-text">
          {lang === "hi" ? "राजेन्द्र शुक्ल" : "Rajendra Shukla"}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "hi" ? "en" : "hi")}
            className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-primary"
          >
            <Globe className="h-4 w-4" />
            {lang === "hi" ? "English" : "हिंदी"}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white"
          >
            {t.cta.contact}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
