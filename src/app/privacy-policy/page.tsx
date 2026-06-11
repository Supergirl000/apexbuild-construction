import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy policy for ApexBuild Construction." };

export default function PrivacyPolicyPage() {
  return <main className="container-px mx-auto max-w-4xl py-20"><h1 className="text-4xl font-semibold tracking-tight text-slate-950">Privacy Policy</h1><div className="mt-8 space-y-6 text-slate-700"><p>{siteConfig.businessName} respects visitor privacy and collects only the information needed to respond to inquiries, improve services, and operate the website securely.</p><h2 className="text-2xl font-semibold text-slate-950">Information We Collect</h2><p>Contact forms may collect name, email address, phone number, company details, and message content. Standard analytics may collect device, browser, and page interaction data.</p><h2 className="text-2xl font-semibold text-slate-950">How We Use Information</h2><p>Information is used to reply to requests, prepare proposals, improve website performance, and maintain reliable communication with prospective and active clients.</p><h2 className="text-2xl font-semibold text-slate-950">Data Protection</h2><p>Reasonable technical and organizational safeguards are used to protect submitted information from unauthorized access, misuse, or disclosure.</p><h2 className="text-2xl font-semibold text-slate-950">Contact</h2><p>Questions about this policy can be sent to {siteConfig.email}.</p></div></main>;
}
