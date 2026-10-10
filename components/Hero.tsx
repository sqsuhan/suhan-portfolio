import { site } from "@/lib/site";
import { IconArrow, IconDownload, IconGithub, IconTerminal } from "./Icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid noise pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* Ambient background glows */}
      <div className="ambient-glow top-10 left-1/4 h-72 w-72 bg-cyan-500/20" />
      <div className="ambient-glow top-40 right-1/4 h-80 w-80 bg-purple-500/15" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        {/* Status Chip */}
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>Open to Roles: Mod · Compliance · Web3 · OSINT</span>
        </div>

        {/* Identity & Headline */}
        <div className="reveal mt-5">
          <p className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[var(--accent)] uppercase">
            {site.brand} · {site.legalName} · {site.xHandle}
          </p>
          <h1 className="font-display mt-3 max-w-5xl text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            High-Precision Execution in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400">
              Web3, Compliance &amp; OSINT
            </span>
          </h1>
        </div>

        {/* Tagline & Subtext */}
        <p className="reveal mt-6 max-w-3xl text-lg sm:text-xl text-[var(--fg)] leading-relaxed font-normal">
          {site.subTagline}
        </p>

        <p className="reveal mt-3 max-w-2xl text-sm sm:text-base text-[var(--muted)]">
          {site.location} · Ex-Amazon Enforcement Associate with final removal authority · Corsearch Brand Protection Analyst · DeFi protocol developer &amp; bot engineer.
        </p>

        {/* CTA Buttons */}
        <div className="reveal mt-8 flex flex-wrap items-center gap-3">
          <a href="#pillars" className="btn btn-primary">
            Explore Roles &amp; Skills <IconArrow />
          </a>
          <a href="#terminal" className="btn btn-ghost">
            <IconTerminal className="h-4 w-4 text-cyan-400" /> Intel Console
          </a>
          <a href={site.resumePath} className="btn btn-ghost" download>
            <IconDownload /> Resume
          </a>
          <a
            href={site.github}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGithub /> GitHub
          </a>
        </div>

        {/* Role Quick Chips */}
        <div className="reveal mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 border-t border-[var(--line)] pt-6">
          <a
            href="#pillars"
            className="flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--bg-elev)]/60 px-3.5 py-2.5 text-xs text-[var(--muted)] transition hover:border-amber-500/50 hover:text-amber-300"
          >
            <span className="text-amber-400">🛡️</span>
            <span>Community Mod &amp; Ops</span>
          </a>
          <a
            href="#pillars"
            className="flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--bg-elev)]/60 px-3.5 py-2.5 text-xs text-[var(--muted)] transition hover:border-purple-500/50 hover:text-purple-300"
          >
            <span className="text-purple-400">⚖️</span>
            <span>Compliance &amp; Policy</span>
          </a>
          <a
            href="#pillars"
            className="flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--bg-elev)]/60 px-3.5 py-2.5 text-xs text-[var(--muted)] transition hover:border-cyan-500/50 hover:text-cyan-300"
          >
            <span className="text-cyan-400">⚡</span>
            <span>Web3 &amp; DeFi Native</span>
          </a>
          <a
            href="#pillars"
            className="flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--bg-elev)]/60 px-3.5 py-2.5 text-xs text-[var(--muted)] transition hover:border-emerald-500/50 hover:text-emerald-300"
          >
            <span className="text-emerald-400">🔍</span>
            <span>OSINT &amp; Forensics</span>
          </a>
        </div>
      </div>
    </section>
  );
}
