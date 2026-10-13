# ABRM V1 implementation

Public routes: home, learn, watch, podcast, books, research, academy, coaching,
community, applications, shop, about, guide, privacy, terms.

The central content map is `lib/content.ts`. Approved public content is rendered
in `app/page.tsx` and `app/[section]/page.tsx`. No proprietary full maneuver
sequence is included. Research mechanisms are labeled as hypotheses.

## Active flows

- External retailer links, original TikTok and YouTube channels, Facebook group,
  Instagram, public Spotify show URL and Spotify embedded player.
- Reader-ready guide PDF, generated reproducibly by `scripts/create-guide.py`.
- Email signup with explicit consent and durable D1 storage. Duplicate emails are
  ignored without revealing whether an address is already registered.
- Coaching/consultation inquiry with explicit consent and durable D1 storage.

`POST /api/subscribe` and `POST /api/inquiry` validate JSON size, fields, consent,
origin, and a honeypot. SQL uses prepared parameters. No public read endpoint
exposes submissions. Production schema changes use checked-in Drizzle migrations.

## Not activated

Email delivery, automated notifications, paid membership, user accounts,
entitlements, scheduling, payments, POD checkout, course enrollment, Skool,
fitness app, and AI assistant. There are no fake logins or client-side paywalls.
No premium instructions are shipped in public code. Upcoming pages communicate
availability plainly. Connect the actual services before enabling these flows.

Review submissions through the owner-authorized Site database tools. Inquiry
notifications are not automatic. Before public launch, provide a verified contact
email, operational deletion/unsubscribe process, suitable anti-abuse protections,
and finalized business/legal details. This first deployment is owner-private.

## Credentials and auth

GitHub authoring authentication is separate from visitor authentication.
There is no ABRM member-auth implementation in this release. Website access is
owner-private at the hosting layer. Neither payment secrets nor passwords belong
in the repository. Future paid entitlements must be enforced on the server.

## Assets

Supplied images are used as product/author artwork. Artwork containing Netflix
branding or unsupported "proven" claims is excluded. The original guide is
preserved; the new reader-ready PDF removes drafting commentary.

## Verification

TypeScript validation, production build, schema migration review, PDF rendering,
route/asset verification and API validation checks. External platforms may require
sign-in or restrict embedding; direct links are always available.
