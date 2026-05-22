import { HomeContent } from "@/components/pages/HomeContent";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const metadata = localizedMetadata("zh", "/");

export default function Home() {
  return <HomeContent />;
}
