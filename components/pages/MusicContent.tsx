import { AlbumCard } from "@/components/AlbumCard";
import { SectionHeading } from "@/components/SectionHeading";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getAlbums, getPageCopy } from "@/lib/i18n/content";

export function MusicContent({ locale = defaultLocale }: { locale?: Locale }) {
  const copy = getPageCopy(locale);
  const albums = getAlbums(locale);
  return (
    <div className="page-shell">
      <SectionHeading eyebrow={copy.music.eyebrow} title={copy.music.title} body={copy.music.body} />
      <div className="mt-10 grid gap-6">
        {albums.map((album) => <AlbumCard key={album.slug} album={album} locale={locale} />)}
      </div>
    </div>
  );
}

