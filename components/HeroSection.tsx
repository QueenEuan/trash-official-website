import { ArrowRight, Play } from "lucide-react";
import { LocalizedLink } from "@/components/i18n/LocalizedLink";
import { FallbackImage } from "@/components/FallbackImage";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getPageCopy, getSite } from "@/lib/i18n/content";

const chapterMetadata: Record<Locale, { label: string; title: string; items: { label: string; value: string }[] }> = {
  zh: {
    label: "最新單曲",
    title: "只剩後悔在等待",
    items: [
      { label: "成立", value: "2009 年 12 月" },
      { label: "獎項", value: "2025 金曲獎最佳樂團" },
      { label: "基地", value: "台北・台灣" },
    ],
  },
  en: {
    label: "Latest Single",
    title: "I don’t belong here",
    items: [
      { label: "Formed", value: "December 2009" },
      { label: "Award", value: "2025 Golden Melody Awards — Best Band" },
      { label: "Base", value: "Taipei, Taiwan" },
    ],
  },
  ja: {
    label: "最新シングル",
    title: "只剩後悔在等待",
    items: [
      { label: "結成", value: "2009年12月" },
      { label: "受賞", value: "2025 金曲奨 最優秀バンド賞" },
      { label: "拠点", value: "台北・台湾" },
    ],
  },
  ko: {
    label: "최신 싱글",
    title: "只剩後悔在等待",
    items: [
      { label: "결성", value: "2009년 12월" },
      { label: "수상", value: "2025 골든 멜로디 어워즈 최우수 밴드상" },
      { label: "거점", value: "타이베이・대만" },
    ],
  },
};

export function HeroSection({ locale = defaultLocale }: { locale?: Locale }) {
  const siteProfile = getSite(locale);
  const copy = getPageCopy(locale);
  const chapter = chapterMetadata[locale] ?? chapterMetadata[defaultLocale];
  const heroAlt = locale === "zh" ? "TRASH 官方主視覺照片" : "TRASH official hero image";

  return (
    <section className="relative min-h-[90vh] overflow-hidden border-b border-white/10">
      <FallbackImage
        src={siteProfile.assets.hero}
        fallbackSrc={siteProfile.assets.fallbackHero}
        alt={heroAlt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover object-[50%_30%] sm:object-[52%_32%] md:object-[center_26%] lg:object-[center_26%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(5,5,5,0.82)_72%,#050505_100%),linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.3)_55%,rgba(0,0,0,0.1)_100%)]" />
      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl content-end gap-10 px-4 pb-12 pt-28 md:px-5 md:pb-16 lg:grid-cols-[1fr_380px] lg:items-end">
        <div className="max-w-5xl">
          <p className="kicker">{siteProfile.heroEyebrow}</p>
          <h1 className="mt-7 text-balance font-display text-7xl font-black uppercase leading-[0.78] text-white sm:text-8xl lg:text-[11rem]">
            TRASH
          </h1>
          <div className="metal-rule mt-8 max-w-lg" />
          <p className="mt-8 max-w-3xl text-pretty text-lg leading-8 text-zinc-300 md:text-2xl md:leading-10">
            {siteProfile.heroBody}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 sm:gap-5">
            <LocalizedLink className="btn-primary" href="/media" locale={locale}>
              <Play size={18} /> {copy.ui.watchVideos}
            </LocalizedLink>
            <LocalizedLink className="btn-secondary" href="/music" locale={locale}>
              {copy.ui.discography} <ArrowRight size={18} />
            </LocalizedLink>
          </div>
        </div>
        <aside className="archive-frame p-6 lg:mb-3">
          <p className="kicker">{chapter.label}</p>
          <p className="mt-5 text-pretty font-display text-3xl font-black uppercase leading-[0.92] text-white md:text-[2.45rem]">{chapter.title}</p>
          <dl className="mt-7 grid gap-4 border-t border-white/10 pt-6">
            {chapter.items.map((item) => (
              <div key={item.label} className="grid gap-1.5">
                <dt className="text-[0.64rem] font-bold uppercase tracking-[0.16em] text-zinc-500">{item.label}</dt>
                <dd className="text-pretty text-base font-black leading-snug text-silver md:text-lg">{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
