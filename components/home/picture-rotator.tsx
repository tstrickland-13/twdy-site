"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ROTATING_IMAGES: { src: string; alt: string; position?: string }[] = [
  {
    src: "/images/rotator/11-twdy-backdrop.png",
    alt: "TWDY Agency event backdrop",
    position: "center",
  },
  {
    src: "/images/rotator/05-tampa-basketball.png",
    alt: "Jordan Lanier — University of Tampa basketball",
    // Pull up so the top of his head doesn't crop
    position: "center 10%",
  },
  {
    src: "/images/rotator/12-leather-jacket.png",
    alt: "Creator portrait — leather jacket",
    position: "center 18%",
  },
  {
    src: "/images/rotator/02-hidden-hills-drink.png",
    alt: "Hidden Hills brand campaign",
    position: "center 22%",
  },
  {
    src: "/images/rotator/03-santoros-soccer.png",
    alt: "Santoro's Pizza soccer campaign",
    position: "center 30%",
  },
  {
    src: "/images/rotator/01-jimmy-johns.png",
    alt: "Jimmy John's brand activation",
    // Push down so we lean on the body, not the sign
    position: "center 60%",
  },
  {
    src: "/images/rotator/06-hidden-hills-hoodie.png",
    alt: "Hidden Hills apparel shoot",
    // Move down so face + hoodie design read together
    position: "center 55%",
  },
  {
    src: "/images/rotator/07-tampa-barber.png",
    alt: "Tampa Spartans creator portrait",
    position: "center 22%",
  },
  {
    src: "/images/rotator/04-sunset-wall.png",
    alt: "Creator portrait — sunset wall",
    position: "center 22%",
  },
  {
    src: "/images/rotator/08-soccer-stanley.png",
    alt: "Soccer training campaign",
    position: "center 35%",
  },
  {
    src: "/images/rotator/13-puma-couch.png",
    alt: "Puma brand activation",
    // Landscape; bring head/sign into view
    position: "center 35%",
  },
  {
    src: "/images/rotator/09-pyo-panel.png",
    alt: "PYO — Where Fashion Meets You panel",
    position: "center",
  },
  {
    src: "/images/rotator/10-pyo-event.png",
    alt: "PYO fashion event",
    position: "center",
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
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-black">
      {/* Cinematic stage. Aspect chosen so portrait source photos retain
          enough headroom — square-ish on mobile, 3:2 on tablet+. */}
      <div className="relative aspect-[4/5] w-full sm:aspect-[5/4] md:aspect-[3/2]">
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
                sizes="100vw"
                quality={95}
                className={[
                  "object-cover transition-transform duration-[6000ms] ease-out",
                  active ? "scale-[1.04]" : "scale-100",
                ].join(" ")}
                style={{ objectPosition: img.position ?? "center" }}
              />
            </div>
          );
        })}

        {/* Vignette + gradient blends with surrounding sections */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/40" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

        {/* Counter + dots */}
        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-4">
          <div className="font-[family-name:var(--font-oswald)] flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/90 md:text-base">
            <span className="text-[var(--color-accent)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="block h-px w-8 bg-white/40" />
            <span>{String(ROTATING_IMAGES.length).padStart(2, "0")}</span>
          </div>
          <div
            className="pointer-events-auto flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Featured photos"
          >
            {ROTATING_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show photo ${i + 1}`}
                onClick={() => setIndex(i)}
                className={[
                  "h-1 rounded-full transition-all duration-300",
                  i === index
                    ? "w-8 bg-[var(--color-accent)]"
                    : "w-1 bg-white/40 hover:bg-white/70",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
