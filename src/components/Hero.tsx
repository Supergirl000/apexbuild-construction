"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, HardHat } from "lucide-react";
import { siteConfig } from "@/config/site";
import { stats } from "@/data/stats";

export function Hero() {
  const titleParts = siteConfig.hero.title.split(" ");
  const highlighted = titleParts.slice(-4).join(" ");
  const normal = titleParts.slice(0, -4).join(" ");

  return (
    <section
      className="relative overflow-hidden bg-[#111111] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${siteConfig.hero.image})` }}
    >
      <div className="absolute inset-0 bg-[#111111]/62" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-[#111111]/25" />
      <div className="absolute left-0 top-0 hidden h-full w-2 bg-[var(--color-primary)] lg:block" />
      <div className="container-px relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center py-14 lg:min-h-[560px]">
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 border-l-4 border-[var(--color-primary)] bg-white/10 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur">
            <HardHat className="h-4 w-4 text-[var(--color-accent)]" />
            {siteConfig.hero.eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-black leading-[1.03] sm:text-5xl lg:text-6xl">
            {normal} <span className="text-[var(--color-primary)]">{highlighted}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{siteConfig.hero.description}</p>
          <div className="mt-6 grid max-w-2xl gap-3 text-sm font-bold text-white/90 sm:grid-cols-3">
            {["Licensed crews", "Clear timelines", "Clean handover"].map((item) => <span key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--color-primary)]" />{item}</span>)}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[var(--color-primary-dark)]">{siteConfig.hero.primaryCta}<ArrowUpRight className="h-4 w-4" /></Link>
            <Link href="/projects" className="inline-flex items-center justify-center gap-2 border border-white/40 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-slate-950">{siteConfig.hero.secondaryCta}<ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </motion.div>
      </div>
      <div className="relative border-t border-white/15 bg-[var(--color-primary)]">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-white/20 px-6 py-5 text-center sm:border-r">
              <p className="text-3xl font-black text-white lg:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wide text-white/85">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
