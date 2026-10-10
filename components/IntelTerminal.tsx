"use client";

import { useState, useRef, useEffect } from "react";
import { defaultTerminalHistory, terminalCommands, type TerminalEntry } from "@/lib/terminal-data";
import { IconCheck, IconCopy, IconTerminal } from "./Icons";

const QUICK_COMMANDS = [
  { label: "whoami", cmd: "whoami" },
  { label: "🔍 osint", cmd: "osint" },
  { label: "⚖️ compliance", cmd: "compliance" },
  { label: "🤝 mod", cmd: "mod" },
  { label: "⚡ web3", cmd: "web3" },
  { label: "📊 stats", cmd: "stats" },
  { label: "help", cmd: "help" },
];

export function IntelTerminal() {
  const [history, setHistory] = useState<TerminalEntry[]>(defaultTerminalHistory);
  const [inputVal, setInputVal] = useState("");
  const [copied, setCopied] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const commandKey = trimmed.toLowerCase();
    const result = terminalCommands[commandKey];

    let newEntry: TerminalEntry;
    if (result) {
      newEntry = {
        command: trimmed,
        output: result,
        type: commandKey === "whoami" ? "accent" : commandKey === "stats" ? "success" : "info",
      };
    } else {
      newEntry = {
        command: trimmed,
        output: [
          `bash: command not found: "${trimmed}".`,
          "Type 'help' to inspect available intelligence dossiers (e.g. 'osint', 'compliance', 'mod', 'web3').",
        ],
        type: "warn",
      };
    }

    setHistory((prev) => [...prev, newEntry]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    }
  };

  const handleCopyHistory = () => {
    const textToCopy = history
      .map((entry) => {
        const outStr = Array.isArray(entry.output) ? entry.output.join("\n") : entry.output;
        return `$ ${entry.command}\n${outStr}`;
      })
      .join("\n\n");

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-400">
              <IconTerminal className="h-3.5 w-3.5" />
              <span>Interactive Forensic Console</span>
            </div>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Query Suhan&apos;s Dossiers &amp; Operations
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[var(--muted)] sm:text-base">
              Test OSINT workflows, Amazon compliance clearance, Web3 protocol deployments, and community moderation playbooks in real-time.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopyHistory}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--bg-elev)] px-3 py-1.5 text-xs text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--fg)]"
          >
            {copied ? (
              <>
                <IconCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Log Copied</span>
              </>
            ) : (
              <>
                <IconCopy className="h-3.5 w-3.5" />
                <span>Copy Session Log</span>
              </>
            )}
          </button>
        </div>

        {/* Quick chip buttons */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-[var(--muted)] mr-1">Quick queries:</span>
          {QUICK_COMMANDS.map((item) => (
            <button
              key={item.cmd}
              type="button"
              onClick={() => handleCommand(item.cmd)}
              className="rounded-md border border-[var(--line)] bg-[var(--bg-elev)]/80 px-2.5 py-1 font-mono text-xs text-[var(--muted)] transition hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleCommand("clear")}
            className="rounded-md border border-[var(--line)] bg-[var(--bg-elev)]/80 px-2.5 py-1 font-mono text-xs text-rose-400/80 transition hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-300"
          >
            clear
          </button>
        </div>

        {/* Terminal Window */}
        <div className="card mt-6 overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-[#070913] shadow-2xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/5 bg-[#0d1120] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-xs text-[var(--muted)]">
                suhan@intel-workstation:~ (bash)
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE RECON READY</span>
            </div>
          </div>

          {/* Console Body */}
          <div
            ref={scrollRef}
            onClick={() => inputRef.current?.focus()}
            className="custom-scroll max-h-[380px] min-h-[260px] overflow-y-auto p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed"
          >
            {history.map((entry, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-[var(--muted)]">suhan@osint-hub:~$</span>
                  <span className="font-semibold text-white">{entry.command}</span>
                </div>
                <div
                  className={`mt-1.5 whitespace-pre-wrap pl-2 border-l-2 ${
                    entry.type === "accent"
                      ? "border-cyan-500 text-cyan-200/90"
                      : entry.type === "success"
                      ? "border-emerald-500 text-emerald-300"
                      : entry.type === "warn"
                      ? "border-amber-500 text-amber-300"
                      : "border-white/10 text-slate-300"
                  }`}
                >
                  {Array.isArray(entry.output) ? entry.output.join("\n") : entry.output}
                </div>
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 pt-1 text-cyan-400">
              <span className="text-[var(--muted)]">suhan@osint-hub:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. osint, compliance, mod, web3)..."
                className="flex-1 bg-transparent text-white outline-none placeholder:text-slate-600 font-mono text-xs sm:text-sm"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
