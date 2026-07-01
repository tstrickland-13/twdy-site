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

      {/* Footer body — all-orange, CAA-inspired. One continuous orange block
          (no divider, no logo): bigger centered nav up top, socials centered
          beneath, and a single centered copyright line. */}
      <div className="bg-[var(--color-accent)]">
        <div className="container pt-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] md:pt-12 md:pb-[max(3rem,env(safe-area-inset-bottom))]">
          {/* Centered, spread-out nav links — larger and pulled toward the
              middle/top of the footer body. */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-[family-name:var(--font-oswald)] text-lg font-semibold uppercase tracking-[0.22em] text-black transition-opacity hover:opacity-60 md:text-xl"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials centered beneath the nav */}
          <ul className="mt-8 flex items-center justify-center gap-5 md:mt-10">
            {FOOTER_SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-md bg-black text-[var(--color-accent)] transition-transform hover:scale-105"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>

          {/* Single, unified, centered copyright line */}
          <p className="mt-8 text-center text-xs text-black/70 md:mt-10">
            © {year} TWDY Agency LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
