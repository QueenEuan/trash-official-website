import { ContactContent } from "@/components/pages/ContactContent";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const metadata = localizedMetadata("zh", "/contact");

export default function ContactPage() {
  return <ContactContent />;
}
