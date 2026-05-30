# Cartory Reseller Hub

A premium, mobile-first SaaS-style dropshipping and reseller platform for Bangladesh. The project is designed around two roles: **Admin** and **Reseller / Dropshipper**.

## Included

- Next.js 15 app-router frontend with TypeScript and Tailwind CSS
- Sticky glassmorphism navigation, dark mode, animated sections, and floating AI assistant
- Landing page sections for hero, reseller CTA, products, courses, challenges, rewards, leaderboard, testimonials-style trust copy, FAQ, help center, and dashboard preview
- Product, order, reseller verification, courses, news, challenge, rewards, notification, and security domain models in Prisma schema
- Express API scaffold with Helmet, CORS, rate limiting, JWT role checks, and Zod validation
- Profit calculation rules that block selling below base price and add a 3% successful-order commission

## Getting Started

```bash
npm install
npm run dev
```

Run the API scaffold separately:

```bash
npm run api:dev
```

## Environment

Create `.env.local` / deployment variables for:

- `DATABASE_URL` for PostgreSQL / Supabase / Railway
- `JWT_SECRET`
- `FRONTEND_URL`
- Cloudinary credentials for secure uploads
- NextAuth provider secrets
