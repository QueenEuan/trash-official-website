import { SectionHeading } from "@/components/SectionHeading";
import { VideoCard } from "@/components/VideoCard";
import { youtubeChannelUrl } from "@/data/videos";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getPageCopy, getVideos } from "@/lib/i18n/content";

export function MediaContent({ locale = defaultLocale }: { locale?: Locale }) {
  const copy = getPageCopy(locale);
  const embeddedVideos = getVideos(locale).filter((video) => video.youtubeId);
  return (
    <div className="page-shell">
      <SectionHeading eyebrow={copy.media.eyebrow} title={copy.media.title} body={copy.media.body} />
      <div className="mt-8">
        <a href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">{copy.media.button}</a>
      </div>
      {embeddedVideos.length > 0 && (
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {embeddedVideos.map((video) => <VideoCard key={video.slug} video={video} />)}
        </div>
      )}
    </div>
  );
}
