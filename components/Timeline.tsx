import type { TimelineEvent } from "@/data/timeline";

export function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-3 top-1 w-px bg-gradient-to-b from-gold via-red-900 to-transparent" />
      {events.map((event, index) => (
        <article key={`${event.year}-${event.title}`} className="relative grid gap-4 pb-11 pl-10 last:pb-0 md:grid-cols-[150px_1fr] md:gap-8">
          <span className="absolute left-[7px] top-2 size-3 border border-gold bg-black shadow-[0_0_30px_rgba(214,176,95,0.45)]" />
          <div>
            <p className="font-display text-4xl font-black uppercase leading-none text-white/90">{event.year}</p>
            <p className="mt-2 text-[0.65rem] font-black uppercase tracking-[0.2em] text-gold">{String(index + 1).padStart(2, "0")} / {event.tag}</p>
          </div>
          <div className="archive-frame p-5">
            <h3 className="font-display text-3xl font-black uppercase leading-none text-white md:text-4xl">{event.title}</h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">{event.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
