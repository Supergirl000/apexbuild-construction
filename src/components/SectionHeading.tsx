import { Reveal } from "@/components/Reveal";

export function SectionHeading({ eyebrow, title, description, align = "center" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <Reveal className={align === "center" ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      {eyebrow && <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--color-primary)]">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>}
    </Reveal>
  );
}
