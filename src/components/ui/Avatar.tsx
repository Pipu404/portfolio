import Image from "next/image";
import { profile } from "@/data/profile";

// Portrait card: a background-free cutout set against a soft indigo glow.
export function Avatar() {
  return (
    <figure className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-[#0c0c10]">
      <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_35%,rgba(129,140,248,0.35),transparent_70%)]" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_95%,rgba(56,189,248,0.16),transparent_70%)]" aria-hidden />

      <Image
        src="/images/pipuni.webp"
        alt={`${profile.name} holding the robotic pet dog prototype`}
        width={437}
        height={632}
        sizes="(min-width: 1024px) 360px, 90vw"
        className="absolute bottom-0 left-1/2 h-[90%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
      />

      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0c0c10] via-[#0c0c10]/70 to-transparent" aria-hidden />

      <span className="absolute top-6 left-7 font-mono text-[11px] tracking-wider text-zinc-400 uppercase">
        Colombo · LK
      </span>
      <figcaption className="absolute inset-x-0 bottom-0 p-7">
        <p className="text-lg font-medium text-white">{profile.name}</p>
        <p className="mt-1 text-sm text-zinc-400">
          {profile.title} · {profile.subtitle}
        </p>
      </figcaption>
    </figure>
  );
}
