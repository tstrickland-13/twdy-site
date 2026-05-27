import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | TWDY Agency",
  description:
    "TWDY Agency bridges brands and creators through authentic, story-driven partnerships.",
};

type TeamMember = {
  name: string;
  role: string;
  image?: { src: string; position?: string };
  initials: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Miles Tweedy",
    role: "Founder & CEO",
    image: { src: "/images/miles.png", position: "center top" },
    initials: "MT",
  },
  {
    name: "Luke Maluska",
    role: "Athlete & Influencer Marketing Coordinator",
    initials: "LM",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-black pb-12 pt-32 md:pt-40">
        <div className="container">
          <p className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] md:text-base">
            The Goal
          </p>
          <h1
            className="font-[family-name:var(--font-oswald)] mt-6 font-bold uppercase leading-[0.9] tracking-[0.01em] text-white"
            style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
          >
            Empower{" "}
            <span className="italic text-[var(--color-accent)]">Modern</span>{" "}
            Talent
          </h1>
          <p className="mt-12 max-w-4xl text-xl leading-relaxed text-[var(--color-text-secondary)] md:text-2xl">
            TWDY Agency is a modern sports and creator marketing agency focused
            on authentic partnerships, athlete branding, and long-term growth in
            the digital era.
          </p>
        </div>
      </section>

      <section className="bg-black py-12 md:py-16">
        <div className="container">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <Image
              src="/images/maximo-2.png"
              alt="TWDY Agency"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              quality={95}
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/0" />
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-28">
        <div className="container">
          <p className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] md:text-base">
            The Beginning
          </p>
          <h2
            className="font-[family-name:var(--font-oswald)] mt-6 font-bold uppercase leading-[0.9] tracking-[0.01em] text-white"
            style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}
          >
            Our <span className="italic text-[var(--color-accent)]">Story</span>
          </h2>

          <div
            className="mt-14 max-w-4xl text-lg leading-[1.85] text-[var(--color-text-secondary)] md:text-xl"
            style={{ textIndent: "2.5rem" }}
          >
            <p>
              TWDY Agency was built from a passion for sports, culture, and the
              evolving world of athlete marketing. We saw firsthand how the
              industry was changing — athletes were becoming more than just
              competitors. They were becoming creators, brands, and influential
              voices with the ability to shape culture both on and off the
              field.
            </p>
            <p className="mt-10">
              We created TWDY to help bridge the gap between athletes, creators,
              and brands through authentic partnerships and long-term strategy.
              In a world driven by content and connection, we believe the
              strongest partnerships come from genuine alignment, storytelling,
              and community.
            </p>
            <p className="mt-10">
              Today, TWDY focuses on helping talent build meaningful brands,
              create impactful opportunities, and navigate the modern landscape
              of sports, media, and marketing.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-black py-20 md:py-28">
        <div className="container">
          <p className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] md:text-base">
            The People
          </p>
          <h2
            className="font-[family-name:var(--font-oswald)] mt-6 font-bold uppercase leading-[0.9] tracking-[0.01em] text-white"
            style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}
          >
            Meet the{" "}
            <span className="italic text-[var(--color-accent)]">Team</span>
          </h2>

          <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 md:mt-20 md:gap-x-14 md:gap-y-20">
            {TEAM.map((member, idx) => (
              <TeamCard key={member.name} member={member} offset={idx === 1} />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-black pb-12 md:pb-16" />
    </>
  );
}

function TeamCard({
  member,
  offset,
}: {
  member: TeamMember;
  offset: boolean;
}) {
  return (
    <article className={offset ? "sm:mt-16" : ""}>
      <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
        {member.image ? (
          <Image
            src={member.image.src}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            quality={95}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            style={{ objectPosition: member.image.position ?? "center" }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--color-surface-light)] via-[var(--color-surface)] to-black">
            <span
              aria-hidden="true"
              className="font-[family-name:var(--font-oswald)] font-bold uppercase tracking-[0.05em] text-white/15"
              style={{ fontSize: "clamp(6rem, 18vw, 14rem)" }}
            >
              {member.initials}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/0" />
      </div>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold uppercase tracking-[0.01em] text-white md:text-3xl">
            {member.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
            {member.role}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="font-[family-name:var(--font-oswald)] flex-shrink-0 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] md:text-sm"
        >
          {member.initials}
        </span>
      </div>
    </article>
  );
}
