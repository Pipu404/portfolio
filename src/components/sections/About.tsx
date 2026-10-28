import { Accent, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/ui/Avatar";
import { profile } from "@/data/profile";

const facts = [
  { value: "3rd", label: "Year, BSc (Hons) IT" },
  { value: "4", label: "Projects shipped" },
  { value: "10+", label: "Technologies" },
];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title={
        <>
          Engineer at heart, <Accent>builder</Accent> by habit.
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <Reveal>
          <Avatar />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-5 text-lg leading-relaxed text-muted text-pretty">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-12 grid grid-cols-3 divide-x divide-border border-y border-border">
            {facts.map((f) => (
              <div key={f.label} className="px-4 py-6 first:pl-0">
                <dd className="font-serif text-4xl text-foreground sm:text-5xl">{f.value}</dd>
                <dt className="mt-2 text-xs text-subtle sm:text-sm">{f.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
