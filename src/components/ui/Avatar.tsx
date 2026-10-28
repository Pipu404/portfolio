import { profile } from "@/data/profile";

// Illustrated monogram used in place of a photo; swap for a real headshot via next/image when available.
export function Avatar() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-[#0c0c10]">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_30%_20%,rgba(129,140,248,0.35),transparent_70%)]" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_90%,rgba(56,189,248,0.18),transparent_70%)]" aria-hidden />
      <div className="relative flex h-full flex-col justify-between p-7">
        <span className="font-mono text-[11px] tracking-wider text-zinc-500 uppercase">Colombo · LK</span>
        <div>
          <span className="font-serif text-8xl leading-none text-white/90 italic" aria-hidden>
            {initials}
          </span>
          <p className="mt-6 text-lg font-medium text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-zinc-400">
            {profile.title} · {profile.subtitle}
          </p>
        </div>
      </div>
      <span className="sr-only">{profile.name} monogram</span>
    </div>
  );
}
