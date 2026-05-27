import Image from "next/image";
import Link from "next/link";

type SplitRow = {
  eyebrow: string;
  body: string;
  href: string;
  ctaLabel: string;
  image: { src: string; alt: string; position?: string };
  imageOnRight?: boolean;
};

const ROWS: SplitRow[] = [
  {
    eyebrow: "Who We Are",
    body: "TWDY Agency is a modern sports and creator marketing agency focused on authentic partnerships, athlete branding, and long-term growth in the digital era.",
    href: "/talent",
    ctaLabel: "Meet the Roster",
    image: {
      src: "/images/who-we-are.png",
      alt: "Jordan Lanier — Tampa Spartans",
      position: "center top",
    },
    imageOnRight: false,
  },
  {
    eyebrow: "What We Do",
    body: "From brand partnerships and NIL deals to campaign activations and long-term creator strategy, we build collaborations that deliver real value for both creators and brands.",
    href: "/services",
    ctaLabel: "Explore Services",
    image: {
      src: "/images/what-we-do.png",
      alt: "Stanley brand activation",
      position: "center",
    },
    imageOnRight: true,
  },
];

export function AboutSplit() {
  return (
    <div>
      {ROWS.map((row, idx) => (
        <SplitRowItem key={row.eyebrow} row={row} dark={idx % 2 === 0} />
      ))}
    </div>
  );
}

function SplitRowItem({ row, dark }: { row: SplitRow; dark: boolean }) {
  const imageBlock = (
    <Link
      href={row.href}
      aria-label={`${row.ctaLabel} — ${row.eyebrow}`}
      className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <Image
        src={row.image.src}
        alt={row.image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={95}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        style={{ objectPosition: row.image.position ?? "center" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
      <span className="font-[family-name:var(--font-oswald)] absolute bottom-5 left-5 rounded border border-white/30 bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur transition-colors group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]">
        {row.ctaLabel} →
      </span>
    </Link>
  );

  const textBlock = (
    <div
      className={[
        "flex flex-col justify-center",
        row.imageOnRight ? "md:pr-6 lg:pr-12" : "md:pl-6 lg:pl-12",
      ].join(" ")}
    >
      <h3
        className="font-[family-name:var(--font-oswald)] font-bold uppercase leading-[0.95] tracking-[0.01em] text-white"
        style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
      >
        {row.eyebrow}
        <span className="text-[var(--color-accent)]">.</span>
      </h3>
      <p className="mt-10 text-xl leading-relaxed text-[var(--color-text-secondary)] md:text-2xl">
        {row.body}
      </p>
      <Link
        href={row.href}
        className="font-[family-name:var(--font-oswald)] mt-10 inline-flex w-fit items-center gap-2 border-b-2 border-[var(--color-accent)] pb-1 text-base font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] transition-opacity hover:opacity-80"
      >
        {row.ctaLabel} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );

  return (
    <section
      className={[
        "border-b border-[var(--color-border)] py-20 md:py-28",
        dark ? "bg-black" : "bg-[var(--color-surface)]",
      ].join(" ")}
    >
      <div className="container">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
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
      </div>
    </section>
  );
}
