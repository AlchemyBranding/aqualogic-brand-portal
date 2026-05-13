# Sustec Group Brand Portal

A password-protected digital brand portal for Sustec Group and its operating company Aqualogic. Replaces the traditional InDesign brand guideline doc. Built to scale as the group adds more operating businesses.

Built by Alchemy.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Sanity (free tier) for case study submissions and photography uploads — optional, see below
- Middleware-based site-wide password gate

## URL map

```
/                              Landing (Sustec Group)
/login                         Password gate
/sustec/                       Sustec brand area home
  /about, /group-strategy, /architecture, /heritage, /employer-brand,
  /visuals/logo, /visuals/colour, /visuals/typography, /visuals/imagery,
  /downloads, /recommendations
/aqualogic/                    Aqualogic brand area home
  /strategy, /positioning, /strapline, /architecture, /audience,
  /purpose, /values, /voice, /messaging, /employer-brand, /heritage,
  /visuals/logo, /visuals/colour, /visuals/typography, /visuals/imagery,
  /downloads, /recommendations
/linkedin                      LinkedIn guidance for internal teams
/case-studies                  Case study library
/case-studies/submit           Submission form (writes to Sanity)
/studio                        Sanity Studio (Alchemy team)
/admin/upload                  Photography library upload
```

## Local development

```bash
npm install
cp .env.example .env.local      # then edit values
npm run dev                     # http://localhost:3000
```

### Required env vars (minimum, for local dev)

```
SITE_PASSWORD=portal
AUTH_SECRET=any-long-random-string
```

Without `SITE_PASSWORD` and `AUTH_SECRET`, every route redirects to `/login` and login fails with a server error.

### Sanity setup (optional, Phase 1.5)

The portal works fully without Sanity. `/studio`, `/case-studies` and `/admin/upload` render a clearly-labelled setup-needed notice until Sanity is wired up.

To enable:

1. Create a free project at https://www.sanity.io/manage. Note the **project ID** and **dataset** (`production` is fine).
2. In the project's *API → Tokens* tab, generate a token with **Editor** permissions.
3. Add to `.env.local`:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
   SANITY_WRITE_TOKEN=sk...
   ```

4. Restart `npm run dev`.
5. The first time you visit `/studio`, Sanity will prompt you to add `http://localhost:3000` and the production domain as CORS origins in the Sanity project dashboard.

Schemas (`caseStudy`, `photo`) are defined in `sanity/schemas/`.

## Adding brand assets

The portal reads assets from `/public/assets/<brand>/<category>/` at build time and renders them as download cards. README placeholders explain what goes where:

```
/public/assets/
  /sustec/{logos,marketing-kit,banners,photography}
  /aqualogic/{logos,marketing-kit,banners,photography,icons}
```

File naming for logos picks up auto-detected variants:

```
aqualogic-logo-primary-fullcolour.svg
aqualogic-logo-mono-black.png
aqualogic-logo-reverse-white.svg
aqualogic-logo-mark-cyan.svg
```

Keywords: `primary`, `mono`, `reverse`, `horizontal`, `stacked`, `mark`. The `README.md` files in each folder are ignored.

## Updating outbound links

Edit `lib/external-links.ts`. The footer and LinkedIn page read from there.

## Updating brand copy

Each language page (`/aqualogic/positioning`, `/aqualogic/voice`, etc.) is a single `.tsx` file in `app/`. Content is inline so non-technical edits are a one-file change. Verbatim statements (positioning, vision, mission, etc.) come from the Aqualogic Brand Strategy doc and should not be reworded without sign-off.

## Deploying to Vercel

1. Push to a GitHub repo.
2. Import the repo at https://vercel.com/new.
3. Set production env vars in the Vercel project settings:
   - `SITE_PASSWORD`
   - `AUTH_SECRET` (long random string)
   - Sanity vars (if used)
4. Set the Framework Preset to **Next.js** (do not leave it on **Other** — it will silently 404 every route).
5. Deploy.

## Flagged items

See `FLAGS.md` for the running list of outstanding URLs, asset files, brand guideline gaps and deployment tasks.

## Conventions

- UK English throughout
- No em-dashes anywhere
- No filler copy
- Accessible (semantic HTML, alt text, keyboard nav, contrast)
- Mobile-responsive

## File layout

```
app/                    Next.js App Router pages and routes
  api/login/            POST handler for the password gate
  studio/[[...index]]/  Sanity Studio mount
  case-studies/         Library + submission form (server action)
  admin/upload/         Photo upload (server action)
  sustec/, aqualogic/   Brand-specific pages
components/             Shared UI (BrandFrame, PageHeader, SwatchGrid, etc.)
lib/                    Sanity client, asset reader, external links, brand tokens
sanity/schemas/         caseStudy, photo
public/assets/          Static brand assets (read by getAssets)
middleware.ts           Site-wide password gate
sanity.config.ts        Studio config (mounted at /studio)
```
