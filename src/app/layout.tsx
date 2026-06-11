import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.businessName} | Construction & Renovation Services`, template: `%s | ${siteConfig.businessName}` },
  description: siteConfig.description,
  openGraph: { title: siteConfig.businessName, description: siteConfig.description, url: siteConfig.url, siteName: siteConfig.businessName, images: [{ url: siteConfig.hero.image, width: 1200, height: 630 }], locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: siteConfig.businessName, description: siteConfig.description, images: [siteConfig.hero.image] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const themeStyle = {
    "--color-primary": siteConfig.theme.primary,
    "--color-primary-dark": siteConfig.theme.primaryDark,
    "--color-accent": siteConfig.theme.accent,
    "--color-ink": siteConfig.theme.ink,
    "--color-muted": siteConfig.theme.muted,
    "--color-surface": siteConfig.theme.surface,
    "--color-soft": siteConfig.theme.soft
  } as React.CSSProperties;

  return (
    <html lang="en">
      <body className="antialiased" style={themeStyle}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
