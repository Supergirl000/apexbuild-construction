import type { NavItem, SocialLink, Theme } from "@/types";

export const siteConfig = {
  businessName: "ApexBuild Construction",
  logoText: "ApexBuild",
  tagline: "Reliable construction for homes, businesses, and communities.",
  description: "ApexBuild Construction delivers residential, commercial, renovation, and infrastructure projects with disciplined planning, transparent communication, and premium workmanship.",
  url: "https://apexbuild-construction.vercel.app",
  phone: "+1 (555) 018-7420",
  whatsapp: "+15550187420",
  email: "projects@apexbuild.example",
  address: "420 Builder Avenue, Suite 12, Austin, TX",
  hero: {
    eyebrow: "Licensed construction partner",
    title: "Roads, Homes & Commercial Projects Built With Discipline.",
    description: "ApexBuild delivers dependable construction, renovation, concrete, and site works with experienced crews, transparent schedules, and quality control on every job.",
    primaryCta: "Explore More",
    secondaryCta: "View Projects",
    image: "/images/construction-hero.png"
  },
  theme: {
    primary: "#E63524",
    primaryDark: "#B91C1C",
    accent: "#FBBF24",
    ink: "#121212",
    muted: "#5F6673",
    surface: "#FFFFFF",
    soft: "#F5F1EC"
  } satisfies Theme,
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" }
  ] satisfies NavItem[],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Instagram", href: "https://www.instagram.com" },
    { label: "Facebook", href: "https://www.facebook.com" }
  ] satisfies SocialLink[]
};
