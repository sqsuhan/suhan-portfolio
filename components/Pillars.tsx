"use client";

import { useState } from "react";
import { impactMetrics, pillars, roleLenses, type RoleLensId } from "@/lib/data";
import { IconScale, IconSearch, IconShield, IconSparkles, IconUsers } from "./Icons";

const ICON_MAP = {
  mod: IconUsers,
  compliance: IconScale,
  web3: IconSparkles,
  osint: IconSearch,
  all: IconShield,
};

export function Pillars() {
  const [activeLens, setActiveLens] = useState<RoleLensId>("all");

  const currentLensInfo = roleLenses.find((l) => l.id === activeLens) || roleLenses[0];

  const filteredPillars =
    activeLens === "all" ? pillars : pillars.filter((p) => p.id === activeLens);

  return (
    <section id="pillars" className="scroll-mt-24 py-16 sm:py-24 relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-mono text-violet-400">
            <IconShield className="h-3.5 w-3.5" />
            <span>Core Pillars of Competence</span>
          </div>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Targeted Roles &amp; Specializations
          </h2>
          <p className="mt-3 text-base text-[var(--muted)] sm:text-lg">
            Toggle below to view Suhan&apos;s background filtered specifically for your hiring or operational requirements.
          </p>
        </div>

        {/* Role Lens Switcher Bar */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {roleLenses.map((lens) => {
            const isActive = activeLens === lens.id;
            return (
              <button
                key={lens.id}
                type="button"
                onClick={() => setActiveLens(lens.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r text-white shadow-lg shadow-sky-500/20 scale-105 border border-white/20 " +
                      (lens.id === "mod"
                        ? "from-amber-500 to-orange-600"
                        : lens.id === "compliance"
                        ? "from-purple-600 to-indigo-600"
                        : lens.id === "web3"
                        ? "from-cyan-500 to-blue-600"
                        : lens.id === "osint"
                        ? "from-emerald-500 to-teal-600"
                        : "from-sky-500 to-violet-600")
                    : "border border-[var(--line)] bg-[var(--bg-elev)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--fg)]"
                }`}
              >
                <span>{lens.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Elevator Pitch Callout */}
        <div className="mt-8 card rounded-2xl p-6 sm:p-7 border border-white/10 bg-gradient-to-r from-sky-950/20 via-[var(--bg-elev)] to-purple-950/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                {currentLensInfo.badge} Focus
              </span>
              <p className="mt-1 text-base sm:text-lg font-medium leading-relaxed text-[var(--fg)]">
                {currentLensInfo.pitch}
              </p>
            </div>
            <a
              href="#contact"
              className="btn btn-primary whitespace-nowrap self-start sm:self-center text-xs sm:text-sm !py-2 !px-4"
            >
              Discuss This Role →
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-[var(--line)]">
            {currentLensInfo.tags.map((tag) => (
              <span key={tag} className="tag text-xs font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Pillars Cards Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filteredPillars.map((pillar) => {
            const Icon = ICON_MAP[pillar.id] || IconShield;
            const isMod = pillar.id === "mod";
            const isCompliance = pillar.id === "compliance";
            const isWeb3 = pillar.id === "web3";

            const accentColor = isMod
              ? "text-amber-400 border-amber-500/30 bg-amber-500/10"
              : isCompliance
              ? "text-purple-400 border-purple-500/30 bg-purple-500/10"
              : isWeb3
              ? "text-cyan-400 border-cyan-500/30 bg-cyan-500/10"
              : "text-emerald-400 border-emerald-500/30 bg-emerald-500/10";

            return (
              <article
                key={pillar.id}
                className="card flex flex-col justify-between rounded-3xl p-6 sm:p-8 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs ${accentColor}`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{pillar.badge}</span>
                    </span>
                    <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                      Role Alignment
                    </span>
                  </div>

                  <h3 className="font-display mt-4 text-2xl font-bold tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                    {pillar.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                    {pillar.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="font-mono text-xs text-[var(--fg)] uppercase tracking-wider mb-2.5">
                      Key Responsibilities &amp; Capabilities
                    </h4>
                    <ul className="space-y-2 text-sm text-[var(--muted)]">
                      {pillar.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--line)]">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.skills.map((skill) => (
                      <span key={skill} className="tag text-[11px]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Quantified Impact Metrics */}
        <div className="mt-14">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-6">
            Proven Metrics &amp; Operational Track Record
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((stat, i) => (
              <div
                key={i}
                className="card rounded-2xl p-5 text-center flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-cyan-300">
                    {stat.number}
                  </span>
                  <h4 className="mt-2 text-sm font-semibold text-[var(--fg)]">
                    {stat.label}
                  </h4>
                  <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[var(--line)]">
                  <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider">
                    {stat.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
