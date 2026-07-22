"use client";

import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { useLanguage } from "@/components/LanguageProvider";
import { projects } from "@/data/projects";

export default function HomePage() {
  const { language } = useLanguage();
  const techStack = [
    { name: "Next.js", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "⌨️" },
    { name: "CSS3", icon: "🎨" },
  ];

  return (
    <div className="container">
      <Hero />

      <section className="intro-grid">
        <div className="intro-card">
          <h2>{language === "ja" ? "自己紹介" : "About Me"}</h2>
          <p>
            {language === "ja" ? (
              <>
                学生であり、洗練されたフロントエンド体験を作ることを目指すWeb開発者です。アイデアを、レスポンシブでアクセシブル、そして意味のある製品に変えることに喜びを感じています。
              </>
            ) : (
              <>
                I am a student and aspiring web developer focused on building
                elegant frontend experiences. I enjoy turning ideas into
                responsive, accessible, and meaningful web products.
              </>
            )}
          </p>
        </div>
        <div className="intro-card">
          <h2>{language === "ja" ? "私が提供できること" : "What I Bring"}</h2>
          <ul>
            <li>
              {language === "ja"
                ? "きれいでレスポンシブなUI開発"
                : "Clean and responsive UI development"}
            </li>
            <li>
              {language === "ja"
                ? "細部へのこだわり"
                : "Strong attention to detail"}
            </li>
            <li>
              {language === "ja"
                ? "継続的な学習と改善"
                : "Continuous learning and improvement"}
            </li>
          </ul>
        </div>
      </section>

      <section className="tech-stack-section">
        <h2>{language === "ja" ? "使用技術" : "Built With"}</h2>
        <p className="tech-subtitle">
          {language === "ja"
            ? "このポートフォリオは最新のWeb技術を使って作成されています"
            : "This portfolio was created using modern web technologies"}
        </p>
        <div className="tech-grid">
          {techStack.map((tech) => (
            <div key={tech.name} className="tech-badge">
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      <SectionTitle
        title={language === "ja" ? "代表プロジェクト" : "Featured Projects"}
        subtitle={
          language === "ja"
            ? "これまでに作成したWeb体験と、今後さらに磨いていくスキルの一部です。"
            : "A snapshot of the web experiences I have built and the skills I continue to strengthen."
        }
      />
      <div className="grid grid-3">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
