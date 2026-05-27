export function SpecializeSection() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)] py-24 md:py-32">
      <div className="container">
        <p
          className="font-[family-name:var(--font-oswald)] mx-auto max-w-6xl text-center font-medium leading-[1.2] text-white"
          style={{ fontSize: "clamp(1.6rem, 3.4vw, 3rem)" }}
        >
          We specialize in connecting{" "}
          <span className="text-[var(--color-accent)]">emerging athletes</span>,
          influencers, and digital talent with companies that align with their
          values, audience, and lifestyle, creating campaigns that feel real,
          not transactional.
        </p>
      </div>
    </section>
  );
}
