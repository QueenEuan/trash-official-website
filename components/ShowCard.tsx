import { ArrowUpRight } from "lucide-react";
import type { Show } from "@/data/shows";
import { isUnconfirmedValue, publicDateLabel } from "@/lib/publicContent";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getPageCopy, getShowTypeLabel } from "@/lib/i18n/content";

export function ShowCard({ show, locale = defaultLocale }: { show: Show; locale?: Locale }) {
  const copy = getPageCopy(locale);
  const status = isUnconfirmedValue(show.status) ? "Archive" : show.status === "Past" ? copy.ui.past : show.status;
  const dateLabel = publicDateLabel(show.dateLabel, show.venue);
  const sourceUrl = show.sourceUrl || show.href;
  const typeLabel = getShowTypeLabel(show.type, locale);

  return (
    <article className="archive-frame grid gap-6 p-6 md:grid-cols-[180px_1fr_auto] md:items-start md:p-7">
      <div className="border-b border-white/10 pb-5 md:border-b-0 md:border-r md:pb-0 md:pr-6">
        <p className="kicker">{typeLabel}</p>
        <p className="mt-3 font-display text-5xl font-black uppercase leading-none text-white">{dateLabel}</p>
        {show.time && <p className="mt-3 text-sm font-bold text-gold">{show.time}</p>}
      </div>
      <div>
        <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">{show.milestoneLabel}</p>
        <h3 className="font-display text-4xl font-black uppercase leading-none text-white">{show.title}</h3>
        <p className="mt-4 text-sm uppercase tracking-[0.16em] text-zinc-500">{show.venue} / {show.city}, {show.country}</p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">{show.description}</p>
        {show.alternateSourceUrl && <a href={show.alternateSourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-xs font-black uppercase tracking-[0.18em] text-zinc-500 transition hover:text-gold">{copy.ui.additionalSource}</a>}
        <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-zinc-600">{status}</p>
      </div>
      {sourceUrl && (
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-muted md:justify-self-end">
          {copy.ui.source} <ArrowUpRight size={17} />
        </a>
      )}
    </article>
  );
}
