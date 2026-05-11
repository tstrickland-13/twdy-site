import Image from "next/image";
import Link from "next/link";

type SplitRow = {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  ctaLabel: string;
  // TODO: swap these placeholders with real photos when available.
  image: { src: string; alt: string; position?: string };
  imageOnRight?: boolean;
};

const ROWS: SplitRow[] = [
  {
    eyebrow: "Who We Are",
    title: "A creator-first agency built on real relationships.",
    body: "TWDY connects emerging athletes, influencers, and digital talent with brands that share their values. We focus on authentic, story-driven partnerships — not transactions.",
    href: "/talent",
    ctaLabel: "Meet the Roster",
    image: {
      src: "/images/miles.png",
      alt: "TWDY founder portrait — placeholder",
      position: "center top",
    },
    imageOnRight: false,
  },
  {
    eyebrow: "What We Do",
    title: "Brand partnerships, campaigns, and talent strategy.",
    body: "From negotiating deals to producing content and shaping long-term creator strategy, we build collaborations that deliver measurable value for both the creator and the brand.",
    href: "/services",
    ctaLabel: "Explore Services",
    image: {
      src: "/images/maximo-2.png",
      alt: "TWDY campaign work — placeholder",
      position: "center top",
    },
    imageOnRight: true,
  },
];

export function AboutSplit() {
  return (
    <section className="border-b border-[var(--color-border)] py-20 md:py-28">
      <div className="container">
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
          We specialize in connecting emerging athletes, influencers, and
          digital talent with companies that align with their values, audience,
          and lifestyle — creating campaigns that feel real, not transactional.
        </p>

        <div className="mt-24 flex flex-col gap-16 md:mt-32 md:gap-24">
          {ROWS.map((row) => (
            <SplitRowItem key={row.eyebrow} row={row} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SplitRowItem({ row }: { row: SplitRow }) {
  const imageBlock = (
    <Link
      href={row.href}
      aria-label={`${row.ctaLabel} — ${row.eyebrow}`}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <Image
        src={row.image.src}
        alt={row.image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        style={{ objectPosition: row.image.position ?? "center" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
      <span className="font-[family-name:var(--font-oswald)] absolute bottom-4 left-4 rounded border border-white/30 bg-black/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur transition-colors group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]">
        {row.ctaLabel} →
      </span>
    </Link>
  );

  const textBlock = (
    <div
      className={[
        "flex flex-col justify-center",
        row.imageOnRight ? "md:pr-8 lg:pr-16" : "md:pl-8 lg:pl-16",
      ].join(" ")}
    >
      <p className="font-[family-name:var(--font-oswald)] mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
        {row.eyebrow}
      </p>
      <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-semibold uppercase tracking-wide text-white md:text-3xl">
        {row.title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
        {row.body}
      </p>
      <Link
        href={row.href}
        className="font-[family-name:var(--font-oswald)] mt-6 inline-flex w-fit items-center gap-2 border-b border-transparent pb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
      >
        {row.ctaLabel} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );

  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
      {row.imageOnRight ? (
        <>
          <div className="md:order-1">{textBlock}</div>
          <div className="md:order-2">{imageBlock}</div>
        </>
      ) : (
        <>
          <div className="md:order-1">{imageBlock}</div>
          <div className="md:order-2">{textBlock}</div>
        </>
      )}
    </div>
  );
}
