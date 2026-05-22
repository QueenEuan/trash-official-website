"use client";

import { FallbackImage } from "@/components/FallbackImage";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { LocalizedLink } from "@/components/i18n/LocalizedLink";
import { siteProfile } from "@/data/site";
import { defaultLocale, getLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { usePathname } from "next/navigation";

const navKeys = [
  ["about", "/about"],
  ["members", "/members"],
  ["history", "/history"],
  ["music", "/music"],
  ["live", "/live"],
  ["news", "/news"],
  ["media", "/media"],
  ["pressKit", "/press-kit"],
  ["contact", "/contact"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const locale = getLocale(pathname.split("/")[1] || defaultLocale);
  const dictionary = getDictionary(locale);
  const logoAlt = locale === "zh" ? "TRASH 官方 Logo" : "TRASH official logo";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-5 md:py-4">
        <LocalizedLink href="/" className="group flex items-center gap-3" aria-label="TRASH home">
          <span className="grid size-9 place-items-center border border-red-700/70 bg-red-950/50 shadow-[0_0_40px_rgba(127,29,29,0.35)] transition group-hover:border-gold md:size-10">
            <FallbackImage src={siteProfile.assets.logoWhite} fallbackSrc="/images/hero.svg" alt={logoAlt} width={26} height={26} className="h-6 w-6 object-contain" />
          </span>
          <span className="font-display text-2xl font-black text-white md:text-3xl">TRASH</span>
        </LocalizedLink>
        <nav className="hidden items-center gap-5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-zinc-400 xl:flex">
          {navKeys.map(([key, href]) => (
            <LocalizedLink key={href} href={href} className="transition hover:text-gold">
              {dictionary.nav[key]}
            </LocalizedLink>
          ))}
          <LanguageSwitcher />
        </nav>
        <LocalizedLink href="/press-kit" className="btn-primary hidden sm:inline-flex">
          {dictionary.nav.press}
        </LocalizedLink>
      </div>
      <nav className="scrollbar-none flex gap-5 overflow-x-auto border-t border-white/10 px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-zinc-400 xl:hidden">
        {navKeys.map(([key, href]) => (
          <LocalizedLink key={href} href={href} className="shrink-0 transition hover:text-gold">
            {dictionary.nav[key]}
          </LocalizedLink>
        ))}
        <LanguageSwitcher compact />
      </nav>
    </header>
  );
}
