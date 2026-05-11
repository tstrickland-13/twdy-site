import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About | TWDY Agency",
  description:
    "TWDY Agency bridges brands and creators through authentic, story-driven partnerships.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Goal"
        title="About TWDY"
        description="Bridging brands and creators through story-driven partnerships."
      />
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl space-y-4 text-center text-[var(--color-text-secondary)]">
            <p>
              At TWDY Agency, our goal is to bridge the gap between brands and
              creators through authentic, story-driven partnerships. We
              specialize in connecting emerging athletes, influencers, and
              digital talent with companies that align with their values,
              audience, and lifestyle.
            </p>
            <p>
              Our approach is rooted in authenticity, creativity, and impact.
              Every creator we represent brings a unique voice and community,
              and every brand we partner with shares our belief in collaboration
              built on trust and genuine connection.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
