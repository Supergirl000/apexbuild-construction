import Link from "next/link";

export default function NotFound() {
  return <main className="container-px mx-auto grid min-h-[70vh] max-w-3xl place-items-center py-20 text-center"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">404</p><h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950">Page not found</h1><p className="mt-5 text-lg leading-8 text-slate-600">The page you are looking for is unavailable, but our construction services and project work are ready to explore.</p><Link href="/" className="mt-8 inline-flex rounded-lg bg-[var(--color-primary)] px-6 py-3 font-semibold text-white">Return home</Link></div></main>;
}
