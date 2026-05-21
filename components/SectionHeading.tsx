type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="kicker">{eyebrow}</p>}
      <h2 className="mt-3 text-balance font-display text-4xl font-black uppercase leading-[0.95] text-zinc-50 md:text-6xl">{title}</h2>
      <div className={align === "center" ? "metal-rule mx-auto mt-5 max-w-44" : "metal-rule mt-5 max-w-44"} />
      {body && <p className="mt-5 text-pretty text-base leading-7 text-zinc-400 md:text-lg">{body}</p>}
    </div>
  );
}
