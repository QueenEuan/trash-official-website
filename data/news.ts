export type NewsItem = {
  slug: string;
  title: string;
  category: "Release" | "Live" | "Press" | "Archive" | "Awards";
  date: string;
  dateLabel: string;
  excerpt: string;
  image: string;
  fallbackImage: string;
  imageTodo: string;
  sourceUrl: string;
  alternateSourceUrl?: string;
  body: string[];
};

export const news: NewsItem[] = [
  {
    slug: "golden-melody-best-band",
    title: "TRASH 以《幸福的末班車》獲第 36 屆金曲獎最佳樂團",
    category: "Awards",
    date: "2025-06-28",
    dateLabel: "2025-06-28",
    excerpt: "TRASH 在四度入圍金曲最佳樂團後，以《幸福的末班車》首度獲得最佳樂團獎。",
    image: "/images/news/golden-melody-2025.jpg",
    fallbackImage: "/images/news/holy-trip-era.svg",
    imageTodo: "Missing approved image: `/images/news/golden-melody-2025.jpg`.",
    sourceUrl: "https://benlinmarketing.com/2025/06/29/trashgma36/",
    body: [
      "TRASH 在第 36 屆金曲獎以《幸福的末班車》獲得最佳樂團獎。",
      "這座獎項是 TRASH 四度入圍金曲最佳樂團後的重要里程碑，也將《幸福的末班車》推向樂團十五週年篇章的核心位置。",
    ],
  },
  {
    slug: "kaohsiung-arena-15th-anniversary",
    title: "TRASH《幸福的末班車》15 週年演唱會高雄巨蛋登場",
    category: "Live",
    date: "2025-05-03",
    dateLabel: "2025-05-03",
    excerpt: "高雄場延續台北小巨蛋的感動，並升級視覺、影像與歌單。",
    image: "/images/news/kaohsiung-arena-2025.jpg",
    fallbackImage: "/images/news/festival-run.svg",
    imageTodo: "Missing approved image: `/images/news/kaohsiung-arena-2025.jpg`.",
    sourceUrl: "https://www.playmusic.tw/column_info.php?id=24681&type=news",
    alternateSourceUrl: "https://www.kaoarena.com.tw/Home/CalendarDetail?id=99",
    body: [
      "TRASH《幸福的末班車》15 週年演唱會高雄場於高雄巨蛋登場。",
      "高雄場延續台北小巨蛋的感動，並升級視覺、影像與歌單，完成樂團十五週年巡演的重要一站。",
    ],
  },
  {
    slug: "taipei-arena-15th-anniversary",
    title: "TRASH《幸福的末班車》15 週年演唱會台北小巨蛋圓滿落幕",
    category: "Live",
    date: "2024-12-14",
    dateLabel: "2024-12-14",
    excerpt: "TRASH 成軍 15 年首次攻蛋，完成重要里程碑。",
    image: "/images/news/taipei-arena-2024.jpg",
    fallbackImage: "/images/news/festival-run.svg",
    imageTodo: "Missing approved image: `/images/news/taipei-arena-2024.jpg`.",
    sourceUrl: "https://www.playmusic.tw/column_info.php?id=23658&type=news",
    body: [
      "TRASH《幸福的末班車》15 週年演唱會於台北小巨蛋圓滿落幕。",
      "這是 TRASH 成軍 15 年首次攻蛋，也成為樂團現場歷程中的重要里程碑。",
    ],
  },
  {
    slug: "the-last-train-of-happiness-album-era",
    title: "第五張概念專輯《幸福的末班車》正式發行",
    category: "Release",
    date: "2024-09-13",
    dateLabel: "2024-09-13",
    excerpt: "TRASH 走過 15 年樂團生涯，推出第五張概念專輯《幸福的末班車》。",
    image: "/images/news/last-train-album.jpg",
    fallbackImage: "/images/news/press-kit.svg",
    imageTodo: "Missing approved image: `/images/news/last-train-album.jpg`.",
    sourceUrl: "https://music.apple.com/tw/album/%E5%B9%B8%E7%A6%8F%E7%9A%84%E6%9C%AB%E7%8F%AD%E8%BB%8A/1764880687",
    alternateSourceUrl: "https://www.eslite.com/product/10032019212682637832001",
    body: [
      "TRASH 走過 15 年樂團生涯，推出第五張概念專輯《幸福的末班車》。",
      "這張作品成為樂團十五週年章節的核心發行，也連結後續小巨蛋、高雄巨蛋與金曲獎里程碑。",
    ],
  },
];
