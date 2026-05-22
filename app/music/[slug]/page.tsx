import { albums } from "@/data/albums";
import { AlbumDetailContent } from "@/components/pages/AlbumDetailContent";
import { localizedMetadata } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return albums.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return localizedMetadata("zh", `/music/${slug}`);
}

export default async function AlbumDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <AlbumDetailContent params={params} />;
}
