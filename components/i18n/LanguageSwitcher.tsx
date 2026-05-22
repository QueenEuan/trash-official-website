"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { hrefLangs, isLocale, localeLabels, locales, localizePath, stripLocale, type Locale } from "@/lib/i18n/config";

const menuLabels: Record<Locale, string> = {
  zh: "中文",
  en: "English",
  ja: "日本語",
  ko: "한국어",
};

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const current = pathname.split("/")[1];
  const cleanPath = stripLocale(pathname);
  const activeLocale = isLocale(current) ? current : "zh";
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeMenu(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", closeMenu);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={
        compact
          ? "relative ml-1 flex shrink-0 items-center border-l border-white/15 pl-4"
          : "relative hidden shrink-0 items-center border-l border-white/15 pl-5 xl:flex"
      }
      aria-label="Language switcher"
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-9 items-center gap-2 border border-white/12 bg-white/[0.03] px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.14em] text-gold transition hover:border-gold/40 hover:bg-gold/10"
      >
        {localeLabels[activeLocale]}
        <span aria-hidden="true" className="text-[0.58rem] text-gold/80">▾</span>
      </button>
      {open && (
        <div
          role="menu"
          className={
            compact
              ? "absolute bottom-full left-4 z-50 mb-3 min-w-36 border border-white/12 bg-black/95 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-xl"
              : "absolute right-0 top-full z-50 mt-3 min-w-40 border border-white/12 bg-black/95 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-xl"
          }
        >
          {locales.map((locale) => (
          <Link
            key={locale}
            href={localizePath(cleanPath, locale)}
            hrefLang={hrefLangs[locale]}
              role="menuitem"
              onClick={() => setOpen(false)}
            className={
                activeLocale === locale
                  ? "block border border-gold/35 bg-gold/10 px-3 py-2 text-[0.72rem] font-black tracking-[0.08em] text-gold"
                  : "block border border-transparent px-3 py-2 text-[0.72rem] font-bold tracking-[0.08em] text-zinc-300 transition hover:border-white/10 hover:text-gold"
            }
          >
              {menuLabels[locale]}
          </Link>
          ))}
        </div>
      )}
    </div>
  );
}
