import { SectionHeading } from "@/components/SectionHeading";
import { ShowCard } from "@/components/ShowCard";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getPageCopy, getShows } from "@/lib/i18n/content";

export function LiveContent({ locale = defaultLocale }: { locale?: Locale }) {
  const copy = getPageCopy(locale);
  const shows = getShows(locale);
  return (
    <div className="page-shell">
      <SectionHeading eyebrow={copy.live.eyebrow} title={copy.live.title} body={copy.live.body} />
      <div className="mt-10 grid gap-6">
        {shows.map((show) => <ShowCard key={`${show.venue}-${show.city}`} show={show} locale={locale} />)}
      </div>
    </div>
  );
}

