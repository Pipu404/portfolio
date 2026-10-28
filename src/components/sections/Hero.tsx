import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { CodeCard } from "./CodeCard";
import { profile } from "@/data/profile";

const highlights = [
  { label: "Studying", value: "BSc (Hons) IT · UoM" },
  { label: "Focus", value: "Full-stack · Real-time" },
  { label: "Stack", value: "Next.js · Node · Postgres" },
];

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 pt-36 pb-20 sm:px-6 sm:pt-44 sm:pb-28 lg:grid-cols-[1.25fr_1fr]">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 py-1 pr-3 pl-1.5 text-xs text-muted backdrop-blur">
            <span className="relative flex size-5 items-center justify-center rounded-full bg-emerald-500/15">
              <span className="absolute size-2 animate-ping rounded-full bg-emerald-500/60 motion-reduce:hidden" />
              <span className="relative size-2 rounded-full bg-emerald-500" />
            </span>
            Available for internships
          </p>

          <p className="mt-8 font-mono text-xs tracking-wider text-subtle uppercase">
            {profile.name} — {profile.title}
          </p>
          <h1 className="mt-4 text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl">
            Building thoughtful, <span className="font-serif font-normal italic text-accent">scalable</span> software
            for the web.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">{profile.tagline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects">
              View my work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href={profile.cv} variant="outline" download>
              Résumé
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </ButtonLink>
            <div className="ml-2 flex items-center gap-1 text-muted">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2.5 transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2.5 transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.label}>
                <dt className="font-mono text-[11px] tracking-wider text-subtle uppercase">{h.label}</dt>
                <dd className="mt-1.5 text-sm font-medium">{h.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15} className="w-full min-w-0">
          <CodeCard />
        </Reveal>
      </div>
    </section>
  );
}
