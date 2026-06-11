import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Project } from "@/types";
import { Reveal } from "@/components/Reveal";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal className="overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
      <Image src={project.image} alt={project.title} width={900} height={640} className="aspect-[4/3] object-cover" loading="lazy" />
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3 text-sm text-slate-500"><span className="font-semibold text-[var(--color-primary)]">{project.category}</span><span>{project.year}</span></div>
        <h3 className="text-xl font-black text-slate-950">{project.title}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-slate-500"><MapPin className="h-4 w-4" />{project.location}</p>
        <p className="mt-4 text-sm leading-7 text-slate-600">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.metrics.map((metric) => <span key={metric} className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{metric}</span>)}</div>
      </div>
    </Reveal>
  );
}
