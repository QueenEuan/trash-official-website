import { Mail, MapPin, Radio } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { contactContent, siteProfile } from "@/data/site";
import { publicText } from "@/lib/publicContent";

export default function ContactPage() {
  const pendingContactMessage = "Official contact details will be published through approved channels.";
  const booking = publicText(contactContent.booking, pendingContactMessage);
  const press = publicText(contactContent.press, pendingContactMessage);

  return (
    <div className="page-shell">
      <SectionHeading eyebrow="Contact" title="Booking, press, and partnership inquiries." body="For booking, media, partnership, and label inquiries, please use the official channels listed here once published." />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="border border-white/10 bg-zinc-950 p-6">
          <Mail className="text-gold" />
          <h2 className="mt-8 font-display text-2xl font-black uppercase text-white">Booking</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{booking}</p>
        </div>
        <div className="border border-white/10 bg-zinc-950 p-6">
          <Radio className="text-gold" />
          <h2 className="mt-8 font-display text-2xl font-black uppercase text-white">Press</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{press}</p>
        </div>
        <div className="border border-white/10 bg-zinc-950 p-6">
          <MapPin className="text-gold" />
          <h2 className="mt-8 font-display text-2xl font-black uppercase text-white">Base</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{siteProfile.origin}</p>
        </div>
      </div>
    </div>
  );
}
