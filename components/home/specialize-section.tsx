export function SpecializeSection() {
  return (
    <section
      id="main-content"
      tabIndex={-1}
      className="scroll-mt-24 bg-black pb-24 pt-12 outline-none md:scroll-mt-28 md:pb-32 md:pt-16"
    >
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
