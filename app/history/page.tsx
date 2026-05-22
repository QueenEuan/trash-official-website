import { HistoryContent } from "@/components/pages/HistoryContent";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const metadata = localizedMetadata("zh", "/history");

export default function HistoryPage() {
  return <HistoryContent />;
}
