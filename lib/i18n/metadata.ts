import type { Metadata } from "next";
import { siteProfile } from "@/data/site";
import { getLocale, hrefLangs, locales, localizePath, openGraphLocales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export function localizedMetadata(localeParam: string, pathname: string): Metadata {
  const locale = getLocale(localeParam);
  const dictionary = getDictionary(locale);
  const absoluteOgImage = new URL(siteProfile.seo.ogImage, siteProfile.seo.metadataBase).toString();
  const ogImageAlt = locale === "zh" ? "TRASH 官方網站預覽圖" : "TRASH official website preview image";
  const languageAlternates = Object.fromEntries(
    locales.map((item) => [hrefLangs[item], localizePath(pathname, item as Locale)]),
  );

  return {
    title: {
      absolute: dictionary.seo.title,
    },
    description: dictionary.seo.description,
    alternates: {
      canonical: localizePath(pathname, locale),
      languages: {
        ...languageAlternates,
        "x-default": localizePath(pathname, "zh"),
      },
    },
    openGraph: {
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      url: localizePath(pathname, locale),
      siteName: siteProfile.name,
      images: [
        {
          url: absoluteOgImage,
          alt: ogImageAlt,
        },
      ],
      type: "website",
      locale: openGraphLocales[locale],
      alternateLocale: locales.filter((item) => item !== locale).map((item) => openGraphLocales[item]),
    },
  };
}
