import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });

const title = `${profile.name} — ${profile.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description: profile.tagline,
  keywords: ["Pipuni Piyasooriya", "full-stack developer", "software engineering intern", "University of Moratuwa", "Next.js", "portfolio"],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    type: "website",
    url: "/",
    title,
    description: profile.tagline,
    siteName: profile.name,
  },
  twitter: { card: "summary_large_image", title, description: profile.tagline },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="page-glow flex min-h-full flex-col bg-no-repeat font-sans">
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-background"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
