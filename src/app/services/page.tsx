import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Services", description: "Explore residential construction, commercial building, renovation, civil works, project management, and maintenance services." };

export default function ServicesPage() {
  return <main><section className="bg-[var(--color-soft)] py-20"><div className="container-px mx-auto max-w-7xl"><SectionHeading eyebrow="Services" title="Construction services for homes, businesses, and sites." description="ApexBuild supports projects from early planning and estimating through site delivery, finishing, maintenance, and long-term property improvements." /></div></section><section className="container-px mx-auto max-w-7xl py-20"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></section><section className="bg-slate-950 py-20 text-white"><div className="container-px mx-auto max-w-7xl"><SectionHeading eyebrow="Benefits" title="Practical value on every job site." description="Our services are designed around predictable delivery, durable results, and a smoother client experience." /><div className="grid gap-4 md:grid-cols-2">{services.flatMap((service) => service.benefits).slice(0, 8).map((benefit) => <Reveal key={benefit} className="flex gap-3 rounded-lg bg-white/5 p-4"><CheckCircle2 className="h-5 w-5 text-[var(--color-accent)]" />{benefit}</Reveal>)}</div></div></section><CTASection /></main>;
}
