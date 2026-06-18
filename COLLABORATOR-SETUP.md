# Collaborator setup — Aqualogic / Sustec brand portal

Welcome. This guide gets you set up to **add brand assets** (logos, banners,
social posts, downloadable files) and edit the website's wording — without ever
using the Terminal.

**Hand this file to Claude Code.** Open Claude Code and say:

> Read COLLABORATOR-SETUP.md and take me through it step by step.

Dave is available throughout. Anything that needs a permission only he can grant,
just ask him — he'll sort it on the spot.

---

## How this works (the shape of it)

You'll use **two friendly apps**, and you never type a single Terminal command:

- **GitHub Desktop** — a simple app with buttons. It downloads the project to your
  Mac and, when you've made a change, you click **Commit** then **Push** to publish
  it. That's the only "tech" you'll do, and it's two clicks.
- **Claude Code** — does the actual work. You tell it in plain English what file to
  add or what to change, and it puts the file in exactly the right place with the
  right name so it shows up correctly on the site.

When you publish, the live website at **sustecgroupportal.com** updates itself in
about a minute and a half. No Terminal, no passwords to wrangle, no code to learn.

---

## Before you start — one free account

You need a **free GitHub account** (GitHub is where the project lives).

### Do this yourself (Dave will help)

1. Go to <https://github.com/signup> and create a free account (no card needed).
2. Note your **GitHub username** and **send it to Dave** — he adds you to the
   project so you have access.
3. You'll get an email inviting you to *AlchemyBranding/aqualogic-brand-portal*.
   **Click the link and accept it.**

---

## Step 1 — Install GitHub Desktop

This is the app that handles the GitHub connection for you, so you never deal with
the Terminal or passwords.

1. Go to <https://desktop.github.com> and download GitHub Desktop.
2. Open the downloaded file and drag **GitHub Desktop** into your **Applications**
   folder, then open it.
3. Click **Sign in to GitHub.com** and sign in with the account you just created.
   A browser window handles it — just approve.

---

## Step 2 — Download the project with GitHub Desktop

1. In GitHub Desktop: **File → Clone repository**.
2. Find **AlchemyBranding/aqualogic-brand-portal** in the list (it appears once
   Dave has added you and you've accepted the invite).
3. For **Local path**, choose a normal folder that is **NOT inside Dropbox** — for
   example a "Projects" folder in your home directory. (This matters: the project
   must not live in Dropbox, or it corrupts. Leave the Dropbox copy alone.)
4. Click **Clone**. You now have your own working copy on your Mac.

---

## Step 3 — Point Claude Code at that folder

Open Claude Code so it's working **inside the folder GitHub Desktop just
downloaded**. If you're not sure how, in GitHub Desktop go to **Repository → Show
in Finder** to see exactly where it is, and ask Dave or your Claude Code to help
open Claude Code there.

> Note for Claude Code: confirm your working directory is the cloned
> `aqualogic-brand-portal` folder (you should see folders like `app`, `public`,
> and `components`, and this `COLLABORATOR-SETUP.md`). You do **not** need to run
> `npm install` or start a dev server just to add assets — adding a file and
> pushing is enough; Vercel builds it. Only set up the full local environment if
> the user specifically wants to preview before publishing.

You do not need to install anything else. No "npm", no running the site locally —
adding files and clicking Push is all that's needed.

---

## Step 4 — Add a brand asset (your main task)

Say you've been given a new banner, logo or social post to put on the site.

1. **Save the file somewhere easy**, like your Downloads folder.
2. **Tell Claude Code in plain English**, for example:
   > Add this banner to the Aqualogic banners. It's in my Downloads, called
   > `aqualogic-new-banner.png`, and it's the LinkedIn company banner.

   Claude Code knows where every kind of asset belongs and how it needs to be
   named so it appears correctly on the Downloads page — so you just describe it.
3. **Switch to GitHub Desktop.** You'll see the new file listed on the left as a
   change. This is your chance to see exactly what's about to go live.
4. At the bottom left, type a short summary like *"Add LinkedIn company banner"*,
   then click **Commit to main**.
5. At the top, click **Push origin** (sometimes labelled **Push**). This publishes it.
6. About **90 seconds later** it's live. Open **sustecgroupportal.com**, go to the
   relevant Downloads page, and you'll see it.

Editing wording works the same way: tell Claude Code what to change, then
**Commit** and **Push** in GitHub Desktop.

> Tip: once you're comfortable, your Claude Code can often do the Commit and Push
> for you as well — just ask. If it ever says it can't, GitHub Desktop's two
> buttons always work.

---

## Uploading content (case studies, news, photos) — even easier

If you ever need to add a **case study, news article, or photo** (rather than a
brand asset file), you don't need any of the above. Those have their own upload
forms built into the live site:

- `sustecgroupportal.com/case-studies/submit`
- `sustecgroupportal.com/news/submit`
- `sustecgroupportal.com/admin/upload` (photo library)

Fill the form, attach the image, submit. Done — no GitHub Desktop, no Claude Code.

---

## Is this safe? Yes

- If a change ever has a mistake the site can't build, **the live site simply
  doesn't update** — it stays on the last good version. You can't take it down.
- Anything can be undone — ask Claude Code to "undo the last change", or in GitHub
  Desktop right-click the last commit and choose to undo it.
- The only things to leave alone: don't change settings inside the **Vercel** or
  **Sanity** dashboards unless you and Dave agree, and don't edit the **Dropbox**
  copy of the project (use your GitHub Desktop copy).

---

## Working alongside Dave

You're both editing the same site. One simple habit keeps it tidy:

- **Before you start a session, click "Fetch origin" then "Pull" in GitHub
  Desktop.** That pulls in Dave's latest work so you're building on the current
  version.
- Give each other a heads-up before a big batch of changes.
- If GitHub Desktop ever says your push is behind, click **Pull** first, then
  **Push** again. If anything looks tangled, Dave can fix it in seconds.

---

## If you get stuck

- **Ask Dave** — he's on hand and can grant any access you're missing.
- **Ask your Claude Code** to re-read this file or to check the project `README.md`.
- Most snags are just the GitHub invite not being accepted yet (check your email)
  or GitHub Desktop needing you to sign in again.

Welcome aboard. Once GitHub Desktop is installed and the project is downloaded,
adding assets is: tell Claude Code → Commit → Push → it's live.
