"use client";

import { LocalizedLink } from "@/components/i18n/LocalizedLink";
import { getLocale, type Locale } from "@/lib/i18n/config";
import { usePathname } from "next/navigation";

const copy: Record<Locale, { title: string; body: string; home: string }> = {
  zh: {
    title: "找不到這個頁面",
    body: "這個網址沒有對應的 TRASH 官方頁面。",
    home: "回到首頁",
  },
  en: {
    title: "Page not found",
    body: "This address does not match a page on the TRASH official site.",
    home: "Back to home",
  },
  ja: {
    title: "ページが見つかりません",
    body: "このURLに対応するTRASH公式ページはありません。",
    home: "ホームへ戻る",
  },
  ko: {
    title: "페이지를 찾을 수 없습니다",
    body: "이 주소에 해당하는 TRASH 공식 페이지가 없습니다.",
    home: "홈으로 돌아가기",
  },
};

export function NotFoundContent() {
  const pathname = usePathname() || "/";
  const locale = getLocale(pathname.split("/")[1]);
  const text = copy[locale];

  return (
    <div className="page-shell">
      <p className="kicker">404</p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl font-black uppercase leading-none text-white md:text-7xl">{text.title}</h1>
      <div className="metal-rule mt-6 max-w-44" />
      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">{text.body}</p>
      <LocalizedLink href="/" locale={locale} className="btn-primary mt-8">
        {text.home}
      </LocalizedLink>
    </div>
  );
}
