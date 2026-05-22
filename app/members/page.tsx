import { MembersContent } from "@/components/pages/MembersContent";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const metadata = localizedMetadata("zh", "/members");

export default function MembersPage() {
  return <MembersContent />;
}
