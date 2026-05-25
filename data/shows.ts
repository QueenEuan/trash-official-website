import { liveEvents } from "@/data/events";

export type Show = {
  date: string;
  dateLabel: string;
  time?: string;
  milestoneLabel: string;
  description: string;
  title: string;
  city: string;
  country: string;
  venue: string;
  status: "Tickets" | "Sold Out" | "Announced" | "Archive" | "Past" | "TODO";
  type: "milestone" | "tour" | "festival" | "archive";
  href: string;
  sourceUrl?: string;
  alternateSourceUrl?: string;
  asset: string;
  todo: string;
};

export const shows: Show[] = liveEvents.map((event) => ({
  date: event.date,
  dateLabel: event.date,
  time: event.time,
  milestoneLabel: event.id === "taipei-arena-2024" ? "Taipei Arena Debut" : "Kaohsiung Arena Chapter",
  description:
    event.id === "taipei-arena-2024"
      ? "A 15th-anniversary arena milestone marking TRASH’s first Taipei Arena chapter, moving the band’s long-running live story from club and festival stages into a defining arena-scale moment."
      : "The Kaohsiung arena chapter extending The Last Train of Happiness into the south, carrying the 15th-anniversary era beyond Taipei as a second major arena milestone.",
  title: event.title.zh,
  city: event.city.zh,
  country: "Taiwan",
  venue: event.venue.zh,
  status: "Past",
  type: "milestone",
  href: event.sourceUrl ?? "",
  sourceUrl: event.sourceUrl,
  alternateSourceUrl: event.alternateSourceUrl,
  asset: event.image ?? "",
  todo: `Missing official live image: \`${event.image ?? ""}\`.`,
}));
