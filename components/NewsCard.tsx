import Link from "next/link";
import type { NewsItem } from "@/data/news";
import { publicDateLabel } from "@/lib/publicContent";

export function NewsCard({ item }: { item: NewsItem }) {
  const dateLabel = publicDateLabel(item.dateLabel);

  return (
    <article className="border-t border-white/10 py-7 transition hover:border-gold">
      <div className="grid gap-5 md:grid-cols-[150px_1fr_auto] md:items-start">
        <div>
          <p className="font-display text-3xl font-black uppercase leading-none text-white">{dateLabel}</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-gold">{item.category}</p>
        </div>
        <div>
          <Link href={`/news/${item.slug}`} className="group">
            <h3 className="text-pretty font-display text-3xl font-black uppercase leading-tight text-white transition group-hover:text-gold md:text-4xl">{item.title}</h3>
          </Link>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{item.excerpt}</p>
        </div>
        {item.sourceUrl && <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-muted md:justify-self-end">Read Source</a>}
      </div>
    </article>
  );
}
