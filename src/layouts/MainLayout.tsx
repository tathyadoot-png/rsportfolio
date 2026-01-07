import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export type Lang = "hi" | "en";

const getDefaultLang = (): Lang => {
  if (typeof window === "undefined") return "hi";

  const savedLang = localStorage.getItem("lang");
  return savedLang === "en" ? "en" : "hi"; // 👈 default ALWAYS Hindi
};

const MainLayout = () => {
  const [lang, setLang] = useState<Lang>(getDefaultLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main className="overflow-x-hidden">
        <Outlet context={{ lang }} />
      </main>
      <Footer lang={lang} />
    </>
  );
};

export default MainLayout;
