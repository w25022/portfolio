"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();

  return (
    <article className="card project-card">
      <img src={project.image} alt={project.title} />
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <Link href={project.link} className="text-link">
          {language === "ja" ? "詳しく見る →" : "Learn more →"}
        </Link>
      </div>
    </article>
  );
}
