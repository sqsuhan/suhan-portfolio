"use client";

import { useState } from "react";
import { moreGithub, projects, type Project, type RoleLensId } from "@/lib/data";
import { site } from "@/lib/site";
import { IconExternal, IconGithub } from "./Icons";

const CATEGORIES: { id: "all" | RoleLensId; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "web3", label: "⚡ Web3 & DeFi" },
  { id: "osint", label: "🔍 OSINT & Recon" },
  { id: "compliance", label: "⚖️ Compliance Tools" },
  { id: "mod", label: "🤝 Bots & Community" },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card flex flex-col justify-between rounded-2xl p-6 sm:p-7 relative overflow-hidden">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.roleCategory.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-cyan-300 uppercase tracking-wider"
              >
                {cat === "web3"
                  ? "Web3 / DeFi"
                  : cat === "osint"
                  ? "OSINT / Forensics"
                  : cat === "compliance"
                  ? "Compliance"
                  : "Community Tool"}
              </span>
            ))}
          </div>

          {project.metrics && (
            <span className="font-mono text-[11px] text-emerald-400 font-medium">
              ★ {project.metrics}
            </span>
          )}
        </div>

        <h3 className="font-display mt-4 text-xl font-bold tracking-tight text-[var(--fg)]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          {project.blurb}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag text-[11px]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[var(--line)]">
        {project.live && (
          <a
            href={project.live.href}
            className="btn btn-primary !px-3.5 !py-1.5 text-xs font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.live.label ?? "Live"} <IconExternal className="h-3.5 w-3.5" />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            className="btn btn-ghost !px-3.5 !py-1.5 text-xs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGithub className="h-3.5 w-3.5" /> GitHub
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<"all" | RoleLensId>("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.roleCategory.includes(filter));

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
              Featured Work
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
              Shipped Systems, Protocols &amp; Tooling
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--muted)]">
            Production DeFi protocols, OSINT forensic parsers, autonomous agents, and bot utilities built with AI speed.
          </p>
        </div>

        {/* Project Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setFilter(c.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                filter === c.id
                  ? "bg-cyan-500 text-slate-950 shadow-md font-bold"
                  : "border border-[var(--line)] bg-[var(--bg-elev)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--fg)]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* More on GitHub Section */}
        <div id="github" className="mt-16 pt-12 border-t border-[var(--line)]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
                Open Source &amp; Research
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold">
                Additional Repositories &amp; Experiments
              </h3>
            </div>
            <a
              href={site.githubRepos}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all 13 repos on GitHub <IconGithub />
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {moreGithub.map((project) => (
              <article key={project.title} className="card rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold text-[var(--fg)]">{project.title}</h4>
                  <p className="mt-2 text-sm text-[var(--muted)]">{project.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.github && (
                  <div className="mt-4 pt-3 border-t border-[var(--line)]">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconGithub className="h-3.5 w-3.5" /> View Source
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
