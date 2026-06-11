import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/projects", "/team", "/testimonials", "/contact", "/privacy-policy", "/terms"];
  return routes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "" ? 1 : 0.8 }));
}
