import type { Locale } from "@/lib/i18n/config";

export type LiveEventStatus = "upcoming" | "past" | "cancelled" | "sold-out";
export type LiveEventType = "concert" | "festival" | "campus" | "commercial" | "milestone";

export type LocalizedEventText = Record<Locale, string>;

export type LiveEvent = {
  id: string;
  slug: string;
  title: LocalizedEventText;
  date: string;
  time?: string;
  venue: LocalizedEventText;
  city: LocalizedEventText;
  status: LiveEventStatus;
  type: LiveEventType;
  ticketUrl?: string;
  sourceUrl?: string;
  alternateSourceUrl?: string;
  image?: string;
};

export const liveEvents: LiveEvent[] = [
  {
    id: "taipei-arena-2024",
    slug: "taipei-arena-15th-anniversary",
    title: {
      zh: "TRASH《幸福的末班車》15 週年演唱會",
      en: "TRASH The Last Train of Happiness 15th Anniversary Concert",
      ja: "TRASH《幸福的末班車》15周年ライブ",
      ko: "TRASH《幸福的末班車》15주년 콘서트",
    },
    date: "2024-12-14",
    time: "19:30",
    venue: {
      zh: "台北小巨蛋",
      en: "Taipei Arena",
      ja: "台北アリーナ",
      ko: "Taipei Arena",
    },
    city: {
      zh: "台北",
      en: "Taipei",
      ja: "台北",
      ko: "타이베이",
    },
    status: "past",
    type: "milestone",
    sourceUrl: "https://www.playmusic.tw/column_info.php?id=23654&type=news",
    image: "/images/live/taipei-arena-2024-hero.jpg",
  },
  {
    id: "kaohsiung-arena-2025",
    slug: "kaohsiung-arena-15th-anniversary",
    title: {
      zh: "TRASH《幸福的末班車》15 週年演唱會 高雄場",
      en: "TRASH The Last Train of Happiness 15th Anniversary Concert - Kaohsiung",
      ja: "TRASH《幸福的末班車》15周年ライブ 高雄公演",
      ko: "TRASH《幸福的末班車》15주년 콘서트 가오슝 공연",
    },
    date: "2025-05-03",
    time: "19:00",
    venue: {
      zh: "高雄巨蛋",
      en: "Kaohsiung Arena",
      ja: "高雄アリーナ",
      ko: "Kaohsiung Arena",
    },
    city: {
      zh: "高雄",
      en: "Kaohsiung",
      ja: "高雄",
      ko: "가오슝",
    },
    status: "past",
    type: "milestone",
    sourceUrl: "https://www.kaoarena.com.tw/Home/CalendarDetail?id=99",
    alternateSourceUrl: "https://www.playmusic.tw/column_info.php?id=24681&type=news",
    image: "/images/live/kaohsiung-arena-2025-hero.jpg",
  },
];
