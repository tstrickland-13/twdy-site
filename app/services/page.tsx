import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Services | TWDY Agency",
  description:
    "Brand partnerships, campaign management, and talent strategy from TWDY Agency.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Services"
        description="Brand partnerships, campaign management, and talent strategy built for the creator era."
      />
      <section className="py-16">
        <div className="container">
          <p className="text-center text-[var(--color-text-muted)]">
            Services overview coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
