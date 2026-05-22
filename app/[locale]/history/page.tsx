import { HistoryContent } from "@/components/pages/HistoryContent";
import { prefixedLocales } from "@/lib/i18n/config";
import { localizedMetadata } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localizedMetadata(locale, "/history");
}

export default async function LocalizedHistoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <HistoryContent locale={locale as "zh" | "en" | "ja" | "ko"} />;
}
