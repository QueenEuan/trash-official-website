import { MusicContent } from "@/components/pages/MusicContent";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const metadata = localizedMetadata("zh", "/music");

export default function MusicPage() {
  return <MusicContent />;
}
