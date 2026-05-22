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
      latestRelease: "最新作品",
      enterReleaseArchive: "查看專輯",
      newsroom: "最新消息",
      latestNews: "官方更新",
      media: "影音",
      featuredVideos: "精選影音",
      mediaBody: "官方音樂錄影帶、現場影像、幕後內容與發行作品，集中於 TRASH 的影音資料庫。",
      milestones: "重要里程碑",
      bandHistory: "樂團歷史",
      bandHistoryBody: "從早期獨立舞台到《歸零》、《11:11》、《Holy Trip!》、《幸福的末班車》，再到小巨蛋、高雄巨蛋與金曲獎肯定，這裡整理 TRASH 持續把壓力轉化為前進力量的樂團軌跡。",
      members: "成員",
      theBand: "現在陣容",
      live: "演出",
      upcomingShows: "里程碑演出",
      pressBooking: "媒體 / 合作",
      pressCta: "官方簡介、媒體素材、演出邀約與聯絡窗口。",
      pressKit: "媒體資料",
      contact: "聯絡",
    },
    about: {
      eyebrow: "關於 TRASH",
      title: "TRASH：從台北出發的華語搖滾旅程。",
      longBio: "完整簡介",
      pressReady: "媒體引用簡介",
      officialProfile: "官方資料",
      origin: "出身地",
      founded: "成立時間",
      label: "唱片公司",
      genre: "音樂類型",
      members: "成員",
    },
    members: { eyebrow: "成員", title: "現在陣容", body: "TRASH 現任成員：阿夜 / Marz23、頤原 / Euan、博文 / TTeng、魁剛 / Kuei gun。", instruments: "樂器 / 位置", highlights: "重點資料" },
    history: { eyebrow: "樂團歷史", title: "時間軸", body: "以公開且可追溯的資料整理 TRASH 十五年以上的樂團軌跡：台北成團、獨立時期、關鍵作品、華納音樂階段、場館里程碑與金曲獎肯定。" },
    music: { eyebrow: "作品", title: "音樂作品", body: "TRASH 官方作品資料庫，整理從 2012 年同名專輯、《歸零》、《11:11》、《Never Die》、《Holy Trip!》，到十五週年《幸福的末班車》時期的主要發行。" },
    live: { eyebrow: "演出", title: "演出紀錄", body: "整理 TRASH 十五週年篇章中的重要場館演出，包含台北小巨蛋首登場與高雄巨蛋篇章，作為官方演出資料庫中的關鍵節點。" },
    news: { eyebrow: "最新消息", title: "官方更新", body: "收錄 TRASH 官方資料庫中的獎項、發行、演出里程碑與媒體相關消息。", moreNews: "更多消息" },
    media: { eyebrow: "影音", title: "官方 YouTube 影音中心", body: "官方音樂錄影帶、現場演出、幕後花絮與發行作品，皆可由 TRASH YouTube 官方頻道延伸觀看。", button: "前往 YouTube 官方頻道" },
    press: { eyebrow: "媒體資料", title: "提供媒體、主辦與品牌合作方使用的官方資料。", body: "此頁整理 TRASH 官方簡介、官方連結、成員資訊、獎項紀錄與可來信索取的媒體素材。", materials: "官方樂團資料", bio: "官方簡介", links: "官方連結", downloads: "素材索取", awards: "獎項紀錄", members: "成員", contact: "媒體聯絡", contactBody: "媒體、演出、合作與素材需求，請聯絡 經紀/依凡 / 華納音樂。", email: "Email", band: "樂團", base: "據點", label: "唱片公司", usageNotes: "使用說明" },
    contact: { eyebrow: "聯絡", title: "官方聯絡窗口。", body: "媒體採訪、演出邀約、品牌合作、音樂商務與一般官方聯絡，請依下列分類洽詢。", ctaEyebrow: "TRASH 官方聯絡", ctaTitle: "TRASH 官方相關需求，請聯絡 經紀/依凡。", contact: "聯絡窗口：", email: "Email：" },
    ui: { tracks: "首曲目", viewAlbum: "查看專輯", listenNow: "立即聆聽", albumNotes: "專輯說明", releaseInfo: "發行資訊", year: "年份", type: "類型", trackCount: "曲目數", date: "發行日期", releaseDate: "發行日期", credits: "製作名單", streaming: "串流平台", tracklist: "曲目", discography: "音樂作品", source: "查看來源", additionalSource: "更多來源", originalSource: "原始來源", readSource: "查看來源", past: "已結束", currentChapter: "當前篇章", formed: "成團", award: "獎項", base: "據點", latestRelease: "最新作品", watchVideos: "觀看影音", openChannel: "前往頻道", openYouTubeChannel: "前往 YouTube 官方頻道", officialYouTubeHub: "官方 YouTube 影音中心", album: "專輯", ep: "EP", milestone: "里程碑", live: "演出", awards: "獎項" },
  },
  en: {} as PageCopy,
  ja: {} as PageCopy,
  ko: {} as PageCopy,
};

