type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="border-b border-[var(--color-border)] pb-16 pt-32 md:pt-40">
      <div className="container text-center">
        {eyebrow && (
          <p className="font-[family-name:var(--font-oswald)] mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
        )}
        <h1 className="font-[family-name:var(--font-oswald)] text-3xl font-semibold uppercase tracking-wide md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
