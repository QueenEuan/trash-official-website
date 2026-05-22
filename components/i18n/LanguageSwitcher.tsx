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
    <div className={compact ? "flex shrink-0 items-center gap-2" : "hidden items-center gap-2 xl:flex"}>
      {locales.map((locale) => {
        const active = activeLocale === locale;
        return (
          <Link
            key={locale}
            href={localizePath(cleanPath, locale)}
            hrefLang={hrefLangs[locale]}
            className={active ? "text-gold" : "transition hover:text-gold"}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
