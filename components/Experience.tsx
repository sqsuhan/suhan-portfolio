import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
              Proven Track Record
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
              Professional Experience &amp; Enforcement History
            </h2>
          </div>
          <span className="font-mono text-xs text-[var(--muted)]">
            Corsearch · Amazon Brand Protection
          </span>
        </div>

        <ol className="relative mt-12 space-y-10 border-l border-[var(--line)] pl-6 sm:pl-10">
          {experience.map((job) => (
            <li key={job.org + job.role} className="relative">
              <span
                className={`absolute -left-[1.95rem] top-2 h-3.5 w-3.5 rounded-full sm:-left-[2.85rem] ${
                  job.current
                    ? "bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.2)]"
                    : "bg-purple-400 shadow-[0_0_0_4px_rgba(168,85,247,0.15)]"
                }`}
                aria-hidden="true"
              />
              <article className="card rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-[var(--fg)]">{job.role}</h3>
                    <span className="text-sm font-semibold text-cyan-400">@{job.org}</span>
                    {job.current && (
                      <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-emerald-400 border border-emerald-500/30">
                        Current Role
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-xs text-[var(--muted)]">{job.period}</p>
                </div>

                <p className="mt-3 text-sm text-[var(--muted)] italic">
                  {job.summary}
                </p>

                <ul className="mt-5 space-y-2.5 text-sm text-[var(--fg)]/80">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-[var(--line)] flex flex-wrap gap-2">
                  {job.roles.map((r) => (
                    <span
                      key={r}
                      className="rounded-md border border-[var(--line)] bg-[var(--bg)] px-2.5 py-1 text-[11px] font-mono text-[var(--muted)] uppercase"
                    >
                      {r === "compliance"
                        ? "⚖️ Compliance"
                        : r === "osint"
                        ? "🔍 OSINT / Forensics"
                        : r === "mod"
                        ? "🛡️ Brand Protection"
                        : r}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
