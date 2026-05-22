import { redirect } from "next/navigation";
import { getLocale, localizePath } from "@/lib/i18n/config";

export default async function LocalizedMarzAliasPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(localizePath("/members/marz23", getLocale(locale)));
}
