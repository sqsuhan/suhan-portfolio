import type { Metadata, Viewport } from "next";
import { Geist_Mono, Outfit, Syne } from "next/font/google";
import { ThemeScript } from "@/components/ThemeScript";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.brand} — ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s · ${site.brand}`,
  },
  description: site.description,
  applicationName: `${site.brand} Portfolio`,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  keywords: [
    "Suhan",
    "Suhan Gwei",
    "Shaik Sharooq",
    "Community Moderator",
    "Web3 Community Lead",
    "Compliance Analyst",
    "Trust and Safety",
    "Brand Protection",
    "OSINT Investigator",
    "Open Source Intelligence",
    "Amazon Enforcement",
    "DeFi Developer",
    "Solidity",
    "Telegram Moderation",
    "Discord Moderation",
    "Portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title,
    description: site.description,
    siteName: site.brand,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: site.xHandle,
    creator: site.xHandle,
    title,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07080f" },
    { media: "(prefers-color-scheme: light)", color: "#f5f4fb" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.legalName,
    alternateName: [site.brand, site.handle],
    url: site.url,
    email: site.email,
    jobTitle:
      "Community Moderator, Compliance & Trust/Safety Analyst, Web3 Protocol Builder & OSINT Investigator",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guntur",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    sameAs: [site.github, site.x, site.linkedin],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${outfit.variable} ${syne.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
