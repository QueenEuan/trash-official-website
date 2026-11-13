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
  /** YouTube video ID (the part after `v=`). When set, the video is embedded on the site. */
  youtubeId?: string;
};

export const youtubeChannelUrl = "https://www.youtube.com/channel/UCuAzL0PsEngYktHkjNtJKgg";

// Most-viewed videos on the official YouTube channel (checked 2026-11-13), in display order.
export const videos: Video[] = [
  {
    slug: "love",
    title: "TRASH《終究還是因為愛 LOVE》Official Music Video",
    category: "Official Music Videos",
    description: "",
    date: "",
    dateLabel: "",
    thumbnail: "https://i.ytimg.com/vi/fl1Wbd-ldMQ/hqdefault.jpg",
    thumbnailTodo: "",
    duration: "5:05",
    href: "https://www.youtube.com/watch?v=fl1Wbd-ldMQ",
    hrefTodo: "",
    youtubeId: "fl1Wbd-ldMQ",
  },
  {
    slug: "heavyhearted-loser",
    title: "TRASH《重感情的廢物 Heavyhearted Loser》Official Music Video",
    category: "Official Music Videos",
    description: "",
    date: "",
    dateLabel: "",
    thumbnail: "https://i.ytimg.com/vi/jM3HXNusWA0/hqdefault.jpg",
    thumbnailTodo: "",
    duration: "4:35",
    href: "https://www.youtube.com/watch?v=jM3HXNusWA0",
    hrefTodo: "",
    youtubeId: "jM3HXNusWA0",
  },
  {
    slug: "i-dont-wanna-say-goodbye",
    title: "TRASH《希望你回來 I Don’t Wanna Say Goodbye》Official Music Video",
    category: "Official Music Videos",
    description: "",
    date: "",
    dateLabel: "",
    thumbnail: "https://i.ytimg.com/vi/vjF0B0holLk/hqdefault.jpg",
    thumbnailTodo: "",
    duration: "8:39",
    href: "https://www.youtube.com/watch?v=vjF0B0holLk",
    hrefTodo: "",
    youtubeId: "vjF0B0holLk",
  },
  {
    slug: "leaving-taipei",
    title: "TRASH《離開台北 LEAVING TAIPEI》Official Music Video",
    category: "Official Music Videos",
    description: "",
    date: "",
    dateLabel: "",
    thumbnail: "https://i.ytimg.com/vi/T_AFMCpQgkI/hqdefault.jpg",
    thumbnailTodo: "",
    duration: "5:45",
    href: "https://www.youtube.com/watch?v=T_AFMCpQgkI",
    hrefTodo: "",
    youtubeId: "T_AFMCpQgkI",
  },
  {
    slug: "goodbye",
    title: "TRASH《Goodbye》Official Music Video",
    category: "Official Music Videos",
    description: "",
    date: "",
    dateLabel: "",
    thumbnail: "https://i.ytimg.com/vi/4MNsJnTdEgo/hqdefault.jpg",
    thumbnailTodo: "",
    duration: "4:45",
    href: "https://www.youtube.com/watch?v=4MNsJnTdEgo",
    hrefTodo: "",
    youtubeId: "4MNsJnTdEgo",
  },
  {
    slug: "love-holy-trip-taipei-live",
    title: "TRASH《終究還是因爲愛》2022 Holy Trip! 台北演唱會 (Official Live Video)",
    category: "Live Sessions",
    description: "",
    date: "",
    dateLabel: "",
    thumbnail: "https://i.ytimg.com/vi/JLmPL924IsY/hqdefault.jpg",
    thumbnailTodo: "",
    duration: "7:30",
    href: "https://www.youtube.com/watch?v=JLmPL924IsY",
    hrefTodo: "",
    youtubeId: "JLmPL924IsY",
  },
];
