import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function CTASection({ title = "Ready to plan your next construction project?", description = "Tell us what you want to build, renovate, or improve. Our team will help you clarify the scope, timeline, and next practical step." }: { title?: string; description?: string }) {
  return (
    <section className="container-px mx-auto max-w-7xl py-12">
      <Reveal className="bg-slate-950 px-6 py-10 text-center text-white shadow-premium sm:px-10">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">{description}</p>
        <Link href="/contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-semibold text-slate-950 transition hover:brightness-105">Request consultation <ArrowRight className="h-4 w-4" /></Link>
      </Reveal>
    </section>
  );
}
