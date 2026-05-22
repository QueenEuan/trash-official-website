import { AlbumDetailContent } from "@/components/pages/AlbumDetailContent";
import { albums } from "@/data/albums";
import { prefixedLocales } from "@/lib/i18n/config";
import { localizedMetadata } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return prefixedLocales.flatMap((locale) => albums.map((album) => ({ locale, slug: album.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  return localizedMetadata(locale, `/music/${slug}`);
}

export default async function LocalizedAlbumDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  return <AlbumDetailContent params={Promise.resolve({ slug })} locale={locale as "zh" | "en" | "ja" | "ko"} />;
}
