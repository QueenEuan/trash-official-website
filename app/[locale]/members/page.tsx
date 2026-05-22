import { MembersContent } from "@/components/pages/MembersContent";
import { prefixedLocales } from "@/lib/i18n/config";
import { localizedMetadata } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localizedMetadata(locale, "/members");
}

export default async function LocalizedMembersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <MembersContent locale={locale as "zh" | "en" | "ja" | "ko"} />;
}
