export type Track = {
  title: string;
  duration?: string;
  note?: string;
};

export type Album = {
  slug: string;
  title: string;
  titleEn?: string;
  type: "Album" | "EP" | "Single" | "Live";
  year: number | "TODO";
  releaseDate: string;
  releaseLabel: string;
  releaseDateStatus: "verified" | "todo";
  trackCount: number;
  cover: string;
  fallbackCover: string;
  coverTodo: string;
  summary: string;
  description: string[];
  credits: string[];
  highlights: string[];
  tracks: Track[];
  links: { label: string; href: string; note?: string }[];
  factStatus: string;
};

export const albums: Album[] = [
  {
    slug: "the-last-train-of-happiness",
    title: "幸福的末班車",
    titleEn: "The Last Train of Happiness",
    type: "Album",
    year: 2024,
    releaseDate: "2024-09-13",
    releaseLabel: "2024-09-13",
    releaseDateStatus: "verified",
    trackCount: 12,
    cover: "/images/albums/the-last-train-of-happiness-2024.jpg",
    fallbackCover: "/images/albums/last-train-to-happiness.svg",
    coverTodo: "Official cover asset integrated.",
    summary:
      "TRASH enters a defining chapter with 幸福的末班車, a 15th-anniversary album era that connects the band’s long road from independent stages to arena milestones and Golden Melody recognition.",
    description: [
      "幸福的末班車 / The Last Train of Happiness becomes the core 15th-anniversary album era for TRASH.",
    ],
    credits: [],
    highlights: ["2024 album era", "15th-anniversary chapter", "2025 Golden Melody Awards Best Band"],
    tracks: [],
    links: [
      { label: "Spotify", href: "https://open.spotify.com/album/31u2uhLaDEmK5U8heLLIzD" },
      { label: "Apple Music", href: "https://music.apple.com/tw/album/%E5%B9%B8%E7%A6%8F%E7%9A%84%E6%9C%AB%E7%8F%AD%E8%BB%8A/1764880687" },
    ],
    factStatus: "TODO: confirm full album credits, tracklist titles, and official synopsis.",
  },
  {
    slug: "holy-trip",
    title: "Holy Trip!",
    type: "Album",
    year: 2021,
    releaseDate: "2021",
    releaseLabel: "2021",
    releaseDateStatus: "verified",
    trackCount: 10,
    cover: "/images/albums/holy-trip-2021.jpg",
    fallbackCover: "/images/albums/holy-trip.svg",
    coverTodo: "Official cover asset integrated.",
    summary: "Holy Trip! expands TRASH’s catalog with a full-length album chapter.",
    description: ["Holy Trip! represents a major album phase in the TRASH archive."],
    credits: [],
    highlights: ["Album", "2021", "10 tracks"],
    tracks: [],
    links: [{ label: "Spotify", href: "https://open.spotify.com/album/4xI5LoEWLxoTm4DNa4fSUn" }],
    factStatus: "TODO: confirm full album credits and tracklist titles.",
  },
  {
    slug: "never-die",
    title: "Never Die",
    type: "EP",
    year: 2019,
    releaseDate: "2019",
    releaseLabel: "2019",
    releaseDateStatus: "verified",
    trackCount: 4,
    cover: "/images/albums/never-die-2019.jpg",
    fallbackCover: "/images/albums/never-die.svg",
    coverTodo: "Official cover asset integrated.",
    summary: "Never Die is a four-track EP in the TRASH release archive.",
    description: ["Never Die marks a compact release chapter in the band’s discography."],
    credits: [],
    highlights: ["EP", "2019", "4 tracks"],
    tracks: [],
    links: [{ label: "Spotify", href: "https://open.spotify.com/album/7hrHJtOJVZVYc3I9HInHWd" }],
    factStatus: "TODO: confirm full EP credits and tracklist titles.",
  },
  {
    slug: "11-11",
    title: "11:11",
    type: "Album",
    year: 2017,
    releaseDate: "2017",
    releaseLabel: "2017",
    releaseDateStatus: "verified",
    trackCount: 13,
    cover: "/images/albums/1111-2017.jpg",
    fallbackCover: "/images/albums/11-11.svg",
    coverTodo: "Official cover asset integrated.",
    summary: "11:11 marks another major creative phase in the band’s archive.",
    description: ["11:11 marks another major creative phase in the band’s archive."],
    credits: [],
    highlights: ["Album", "2017", "13 tracks"],
    tracks: [],
    links: [{ label: "Spotify", href: "https://open.spotify.com/album/4t40d1bLRMgXQLM1XYwqwm" }],
    factStatus: "TODO: confirm full album credits and tracklist titles.",
  },
  {
    slug: "reset",
    title: "歸零",
    titleEn: "Reset",
    type: "Album",
    year: 2014,
    releaseDate: "2014",
    releaseLabel: "2014",
    releaseDateStatus: "verified",
    trackCount: 11,
    cover: "/images/albums/reset-2014.jpg",
    fallbackCover: "/images/albums/reset.svg",
    coverTodo: "Official cover asset integrated.",
    summary: "歸零 / Reset becomes an important early release and leads to Golden Melody Awards Best Band nomination recognition.",
    description: ["歸零 / Reset is a key early release in the TRASH archive."],
    credits: [],
    highlights: ["Album", "2014", "11 tracks"],
    tracks: [],
    links: [
      { label: "Spotify", href: "https://open.spotify.com/album/6KJK2fNU6LS96gCvThNN1R" },
      { label: "Apple Music", href: "https://music.apple.com/tw/album/%E6%AD%B8%E9%9B%B6/1755175746" },
    ],
    factStatus: "TODO: confirm full album credits and tracklist titles.",
  },
  {
    slug: "trash-2012",
    title: "TRASH 同名專輯",
    type: "Album",
    year: 2012,
    releaseDate: "2012",
    releaseLabel: "2012",
    releaseDateStatus: "verified",
    trackCount: 11,
    cover: "/images/albums/trash-2012.jpg",
    fallbackCover: "/images/albums/urban-afterglow.svg",
    coverTodo: "Official cover asset integrated.",
    summary: "TRASH releases its self-titled first album and receives recognition at Gongliao Ocean Music Festival.",
    description: ["The self-titled first album belongs to the band’s early independent archive and Gongliao Ocean Music Festival recognition phase."],
    credits: [],
    highlights: ["Album", "2012", "11 tracks"],
    tracks: [],
    links: [{ label: "Spotify", href: "https://open.spotify.com/album/5rW9ONvx1lcJ6LOl9BlJQA" }],
    factStatus: "TODO: confirm full album credits and tracklist titles.",
  },
];
