import { ArrowUpRight } from "lucide-react";
import { Accent, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { ContactForm } from "./ContactForm";

const channels = [
  { label: "GitHub", value: "github.com/Pipu404", href: profile.github },
  { label: "LinkedIn", value: "in/pipuni-piyasooriya", href: profile.linkedin },
];

export function Contact() {
  return (
    <Section
      id="contact"
      index="05"
      label="Contact"
      title={
        <>
          Let&apos;s build something <Accent>great</Accent> together.
        </>
      }
      intro="I'm looking for software engineering internship opportunities. If you have a role, a project or just want to talk tech, my inbox is open."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 text-xl font-medium break-all underline decoration-border-strong underline-offset-8 transition-colors hover:decoration-accent sm:text-2xl"
          >
            {profile.email}
            <ArrowUpRight size={20} className="shrink-0 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <dl className="mt-10 border-t border-border">
            {channels.map((c) => (
              <div key={c.label} className="flex items-center justify-between border-b border-border py-4">
                <dt className="font-mono text-xs tracking-wider text-subtle uppercase">{c.label}</dt>
                <dd>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"
                  >
                    {c.value}
                    <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </dd>
              </div>
            ))}
            <div className="flex items-center justify-between border-b border-border py-4">
              <dt className="font-mono text-xs tracking-wider text-subtle uppercase">Based in</dt>
              <dd className="text-sm text-muted">{profile.location}</dd>
            </div>
          </dl>
          <p className="mt-6 text-sm text-subtle">References available on request.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
