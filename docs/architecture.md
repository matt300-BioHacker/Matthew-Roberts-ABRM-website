# ABRM Platform Architecture

## Principle

Content first, integrations second, UI third.

The content/data layer should eventually power the website, member application, mobile experience, courses, and AI educational assistant.

## Conceptual architecture

ABRM PLATFORM
- Public Website
- Member Experience
- Admin / Content
- ABRM Content: Maneuvers, Courses, Videos, Resources, Evidence
- User Data: Accounts, Entitlements, Progress, Orders, Service Inquiries
- Integrations: Email, Commerce/POD, YouTube/TikTok, Facebook/Skool, Scheduling/Payments, Analytics, Future AI

## Authentication

The GitHub connection used to build this repository is separate from ABRM user authentication.

ABRM will eventually need its own customer/member authentication system. Credentials should never be stored in source code. Password handling should be delegated to a mature identity provider or securely implemented authentication service. Tokens and secrets belong in deployment secrets/environment configuration, not Git.

The repository currently contains no ABRM authentication implementation.

## Authorization

Start with simple entitlements:
- public
- registered
- premium
- course-specific
- private-client
- admin

A member can therefore have access to one course without automatically receiving every premium resource.

## Likely implementation stack

A modern TypeScript web stack is appropriate:
- Next.js + TypeScript
- Tailwind CSS
- PostgreSQL-backed data
- Managed authentication
- Storage only where needed
- Payment provider for subscriptions/one-time purchases
- Email provider
- External POD/store integration

Exact vendors should be selected after checking the services/accounts already available.

## Security rules

- Never commit API keys, passwords, access tokens, webhook secrets, or payment secrets.
- Validate webhook signatures.
- Keep privileged server operations server-side.
- Use least-privilege integration credentials.
- Treat member progress, notes, purchases, and private-service inquiries as sensitive.
- Do not log secrets.
- Enforce content authorization server-side, not merely by hiding UI.
