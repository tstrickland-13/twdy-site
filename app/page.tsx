import Image from "next/image";
import { HeroVideo } from "@/components/home/hero-video";
import { CreatorsShowcase } from "@/components/home/creators-showcase";
import { SignupForm } from "@/components/home/signup-form";
import { InstagramIcon } from "@/components/icons/instagram-icon";

type TalentProfile = {
  name: string;
  role: string;
  instagram: string;
  description: string;
  tags: string[];
  stats: { label: string; value: string }[];
};

const TALENT: TalentProfile[] = [
  {
    name: "Maximo Rivano",
    role: "Lifestyle Creator · Fashion · Soccer Player",
    instagram: "https://www.instagram.com/maximorivano/",
    description:
      "A creator who blends sport, fashion, and culture with effortless style. His clean visual style, athletic credibility, and creative direction make him ideal for brands at the intersection of performance and lifestyle.",
    tags: ["Lifestyle", "Fashion", "Athlete", "Health & Wellness"],
    stats: [
      { label: "TikTok", value: "1.1M Followers" },
      { label: "Instagram", value: "110K Followers" },
      { label: "Snapchat", value: "111.7K Followers" },
      { label: "Total Likes", value: "75.2M+" },
    ],
  },
  {
    name: "Aris",
    role: "Twitch Streamer · Content Creator · Personality",
    instagram: "https://www.instagram.com/resistible/",
    description:
      "A fast-rising Twitch streamer recognized for her personality, authenticity, and loyal community. Her mix of humor, authenticity, and on-camera presence makes her exceptional for brands in beauty, fitness, food, and lifestyle.",
    tags: ["Food & Beverage", "Fitness", "Beauty", "Broadcasting"],
    stats: [
      { label: "Twitch", value: "38K Followers" },
      { label: "TikTok", value: "110K Followers" },
      { label: "YouTube", value: "16K Subscribers" },
      { label: "Hours Watched", value: "244K" },
    ],
  },
  {
    name: "Jordan Lanier",
    role: "College Basketball Player · Creator · Influencer",
    instagram: "https://www.instagram.com/_jordanlanier_/",
    description:
      "A rising athlete at the University of Tampa who brings charisma, confidence, and authenticity to everything he does. His ability to combine performance and personality positions him as a strong voice in NIL and lifestyle marketing.",
    tags: ["Fashion", "Food", "Athlete", "Lifestyle"],
    stats: [
      { label: "TikTok", value: "46.1K Followers" },
      { label: "Instagram", value: "8.3K Followers" },
      { label: "Snapchat", value: "3.6K Followers" },
      { label: "Total Likes", value: "1.1M+" },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      <section className="about-section">
        <div className="container">
          <div className="about-inner">
            <p className="about-label">The Goal</p>
            <h2 className="about-title">
              Bridging Brands and Creators Through Story-Driven Partnerships
            </h2>
            <div className="about-text">
              <p>
                At TWDY Agency, our goal is to bridge the gap between brands and
                creators through authentic, story-driven partnerships. We
                specialize in connecting emerging athletes, influencers, and
                digital talent with companies that align with their values,
                audience, and lifestyle — creating campaigns that feel real, not
                transactional.
              </p>
              <p>
                Our approach is rooted in authenticity, creativity, and impact.
                Every creator we represent brings a unique voice and community,
                and every brand we partner with shares our belief in
                collaboration built on trust and genuine connection. Whether
                it&apos;s a national campaign or a niche activation, TWDY
                ensures each partnership delivers measurable value for both the
                creator and the brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CreatorsShowcase />

      <section className="talent-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Our Roster</p>
            <h2 className="section-title">Featured Talent</h2>
          </div>

          <div className="talent-grid">
            {TALENT.map((talent) => (
              <article key={talent.name} className="talent-card">
                <div className="talent-header">
                  <div className="talent-header-text">
                    <h3 className="talent-name">{talent.name}</h3>
                    <p className="talent-role">{talent.role}</p>
                  </div>
                  <a
                    href={talent.instagram}
                    className="talent-social"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${talent.name} on Instagram`}
                  >
                    <InstagramIcon />
                  </a>
                </div>
                <div className="talent-body">
                  <p className="talent-description">{talent.description}</p>
                  <div className="talent-tags">
                    {talent.tags.map((tag) => (
                      <span key={tag} className="talent-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="talent-stats">
                    {talent.stats.map((stat) => (
                      <div key={stat.label} className="talent-stat-row">
                        <span>{stat.label}</span>
                        <span>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SignupForm />

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-inner">
            <p className="section-label">Get in Touch</p>
            <h2 className="contact-title">Let&apos;s Build Something Together</h2>
            <p className="contact-subtitle">
              Ready to connect your brand with authentic creators? Reach out and
              let&apos;s start a conversation.
            </p>
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
