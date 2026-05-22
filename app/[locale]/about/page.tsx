import { AboutContent } from "@/components/pages/AboutContent";
import { prefixedLocales } from "@/lib/i18n/config";
import { localizedMetadata } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localizedMetadata(locale, "/about");
}

export default async function LocalizedAboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <AboutContent locale={locale as "zh" | "en" | "ja" | "ko"} />;
}
