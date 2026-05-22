"use client";

import { FallbackImage } from "@/components/FallbackImage";
import { LocalizedLink } from "@/components/i18n/LocalizedLink";
import { Mail } from "lucide-react";
import { siteProfile } from "@/data/site";
import { defaultLocale, getLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getSite } from "@/lib/i18n/content";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocale(pathname.split("/")[1] || defaultLocale);
  const dictionary = getDictionary(locale);
  const localizedSite = getSite(locale);
  const logoAlt = locale === "zh" ? "TRASH 官方白色 Logo" : "TRASH official white logo";

  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,#09090b,#030303)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1fr_auto]">
        <div>
          <FallbackImage src={siteProfile.assets.logoWhite} fallbackSrc="/images/hero.svg" alt={logoAlt} width={120} height={120} className="h-16 w-auto object-contain" />
          <div className="metal-rule mt-4 max-w-40" />
          <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500">
            {localizedSite.seo.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="border border-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">{dictionary.footer.officialLinks}</span>
          <LocalizedLink className="icon-btn" href="/contact" aria-label={dictionary.nav.contact}><Mail size={18} /></LocalizedLink>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs uppercase tracking-[0.18em] text-zinc-600">
        © 2026 TRASH.
      </div>
    </footer>
  );
}
