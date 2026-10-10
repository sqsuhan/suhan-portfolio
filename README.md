# Suhan (Shaik Sharooq) — Professional Portfolio

High-precision portfolio website tailored for **Community Moderation & Ops**, **Compliance & Trust/Safety**, **Web3 & DeFi Protocol Engineering**, and **OSINT Digital Investigations**.

Live Repo: [https://github.com/sqsuhan/suhan-portfolio](https://github.com/sqsuhan/suhan-portfolio)

## Highlights

- **Interactive Role Lens Filter**: Switch between *All Focus Areas*, *Community Mod & Ops*, *Compliance & Trust/Safety*, *Web3 & DeFi Native*, and *OSINT & Digital Investigations* to dynamically adapt the elevator pitch and competency matrix.
- **Intel Terminal (Interactive Forensic Console)**: Real-time queryable terminal supporting commands like `whoami`, `osint`, `compliance`, `mod`, `web3`, and `stats` with one-click chip shortcuts.
- **Quantifiable Operational Impact**: Showcases metrics including 1,000+ test-buy records automated with Python + Playwright, Amazon final listing removal authority, and 24/7 autonomous DeFi protocol deployments.
- **Interactive Projects Showcase**: Categorized filter tabs for Web3 protocols, OSINT tools, compliance systems, and community bots.
- **One-Click Communication Clipboard**: Copy buttons for Email (`sksharooq456@gmail.com`), Discord (`suhan_gwei`), and Telegram (`@suhan_gwei`).

## Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 with custom CSS token design system & glassmorphism
- **Language**: TypeScript
- **SEO & Performance**: OpenGraph images, Twitter cards, semantic HTML5, Schema.org Person JSON-LD, sitemap, and robots.txt

## Run Locally

```bash
cd suhan-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
```

## Deploying on Vercel

The repository has been created and synced to GitHub at [`sqsuhan/suhan-portfolio`](https://github.com/sqsuhan/suhan-portfolio).

### Option 1: 1-Click Vercel Dashboard Import (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new).
2. Under "Import Git Repository", search for and select **`sqsuhan/suhan-portfolio`**.
3. Framework Preset: **Next.js** (auto-detected).
4. Environment Variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://<your-project>.vercel.app` (or your custom domain).
5. Click **Deploy**. Vercel will run `npm run build` and publish your site with continuous deployment on every git push.

### Option 2: Deploy via Vercel CLI

In your terminal:

```bash
npx vercel
```

Follow the prompts to log in and select your scope/project. When ready for production:

```bash
npx vercel --prod
```
