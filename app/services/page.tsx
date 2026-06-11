import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services | TWDY Agency",
  description:
    "Brand partnerships, talent management, marketing, and growth from TWDY Agency.",
};

type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: { src: string; alt: string; position?: string };
};

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Partnerships",
    description:
      "We build long-term collaborations between brands and creators that go beyond the campaign — partnerships rooted in shared values, audience alignment, and cultural relevance.",
    tags: ["Brand Partnerships", "NIL Deals", "Campaign Activations"],
    image: {
      src: "/images/maximo-1.jpg",
      alt: "Partnerships",
      position: "center",
    },
  },
  {
    number: "02",
    title: "Talent",
    description:
      "Full-service representation focused on building meaningful careers. From day-to-day management to long-term brand strategy, we help our roster show up authentically and grow with intention.",
    tags: ["Talent Management", "Athlete Branding", "Talent Strategy"],
    image: {
      src: "/images/jordan-1.jpeg",
      alt: "Talent",
      position: "center top",
    },
  },
  {
    number: "03",
    title: "Marketing",
    description:
      "Creative-led marketing that connects brands with the right voices. We design campaigns built around story and substance — not just impressions.",
    tags: [
      "Influencer Marketing",
      "Social Media Strategy",
      "Creative Direction",
    ],
    image: { src: "/images/aris-1.png", alt: "Marketing", position: "center top" },
  },
  {
    number: "04",
    title: "Growth",
    description:
      "We help creators and brands scale with strategy, content consulting, and community building — turning audience into ecosystem.",
    tags: ["Content Consulting", "Community Building", "Partnership Outreach"],
    image: { src: "/images/aris-2.png", alt: "Growth", position: "center" },
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-black pb-16 pt-32 md:pt-40">
        <div className="container">
          <p className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] md:text-base">
            What We Do
          </p>
          <h1
            className="font-[family-name:var(--font-oswald)] mt-6 font-bold uppercase leading-[0.9] tracking-[0.01em] text-white"
            style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
          >
            Services
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
            We specialize in connecting emerging athletes, influencers, and
            digital talent with companies that align with their values,
            audience, and lifestyle, creating campaigns that feel real, not
            transactional.
          </p>
        </div>
      </section>

      <div>
        {SERVICES.map((service, idx) => (
          <ServiceBlock
            key={service.number}
            service={service}
            flip={idx % 2 === 1}
            dark={idx % 2 === 0}
            first={idx === 0}
          />
        ))}
      </div>
    </>
  );
}

function ServiceBlock({
  service,
  flip,
  dark,
  first = false,
}: {
  service: Service;
  flip: boolean;
  dark: boolean;
  first?: boolean;
}) {
  return (
    <section
      className={[
        first ? "pb-20 pt-4 md:pb-28 md:pt-6" : "border-t border-[var(--color-border)] py-20 md:py-28",
        dark ? "bg-black" : "bg-[var(--color-surface)]",
      ].join(" ")}
    >
      <div className="container">
        {first && (
          <div
            aria-hidden="true"
            className="mb-16 flex items-center justify-center gap-5 md:mb-20"
          >
            <span className="h-px w-full max-w-[160px] bg-gradient-to-r from-transparent to-[var(--color-accent)]/60" />
            <span className="h-2.5 w-2.5 rotate-45 bg-[var(--color-accent)]" />
            <span className="h-px w-full max-w-[160px] bg-gradient-to-l from-transparent to-[var(--color-accent)]/60" />
          </div>
        )}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <div
            className={[
              "flex min-w-0 flex-col",
              flip ? "md:order-2 md:pl-4 lg:pl-8" : "md:order-1 md:pr-4 lg:pr-8",
            ].join(" ")}
          >
            <p className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] md:text-base">
              <span className="mr-3 text-white/40">{service.number}</span>
              <span aria-hidden="true" className="mr-3 text-white/20">
                /
              </span>
              <span>04</span>
            </p>

            <h2
              className="font-[family-name:var(--font-oswald)] mt-6 hyphens-none font-bold uppercase leading-[0.95] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
            >
              {service.title}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
              {service.description}
            </p>

            <div className="mt-12 border-t border-[var(--color-border)] pt-6">
              <ul className="flex flex-wrap items-center gap-x-3 gap-y-3">
                {service.tags.map((tag, i) => (
                  <li key={tag} className="flex items-center gap-3">
                    {i > 0 && (
                      <span
                        aria-hidden="true"
                        className="text-[var(--color-accent)]"
                      >
                        |
                      </span>
                    )}
                    <span className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.18em] text-white md:text-base">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={flip ? "md:order-1" : "md:order-2"}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-black">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
                className="object-cover"
                style={{ objectPosition: service.image.position ?? "center" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
