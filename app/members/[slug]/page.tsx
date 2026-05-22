import { members } from "@/data/members";
import { MemberDetailContent } from "@/components/pages/MemberDetailContent";
import { localizedMetadata } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return members.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return localizedMetadata("zh", `/members/${slug}`);
}

export default async function MemberDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <MemberDetailContent params={params} />;
}
