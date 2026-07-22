"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const links = [
  { href: "/", labelEn: "Home", labelJa: "ホーム" },
  { href: "/about", labelEn: "About", labelJa: "自己紹介" },
  { href: "/profile", labelEn: "Profile", labelJa: "プロフィール" },
  { href: "/work", labelEn: "Work", labelJa: "実績" },
  { href: "/skill", labelEn: "Skills", labelJa: "スキル" },
  { href: "/strengths", labelEn: "Strengths", labelJa: "強み" },
  { href: "/certifications", labelEn: "Certifications", labelJa: "資格" },
  { href: "/hobby", labelEn: "Hobbies", labelJa: "趣味" },
  { href: "/contact", labelEn: "Contact", labelJa: "お問い合わせ" },
];

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand">
          LINN SAT AUNG
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {language === "ja" ? link.labelJa : link.labelEn}
            </Link>
          ))}
          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLanguage(language === "ja" ? "en" : "ja")}
          >
            {language === "ja" ? "EN" : "JP"}
          </button>
        </nav>
      </div>
    </header>
  );
}