pageCopy.en = {
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
  about: { eyebrow: "About", title: "TRASH: a Mandopop rock journey from Taipei.", longBio: "Long Bio", pressReady: "Press-ready Description", officialProfile: "Official Profile", origin: "Origin", founded: "Founded", label: "Label", genre: "Genre", members: "Members" },
  members: { eyebrow: "Members", title: "The Band", body: "Current TRASH members: 阿夜 / Marz23, 頤原 / Euan, 博文 / TTeng, and 魁剛 / Kuei gun.", instruments: "Instruments", highlights: "Highlights" },
  history: { eyebrow: "History", title: "Timeline", body: "A source-aware chronology of TRASH’s 15-year arc: Taipei formation, independent momentum, key releases, Warner Music phase, arena milestones, and Golden Melody recognition." },
  music: { eyebrow: "Music", title: "Discography", body: "A structured archive of TRASH releases, from the 2012 self-titled album through 歸零, 11:11, Never Die, Holy Trip!, and the 15th-anniversary 幸福的末班車 era." },
  live: { eyebrow: "Live", title: "Live Archive", body: "Arena milestones from the 15th-anniversary chapter, tracing the Taipei Arena debut and the Kaohsiung Arena continuation as key live markers in the official archive." },
  news: { eyebrow: "News", title: "Official Updates", body: "Selected announcements, release notes, live milestones, and media updates from the TRASH archive.", moreNews: "More News" },
  media: { eyebrow: "Media", title: "Official YouTube Hub", body: "Official music videos, live sessions, behind-the-scenes footage, and release content are collected through the TRASH YouTube channel.", button: "Official YouTube Channel" },
  press: { eyebrow: "Press Kit", title: "Official materials for press, promoters, and partners.", body: "A reliable reference hub for approved TRASH profile copy, official links, member information, recognition notes, and request-based media assets.", materials: "Official band materials", bio: "Official Bio", links: "Official Links", downloads: "Downloads", awards: "Awards / Recognition", members: "Members", contact: "Press Contact", contactBody: "For press, booking, partnership, and media material requests, please contact 經紀/依凡 / 華納音樂.", email: "Email", band: "Band", base: "Base", label: "Label", usageNotes: "Usage Notes" },
  contact: { eyebrow: "Contact", title: "Official inquiry hub.", body: "For press, booking, brand, music-business, and general official inquiries, please use the public contact routes listed below.", ctaEyebrow: "Official TRASH Inquiries", ctaTitle: "For official TRASH inquiries, please contact 經紀/依凡.", contact: "Contact:", email: "Email:" },
  ui: { tracks: "tracks", viewAlbum: "View Album", listenNow: "Listen Now", albumNotes: "Album Notes", releaseInfo: "Release Info", year: "Year", type: "Type", trackCount: "Track Count", date: "Date", releaseDate: "Release Date", credits: "Credits", streaming: "Streaming", tracklist: "Tracklist", discography: "Discography", source: "Source", additionalSource: "Additional Source", originalSource: "Original Source", readSource: "Read Source", past: "Past", currentChapter: "Current Chapter", formed: "Formed", award: "Award", base: "Base", latestRelease: "Latest Release", watchVideos: "Watch Videos", openChannel: "Open Channel", openYouTubeChannel: "Open YouTube Channel", officialYouTubeHub: "Official YouTube Hub", album: "Album", ep: "EP", milestone: "Milestone", live: "Live", awards: "Awards" },
};
pageCopy.ja = {
  ...pageCopy.en,
  home: {
    latestRelease: "最新リリース",
    enterReleaseArchive: "アルバムを見る",
    newsroom: "ニュース",
    latestNews: "公式アップデート",
    media: "映像",
    featuredVideos: "注目映像",
    mediaBody: "公式ミュージックビデオ、ライブ映像、舞台裏、リリース映像をTRASHの映像アーカイブとして集約。",
    milestones: "マイルストーン",
    bandHistory: "バンドの歩み",
    bandHistoryBody: "インディペンデントなステージから歸零、11:11、Holy Trip!、幸福的末班車、アリーナ公演、Golden Melody Awardsでの評価まで、TRASHの歩みをたどる公式アーカイブ。",
    members: "メンバー",
    theBand: "現在のラインナップ",
    live: "ライブ",
    upcomingShows: "マイルストーン公演",
    pressBooking: "プレス / ブッキング",
    pressCta: "公式プロフィール、メディア素材、出演依頼、連絡窓口。",
    pressKit: "プレスキット",
    contact: "お問い合わせ",
  },
  about: { eyebrow: "概要", title: "TRASH：台北から始まったロックバンドの歩み。", longBio: "ロングバイオ", pressReady: "プレス向け紹介文", officialProfile: "公式プロフィール", origin: "出身地", founded: "結成", label: "レーベル", genre: "ジャンル", members: "メンバー" },
  members: { eyebrow: "メンバー", title: "現在のラインナップ", body: "TRASHの現メンバー：阿夜 / Marz23、頤原 / Euan、博文 / TTeng、魁剛 / Kuei gun。", instruments: "担当", highlights: "ハイライト" },
  history: { eyebrow: "ヒストリー", title: "タイムライン", body: "台北での結成、インディペンデントな活動、主要作品、Warner Music Taiwan期、アリーナの節目、Golden Melodyでの評価まで、TRASHの歩みを整理した公式タイムライン。" },
  music: { eyebrow: "作品", title: "ディスコグラフィー", body: "2012年のセルフタイトル作から歸零、11:11、Never Die、Holy Trip!、15周年期の幸福的末班車までを整理したTRASH公式作品アーカイブ。" },
  live: { eyebrow: "ライブ", title: "ライブアーカイブ", body: "15周年の章における重要なアリーナ公演、台北アリーナ初登場と高雄アリーナの節目を公式ライブアーカイブとして記録。" },
  news: { eyebrow: "ニュース", title: "公式アップデート", body: "TRASH公式アーカイブから、受賞、リリース、ライブの節目、メディア関連ニュースを掲載。", moreNews: "その他のニュース" },
  media: { eyebrow: "映像", title: "公式 YouTube 映像ハブ", body: "公式ミュージックビデオ、ライブ映像、舞台裏、リリースコンテンツはTRASHのYouTube公式チャンネルから視聴できます。", button: "YouTube公式チャンネルへ" },
  press: { eyebrow: "プレスキット", title: "メディア、プロモーター、パートナー向けの公式資料。", body: "TRASHの公式プロフィール、公式リンク、メンバー情報、受賞情報、リクエスト制のメディア素材をまとめた資料ページ。", materials: "公式バンド資料", bio: "公式バイオ", links: "公式リンク", downloads: "素材リクエスト", awards: "受賞 / 評価", members: "メンバー", contact: "プレス連絡先", contactBody: "取材、出演、提携、メディア素材のご相談は、經紀/依凡 / 華納音樂までご連絡ください。", email: "Email", band: "バンド", base: "拠点", label: "レーベル", usageNotes: "使用ガイド" },
  contact: { eyebrow: "お問い合わせ", title: "公式お問い合わせ窓口。", body: "取材、出演、ブランド、音楽ビジネス、その他公式のお問い合わせは、以下の公開窓口をご利用ください。", ctaEyebrow: "TRASH公式お問い合わせ", ctaTitle: "TRASHへの公式お問い合わせは、經紀/依凡までご連絡ください。", contact: "連絡先：", email: "Email：" },
  ui: { tracks: "曲", viewAlbum: "アルバムを見る", listenNow: "聴く", albumNotes: "アルバムノート", releaseInfo: "リリース情報", year: "年", type: "タイプ", trackCount: "曲数", date: "日付", releaseDate: "リリース日", credits: "クレジット", streaming: "ストリーミング", tracklist: "曲目", discography: "ディスコグラフィー", source: "出典を見る", additionalSource: "追加出典", originalSource: "元記事を見る", readSource: "出典を見る", past: "終了", currentChapter: "現在のチャプター", formed: "結成", award: "受賞", base: "拠点", latestRelease: "最新作を聴く", watchVideos: "映像を見る", openChannel: "チャンネルへ", openYouTubeChannel: "YouTube公式チャンネルへ", officialYouTubeHub: "公式 YouTube 映像ハブ", album: "アルバム", ep: "EP", milestone: "マイルストーン", live: "ライブ", awards: "受賞" },
};
pageCopy.ko = {
  ...pageCopy.en,
  home: {
    latestRelease: "최신 릴리스",
    enterReleaseArchive: "앨범 보기",
    newsroom: "뉴스",
    latestNews: "공식 업데이트",
    media: "영상",
    featuredVideos: "주요 영상",
    mediaBody: "공식 뮤직비디오, 라이브 영상, 비하인드, 릴리스 콘텐츠를 TRASH 영상 아카이브로 모았습니다.",
    milestones: "마일스톤",
    bandHistory: "밴드 히스토리",
    bandHistoryBody: "초기 인디 무대부터 歸零, 11:11, Holy Trip!, 幸福的末班車, 아레나 공연, Golden Melody Awards의 인정까지 TRASH의 여정을 정리한 공식 아카이브.",
    members: "멤버",
    theBand: "현재 라인업",
    live: "공연",
    upcomingShows: "마일스톤 공연",
    pressBooking: "프레스 / 부킹",
    pressCta: "공식 프로필, 미디어 자료, 공연 문의, 연락 창구.",
    pressKit: "프레스 킷",
    contact: "문의",
  },
  about: { eyebrow: "소개", title: "TRASH: 타이베이에서 시작된 록 밴드의 여정.", longBio: "상세 소개", pressReady: "프레스용 소개", officialProfile: "공식 프로필", origin: "출신", founded: "결성", label: "레이블", genre: "장르", members: "멤버" },
  members: { eyebrow: "멤버", title: "현재 라인업", body: "TRASH 현 멤버: 阿夜 / Marz23, 頤原 / Euan, 博文 / TTeng, 魁剛 / Kuei gun.", instruments: "포지션", highlights: "하이라이트" },
  history: { eyebrow: "히스토리", title: "타임라인", body: "타이베이 결성, 인디 시기, 주요 릴리스, Warner Music Taiwan 단계, 아레나 마일스톤, Golden Melody의 인정까지 TRASH의 15년 이상 여정을 정리한 공식 타임라인." },
  music: { eyebrow: "음악", title: "디스코그래피", body: "2012년 셀프 타이틀 앨범부터 歸零, 11:11, Never Die, Holy Trip!, 15주년 시기의 幸福的末班車까지 정리한 TRASH 공식 릴리스 아카이브." },
  live: { eyebrow: "공연", title: "공연 아카이브", body: "15주년 챕터의 주요 아레나 공연, Taipei Arena 데뷔와 Kaohsiung Arena 챕터를 공식 라이브 아카이브의 핵심 지점으로 기록합니다." },
  news: { eyebrow: "소식", title: "공식 업데이트", body: "TRASH 공식 아카이브의 수상, 릴리스, 공연 마일스톤, 미디어 관련 소식을 모았습니다.", moreNews: "더 많은 소식" },
  media: { eyebrow: "영상", title: "공식 YouTube 영상 허브", body: "공식 뮤직비디오, 라이브 영상, 비하인드, 릴리스 콘텐츠는 TRASH YouTube 공식 채널에서 확인할 수 있습니다.", button: "YouTube 공식 채널로 이동" },
  press: { eyebrow: "프레스 킷", title: "미디어, 프로모터, 파트너를 위한 공식 자료.", body: "TRASH 공식 프로필, 공식 링크, 멤버 정보, 수상 기록, 요청 기반 미디어 자료를 정리한 자료 페이지입니다.", materials: "공식 밴드 자료", bio: "공식 소개", links: "공식 링크", downloads: "자료 요청", awards: "수상 / 인정", members: "멤버", contact: "프레스 연락처", contactBody: "프레스, 부킹, 파트너십, 미디어 자료 요청은 經紀/依凡 / 華納音樂으로 연락해 주세요.", email: "Email", band: "밴드", base: "거점", label: "레이블", usageNotes: "사용 안내" },
  contact: { eyebrow: "문의", title: "공식 문의 창구.", body: "프레스, 공연, 브랜드 협업, 음악 비즈니스 및 일반 공식 문의는 아래 공개 연락 경로를 이용해 주세요.", ctaEyebrow: "TRASH 공식 문의", ctaTitle: "TRASH 공식 문의는 經紀/依凡에게 연락해 주세요.", contact: "연락처:", email: "Email:" },
  ui: { tracks: "곡", viewAlbum: "앨범 보기", listenNow: "듣기", albumNotes: "앨범 노트", releaseInfo: "릴리스 정보", year: "연도", type: "유형", trackCount: "트랙 수", date: "날짜", releaseDate: "발매일", credits: "크레딧", streaming: "스트리밍", tracklist: "트랙리스트", discography: "디스코그래피", source: "출처 보기", additionalSource: "추가 출처", originalSource: "원문 보기", readSource: "출처 보기", past: "종료", currentChapter: "현재 챕터", formed: "결성", award: "수상", base: "거점", latestRelease: "최신작 듣기", watchVideos: "영상 보기", openChannel: "채널로 이동", openYouTubeChannel: "YouTube 공식 채널로 이동", officialYouTubeHub: "공식 YouTube 영상 허브", album: "앨범", ep: "EP", milestone: "마일스톤", live: "공연", awards: "수상" },
};

