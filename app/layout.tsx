import type { Metadata, Viewport } from "next";
import { Oswald } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const SITE_URL = "https://twdyagency.com";

const SITE_DESCRIPTION =
  "TWDY Agency is a creator & athlete management agency specializing in brand partnerships, campaign management, and talent strategy.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TWDY Agency | Creator & Athlete Management",
    template: "%s | TWDY Agency",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "creator management",
    "athlete management",
    "influencer marketing",
    "brand partnerships",
    "campaign management",
    "talent strategy",
    "talent agency",
    "creator agency",
    "NIL",
    "sports marketing",
    "social media talent",
    "content creators",
    "TWDY",
    "TWDY Agency",
  ],
  applicationName: "TWDY Agency",
  authors: [{ name: "TWDY Agency", url: SITE_URL }],
  creator: "TWDY Agency",
  publisher: "TWDY Agency",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "TWDY Agency",
    url: "/",
    title: "TWDY Agency | Creator & Athlete Management",
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "TWDY Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TWDY Agency | Creator & Athlete Management",
    description: SITE_DESCRIPTION,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Let the page extend under the iOS safe areas so the fixed header can paint
  // its background up into the notch / status-bar region (no see-through strip).
  viewportFit: "cover",
  // Both variants are intentionally black: the site is dark-themed, so the
  // browser chrome should match in light and dark mode alike.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={oswald.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
