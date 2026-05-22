import { AboutContent } from "@/components/pages/AboutContent";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const metadata = localizedMetadata("zh", "/about");

export default function AboutPage() {
  return <AboutContent />;
}
