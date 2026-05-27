import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "TWDY Agency | Creator & Athlete Management",
  description:
    "TWDY Agency - Creator & Athlete Management. Brand Partnerships, Campaign Management, Talent Strategy.",
  icons: {
    icon: "/logo-white.png",
    apple: "/logo-white.png",
  },
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
