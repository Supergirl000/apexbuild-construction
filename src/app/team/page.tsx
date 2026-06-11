import type { Metadata } from "next";
import { TeamCard } from "@/components/TeamCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { team } from "@/data/team";

export const metadata: Metadata = { title: "Team", description: "Meet the ApexBuild leadership, project management, estimating, and site supervision team." };

export default function TeamPage() {
  return <main><section className="bg-[var(--color-soft)] py-20"><div className="container-px mx-auto max-w-7xl"><SectionHeading eyebrow="Team" title="Meet the people responsible for your project." description="Our leadership, estimating, project management, and site supervision teams work together to keep builds organized and accountable." /></div></section><section className="container-px mx-auto max-w-7xl py-20"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{team.map((member) => <TeamCard key={member.name} member={member} />)}</div></section><CTASection title="Work with a team that takes ownership." description="From the first estimate to final walkthrough, ApexBuild keeps experienced people close to the details." /></main>;
}
