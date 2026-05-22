import { LocalizedLink } from "@/components/i18n/LocalizedLink";
import type { Album } from "@/data/albums";
import { isUnconfirmedValue } from "@/lib/publicContent";
import { FallbackImage } from "@/components/FallbackImage";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getPageCopy } from "@/lib/i18n/content";

export function AlbumCard({ album, locale = defaultLocale }: { album: Album; locale?: Locale }) {
  const copy = getPageCopy(locale);
  const yearLabel = isUnconfirmedValue(album.year) ? album.type : `${album.type} / ${album.year}`;

  return (
    <LocalizedLink href={`/music/${album.slug}`} className="group grid gap-5 border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.045),rgba(0,0,0,0.2))] p-4 transition hover:-translate-y-1 hover:border-gold/70 md:grid-cols-[190px_1fr]">
      <div className="relative aspect-square overflow-hidden bg-zinc-900 shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
        <FallbackImage src={album.cover} fallbackSrc={album.fallbackCover} alt={`${album.title} album cover artwork`} fill className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="self-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-300">{yearLabel}</p>
        <h3 className="mt-2 font-display text-4xl font-black uppercase leading-none text-white md:text-5xl">{album.title}</h3>
        {album.titleEn && <p className="mt-1 text-sm font-bold text-gold">{album.titleEn}</p>}
        <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-400">{album.summary}</p>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">{album.trackCount} {copy.ui.tracks}</p>
          <span className="text-xs font-black uppercase tracking-[0.18em] text-gold transition group-hover:text-white">{copy.ui.viewAlbum}</span>
        </div>
      </div>
    </LocalizedLink>
  );
}
