import { notFound } from "next/navigation";
import { AlbumCard } from "@/components/AlbumCard";
import { FallbackImage } from "@/components/FallbackImage";
import { isPublicSafe, isUnconfirmedValue, publicDateLabel, publicList, publicText } from "@/lib/publicContent";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getAlbumTypeLabel, getAlbums, getPageCopy, getStreamingLabel } from "@/lib/i18n/content";


export async function AlbumDetailContent({ params, locale = defaultLocale }: { params: Promise<{ slug: string }>; locale?: Locale }) {
  const { slug } = await params;
  const copy = getPageCopy(locale);
  const albums = getAlbums(locale);
  const album = albums.find((item) => item.slug === slug);
  if (!album) notFound();
  const highlights = publicList(album.highlights);
  const description = publicList(album.description);
  const credits = publicList(album.credits);
  const links = album.links.filter((link) => link.href);
  const tracks = album.tracks.filter((track) => isPublicSafe(track.title));
  const releaseDate = publicDateLabel(album.releaseLabel);
  const albumType = getAlbumTypeLabel(album.type, locale);
  const releaseMeta = [albumType, releaseDate].filter(Boolean).join(" / ");
  const year = isUnconfirmedValue(album.year) ? "" : String(album.year);

  return (
    <div className="page-shell">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div className="relative aspect-square overflow-hidden border border-white/10 bg-zinc-900 shadow-[0_28px_90px_rgba(0,0,0,0.55)]">
          <FallbackImage src={album.cover} fallbackSrc={album.fallbackCover} alt={`${album.title} 專輯封面`} fill className="object-cover" />
        </div>
        <div className="self-end">
          <p className="kicker">{releaseMeta || albumType}</p>
          <h1 className="mt-4 font-display text-6xl font-black uppercase leading-[0.88] text-white md:text-8xl">{album.title}</h1>
          {album.titleEn && <p className="mt-3 text-2xl font-bold text-gold">{album.titleEn}</p>}
          <div className="metal-rule mt-6 max-w-sm" />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{album.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((highlight) => (
              <span key={highlight} className="border border-white/10 bg-zinc-950 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-zinc-300">
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-6 text-lg leading-8 text-zinc-300">
          <h2 className="kicker">{copy.ui.albumNotes}</h2>
          {description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>

        <aside className="archive-frame p-6">
          <h2 className="kicker">{copy.ui.releaseInfo}</h2>
          <dl className="mt-5 space-y-4">
            {year && <div><dt className="text-xs uppercase tracking-[0.16em] text-zinc-500">{copy.ui.year}</dt><dd className="mt-1 text-xl font-bold text-white">{year}</dd></div>}
            <div><dt className="text-xs uppercase tracking-[0.16em] text-zinc-500">{copy.ui.type}</dt><dd className="mt-1 text-xl font-bold text-white">{albumType}</dd></div>
            <div><dt className="text-xs uppercase tracking-[0.16em] text-zinc-500">{copy.ui.trackCount}</dt><dd className="mt-1 text-xl font-bold text-white">{album.trackCount}</dd></div>
            {releaseDate && <div><dt className="text-xs uppercase tracking-[0.16em] text-zinc-500">{copy.ui.date}</dt><dd className="mt-1 text-xl font-bold text-white">{releaseDate}</dd></div>}
          </dl>
          {credits.length > 0 && <div className="mt-7 border-t border-white/10 pt-6">
            <h3 className="kicker">{copy.ui.credits}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">{credits.map((credit) => <li key={credit}>{credit}</li>)}</ul>
          </div>}
          {links.length > 0 && <div className="mt-7 border-t border-white/10 pt-6">
            <h3 className="kicker">{copy.ui.streaming}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-secondary">{getStreamingLabel(link.label, locale)}</a>)}
            </div>
          </div>}
        </aside>
      </div>

      {tracks.length > 0 && <section className="mt-16 archive-frame p-5 md:p-7">
        <h2 className="kicker">{copy.ui.tracklist}</h2>
        <ol className="mt-5 border-t border-white/10">
          {tracks.map((track, index) => (
            <li key={`${track.title}-${index}`} className="grid gap-2 border-b border-white/10 py-5 text-zinc-200 md:grid-cols-[80px_1fr_auto] md:items-center">
              <span className="font-display text-2xl text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-lg font-bold">{track.title}</span>
              <span className="text-sm text-zinc-500">{publicText(track.duration || track.note || "")}</span>
            </li>
          ))}
        </ol>
      </section>}

      <section className="mt-16">
        <h2 className="kicker">{copy.ui.discography}</h2>
        <div className="mt-6 grid gap-6">
          {albums.filter((item) => item.slug !== album.slug).map((item) => <AlbumCard key={item.slug} album={item} locale={locale} />)}
        </div>
      </section>
    </div>
  );
}
