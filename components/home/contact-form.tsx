"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const REASONS = [
  "Brand Partnership",
  "Talent Representation",
  "Campaign Management",
  "Press / Media",
  "Other",
] as const;

const MAX_MESSAGE = 1000;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [messageLength, setMessageLength] = useState(0);
  const successTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (successTimer.current) clearTimeout(successTimer.current);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          formData as unknown as Record<string, string>,
        ).toString(),
      });
      setStatus("success");
      form.reset();
      setMessageLength(0);
      if (successTimer.current) clearTimeout(successTimer.current);
      successTimer.current = setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error("Contact form submission error:", err);
      setStatus("error");
    }
  };

  const labelClass =
    "text-[0.78rem] font-medium tracking-wide text-white/55";
  const fieldClass =
    "peer w-full rounded-xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 text-[0.98rem] text-white placeholder:text-white/30 transition-all duration-200 hover:border-white/15 focus:border-[var(--color-accent)] focus:bg-white/[0.05] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/15";

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="relative flex flex-col gap-7 rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] via-white/[0.015] to-transparent p-7 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md md:p-10"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2.5">
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@brand.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <label htmlFor="contact-topic" className={labelClass}>
          What&apos;s this about?
        </label>
        <div className="relative">
          <select
            id="contact-topic"
            name="topic"
            required
            defaultValue=""
            className={`${fieldClass} appearance-none pr-12`}
          >
            <option value="" disabled>
              Choose one…
            </option>
            {REASONS.map((r) => (
              <option key={r} value={r} className="bg-[var(--color-bg)]">
                {r}
              </option>
            ))}
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex items-baseline justify-between">
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>
          <span
            className={`text-[0.72rem] tabular-nums transition-colors ${
              messageLength > MAX_MESSAGE * 0.9
                ? "text-[var(--color-accent)]"
                : "text-white/35"
            }`}
            aria-live="polite"
          >
            {messageLength} / {MAX_MESSAGE}
          </span>
        </div>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          maxLength={MAX_MESSAGE}
          placeholder="Tell us about your brand, campaign, or partnership idea…"
          onChange={(e) => setMessageLength(e.target.value.length)}
          className={`${fieldClass} resize-y leading-relaxed`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[var(--color-accent)] px-7 py-4 text-[0.95rem] font-semibold tracking-wide text-white shadow-[0_12px_30px_-10px_rgba(255,107,0,0.6)] transition-all duration-200 hover:bg-[var(--color-accent)]/90 hover:shadow-[0_16px_40px_-10px_rgba(255,107,0,0.8)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <span
              className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
              aria-hidden="true"
            />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </>
        )}
      </button>

      {status === "success" && (
        <div
          role="status"
          className="flex items-start gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300"
        >
          <span aria-hidden="true">✓</span>
          <span>Thanks — we&apos;ll be in touch shortly.</span>
        </div>
      )}
      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          <span aria-hidden="true">!</span>
          <span>
            Something went wrong. Please try again or email{" "}
            <a
              href="mailto:info@twdyagency.com"
              className="underline hover:text-[var(--color-accent)]"
            >
              info@twdyagency.com
            </a>
            .
          </span>
        </div>
      )}
    </form>
  );
}
