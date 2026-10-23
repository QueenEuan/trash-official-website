import type { MetadataRoute } from "next";
import { albums } from "@/data/albums";
import { members } from "@/data/members";
import { news } from "@/data/news";
import { siteProfile } from "@/data/site";
import { hrefLangs, locales, localizePath, type Locale } from "@/lib/i18n/config";

const staticPaths = [
  "/",
  "/about",
  "/members",
  "/history",
  "/music",
  "/live",
  "/live/calendar",
  "/news",
  "/media",
  "/press-kit",
  "/contact",
];

function absoluteUrl(pathname: string, locale: Locale) {
  const origin = siteProfile.seo.metadataBase.replace(/\/$/, "");
  const localized = localizePath(pathname, locale);
  return localized === "/" ? origin : `${origin}${localized}`;
}

function languageAlternates(pathname: string) {
  return {
    ...Object.fromEntries(locales.map((locale) => [hrefLangs[locale], absoluteUrl(pathname, locale)])),
    "x-default": absoluteUrl(pathname, "zh"),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...members.map((member) => `/members/${member.slug}`),
    ...albums.map((album) => `/music/${album.slug}`),
    ...news.map((item) => `/news/${item.slug}`),
  ];

  return paths.flatMap((pathname) =>
    locales.map((locale) => ({
      url: absoluteUrl(pathname, locale),
      alternates: {
        languages: languageAlternates(pathname),
      },
    })),
  );
}
