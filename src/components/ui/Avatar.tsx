import Image from "next/image";
import { profile } from "@/data/profile";

// Circular portrait: a background-free headshot on a soft indigo disc with a thin ring.
export function Avatar() {
  return (
    <figure className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <div className="relative">
        <div className="absolute -inset-4 rounded-full bg-indigo-500/15 blur-2xl" aria-hidden />
        <div className="relative size-56 overflow-hidden rounded-full bg-gradient-to-b from-indigo-200 to-indigo-400 ring-1 ring-border-strong ring-offset-8 ring-offset-background sm:size-64 dark:from-indigo-300 dark:to-indigo-600">
          <Image
            src="/images/pipuni-headshot.webp"
            alt={`Portrait of ${profile.name}`}
            width={512}
            height={512}
            sizes="(min-width: 640px) 256px, 224px"
            className="size-full object-cover"
          />
        </div>
      </div>
      <figcaption className="mt-8">
        <p className="text-lg font-medium">{profile.name}</p>
        <p className="mt-1 text-sm text-muted">
          {profile.title} · {profile.subtitle}
        </p>
        <p className="mt-3 font-mono text-[11px] tracking-wider text-subtle uppercase">{profile.location}</p>
      </figcaption>
    </figure>
  );
}
