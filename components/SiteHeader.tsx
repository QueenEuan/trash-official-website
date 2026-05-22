import { FallbackImage } from "@/components/FallbackImage";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { LocalizedLink } from "@/components/i18n/LocalizedLink";
import { siteProfile } from "@/data/site";

const nav = [
  ["About", "/about"],
  ["Members", "/members"],
  ["History", "/history"],
  ["Music", "/music"],
  ["Live", "/live"],
  ["News", "/news"],
  ["Media", "/media"],
  ["Press Kit", "/press-kit"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-5 md:py-4">
        <LocalizedLink href="/" className="group flex items-center gap-3" aria-label="TRASH home">
          <span className="grid size-9 place-items-center border border-red-700/70 bg-red-950/50 shadow-[0_0_40px_rgba(127,29,29,0.35)] transition group-hover:border-gold md:size-10">
            <FallbackImage src={siteProfile.assets.logoWhite} fallbackSrc="/images/hero.svg" alt="TRASH official logo" width={26} height={26} className="h-6 w-6 object-contain" />
          </span>
          <span className="font-display text-2xl font-black text-white md:text-3xl">TRASH</span>
        </LocalizedLink>
        <nav className="hidden items-center gap-5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-zinc-400 xl:flex">
          {nav.map(([label, href]) => (
            <LocalizedLink key={href} href={href} className="transition hover:text-gold">
              {label}
            </LocalizedLink>
          ))}
          <LanguageSwitcher />
        </nav>
        <LocalizedLink href="/press-kit" className="btn-primary hidden sm:inline-flex">
          Press
        </LocalizedLink>
      </div>
      <nav className="scrollbar-none flex gap-5 overflow-x-auto border-t border-white/10 px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-zinc-400 xl:hidden">
        {nav.map(([label, href]) => (
          <LocalizedLink key={href} href={href} className="shrink-0 transition hover:text-gold">
            {label}
          </LocalizedLink>
        ))}
        <LanguageSwitcher compact />
      </nav>
    </header>
  );
}