const aboutTranslations = {
  zh: {
    ...aboutContent,
    shortBio: "TRASH 於 2009 年 12 月在台北成團。現任成員為阿夜 / Marz23（主唱 / 吉他）、頤原 / Euan（吉他）、博文 / TTeng（貝斯）、魁剛 / Kuei gun（鼓手）。樂團目前隸屬華納音樂，官方資料庫記錄從獨立舞台、作品發行、場館里程碑到金曲獎肯定的十五年以上旅程。",
    longBio: [
      "TRASH 於 2009 年 12 月在台北成團，從台灣獨立搖滾現場出發，逐步累積成為當代台灣搖滾的重要名字。早期歷程包含現場演出、2012 年首張同名專輯，以及貢寮海洋音樂祭相關肯定，建立出以吉他、旋律與現場能量為核心的樂團基底。",
      "從《歸零》、《11:11》、《Never Die》、《Holy Trip!》到《幸福的末班車》，TRASH 的作品資料庫逐漸擴展出更完整的聲響與敘事：失真、旋律、直接的情緒，以及在舞台上釋放的集體力量。進入華納音樂階段後，樂團在更大的發行平台上持續保有以現場與團體能量為中心的辨識度。",
      "十五週年篇章將 TRASH 帶進更具規模的場館里程碑，包含 2024 年台北小巨蛋與 2025 年高雄巨蛋演出。2025 年，TRASH 以《幸福的末班車》獲得金曲獎最佳樂團，成為這段從台北出發、一路由作品與現場累積而成的樂團故事中重要的肯定。",
    ],
    pressDescription: "TRASH 是 2009 年 12 月成團於台北的台灣搖滾樂團，隸屬華納音樂。現任成員為阿夜 / Marz23、頤原 / Euan、博文 / TTeng、魁剛 / Kuei gun。官方資料庫串連樂團早期獨立舞台、關鍵作品《歸零》、《11:11》、《Holy Trip!》、《幸福的末班車》、十五週年場館里程碑，以及 2025 年金曲獎最佳樂團肯定。",
  },
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
    zh: {
      summary: "TRASH 以《幸福的末班車》進入十五週年的核心篇章，連結樂團從獨立舞台、重要場館到金曲獎肯定的長路。",
      description: ["《幸福的末班車》是 TRASH 十五週年篇章的核心作品，將樂團累積的歷史、舞台記憶與新的發行章節放在同一條路線上。"],
      highlights: ["2024 年專輯", "十五週年篇章", "第 36 屆金曲獎最佳樂團"],
    },
    ja: { summary: "TRASHの15周年を象徴するアルバム期。インディー時代からアリーナ、Golden Melodyでの評価へと続く道のりをつなぐ作品。", description: ["幸福的末班車 / The Last Train of Happinessは、TRASHの15周年の中心となるアルバム期であり、バンドの歩みと新しい章を結びつける。"] },
    ko: { summary: "TRASH의 15주년을 상징하는 앨범 시기. 인디 무대에서 아레나, Golden Melody의 인정으로 이어지는 여정을 연결한다.", description: ["幸福的末班車 / The Last Train of Happiness는 TRASH 15주년의 핵심 앨범 시기로, 밴드의 축적된 역사와 새로운 챕터를 잇는다."] },
  },
  "holy-trip": {
    zh: {
      summary: "《Holy Trip!》為 TRASH 的作品資料庫增添完整專輯篇章，位於早期作品與後續十五週年時期之間。",
      description: ["《Holy Trip!》是 TRASH 官方作品資料庫中的重要專輯階段，在樂團走向更大型場館篇章之前，留下完整發行節點。"],
      highlights: ["專輯", "2021", "10 首曲目"],
    },
  },
  "never-die": {
    zh: {
      summary: "《Never Die》是 TRASH 作品資料庫中的四首曲目 EP，作為華納音樂階段中的集中發行篇章。",
      description: ["《Never Die》標記樂團作品脈絡中的精簡發行節點；完整製作名單與曲目資訊待官方資料補齊後再公開。"],
      highlights: ["EP", "2019", "4 首曲目"],
    },
  },
  "11-11": {
    zh: {
      summary: "《11:11》是 TRASH 作品資料庫中的重要創作階段，延伸樂團在後續華納音樂與場館篇章之前的聲響輪廓。",
      description: ["《11:11》是 TRASH 官方作品資料庫中的重要創作節點；頁面目前保留已確認的發行層級資訊，完整製作名單待官方核定。"],
      highlights: ["專輯", "2017", "13 首曲目"],
    },
  },
  reset: {
    zh: {
      summary: "《歸零》是 TRASH 早期作品中的關鍵發行，連結樂團從獨立現場走向更廣泛獎項視野的階段。",
      description: ["《歸零》是 TRASH 官方資料庫中的重要早期作品，承接獨立時期累積的能量，也連結金曲獎入圍肯定的脈絡。"],
      highlights: ["專輯", "2014", "11 首曲目"],
    },
  },
  "trash-2012": {
    zh: {
      summary: "TRASH 於 2012 年推出首張同名專輯，成為樂團官方發行資料庫的起點，也連結早期貢寮海洋音樂祭相關肯定。",
      description: ["首張同名專輯屬於 TRASH 早期獨立時期資料庫，連結 2012 年發行篇章與貢寮海洋音樂祭相關肯定。"],
      highlights: ["專輯", "2012", "11 首曲目"],
    },
  },
};

