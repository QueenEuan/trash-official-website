import { MusicContent } from "@/components/pages/MusicContent";
import { prefixedLocales } from "@/lib/i18n/config";
import { localizedMetadata } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localizedMetadata(locale, "/music");
}

export default async function LocalizedMusicPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <MusicContent locale={locale as "zh" | "en" | "ja" | "ko"} />;
}
