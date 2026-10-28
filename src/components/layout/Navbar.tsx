"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/data/profile";

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navItems.map((i) => i.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between rounded-full border border-border bg-background/70 pr-2 pl-5 shadow-lg shadow-black/5 backdrop-blur-xl">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    isActive ? "bg-accent-soft text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full text-muted hover:text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="mx-auto mt-2 max-w-3xl rounded-2xl border border-border bg-background p-2 shadow-lg shadow-black/10 md:hidden"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-muted hover:bg-surface-2 hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
