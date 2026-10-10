# Suhan — personal portfolio

Single-page portfolio for **Suhan** (legal name: Shaik Sharooq). Next.js 15, Tailwind CSS 4, TypeScript. Dark theme by default with a light-mode toggle. No backend.

## Run locally

```bash
cd suhan-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Customize

| What | Where |
|------|--------|
| Name, links, tagline, site URL | `lib/site.ts` |
| About, jobs, projects, skills | `lib/data.ts` |
| Resume PDF | replace `public/resume.pdf` |
| Accent / theme | `app/globals.css` (`--accent`, `--accent-2`) |
| Production URL | `NEXT_PUBLIC_SITE_URL` (used for canonical, OG, sitemap) |

Set the live URL before deploy:

```bash
# .env.local (dev) or Vercel/Netlify env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Deploy free on Vercel

1. Push this folder to GitHub (`github.com/sqsuhan/suhan-portfolio` or any repo).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, Framework: **Next.js**.
3. Add env `NEXT_PUBLIC_SITE_URL` = `https://<project>.vercel.app` (or your custom domain).
4. Deploy. Vercel builds with `next build`.

CLI alternative:

```bash
npm i -g vercel
cd suhan-portfolio
vercel
```

## Deploy free on Netlify

1. Push to GitHub.
2. [app.netlify.com](https://app.netlify.com) → Add new site → Import from Git.
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Under Site configuration → Environment variables, set `NEXT_PUBLIC_SITE_URL`.
6. Enable the **Next.js Runtime** (Netlify detects Next automatically on current plans).

`netlify.toml` is included as a fallback.

## Stack

- Next.js App Router + Turbopack
- Tailwind CSS v4
- Semantic HTML, skip link, reduced-motion, JSON-LD Person, Open Graph, sitemap, robots
