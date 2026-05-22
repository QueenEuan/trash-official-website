import { MemberDetailContent } from "@/components/pages/MemberDetailContent";
import { members } from "@/data/members";
import { prefixedLocales } from "@/lib/i18n/config";
import { localizedMetadata } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return prefixedLocales.flatMap((locale) => members.map((member) => ({ locale, slug: member.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  return localizedMetadata(locale, `/members/${slug}`);
}

export default async function LocalizedMemberDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  return <MemberDetailContent params={Promise.resolve({ slug })} locale={locale as "zh" | "en" | "ja" | "ko"} />;
}
