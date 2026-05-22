import { ArrowRight, Play } from "lucide-react";
import { LocalizedLink } from "@/components/i18n/LocalizedLink";
import { FallbackImage } from "@/components/FallbackImage";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getPageCopy, getSite } from "@/lib/i18n/content";

export function HeroSection({ locale = defaultLocale }: { locale?: Locale }) {
  const siteProfile = getSite(locale);
  const copy = getPageCopy(locale);
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
        className="absolute inset-0 object-cover object-[50%_30%] opacity-80 sm:object-[52%_32%] md:object-[center_26%] lg:object-[center_26%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98),rgba(0,0,0,0.68),rgba(0,0,0,0.94)),radial-gradient(circle_at_72%_18%,rgba(127,16,24,0.52),transparent_38%),linear-gradient(180deg,transparent_62%,#050505_100%)]" />
      <div className="absolute left-0 right-0 top-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
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
            <LocalizedLink className="btn-primary" href="/music/the-last-train-of-happiness">
              {copy.ui.latestRelease} <ArrowRight size={18} />
            </LocalizedLink>
            <LocalizedLink className="btn-secondary" href="/media">
              <Play size={18} /> {copy.ui.watchVideos}
            </LocalizedLink>
          </div>
        </div>
        <aside className="archive-frame p-6 lg:mb-3">
          <p className="kicker">{copy.ui.currentChapter}</p>
          <p className="mt-5 font-display text-4xl font-black uppercase leading-none text-white md:text-[2.65rem]">幸福的末班車</p>
          <dl className="mt-7 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <div>
              <dt className="text-[0.64rem] font-bold uppercase tracking-[0.16em] text-zinc-500">{copy.ui.formed}</dt>
              <dd className="mt-2 whitespace-nowrap text-base font-black text-silver md:text-lg">{siteProfile.founded}</dd>
            </div>
            <div>
              <dt className="text-[0.64rem] font-bold uppercase tracking-[0.16em] text-zinc-500">{copy.ui.award}</dt>
              <dd className="mt-2 whitespace-nowrap text-base font-black text-silver md:text-lg">2025</dd>
            </div>
            <div>
              <dt className="text-[0.64rem] font-bold uppercase tracking-[0.16em] text-zinc-500">{copy.ui.base}</dt>
              <dd className="mt-2 whitespace-nowrap text-base font-black text-silver md:text-lg">{siteProfile.origin}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
