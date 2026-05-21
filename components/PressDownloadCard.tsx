import Link from "next/link";
import { Download } from "lucide-react";
import { publicText } from "@/lib/publicContent";

type PressDownloadCardProps = {
  title: string;
  description: string;
  href: string;
};

export function PressDownloadCard({ title, description, href }: PressDownloadCardProps) {
  const safeDescription = publicText(description, "Asset will be added when available.");
  const content = (
    <>
      <Download className="text-gold" size={24} />
      <div>
        <h3 className="font-display text-2xl font-black uppercase text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{safeDescription}</p>
      </div>
    </>
  );

  if (!href) {
    return (
      <div className="group archive-frame flex min-h-52 flex-col justify-between p-6">
        {content}
      </div>
    );
  }

  return (
    <Link href={href} className="group archive-frame flex min-h-52 flex-col justify-between p-6 transition hover:-translate-y-1 hover:border-gold">
      {content}
    </Link>
  );
}
