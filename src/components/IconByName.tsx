import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, Database, Globe2, LayoutGrid, MessageSquareMore, MonitorSmartphone, Palette, Search, ShieldCheck, Sparkles, Star, TrendingUp, UsersRound, Wrench } from "lucide-react";

const icons = { BriefcaseBusiness, Database, Globe2, LayoutGrid, MessageSquareMore, MonitorSmartphone, Palette, Search, ShieldCheck, Sparkles, Star, TrendingUp, UsersRound, Wrench } satisfies Record<string, LucideIcon>;

export function IconByName({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name as keyof typeof icons] ?? Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}
