"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { language, setLanguage } = useLanguage();

  return (
    <section className="hero-card">
      <div>
        <p className="eyebrow">
          {language === "ja"
            ? "ネットワークエンジニアからWeb開発へ"
            : "Networking Engineer turned Web Developer"}
        </p>
        <h1>
          {language === "ja"
            ? "こんにちは、リン・サット・アウンです"
            : "Hi, I&apos;m Linn Sat Aung"}
        </h1>
        <p className="hero-copy">
          {language === "ja" ? (
            <>
              8年間のインフラエンジニア経験を持ち、現在はモダンなWebアプリケーションを作っています。清潔で保守しやすいコード、レスポンシブデザイン、複雑な技術を使いやすい形に変えることに重点を置いています。
            </>
          ) : (
            <>
              With 8 years of infrastructure engineering experience, I&apos;m
              now building modern web applications. I focus on clean code,
              responsive design, and turning technical complexity into
              user-friendly solutions.
            </>
          )}
        </p>
        <div className="button-row">
          <Link href="/work" className="button button-primary">
            {language === "ja" ? "実績を見る" : "View My Work"}
          </Link>
          <Link href="/contact" className="button button-secondary">
            {language === "ja" ? "連絡する" : "Let&apos;s Connect"}
          </Link>
        </div>
      </div>
      <div className="hero-visual">
        <Image
          src="/images/my photo with shark.jpeg"
          alt="Linn Sat Aung"
          width={420}
          height={420}
          className="hero-image"
        />
      </div>
    </section>
  );
}
