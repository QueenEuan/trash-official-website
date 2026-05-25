import { LiveCalendarContent } from "@/components/pages/LiveCalendarContent";
import { getLiveEvents } from "@/lib/i18n/content";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const metadata = localizedMetadata("zh", "/live/calendar");

export default function LiveCalendarPage() {
  return <LiveCalendarContent locale="zh" events={getLiveEvents("zh")} />;
}