const memberText: Record<string, Partial<Record<Locale, Partial<Member>>>> = {
  marz23: { zh: { role: "主唱 / 吉他", intro: "阿夜 / Marz23 位於 TRASH 的核心位置，擔任主唱、吉他與重要創作聲音。", bio: "阿夜 / Marz23 位於 TRASH 的核心位置，以主唱與吉他連結樂團直接的情緒、歌曲敘事與現場演出的衝擊力。", instruments: ["主唱", "吉他"], highlights: ["TRASH 現任成員", "主唱 / 吉他"] }, ja: { role: "ボーカル / ギター", intro: "阿夜 / Marz23はTRASHのボーカル／ギターとしてバンドの中心に立つ。", bio: "阿夜 / Marz23はTRASHのボーカル／ギターとして、バンドの感情の直線性とライブの強度をつなぐ存在。", instruments: ["ボーカル", "ギター"], highlights: ["TRASH 現メンバー", "ボーカル / ギター"] }, ko: { role: "보컬 / 기타", intro: "阿夜 / Marz23는 TRASH의 보컬/기타로 밴드의 중심에 선다.", bio: "阿夜 / Marz23는 TRASH의 보컬/기타로 밴드의 감정적 직선성과 라이브 에너지를 연결한다.", instruments: ["보컬", "기타"], highlights: ["TRASH 현 멤버", "보컬 / 기타"] } },
  euan: { zh: { role: "吉他", intro: "頤原 / Euan 形塑 TRASH 的吉他聲響，讓樂團保有旋律邊緣、空間感與舞台張力。", bio: "頤原 / Euan 以吉他架構 TRASH 的旋律輪廓、聲響空間與現場壓力，是樂團聲音辨識度的重要支點。", instruments: ["吉他"], highlights: ["TRASH 現任成員", "吉他"] }, ja: { role: "ギター", intro: "頤原 / EuanはTRASHのギターサウンドを形づくる。", bio: "頤原 / EuanはTRASHのメロディックな輪郭、空間性、ライブでの圧力をギターで支える。", instruments: ["ギター"], highlights: ["TRASH 現メンバー", "ギター"] }, ko: { role: "기타", intro: "頤原 / Euan은 TRASH의 기타 사운드를 형성한다.", bio: "頤原 / Euan은 기타로 TRASH의 멜로디, 공간감, 라이브의 압력을 만든다.", instruments: ["기타"], highlights: ["TRASH 현 멤버", "기타"] } },
  tteng: { zh: { role: "貝斯", intro: "博文 / TTeng 以貝斯支撐 TRASH 的低頻重量、律動推進與節奏組衝擊。", bio: "博文 / TTeng 以貝斯線條穩住 TRASH 的重心，讓歌曲在重量、動態與現場推進之間保持張力。", instruments: ["貝斯"], highlights: ["TRASH 現任成員", "貝斯"] }, ja: { role: "ベース", intro: "博文 / TTengはベースでTRASHの重心を支える。", bio: "博文 / TTengはベースラインでバンドの重量感、動き、リズムセクションの推進力を支える。", instruments: ["ベース"], highlights: ["TRASH 現メンバー", "ベース"] }, ko: { role: "베이스", intro: "博文 / TTeng은 베이스로 TRASH의 중심을 지탱한다.", bio: "博文 / TTeng은 베이스 라인으로 밴드의 무게, 움직임, 리듬 섹션의 힘을 만든다.", instruments: ["베이스"], highlights: ["TRASH 현 멤버", "베이스"] } },
  "kuei-gun": { zh: { role: "鼓手", intro: "魁剛 / Kuei gun 以鼓組推動 TRASH 的身體感、速度與現場能量。", bio: "魁剛 / Kuei gun 以鼓組承擔歌曲的身體性、現場推進力與動態起伏，讓 TRASH 的舞台能量持續向前。", instruments: ["鼓手"], highlights: ["TRASH 現任成員", "鼓手"] }, ja: { role: "ドラム", intro: "魁剛 / Kuei gunはドラムでTRASHを前へ押し出す。", bio: "魁剛 / Kuei gunはドラムで楽曲の身体性、ライブの推進力、ダイナミクスを担う。", instruments: ["ドラム"], highlights: ["TRASH 現メンバー", "ドラム"] }, ko: { role: "드럼", intro: "魁剛 / Kuei gun은 드럼으로 TRASH를 밀어붙인다.", bio: "魁剛 / Kuei gun은 드럼으로 곡의 물리적 에너지와 라이브의 추진력을 만든다.", instruments: ["드럼"], highlights: ["TRASH 현 멤버", "드럼"] } },
};

