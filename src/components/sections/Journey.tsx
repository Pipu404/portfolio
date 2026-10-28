import { Accent, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { education, leadership, type TimelineItem } from "@/data/experience";
import { achievements } from "@/data/achievements";

function TimelineList({ heading, items }: { heading: string; items: TimelineItem[] }) {
  return (
    <Reveal>
      <h3 className="font-mono text-xs tracking-wider text-subtle uppercase">{heading}</h3>
      <ol className="mt-6 border-t border-border">
        {items.map((item) => (
          <li key={item.title + item.org} className="grid gap-1 border-b border-border py-5 sm:grid-cols-[1fr_auto] sm:gap-6">
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="mt-0.5 text-sm text-muted">{item.org}</p>
            </div>
            {item.period && <p className="font-mono text-xs text-subtle sm:pt-1">{item.period}</p>}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export function Journey() {
  return (
    <Section
      id="journey"
      index="04"
      label="Journey"
      title={
        <>
          Education, leadership and <Accent>recognition.</Accent>
        </>
      }
    >
      <div className="grid gap-16 lg:grid-cols-2">
        <TimelineList heading="Education" items={education} />
        <TimelineList heading="Leadership & volunteering" items={leadership} />
      </div>

      <Reveal className="mt-20">
        <h3 id="achievements" className="font-mono text-xs tracking-wider text-subtle uppercase">
          Achievements
        </h3>
        <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <li key={a.title} className="bg-background p-6 transition-colors hover:bg-surface">
              <p className="font-medium leading-snug">{a.title}</p>
              <p className="mt-2 text-sm text-muted">{a.detail}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
