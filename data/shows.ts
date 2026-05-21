export type Show = {
  date: string;
  dateLabel: string;
  time?: string;
  milestoneLabel: string;
  description: string;
  title: string;
  city: string;
  country: string;
  venue: string;
  status: "Tickets" | "Sold Out" | "Announced" | "Archive" | "Past" | "TODO";
  type: "milestone" | "tour" | "festival" | "archive";
  href: string;
  sourceUrl?: string;
  alternateSourceUrl?: string;
  asset: string;
  todo: string;
};

export const shows: Show[] = [
  {
    date: "2024-12-14",
    dateLabel: "2024-12-14",
    time: "19:30",
    milestoneLabel: "Taipei Arena Debut",
    description: "A 15th-anniversary arena milestone marking TRASH’s first Taipei Arena chapter, moving the band’s long-running live story from club and festival stages into a defining arena-scale moment.",
    title: "TRASH《幸福的末班車》15 週年演唱會",
    city: "台北",
    country: "Taiwan",
    venue: "台北小巨蛋",
    status: "Past",
    type: "milestone",
    href: "https://www.playmusic.tw/column_info.php?id=23654&type=news",
    sourceUrl: "https://www.playmusic.tw/column_info.php?id=23654&type=news",
    asset: "/images/live/taipei-arena-2024-hero.jpg",
    todo: "Missing official live image: `/images/live/taipei-arena-2024-hero.jpg`.",
  },
  {
    date: "2025-05-03",
    dateLabel: "2025-05-03",
    time: "19:00",
    milestoneLabel: "Kaohsiung Arena Chapter",
    description: "The Kaohsiung arena chapter extending The Last Train of Happiness into the south, carrying the 15th-anniversary era beyond Taipei as a second major arena milestone.",
    title: "TRASH《幸福的末班車》15 週年演唱會 高雄場",
    city: "高雄",
    country: "Taiwan",
    venue: "高雄巨蛋",
    status: "Past",
    type: "milestone",
    href: "https://www.kaoarena.com.tw/Home/CalendarDetail?id=99",
    sourceUrl: "https://www.kaoarena.com.tw/Home/CalendarDetail?id=99",
    alternateSourceUrl: "https://www.playmusic.tw/column_info.php?id=24681&type=news",
    asset: "/images/live/kaohsiung-arena-2025-hero.jpg",
    todo: "Missing official live image: `/images/live/kaohsiung-arena-2025-hero.jpg`.",
  },
];
