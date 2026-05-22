import { news } from "@/data/news";
import { NewsDetailContent } from "@/components/pages/NewsDetailContent";
import { localizedMetadata } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return localizedMetadata("zh", `/news/${slug}`);
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <NewsDetailContent params={params} />;
}
