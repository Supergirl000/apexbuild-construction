import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Contact", description: "Contact the business by form, phone, email, address, or WhatsApp." };

export default function ContactPage() {
  return <main><section className="bg-[var(--color-soft)] py-20"><div className="container-px mx-auto max-w-7xl"><SectionHeading eyebrow="Contact" title="A complete contact experience for qualified inquiries." description="Give visitors every natural contact path: form, map context, address, phone, email, and WhatsApp." /></div></section><section className="container-px mx-auto grid max-w-7xl gap-8 py-20 lg:grid-cols-[1fr_0.8fr]"><ContactForm /><aside className="grid gap-4"><Reveal className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><h2 className="mb-5 text-xl font-semibold">Contact details</h2><div className="grid gap-4 text-sm text-slate-700"><a className="flex gap-3" href={`tel:${siteConfig.phone}`}><Phone className="h-5 w-5 text-[var(--color-primary)]" />{siteConfig.phone}</a><a className="flex gap-3" href={`mailto:${siteConfig.email}`}><Mail className="h-5 w-5 text-[var(--color-primary)]" />{siteConfig.email}</a><span className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-[var(--color-primary)]" />{siteConfig.address}</span></div><a href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-white"><MessageCircle className="h-4 w-4" />WhatsApp</a></Reveal><Reveal className="grid min-h-72 place-items-center rounded-lg border border-slate-200 bg-slate-100 p-6 text-center"><div><MapPin className="mx-auto mb-4 h-10 w-10 text-[var(--color-primary)]" /><h2 className="text-xl font-semibold text-slate-950">Google Maps Location</h2><p className="mt-2 text-sm leading-7 text-slate-600">Map embed area for the business address at {siteConfig.address}.</p></div></Reveal></aside></section></main>;
}
