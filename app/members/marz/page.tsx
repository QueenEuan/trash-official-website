import { redirect } from "next/navigation";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const metadata = localizedMetadata("zh", "/members/marz23");

export default function MarzAliasPage() {
  redirect("/members/marz23");
}
