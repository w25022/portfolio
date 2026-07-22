import type { Strength } from "@/types";

type StrengthCardProps = {
  strength: Strength;
};

function StrengthIcon({ type }: { type: string }) {
  switch (type) {
    case "leadership":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3 4 7v5c0 4.5 2.8 8.2 8 9 5.2-.8 8-4.5 8-9V7l-8-4Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "problem-solving":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 4h6" />
          <path d="M7 8h10" />
          <path d="M6 12h12" />
          <path d="M8 16h8" />
          <path d="M10 20h4" />
        </svg>
      );
    case "learning":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7 12 3l8 4-8 4-8-4Z" />
          <path d="M7 10v5c0 2 2.2 3.5 5 3.5s5-1.5 5-3.5v-5" />
          <path d="M4 7v6" />
          <path d="M20 7v6" />
        </svg>
      );
    default:
      return <span>{type}</span>;
  }
}

export default function StrengthCard({ strength }: StrengthCardProps) {
  const iconClass = strength.icon
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return (
    <article className="card strength-card">
      <div className={`skill-icon skill-icon-${iconClass}`}>
        <StrengthIcon type={strength.icon} />
      </div>
      <h3>{strength.title}</h3>
      <p>{strength.description}</p>
    </article>
  );
}
