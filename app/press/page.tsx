import { redirect } from "next/navigation";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const metadata = localizedMetadata("zh", "/press-kit");

export default function PressAliasPage() {
  redirect("/press-kit");
}
