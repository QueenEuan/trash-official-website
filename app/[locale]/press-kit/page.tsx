import { PressKitContent } from "@/components/pages/PressKitContent";
import { prefixedLocales } from "@/lib/i18n/config";
import { localizedMetadata } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localizedMetadata(locale, "/press-kit");
}

export default async function LocalizedPressKitPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PressKitContent locale={locale as "zh" | "en" | "ja" | "ko"} />;
}
