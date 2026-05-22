"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { defaultLocale, getLocale, localizePath, type Locale } from "@/lib/i18n/config";

type LocalizedLinkProps = LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
  children: ReactNode;
  locale?: Locale;
};

export function LocalizedLink({ href, children, locale: explicitLocale, ...props }: LocalizedLinkProps) {
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];
  const locale = explicitLocale ?? getLocale(firstSegment || defaultLocale);
  const localizedHref = typeof href === "string" ? localizePath(href, locale) : href;

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
}
