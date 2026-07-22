"use client";

import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { useLanguage } from "@/components/LanguageProvider";
import { projects } from "@/data/projects";

export default function WorkPage() {
  const { language } = useLanguage();

  return (
    <div className="container">
      <div className="page-shell">
        <SectionTitle
          title={language === "ja" ? "実績" : "Work"}
          subtitle={
            language === "ja"
              ? "フロントエンド開発者としての成長を反映した代表的なプロジェクトです。"
              : "Selected projects that reflect my growth as a frontend developer."
          }
        />
        <div className="grid grid-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