const timelineZh: Record<string, Partial<TimelineEvent>> = {
  "2009-Formation": { title: "成團", description: "TRASH 於 2009 年 12 月在台北成團，從團練、展演空間與獨立舞台累積出樂團故事的起點。", tag: "起點" },
  "2012-First Album / Gongliao Ocean Music Festival": { title: "首張專輯 / 貢寮海洋音樂祭", description: "TRASH 發行首張同名專輯，並進入貢寮海洋音樂祭相關肯定的早期階段，讓樂團在台灣現場圈建立能見度。", tag: "早期資料" },
  "2014/2015-Reset / 歸零 and Golden Melody Awards Nomination": { title: "《歸零》與金曲獎入圍肯定", description: "《歸零》成為 TRASH 早期作品中的重要節點，將樂團帶入金曲獎最佳樂團入圍肯定與更廣泛的公眾討論。", tag: "獎項脈絡" },
  "2017-11:11 / Japan Recording Period": { title: "《11:11》與日本錄音時期", description: "《11:11》標記另一個重要創作階段，延伸樂團的錄音語言，也連結內容資料包中提及的日本錄音時期。", tag: "錄音" },
  "2019-Warner Music Phase": { title: "華納音樂階段", description: "TRASH 於 2019 年進入華納音樂階段，在更廣的平台上發行作品，同時維持以吉他、團體力量與現場衝擊為核心的樂團辨識度。", tag: "唱片" },
  "2020-Never Die": { title: "《Never Die》", description: "《Never Die》是 TRASH 作品資料庫中的精簡發行篇章，延續樂團向下一階段前進的動能。", tag: "作品" },
  "2021-Holy Trip!": { title: "《Holy Trip!》", description: "《Holy Trip!》拓展 TRASH 的完整專輯敘事，將旋律重量與失真聲響放入更大的官方作品資料庫。", tag: "作品" },
  "2024-The Last Train of Happiness / 幸福的末班車": { title: "《幸福的末班車》", description: "《幸福的末班車》成為十五週年核心專輯篇章，連結樂團走過的長路、新的舞台記憶與後續肯定。", tag: "作品" },
  "2024-Taipei Arena": { title: "台北小巨蛋", description: "TRASH 將十五週年演唱會篇章帶上台北小巨蛋，把樂團紀念時刻推進成重要場館里程碑。", tag: "場館" },
  "2025-Kaohsiung Arena": { title: "高雄巨蛋", description: "TRASH 將十五週年演唱會篇章延伸至高雄巨蛋，讓場館篇章從台北繼續往南展開。", tag: "場館" },
  "2025-Golden Melody Awards Best Band": { title: "金曲獎最佳樂團", description: "TRASH 於 2025 年獲得金曲獎最佳樂團，成為樂團長期作品與現場故事中的重要肯定。", tag: "獎項" },
};

const timelineJa: Record<string, Partial<TimelineEvent>> = {
  "2009-Formation": { title: "結成", description: "TRASHは2009年12月に台北で結成され、リハーサル、ライブハウス、インディペンデントなステージから物語を始めた。", tag: "始まり" },
  "2012-First Album / Gongliao Ocean Music Festival": { title: "初アルバム / Gongliao Ocean Music Festival", description: "セルフタイトルの初アルバムを発表し、Gongliao Ocean Music Festivalに関連する評価を通じて初期の存在感を高めた。", tag: "初期アーカイブ" },
  "2014/2015-Reset / 歸零 and Golden Melody Awards Nomination": { title: "歸零 / Reset と Golden Melody Awards ノミネート", description: "歸零 / Resetは初期作品の重要な節目となり、Golden Melody Awardsでの評価へとつながった。", tag: "評価" },
  "2017-11:11 / Japan Recording Period": { title: "11:11 と日本レコーディング期", description: "11:11はTRASHの録音表現を広げた重要な制作期として、公式アーカイブに記録されている。", tag: "録音" },
  "2019-Warner Music Phase": { title: "Warner Music Taiwan期", description: "TRASHはWarner Music Taiwan期に入り、より広い発信基盤の上でバンドのライブ感とギターサウンドを保ち続けた。", tag: "レーベル" },
  "2020-Never Die": { title: "Never Die", description: "Never DieはTRASHの作品アーカイブにおけるコンパクトなリリース章であり、次の段階への推進力を残した。", tag: "作品" },
  "2021-Holy Trip!": { title: "Holy Trip!", description: "Holy Trip!はTRASHのアルバム表現をさらに広げ、メロディ、重量感、ディストーションを大きな物語へ接続した。", tag: "作品" },
  "2024-The Last Train of Happiness / 幸福的末班車": { title: "幸福的末班車", description: "幸福的末班車は15周年期の中心作品として、バンドの歩み、新たなステージの記憶、後の評価をつないだ。", tag: "作品" },
  "2024-Taipei Arena": { title: "台北アリーナ", description: "TRASHは15周年公演を台北アリーナへ進め、バンドにとって重要な会場マイルストーンを刻んだ。", tag: "会場" },
  "2025-Kaohsiung Arena": { title: "高雄アリーナ", description: "15周年公演の章は高雄アリーナへ広がり、台北から南へと会場の物語をつないだ。", tag: "会場" },
  "2025-Golden Melody Awards Best Band": { title: "Golden Melody Awards Best Band", description: "TRASHは2025年にGolden Melody Awards Best Bandを受賞し、長年の作品とライブの歩みに大きな評価を得た。", tag: "受賞" },
};

const timelineKo: Record<string, Partial<TimelineEvent>> = {
  "2009-Formation": { title: "결성", description: "TRASH는 2009년 12월 타이베이에서 결성되어 합주실, 공연장, 인디 무대에서 밴드의 출발점을 만들었다.", tag: "시작" },
  "2012-First Album / Gongliao Ocean Music Festival": { title: "첫 앨범 / Gongliao Ocean Music Festival", description: "셀프 타이틀 첫 앨범을 발표하고 Gongliao Ocean Music Festival 관련 인정을 통해 초기 존재감을 쌓았다.", tag: "초기 아카이브" },
  "2014/2015-Reset / 歸零 and Golden Melody Awards Nomination": { title: "歸零 / Reset 과 Golden Melody Awards 노미네이트", description: "歸零 / Reset은 초기 작품의 중요한 지점이 되었고 Golden Melody Awards의 인정으로 이어졌다.", tag: "평가" },
  "2017-11:11 / Japan Recording Period": { title: "11:11 과 일본 녹음기", description: "11:11은 TRASH의 녹음 언어를 확장한 주요 제작 시기로 공식 아카이브에 기록되어 있다.", tag: "녹음" },
  "2019-Warner Music Phase": { title: "Warner Music Taiwan 단계", description: "TRASH는 Warner Music Taiwan 단계에 들어서며 더 넓은 플랫폼 위에서도 라이브 에너지와 기타 중심의 정체성을 유지했다.", tag: "레이블" },
  "2020-Never Die": { title: "Never Die", description: "Never Die는 TRASH 작품 아카이브의 짧고 집중된 릴리스 챕터로 다음 단계의 추진력을 남겼다.", tag: "작품" },
  "2021-Holy Trip!": { title: "Holy Trip!", description: "Holy Trip!는 TRASH의 앨범 서사를 넓히며 멜로디, 무게감, 디스토션을 더 큰 이야기로 연결했다.", tag: "작품" },
  "2024-The Last Train of Happiness / 幸福的末班車": { title: "幸福的末班車", description: "幸福的末班車는 15주년 시기의 중심 작품으로 밴드의 여정과 새로운 무대 기억, 이후의 인정을 연결했다.", tag: "작품" },
  "2024-Taipei Arena": { title: "Taipei Arena", description: "TRASH는 15주년 공연을 Taipei Arena로 확장하며 중요한 공연장 마일스톤을 만들었다.", tag: "공연장" },
  "2025-Kaohsiung Arena": { title: "Kaohsiung Arena", description: "15주년 공연 챕터는 Kaohsiung Arena로 이어지며 타이베이에서 남부로 확장되었다.", tag: "공연장" },
  "2025-Golden Melody Awards Best Band": { title: "Golden Melody Awards Best Band", description: "TRASH는 2025년 Golden Melody Awards Best Band를 수상하며 오랜 작품과 라이브 여정에 대한 중요한 인정을 받았다.", tag: "수상" },
};

