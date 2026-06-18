# Collaborator setup — Aqualogic / Sustec brand portal

Welcome. This guide gets you set up to edit the brand portal with Claude Code,
exactly the way the original author (Dave) does: edit locally, push to GitHub,
and Vercel deploys automatically.

**This file is written to be handed to Claude Code.** Open Claude Code, point it
at this file, and say:

> Read COLLABORATOR-SETUP.md and walk me through it step by step.

Claude Code will do most of the work. The parts that need a human (creating a
GitHub account, accepting an invite) are clearly marked **DO THIS YOURSELF**.

---

## What you're working with

- **Code**: a Next.js website, in the GitHub repo `AlchemyBranding/aqualogic-brand-portal`.
- **Hosting**: Vercel. Every push to the `main` branch deploys automatically to
  `sustecgroupportal.com`. You do not touch Vercel directly.
- **Content** (case studies, news, photos): a Sanity database, edited at
  `sustecgroupportal.com/studio`. That's separate from the code and is handled
  with a Sanity login, not through this repo.

You will be editing the **code and copy** of the site.

---

## The one golden rule

**Do NOT work inside the Dropbox copy of this project.**

You can see the project files in the shared Dropbox folder
(`Alchemy Team/CLAUDE_CODE/aqualogic-brand-portal`). It is tempting to just edit
them there. **Don't.** This project is a Git repository, and Git repositories
inside Dropbox corrupt themselves when two people use them at once — Dropbox
grabs files mid-write, creates "conflicted copy" duplicates, and breaks Git's
internal state.

Instead, you will make your **own clone** in a normal folder outside Dropbox, and
you and Dave will sync through GitHub. That is exactly what Git is designed for,
and it is safe.

The Dropbox copy is still useful for one thing: it contains the `.env.local` file
with the keys you need (see Step 4). You copy that one file out, and otherwise
leave the Dropbox copy alone.

---

## Before you start — prerequisites

You need three things:

1. **Claude Code** — you have this already.
2. **Dropbox access** to the shared `Alchemy Team` folder — you have this already.
3. **A free GitHub account** — set this up now if you don't have one.

### DO THIS YOURSELF: create a GitHub account

1. Go to <https://github.com/signup>
2. Create a free account (no card needed). Takes about two minutes.
3. Note your **GitHub username**.
4. **Send your GitHub username to Dave.** He will add you as a collaborator on
   the repo. You cannot clone it until he does.
5. You'll get an email invite from GitHub titled something like *"AlchemyBranding
   invited you to AlchemyBranding/aqualogic-brand-portal"*. **Click the link in
   that email and accept.** Do not continue until you've accepted.

---

## Setup steps (Claude Code does these)

> Claude Code: run these in order. Stop and tell the user if any step fails
> rather than continuing. Adapt paths to the user's operating system.

### Step 1 — Confirm GitHub access

Check the user is authenticated with GitHub and can see the repo. If the GitHub
CLI (`gh`) is installed, run `gh auth status` and
`gh repo view AlchemyBranding/aqualogic-brand-portal`. If `gh` is not installed,
that's fine — a plain `git clone` in Step 3 will prompt for login. If the clone
later fails with "repository not found" or a permission error, it almost always
means the collaborator invite hasn't been accepted yet — send the user back to
*"DO THIS YOURSELF: create a GitHub account"*, step 5.

### Step 2 — Choose a working folder OUTSIDE Dropbox

Pick a normal local folder, **not** inside any Dropbox path. Good choices:

- Windows: `C:\Users\<you>\projects\`
- macOS: `~/projects/`

Create it if it doesn't exist. Confirm the chosen path is not under a Dropbox
folder before continuing.

### Step 3 — Clone the repository

```
git clone https://github.com/AlchemyBranding/aqualogic-brand-portal.git
```

Run this inside the working folder from Step 2. You should end up with
`<working folder>/aqualogic-brand-portal`. This is now your personal working copy.

### Step 4 — Copy the environment file from Dropbox

The repo deliberately does **not** include the secret keys (Sanity credentials,
the site password). They live in a file called `.env.local`, which is present in
the **Dropbox** copy of the project but is excluded from Git.

Find the Dropbox copy of `.env.local`. Its path will look like:

```
<the user's Dropbox folder>/Alchemy Team/CLAUDE_CODE/aqualogic-brand-portal/.env.local
```

The exact Dropbox folder name varies per person (it might be "Dropbox",
"<Company> Dropbox", etc.), so search for it rather than assuming the path. Copy
that single `.env.local` file into the root of the new clone from Step 3
(`<working folder>/aqualogic-brand-portal/.env.local`).

If you genuinely cannot find it in Dropbox, stop and ask the user to get the
`.env.local` contents from Dave through a secure channel (a password manager
share — not plain email or chat). Do not proceed without it, or the local
preview and the forms won't work.

### Step 5 — Install dependencies

In the clone folder:

```
npm install
```

This downloads everything the project needs. It can take a minute or two.

### Step 6 — Verify it works

Start the local dev server and confirm the site loads:

```
npm run dev
```

Open the local URL it prints (usually `http://localhost:3000`). You should see
the login page. Log in with the `SITE_PASSWORD` value from the `.env.local` file
you copied. If the portal loads, you're set up correctly. Stop the dev server
when done (Ctrl+C).

---

## Your daily workflow from now on

This mirrors exactly how Dave works:

1. **Before you start editing**, pull the latest changes so you have Dave's most
   recent work:
   ```
   git pull
   ```
2. **Make your changes** with Claude Code, in your clone (never in Dropbox).
3. **When happy, commit and push:**
   ```
   git add -A
   git commit -m "Describe what you changed"
   git push
   ```
4. Vercel automatically deploys within about 90 seconds. The live site at
   `sustecgroupportal.com` updates itself. You don't need to touch Vercel.

That's the whole loop: `pull` → edit → `commit` → `push` → it's live.

---

## Working alongside Dave (etiquette)

You're both pushing to the same `main` branch. To avoid clashes:

- **Always `git pull` before you start a session.** This grabs his latest work.
- If your `git push` is rejected with a message about the remote being ahead, it
  just means Dave pushed something while you were working. Run `git pull`, let
  Claude Code resolve any overlap, then push again. Claude Code handles this
  routinely.
- For occasional edits by two people this is rarely an issue. If you both end up
  working heavily at the same time, ask Dave to set up a simple branch-per-change
  habit — but that's overkill for now.

---

## Safety — do's and don'ts

**Do**
- Keep your working copy outside Dropbox.
- `git pull` at the start of every session.
- Write a short, clear commit message each time so Dave can see what changed.

**Don't**
- Don't edit the Dropbox copy of the project. It will cause corruption.
- Don't commit or share the `.env.local` file. It contains live secret keys and
  is intentionally excluded from Git. Keep it only in your local clone.
- Don't paste the contents of `.env.local` into chats, emails, or documents.
- Don't change anything in the Vercel or Sanity dashboards unless you and Dave
  have agreed on it — those control the live hosting and content.

---

## If something goes wrong

- **"Repository not found" on clone** → the GitHub invite hasn't been accepted.
  Check your email, accept it, try again.
- **The site loads but case study / news forms or the Studio say "not
  configured"** → the `.env.local` file is missing or wasn't copied into the
  clone. Redo Step 4.
- **`git push` is rejected** → run `git pull` first, then push again.
- **Anything else** → ask your Claude Code to read the project `README.md`, which
  documents the full setup, or check with Dave.

Welcome aboard.
