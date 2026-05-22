import { BriefcaseBusiness, Handshake, Mail, Megaphone, Music2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getContact, getPageCopy, getPressKit } from "@/lib/i18n/content";

const contactIcons = [Megaphone, Music2, Handshake, BriefcaseBusiness, Mail];

export function ContactContent({ locale = defaultLocale }: { locale?: Locale }) {
  const copy = getPageCopy(locale);
  const contactContent = getContact(locale);
  const contactEmail = contactContent.email;
  const pressKit = getPressKit(locale);
  const officialLinks = pressKit.links.filter((link) => ["官方網站", "Official website", "公式サイト", "공식 웹사이트", "YouTube", "Instagram", "Facebook"].includes(link.label));

  return (
    <div className="page-shell">
      <SectionHeading
        eyebrow={copy.contact.eyebrow}
        title={copy.contact.title}
        body={copy.contact.body}
      />

      <section className="mt-12 grid gap-5 md:grid-cols-2">
        {contactContent.sections.map((section, index) => {
          const Icon = contactIcons[index] || Mail;
          return (
            <article key={section.title} className="archive-frame flex min-h-64 flex-col justify-between p-6 md:p-7">
              <div>
                <Icon className="text-gold" size={26} />
                <h2 className="mt-7 font-display text-3xl font-black uppercase leading-none text-white md:text-4xl">{section.title}</h2>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{section.body}</p>
              </div>
              <div className="mt-8 border-t border-white/10 pt-5 text-sm leading-6 text-zinc-300">
                <p><span className="font-bold text-zinc-500">{copy.contact.contact}</span> {section.contact}</p>
                {section.email && (
                  <p className="mt-2">
                    <span className="font-bold text-zinc-500">{copy.contact.email}</span>{" "}
                    <a href={`mailto:${section.email}`} className="text-gold transition hover:text-white">
                      {section.email}
                    </a>
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-14 archive-frame bg-[linear-gradient(135deg,rgba(127,16,24,0.42),rgba(0,0,0,0.95))] p-7 md:p-10">
        <p className="kicker">{copy.contact.ctaEyebrow}</p>
        <h2 className="mt-3 max-w-4xl font-display text-4xl font-black uppercase leading-none text-white md:text-6xl">
          {copy.contact.ctaTitle}
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${contactEmail}`} className="btn-primary">
            {copy.contact.email} {contactEmail}
          </a>
          {officialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
