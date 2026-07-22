"use client";

import SectionTitle from "@/components/SectionTitle";
import HobbyCard from "@/components/HobbyCard";
import { useLanguage } from "@/components/LanguageProvider";
import { hobbies } from "@/data/hobbies";

export default function HobbyPage() {
  const { language } = useLanguage();

  return (
    <div className="container">
      <div className="page-shell">
        <SectionTitle
          title={language === "ja" ? "趣味" : "Hobbies"}
          subtitle={
            language === "ja"
              ? "創造性とバランスを与えてくれる興味です。"
              : "Interests that inspire creativity and balance in my life."
          }
        />
        <div className="grid grid-2">
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.titleEn} hobby={hobby} language={language} />
          ))}
        </div>
      </div>
    </div>
  );
}
