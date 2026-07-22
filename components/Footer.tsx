"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <p>© 2026 Linn Sat Aung. Crafted with Next.js and TypeScript.</p>
        <p>
          {language === "ja"
            ? "常に学び、常に作り続けています。"
            : "Always learning, always building."}
        </p>
      </div>
    </footer>
  );
}
