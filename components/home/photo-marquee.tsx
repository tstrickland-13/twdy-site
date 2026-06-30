import Image from "next/image";

type MarqueeImage = { src: string; alt: string; position?: string };

const ROW_TOP: MarqueeImage[] = [
  { src: "/images/campaigns/campaign-01-jimmy-johns.png", alt: "Creator outside a Jimmy John's storefront", position: "center 30%" },
  { src: "/images/campaigns/campaign-05-huda-beauty.png", alt: "Creator showcasing a Huda Beauty product", position: "center" },
  { src: "/images/campaigns/campaign-03-puma-couch.png", alt: "Creator on a couch with a Puma basketball and neon sign", position: "center 40%" },
  { src: "/images/campaigns/campaign-06-call-of-duty.png", alt: "Creator at the Call of Duty Level Up Lab event", position: "center 40%" },
];

const ROW_BOTTOM: MarqueeImage[] = [
  { src: "/images/campaigns/campaign-02-tone-unboxing.png", alt: "Creator unboxing a TONE product", position: "center" },
  { src: "/images/campaigns/campaign-07-xbox.png", alt: "Creator posing in front of a giant Xbox logo", position: "center" },
  { src: "/images/campaigns/campaign-04-wrecking-crew.png", alt: "Creator in front of a Wrecking Crew poster", position: "center" },
  { src: "/images/campaigns/campaign-08-true-religion.png", alt: "Creator in a True Religion graphic tank top", position: "center" },
];

function MarqueeRow({
  images,
  direction,
}: {
  images: MarqueeImage[];
  direction: "left" | "right";
}) {
  // Render the set twice so the keyframe loop is seamless.
  const sequence = [...images, ...images];
  return (
    <div className="marquee">
      <div
        className={[
          "marquee__track gap-4 md:gap-5",
          direction === "left"
            ? "marquee__track--left"
            : "marquee__track--right",
        ].join(" ")}
      >
        {sequence.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative h-40 w-64 flex-shrink-0 overflow-hidden rounded-xl border border-[var(--color-border)] md:h-52 md:w-80"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="320px"
              quality={95}
              className="object-cover"
              style={{ objectPosition: img.position ?? "center" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PhotoMarquee() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface)] py-16 md:py-24">
      <div className="container">
        <p className="font-[family-name:var(--font-oswald)] text-center text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] md:text-sm">
          The Work
        </p>
        <h2
          className="font-[family-name:var(--font-oswald)] mt-3 text-center font-bold uppercase leading-[0.95] tracking-tight text-white"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
        >
          Campaigns in{" "}
          <span className="italic text-[var(--color-accent)]">Motion</span>
        </h2>
      </div>

      <div className="relative mt-10 flex flex-col gap-4 md:mt-14 md:gap-5">
        <MarqueeRow images={ROW_TOP} direction="left" />
        <MarqueeRow images={ROW_BOTTOM} direction="right" />

        {/* Orange tint wash over the whole strip */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[var(--color-accent)] opacity-[0.18] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[var(--color-accent)]/15 via-transparent to-[var(--color-accent)]/15" />
      </div>
    </section>
  );
}
