import { LiveContent } from "@/components/pages/LiveContent";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const metadata = localizedMetadata("zh", "/live");

export default function LivePage() {
  return <LiveContent />;
}
