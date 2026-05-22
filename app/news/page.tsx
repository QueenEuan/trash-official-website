import { NewsContent } from "@/components/pages/NewsContent";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const metadata = localizedMetadata("zh", "/news");

export default function NewsPage() {
  return <NewsContent />;
}
