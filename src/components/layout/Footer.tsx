import hi from "@/locales/hi";
import en from "@/locales/en";
import type { Lang } from "@/layouts/MainLayout";

const Footer = ({ lang }: { lang: Lang }) => {
  const t = lang === "hi" ? hi : en;

  return (
    <footer className="border-t border-border bg-bg py-6 text-center">
      <p className="text-sm text-muted">
        © {new Date().getFullYear()} Rajendra Shukla —{" "}
        {lang === "hi" ? "सभी अधिकार सुरक्षित" : "All rights reserved"}
      </p>
    </footer>
  );
};

export default Footer;
