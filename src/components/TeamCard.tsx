import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { TeamMember } from "@/types";
import { Reveal } from "@/components/Reveal";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Reveal className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <Image src={member.image} alt={member.name} width={700} height={760} className="aspect-[4/5] object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-950">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold text-[var(--color-primary)]">{member.role}</p>
        <p className="mt-4 text-sm leading-7 text-slate-600">{member.bio}</p>
        <div className="mt-5 flex gap-3">{member.socials.map((social) => <a key={social.label} href={social.href} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-[var(--color-primary)]">{social.label}<ExternalLink className="h-3.5 w-3.5" /></a>)}</div>
      </div>
    </Reveal>
  );
}
