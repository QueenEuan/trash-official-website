import { MemberCard } from "@/components/MemberCard";
import { SectionHeading } from "@/components/SectionHeading";
import { members } from "@/data/members";

export default function MembersPage() {
  return (
    <div className="page-shell">
      <SectionHeading eyebrow="Members" title="The Band" body="Current TRASH members: 阿夜 / Marz23, 頤原 / Euan, 博文 / TTeng, and 魁剛 / Kuei gun." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => <MemberCard key={member.slug} member={member} />)}
      </div>
    </div>
  );
}
