import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { TiktokIcon } from "@/components/icons/tiktok-icon";

const FOOTER_NAV = [
  { href: "/talent", label: "Talent" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const FOOTER_SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/twdyagency/",
    Icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/twdy-agency/",
    Icon: LinkedinIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@twdyagency",
    Icon: TiktokIcon,
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer>
      {/* Orange CTA panel — CAA / The Team style */}
      <section className="relative overflow-hidden bg-[var(--color-accent)]">
        <div className="container relative py-12 md:py-16">
          <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-12">
            <div>
              <p className="font-[family-name:var(--font-oswald)] text-xs font-semibold uppercase tracking-[0.3em] text-black/70 md:text-sm">
                Let&apos;s Work Together
              </p>
              <h2
                className="font-[family-name:var(--font-oswald)] mt-3 font-bold uppercase leading-[0.95] tracking-[0.005em] text-black"
                style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
              >
                Empower Modern Talent
              </h2>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Link
                href="/contact"
                className="font-[family-name:var(--font-oswald)] inline-flex items-center gap-2 rounded-md border-2 border-black bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-all hover:bg-transparent hover:text-black md:text-sm"
              >
                Get in Touch <span aria-hidden="true">→</span>
              </Link>
              <a
                href="mailto:info@twdyagency.com"
                className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.18em] text-black/80 underline-offset-4 hover:underline md:text-base"
              >
                info@twdyagency.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer body */}
      <div className="border-t border-[var(--color-border)] bg-black">
        <div className="container py-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-12">
            <div>
              <Link
                href="/"
                aria-label="TWDY Agency — Home"
                className="inline-flex items-center"
              >
                <Image
                  src="/logo-grey.png"
                  alt="TWDY Agency"
                  width={160}
                  height={160}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-text-secondary)]">
                A modern sports and creator marketing agency focused on
                authentic partnerships, athlete branding, and long-term growth
                in the digital era.
              </p>
            </div>

            <div>
              <p className="font-[family-name:var(--font-oswald)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Explore
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {FOOTER_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:text-[var(--color-accent)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-[family-name:var(--font-oswald)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Follow
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {FOOTER_SOCIALS.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-3 font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:text-[var(--color-accent)]"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[var(--color-surface)] text-white transition-colors group-hover:bg-[var(--color-accent)]">
                        <Icon className="h-4 w-4" />
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)]">
          <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-[var(--color-text-muted)] md:flex-row">
            <p>© {year} TWDY Agency LLC. All rights reserved.</p>
            <p className="text-center md:text-right">
              Empowering modern talent through authentic, story-driven
              partnerships.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
