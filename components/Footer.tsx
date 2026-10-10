import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-10 bg-[var(--bg-elev)]/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-medium text-[var(--fg)]">
            © {new Date().getFullYear()} {site.legalName} · {site.brand} ({site.handle})
          </p>
          <p className="text-xs text-[var(--muted)] mt-0.5">
            Community Lead · Compliance &amp; Policy · Web3 Builder · OSINT Investigator
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono">
          <span>{site.location}</span>
          <span>·</span>
          <a href="#top" className="text-cyan-400 hover:underline">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
