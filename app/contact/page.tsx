import type { Metadata } from "next";
import { ContactForm } from "@/components/home/contact-form";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { TiktokIcon } from "@/components/icons/tiktok-icon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with TWDY Agency to start a partnership.",
  alternates: { canonical: "/contact" },
};

const SOCIALS = [
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

export default function ContactPage() {
  return (
    <>
      <section className="bg-black pb-12 pt-32 md:pt-40">
        <div className="container text-center">
          <p className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] md:text-base">
            Reach Out
          </p>
          <h1
            className="font-[family-name:var(--font-oswald)] mt-6 font-bold uppercase leading-[0.9] tracking-[0.01em] text-white"
            style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
          >
            Get in{" "}
            <span className="italic text-[var(--color-accent)]">Touch</span>
          </h1>
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
            Reach out and let&apos;s start a conversation.
          </p>
          <a
            href="mailto:info@twdyagency.com"
            className="font-[family-name:var(--font-oswald)] mt-4 inline-block text-base font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] underline-offset-4 hover:underline md:text-lg"
          >
            info@twdyagency.com
          </a>

          <ul className="mt-12 flex items-center justify-center gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-white transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-28">
        <div className="container">
          <div className="mx-auto w-full max-w-3xl">
            <div className="text-center">
              <p className="font-[family-name:var(--font-oswald)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] md:text-sm">
                Contact Form
              </p>
              <h2
                className="font-[family-name:var(--font-oswald)] mt-5 font-bold uppercase leading-[0.95] tracking-tight text-white"
                style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
              >
                Tell us about your{" "}
                <span className="italic text-[var(--color-accent)]">
                  project
                </span>
              </h2>
            </div>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
