import type { Metadata } from "next";
import Image from "next/image";
import { SectionDivider } from "@/components/section-divider";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";

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
  linkedin?: string;
};

const STORY_BLOCKS: { tag: string; heading: string; body: string }[] = [
  {
    tag: "The Origin",
    heading: "Built On Culture",
    body: "Born from a love of sports and culture in an era where athletes are creators, brands, and cultural voices.",
  },
  {
    tag: "The Mission",
    heading: "Real Partnerships",
    body: "We connect athletes, creators, and brands where culture, credibility, and audience trust actually intersect.",
  },
  {
    tag: "The Future",
    heading: "Long-Term Growth",
    body: "Helping talent build lasting brands and navigate the modern world of sports, media, and marketing.",
  },
];

const TEAM: TeamMember[] = [
  {
    name: "Miles Tweedy",
    role: "Founder & CEO",
    image: { src: "/images/miles.png", position: "center top" },
    initials: "MT",
    linkedin: "https://www.linkedin.com/in/miles-tweedy-698aa7258/",
  },
  {
    name: "Luke Haluska",
    role: "Athlete & Influencer Marketing Coordinator",
    initials: "LH",
    linkedin: "https://www.linkedin.com/in/luke-haluska-8a1023299/",
  },
  {
    name: "Max Butterfass",
    role: "Influencer Marketing Coordinator",
    initials: "MB",
    linkedin: "https://www.linkedin.com/in/maxbutterfass/",
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

      <SectionDivider />

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

          <div className="mt-20 grid gap-5 md:mt-28 md:grid-cols-3 md:gap-6">
            {STORY_BLOCKS.map((block, idx) => (
              <div
                key={block.heading}
                className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/50 hover:from-white/[0.07] md:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="font-[family-name:var(--font-oswald)] inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 text-base font-bold text-[var(--color-accent)]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-white/10 transition-colors duration-300 group-hover:bg-[var(--color-accent)]/30"
                  />
                </div>

                <p className="font-[family-name:var(--font-oswald)] mt-7 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  {block.tag}
                </p>
                <h3 className="font-[family-name:var(--font-oswald)] mt-2 text-xl font-bold uppercase leading-[1.1] tracking-[0.02em] text-white md:text-[1.4rem]">
                  {block.heading}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  {block.body}
                </p>
              </div>
            ))}
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

          <div className="mt-20 grid gap-x-10 gap-y-14 sm:grid-cols-2 md:mt-28 md:gap-x-14 md:gap-y-20">
            {TEAM.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-black pb-12 md:pb-16" />
    </>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article>
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
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-white transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        ) : (
          <span
            aria-hidden="true"
            className="font-[family-name:var(--font-oswald)] flex-shrink-0 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] md:text-sm"
          >
            {member.initials}
          </span>
        )}
      </div>
    </article>
  );
}
