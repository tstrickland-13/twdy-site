"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ROTATING_IMAGES: { src: string; alt: string; position?: string }[] = [
  {
    src: "/images/rotator/rotator-01-spartans-basketball.png",
    alt: "University of Tampa Spartans basketball player at the free-throw line",
    // Portrait in a wide frame — bias to the top to keep his face in view.
    position: "center 22%",
  },
  {
    src: "/images/rotator/rotator-02-leather-jacket.png",
    alt: "Creator portrait in a leather varsity jacket",
    position: "center 28%",
  },
  {
    src: "/images/rotator/rotator-03-studio.png",
    alt: "Creator in a black studio fashion shoot",
    position: "center 28%",
  },
  {
    src: "/images/rotator/rotator-04-chrysler.png",
    alt: "Creator posing with a classic Chrysler",
    position: "center 30%",
  },
  {
    src: "/images/rotator/rotator-05-runway.png",
    alt: "Creator walking a fashion runway",
    position: "center 22%",
  },
];

const ROTATE_MS = 5000;

export function PictureRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_IMAGES.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="bg-black py-12 md:py-16">
      {/* Contained landscape stage — bounded by the site container with equal
          breathing room on all sides, so the photo reads smaller than a
          full-bleed frame but still prominent. */}
      <div className="container">
        {/* Portrait on phones (4:5) to fit vertical creator shots, opening up
            to a large centered square on desktop so it commands real space
            without going edge-to-edge. */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-[var(--color-surface)] sm:max-w-lg md:aspect-[1/1] md:max-w-3xl">
          {ROTATING_IMAGES.map((img, i) => {
            const active = i === index;
            return (
              <div
                key={img.src}
                className={[
                  "absolute inset-0 transition-opacity duration-[1400ms] ease-in-out",
                  active ? "opacity-100" : "opacity-0",
                ].join(" ")}
                aria-hidden={!active}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1280px) 1152px, 100vw"
                  quality={95}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className={[
                    "object-cover transition-transform duration-[6000ms] ease-out",
                    active ? "scale-[1.04]" : "scale-100",
                  ].join(" ")}
                  style={{ objectPosition: img.position ?? "center" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
