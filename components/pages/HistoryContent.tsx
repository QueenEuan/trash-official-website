import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getPageCopy, getTimeline } from "@/lib/i18n/content";

export function HistoryContent({ locale = defaultLocale }: { locale?: Locale }) {
  const copy = getPageCopy(locale);
  const timeline = getTimeline(locale);
  return (
    <div className="page-shell">
      <SectionHeading eyebrow={copy.history.eyebrow} title={copy.history.title} body={copy.history.body} />
      <div className="mt-12">
        <Timeline events={timeline} />
      </div>
    </div>
  );
}

