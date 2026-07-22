"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();
  const title = language === "ja" ? project.titleJa : project.titleEn;
  const description =
    language === "ja" ? project.descriptionJa : project.descriptionEn;

  return (
    <article className="card project-card">
      <Image
        src={project.image}
        alt={title}
        width={420}
        height={250}
        className="project-image"
      />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
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
