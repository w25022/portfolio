"use client";

import SectionTitle from "@/components/SectionTitle";
import StrengthCard from "@/components/StrengthCard";
import { useLanguage } from "@/components/LanguageProvider";
import { strengths } from "@/data/strengths";

export default function StrengthsPage() {
  const { language } = useLanguage();

  return (
    <div className="container">
      <div className="page-shell">
        <SectionTitle
          title={language === "ja" ? "強み" : "Strengths"}
          subtitle={
            language === "ja"
              ? "開発者としての成長を支えている資質です。"
              : "The qualities that support my growth as a developer."
          }
        />
        <div className="grid grid-3">
          {strengths.map((strength) => (
            <StrengthCard key={strength.titleEn} strength={strength} />
          ))}
        </div>
      </div>
    </div>
  );
}
