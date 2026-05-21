import { NewsCard } from "@/components/NewsCard";
import { SectionHeading } from "@/components/SectionHeading";
import { news } from "@/data/news";

export default function NewsPage() {
  return (
    <div className="page-shell">
      <SectionHeading eyebrow="News" title="Official Updates" body="Selected announcements, release notes, live milestones, and media updates from the TRASH archive." />
      <div className="mt-8">
        {news.map((item) => <NewsCard key={item.slug} item={item} />)}
      </div>
    </div>
  );
}
