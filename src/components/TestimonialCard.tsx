import { Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { Reveal } from "@/components/Reveal";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Reveal className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex gap-1 text-[var(--color-accent)]">{Array.from({ length: testimonial.rating }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div>
      <blockquote className="text-base leading-8 text-slate-700">&quot;{testimonial.quote}&quot;</blockquote>
      <div className="mt-6 border-t border-slate-100 pt-5"><p className="font-semibold text-slate-950">{testimonial.name}</p><p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p></div>
    </Reveal>
  );
}

