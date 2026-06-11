import type { Project } from "@/types";

export const projectCategories = ["All", "Residential", "Commercial", "Renovation", "Infrastructure", "Industrial"];

export const projects: Project[] = [
  { title: "Oakridge Custom Residence", category: "Residential", location: "Austin, TX", year: "2026", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80", summary: "A ground-up family residence with open living spaces, durable finishes, and energy-conscious detailing.", metrics: ["4,800 sq ft", "8-month build", "Custom finish package"] },
  { title: "Cedar Park Office Fit-Out", category: "Commercial", location: "Cedar Park, TX", year: "2026", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80", summary: "A modern commercial interior delivered with careful phasing, acoustic upgrades, and premium client-facing areas.", metrics: ["22 offices", "6 meeting rooms", "Completed on schedule"] },
  { title: "Riverside Kitchen Remodel", category: "Renovation", location: "Round Rock, TX", year: "2025", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80", summary: "A full kitchen and living-space renovation with structural opening, custom cabinetry, and stone surfaces.", metrics: ["6-week delivery", "Custom millwork", "Occupied home"] },
  { title: "Westgate Drainage Upgrade", category: "Infrastructure", location: "Georgetown, TX", year: "2025", image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80", summary: "Site drainage, concrete channels, and access improvements for a growing commercial property.", metrics: ["1.4 acre site", "Concrete works", "Improved access"] },
  { title: "Horizon Warehouse Expansion", category: "Industrial", location: "San Marcos, TX", year: "2025", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80", summary: "A steel-frame warehouse extension with loading improvements, slab works, and operational continuity planning.", metrics: ["18,000 sq ft", "Live-site delivery", "Safety-first plan"] },
  { title: "Lakeside Guest House", category: "Residential", location: "Lakeway, TX", year: "2026", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", summary: "A compact guest house built with warm materials, efficient systems, and high-end exterior detailing.", metrics: ["1,200 sq ft", "Turnkey handover", "Premium envelope"] }
];

