import { NewsDetailContent } from "@/components/pages/NewsDetailContent";
import { news } from "@/data/news";
import { prefixedLocales } from "@/lib/i18n/config";
import { localizedMetadata } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return prefixedLocales.flatMap((locale) => news.map((item) => ({ locale, slug: item.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  return localizedMetadata(locale, `/news/${slug}`);
}

export default async function LocalizedNewsDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  return <NewsDetailContent params={Promise.resolve({ slug })} locale={locale as "zh" | "en" | "ja" | "ko"} />;
}
