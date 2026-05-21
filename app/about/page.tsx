import { SectionHeading } from "@/components/SectionHeading";
import { aboutContent, siteProfile } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="page-shell">
      <SectionHeading eyebrow="About" title="TRASH：從台北出發的華語搖滾旅程。" body={aboutContent.shortBio} />
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.75fr]">
        <div className="space-y-10">
          <section>
            <p className="kicker">Long Bio</p>
            <div className="mt-5 space-y-6 text-lg leading-8 text-zinc-300">
            {aboutContent.longBio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
          <section className="border-t border-white/10 pt-8">
            <p className="kicker">Press-ready Description</p>
            <p className="mt-5 text-base leading-7 text-zinc-300">{aboutContent.pressDescription}</p>
          </section>
        </div>
        <aside className="border border-white/10 bg-zinc-950 p-6">
          <p className="kicker">Official Profile</p>
          <dl className="mt-6 space-y-5">
            <div><dt className="text-sm text-zinc-500">Origin</dt><dd className="font-display text-2xl font-black uppercase text-white">{siteProfile.origin}</dd></div>
            <div><dt className="text-sm text-zinc-500">Founded</dt><dd className="font-display text-2xl font-black uppercase text-white">{siteProfile.founded}</dd></div>
            <div><dt className="text-sm text-zinc-500">Label</dt><dd className="font-display text-2xl font-black uppercase text-white">{siteProfile.label}</dd></div>
            <div><dt className="text-sm text-zinc-500">Genre</dt><dd className="font-display text-2xl font-black uppercase text-white">{siteProfile.genres.join(" / ")}</dd></div>
            <div><dt className="text-sm text-zinc-500">Members</dt><dd className="mt-2 text-sm leading-6 text-zinc-300">阿夜 / Marz23<br />頤原 / Euan<br />博文 / TTeng<br />魁剛 / Kuei gun</dd></div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
