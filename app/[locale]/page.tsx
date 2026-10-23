import { notFound } from "next/navigation";
import { HomeContent } from "@/components/pages/HomeContent";
import { isLocale, prefixedLocales } from "@/lib/i18n/config";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return localizedMetadata(locale, "/");
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <HomeContent locale={locale} />;
}