const videoZh: Record<string, Partial<Video>> = {
  "official-music-videos": { title: "官方音樂錄影帶", category: "Official Music Videos", description: "觀看官方音樂錄影帶與視覺發行作品。", dateLabel: "YouTube 官方頻道" },
  "live-sessions": { title: "現場演出", category: "Live Sessions", description: "瀏覽精選現場演出與演出企劃內容。", dateLabel: "YouTube 官方頻道" },
  "behind-the-scenes": { title: "幕後花絮", category: "Behind The Scenes", description: "跟著 TRASH 進入錄音、巡演與製作現場。", dateLabel: "YouTube 官方頻道" },
  releases: { title: "發行作品", category: "Releases", description: "瀏覽官方音源與發行上架內容。", dateLabel: "YouTube 官方頻道" },
};

const videoJa: Record<string, Partial<Video>> = {
  "official-music-videos": { title: "公式ミュージックビデオ", description: "公式ミュージックビデオと映像作品を見る。", dateLabel: "YouTube公式チャンネル" },
  "live-sessions": { title: "ライブ映像", description: "ライブ演奏とセッション映像をチェック。", dateLabel: "YouTube公式チャンネル" },
  "behind-the-scenes": { title: "舞台裏", description: "スタジオ、ツアー、制作の裏側を追う。", dateLabel: "YouTube公式チャンネル" },
  releases: { title: "リリース", description: "公式音源とリリース映像を見る。", dateLabel: "YouTube公式チャンネル" },
};

const videoKo: Record<string, Partial<Video>> = {
  "official-music-videos": { title: "공식 뮤직비디오", description: "공식 뮤직비디오와 비주얼 릴리스를 확인하세요.", dateLabel: "YouTube 공식 채널" },
  "live-sessions": { title: "라이브 영상", description: "라이브 퍼포먼스와 세션 콘텐츠를 살펴보세요.", dateLabel: "YouTube 공식 채널" },
  "behind-the-scenes": { title: "비하인드", description: "스튜디오, 투어, 제작 과정을 따라갑니다.", dateLabel: "YouTube 공식 채널" },
  releases: { title: "릴리스", description: "공식 음원과 릴리스 업로드를 확인하세요.", dateLabel: "YouTube 공식 채널" },
};

const showZh: Record<string, Partial<Show>> = {
  "2024-12-14": {
    milestoneLabel: "台北小巨蛋首登場",
    description: "十五週年場館里程碑，也是 TRASH 首次台北小巨蛋篇章，將樂團長期累積的現場故事推向更大的舞台。",
    country: "台灣",
    status: "Past",
  },
  "2025-05-03": {
    milestoneLabel: "高雄巨蛋篇章",
    description: "《幸福的末班車》十五週年篇章延伸至南部的重要場館節點，讓樂團的場館故事從台北持續前進到高雄。",
    country: "台灣",
    status: "Past",
  },
};

const showJa: Record<string, Partial<Show>> = {
  "2024-12-14": {
    milestoneLabel: "台北アリーナ初登場",
    description: "TRASH初の台北アリーナ公演として、15周年のライブストーリーをアリーナ規模へ押し上げた節目。",
    city: "台北",
    country: "台湾",
    status: "Past",
  },
  "2025-05-03": {
    milestoneLabel: "高雄アリーナ編",
    description: "The Last Train of Happinessの15周年章を南部へ広げた高雄アリーナの重要な節目。",
    city: "高雄",
    country: "台湾",
    status: "Past",
  },
};

const showKo: Record<string, Partial<Show>> = {
  "2024-12-14": {
    milestoneLabel: "Taipei Arena 데뷔",
    description: "TRASH의 첫 Taipei Arena 챕터로, 15주년 라이브 여정을 아레나 규모로 확장한 이정표.",
    city: "타이베이",
    country: "대만",
    status: "Past",
  },
  "2025-05-03": {
    milestoneLabel: "Kaohsiung Arena 챕터",
    description: "The Last Train of Happiness의 15주년 챕터를 남부로 확장한 Kaohsiung Arena의 주요 이정표.",
    city: "가오슝",
    country: "대만",
    status: "Past",
  },
};

const pressKitZh = {
  ...pressKit,
  tagline: "來自台北的台灣搖滾樂團。",
  officialBio: "TRASH 是 2009 年 12 月成團於台北的台灣搖滾樂團，隸屬華納音樂。官方資料庫串連樂團的獨立舞台根源、持續擴展的作品、十五週年場館里程碑與金曲獎肯定。",
  longBio: "TRASH 於 2009 年 12 月在台北成團，從獨立搖滾現場出發，逐步成為當代台灣搖滾的重要樂團。早期歷程包含 2012 年首張專輯與貢寮海洋音樂祭相關肯定；後續作品《歸零》、《11:11》、《Never Die》、《Holy Trip!》與《幸福的末班車》建立出更完整的歌曲、影像與現場資料庫。此頁提供媒體、主辦與品牌合作方可參考的官方簡介、官方連結、成員資料與素材索取狀態。",
  awards: [
    "2025 年金曲獎最佳樂團。",
    "過往作品曾獲金曲獎相關入圍肯定。",
    "貢寮海洋音樂祭相關肯定。",
    "TODO: confirm official source for exact award names, years, categories, and citation links.",
  ],
  links: pressKit.links.map((link) => ({
    ...link,
    label: link.label === "Official website" ? "官方網站" : link.label,
    note: link.note === "Official website." ? "TRASH 官方網站。" : link.note === "Official YouTube channel." ? "TRASH YouTube 官方頻道。" : link.note === "Official Instagram." ? "TRASH 官方 Instagram。" : link.note === "Official Facebook." ? "TRASH 官方 Facebook。" : link.note === "Official Spotify artist page." ? "TRASH Spotify 藝人頁面。" : link.note === "Official Apple Music artist page." ? "TRASH Apple Music 藝人頁面。" : link.note === "Label artist page." ? "華納音樂藝人頁面。" : link.note,
  })),
  downloads: [
    { title: "官方媒體照片", description: "來信索取", href: "" },
    { title: "Logo 素材包", description: "來信索取", href: "" },
    { title: "技術需求資料", description: "來信索取", href: "" },
  ],
  usageNotes: [
    "照片使用需依核准範圍並標示指定授權資訊。",
    "Logo 不得任意變形或改作。",
    "涉及事實資訊的媒體文字，未經確認不應自行改寫。",
    "TODO: confirm official usage terms and legal language.",
  ],
};

