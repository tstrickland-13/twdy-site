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

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const current = window.scrollY;
        const delta = current - lastScrollY.current;

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

  return (
    <header
      className={[
        "nav-fade-in fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black transition-transform duration-300 ease-out",
        isHidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <div className="relative mx-auto flex w-full items-center justify-between px-6 py-4 md:px-12 md:py-5">
        <Link
          href="/"
          aria-label="TWDY Agency — Home"
          onClick={() => setOpen(false)}
          className="inline-flex items-center"
        >
          <Image
            src="/logo-twdy.png"
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
          <ul className="flex flex-col items-end px-6 py-3">
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
