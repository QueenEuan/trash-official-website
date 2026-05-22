import { MediaContent } from "@/components/pages/MediaContent";
import { prefixedLocales } from "@/lib/i18n/config";
import { localizedMetadata } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localizedMetadata(locale, "/media");
}

export default async function LocalizedMediaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <MediaContent locale={locale as "zh" | "en" | "ja" | "ko"} />;
}
