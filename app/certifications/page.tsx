"use client";

import SectionTitle from "@/components/SectionTitle";
import { useLanguage } from "@/components/LanguageProvider";
import { certifications } from "@/data/certifications";
import styles from "./page.module.css";

function getCertificationIconClass(type: string) {
  switch (type) {
    case "java":
      return styles.iconJava;
    case "computer":
      return styles.iconComputer;
    case "globe":
      return styles.iconGlobe;
    case "network":
      return styles.iconNetwork;
    case "shield":
      return styles.iconShield;
    case "japanese":
      return styles.iconJapanese;
    case "english":
      return styles.iconEnglish;
    default:
      return styles.iconDefault;
  }
}

function CertificationIcon({ type }: { type: string }) {
  if (type === "java") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 18h8a4 4 0 0 0 0-8H8v8Z" />
        <path d="M8 10V7c0-1.7 1.2-2.4 2.2-3.1" />
        <path d="M12 10V7c0-1.7 1.2-2.4 2.2-3.1" />
        <path d="M18 12h1a2 2 0 0 1 0 4h-1" />
        <path d="M6 21h12" />
      </svg>
    );
  }

  if (type === "computer") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="16" height="11" rx="2" />
        <path d="M9 20h6" />
        <path d="M12 16v4" />
      </svg>
    );
  }

  if (type === "globe") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
    );
  }

  if (type === "network") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="6" height="6" rx="1.5" />
        <rect x="14" y="4" width="6" height="6" rx="1.5" />
        <rect x="9" y="14" width="6" height="6" rx="1.5" />
        <path d="M10 7h4" />
        <path d="m8.5 10 2.5 4" />
        <path d="m15.5 10-2.5 4" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 5 6v5c0 4.6 2.9 8.4 7 10 4.1-1.6 7-5.4 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }

  if (type === "japanese") {
    return <span>日</span>;
  }

  if (type === "english") {
    return <span>A</span>;
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 8 9-4 9 4-9 4-9-4Z" />
      <path d="M7 11v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5" />
      <path d="M21 8v6" />
    </svg>
  );
}

export default function CertificationsPage() {
  const { language } = useLanguage();
  const itCerts = certifications.filter(
    (c) => c.category === "IT Certifications",
  );
  const langCerts = certifications.filter(
    (c) => c.category === "Language Certifications",
  );
  const education = certifications.filter((c) => c.category === "Education");

  return (
    <div className="container">
      <div className="page-shell">
        <SectionTitle
          title={
            language === "ja" ? "資格・実績" : "Certifications & Qualifications"
          }
          subtitle={
            language === "ja"
              ? "専門性を裏付ける資格や実績です。"
              : "Professional credentials and achievements that validate my expertise."
          }
        />

        {itCerts.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.category}>
              {language === "ja" ? "IT資格" : "IT Certifications"}
            </h3>
            <div className={styles.grid}>
              {itCerts.map((cert) => (
                <div
                  key={`${cert.title}-${cert.year}`}
                  className={styles.certCard}
                >
                  <div
                    className={`${styles.icon} ${getCertificationIconClass(cert.icon)}`}
                  >
                    <CertificationIcon type={cert.icon} />
                  </div>
                  <h4>{cert.title}</h4>
                  <p className={styles.year}>{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {langCerts.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.category}>
              {language === "ja" ? "語学資格" : "Language Certifications"}
            </h3>
            <div className={styles.grid}>
              {langCerts.map((cert) => (
                <div
                  key={`${cert.title}-${cert.year}`}
                  className={styles.certCard}
                >
                  <div
                    className={`${styles.icon} ${getCertificationIconClass(cert.icon)}`}
                  >
                    <CertificationIcon type={cert.icon} />
                  </div>
                  <h4>{cert.title}</h4>
                  <p className={styles.year}>{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {education.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.category}>
              {language === "ja" ? "学歴・教育" : "Education"}
            </h3>
            <div className={styles.grid}>
              {education.map((cert) => (
                <div
                  key={`${cert.title}-${cert.year}`}
                  className={styles.certCard}
                >
                  <div
                    className={`${styles.icon} ${getCertificationIconClass(cert.icon)}`}
                  >
                    <CertificationIcon type={cert.icon} />
                  </div>
                  <h4>{cert.title}</h4>
                  <p className={styles.year}>{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
