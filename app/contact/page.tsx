"use client";

import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { language } = useLanguage();

  return (
    <div className="container">
      <div className="page-shell">
        <SectionTitle
          title={language === "ja" ? "お問い合わせ" : "Contact"}
          subtitle={
            language === "ja"
              ? "コラボレーションや機会、新しいプロジェクトについてお話ししたいです。"
              : "I would love to hear from you for collaborations, opportunities, or new projects."
          }
        />
        <ContactForm />
      </div>
    </div>
  );
}
