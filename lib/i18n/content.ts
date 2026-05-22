import { albums, type Album } from "@/data/albums";
import { members, type Member } from "@/data/members";
import { news, type NewsItem } from "@/data/news";
import { pressKit, siteProfile, aboutContent, contactContent } from "@/data/site";
import { shows, type Show } from "@/data/shows";
import { timeline, type TimelineEvent } from "@/data/timeline";
import { videos, type Video } from "@/data/videos";
import { defaultLocale, type Locale } from "@/lib/i18n/config";

type PageCopy = {
  home: Record<string, string>;
  about: Record<string, string>;
  members: Record<string, string>;
  history: Record<string, string>;
  music: Record<string, string>;
  live: Record<string, string>;
  news: Record<string, string>;
  media: Record<string, string>;
  press: Record<string, string>;
  contact: Record<string, string>;
  ui: Record<string, string>;
};

const pageCopy: Record<Locale, PageCopy> = {
  zh: {
    home: {
      latestRelease: "Latest Release",
      enterReleaseArchive: "Enter Release Archive",
      newsroom: "Newsroom",
      latestNews: "Latest News",
      media: "Media",
      featuredVideos: "Featured Videos",
      mediaBody: "Music videos, live cuts, and behind-the-scenes footage in one visual archive.",
      milestones: "Milestones",
      bandHistory: "Band History",
      bandHistoryBody: "From early independent stages to 歸零, 11:11, Holy Trip!, 幸福的末班車, arena concerts, and the Golden Melody Awards, this archive traces TRASH as a band that kept turning pressure into momentum.",
      members: "Members",
      theBand: "The Band",
      live: "Live",
      upcomingShows: "Upcoming Shows",
      pressBooking: "Press / Booking",
      pressCta: "Approved assets, booking contacts, and official materials.",
      pressKit: "Press Kit",
      contact: "Contact",
    },
    about: {
      eyebrow: "About",
      title: "TRASH：從台北出發的華語搖滾旅程。",
      longBio: "Long Bio",
      pressReady: "Press-ready Description",
      officialProfile: "Official Profile",
      origin: "Origin",
      founded: "Founded",
      label: "Label",
      genre: "Genre",
      members: "Members",
    },
    members: { eyebrow: "Members", title: "The Band", body: "Current TRASH members: 阿夜 / Marz23, 頤原 / Euan, 博文 / TTeng, and 魁剛 / Kuei gun.", instruments: "Instruments", highlights: "Highlights" },
    history: { eyebrow: "History", title: "Timeline", body: "A source-aware chronology of TRASH’s 15-year arc: Taipei formation, independent momentum, key releases, Warner Music phase, arena milestones, and Golden Melody recognition." },
    music: { eyebrow: "Music", title: "Discography", body: "A structured archive of TRASH releases, from the 2012 self-titled album through 歸零, 11:11, Never Die, Holy Trip!, and the 15th-anniversary 幸福的末班車 era." },
    live: { eyebrow: "Live", title: "Live Archive", body: "Arena milestones from the 15th-anniversary chapter, tracing the Taipei Arena debut and the Kaohsiung Arena continuation as key live markers in the official archive." },
    news: { eyebrow: "News", title: "Official Updates", body: "Selected announcements, release notes, live milestones, and media updates from the TRASH archive.", moreNews: "More News" },
    media: { eyebrow: "Media", title: "Official YouTube Hub", body: "Official music videos, live sessions, behind-the-scenes footage, and release content are collected through the TRASH YouTube channel.", button: "Official YouTube Channel" },
    press: { eyebrow: "Press Kit", title: "Official materials for press, promoters, and partners.", body: "A reliable reference hub for approved TRASH profile copy, official links, member information, recognition notes, and request-based media assets.", materials: "Official band materials", bio: "Official Bio", links: "Official Links", downloads: "Downloads", awards: "Awards / Recognition", members: "Members", contact: "Press Contact", contactBody: "For press, booking, partnership, and media material requests, please contact 經紀/依凡 / 華納音樂.", email: "Email", band: "Band", base: "Base", label: "Label", usageNotes: "Usage Notes" },
    contact: { eyebrow: "Contact", title: "Official inquiry hub.", body: "For press, booking, brand, music-business, and general official inquiries, please use the public contact routes listed below.", ctaEyebrow: "Official TRASH Inquiries", ctaTitle: "For official TRASH inquiries, please contact 經紀/依凡.", contact: "Contact:", email: "Email:" },
    ui: { tracks: "tracks", viewAlbum: "View Album", albumNotes: "Album Notes", releaseInfo: "Release Info", year: "Year", type: "Type", trackCount: "Track Count", date: "Date", credits: "Credits", streaming: "Streaming", tracklist: "Tracklist", discography: "Discography", source: "Source", additionalSource: "Additional Source", originalSource: "Original Source", readSource: "Read Source", past: "Past", currentChapter: "Current Chapter", formed: "Formed", award: "Award", base: "Base", latestRelease: "Latest Release", watchVideos: "Watch Videos", openChannel: "Open Channel" },
  },
  en: {} as PageCopy,
  ja: {} as PageCopy,
  ko: {} as PageCopy,
};

