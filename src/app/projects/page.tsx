import type { Metadata } from "next";
import { ProjectFilter } from "@/components/ProjectFilter";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = { title: "Projects", description: "Browse a filterable portfolio grid with project categories, cards, metrics, locations, and details." };

export default function ProjectsPage() {
  return <main><section className="bg-[var(--color-soft)] py-20"><div className="container-px mx-auto max-w-7xl"><SectionHeading eyebrow="Projects" title="Completed construction projects across Texas." description="Filter our work by project type and review the scope, location, delivery year, and outcomes behind each build." /></div></section><section className="container-px mx-auto max-w-7xl py-20"><ProjectFilter /></section><CTASection title="Have a site or plan ready to discuss?" description="Share your construction goals with our team and we will help map the next step clearly." /></main>;
}
