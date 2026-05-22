"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { hrefLangs, isLocale, localeLabels, locales, localizePath, stripLocale } from "@/lib/i18n/config";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const current = pathname.split("/")[1];
  const cleanPath = stripLocale(pathname);
  const activeLocale = isLocale(current) ? current : "zh";

  return (
    <div
      className={
        compact
          ? "ml-1 flex shrink-0 items-center gap-1.5 border-l border-white/15 pl-4"
          : "hidden items-center gap-1.5 border-l border-white/15 pl-5 xl:flex"
      }
      aria-label="Language switcher"
    >
      {locales.map((locale) => {
        const active = activeLocale === locale;
        return (
          <Link
            key={locale}
            href={localizePath(cleanPath, locale)}
            hrefLang={hrefLangs[locale]}
            className={
              active
                ? "border border-gold/35 bg-gold/10 px-2.5 py-1 text-gold shadow-[0_0_24px_rgba(214,176,95,0.12)]"
                : "border border-transparent px-2.5 py-1 text-zinc-500 transition hover:border-white/10 hover:text-gold"
            }
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
