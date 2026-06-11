import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/data/**/*.{js,ts,jsx,tsx,mdx}", "./src/config/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          accent: "var(--color-accent)",
          ink: "var(--color-ink)",
          muted: "var(--color-muted)",
          surface: "var(--color-surface)",
          soft: "var(--color-soft)"
        }
      },
      borderRadius: { DEFAULT: "8px" }
    }
  }
};

export default config;
