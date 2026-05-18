import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DualCap — Learn Languages While Watching Netflix & YouTube",
  description:
    "Bilingual captions, grammar breakdowns, and word lookup on any video. Learn German, Spanish, French and more through the shows you already watch. Free Chrome extension.",
  openGraph: {
    title: "DualCap — Bilingual Captions for Language Learning",
    description:
      "Live dual subtitles on Netflix, YouTube and more. Click any word to look it up. Click a sentence to get a full grammar breakdown. Save to your personal dictionary.",
    siteName: "DualCap",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DualCap — Bilingual Captions for Language Learning",
    description:
      "Live dual subtitles on Netflix, YouTube and more. Click any word to look it up. Click a sentence to get a full grammar breakdown.",
    creator: "@uxabhi_",
  },
  keywords: [
    "language learning chrome extension",
    "bilingual subtitles",
    "dual captions netflix",
    "learn german netflix",
    "youtube language learning",
    "immersive language learning",
    "grammar explainer",
    "vocabulary builder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
