import { HeroSection } from "@/components/HeroSection";
import { MemberCard } from "@/components/MemberCard";
import { NewsCard } from "@/components/NewsCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ShowCard } from "@/components/ShowCard";
import { Timeline } from "@/components/Timeline";
import { VideoCard } from "@/components/VideoCard";
import { publicList, publicDateLabel } from "@/lib/publicContent";
import { FallbackImage } from "@/components/FallbackImage";
import { LocalizedLink } from "@/components/i18n/LocalizedLink";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getAlbumTypeLabel, getAlbums, getMembers, getNews, getPageCopy, getShows, getTimeline, getVideos } from "@/lib/i18n/content";

export function HomeContent({ locale = defaultLocale }: { locale?: Locale }) {
  const copy = getPageCopy(locale);
  const localizedAlbums = getAlbums(locale);
  const localizedNews = getNews(locale);
  const localizedVideos = getVideos(locale);
  const localizedTimeline = getTimeline(locale);
  const localizedMembers = getMembers(locale);
  const localizedShows = getShows(locale);
  const latestAlbum = localizedAlbums[0];
  const latestHighlights = publicList(latestAlbum.highlights).slice(0, 3);
  const releaseMeta = [getAlbumTypeLabel(latestAlbum.type, locale), publicDateLabel(latestAlbum.releaseLabel)].filter(Boolean).join(" / ");

  return (
    <>
      <HeroSection locale={locale} />
      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <SectionHeading eyebrow={copy.home.latestRelease} title={latestAlbum.title} body={latestAlbum.summary} />
            <div className="mt-8 grid grid-cols-3 gap-3 border-y border-white/10 py-5">
              {latestHighlights.map((highlight) => (
                <p key={highlight} className="text-xs font-black uppercase tracking-[0.12em] text-zinc-400">{highlight}</p>
              ))}
            </div>
            <LocalizedLink href={`/music/${latestAlbum.slug}`} locale={locale} className="btn-primary mt-8">{copy.home.enterReleaseArchive}</LocalizedLink>
          </div>
          <LocalizedLink href={`/music/${latestAlbum.slug}`} locale={locale} className="group archive-frame grid gap-5 p-4 md:grid-cols-[minmax(220px,360px)_1fr] md:p-5">
            <div className="relative aspect-square overflow-hidden bg-zinc-900 shadow-[0_26px_80px_rgba(0,0,0,0.52)]">
              <FallbackImage src={latestAlbum.cover} fallbackSrc={latestAlbum.fallbackCover} alt={`${latestAlbum.title} 專輯封面`} fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-end p-1 md:p-4">
              <p className="kicker">{releaseMeta}</p>
              <h3 className="mt-3 font-display text-5xl font-black uppercase leading-none text-white md:text-7xl">{latestAlbum.title}</h3>
              {latestAlbum.titleEn && <p className="mt-3 text-lg font-black text-gold">{latestAlbum.titleEn}</p>}
              <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-zinc-500">{latestAlbum.trackCount} {copy.ui.tracks}</p>
              <p className="mt-6 text-sm leading-7 text-zinc-400">{latestAlbum.description[0]}</p>
            </div>
          </LocalizedLink>
        </div>
      </section>
      <section className="section-band">
        <div className="page-shell py-0">
          <SectionHeading eyebrow={copy.home.newsroom} title={copy.home.latestNews} />
          <div className="mt-8">
            {localizedNews.slice(0, 3).map((item) => <NewsCard key={item.slug} item={item} locale={locale} />)}
          </div>
        </div>
      </section>
      <section className="page-shell">
        <SectionHeading eyebrow={copy.home.media} title={copy.home.featuredVideos} body={copy.home.mediaBody} />
        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {localizedVideos.map((video) => <VideoCard key={video.slug} video={video} locale={locale} />)}
        </div>
      </section>
      <section className="section-band">
        <div className="page-shell grid gap-10 py-0 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading eyebrow={copy.home.milestones} title={copy.home.bandHistory} body={copy.home.bandHistoryBody} />
          <Timeline events={localizedTimeline.slice(0, 5)} />
        </div>
      </section>
      <section className="page-shell">
        <SectionHeading eyebrow={copy.home.members} title={copy.home.theBand} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {localizedMembers.map((member) => <MemberCard key={member.slug} member={member} locale={locale} />)}
        </div>
      </section>
      <section className="section-band">
        <div className="page-shell py-0">
          <SectionHeading eyebrow={copy.home.live} title={copy.home.upcomingShows} />
          <div className="mt-8">
            {localizedShows.slice(0, 3).map((show) => <ShowCard key={`${show.venue}-${show.city}`} show={show} locale={locale} />)}
          </div>
        </div>
      </section>
      <section className="page-shell">
        <div className="archive-frame bg-[linear-gradient(135deg,rgba(127,16,24,0.5),rgba(0,0,0,0.9))] p-8 md:p-12">
          <p className="kicker">{copy.home.pressBooking}</p>
          <h2 className="mt-3 max-w-4xl font-display text-4xl font-black uppercase leading-none text-white md:text-6xl">{copy.home.pressCta}</h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <LocalizedLink href="/press-kit" locale={locale} className="btn-primary">{copy.home.pressKit}</LocalizedLink>
            <LocalizedLink href="/contact" locale={locale} className="btn-secondary">{copy.home.contact}</LocalizedLink>
          </div>
        </div>
      </section>
    </>
  );
}
