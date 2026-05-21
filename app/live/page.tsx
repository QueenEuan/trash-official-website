import { SectionHeading } from "@/components/SectionHeading";
import { ShowCard } from "@/components/ShowCard";
import { shows } from "@/data/shows";

export default function LivePage() {
  return (
    <div className="page-shell">
      <SectionHeading eyebrow="Live" title="Live Archive" body="Arena milestones and selected live chapters from the official TRASH archive." />
      <div className="mt-10 grid gap-6">
        {shows.map((show) => <ShowCard key={`${show.venue}-${show.city}`} show={show} />)}
      </div>
    </div>
  );
}
