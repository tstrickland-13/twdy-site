import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Talent | TWDY Agency",
  description:
    "Meet the creators and athletes represented by TWDY Agency.",
};

export default function TalentPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Roster"
        title="Talent"
        description="The creators, athletes, and personalities driving culture forward."
      />
      <section className="py-16">
        <div className="container">
          <p className="text-center text-[var(--color-text-muted)]">
            Roster coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
