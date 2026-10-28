import { Accent, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      label="Toolkit"
      title={
        <>
          The tools I <Accent>reach for.</Accent>
        </>
      }
    >
      <Reveal>
        <dl className="border-t border-border">
          {skillGroups.map((group) => (
            <div key={group.name} className="grid gap-3 border-b border-border py-6 sm:grid-cols-[1fr_2fr] lg:gap-16">
              <dt className="font-mono text-xs tracking-wider text-subtle uppercase sm:pt-1.5">{group.name}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-foreground/90 transition-colors hover:border-border-strong"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
