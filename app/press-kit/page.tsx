import { PressKitContent } from "@/components/pages/PressKitContent";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const metadata = localizedMetadata("zh", "/press-kit");

export default function PressKitPage() {
  return <PressKitContent />;
}
