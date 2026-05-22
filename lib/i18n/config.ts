export const locales = ["zh", "en", "ja", "ko"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";
export const prefixedLocales = locales.filter((locale) => locale !== defaultLocale);

export const localeLabels: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
  ja: "日本語",
  ko: "한국어",
};

export const localeNames: Record<Locale, string> = {
  zh: "繁體中文",
  en: "English",
  ja: "Japanese",
  ko: "Korean",
};

export const openGraphLocales: Record<Locale, string> = {
  zh: "zh_TW",
  en: "en_US",
  ja: "ja_JP",
  ko: "ko_KR",
};

export const hrefLangs: Record<Locale, string> = {
  zh: "zh-TW",
  en: "en",
  ja: "ja",
  ko: "ko",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocale(value?: string): Locale {
  return value && isLocale(value) ? value : defaultLocale;
}

export function stripLocale(pathname: string) {
  const segments = pathname.split("/");
  return isLocale(segments[1] || "") ? `/${segments.slice(2).join("/")}`.replace(/\/$/, "") || "/" : pathname || "/";
}

export function localizePath(pathname: string, locale: Locale) {
  if (/^https?:\/\//.test(pathname) || pathname.startsWith("mailto:")) return pathname;
  const cleanPath = stripLocale(pathname);
  if (locale === defaultLocale) return cleanPath;
  return cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;
}
