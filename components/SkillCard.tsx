import type { Skill } from "@/types";

type SkillCardProps = {
  skill: Skill;
};

export default function SkillCard({ skill }: SkillCardProps) {
  const iconClass = skill.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return (
    <article className="card skill-card">
      <div className={`skill-icon skill-icon-${iconClass}`}>
        <span>{skill.icon}</span>
      </div>
      <h3>{skill.name}</h3>
      <p>{skill.level}</p>
    </article>
  );
}
