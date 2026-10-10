import { skillGroups } from "@/lib/data";
import { IconScale, IconSearch, IconSparkles, IconTerminal, IconUsers } from "./Icons";

const ICONS = {
  mod: IconUsers,
  compliance: IconScale,
  osint: IconSearch,
  web3: IconSparkles,
  all: IconTerminal,
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
              Tooling &amp; Stack
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
              Core Skills Across All 4 Target Domains
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--muted)]">
            A battle-tested hybrid stack spanning OSINT reconnaissance, Amazon compliance SOPs, EVM smart contracts, and high-tempo community management.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = ICONS[group.role as keyof typeof ICONS] || IconTerminal;
            return (
              <div
                key={group.name}
                className="card flex flex-col justify-between rounded-2xl p-6 sm:p-7 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${group.accent}`}
                    >
                      <Icon className="h-3 w-3" />
                      <span>{group.name}</span>
                    </span>
                  </div>

                  <h3 className="font-display mt-3 text-lg font-bold text-[var(--fg)]">
                    {group.name}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {group.tags.map((tag) => (
                      <span key={tag} className="tag text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
