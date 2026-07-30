# Flagged items

A running list of everything the portal has flagged for the client team to provide, decide on, or supply. Update this as items are resolved.

## Source files

| Status | File | Note |
|---|---|---|
| ✅ Read | `source-docs/Aqualogic_Brand Strategy.pdf` | Strategy doc (42pp). All 14 substantive sections used. |
| ✅ Read | `source-docs/Sustec.pdf` | Sustec visual brand guidelines |
| ✅ Read | `source-docs/Aqualogic.pdf` | Original Aqualogic visual brand guidelines. Visual content used; old written content discarded per the prompt. |
| ✅ Read | `source-docs/Aqualogic IM v3.pdf` | Information Memorandum. Used for group strategy context only. |
| ⏭️ Skipped | `source-docs/Aqualogic — Website Structure & Messaging Review.pdf` | Reference only |
| ❌ Missing | `ALWebsite.pdf` | Reference only per prompt |

## Outbound URLs

- [x] Sustec website — `https://sustec.uk/`
- [x] Aqualogic website — `https://aqualogic-wc.com/`
- [x] Aqualogic LinkedIn — `https://www.linkedin.com/company/aqualogic-wc-ltd/`
- [x] Sustec LinkedIn — **N/A**, no public presence
- [ ] Internal intranet URL

## Dropbox files to download manually

I can't authenticate to Dropbox from this environment. Please download from the shared folders and drop into the matching project paths. Files appear automatically on the relevant pages once they land in the right folder.

### 1. Aqualogic photography
- Source: https://www.dropbox.com/scl/fo/5an0tqs9tzmi9ddgry5qw/AANpQE2NRYIN0ZPCExrHE2k?rlkey=1nsshxary2xtf8501mflbwxv5&dl=0
- Drop into: `public/assets/aqualogic/photography/`
- Appears on: `/aqualogic/visuals/imagery` and `/aqualogic/downloads`

### 2. Additional Aqualogic logo files
- Source: https://www.dropbox.com/scl/fo/v2i8qzzx4h9mj7i843wp5/AN5R6OD5Md0t4avmn1obJmY?rlkey=v0sjtrc3fm42ay64wtn745d34&dl=0
- Drop into: `public/assets/aqualogic/logos/`
- Naming: include `primary`, `mono`, `reverse`, `mark`, etc. in filenames so the auto-variant labels render. Examples already in place to copy.
- Appears on: `/aqualogic/visuals/logo` and `/aqualogic/downloads`

### 3. Sustec brand guidelines and logo files
- Source: https://www.dropbox.com/scl/fo/b5qf709mdywou3397js3c/AG1VoTAr3ekGHBWOJpykgTk?rlkey=uilnv0jb9wr93ydtkdrdrdb9z&dl=0
- Drop logos into: `public/assets/sustec/logos/`
- If there's an updated brand guideline PDF, place at: `source-docs/` and let me know — I'll merge any new content into the Sustec one-page area.
- Appears on: `/sustec` (visual identity section) and `/sustec/downloads`

### 4. Aqualogic Journey Wall artwork
- Source: https://www.dropbox.com/scl/fi/qxyb86diqm24qgfwpp8sb/Aqualogic-Journey-Wall-3240x2540-Bottom-PROOF.pdf?rlkey=e1299j0o70qtp1bnnckau0fm2&dl=0
- This is the print artwork. I've recreated the timeline data in code at `components/HeritageTimeline.tsx` (used on `/aqualogic/heritage` in Aqualogic styling and inside `/sustec` Heritage section in Sustec styling). When you supply more milestones or want richer styling, edit that component.

## Other asset folders awaiting files

- [ ] `public/assets/aqualogic/marketing-kit/` — decks, templates, brochures
- [ ] `public/assets/aqualogic/banners/` — LinkedIn banner (1584×396 px)
- [ ] `public/assets/aqualogic/headshots/` — team headshots (new)
- [ ] `public/assets/aqualogic/icons/` — once an icon system is defined
- [ ] `public/assets/sustec/marketing-kit/`
- [ ] `public/assets/sustec/banners/`
- [ ] `public/assets/sustec/photography/`

## Sanity (Phase 1.5)

The portal is wired end-to-end. Until env vars are set, `/studio`, `/case-studies`, `/news` and `/admin/upload` render a setup-needed notice.

Schemas defined: `caseStudy`, `newsArticle`, `photo`.

- [ ] Create a project at sanity.io (free tier)
- [ ] Set `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION` in Vercel + `.env.local`
- [ ] Generate a write token (Editor permissions) and set `SANITY_WRITE_TOKEN`
- [ ] Set `RESEND_API_KEY` and `NOTIFY_EMAIL` in Vercel to turn on submission notification emails (optional: `NOTIFY_FROM` once a domain is verified with Resend)

## Aqualogic brand guideline additions

These are structural gaps in the existing visual guidelines that the brand should address as it grows:

- [ ] Publish logo mono / single-colour variants (reverse now supplied)
- [ ] Define logo minimum size (px and mm)
- [ ] Add RGB, CMYK, Pantone equivalents to the colour palette
- [ ] Add accessibility / WCAG 2.1 AA contrast guidance
- [ ] Define typography hierarchy (H1–H6 scale, line-height, spacing)
- [ ] Define a secondary editorial typeface and fallback stack
- [ ] Define an icon system
- [ ] Define grid and spacing scale
- [ ] Photography style with do/don't examples
- [ ] Motion / animation guidance for digital
- [ ] Worked do/don't examples for logo, colour, voice
- [ ] Short brand-level accessibility statement

## Sustec

Per the strategy, Sustec is the group brand and is deliberately quieter. Recommendations are not surfaced for Sustec.

## Deployment

- [x] GitHub repo created and pushed (AlchemyBranding/aqualogic-brand-portal)
- [x] Vercel project created and deployed
- [x] Production env vars set (`SITE_PASSWORD`, `AUTH_SECRET`)
- [ ] Custom domain (when ready)

## Notification email

Submission notifications are wired via Resend. The send happens in `lib/notify.ts`, called from both submit actions after a successful Sanity create. Set these env vars in Vercel to turn it on:

- `RESEND_API_KEY` — from resend.com → API Keys
- `NOTIFY_EMAIL` — where notifications are sent (currently `jessica@alchemybranding.studio`)
- `NOTIFY_FROM` *(optional)* — defaults to `Aqualogic Portal <onboarding@resend.dev>`, Resend's sandbox sender. To send from a custom address, verify a domain in Resend then set this to e.g. `Aqualogic Portal <portal@alchemybranding.studio>`.
