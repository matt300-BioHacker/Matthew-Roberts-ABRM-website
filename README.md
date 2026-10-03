# ABRM — Matthew Roberts

The working V1 public education hub for Autonomic Bio Recovery Maneuvers.

Built with TypeScript, React, Vinext, Cloudflare Workers, and D1. Public education
remains free. Books and media link to the supplied destinations. Premium courses,
POD merchandise, membership, scheduling, email delivery, and the fitness app are
clearly marked as upcoming or unconnected.

## Develop

Install with the project’s pnpm lockfile, then run `pnpm dev`.
Run `pnpm exec tsc --noEmit` to validate types and `pnpm build` for production.
On the managed Sites environment, use the supplied Sites workflow scripts for
installation, builds, and publishing.

## Content and assets

- `lib/content.ts`: navigation, platform destinations, page metadata, core model.
- `app/page.tsx`: homepage.
- `app/[section]/page.tsx`: supporting pages.
- `components/abrm`: navigation, shared presentation, consent-based forms.
- `public/media`: supplied artwork optimized for web delivery.
- `public/abrm-starter-guide.pdf`: polished free reader guide.
- `scripts/create-guide.py`: reproducible PDF generation (ReportLab).

## Forms and persistence

`POST /api/subscribe` saves consenting email signups in D1.
`POST /api/inquiry` saves consenting coaching/consultation inquiries in D1.
The site does not send automatic email or confirm bookings. No public endpoint
exposes stored submissions. `db/schema.ts` and `drizzle/` own schema changes.

## Authentication

GitHub access is separate from customer authentication. ABRM member accounts and
paid entitlements are not implemented yet. No secret belongs in Git. Future paid
instruction must be gated on the server and excluded from public bundles.

See `docs/v1-implementation.md` for active features, limitations, and launch work.
The foundation documents remain in `docs/` for the wider platform roadmap.
