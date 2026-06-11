import type { Metadata } from "next";
import { Award, Clock, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "About", description: "Learn about ApexBuild Construction, our values, project standards, and delivery approach." };

export default function AboutPage() {
  return <main><section className="bg-[var(--color-soft)] py-20"><div className="container-px mx-auto max-w-7xl"><SectionHeading eyebrow="About" title="Construction experience built on accountability." description="ApexBuild Construction helps homeowners, developers, and business owners move from idea to finished project with practical guidance and dependable execution." /></div></section><section className="container-px mx-auto grid max-w-7xl gap-8 py-20 lg:grid-cols-3">{[{ icon: Award, title: "Proven workmanship", text: "Our team combines skilled trades, durable materials, and careful finishing across residential and commercial projects." }, { icon: ShieldCheck, title: "Safe, insured sites", text: "We keep sites organized with safety standards, supervision, documentation, and responsible contractor coordination." }, { icon: Clock, title: "Clear delivery", text: "Clients get realistic schedules, budget visibility, and direct communication from planning through final handover." }].map((item) => <Reveal key={item.title} className="rounded-lg border border-slate-200 p-6"><item.icon className="mb-5 h-8 w-8 text-[var(--color-primary)]" /><h2 className="text-xl font-semibold">{item.title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p></Reveal>)}</section><CTASection title="Let us help you build with confidence." description="Bring us your plans, site, or renovation idea and we will help define the next construction step." /></main>;
}
