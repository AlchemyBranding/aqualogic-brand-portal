# Deployment

Git push to `main` on `github.com/AlchemyBranding/aqualogic-brand-portal` — but **the GitHub→Vercel auto-deploy webhook silently stopped firing sometime after 2026-07-15**. Confirmed via GitHub's Deployments API: there's a `vercel[bot]` deployment record for commit `82b8cfc` (2026-07-15) but none at all for either of two commits pushed on 2026-07-30 (`b1fa96d`, `0edf77a`). Pushing to GitHub is NOT enough to assume this site is live — check `gh api repos/AlchemyBranding/aqualogic-brand-portal/commits/main/status` or just compare against `vercel list`/the Vercel dashboard before assuming a push deployed.

**This needs fixing in the Vercel dashboard** (Project Settings → Git — reconnect/re-authorize the repo) so auto-deploy resumes. Until then, deploy manually after pushing:
```
cd aqualogic-brand-portal && npx vercel deploy --prod --yes
```
(already linked via `.vercel/project.json`, created 2026-07-30 since one didn't exist before).

**Jess (jessica@alchemybranding.studio) pushes her own commits directly to this repo via GitHub Desktop**, independent of any Claude session. Always `git fetch origin` and check `git log HEAD..origin/main` before pushing — a plain `git push` can get rejected by her work, and merging needs care (see the `next.config.js` history: her `outputFileTracingExcludes` addition and this session's `headers()` addition landed in the same spot in the same file and needed a manual, non-trivial merge on 2026-07-30 — both are legitimate sibling properties of `nextConfig`, not actually conflicting in intent).

# Security headers (added 2026-07-30, live)

`next.config.js` `headers()`. Same `/studio` CSP exclusion as digeo-collective, for the same reason: Sanity Studio v5's auth bridge script (`core.sanity-cdn.com`) gets blocked by a strict CSP and hangs Studio's loading spinner forever. Confirmed live: `/studio` reaches its normal login-provider screen; public routes carry the full CSP. `/studio` is protected by this project's own password gate (`middleware.ts`) regardless — the CSP exclusion doesn't reduce that.

`outputFileTracingExcludes` (both top-level and under `experimental` — belt-and-braces for this Next 14.2 version) keeps the photography library out of serverless function bundles; unrelated to the headers work but lives in the same file, don't remove it.
