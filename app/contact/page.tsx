import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { InstagramIcon } from "@/components/icons/instagram-icon";

export const metadata: Metadata = {
  title: "Contact | TWDY Agency",
  description: "Get in touch with TWDY Agency to start a partnership.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Build Something Together"
        description="Ready to connect your brand with authentic creators? Reach out and let's start a conversation."
      />
      <section className="py-16">
        <div className="container">
          <div className="contact-inner">
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
          </div>
        </div>
      </section>
    </>
  );
}
