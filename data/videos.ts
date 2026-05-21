export type Video = {
  slug: string;
  title: string;
  category: "Official Music Videos" | "Live Sessions" | "Behind The Scenes" | "Releases";
  description: string;
  date: string;
  dateLabel: string;
  thumbnail: string;
  thumbnailTodo: string;
  duration: string;
  href: string;
  hrefTodo: string;
};

export const videos: Video[] = [
  {
    slug: "official-music-videos",
    title: "Official Music Videos",
    category: "Official Music Videos",
    description: "Watch official music videos and visual releases.",
    date: "2026",
    dateLabel: "YouTube Channel",
    thumbnail: "/images/videos/holy-trip-video.svg",
    thumbnailTodo: "Missing approved video hub thumbnail.",
    duration: "",
    href: "https://www.youtube.com/channel/UCuAzL0PsEngYktHkjNtJKgg",
    hrefTodo: "Individual video URLs pending internal curation.",
  },
  {
    slug: "live-sessions",
    title: "Live Sessions",
    category: "Live Sessions",
    description: "Explore selected live performances and session content.",
    date: "2026",
    dateLabel: "YouTube Channel",
    thumbnail: "/images/videos/studio-session.svg",
    thumbnailTodo: "Missing approved video hub thumbnail.",
    duration: "",
    href: "https://www.youtube.com/channel/UCuAzL0PsEngYktHkjNtJKgg",
    hrefTodo: "Individual video URLs pending internal curation.",
  },
  {
    slug: "behind-the-scenes",
    title: "Behind The Scenes",
    category: "Behind The Scenes",
    description: "Follow studio, touring, and production moments.",
    date: "2026",
    dateLabel: "YouTube Channel",
    thumbnail: "/images/videos/live-taipei.svg",
    thumbnailTodo: "Missing approved video hub thumbnail.",
    duration: "",
    href: "https://www.youtube.com/channel/UCuAzL0PsEngYktHkjNtJKgg",
    hrefTodo: "Individual video URLs pending internal curation.",
  },
  {
    slug: "releases",
    title: "Releases",
    category: "Releases",
    description: "Browse official audio and release uploads.",
    date: "2026",
    dateLabel: "YouTube Channel",
    thumbnail: "/images/videos/holy-trip-video.svg",
    thumbnailTodo: "Missing approved video hub thumbnail.",
    duration: "",
    href: "https://www.youtube.com/channel/UCuAzL0PsEngYktHkjNtJKgg",
    hrefTodo: "Individual video URLs pending internal curation.",
  },
];