const contactZh = {
  ...contactContent,
  sections: [
    { title: "媒體 / 採訪邀約", body: "採訪、媒體資料、官方照片與新聞相關需求。", contact: "經紀/依凡 / 華納音樂", email: "passion0728@gmail.com" },
    { title: "演出 / 商演邀約", body: "演唱會、音樂祭、校園、商演與各類現場演出邀請。", contact: "經紀/依凡", email: "passion0728@gmail.com" },
    { title: "品牌 / 商業合作", body: "品牌合作、活動企劃、贊助與創意合作提案。", contact: "經紀/依凡", email: "passion0728@gmail.com" },
    { title: "唱片 / 音樂商務", body: "授權、唱片相關溝通與發行相關事務。", contact: "華納音樂" },
    { title: "一般聯絡", body: "其他 TRASH 官方相關聯絡事項。", contact: "經紀/依凡", email: "passion0728@gmail.com" },
  ],
};

const pressKitJa = {
  ...pressKit,
  tagline: "台北発の台湾ロックバンド。",
  officialBio: "TRASHは2009年12月に台北で結成された台湾のロックバンド。Warner Music Taiwanに所属し、インディペンデントなステージのルーツ、広がり続ける作品群、15周年のアリーナマイルストーン、Golden Melodyでの評価を公式アーカイブとして記録している。",
  longBio: "TRASHは2009年12月に台北で結成され、インディペンデントなロックシーンから現代台湾ロックを代表する存在へと成長した。メディア、プロモーター、ブランドパートナー向けに、このページでは公式プロフィール、公式リンク、現メンバー情報、素材リクエストの状態をまとめている。",
  awards: [
    "2025年 Golden Melody Awards Best Band。",
    "過去作品に関連するGolden Melody Awardsノミネート。",
    "Gongliao Ocean Music Festival関連の評価。",
    "TODO: confirm official source for exact award names, years, categories, and citation links.",
  ],
  links: pressKit.links.map((link) => ({
    ...link,
    label: link.label === "Official website" ? "公式サイト" : link.label,
    note: link.note === "Official website." ? "TRASH公式サイト。" : link.note === "Official YouTube channel." ? "TRASH YouTube公式チャンネル。" : link.note === "Official Instagram." ? "TRASH公式Instagram。" : link.note === "Official Facebook." ? "TRASH公式Facebook。" : link.note === "Official Spotify artist page." ? "TRASH Spotifyアーティストページ。" : link.note === "Official Apple Music artist page." ? "TRASH Apple Musicアーティストページ。" : link.note === "Label artist page." ? "レーベルのアーティストページ。" : link.note,
  })),
  downloads: [
    { title: "プレス写真", description: "リクエスト制", href: "" },
    { title: "ロゴパッケージ", description: "リクエスト制", href: "" },
    { title: "テクニカルライダー", description: "リクエスト制", href: "" },
  ],
  usageNotes: [
    "写真は承認された範囲と指定クレジットに従って使用してください。",
    "ロゴの変形や改変はできません。",
    "事実情報を含むプレスコピーは、確認なしに編集しないでください。",
    "TODO: confirm official usage terms and legal language.",
  ],
};

const pressKitKo = {
  ...pressKit,
  tagline: "타이베이 출신 대만 록 밴드.",
  officialBio: "TRASH는 2009년 12월 타이베이에서 결성된 대만 록 밴드이며 Warner Music Taiwan 소속이다. 공식 아카이브는 인디 무대의 뿌리, 확장되는 디스코그래피, 15주년 아레나 마일스톤, Golden Melody의 인정을 기록한다.",
  longBio: "TRASH는 2009년 12월 타이베이에서 결성되어 인디 록 신에서 현대 대만 록의 주요 밴드로 성장했다. 미디어, 프로모터, 브랜드 파트너를 위해 이 페이지는 공식 프로필, 공식 링크, 현재 멤버 정보, 요청 기반 자료 상태를 정리한다.",
  awards: [
    "2025 Golden Melody Awards Best Band.",
    "이전 작품과 연결된 Golden Melody Awards 노미네이트.",
    "Gongliao Ocean Music Festival 관련 인정.",
    "TODO: confirm official source for exact award names, years, categories, and citation links.",
  ],
  links: pressKit.links.map((link) => ({
    ...link,
    label: link.label === "Official website" ? "공식 웹사이트" : link.label,
    note: link.note === "Official website." ? "TRASH 공식 웹사이트." : link.note === "Official YouTube channel." ? "TRASH YouTube 공식 채널." : link.note === "Official Instagram." ? "TRASH 공식 Instagram." : link.note === "Official Facebook." ? "TRASH 공식 Facebook." : link.note === "Official Spotify artist page." ? "TRASH Spotify 아티스트 페이지." : link.note === "Official Apple Music artist page." ? "TRASH Apple Music 아티스트 페이지." : link.note === "Label artist page." ? "레이블 아티스트 페이지." : link.note,
  })),
  downloads: [
    { title: "프레스 사진", description: "요청 시 제공", href: "" },
    { title: "로고 패키지", description: "요청 시 제공", href: "" },
    { title: "테크니컬 라이더", description: "요청 시 제공", href: "" },
  ],
  usageNotes: [
    "사진은 승인된 범위와 지정 크레딧에 따라 사용해야 합니다.",
    "로고는 변형하거나 수정할 수 없습니다.",
    "사실 정보가 포함된 프레스 카피는 확인 없이 수정하지 않아야 합니다.",
    "TODO: confirm official usage terms and legal language.",
  ],
};

const contactJa = {
  ...contactContent,
  sections: [
    { title: "メディア / 取材依頼", body: "インタビュー、メディア資料、公式写真、プレス関連のご相談。", contact: "經紀/依凡 / 華納音樂", email: "passion0728@gmail.com" },
    { title: "出演 / ライブ依頼", body: "コンサート、フェス、キャンパス、商業イベント、ライブ出演のご相談。", contact: "經紀/依凡", email: "passion0728@gmail.com" },
    { title: "ブランド / パートナーシップ", body: "ブランド提携、キャンペーン、スポンサーシップ、クリエイティブコラボレーション。", contact: "經紀/依凡", email: "passion0728@gmail.com" },
    { title: "レーベル / 音楽ビジネス", body: "音楽ライセンス、レーベル関連、リリースに関する連絡。", contact: "華納音樂" },
    { title: "一般お問い合わせ", body: "その他TRASH公式に関するお問い合わせ。", contact: "經紀/依凡", email: "passion0728@gmail.com" },
  ],
};

const contactKo = {
  ...contactContent,
  sections: [
    { title: "미디어 / 인터뷰 문의", body: "인터뷰, 미디어 자료, 공식 사진, 프레스 관련 요청.", contact: "經紀/依凡 / 華納音樂", email: "passion0728@gmail.com" },
    { title: "공연 / 라이브 문의", body: "콘서트, 페스티벌, 캠퍼스, 상업 공연 및 라이브 초청.", contact: "經紀/依凡", email: "passion0728@gmail.com" },
    { title: "브랜드 / 파트너십", body: "브랜드 파트너십, 캠페인, 스폰서십, 크리에이티브 협업.", contact: "經紀/依凡", email: "passion0728@gmail.com" },
    { title: "레이블 / 음악 비즈니스", body: "음악 라이선싱, 레이블 관련 커뮤니케이션, 릴리스 관련 문의.", contact: "華納音樂" },
    { title: "일반 문의", body: "기타 TRASH 공식 관련 문의.", contact: "經紀/依凡", email: "passion0728@gmail.com" },
  ],
};

