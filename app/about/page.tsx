"use client";

import SectionTitle from "@/components/SectionTitle";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="container">
      <div className="page-shell">
        <SectionTitle
          title={language === "ja" ? "自己紹介" : "About Me"}
          subtitle={
            language === "ja"
              ? "背景・モチベーション・取り組み方についての簡単な紹介。"
              : "A brief introduction to my background, motivation, and approach."
          }
        />
        <p>
          {language === "ja" ? (
            <>
              ネットワークインフラの背景を持つキャリアチェンジ中の開発者です。ミャンマーで8年間、ネットワークインフラエンジニアとして複数プロジェクトを牽引し、問題解決力とプロジェクトマネジメント力を培ってきました。
            </>
          ) : (
            <>
              I am a career-transitioning developer with a background in
              networking infrastructure. For 8 years in Myanmar, I worked as a
              Networking Infrastructure Engineer, leading multiple projects and
              developing strong problem-solving and project management skills.
            </>
          )}
        </p>
        <p>
          {language === "ja" ? (
            <>
              現在は日本・沖縄に在住し、沖縄ビジネス・外国語専門学校でWebプログラミングを学んでいます。技術的な基盤と計画的なプロジェクト経験を活かし、モダンで拡張性のある使いやすいWebアプリを作ることに情熱を注いでいます。
            </>
          ) : (
            <>
              Now based in Okinawa, Japan, I am pursuing Web Programming at
              Okinawa Business and Foreign Language Vocational School. I am
              passionate about leveraging my technical background and
              disciplined project experience to build modern, scalable, and
              user-friendly web applications.
            </>
          )}
        </p>
        <p>
          {language === "ja" ? (
            <>
              目標は、ビジネス要件をわかりやすいコードと直感的なユーザー体験に変えられる、実力のあるフロントエンド開発者になることです。
            </>
          ) : (
            <>
              My goal is to become a skilled frontend developer who can
              translate business requirements into clean code and intuitive user
              experiences.
            </>
          )}
        </p>
      </div>
    </div>
  );
}
