import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/types";
import { IconByName } from "@/components/IconByName";
import { Reveal } from "@/components/Reveal";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Reveal className="group border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-premium">
      <div className="mb-5 grid h-14 w-14 place-items-center bg-[var(--color-primary)] text-white"><IconByName name={service.icon} className="h-7 w-7" /></div>
      <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{service.summary}</p>
      <ul className="mt-5 grid gap-2 text-sm text-slate-700">
        {service.benefits.slice(0, 3).map((benefit) => <li key={benefit} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />{benefit}</li>)}
      </ul>
      <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[var(--color-primary)]">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
    </Reveal>
  );
}
