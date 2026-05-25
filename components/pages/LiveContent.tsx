import { SectionHeading } from "@/components/SectionHeading";
import { ShowCard } from "@/components/ShowCard";
import { LocalizedLink } from "@/components/i18n/LocalizedLink";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getPageCopy, getShows } from "@/lib/i18n/content";
import { CalendarDays } from "lucide-react";

export function LiveContent({ locale = defaultLocale }: { locale?: Locale }) {
  const copy = getPageCopy(locale);
  const shows = getShows(locale);
  return (
    <div className="page-shell">
      <SectionHeading eyebrow={copy.live.eyebrow} title={copy.live.title} body={copy.live.body} />
      <section className="archive-frame mt-10 grid gap-6 bg-[linear-gradient(135deg,rgba(127,16,24,0.34),rgba(0,0,0,0.92))] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div>
          <p className="kicker">{copy.live.calendarTitle}</p>
          <h2 className="mt-3 font-display text-4xl font-black uppercase leading-none text-white md:text-5xl">{copy.live.calendarTitle}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">{copy.live.calendarBody}</p>
        </div>
        <LocalizedLink href="/live/calendar" locale={locale} className="btn-primary md:justify-self-end">
          <CalendarDays size={18} /> {copy.live.calendarButton}
        </LocalizedLink>
      </section>
      <div className="mt-10 grid gap-6">
        {shows.map((show) => <ShowCard key={`${show.venue}-${show.city}`} show={show} locale={locale} />)}
      </div>
    </div>
  );
}
