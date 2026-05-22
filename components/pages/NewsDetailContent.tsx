import { notFound } from "next/navigation";
import { NewsCard } from "@/components/NewsCard";
import { publicDateLabel, publicList } from "@/lib/publicContent";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getNews, getNewsCategoryLabel, getPageCopy } from "@/lib/i18n/content";


export async function NewsDetailContent({ params, locale = defaultLocale }: { params: Promise<{ slug: string }>; locale?: Locale }) {
  const { slug } = await params;
  const copy = getPageCopy(locale);
  const localizedNews = getNews(locale);
  const item = localizedNews.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const dateLabel = publicDateLabel(item.dateLabel);
  const meta = [getNewsCategoryLabel(item.category, locale), dateLabel].filter(Boolean).join(" / ");
  const body = publicList(item.body);

  return (
    <article className="page-shell">
      <p className="kicker">{meta}</p>
      <h1 className="mt-4 max-w-5xl font-display text-5xl font-black uppercase leading-none text-white md:text-8xl">{item.title}</h1>
      <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-300">{item.excerpt}</p>
      <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-8 text-zinc-300">
        {body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap gap-3">
        {item.sourceUrl && <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">{copy.ui.originalSource}</a>}
        {item.alternateSourceUrl && <a href={item.alternateSourceUrl} target="_blank" rel="noopener noreferrer" className="btn-muted">{copy.ui.additionalSource}</a>}
      </div>
      <section className="mt-16 border-t border-white/10 pt-10">
        <h2 className="kicker">{copy.news.moreNews}</h2>
        <div className="mt-4">
          {localizedNews.filter((entry) => entry.slug !== item.slug).map((entry) => <NewsCard key={entry.slug} item={entry} locale={locale} />)}
        </div>
      </section>
    </article>
  );
}
