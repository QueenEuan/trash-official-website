import { notFound } from "next/navigation";
import { NewsCard } from "@/components/NewsCard";
import { news } from "@/data/news";
import { publicDateLabel, publicList } from "@/lib/publicContent";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const dateLabel = publicDateLabel(item.dateLabel);
  const meta = [item.category, dateLabel].filter(Boolean).join(" / ");
  const body = publicList(item.body);

  return (
    <article className="page-shell">
      <p className="kicker">{meta}</p>
      <h1 className="mt-4 max-w-5xl font-display text-5xl font-black uppercase leading-none text-white md:text-8xl">{item.title}</h1>
      <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-300">{item.excerpt}</p>
      <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-8 text-zinc-300">
        {body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap gap-3">
        {item.sourceUrl && <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">Original Source</a>}
        {item.alternateSourceUrl && <a href={item.alternateSourceUrl} target="_blank" rel="noopener noreferrer" className="btn-muted">Additional Source</a>}
      </div>
      <section className="mt-16 border-t border-white/10 pt-10">
        <h2 className="kicker">More News</h2>
        <div className="mt-4">
          {news.filter((entry) => entry.slug !== item.slug).map((entry) => <NewsCard key={entry.slug} item={entry} />)}
        </div>
      </section>
    </article>
  );
}
