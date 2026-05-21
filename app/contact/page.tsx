import { BriefcaseBusiness, Handshake, Mail, Megaphone, Music2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { contactContent, pressKit } from "@/data/site";

const contactIcons = [Megaphone, Music2, Handshake, BriefcaseBusiness, Mail];

export default function ContactPage() {
  const safeMessage = contactContent.safeMessage;
  const officialLinks = pressKit.links.filter((link) => ["Official website", "YouTube", "Instagram", "Facebook"].includes(link.label));

  return (
    <div className="page-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Official inquiry hub."
        body="For press, booking, brand, music-business, and general official inquiries, please use approved TRASH channels. Private or unconfirmed contact details are not published on this site."
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
              <p className="mt-8 border-t border-white/10 pt-5 text-sm leading-6 text-zinc-300">{safeMessage}</p>
            </article>
          );
        })}
      </section>

      <section className="mt-14 archive-frame bg-[linear-gradient(135deg,rgba(127,16,24,0.42),rgba(0,0,0,0.95))] p-7 md:p-10">
        <p className="kicker">Official TRASH Inquiries</p>
        <h2 className="mt-3 max-w-4xl font-display text-4xl font-black uppercase leading-none text-white md:text-6xl">
          For official TRASH inquiries, please contact the management team through approved channels.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
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
