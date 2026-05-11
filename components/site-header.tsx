"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/talent", label: "Talent" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 md:px-8 md:py-4">
        <Link
          href="/"
          className="flex items-center"
          aria-label="TWDY Agency — Home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-white.png"
            alt="TWDY Agency"
            width={36}
            height={36}
            priority
            className="h-8 w-8 object-contain md:h-9 md:w-9"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            const isContact = item.href === "/contact";
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.18em] transition-colors",
                  isContact
                    ? "ml-2 rounded border-2 border-[var(--color-accent)] bg-[var(--color-accent)] px-4 py-2 text-white hover:bg-transparent hover:text-[var(--color-accent)]"
                    : "px-3 py-2 text-[var(--color-text-secondary)] hover:text-white",
                  active && !isContact ? "text-white" : "",
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
            width="22"
            height="22"
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
        <nav className="border-t border-[var(--color-border)] bg-black/95 md:hidden">
          <ul className="flex flex-col px-5 py-2">
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
                      "block py-3 font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.18em] transition-colors",
                      active
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-text-secondary)] hover:text-white",
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
