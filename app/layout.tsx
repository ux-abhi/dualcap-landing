import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
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
    images: [
      {
        url: "/screenshot-hero.png",
        width: 1667,
        height: 943,
        alt: "DualCap — Bilingual captions for language learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DualCap — Bilingual Captions for Language Learning",
    description:
      "Live dual subtitles on Netflix, YouTube and more. Click any word to look it up. Click a sentence to get a full grammar breakdown.",
    creator: "@uxabhi_",
    images: ["/screenshot-hero.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        {/* Runs before hydration to restore saved theme without flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
