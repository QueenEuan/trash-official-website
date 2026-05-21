import { ArrowUpRight } from "lucide-react";
import type { Video } from "@/data/videos";

export function VideoCard({ video }: { video: Video }) {
  const content = (
    <div className="archive-frame flex min-h-56 flex-col justify-between p-6 transition group-hover:-translate-y-1 group-hover:border-gold">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Official YouTube Hub</p>
        <h3 className="mt-4 font-display text-4xl font-black uppercase leading-none text-white">{video.title}</h3>
        <p className="mt-5 text-sm leading-6 text-zinc-400">{video.description}</p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-zinc-500 transition group-hover:text-gold">
        Open Channel <ArrowUpRight size={16} />
      </span>
    </div>
  );

  if (video.href) {
    return (
      <a href={video.href} target="_blank" rel="noopener noreferrer" className="group block">
        {content}
      </a>
    );
  }

  return (
    <article className="group block">
      {content}
    </article>
  );
}
