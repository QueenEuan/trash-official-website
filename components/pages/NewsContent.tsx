import { NewsCard } from "@/components/NewsCard";
import { SectionHeading } from "@/components/SectionHeading";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getNews, getPageCopy } from "@/lib/i18n/content";

export function NewsContent({ locale = defaultLocale }: { locale?: Locale }) {
  const copy = getPageCopy(locale);
  const news = getNews(locale);
  return (
    <div className="page-shell">
      <SectionHeading eyebrow={copy.news.eyebrow} title={copy.news.title} body={copy.news.body} />
      <div className="mt-8">
        {news.map((item) => <NewsCard key={item.slug} item={item} locale={locale} />)}
      </div>
    </div>
  );
}

