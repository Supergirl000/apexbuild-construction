import type { Metadata } from "next";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = { title: "Testimonials", description: "Read reviews from ApexBuild residential, commercial, renovation, and industrial construction clients." };

export default function TestimonialsPage() {
  return <main><section className="bg-[var(--color-soft)] py-20"><div className="container-px mx-auto max-w-7xl"><SectionHeading eyebrow="Testimonials" title="Reviews and company logos for instant credibility." description="A complete testimonial page helps visitors validate quality, reliability, and outcomes before contacting the business." /></div></section><section className="container-px mx-auto max-w-7xl py-20"><div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{testimonials.map((item) => <div key={item.logo} className="rounded-lg border border-slate-200 bg-white p-5 text-center text-lg font-semibold text-slate-700 shadow-sm">{item.logo}</div>)}</div><div className="grid gap-6 md:grid-cols-2">{testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} testimonial={testimonial} />)}</div></section><CTASection /></main>;
}
