"use client";

import { useEffect, useRef, useState } from "react";

export function SignupForm() {
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const successTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (successTimer.current) clearTimeout(successTimer.current);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      setSuccess(true);
      form.reset();
      if (successTimer.current) clearTimeout(successTimer.current);
      successTimer.current = setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="signup-section">
      <div className="container">
        <div className="signup-inner">
          <h2 className="signup-title">Stay in the Loop</h2>
          <p className="signup-subtitle">
            Be the first to know when we officially launch.
          </p>
          <form
            ref={formRef}
            className="signup-form"
            name="newsletter"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <p hidden>
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>
            <input
              type="email"
              className="signup-input"
              name="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="signup-btn">
              Notify Me
            </button>
          </form>
          <p className={`signup-success ${success ? "is-visible" : ""}`}>
            ✓ You&apos;re on the list!
          </p>
        </div>
      </div>
    </section>
  );
}
