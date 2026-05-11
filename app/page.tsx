import Image from "next/image";
import { HeroVideo } from "@/components/home/hero-video";
import { TaglineBlock } from "@/components/home/tagline-block";
import { CreatorsCarousel } from "@/components/home/creators-carousel";
import { AboutSplit } from "@/components/home/about-split";
import { ContactForm } from "@/components/home/contact-form";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      <TaglineBlock />

      <CreatorsCarousel />

      <AboutSplit />

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-intro">
            <p>
              At TWDY Agency, our goal is to bridge the gap between brands and
              creators through authentic, story-driven partnerships. We
              specialize in connecting emerging athletes, influencers, and
              digital talent with companies that align with their values,
              audience, and lifestyle — creating campaigns that feel real, not
              transactional.
            </p>
            <Link href="/about" className="contact-learn-more">
              Learn More →
            </Link>
          </div>

          <div className="section-header">
            <p className="section-label">Get in Touch</p>
            <h2 className="contact-title">Let&apos;s Build Something Together</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-avatar">
                <Image
                  src="/images/miles.png"
                  alt="Miles Tweedy"
                  fill
                  sizes="100px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="contact-details">
                <h4>Miles Tweedy</h4>
                <p className="contact-role">Founder & CEO</p>
                <a
                  href="mailto:miles@twdyagency.com"
                  className="contact-email"
                >
                  miles@twdyagency.com
                </a>
                <br />
                <a
                  href="https://www.instagram.com/milestweedy/"
                  className="contact-social"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Miles Tweedy on Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
