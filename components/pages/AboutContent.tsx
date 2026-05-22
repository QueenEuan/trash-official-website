import { SectionHeading } from "@/components/SectionHeading";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getAbout, getPageCopy, getSite } from "@/lib/i18n/content";

export function AboutContent({ locale = defaultLocale }: { locale?: Locale }) {
  const copy = getPageCopy(locale);
  const aboutContent = getAbout(locale);
  const siteProfile = getSite(locale);
  return (
    <div className="page-shell">
      <SectionHeading eyebrow={copy.about.eyebrow} title={copy.about.title} body={aboutContent.shortBio} />
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.75fr]">
        <div className="space-y-10">
          <section>
            <p className="kicker">{copy.about.longBio}</p>
            <div className="mt-5 space-y-6 text-lg leading-8 text-zinc-300">
            {aboutContent.longBio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
          <section className="border-t border-white/10 pt-8">
            <p className="kicker">{copy.about.pressReady}</p>
            <p className="mt-5 text-base leading-7 text-zinc-300">{aboutContent.pressDescription}</p>
          </section>
        </div>
        <aside className="border border-white/10 bg-zinc-950 p-6">
          <p className="kicker">{copy.about.officialProfile}</p>
          <dl className="mt-6 space-y-5">
            <div><dt className="text-sm text-zinc-500">{copy.about.origin}</dt><dd className="font-display text-2xl font-black uppercase text-white">{siteProfile.origin}</dd></div>
            <div><dt className="text-sm text-zinc-500">{copy.about.founded}</dt><dd className="font-display text-2xl font-black uppercase text-white">{siteProfile.founded}</dd></div>
            <div><dt className="text-sm text-zinc-500">{copy.about.label}</dt><dd className="font-display text-2xl font-black uppercase text-white">{siteProfile.label}</dd></div>
            <div><dt className="text-sm text-zinc-500">{copy.about.genre}</dt><dd className="font-display text-2xl font-black uppercase text-white">{siteProfile.genres.join(" / ")}</dd></div>
            <div><dt className="text-sm text-zinc-500">{copy.about.members}</dt><dd className="mt-2 text-sm leading-6 text-zinc-300">阿夜 / Marz23<br />頤原 / Euan<br />博文 / TTeng<br />魁剛 / Kuei gun</dd></div>
          </dl>
        </aside>
      </div>
    </div>
  );
}

