"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getLiveEventStatusLabel, getLiveEventTypeLabel, getPageCopy, type LocalizedLiveEvent } from "@/lib/i18n/content";

const localeCodes: Record<Locale, string> = {
  zh: "zh-TW",
  en: "en-US",
  ja: "ja-JP",
  ko: "ko-KR",
};

function dateFromParts(year: number, month: number, day: number) {
  return new Date(year, month, day);
}

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(localeCodes[locale], {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

function monthLabel(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(localeCodes[locale], {
    year: "numeric",
    month: "long",
  }).format(date);
}

function weekdayLabels(locale: Locale) {
  const base = new Date(2026, 0, 4);
  return Array.from({ length: 7 }, (_, index) =>
    new Intl.DateTimeFormat(localeCodes[locale], { weekday: "short" }).format(dateFromParts(base.getFullYear(), base.getMonth(), base.getDate() + index)),
  );
}

function latestEventDate(events: LocalizedLiveEvent[]) {
  const latest = [...events].sort((a, b) => b.date.localeCompare(a.date))[0];
  return latest?.date ?? null;
}

function EventCard({ event, locale }: { event: LocalizedLiveEvent; locale: Locale }) {
  const copy = getPageCopy(locale);
  const type = getLiveEventTypeLabel(event.type, locale);
  const status = getLiveEventStatusLabel(event.status, locale);

  return (
    <article className="archive-frame p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="border border-gold/30 bg-gold/10 px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-[0.16em] text-gold">{type}</span>
        <span className="border border-white/10 px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-[0.16em] text-zinc-400">{status}</span>
      </div>
      <h3 className="mt-5 break-words text-pretty font-display text-2xl font-black uppercase leading-tight text-white sm:text-3xl">{event.title}</h3>
      <dl className="mt-5 grid gap-3 text-sm leading-6 text-zinc-300">
        <div>
          <dt className="text-xs font-black uppercase tracking-[0.16em] text-zinc-500">{copy.ui.date}</dt>
          <dd className="mt-1 font-bold text-silver">{formatDate(event.date, locale)}</dd>
        </div>
        {event.time && (
          <div>
            <dt className="text-xs font-black uppercase tracking-[0.16em] text-zinc-500">{copy.ui.time}</dt>
            <dd className="mt-1 font-bold text-silver">{event.time}</dd>
          </div>
        )}
        <div>
          <dt className="text-xs font-black uppercase tracking-[0.16em] text-zinc-500">{copy.ui.base}</dt>
          <dd className="mt-1 font-bold text-silver">{event.venue} / {event.city}</dd>
        </div>
      </dl>
      <div className="mt-6 flex flex-wrap gap-3">
        {event.ticketUrl && (
          <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {copy.ui.tickets} <ArrowUpRight size={16} />
          </a>
        )}
        {event.sourceUrl && (
          <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            {copy.ui.source} <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </article>
  );
}

export function LiveCalendarContent({ events, locale = defaultLocale, variant = "page" }: { events: LocalizedLiveEvent[]; locale?: Locale; variant?: "page" | "embedded" }) {
  const copy = getPageCopy(locale);
  const initialDate = latestEventDate(events);
  const initialMonth = initialDate ? new Date(`${initialDate}T00:00:00`) : new Date();
  const [visibleMonth, setVisibleMonth] = useState(() => dateFromParts(initialMonth.getFullYear(), initialMonth.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<string | null>(initialDate);
  const sortedEvents = useMemo(() => [...events].sort((a, b) => a.date.localeCompare(b.date)), [events]);
  const eventsByDate = useMemo(() => {
    return sortedEvents.reduce<Record<string, LocalizedLiveEvent[]>>((map, event) => {
      map[event.date] = [...(map[event.date] ?? []), event];
      return map;
    }, {});
  }, [sortedEvents]);
  const upcomingEvents = sortedEvents.filter((event) => event.status === "upcoming" || event.status === "sold-out");
  const pastEvents = [...sortedEvents].filter((event) => event.status === "past").reverse();
  const selectedEvents = selectedDate ? eventsByDate[selectedDate] ?? [] : [];
  const firstDay = dateFromParts(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
  const leadingDays = firstDay.getDay();
  const daysInMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0).getDate();
  const calendarCells = [
    ...Array.from({ length: leadingDays }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => dateFromParts(visibleMonth.getFullYear(), visibleMonth.getMonth(), index + 1)),
  ];

  function shiftMonth(offset: number) {
    setVisibleMonth((current) => dateFromParts(current.getFullYear(), current.getMonth() + offset, 1));
    setSelectedDate(null);
  }

  return (
    <div className={variant === "page" ? "page-shell" : "pb-[max(2rem,env(safe-area-inset-bottom))]"}>
      {variant === "page" && <SectionHeading eyebrow={copy.live.eyebrow} title={copy.ui.liveCalendar} body={copy.live.calendarBody} />}
      <div className={variant === "page" ? "mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start" : "grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start"}>
        <section className="archive-frame p-4 md:p-6">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <button type="button" onClick={() => shiftMonth(-1)} aria-label={copy.ui.previousMonth} className="icon-btn">
              <ChevronLeft size={18} />
            </button>
            <h2 className="text-center font-display text-2xl font-black uppercase text-white sm:text-3xl md:text-5xl">{monthLabel(visibleMonth, locale)}</h2>
            <button type="button" onClick={() => shiftMonth(1)} aria-label={copy.ui.nextMonth} className="icon-btn">
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="mt-5 grid grid-cols-7 gap-1.5 text-center text-[0.62rem] font-black uppercase tracking-[0.1em] text-zinc-500 sm:gap-2">
            {weekdayLabels(locale).map((day) => <div key={day} className="py-2">{day}</div>)}
            {calendarCells.map((date, index) => {
              if (!date) return <div key={`empty-${index}`} aria-hidden="true" />;
              const key = toDateKey(date);
              const dayEvents = eventsByDate[key] ?? [];
              const hasEvent = dayEvents.length > 0;
              const active = selectedDate === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => hasEvent && setSelectedDate(key)}
                  disabled={!hasEvent}
                  aria-label={hasEvent ? `${copy.ui.selectedDate}: ${formatDate(key, locale)}` : formatDate(key, locale)}
                  className={[
                    "relative min-h-11 border px-1 text-sm font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold min-[390px]:min-h-12 sm:min-h-16 sm:text-base",
                    active ? "border-gold bg-gold/15 text-gold" : hasEvent ? "border-red-900/60 bg-red-950/30 text-white hover:border-gold/70 hover:text-gold" : "border-white/5 bg-white/[0.015] text-zinc-700",
                  ].join(" ")}
                >
                  {date.getDate()}
                  {hasEvent && <span className="absolute bottom-1.5 left-1/2 h-1 w-4 -translate-x-1/2 bg-gold sm:w-5" />}
                </button>
              );
            })}
          </div>
        </section>

        <aside className="grid gap-5">
          <section className="archive-frame p-5">
            <p className="kicker">{copy.ui.viewDetails}</p>
            <div className="mt-5 grid gap-4">
              {selectedEvents.length > 0 ? selectedEvents.map((event) => <EventCard key={event.id} event={event} locale={locale} />) : <p className="text-sm leading-6 text-zinc-500">{copy.ui.noSelectedEvent}</p>}
            </div>
          </section>
          <section className="archive-frame p-5">
            <p className="kicker">{copy.ui.upcomingShows}</p>
            <div className="mt-5 grid gap-4">
              {upcomingEvents.length > 0 ? upcomingEvents.map((event) => <EventCard key={event.id} event={event} locale={locale} />) : <p className="text-sm leading-6 text-zinc-500">{copy.ui.noUpcomingShows}</p>}
            </div>
          </section>
        </aside>
      </div>

      <section className={variant === "page" ? "mt-10" : "mt-8"}>
        <p className="kicker">{copy.ui.pastShows}</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {pastEvents.map((event) => <EventCard key={event.id} event={event} locale={locale} />)}
        </div>
      </section>
    </div>
  );
}
