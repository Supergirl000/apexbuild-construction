import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

export default function Home() {
  const reasons = [
    "Licensed and insured crews",
    "Clear estimates before work begins",
    "Daily site supervision",
    "Clean handover with quality checks"
  ];

  return (
    <main>
      <Hero />

      <section className="container-px mx-auto max-w-7xl py-16">
        <SectionHeading
          eyebrow="Core services"
          title="Construction work made clear, practical, and reliable."
          description="ApexBuild handles the essential work clients usually need first: building, renovating, managing, and maintaining quality spaces."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 bg-[#111111] px-6 py-4 text-sm font-black uppercase tracking-wide text-white">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#111111] py-16 text-white">
        <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Why ApexBuild"
            title="A focused contractor for serious projects."
            description="We keep the work clear: practical estimates, supervised crews, safe sites, and a clean handover when the job is complete."
          />
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item) => (
              <div key={item} className="flex gap-3 border border-white/10 bg-white/5 p-5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <SectionHeading
          eyebrow="Recent work"
          title="A few completed projects."
          description="The full portfolio stays on the Projects page. The Home page only shows enough proof to build confidence."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Reveal key={project.title} className="border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-wide text-[var(--color-primary)]">{project.category}</p>
              <h3 className="mt-3 text-xl font-black text-slate-950">{project.title}</h3>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="h-4 w-4" />
                {project.location}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{project.summary}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 border border-slate-300 px-6 py-4 text-sm font-black uppercase tracking-wide text-slate-950">
            Open portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection
        title="Have a construction project to discuss?"
        description="Send the project details, site location, and timeline. ApexBuild will help you clarify the next step."
      />

      <section className="container-px mx-auto max-w-7xl pb-16">
        <Reveal className="grid gap-6 border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-3">
          <a className="flex gap-3" href={`tel:${siteConfig.phone}`}>
            <Phone className="h-5 w-5 text-[var(--color-primary)]" />
            <span><b className="block">Call us</b>{siteConfig.phone}</span>
          </a>
          <a className="flex gap-3" href={`mailto:${siteConfig.email}`}>
            <Mail className="h-5 w-5 text-[var(--color-primary)]" />
            <span><b className="block">Email</b>{siteConfig.email}</span>
          </a>
          <span className="flex gap-3">
            <MapPin className="h-5 w-5 text-[var(--color-primary)]" />
            <span><b className="block">Visit</b>{siteConfig.address}</span>
          </span>
        </Reveal>
      </section>
    </main>
  );
}
