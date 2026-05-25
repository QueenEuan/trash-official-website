"use client";

import { FallbackImage } from "@/components/FallbackImage";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { LocalizedLink } from "@/components/i18n/LocalizedLink";
import { siteProfile } from "@/data/site";
import { defaultLocale, getLocale, hrefLangs, localeLabels, locales, localizePath, stripLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const cleanPath = stripLocale(pathname);
  const languageHeading: Record<Locale, string> = {
    zh: "語言",
    en: "Language",
    ja: "言語",
    ko: "언어",
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 md:px-5 md:py-4">
        <LocalizedLink href="/" locale={locale} className="group flex items-center gap-3" aria-label="TRASH home" onClick={() => setMobileOpen(false)}>
          <span className="grid size-9 place-items-center border border-red-700/70 bg-red-950/50 shadow-[0_0_40px_rgba(127,29,29,0.35)] transition group-hover:border-gold md:size-10">
            <FallbackImage src={siteProfile.assets.logoWhite} fallbackSrc="/images/hero.svg" alt={logoAlt} width={26} height={26} className="h-6 w-6 object-contain" />
          </span>
          <span className="font-display text-2xl font-black text-white md:text-3xl">TRASH</span>
        </LocalizedLink>
        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-4 text-[0.72rem] font-extrabold uppercase tracking-[0.15em] text-zinc-300 xl:flex 2xl:gap-5">
          {navKeys.map(([key, href]) => (
            <LocalizedLink key={href} href={href} className="whitespace-nowrap transition hover:text-gold">
              {dictionary.nav[key]}
            </LocalizedLink>
          ))}
          <LanguageSwitcher />
        </nav>
        <div className="flex items-center gap-3">
          <LocalizedLink href="/press-kit" locale={locale} className="btn-primary hidden min-h-10 shrink-0 whitespace-nowrap px-4 py-2 text-[0.68rem] sm:inline-flex">
            {dictionary.nav.press}
          </LocalizedLink>
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center border border-white/12 text-white transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold xl:hidden"
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 px-4 py-5 xl:hidden">
          <nav className="grid grid-cols-2 gap-2 text-[0.76rem] font-extrabold uppercase tracking-[0.14em] text-zinc-300" aria-label="Mobile navigation">
            {navKeys.map(([key, href]) => (
              <LocalizedLink
                key={href}
                href={href}
                locale={locale}
                onClick={() => setMobileOpen(false)}
                className="border border-white/10 bg-white/[0.025] px-3 py-3 transition hover:border-gold/40 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {dictionary.nav[key]}
              </LocalizedLink>
            ))}
          </nav>
          <div className="mt-5 border-t border-white/10 pt-5">
            <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-zinc-500">{languageHeading[locale]}</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {locales.map((item) => {
                const active = item === locale;
                return (
                  <Link
                    key={item}
                    href={localizePath(cleanPath, item as Locale)}
                    hrefLang={hrefLangs[item]}
                    onClick={() => setMobileOpen(false)}
                    className={
                      active
                        ? "border border-gold/40 bg-gold/10 px-3 py-3 text-sm font-black text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                        : "border border-white/10 bg-white/[0.025] px-3 py-3 text-sm font-bold text-zinc-300 transition hover:border-gold/40 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    }
                  >
                    {item === "en" ? "English" : localeLabels[item]}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
