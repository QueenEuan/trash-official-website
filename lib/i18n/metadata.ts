import type { Metadata } from "next";
import { siteProfile } from "@/data/site";
import { getAbout, getAlbums, getMembers, getNews, getPageCopy, getSite } from "@/lib/i18n/content";
import { getLocale, hrefLangs, locales, localizePath, openGraphLocales, stripLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

function brandSuffix(locale: Locale) {
  return locale === "zh" ? "TRASH 官方網站" : "TRASH Official";
}

function pageTitle(locale: Locale, heading: string) {
  const title = heading.replace(/[。．.]+$/u, "").trim();
  if (/TRASH/i.test(title)) return title;
  return `${title} | ${brandSuffix(locale)}`;
}

function pageSeo(locale: Locale, pathname: string) {
  const path = stripLocale(pathname) || "/";
  const copy = getPageCopy(locale);
  const dictionary = getDictionary(locale);
  const site = getSite(locale);

  if (path === "/") {
    return { title: dictionary.seo.title, description: site.heroBody };
  }

  const sections: Record<string, { title: string; description: string }> = {
    "/about": { title: copy.about.title, description: getAbout(locale).shortBio },
    "/members": { title: copy.members.title, description: copy.members.body },
    "/history": { title: copy.history.title, description: copy.history.body },
    "/music": { title: copy.music.title, description: copy.music.body },
    "/live": { title: copy.live.title, description: copy.live.body },
    "/live/calendar": { title: copy.ui.liveCalendar, description: copy.live.calendarBody },
    "/news": { title: copy.news.title, description: copy.news.body },
    "/media": { title: copy.media.title, description: copy.media.body },
    "/press": { title: copy.press.title, description: copy.press.body },
    "/press-kit": { title: copy.press.title, description: copy.press.body },
    "/contact": { title: copy.contact.title, description: copy.contact.body },
  };

  const section = sections[path];
  if (section) {
    return { title: pageTitle(locale, section.title), description: section.description };
  }

  const memberSlug = path.match(/^\/members\/([^/]+)$/)?.[1];
  if (memberSlug) {
    const member = getMembers(locale).find((item) => item.slug === memberSlug);
    if (member) {
      return {
        title: pageTitle(locale, `${member.name} / ${member.englishName}`),
        description: member.bio,
      };
    }
  }

  const albumSlug = path.match(/^\/music\/([^/]+)$/)?.[1];
  if (albumSlug) {
    const album = getAlbums(locale).find((item) => item.slug === albumSlug);
    if (album) {
      const heading = album.titleEn && album.titleEn !== album.title ? `${album.title} / ${album.titleEn}` : album.title;
      return { title: pageTitle(locale, heading), description: album.summary };
    }
  }

  const newsSlug = path.match(/^\/news\/([^/]+)$/)?.[1];
  if (newsSlug) {
    const item = getNews(locale).find((entry) => entry.slug === newsSlug);
    if (item) {
      return { title: pageTitle(locale, item.title), description: item.excerpt };
    }
  }

  return { title: dictionary.seo.title, description: dictionary.seo.description };
}

export function localizedMetadata(localeParam: string, pathname: string): Metadata {
  const locale = getLocale(localeParam);
  const { title, description } = pageSeo(locale, pathname);
  const absoluteOgImage = new URL(siteProfile.seo.ogImage, siteProfile.seo.metadataBase).toString();
  const ogImageAlt = locale === "zh" ? "TRASH 官方網站預覽圖" : "TRASH official website preview image";
  const languageAlternates = Object.fromEntries(
    locales.map((item) => [hrefLangs[item], localizePath(pathname, item)]),
  );

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: localizePath(pathname, locale),
      languages: {
        ...languageAlternates,
        "x-default": localizePath(pathname, "zh"),
      },
    },
    openGraph: {
      title,
      description,
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