export function getPageCopy(locale: Locale) {
  return pageCopy[locale] ?? pageCopy[defaultLocale];
}

export function getAbout(locale: Locale) {
  return aboutTranslations[locale] ?? aboutContent;
}

export function getSite(locale: Locale) {
  if (locale === "zh") {
    return {
      ...siteProfile,
      origin: "台北，台灣",
      founded: "2009 年 12 月",
      label: "華納音樂 / Warner Music Taiwan",
      genres: ["台灣搖滾", "華語搖滾", "另類搖滾", "英式搖滾", "油漬搖滾"],
      heroEyebrow: "台灣搖滾樂團 / 台北",
      heroBody: "TRASH 成立於 2009 年 12 月，以台灣搖滾為核心，融合華語搖滾、另類搖滾、英式搖滾與 Grunge 能量，將愛、失去、記憶與現場舞台化為屬於這個世代的聲音。",
      seo: {
        ...siteProfile.seo,
        description: "TRASH 台灣搖滾樂團官方網站與資料庫，收錄音樂作品、成員、歷史、演出里程碑、最新消息、影音與媒體資料。",
      },
    };
  }
  if (locale === "ja") {
    return {
      ...siteProfile,
      origin: "台北・台湾",
      founded: "2009年12月",
      heroEyebrow: "台湾ロックバンド / 台北",
      heroBody: "2009年12月に台北で結成されたTRASHは、台湾ロック、Mandopop rock、Alternative Rock、Britpop、Grungeを、記憶に残るライブの力へと変えてきた。",
    };
  }
  if (locale === "ko") {
    return {
      ...siteProfile,
      origin: "타이베이・대만",
      founded: "2009년 12월",
      heroEyebrow: "대만 록 밴드 / 타이베이",
      heroBody: "2009년 12월 타이베이에서 결성된 TRASH는 대만 록, Mandopop rock, Alternative Rock, Britpop, Grunge를 강렬한 라이브 에너지로 연결해 왔다.",
    };
  }
  return siteProfile;
}

export function getContact(locale: Locale = defaultLocale) {
  if (locale === "zh") return contactZh;
  if (locale === "ja") return contactJa;
  if (locale === "ko") return contactKo;
  return contactContent;
}

export function getPressKit(locale: Locale = defaultLocale) {
  if (locale === "zh") return pressKitZh;
  if (locale === "ja") return pressKitJa;
  if (locale === "ko") return pressKitKo;
  return pressKit;
}

export function getAlbums(locale: Locale): Album[] {
  return albums.map((album) => ({ ...album, ...(albumText[album.slug]?.[locale] ?? {}) }));
}

export function getMembers(locale: Locale): Member[] {
  return members.map((member) => ({ ...member, ...(memberText[member.slug]?.[locale] ?? {}) }));
}

export function getTimeline(locale: Locale): TimelineEvent[] {
  if (locale === "zh") return timeline.map((event) => ({ ...event, ...(timelineZh[`${event.year}-${event.title}`] ?? {}) }));
  if (locale === "ja") return timeline.map((event) => ({ ...event, ...(timelineJa[`${event.year}-${event.title}`] ?? {}) }));
  if (locale === "ko") return timeline.map((event) => ({ ...event, ...(timelineKo[`${event.year}-${event.title}`] ?? {}) }));
  return timeline;
}

export function getShows(locale: Locale): Show[] {
  if (locale === "zh") return shows.map((show) => ({ ...show, ...(showZh[show.date] ?? {}) }));
  if (locale === "ja") return shows.map((show) => ({ ...show, ...(showJa[show.date] ?? {}) }));
  if (locale === "ko") return shows.map((show) => ({ ...show, ...(showKo[show.date] ?? {}) }));
  return shows;
}

export function getNews(locale: Locale): NewsItem[] {
  if (locale !== "ja" && locale !== "ko") return news;
  return news;
}

export function getVideos(locale: Locale): Video[] {
  if (locale === "zh") return videos.map((video) => ({ ...video, ...(videoZh[video.slug] ?? {}) }));
  if (locale === "ja") return videos.map((video) => ({ ...video, ...(videoJa[video.slug] ?? {}) }));
  if (locale === "ko") return videos.map((video) => ({ ...video, ...(videoKo[video.slug] ?? {}) }));
  return videos;
}

export function getAlbumTypeLabel(type: Album["type"], locale: Locale) {
  if (locale === "zh") {
    if (type === "Album") return "專輯";
    if (type === "Single") return "單曲";
    if (type === "Live") return "現場作品";
  }
  if (locale === "ja") {
    if (type === "Album") return "アルバム";
    if (type === "Single") return "シングル";
    if (type === "Live") return "ライブ作品";
  }
  if (locale === "ko") {
    if (type === "Album") return "앨범";
    if (type === "Single") return "싱글";
    if (type === "Live") return "라이브 작품";
  }
  return type;
}

export function getNewsCategoryLabel(category: NewsItem["category"], locale: Locale) {
  const zhLabels: Record<NewsItem["category"], string> = {
    Awards: "獎項",
    Live: "演出",
    Release: "發行",
    Press: "媒體",
    Archive: "公告",
  };
  const jaLabels: Record<NewsItem["category"], string> = {
    Awards: "受賞",
    Live: "ライブ",
    Release: "リリース",
    Press: "メディア",
    Archive: "アーカイブ",
  };
  const koLabels: Record<NewsItem["category"], string> = {
    Awards: "수상",
    Live: "공연",
    Release: "릴리스",
    Press: "미디어",
    Archive: "아카이브",
  };
  if (locale === "zh") return zhLabels[category];
  if (locale === "ja") return jaLabels[category];
  if (locale === "ko") return koLabels[category];
  return category;
}

export function getShowTypeLabel(type: Show["type"], locale: Locale) {
  const zhLabels: Record<Show["type"], string> = {
    milestone: "里程碑",
    tour: "巡演",
    festival: "音樂祭",
    archive: "演出紀錄",
  };
  const jaLabels: Record<Show["type"], string> = {
    milestone: "マイルストーン",
    tour: "ツアー",
    festival: "フェス",
    archive: "ライブ記録",
  };
  const koLabels: Record<Show["type"], string> = {
    milestone: "마일스톤",
    tour: "투어",
    festival: "페스티벌",
    archive: "공연 기록",
  };
  if (locale === "zh") return zhLabels[type];
  if (locale === "ja") return jaLabels[type];
  if (locale === "ko") return koLabels[type];
  return type;
}

export function getStreamingLabel(label: string, locale: Locale) {
  if (locale === "zh") {
    if (label === "Spotify") return "前往 Spotify 聆聽";
    if (label === "Apple Music") return "前往 Apple Music 聆聽";
  }
  if (locale === "ja") {
    if (label === "Spotify") return "Spotifyで聴く";
    if (label === "Apple Music") return "Apple Musicで聴く";
  }
  if (locale === "ko") {
    if (label === "Spotify") return "Spotify에서 듣기";
    if (label === "Apple Music") return "Apple Music에서 듣기";
  }
  return label;
}
