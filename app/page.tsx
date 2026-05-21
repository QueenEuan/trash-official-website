import { HeroSection } from "@/components/HeroSection";
import { MemberCard } from "@/components/MemberCard";
import { NewsCard } from "@/components/NewsCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ShowCard } from "@/components/ShowCard";
import { Timeline } from "@/components/Timeline";
import { VideoCard } from "@/components/VideoCard";
import { albums } from "@/data/albums";
import { members } from "@/data/members";
import { news } from "@/data/news";
import { shows } from "@/data/shows";
import { timeline } from "@/data/timeline";
import { videos } from "@/data/videos";
import { publicList, publicDateLabel } from "@/lib/publicContent";
import { FallbackImage } from "@/components/FallbackImage";
import Link from "next/link";

export default function Home() {
  const latestAlbum = albums[0];
  const latestHighlights = publicList(latestAlbum.highlights).slice(0, 3);
  const releaseMeta = [latestAlbum.type, publicDateLabel(latestAlbum.releaseLabel)].filter(Boolean).join(" / ");

  return (
    <>
      <HeroSection />
      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Latest Release" title={latestAlbum.title} body={latestAlbum.summary} />
            <div className="mt-8 grid grid-cols-3 gap-3 border-y border-white/10 py-5">
              {latestHighlights.map((highlight) => (
                <p key={highlight} className="text-xs font-black uppercase tracking-[0.12em] text-zinc-400">{highlight}</p>
              ))}
            </div>
            <Link href={`/music/${latestAlbum.slug}`} className="btn-primary mt-8">Enter Release Archive</Link>
          </div>
          <Link href={`/music/${latestAlbum.slug}`} className="group archive-frame grid gap-5 p-4 md:grid-cols-[minmax(220px,360px)_1fr] md:p-5">
            <div className="relative aspect-square overflow-hidden bg-zinc-900 shadow-[0_26px_80px_rgba(0,0,0,0.52)]">
              <FallbackImage src={latestAlbum.cover} fallbackSrc={latestAlbum.fallbackCover} alt={`${latestAlbum.title} album cover artwork`} fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-end p-1 md:p-4">
              <p className="kicker">{releaseMeta}</p>
              <h3 className="mt-3 font-display text-5xl font-black uppercase leading-none text-white md:text-7xl">{latestAlbum.title}</h3>
              {latestAlbum.titleEn && <p className="mt-3 text-lg font-black text-gold">{latestAlbum.titleEn}</p>}
              <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-zinc-500">{latestAlbum.trackCount} tracks</p>
              <p className="mt-6 text-sm leading-7 text-zinc-400">{latestAlbum.description[0]}</p>
            </div>
          </Link>
        </div>
      </section>
      <section className="section-band">
        <div className="page-shell py-0">
          <SectionHeading eyebrow="Newsroom" title="Latest News" />
          <div className="mt-8">
            {news.slice(0, 3).map((item) => <NewsCard key={item.slug} item={item} />)}
          </div>
        </div>
      </section>
      <section className="page-shell">
        <SectionHeading eyebrow="Media" title="Featured Videos" body="Music videos, live cuts, and behind-the-scenes footage in one visual archive." />
        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {videos.map((video) => <VideoCard key={video.slug} video={video} />)}
        </div>
      </section>
      <section className="section-band">
        <div className="page-shell grid gap-10 py-0 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading eyebrow="Milestones" title="Band History" body="From early independent stages to 歸零, 11:11, Holy Trip!, 幸福的末班車, arena concerts, and the Golden Melody Awards, this archive traces TRASH as a band that kept turning pressure into momentum." />
          <Timeline events={timeline.slice(0, 5)} />
        </div>
      </section>
      <section className="page-shell">
        <SectionHeading eyebrow="Members" title="The Band" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => <MemberCard key={member.slug} member={member} />)}
        </div>
      </section>
      <section className="section-band">
        <div className="page-shell py-0">
          <SectionHeading eyebrow="Live" title="Upcoming Shows" />
          <div className="mt-8">
            {shows.slice(0, 3).map((show) => <ShowCard key={`${show.venue}-${show.city}`} show={show} />)}
          </div>
        </div>
      </section>
      <section className="page-shell">
        <div className="archive-frame bg-[linear-gradient(135deg,rgba(127,16,24,0.5),rgba(0,0,0,0.9))] p-8 md:p-12">
          <p className="kicker">Press / Booking</p>
          <h2 className="mt-3 max-w-4xl font-display text-4xl font-black uppercase leading-none text-white md:text-6xl">Approved assets, booking contacts, and official materials.</h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/press-kit" className="btn-primary">Press Kit</Link>
            <Link href="/contact" className="btn-secondary">Contact</Link>
          </div>
        </div>
      </section>
    </>
  );
}
