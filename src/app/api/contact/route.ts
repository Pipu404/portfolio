import { contactSchema } from "@/lib/contact-schema";
import { profile } from "@/data/profile";

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }

  const { name, email, message, website } = parsed.data;
  // Bots that fill the honeypot get a fake success so they don't retry.
  if (website) return Response.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: `The contact form isn't set up yet — please email ${profile.email} directly.` },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? profile.email,
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      html: `<p><strong>${escapeHtml(name)}</strong> (${escapeHtml(email)}) wrote:</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return Response.json({ error: "Couldn't send your message. Please try again or email me directly." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
