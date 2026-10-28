import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0b0d12",
          color: "#e6e9ef",
        }}
      >
        <div style={{ fontSize: 96, color: "#818cf8", fontFamily: "monospace" }}>{"</>"}</div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 16 }}>{profile.name}</div>
        <div style={{ fontSize: 40, color: "#818cf8", marginTop: 12 }}>
          {`${profile.title} · ${profile.subtitle}`}
        </div>
        <div style={{ fontSize: 28, color: "#94a0b4", marginTop: 24 }}>
          IT Undergraduate · University of Moratuwa
        </div>
      </div>
    ),
    size,
  );
}