pageCopy.en = {
  ...pageCopy.zh,
  about: { ...pageCopy.zh.about, title: "TRASH: a Mandopop rock journey from Taipei." },
};
pageCopy.ja = {
  ...pageCopy.zh,
  about: { ...pageCopy.zh.about, title: "TRASH：台北から始まったロックバンドの歩み。" },
  contact: { ...pageCopy.zh.contact, body: "取材、出演、ブランド、音楽ビジネス、その他公式のお問い合わせは、以下の公開窓口をご利用ください。", ctaTitle: "TRASHへの公式お問い合わせは、經紀/依凡までご連絡ください。" },
};
pageCopy.ko = {
  ...pageCopy.zh,
  about: { ...pageCopy.zh.about, title: "TRASH: 타이베이에서 시작된 록 밴드의 여정." },
  contact: { ...pageCopy.zh.contact, body: "프레스, 공연, 브랜드 협업, 음악 비즈니스 및 일반 공식 문의는 아래 공개 연락 경로를 이용해 주세요.", ctaTitle: "TRASH 공식 문의는 經紀/依凡에게 연락해 주세요." },
};

const aboutTranslations = {
  en: aboutContent,
  ja: {
    ...aboutContent,
    shortBio: "TRASHは2009年12月に台北で結成された台湾のロックバンド。現メンバーは阿夜 / Marz23、頤原 / Euan、博文 / TTeng、魁剛 / Kuei gun。Warner Music Taiwanに所属し、インディペンデントなステージからアリーナ、Golden Melody Awardsでの評価へと歩みを広げてきた。",
    longBio: [
      "TRASHは2009年12月に台北で結成され、台湾のインディーロックシーンから現代台湾ロックを代表する存在へと成長してきた。",
      "歸零 / Reset、11:11、Never Die、Holy Trip!、幸福的末班車 / The Last Train of Happinessを通じて、バンドのアーカイブはより大きな物語へと広がった。",
      "15周年の章では台北アリーナ、高雄アリーナという節目を迎え、2025年にはGolden Melody Awards Best Bandを受賞した。",
    ],
    pressDescription: "TRASHは2009年12月に台北で結成された台湾のロックバンド。Warner Music Taiwan所属。阿夜 / Marz23、頤原 / Euan、博文 / TTeng、魁剛 / Kuei gunによる現在の編成で、作品、ライブ、アリーナ公演、Golden Melody Awardsでの評価を積み重ねている。",
  },
  ko: {
    ...aboutContent,
    shortBio: "TRASH는 2009년 12월 타이베이에서 결성된 대만 록 밴드다. 현재 멤버는 阿夜 / Marz23, 頤原 / Euan, 博文 / TTeng, 魁剛 / Kuei gun이며 Warner Music Taiwan 소속이다.",
    longBio: [
      "TRASH는 2009년 12월 타이베이에서 결성되어 대만 인디 록 신에서 출발해 현대 대만 록을 대표하는 밴드로 성장했다.",
      "歸零 / Reset, 11:11, Never Die, Holy Trip!, 幸福的末班車 / The Last Train of Happiness를 거치며 밴드의 공식 아카이브는 더 넓은 장으로 확장됐다.",
      "15주년 챕터에서는 Taipei Arena와 Kaohsiung Arena라는 중요한 이정표를 만들었고, 2025년 Golden Melody Awards Best Band를 수상했다.",
    ],
    pressDescription: "TRASH는 2009년 12월 타이베이에서 결성된 대만 록 밴드이며 Warner Music Taiwan 소속이다. 현재 라인업은 阿夜 / Marz23, 頤原 / Euan, 博文 / TTeng, 魁剛 / Kuei gun이다.",
  },
};

const albumText: Record<string, Partial<Record<Locale, Partial<Album>>>> = {
  "the-last-train-of-happiness": {
    ja: { summary: "TRASHの15周年を象徴するアルバム期。インディー時代からアリーナ、Golden Melodyでの評価へと続く道のりをつなぐ作品。", description: ["幸福的末班車 / The Last Train of Happinessは、TRASHの15周年の中心となるアルバム期であり、バンドの歩みと新しい章を結びつける。"] },
    ko: { summary: "TRASH의 15주년을 상징하는 앨범 시기. 인디 무대에서 아레나, Golden Melody의 인정으로 이어지는 여정을 연결한다.", description: ["幸福的末班車 / The Last Train of Happiness는 TRASH 15주년의 핵심 앨범 시기로, 밴드의 축적된 역사와 새로운 챕터를 잇는다."] },
  },
};

