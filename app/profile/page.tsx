"use client";

import SectionTitle from "@/components/SectionTitle";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProfilePage() {
  const { language } = useLanguage();

  return (
    <div className="container">
      <div className="page-shell profile-page">
        <SectionTitle
          title={language === "ja" ? "プロフィール" : "Profile"}
          subtitle={
            language === "ja"
              ? "自分のことと今取り組んでいることをまとめたもの。"
              : "A snapshot of who I am and what I am working toward."
          }
        />
        <div className="profile-card">
          <img src="/images/my photo with suit 2.JPG" alt="Linn Sat Aung" />
          <div>
            <h3>Linn Sat Aung (リンサットアウン)</h3>
            <p>
              {language === "ja"
                ? "33歳 | 学習中のWeb開発者 | ミャンマー国籍"
                : "33 | Web Developer in Training | Myanmar National"}
            </p>
            <p>
              {language === "ja" ? (
                <>
                  8年間のネットワークインフラエンジニア経験を持つ人物です。沖縄ビジネス・外国語専門学校でWebプログラミングを学びながら、インフラ分野からフロントエンド開発へ移行するための学習を続けています。沖縄を拠点に、清潔でレスポンシブなWeb体験を作ることに情熱を注いでいます。
                </>
              ) : (
                <>
                  Networking Infrastructure Engineer with 8 years of experience.
                  Currently pursuing Web Programming at Okinawa Business and
                  Foreign Language Vocational School. Based in Okinawa, Japan.
                  Passionate about building clean, responsive web experiences
                  and making the transition from infrastructure to frontend
                  development.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
