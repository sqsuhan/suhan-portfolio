import { about } from "@/lib/data";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
            Background &amp; Philosophy
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
            Rooted in High-Stakes Investigations. Shipping On-Chain &amp; In Communities.
          </h2>
          <div className="mt-6 space-y-4 text-[var(--muted)] leading-relaxed text-base">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[var(--bg-elev)] p-5">
            <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider">
              Verification &amp; Enterprise Compliance
            </h4>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Legal name used for formal background checks, employment verification, and legal filings:{" "}
              <span className="font-semibold text-white">{site.legalName}</span>. Online handle &amp; Web3 identity:{" "}
              <span className="font-semibold text-cyan-400">{site.handle}</span>.
            </p>
          </div>
        </div>

        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 content-start">
          {about.facts.map((fact) => (
            <div key={fact.label} className="card rounded-2xl p-5">
              <dt className="font-mono text-[0.68rem] tracking-wider text-cyan-400 uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-sm sm:text-base font-semibold text-[var(--fg)]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
