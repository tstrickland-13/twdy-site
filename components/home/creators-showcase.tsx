"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Creator = {
  slug: string;
  name: string;
  role: string;
  images: { src: string; alt: string }[];
};

const CREATORS: Creator[] = [
  {
    slug: "maximo",
    name: "Maximo Rivano",
    role: "Lifestyle · Fashion · Soccer",
    images: [
      { src: "/images/maximo-1.jpg", alt: "Maximo Rivano" },
      { src: "/images/maximo-2.png", alt: "Maximo Rivano" },
    ],
  },
  {
    slug: "aris",
    name: "Aris",
    role: "Twitch · Content · Personality",
    images: [
      { src: "/images/aris-1.png", alt: "Aris" },
      { src: "/images/aris-2.png", alt: "Aris" },
    ],
  },
  {
    slug: "jordan",
    name: "Jordan Lanier",
    role: "Basketball · Creator · Influencer",
    images: [
      { src: "/images/jordan-1.jpeg", alt: "Jordan Lanier" },
      { src: "/images/jordan-2.png", alt: "Jordan Lanier" },
    ],
  },
];

function CreatorCard({ creator, index }: { creator: Creator; index: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const startDelay = index * 1500;
    let interval: ReturnType<typeof setInterval> | null = null;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setActive((prev) => (prev + 1) % creator.images.length);
      }, 4000);
    }, startDelay);

    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [creator.images.length, index]);

  return (
    <div className="creator-card">
      <div className="image-rotator" data-creator={creator.slug}>
        {creator.images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className={i === active ? "active" : ""}
            priority={i === 0 && index === 0}
          />
        ))}
      </div>
      <div className="creator-info">
        <h3 className="creator-name">{creator.name}</h3>
        <p className="creator-role">{creator.role}</p>
      </div>
    </div>
  );
}

export function CreatorsShowcase() {
  return (
    <section className="creators-section">
      <div className="container">
        <div className="creators-header">
          <p className="section-label">Meet the Creators</p>
          <h2 className="section-title">Our Talent</h2>
        </div>
        <div className="creators-grid">
          {CREATORS.map((creator, i) => (
            <CreatorCard key={creator.slug} creator={creator} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
