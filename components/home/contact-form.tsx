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
    "font-[family-name:var(--font-oswald)] text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/70";
  const requiredMark = (
    <span className="ml-1 text-[var(--color-accent)]" aria-hidden="true">
      *
    </span>
  );
  const fieldClass =
    "w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-[0.95rem] text-white placeholder:text-white/30 transition-all duration-200 focus:border-[var(--color-accent)] focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30";

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 shadow-2xl backdrop-blur-sm md:p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className={labelClass}>
            Name {requiredMark}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className={labelClass}>
            Email {requiredMark}
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

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-topic" className={labelClass}>
          Reason for inquiry {requiredMark}
        </label>
        <div className="relative">
          <select
            id="contact-topic"
            name="topic"
            required
            defaultValue=""
            className={`${fieldClass} appearance-none pr-10`}
          >
            <option value="" disabled>
              Select a topic
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
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
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

      <div className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between">
          <label htmlFor="contact-message" className={labelClass}>
            Message {requiredMark}
          </label>
          <span
            className={`text-[0.7rem] tabular-nums ${
              messageLength > MAX_MESSAGE * 0.9
                ? "text-[var(--color-accent)]"
                : "text-white/40"
            }`}
            aria-live="polite"
          >
            {messageLength}/{MAX_MESSAGE}
          </span>
        </div>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          maxLength={MAX_MESSAGE}
          placeholder="Tell us about your brand, campaign, or partnership idea."
          onChange={(e) => setMessageLength(e.target.value.length)}
          className={`${fieldClass} resize-y leading-relaxed`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="font-[family-name:var(--font-oswald)] group mt-2 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[var(--color-accent)] bg-[var(--color-accent)] px-6 py-3.5 text-[0.85rem] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-200 hover:bg-transparent hover:text-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <span
              className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent"
              aria-hidden="true"
            />
            Sending
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
          className="flex items-start gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300"
        >
          <span aria-hidden="true">✓</span>
          <span>Thanks — we&apos;ll be in touch shortly.</span>
        </div>
      )}
      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          <span aria-hidden="true">!</span>
          <span>
            Something went wrong. Please try again or email{" "}
            <a
              href="mailto:miles@twdyagency.com"
              className="underline hover:text-[var(--color-accent)]"
            >
              miles@twdyagency.com
            </a>
            .
          </span>
        </div>
      )}
    </form>
  );
}
