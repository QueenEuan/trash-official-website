import { notFound } from "next/navigation";
import { FallbackImage } from "@/components/FallbackImage";
import { members } from "@/data/members";
import { publicList } from "@/lib/publicContent";

export function generateStaticParams() {
  return members.map((member) => ({ slug: member.slug }));
}

export default async function MemberDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = members.find((item) => item.slug === slug);
  if (!member) notFound();
  const highlights = publicList(member.highlights);
  const notes = publicList(member.notes ?? []);

  return (
    <div className="page-shell">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-zinc-900">
          <FallbackImage src={member.image} fallbackSrc={member.fallbackImage} alt={member.imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-center" />
        </div>
        <div>
          <p className="kicker">{member.role}</p>
          <h1 className="mt-4 font-display text-6xl font-black uppercase leading-none text-white md:text-8xl">{member.name}</h1>
          <p className="mt-3 text-2xl font-bold text-gold">{member.englishName}</p>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-300">{member.bio}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-gold">Instruments</h2>
              <ul className="mt-4 space-y-2 text-zinc-300">{member.instruments.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-gold">Highlights</h2>
              <ul className="mt-4 space-y-2 text-zinc-300">{highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
          {notes.length > 0 && (
            <div className="mt-8 border-t border-white/10 pt-5 text-sm leading-6 text-zinc-500">
              {notes.map((note) => <p key={note}>{note}</p>)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
