export const site = {
  brand: "Suhan",
  legalName: "Shaik Sharooq",
  handle: "Suhan Gwei",
  aka: "Suhan",
  xHandle: "@suhan_gwei",
  location: "Guntur, Andhra Pradesh, India",
  tagline: "Community Lead · Compliance & Trust/Safety · Web3 Builder · OSINT Analyst",
  subTagline: "Bridging on-chain protocol architecture, marketplace compliance, anti-scam moderation, and open-source intelligence forensics.",
  description:
    "Suhan (Shaik Sharooq) — Specializing in Web3 Community Moderation, Brand Protection Compliance, DeFi Protocols, and OSINT Digital Investigations. Shipped with AI-assisted velocity.",
  email: "sksharooq456@gmail.com",
  github: "https://github.com/sqsuhan",
  githubRepos: "https://github.com/sqsuhan?tab=repositories",
  x: "https://x.com/suhan_gwei",
  linkedin: "https://linkedin.com/in/sharooq-shaik",
  telegram: "https://t.me/suhan_gwei",
  discord: "suhan_gwei",
  resumePath: "/resume.pdf",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://suhan-gwei.vercel.app",
} as const;

export const navLinks = [
  { href: "#pillars", label: "Specializations" },
  { href: "#terminal", label: "Intel Terminal" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
