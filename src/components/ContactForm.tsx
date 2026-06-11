"use client";

import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold text-slate-800">Name<input required className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[var(--color-primary)]" placeholder="Avery Johnson" /></label><label className="grid gap-2 text-sm font-semibold text-slate-800">Email<input type="email" required className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[var(--color-primary)]" placeholder="avery@company.com" /></label></div>
      <label className="grid gap-2 text-sm font-semibold text-slate-800">Phone<input className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[var(--color-primary)]" placeholder="+1 (555) 000-0000" /></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-800">Project details<textarea required rows={5} className="resize-none rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[var(--color-primary)]" placeholder="Tell us about the business, services, timeline, and goals." /></label>
      <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"><Send className="h-4 w-4" />Send message</button>
    </form>
  );
}
