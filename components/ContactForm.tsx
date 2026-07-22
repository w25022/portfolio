"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function ContactForm() {
  const { language } = useLanguage();

  return (
    <form
      className="contact-form"
      action="mailto:w25022@osfl.ac.jp"
      method="post"
      encType="text/plain"
    >
      <label>
        {language === "ja" ? "お名前" : "Name"}
        <input
          type="text"
          name="name"
          placeholder={language === "ja" ? "お名前を入力" : "Your name"}
          required
        />
      </label>
      <label>
        {language === "ja" ? "メールアドレス" : "Email"}
        <input
          type="email"
          name="email"
          placeholder={language === "ja" ? "メールアドレス" : "Your email"}
          required
        />
      </label>
      <label>
        {language === "ja" ? "メッセージ" : "Message"}
        <textarea
          name="message"
          rows={5}
          placeholder={
            language === "ja" ? "メッセージを入力" : "Write your message"
          }
          required
        />
      </label>
      <button type="submit" className="button button-primary">
        {language === "ja" ? "送信する" : "Send Message"}
      </button>
    </form>
  );
}
