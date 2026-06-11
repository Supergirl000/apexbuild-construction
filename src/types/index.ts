export type NavItem = { label: string; href: string };
export type SocialLink = { label: string; href: string };
export type Theme = {
  primary: string;
  primaryDark: string;
  accent: string;
  ink: string;
  muted: string;
  surface: string;
  soft: string;
};
export type Service = { title: string; slug: string; summary: string; description: string; benefits: string[]; icon: string };
export type Project = { title: string; category: string; location: string; year: string; image: string; summary: string; metrics: string[] };
export type TeamMember = { name: string; role: string; bio: string; image: string; socials: SocialLink[] };
export type Testimonial = { name: string; role: string; company: string; quote: string; rating: number; logo: string };
export type Feature = { title: string; description: string; icon: string };
export type Stat = { value: string; label: string };
