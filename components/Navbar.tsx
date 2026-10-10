"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled || open
          ? "border-[var(--line)] bg-[var(--nav)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-6">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {site.brand}
          <span className="text-[var(--accent)]">.</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[var(--fg)]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.resumePath}
            className="hidden rounded-full border border-[var(--line)] px-3 py-1.5 text-sm font-medium hover:border-[var(--accent)] sm:inline-flex"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 h-0.5 w-4 bg-current transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-4 bg-current transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-4 bg-current transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--line)] bg-[var(--bg)] px-5 py-5 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-4 text-base">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href={site.resumePath} onClick={() => setOpen(false)}>
              Download resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
