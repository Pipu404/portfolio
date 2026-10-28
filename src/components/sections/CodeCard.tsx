// A static "editor window" that introduces Pipuni as a TypeScript object.
type Token = [kind: "kw" | "key" | "str" | "bool" | "punct" | "plain", text: string];

const colors: Record<Token[0], string> = {
  kw: "text-violet-300",
  key: "text-sky-300",
  str: "text-emerald-300",
  bool: "text-amber-300",
  punct: "text-zinc-500",
  plain: "text-zinc-200",
};

const lines: { indent: number; tokens: Token[] }[] = [
  { indent: 0, tokens: [["kw", "const"], ["plain", " developer "], ["punct", "= {"]] },
  { indent: 1, tokens: [["key", "name"], ["punct", ": "], ["str", '"Pipuni Piyasooriya"'], ["punct", ","]] },
  { indent: 1, tokens: [["key", "role"], ["punct", ": "], ["str", '"Full-Stack Developer"'], ["punct", ","]] },
  { indent: 1, tokens: [["key", "education"], ["punct", ": "], ["str", '"BSc (Hons) IT, UoM"'], ["punct", ","]] },
  { indent: 1, tokens: [["key", "stack"], ["punct", ": ["]] },
  { indent: 2, tokens: [["str", '"Next.js"'], ["punct", ", "], ["str", '"React"'], ["punct", ", "], ["str", '"TypeScript"'], ["punct", ","]] },
  { indent: 2, tokens: [["str", '"Node.js"'], ["punct", ", "], ["str", '"Spring Boot"'], ["punct", ","]] },
  { indent: 2, tokens: [["str", '"PostgreSQL"'], ["punct", ", "], ["str", '"Docker"'], ["punct", ","]] },
  { indent: 1, tokens: [["punct", "],"]] },
  { indent: 1, tokens: [["key", "openToWork"], ["punct", ": "], ["bool", "true"], ["punct", ","]] },
  { indent: 0, tokens: [["punct", "};"]] },
];

export function CodeCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-indigo-500/10 blur-3xl dark:bg-indigo-500/15" aria-hidden />
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c10] shadow-2xl shadow-black/30 ring-1 ring-black/5">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="ml-3 font-mono text-[11px] text-zinc-500">developer.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 sm:text-[13px]">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="flex">
                <span className="mr-5 w-4 shrink-0 text-right text-zinc-700 select-none">{i + 1}</span>
                <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                  {line.tokens.map(([kind, text], j) => (
                    <span key={j} className={colors[kind]}>
                      {text}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
