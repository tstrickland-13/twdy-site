import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "News | TWDY Agency",
  description: "Latest news, campaigns, and announcements from TWDY Agency.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Latest"
        title="News"
        description="Campaigns, signings, and stories from inside TWDY."
      />
      <section className="py-16">
        <div className="container">
          <p className="text-center text-[var(--color-text-muted)]">
            News and updates coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
