import { SectionHeading } from "@/components/SectionHeading";
import { VideoCard } from "@/components/VideoCard";
import { videos } from "@/data/videos";

export default function MediaPage() {
  return (
    <div className="page-shell">
      <SectionHeading eyebrow="Media" title="Official YouTube Hub" body="Official music videos, live sessions, behind-the-scenes footage, and release content are collected through the TRASH YouTube channel." />
      <div className="mt-8">
        <a href="https://www.youtube.com/channel/UCuAzL0PsEngYktHkjNtJKgg" target="_blank" rel="noopener noreferrer" className="btn-primary">Official YouTube Channel</a>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => <VideoCard key={video.slug} video={video} />)}
      </div>
    </div>
  );
}
