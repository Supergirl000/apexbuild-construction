# Premium Business Website Template

A production-ready Next.js business website template for construction firms, hotels, restaurants, schools, real estate agencies, NGOs, logistics companies, garages, salons, consultants, and growing service businesses.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deployment On Vercel

Push the project to a Git provider, import it in Vercel, keep the default Next.js settings, and deploy.

## Customize Branding

Edit `src/config/site.ts` to change the business name, logo, colors, phone number, email, address, social links, SEO defaults, and hero content. The theme is converted into CSS variables in `src/app/layout.tsx`, so one config file controls the brand system.

## Reuse For Another Client

Update `src/config/site.ts`, replace the records in `src/data/`, switch imagery to the new client industry, and deploy a new Vercel project. Components do not contain business copy, so the project is ready for a future CMS such as Sanity, Strapi, or Contentful.