const memberText: Record<string, Partial<Record<Locale, Partial<Member>>>> = {
  marz23: { ja: { intro: "阿夜 / Marz23はTRASHのボーカル／ギターとしてバンドの中心に立つ。", bio: "阿夜 / Marz23はTRASHのボーカル／ギターとして、バンドの感情の直線性とライブの強度をつなぐ存在。" }, ko: { intro: "阿夜 / Marz23는 TRASH의 보컬/기타로 밴드의 중심에 선다.", bio: "阿夜 / Marz23는 TRASH의 보컬/기타로 밴드의 감정적 직선성과 라이브 에너지를 연결한다." } },
  euan: { ja: { intro: "頤原 / EuanはTRASHのギターサウンドを形づくる。", bio: "頤原 / EuanはTRASHのメロディックな輪郭、空間性、ライブでの圧力をギターで支える。" }, ko: { intro: "頤原 / Euan은 TRASH의 기타 사운드를 형성한다.", bio: "頤原 / Euan은 기타로 TRASH의 멜로디, 공간감, 라이브의 압력을 만든다." } },
  tteng: { ja: { intro: "博文 / TTengはベースでTRASHの重心を支える。", bio: "博文 / TTengはベースラインでバンドの重量感、動き、リズムセクションの推進力を支える。" }, ko: { intro: "博文 / TTeng은 베이스로 TRASH의 중심을 지탱한다.", bio: "博文 / TTeng은 베이스 라인으로 밴드의 무게, 움직임, 리듬 섹션의 힘을 만든다." } },
  "kuei-gun": { ja: { intro: "魁剛 / Kuei gunはドラムでTRASHを前へ押し出す。", bio: "魁剛 / Kuei gunはドラムで楽曲の身体性、ライブの推進力、ダイナミクスを担う。" }, ko: { intro: "魁剛 / Kuei gun은 드럼으로 TRASH를 밀어붙인다.", bio: "魁剛 / Kuei gun은 드럼으로 곡의 물리적 에너지와 라이브의 추진력을 만든다." } },
};

export function getPageCopy(locale: Locale) {
  return pageCopy[locale] ?? pageCopy[defaultLocale];
}

export function getAbout(locale: Locale) {
  return locale === "zh" || locale === "en" ? aboutContent : aboutTranslations[locale];
}

export function getSite(locale: Locale) {
  if (locale === "ja") return { ...siteProfile, heroBody: "2009年12月に台北で結成されたTRASHは、台湾ロック、Mandopop rock、Alternative Rock、Britpop、Grungeを、記憶に残るライブの力へと変えてきた。" };
  if (locale === "ko") return { ...siteProfile, heroBody: "2009년 12월 타이베이에서 결성된 TRASH는 대만 록, Mandopop rock, Alternative Rock, Britpop, Grunge를 강렬한 라이브 에너지로 연결해 왔다." };
  return siteProfile;
}

export function getContact() {
  return contactContent;
}

export function getPressKit() {
  return pressKit;
}

export function getAlbums(locale: Locale): Album[] {
  return albums.map((album) => ({ ...album, ...(albumText[album.slug]?.[locale] ?? {}) }));
}

export function getMembers(locale: Locale): Member[] {
  return members.map((member) => ({ ...member, ...(memberText[member.slug]?.[locale] ?? {}) }));
}

export function getTimeline(locale: Locale): TimelineEvent[] {
  if (locale !== "ja" && locale !== "ko") return timeline;
  return timeline.map((event) => ({ ...event }));
}

export function getShows(locale: Locale): Show[] {
  if (locale === "ja") return shows.map((show) => ({ ...show, description: show.date === "2024-12-14" ? "TRASH初の台北アリーナ公演として、15周年のライブストーリーをアリーナ規模へ押し上げた節目。" : "The Last Train of Happinessの15周年章を南部へ広げた高雄アリーナの重要な節目。" }));
  if (locale === "ko") return shows.map((show) => ({ ...show, description: show.date === "2024-12-14" ? "TRASH의 첫 Taipei Arena 챕터로, 15주년 라이브 여정을 아레나 규모로 확장한 이정표." : "The Last Train of Happiness의 15주년 챕터를 남부로 확장한 Kaohsiung Arena의 주요 이정표." }));
  return shows;
}

export function getNews(locale: Locale): NewsItem[] {
  if (locale !== "ja" && locale !== "ko") return news;
  return news;
}

export function getVideos(locale: Locale): Video[] {
  if (locale === "ja") return videos.map((video) => ({ ...video, description: video.slug === "official-music-videos" ? "公式ミュージックビデオと映像作品を見る。" : video.slug === "live-sessions" ? "ライブ演奏とセッション映像をチェック。" : video.slug === "behind-the-scenes" ? "スタジオ、ツアー、制作の裏側を追う。" : "公式音源とリリース映像を見る。" }));
  if (locale === "ko") return videos.map((video) => ({ ...video, description: video.slug === "official-music-videos" ? "공식 뮤직비디오와 비주얼 릴리스를 확인하세요." : video.slug === "live-sessions" ? "라이브 퍼포먼스와 세션 콘텐츠를 살펴보세요." : video.slug === "behind-the-scenes" ? "스튜디오, 투어, 제작 과정을 따라갑니다." : "공식 음원과 릴리스 업로드를 확인하세요." }));
  return videos;
}
