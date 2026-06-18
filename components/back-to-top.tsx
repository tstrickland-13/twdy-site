"use client";

export function BackToTop() {
  return (
    <div className="mt-16 flex justify-center md:mt-20">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-[family-name:var(--font-oswald)] inline-flex appearance-none items-center gap-2 rounded-md border-2 border-[var(--color-accent)] bg-[var(--color-accent)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black transition-all hover:bg-transparent hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] md:text-base"
      >
        Back to Top <span aria-hidden="true">↑</span>
      </button>
    </div>
  );
}
