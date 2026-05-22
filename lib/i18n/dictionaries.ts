import type { Locale } from "@/lib/i18n/config";

type Dictionary = {
  nav: {
    about: string;
    members: string;
    history: string;
    music: string;
    live: string;
    news: string;
    media: string;
    pressKit: string;
    contact: string;
    press: string;
  };
  footer: {
    officialLinks: string;
  };
  seo: {
    title: string;
    titleTemplate: string;
    description: string;
  };
};

const zh: Dictionary = {
  nav: {
    about: "關於",
    members: "成員",
    history: "歷史",
    music: "作品",
    live: "演出",
    news: "消息",
    media: "影音",
    pressKit: "媒體",
    contact: "聯絡",
    press: "媒體資料",
  },
  footer: {
    officialLinks: "官方連結",
  },
  seo: {
    title: "TRASH 官方網站",
    titleTemplate: "%s | TRASH Official",
    description: "TRASH 台灣搖滾樂團官方網站與資料庫，收錄音樂作品、成員、歷史、現場里程碑、新聞、影像與媒體資料。",
  },
};

const en: Dictionary = {
  ...zh,
  nav: {
    about: "About",
    members: "Members",
    history: "History",
    music: "Music",
    live: "Live",
    news: "News",
    media: "Media",
    pressKit: "Press Kit",
    contact: "Contact",
    press: "Press",
  },
  footer: {
    officialLinks: "Official Links",
  },
  seo: {
    title: "TRASH Official",
    titleTemplate: "%s | TRASH Official",
    description: "Official website and archive for Taiwanese rock band TRASH, featuring music, members, history, live milestones, news, videos, and press materials.",
  },
};

const ja: Dictionary = {
  ...en,
  nav: {
    about: "概要",
    members: "メンバー",
    history: "ヒストリー",
    music: "作品",
    live: "ライブ",
    news: "ニュース",
    media: "映像",
    pressKit: "プレスキット",
    contact: "お問い合わせ",
    press: "プレスキット",
  },
  footer: {
    officialLinks: "公式リンク",
  },
  seo: {
    title: "TRASH Official",
    titleTemplate: "%s | TRASH Official",
    description: "台湾のロックバンドTRASHの公式サイト。音楽、メンバー、歩み、ライブのマイルストーン、ニュース、映像、プレス資料を掲載。",
  },
};

const ko: Dictionary = {
  ...en,
  nav: {
    about: "소개",
    members: "멤버",
    history: "히스토리",
    music: "음악",
    live: "공연",
    news: "소식",
    media: "영상",
    pressKit: "프레스 킷",
    contact: "문의",
    press: "프레스 킷",
  },
  footer: {
    officialLinks: "공식 링크",
  },
  seo: {
    title: "TRASH Official",
    titleTemplate: "%s | TRASH Official",
    description: "대만 록 밴드 TRASH의 공식 웹사이트와 아카이브. 음악, 멤버, 히스토리, 라이브 마일스톤, 뉴스, 영상, 프레스 자료를 제공합니다.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  zh,
  en,
  ja,
  ko,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.zh;
}
