import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Terms & Conditions", description: "Terms and conditions for ApexBuild Construction website inquiries and services." };

export default function TermsPage() {
  return <main className="container-px mx-auto max-w-4xl py-20"><h1 className="text-4xl font-semibold tracking-tight text-slate-950">Terms & Conditions</h1><div className="mt-8 space-y-6 text-slate-700"><p>These terms describe the expected use of the {siteConfig.businessName} website and related business inquiry process.</p><h2 className="text-2xl font-semibold text-slate-950">Website Use</h2><p>Visitors agree to use the website for lawful business purposes and avoid attempts to disrupt, misuse, or compromise website functionality.</p><h2 className="text-2xl font-semibold text-slate-950">Content</h2><p>All text, layouts, images, and brand materials are presented for business communication and may be customized for client-specific deployments.</p><h2 className="text-2xl font-semibold text-slate-950">Inquiries</h2><p>Submitting a form does not create a binding service agreement. Formal work begins only after scope, timeline, and commercial terms are accepted in writing.</p><h2 className="text-2xl font-semibold text-slate-950">Contact</h2><p>Questions about these terms can be sent to {siteConfig.email}.</p></div></main>;
}
