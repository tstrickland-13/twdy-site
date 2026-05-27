import Link from "next/link";

export function AtTwdySection() {
  return (
    <section className="border-b border-[var(--color-border)] bg-black py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-6xl text-center">
          <p
            className="font-[family-name:var(--font-oswald)] font-medium leading-[1.2] tracking-[0.005em] text-white"
            style={{ fontSize: "clamp(1.6rem, 3.4vw, 3rem)" }}
          >
            At <span className="text-[var(--color-accent)]">TWDY Agency</span>,
            our goal is to bridge the gap between brands and creators through
            authentic, story-driven partnerships. We specialize in connecting
            emerging athletes, influencers, and digital talent with companies
            that align with their values, audience, and lifestyle, creating
            campaigns that feel real, not transactional.
          </p>
          <Link
            href="/about"
            className="font-[family-name:var(--font-oswald)] mt-16 inline-flex items-center gap-2 rounded-md border-2 border-[var(--color-accent)] bg-[var(--color-accent)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all hover:bg-transparent hover:text-[var(--color-accent)] md:mt-20 md:text-base"
          >
            Learn More <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
