"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { href: "/talent", label: "Talent" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

const SCROLL_THRESHOLD = 8;
const REVEAL_AT_TOP = 80;
// Past this scroll distance the (otherwise transparent) homepage header fades
// to solid black so it stays legible over the content below the hero.
const SOLID_BG_AFTER = 24;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Keep the fixed header glued to the *visual* viewport's top. On mobile
  // (esp. iOS Safari) the visual viewport shifts relative to the layout
  // viewport while the address bar collapses on scroll, which otherwise leaves
  // a gap above a `top: 0` fixed element where the page content shows through.
  // Mirroring `visualViewport.offsetTop` onto `top` re-pins it. No-op on
  // desktop, where the offset stays 0.
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    let frame = 0;
    const sync = () => {
      frame = 0;
      const el = headerRef.current;
      if (el) el.style.top = `${vv.offsetTop}px`;
    };
    const onChange = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(sync);
    };

    sync();
    vv.addEventListener("scroll", onChange, { passive: true });
    vv.addEventListener("resize", onChange, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      vv.removeEventListener("scroll", onChange);
      vv.removeEventListener("resize", onChange);
    };
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    setScrolled(window.scrollY > SOLID_BG_AFTER);

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const current = window.scrollY;
        const delta = current - lastScrollY.current;

        setScrolled(current > SOLID_BG_AFTER);

        // On mobile (< 768px) keep the header visible so the hamburger
        // is always tappable; only auto-hide on desktop.
        const isDesktop = window.matchMedia("(min-width: 768px)").matches;
        if (!isDesktop) {
          setHidden(false);
          lastScrollY.current = current;
          ticking.current = false;
          return;
        }

        if (current < REVEAL_AT_TOP) {
          setHidden(false);
        } else if (Math.abs(delta) > SCROLL_THRESHOLD) {
          setHidden(delta > 0);
        }

        lastScrollY.current = current;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Always show nav while the mobile menu is open.
  const isHidden = hidden && !open;

  // On the homepage the header floats transparently over the hero video, then
  // fades to solid black once the user scrolls (or opens the mobile menu) so it
  // stays legible over the content below.
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      ref={headerRef}
      className={[
        "nav-fade-in fixed inset-x-0 top-0 z-50 border-b transition-[transform,background-color,border-color] duration-300 ease-out",
        transparent
          ? "border-transparent bg-transparent"
          : "border-white/10 bg-black",
        isHidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <div
        className="relative mx-auto flex w-full items-center justify-between py-4 pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))] md:py-5 md:pl-[max(3rem,env(safe-area-inset-left))] md:pr-[max(3rem,env(safe-area-inset-right))]"
        style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
      >
        <Link
          href="/"
          aria-label="TWDY Agency — Home"
          onClick={() => setOpen(false)}
          className="inline-flex items-center"
        >
          <Image
            src="/logo-white.png"
            alt="TWDY Agency"
            width={180}
            height={180}
            priority
            unoptimized
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex md:pr-4 lg:gap-10 lg:pr-8 xl:gap-14">
          {NAV_ITEMS.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "font-[family-name:var(--font-oswald)] text-base font-semibold uppercase tracking-[0.22em] transition-colors lg:text-lg",
                  active
                    ? "text-[var(--color-accent)]"
                    : "text-white hover:text-[var(--color-accent)]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded text-white md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-black md:hidden">
          <ul className="flex flex-col items-end py-3 pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))]">
            {NAV_ITEMS.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "block py-3 text-right font-[family-name:var(--font-oswald)] text-base font-semibold uppercase tracking-[0.22em] transition-colors",
                      active
                        ? "text-[var(--color-accent)]"
                        : "text-white hover:text-[var(--color-accent)]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
