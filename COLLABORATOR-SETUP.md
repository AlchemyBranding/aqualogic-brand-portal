# Collaborator setup — Aqualogic / Sustec brand portal

Welcome. This guide gets you set up to edit the brand portal using Claude Code,
the simple way: no Terminal, no installing anything, no fiddly setup.

**This file is written to be handed to Claude Code.** Open Claude Code and say:

> Read COLLABORATOR-SETUP.md and take me through it step by step.

Your Claude Code will do all the technical work. You'll only ever need to talk to
it in plain English, plus a couple of quick clicks to grant access. Dave is
available throughout, so if anything asks for a permission only he can give, just
ask him.

---

## The promise: you will never touch the Terminal

You do **not** need to open the Terminal app, type any commands, or learn any
code. You talk to your Claude Code in normal English ("change this heading to
that", "fix the wording on the Sustec page"), and it makes the change and puts it
live for you.

If at any point something tells you to open a Terminal, stop — that's not the
path we're using. Ask Dave or ask your Claude Code to use the GitHub connector
instead.

---

## What you'll be doing

You'll be editing the **website's pages and wording**. Anything you change goes
live automatically at **sustecgroupportal.com** about a minute and a half later.

(Two things are handled separately and you don't need them for this: the
**case studies / news content** is edited in a different place called the Studio
with its own login, and the **hosting settings** live in Vercel. Neither is part
of this setup.)

---

## Before you start — one quick account

The only thing you need to create is a **free GitHub account**. GitHub is where
the website's code lives. It's free and takes two minutes.

### Do this yourself (Dave can help)

1. Go to <https://github.com/signup> and create a free account (no card needed).
2. Note your **GitHub username**.
3. **Send your username to Dave.** He'll add you to the project so you have
   access. You can't connect to it until he does — and he's on hand to do it
   right away.
4. You'll get an email from GitHub inviting you to
   *AlchemyBranding/aqualogic-brand-portal*. **Click the link and accept it.**

That's the only account you need to make.

---

## Step 1 — Connect the GitHub connector

This is the one connector that matters. It's how your Claude Code reads the
website and saves your changes. You haven't connected any connectors yet, so
here's how — and your Claude Code will guide you through the exact screen for
your version.

**Ask your Claude Code:**

> Help me connect the GitHub connector. Show me where the connector settings are
> in my version of Claude Code, then walk me through turning on GitHub and
> signing in with my GitHub account.

When it opens the sign-in, **log in with the same GitHub account** you just
created, and approve access. If GitHub asks about access to the
**AlchemyBranding** organisation or the **aqualogic-brand-portal** project, allow
it. If a button there can only be approved by an account owner, ask Dave — he can
approve it in a few seconds.

> Note for Claude Code: walk the user through enabling the GitHub connector in
> their specific Claude Code surface (desktop app, web, CLI, or IDE — adapt to
> whichever they're using). After it's connected, confirm you can access the
> repository `AlchemyBranding/aqualogic-brand-portal` by reading a file from it
> (for example this one, or `README.md`). Only continue once that read succeeds.
> If it fails with a permissions or "not found" error, the most likely cause is
> that the GitHub invite hasn't been accepted yet — send the user back to the
> "Before you start" section, step 4, and let them know Dave can confirm the
> invite was sent.

That's the only connector you need. (If you'd also like your Claude Code to be
able to check that your changes went live, you can connect the **Vercel**
connector too, but it's optional — skip it for now if you prefer.)

---

## What you do NOT need

Because you're working through the GitHub connector, you can ignore all of this:

- **No Terminal**, ever.
- **No copying anything from Dropbox.** You don't need the project files in
  Dropbox for any of this — leave that folder alone.
- **No secret keys / no `.env.local` file.** The live website already has
  everything it needs. You're only editing wording and pages.
- **No installing software** and no "npm" anything.

---

## Step 2 — How you make a change (the everyday loop)

Once the GitHub connector is on, this is the whole routine:

1. **Tell your Claude Code what you want**, in plain English. For example:
   > On the Sustec page, change the strapline to "..."

   or

   > Fix the typo in the second paragraph of the Aqualogic values page.

2. Your Claude Code finds the right place in the website, makes the change, and
   **saves it to GitHub** for you (it will describe what it changed — have a quick
   read so you're happy).

3. About **90 seconds later** the change is live. Open
   **sustecgroupportal.com**, refresh, and you'll see it.

4. Not quite right? Just tell your Claude Code — "actually make it say X
   instead" — and it'll update it again.

That's it. Ask → it changes → it's live → check it.

---

## Is this safe? Yes

- If a change ever has a mistake in it that the website can't build, **the live
  site simply doesn't update** — it stays exactly as it was, on the last good
  version. It won't go down or break. Dave can take a look if a change you
  expected doesn't appear.
- Anything you change can be undone in seconds — just ask your Claude Code to
  "undo the last change".
- You're only editing wording and pages. You can't accidentally break the
  hosting or lose content this way.

The one thing to avoid: don't change settings inside the **Vercel** or **Sanity**
dashboards unless you and Dave have agreed on it. Those control the live hosting
and the content database. Editing the website's wording through Claude Code, as
above, is completely safe.

---

## Working alongside Dave

You'll both be editing the same website. Your Claude Code always works from the
latest version when it reads through the connector, so most of the time this just
works. Two simple habits keep it smooth:

- **Give Dave a quick heads-up when you're about to do a batch of edits**, so you
  aren't both changing the same page at the same moment.
- If your Claude Code ever says a change "conflicts" with something newer, don't
  worry — tell it to "get the latest and try again", and it sorts itself out. Dave
  can also untangle anything in seconds.

---

## If you get stuck

- **Ask Dave** — he's available throughout and can grant any access you're
  missing.
- **Ask your Claude Code** to re-read this file, or to "check the README in the
  project" for more detail.
- If GitHub or a connector won't let you in, it's almost always the invite not
  being accepted yet (check your email) or an organisation approval Dave needs to
  click.

Welcome aboard — once the GitHub connector is on, you're ready to go.

---

*Note: Dave also keeps a full copy of this project set up on his own machine for
local previews. You don't need that — the connector approach above is the simple,
safe path and covers everything you'll need to edit.*
