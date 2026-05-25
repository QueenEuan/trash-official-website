import { LiveCalendarContent } from "@/components/pages/LiveCalendarContent";
import { getLocale, prefixedLocales, type Locale } from "@/lib/i18n/config";
import { getLiveEvents } from "@/lib/i18n/content";
import { localizedMetadata } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  return localizedMetadata(localeParam, "/live/calendar");
}

export default async function LocalizedLiveCalendarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = getLocale(localeParam) as Locale;
  return <LiveCalendarContent locale={locale} events={getLiveEvents(locale)} />;
}
