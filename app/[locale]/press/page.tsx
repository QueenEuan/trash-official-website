import { redirect } from "next/navigation";
import { getLocale, localizePath } from "@/lib/i18n/config";

export default async function LocalizedPressAliasPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(localizePath("/press-kit", getLocale(locale)));
}
