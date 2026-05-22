import { LocalizedLink } from "@/components/i18n/LocalizedLink";
import type { NewsItem } from "@/data/news";
import { publicDateLabel } from "@/lib/publicContent";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getNewsCategoryLabel, getPageCopy } from "@/lib/i18n/content";

export function NewsCard({ item, locale = defaultLocale }: { item: NewsItem; locale?: Locale }) {
  const copy = getPageCopy(locale);
  const dateLabel = publicDateLabel(item.dateLabel);
  const category = getNewsCategoryLabel(item.category, locale);

  return (
    <article className="border-t border-white/10 py-7 transition hover:border-gold">
      <div className="grid gap-5 md:grid-cols-[150px_1fr_auto] md:items-start">
        <div>
          <p className="font-display text-3xl font-black uppercase leading-none text-white">{dateLabel}</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-gold">{category}</p>
        </div>
        <div>
          <LocalizedLink href={`/news/${item.slug}`} className="group">
            <h3 className="text-pretty font-display text-3xl font-black uppercase leading-tight text-white transition group-hover:text-gold md:text-4xl">{item.title}</h3>
          </LocalizedLink>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{item.excerpt}</p>
        </div>
        {item.sourceUrl && <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-muted md:justify-self-end">{copy.ui.readSource}</a>}
      </div>
    </article>
  );
}
