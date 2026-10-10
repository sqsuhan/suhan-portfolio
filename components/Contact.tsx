"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import {
  IconCheck,
  IconCopy,
  IconDiscord,
  IconGithub,
  IconLinkedIn,
  IconMail,
  IconTelegram,
  IconX,
} from "./Icons";

export function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const socials = [
    {
      key: "email",
      label: "Direct Email",
      text: site.email,
      href: `mailto:${site.email}?subject=Role%20Inquiry%20for%20Suhan`,
      icon: IconMail,
      copyValue: site.email,
    },
    {
      key: "telegram",
      label: "Telegram",
      text: "@suhan_gwei",
      href: site.telegram,
      icon: IconTelegram,
      copyValue: "@suhan_gwei",
    },
    {
      key: "discord",
      label: "Discord",
      text: site.discord,
      href: `https://discord.com/users/${site.discord}`,
      icon: IconDiscord,
      copyValue: site.discord,
    },
    {
      key: "github",
      label: "GitHub",
      text: "github.com/sqsuhan",
      href: site.github,
      icon: IconGithub,
      copyValue: site.github,
    },
    {
      key: "x",
      label: "X (Twitter)",
      text: site.xHandle,
      href: site.x,
      icon: IconX,
      copyValue: site.xHandle,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      text: "sharooq-shaik",
      href: site.linkedin,
      icon: IconLinkedIn,
      copyValue: site.linkedin,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28 relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="card overflow-hidden rounded-3xl p-8 sm:p-12 border border-white/10 bg-gradient-to-b from-[var(--bg-elev)] to-[#070913] shadow-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span>Ready for Immediate Onboarding</span>
          </div>

          <h2 className="font-display mt-4 max-w-2xl text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Let&apos;s Build, Secure &amp; Investigate Together.
          </h2>

          <p className="mt-4 max-w-2xl text-base text-[var(--muted)] leading-relaxed">
            Actively open to <span className="text-[var(--fg)] font-semibold">Community Moderation</span>,{" "}
            <span className="text-[var(--fg)] font-semibold">Compliance / Trust &amp; Safety</span>,{" "}
            <span className="text-[var(--fg)] font-semibold">Web3 Protocol Engineering</span>, and{" "}
            <span className="text-[var(--fg)] font-semibold">OSINT Investigation</span> roles worldwide (Remote or Relocation).
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}?subject=Opportunity%20/%20Inquiry%20for%20Suhan`}
              className="btn btn-primary"
            >
              <IconMail /> Send Email Directly
            </a>
            <a
              href={site.telegram}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTelegram /> Message on Telegram
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--line)]">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-4">
              Direct Contact &amp; Handles (Click copy icon for instant clipboard)
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {socials.map((item) => {
                const Icon = item.icon;
                const isCopied = copiedKey === item.key;
                return (
                  <li
                    key={item.key}
                    className="flex items-center justify-between gap-3 rounded-xl border border-[var(--line)] bg-[var(--bg)]/70 px-4 py-3 transition hover:border-[var(--accent)]"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 overflow-hidden"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-cyan-400" />
                      <div className="truncate">
                        <span className="block text-[11px] font-mono text-[var(--muted)]">
                          {item.label}
                        </span>
                        <span className="text-sm font-medium text-[var(--fg)] truncate block">
                          {item.text}
                        </span>
                      </div>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopy(item.key, item.copyValue)}
                      className="rounded-md p-1.5 text-[var(--muted)] hover:bg-white/5 hover:text-white transition"
                      aria-label={`Copy ${item.label}`}
                    >
                      {isCopied ? (
                        <IconCheck className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <IconCopy className="h-4 w-4" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
