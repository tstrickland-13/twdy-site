import type { Metadata } from "next";
import Image from "next/image";
import { CREATORS, type Creator } from "@/lib/creators";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { SectionDivider } from "@/components/section-divider";

export const metadata: Metadata = {
  title: "Talent | TWDY Agency",
  description:
    "Meet the creators, influencers, and athletes represented by TWDY Agency.",
};

const ROSTER_EMAIL = "mailto:info@twdyagency.com?subject=Full%20Roster%20Request";

export default function TalentPage() {
  const creators = CREATORS.filter((c) => c.category === "creator");
  const athletes = CREATORS.filter((c) => c.category === "athlete");

  return (
    <>
      <section className="bg-black pb-16 pt-32 md:pt-40">
        <div className="container">
          <p className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)] md:text-base">
            Our Roster
          </p>
          <h1
            className="font-[family-name:var(--font-oswald)] mt-6 font-bold uppercase leading-[0.9] tracking-[0.01em] text-white"
            style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
          >
            Talent
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
            The creators, athletes, and personalities driving culture forward.
          </p>
        </div>
      </section>

      <SectionDivider />

      <RosterSection
        eyebrow="Section 01"
        title="Creators & Influencers"
        people={creators}
        bgDark={true}
        first
      />

      <RosterSection
        eyebrow="Section 02"
        title="Athletes"
        people={athletes}
        bgDark={false}
      />
    </>
  );
}

function RosterSection({
  eyebrow,
  title,
  people,
  bgDark,
  first = false,
}: {
  eyebrow: string;
  title: string;
  people: Creator[];
  bgDark: boolean;
  first?: boolean;
}) {
  return (
    <section
      className={[
        first ? "py-20 md:py-28" : "border-t border-[var(--color-border)] py-20 md:py-28",
        bgDark ? "bg-black" : "bg-[var(--color-surface)]",
      ].join(" ")}
    >
      <div className="container">
        <p className="font-[family-name:var(--font-oswald)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)] md:text-sm">
          {eyebrow}
        </p>
        <h2
          className="font-[family-name:var(--font-oswald)] mt-5 font-bold uppercase leading-[0.95] tracking-tight text-white"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
        >
          {title}
        </h2>

        <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 md:mt-28 md:gap-x-12 md:gap-y-24 lg:grid-cols-2">
          {people.map((person) => (
            <RosterCard key={person.slug} person={person} />
          ))}
        </div>

        <div className="mt-16 flex justify-center md:mt-20">
          <a
            href={ROSTER_EMAIL}
            className="font-[family-name:var(--font-oswald)] inline-flex items-center gap-2 rounded-md border-2 border-white bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black transition-all hover:bg-transparent hover:text-white md:text-base"
          >
            Full Roster <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function RosterCard({ person }: { person: Creator }) {
  const emailHref = `mailto:info@twdyagency.com?subject=${encodeURIComponent(
    `Inquiry: ${person.name}`,
  )}`;

  return (
    <article>
      <a
        href={emailHref}
        aria-label={`Email about ${person.name}`}
        className="group block"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-black">
          <Image
            src={person.images[0].src}
            alt={person.images[0].alt}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            quality={95}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            style={{ objectPosition: person.imagePosition ?? "center" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/0" />
        </div>
      </a>

      <div className="mt-6">
        <h3 className="font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase tracking-[0.01em] text-white md:text-4xl">
          {person.name}
        </h3>
        <p className="mt-2 text-base text-[var(--color-text-secondary)] md:text-lg">
          {person.fullRole}
        </p>

        <ul className="mt-6 flex flex-col gap-1.5">
          {person.stats.map((stat) => (
            <li
              key={stat.label}
              className="flex items-baseline justify-between gap-4 border-b border-[var(--color-border)] pb-2 text-sm text-[var(--color-text-secondary)] md:text-base"
            >
              <span className="font-[family-name:var(--font-oswald)] font-semibold uppercase tracking-[0.2em] text-white">
                {stat.label}
              </span>
              <span className="font-[family-name:var(--font-oswald)] font-medium tracking-wide text-[var(--color-text-secondary)]">
                {stat.value}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-4">
          <a
            href={person.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label={`${person.name} on Instagram`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] bg-black text-white transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a
            href={emailHref}
            className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.2em] text-white underline-offset-4 hover:underline"
          >
            Inquire →
          </a>
        </div>
      </div>
    </article>
  );
}
