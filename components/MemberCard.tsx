import Link from "next/link";
import type { Member } from "@/data/members";
import { FallbackImage } from "@/components/FallbackImage";

export function MemberCard({ member }: { member: Member }) {
  return (
    <Link href={`/members/${member.slug}`} className="group relative block overflow-hidden border border-white/10 bg-black transition hover:-translate-y-1 hover:border-gold/70">
      <span className="absolute left-4 top-4 z-10 text-[0.62rem] font-black uppercase tracking-[0.18em] text-gold">{member.role}</span>
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
        <FallbackImage src={member.image} fallbackSrc={member.fallbackImage} alt={member.imageAlt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-center transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.78))]" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display text-4xl font-black uppercase leading-none text-white">{member.name}</h3>
          <p className="mt-1 text-base font-black text-gold">{member.englishName}</p>
        </div>
      </div>
      <div className="border-t border-white/10 p-5">
        <p className="text-sm leading-6 text-zinc-400">{member.intro}</p>
      </div>
    </Link>
  );
}
