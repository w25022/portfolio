import Image from "next/image";
import type { Hobby } from "@/types";

type HobbyCardProps = {
  hobby: Hobby;
  language: "en" | "ja";
};

export default function HobbyCard({ hobby, language }: HobbyCardProps) {
  const title = language === "ja" ? hobby.titleJa : hobby.titleEn;
  const description =
    language === "ja" ? hobby.descriptionJa : hobby.descriptionEn;

  return (
    <article className="card hobby-card">
      <Image
        src={hobby.image}
        alt={title}
        width={320}
        height={240}
        className="hobby-image"
      />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
