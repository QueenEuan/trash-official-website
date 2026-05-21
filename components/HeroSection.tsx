import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { siteProfile } from "@/data/site";
import { FallbackImage } from "@/components/FallbackImage";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden border-b border-white/10">
      <FallbackImage
        src={siteProfile.assets.hero}
        fallbackSrc={siteProfile.assets.fallbackHero}
        alt="TRASH official hero image"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover object-[58%_34%] opacity-80 md:object-[center_34%] lg:object-[center_34%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98),rgba(0,0,0,0.68),rgba(0,0,0,0.94)),radial-gradient(circle_at_72%_18%,rgba(127,16,24,0.52),transparent_38%),linear-gradient(180deg,transparent_62%,#050505_100%)]" />
      <div className="absolute left-0 right-0 top-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl content-end gap-9 px-4 pb-12 pt-28 md:px-5 md:pb-16 lg:grid-cols-[1fr_360px] lg:items-end">
        <div className="max-w-5xl">
          <p className="kicker">{siteProfile.heroEyebrow}</p>
          <h1 className="mt-5 text-balance font-display text-7xl font-black uppercase leading-[0.78] text-white sm:text-8xl lg:text-[11rem]">
            TRASH
          </h1>
          <div className="metal-rule mt-7 max-w-lg" />
          <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-zinc-300 md:text-2xl">
            {siteProfile.heroBody}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link className="btn-primary" href="/music/the-last-train-of-happiness">
              Latest Release <ArrowRight size={18} />
            </Link>
            <Link className="btn-secondary" href="/media">
              <Play size={18} /> Watch Videos
            </Link>
          </div>
        </div>
        <aside className="archive-frame p-5 lg:mb-3">
          <p className="kicker">Current Chapter</p>
          <p className="mt-4 font-display text-4xl font-black uppercase leading-none text-white">幸福的末班車</p>
          <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
            <div>
              <dt className="text-[0.64rem] font-bold uppercase tracking-[0.16em] text-zinc-500">Formed</dt>
              <dd className="mt-1 text-lg font-black text-silver">{siteProfile.founded}</dd>
            </div>
            <div>
              <dt className="text-[0.64rem] font-bold uppercase tracking-[0.16em] text-zinc-500">Award</dt>
              <dd className="mt-1 text-lg font-black text-silver">2025</dd>
            </div>
            <div>
              <dt className="text-[0.64rem] font-bold uppercase tracking-[0.16em] text-zinc-500">Base</dt>
              <dd className="mt-1 text-lg font-black text-silver">{siteProfile.origin}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
