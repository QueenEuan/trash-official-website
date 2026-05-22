import { MemberCard } from "@/components/MemberCard";
import { SectionHeading } from "@/components/SectionHeading";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getMembers, getPageCopy } from "@/lib/i18n/content";

export function MembersContent({ locale = defaultLocale }: { locale?: Locale }) {
  const copy = getPageCopy(locale);
  const members = getMembers(locale);
  return (
    <div className="page-shell">
      <SectionHeading eyebrow={copy.members.eyebrow} title={copy.members.title} body={copy.members.body} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => <MemberCard key={member.slug} member={member} />)}
      </div>
    </div>
  );
}

