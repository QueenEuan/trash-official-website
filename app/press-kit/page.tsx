import { FallbackImage } from "@/components/FallbackImage";
import { PressDownloadCard } from "@/components/PressDownloadCard";
import { SectionHeading } from "@/components/SectionHeading";
import { members } from "@/data/members";
import { contactContent, pressKit, siteProfile } from "@/data/site";
import { isPublicSafe, publicList } from "@/lib/publicContent";

export default function PressKitPage() {
  const awards = publicList(pressKit.awards);
  const usageNotes = publicList(pressKit.usageNotes);

  return (
    <div className="page-shell">
      <section className="archive-frame p-7 md:p-10">
        <div className="mb-8 flex items-center justify-between gap-5 border-b border-white/10 pb-6">
          <FallbackImage src={siteProfile.assets.logoWhite} fallbackSrc="/images/hero.svg" alt="TRASH official white logo" width={90} height={90} className="h-16 w-auto object-contain" />
          <p className="max-w-md text-right text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Official band materials</p>
        </div>
        <SectionHeading eyebrow="Press Kit" title="Official materials for press, promoters, and partners." body="A reliable reference hub for approved TRASH profile copy, official links, member information, recognition notes, and request-based media assets." />
        <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 text-sm uppercase tracking-[0.16em] text-zinc-500 md:grid-cols-3">
          <p>Band: <span className="font-bold text-silver">{siteProfile.name}</span></p>
          <p>Base: <span className="font-bold text-silver">{siteProfile.origin}</span></p>
          <p>Label: <span className="font-bold text-silver">{siteProfile.label}</span></p>
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="archive-frame p-7">
          <p className="kicker">Official Bio</p>
          <p className="mt-5 text-lg leading-8 text-zinc-300">{pressKit.officialBio}</p>
          <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-zinc-400">{pressKit.longBio}</p>
        </div>
        <div className="archive-frame p-7">
          <p className="kicker">Official Links</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {pressKit.links.map((link) => (
              <div key={link.label}>
                {link.href ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full">
                    {link.label}
                  </a>
                ) : (
                  <span className="btn-muted w-full">
                    {link.label}
                  </span>
                )}
                {isPublicSafe(link.note) && <p className="mt-2 text-xs leading-5 text-zinc-600">{link.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <p className="kicker">Downloads</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pressKit.downloads.map((item) => <PressDownloadCard key={item.title} {...item} />)}
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="kicker">Awards / Recognition</p>
          <ul className="mt-5 space-y-3 border-t border-white/10">
            {awards.map((award) => (
              <li key={award} className="border-b border-white/10 py-4 text-sm leading-6 text-zinc-300">{award}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker">Members</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {members.map((member) => (
              <li key={member.slug} className="archive-frame p-4">
                <p className="font-display text-2xl font-black uppercase text-white">{member.name}</p>
                <p className="mt-1 text-sm font-bold text-gold">{member.englishName}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">{member.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-14 archive-frame bg-[linear-gradient(135deg,rgba(127,16,24,0.42),rgba(0,0,0,0.95))] p-7">
        <h2 className="font-display text-3xl font-black uppercase text-white">Press Contact</h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
          For press, booking, partnership, and media material requests, please contact 經紀/依凡 / 華納音樂.
        </p>
        <a href={`mailto:${contactContent.email}`} className="btn-primary mt-6">
          Email {contactContent.email}
        </a>
      </section>
      {usageNotes.length > 0 && <section className="mt-8 border border-white/10 bg-zinc-950 p-6">
        <p className="kicker">Usage Notes</p>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-400">
          {usageNotes.map((note) => <li key={note}>{note}</li>)}
        </ul>
      </section>}
    </div>
  );
}
