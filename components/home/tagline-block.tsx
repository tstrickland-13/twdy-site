export function TaglineBlock() {
  return (
    <section className="border-b border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-28">
      <div className="container">
        <h2
          className="font-[family-name:var(--font-oswald)] text-center font-bold uppercase leading-[0.9] tracking-[0.02em] text-white"
          style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
        >
          Empower{" "}
          <span className="italic text-[var(--color-accent)]">Modern</span>{" "}
          Talent
        </h2>
      </div>
    </section>
  );
}
