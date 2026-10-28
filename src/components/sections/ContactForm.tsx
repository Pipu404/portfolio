"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { contactSchema } from "@/lib/contact-schema";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-subtle transition-colors focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent-soft";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      setStatus({ kind: "error", message: parsed.error.issues[0]?.message ?? "Please check the form" });
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong");
      form.reset();
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong" });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl border border-border bg-surface p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-2 block font-mono text-[11px] tracking-wider text-subtle uppercase">
          Name
        </label>
        <input id="name" name="name" autoComplete="name" required className={fieldClass} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block font-mono text-[11px] tracking-wider text-subtle uppercase">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={fieldClass}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-[11px] tracking-wider text-subtle uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={fieldClass}
          placeholder="Tell me about the role or project…"
        />
      </div>
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status.kind === "sending"}
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-85 disabled:opacity-60"
      >
        {status.kind === "sending" ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        {status.kind === "sending" ? "Sending…" : "Send message"}
      </button>

      <p aria-live="polite" className="min-h-5 text-sm">
        {status.kind === "sent" && <span className="text-emerald-500">Thanks! I&apos;ll get back to you soon.</span>}
        {status.kind === "error" && <span className="text-red-500">{status.message}</span>}
      </p>
    </form>
  );
}
