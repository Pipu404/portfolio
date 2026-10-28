import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
};

export function Section({ id, index, label, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <Reveal className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <p className="flex items-center gap-3 font-mono text-xs tracking-wider text-subtle uppercase">
            <span className="text-accent">{index}</span>
            <span className="h-px w-8 bg-border-strong" aria-hidden />
            {label}
          </p>
          <div>
            <h2 className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">{title}</h2>
            {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{intro}</p>}
          </div>
        </Reveal>
        <div className="mt-16">{children}</div>
      </div>
    </section>
  );
}

export function Accent({ children }: { children: React.ReactNode }) {
  return <span className="font-serif font-normal italic text-accent">{children}</span>;
}
