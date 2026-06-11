import Link from "next/link";
import { ArrowUpRight, HardHat, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const primaryLinks = siteConfig.nav.filter((item) =>
    ["/", "/about", "/services", "/projects", "/contact"].includes(item.href)
  );

  return (
    <footer className="bg-[#111111] text-white">
      <div className="border-b border-white/10 bg-[var(--color-primary)]">
        <div className="container-px mx-auto flex max-w-7xl flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-lg font-black">Ready to price your next construction project?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-black uppercase tracking-wide text-[#111111]">
            Get quote <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="container-px mx-auto grid max-w-7xl gap-8 py-10 lg:grid-cols-[1.4fr_0.9fr_1.1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center bg-[var(--color-primary)] text-white">
              <HardHat className="h-7 w-7" />
            </span>
            <span>
              <span className="block text-2xl font-black">{siteConfig.logoText}</span>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Construction Co.</span>
            </span>
          </Link>
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">{siteConfig.description}</p>
          <div className="mt-5 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-3 text-xs font-black uppercase tracking-wide text-slate-200">
            <ShieldCheck className="h-4 w-4 text-[var(--color-accent)]" />
            Licensed crews. Clear timelines. Clean handover.
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-slate-400">Pages</h2>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-300 lg:grid-cols-1">
            {primaryLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-slate-400">Contact</h2>
          <div className="grid gap-4 text-sm text-slate-300">
            <a className="flex gap-3 transition hover:text-white" href={`tel:${siteConfig.phone}`}>
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              {siteConfig.phone}
            </a>
            <a className="flex gap-3 transition hover:text-white" href={`mailto:${siteConfig.email}`}>
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              {siteConfig.email}
            </a>
            <span className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              {siteConfig.address}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-px mx-auto flex max-w-7xl flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</span>
          <div className="flex gap-5">
            <Link className="transition hover:text-white" href="/privacy-policy">Privacy Policy</Link>
            <Link className="transition hover:text-white" href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
