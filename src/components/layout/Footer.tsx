import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: profile.github, label: "GitHub", icon: <FaGithub size={16} />, external: true },
  { href: profile.linkedin, label: "LinkedIn", icon: <FaLinkedin size={16} />, external: true },
  { href: `mailto:${profile.email}`, label: "Email", icon: <Mail size={16} />, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-subtle sm:flex-row sm:px-6">
        <p>
          © 2026 {profile.name}. Designed &amp; built with Next.js.
        </p>
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              aria-label={l.label}
              className="rounded-full p-2.5 transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              {l.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
