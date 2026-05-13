# Flagged items

A running list of everything the portal has flagged for the client team to provide, decide on, or supply. Update this as items are resolved.

## Source files

| Status | File | Note |
|---|---|---|
| ✅ Read | `source-docs/Aqualogic_Brand Strategy.pdf` | Strategy doc (42pp) — full language content extracted |
| ✅ Read | `source-docs/Sustec.pdf` | Sustec visual brand guidelines |
| ✅ Read | `source-docs/Aqualogic.pdf` | Original Aqualogic visual brand guidelines (the file prompt called `Aqualogic_IM_v3.pdf`). Visual content used; old written content (tagline, vision, voice) intentionally discarded per prompt |
| ✅ Read | `source-docs/Aqualogic IM v3.pdf` | Information Memorandum (business / financial). Used for group strategy context only |
| ⏭️ Skipped | `source-docs/Aqualogic — Website Structure & Messaging Review.pdf` | Marked reference-only in the prompt |
| ❌ Missing | `ALWebsite.pdf` | Reference only per prompt. OK to skip |

## Outbound URLs to provide

These appear in the site footer and on the LinkedIn page. Update via `lib/external-links.ts`:

- [ ] Sustec website URL
- [ ] Aqualogic website URL
- [ ] Aqualogic LinkedIn URL
- [ ] Sustec LinkedIn URL
- [ ] Internal intranet URL

## Asset folders awaiting files

Drop files into the relevant folder under `/public/assets/` and they appear automatically in the portal.

### Aqualogic

- [ ] `/public/assets/aqualogic/logos/` — SVG, PNG, EPS for primary, mono, reverse, single-colour, horizontal, stacked, mark variants
- [ ] `/public/assets/aqualogic/marketing-kit/` — decks, templates, brochures
- [ ] `/public/assets/aqualogic/banners/` — LinkedIn banners (1584×396), email signatures
- [ ] `/public/assets/aqualogic/photography/` — office, team, sites, equipment shots
- [ ] `/public/assets/aqualogic/icons/` — once an icon system is defined

### Sustec

- [ ] `/public/assets/sustec/logos/` — SVG, PNG, EPS variants
- [ ] `/public/assets/sustec/marketing-kit/`
- [ ] `/public/assets/sustec/banners/`
- [ ] `/public/assets/sustec/photography/`

## Sanity (Phase 1.5)

The portal is built end-to-end with Sanity wiring, but the project itself has not been created. Until env vars are set, `/studio`, `/case-studies` and `/admin/upload` render a setup-needed notice.

- [ ] Create a project at sanity.io (free tier)
- [ ] Set `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`
- [ ] Generate a write token (Editor permissions) and set `SANITY_WRITE_TOKEN`
- [ ] Optionally set `ALCHEMY_NOTIFY_EMAIL` for submission notifications (notification email not yet wired up)

## Brand guideline additions (Aqualogic)

Surfaced in /aqualogic/recommendations. These are structural gaps in the existing visual guidelines:

- [ ] Publish logo mono / reverse / single-colour variants
- [ ] Define logo minimum size (px and mm)
- [ ] Add RGB, CMYK, Pantone equivalents to colour palette
- [ ] Add accessibility / WCAG 2.1 AA contrast guidance
- [ ] Define typography hierarchy (H1–H6 scale, line-height, spacing)
- [ ] Define a secondary editorial typeface and fallback stack
- [ ] Define an icon system
- [ ] Define grid and spacing scale
- [ ] Add photography style with do/don't examples
- [ ] Add motion / animation guidance for digital
- [ ] Add do/don't worked examples for logo, colour, voice
- [ ] Publish a short brand-level accessibility statement

## Brand guideline additions (Sustec)

Surfaced in /sustec/recommendations:

- [ ] Define a written brand layer (story, voice, tone)
- [ ] Publish logo mono / reverse / single-colour variants
- [ ] Define the clearspace X-factor explicitly
- [ ] Add full RGB, CMYK, Pantone, accessibility guidance for colour
- [ ] Define typography hierarchy
- [ ] Add photography style direction
- [ ] Define co-branding rules (Sustec + operating brand)
- [ ] Write an acquisition-onboarding playbook for new operating brands joining the portfolio

## Deployment

- [ ] Create GitHub repo and push (deliberately left manual per setup choice)
- [ ] Create Vercel project and deploy
- [ ] Set production env vars on Vercel (`SITE_PASSWORD`, `AUTH_SECRET`, Sanity vars)
- [ ] Confirm middleware password works in production (cookies use `secure: true` outside dev)

## Notification email

The case study submission form does not yet send notification emails to Alchemy on submission. The hook point exists (`ALCHEMY_NOTIFY_EMAIL` env var). Recommend wiring up via Resend / Postmark / a Sanity webhook → Slack once a notification preference is chosen.
