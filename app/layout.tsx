import type { Metadata, Viewport } from "next";
import { Manrope, Syne } from "next/font/google";
import type { ReactNode } from "react";

import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/config/site";

import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.intro,
  metadataBase: new URL(site.website),
  openGraph: {
    title: site.title,
    description: site.intro,
    url: site.website,
    siteName: site.name,
    images: [{ url: "/logo512.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.intro,
    images: ["/logo512.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#252934" },
  ],
};

const themeInitScript = `
(() => {
  try {
    const key = "portfolio-theme";
    const stored = localStorage.getItem(key);
    const theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
  } catch (_) {}
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header />
          {children}
        </ThemeProvider>
        <script
          async
          defer
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        />
      </body>
    </html>
  );
}
