import type { Video } from "@/data/videos";

/** Embedded YouTube video. Only rendered for videos that have a `youtubeId`. */
export function VideoCard({ video }: { video: Video }) {
  if (!video.youtubeId) return null;

  return (
    <article className="archive-frame overflow-hidden">
      <div className="relative aspect-video bg-zinc-900">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
          title={video.title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl font-black leading-tight text-white">{video.title}</h3>
        {video.description && <p className="mt-3 text-sm leading-6 text-zinc-400">{video.description}</p>}
      </div>
    </article>
  );
}
