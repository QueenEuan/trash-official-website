import { LiveContent } from "@/components/pages/LiveContent";
import { prefixedLocales } from "@/lib/i18n/config";
import { localizedMetadata } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localizedMetadata(locale, "/live");
}

export default async function LocalizedLivePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <LiveContent locale={locale as "zh" | "en" | "ja" | "ko"} />;
}
