# tutor-website

Marketing and intake site for my SAT tutoring practice, built with Next.js 15 (App Router), React 19, and Supabase. Live client work — this site handles real inquiries and testimonial collection.

## Features

- **Contact intake pipeline** — a validated contact form posts to `/api/contact`, which writes submissions to Supabase and mirrors them into Google Sheets via an Apps Script webhook (`scripts/google-apps-script/contact-intake.gs`) so inquiries land where I actually check them.
- **Testimonial collection** — a public `/share-feedback` form writes to a moderated `testimonial_submissions` table; approved testimonials render on the site through `src/lib/testimonials.js`.
- **SEO plumbing** — programmatic Open Graph / Twitter card images, `sitemap.js`, `robots.js`, structured metadata (`seo.js`), and an `llms.txt` route for AI crawlers.
- **Services + FAQ pages** with interactive selectors and accordions built as client components.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 App Router, React 19 |
| Database | Supabase (Postgres) — schema in `db/migrations/` |
| Forms → Sheets | Google Apps Script webhook |
| Analytics | Vercel Analytics |
| Hosting | Vercel |

## Local development

```bash
npm install
cp .env.example .env.local   # fill in Supabase URL + service-role key
npm run dev
```

Apply the SQL in `db/migrations/` to your Supabase project (in order) before testing the contact and testimonial forms.

## Architecture notes

- API routes use a server-only Supabase admin client (`src/lib/supabase-admin.js`) so the service-role key never reaches the browser; public pages read through row-level-security-scoped queries.
- Migrations are committed as plain SQL rather than managed by an ORM — the schema is two tables, and keeping them readable beats adding tooling.
