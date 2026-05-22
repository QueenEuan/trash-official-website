import { MediaContent } from "@/components/pages/MediaContent";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const metadata = localizedMetadata("zh", "/media");

export default function MediaPage() {
  return <MediaContent />;
}
