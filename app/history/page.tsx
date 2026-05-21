import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { timeline } from "@/data/timeline";

export default function HistoryPage() {
  return (
    <div className="page-shell">
      <SectionHeading eyebrow="History" title="Timeline" body="A source-aware chronology of TRASH’s 15-year arc: Taipei formation, independent momentum, key releases, Warner Music phase, arena milestones, and Golden Melody recognition." />
      <div className="mt-12">
        <Timeline events={timeline} />
      </div>
    </div>
  );
}
