"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Facebook, HardHat, Instagram, Linkedin, Mail, MapPin, Menu, Phone, ShieldCheck, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
      <div className="hidden bg-[#111111] text-white lg:block">
        <div className="container-px mx-auto flex h-11 max-w-7xl items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-8">
            <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 text-white/90"><Phone className="h-3.5 w-3.5 text-[var(--color-primary)]" />{siteConfig.phone}</a>
            <span className="inline-flex items-center gap-2 text-white/90"><MapPin className="h-3.5 w-3.5 text-[var(--color-primary)]" />{siteConfig.address}</span>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-white/90"><Mail className="h-3.5 w-3.5 text-[var(--color-primary)]" />{siteConfig.email}</a>
          </div>
          <div className="flex items-center gap-3">
            <a aria-label="Facebook" href="https://www.facebook.com" className="grid h-7 w-7 place-items-center rounded-full border border-white/25"><Facebook className="h-3.5 w-3.5" /></a>
            <a aria-label="Instagram" href="https://www.instagram.com" className="grid h-7 w-7 place-items-center rounded-full border border-white/25"><Instagram className="h-3.5 w-3.5" /></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com" className="grid h-7 w-7 place-items-center rounded-full border border-white/25"><Linkedin className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>
      <nav className="container-px mx-auto flex h-24 max-w-7xl items-center justify-between bg-white" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3 font-bold tracking-tight">
          <span className="grid h-14 w-14 place-items-center bg-[var(--color-primary)] text-white"><HardHat className="h-8 w-8" /></span>
          <span className="leading-none"><span className="block text-2xl text-[#111111]">{siteConfig.logoText}</span><span className="mt-1 hidden text-[11px] font-black uppercase tracking-[0.24em] text-slate-500 sm:block">Construction Co.</span></span>
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => <Link key={item.href} href={item.href} className="text-xs font-bold uppercase tracking-wide text-slate-700 transition hover:text-[var(--color-primary)]">{item.label}</Link>)}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <span className="inline-flex items-center gap-2 border-l border-slate-200 pl-6 text-xs font-black uppercase tracking-wide text-slate-700"><ShieldCheck className="h-4 w-4 text-[var(--color-primary)]" />Licensed</span>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--color-primary)] px-6 py-4 text-sm font-black uppercase tracking-wide text-white shadow-sm transition hover:bg-[var(--color-primary-dark)]">Get Quote <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <button aria-label="Toggle menu" onClick={() => setOpen((value) => !value)} className="grid h-12 w-12 place-items-center border border-slate-300 lg:hidden">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {siteConfig.nav.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">{item.label}</Link>)}
          </div>
        </div>
      )}
    </header>
  );
}
