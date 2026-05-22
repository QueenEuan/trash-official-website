import { notFound } from "next/navigation";
import { FallbackImage } from "@/components/FallbackImage";
import { publicList } from "@/lib/publicContent";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getMembers, getPageCopy } from "@/lib/i18n/content";


export async function MemberDetailContent({ params, locale = defaultLocale }: { params: Promise<{ slug: string }>; locale?: Locale }) {
  const { slug } = await params;
  const copy = getPageCopy(locale);
  const members = getMembers(locale);
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
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-gold">{copy.members.instruments}</h2>
              <ul className="mt-4 space-y-2 text-zinc-300">{member.instruments.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-gold">{copy.members.highlights}</h2>
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
