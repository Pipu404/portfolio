import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import { Accent, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { projects, type Project } from "@/data/projects";

function ProjectLinks({ links }: { links: Project["links"] }) {
  if (links.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-border-strong hover:text-foreground"
        >
          {l.href.includes("github.com") && <FaGithub size={13} />}
          {l.label}
          <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ))}
    </div>
  );
}

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-xs text-subtle">
      {tech.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="group overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-border-strong">
        <div className="grid lg:grid-cols-[1.05fr_1fr]">
          <div className="relative flex min-h-64 items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-indigo-500/15 via-transparent to-sky-500/10 lg:border-r lg:border-b-0">
            {project.image ? (
              <Image src={project.image} alt={`${project.title} screenshot`} fill className="object-cover" sizes="(min-width: 1024px) 560px, 100vw" />
            ) : (
              <div className="w-3/4 max-w-sm rounded-xl border border-border bg-background/70 p-4 shadow-xl shadow-black/10 backdrop-blur transition-transform duration-500 group-hover:-translate-y-1">
                <div className="flex gap-1.5">
                  <span className="size-2 rounded-full bg-border-strong" />
                  <span className="size-2 rounded-full bg-border-strong" />
                  <span className="size-2 rounded-full bg-border-strong" />
                </div>
                <div className="mt-4 space-y-2.5">
                  <div className="h-2.5 w-2/3 rounded-full bg-border-strong" />
                  <div className="h-2.5 w-full rounded-full bg-border" />
                  <div className="h-2.5 w-5/6 rounded-full bg-border" />
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="h-12 rounded-lg bg-accent-soft" />
                    <div className="h-12 rounded-lg bg-border" />
                    <div className="h-12 rounded-lg bg-border" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-8 sm:p-10">
            <p className="font-mono text-[11px] tracking-wider text-accent uppercase">Featured · {project.role}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3>
            <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>
            <ul className="mt-6 space-y-2.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-border pt-6">
              <TechList tech={project.tech} />
            </div>
            <div className="mt-6">
              <ProjectLinks links={project.links} />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.06}>
      <article className="group grid gap-6 border-b border-border py-10 transition-colors md:grid-cols-[4rem_1fr_1.2fr] md:gap-10">
        <span className="font-mono text-sm text-subtle">{String(index + 2).padStart(2, "0")}</span>
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-1.5 font-mono text-[11px] tracking-wider text-accent uppercase">{project.role}</p>
          <div className="mt-5">
            <ProjectLinks links={project.links} />
          </div>
        </div>
        <div>
          <p className="leading-relaxed text-muted">{project.summary}</p>
          <ul className="mt-4 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-border-strong" aria-hidden />
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <TechList tech={project.tech} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      index="02"
      label="Selected work"
      title={
        <>
          Projects I&apos;ve <Accent>designed</Accent> and built.
        </>
      }
      intro="A few things I've shipped — from real-time multiplayer systems to business tools and embedded hardware."
    >
      <div className="space-y-6">
        {featured.map((p) => (
          <FeaturedProject key={p.slug} project={p} />
        ))}
      </div>
      <div className="mt-10 border-t border-border">
        {rest.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
