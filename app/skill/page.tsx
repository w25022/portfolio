"use client";

import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import { useLanguage } from "@/components/LanguageProvider";
import { skills } from "@/data/skills";

export default function SkillPage() {
  const { language } = useLanguage();

  return (
    <div className="container">
      <div className="page-shell">
        <SectionTitle
          title={language === "ja" ? "スキル" : "Skills"}
          subtitle={
            language === "ja"
              ? "プロジェクトで磨いている中核スキルです。"
              : "Core skills I am building and applying in my projects."
          }
        />
        <div className="grid grid-2">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
