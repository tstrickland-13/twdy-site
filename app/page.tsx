import { HeroVideo } from "@/components/home/hero-video";
import { SpecializeSection } from "@/components/home/specialize-section";
import { TaglineBlock } from "@/components/home/tagline-block";
import { PictureRotator } from "@/components/home/picture-rotator";
import { PhotoMarquee } from "@/components/home/photo-marquee";
import { AboutSplit } from "@/components/home/about-split";
import { AtTwdySection } from "@/components/home/at-twdy-section";
import { ContactForm } from "@/components/home/contact-form";

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      <SpecializeSection />

      <TaglineBlock />

      <PictureRotator />

      <AboutSplit />

      <PhotoMarquee />

      <AtTwdySection />

      <section
        className="border-b border-[var(--color-border)] bg-[var(--color-surface)] py-24 md:py-32"
        id="contact"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-[family-name:var(--font-oswald)] mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] md:text-sm">
              Get in Touch
            </p>
            <h2
              className="font-[family-name:var(--font-oswald)] mt-2 font-bold uppercase leading-[0.95] tracking-tight text-white"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              Let&apos;s Build Something{" "}
              <span className="italic text-[var(--color-accent)]">
                Together
              </span>
            </h2>
            <p className="mt-8 text-lg text-[var(--color-text-secondary)] md:text-xl">
              Reach out and let&apos;s start a conversation.
            </p>
          </div>

          <div className="mx-auto mt-14 w-full max-w-4xl md:mt-16">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
