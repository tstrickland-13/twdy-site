"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";
import { CREATORS, type Creator } from "@/lib/creators";
import { InstagramIcon } from "@/components/icons/instagram-icon";

function TradingCard({ creator }: { creator: Creator }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((v) => !v);
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className="card-perspective">
      <div
        className={`flip-card ${flipped ? "is-flipped" : ""}`}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${creator.name} card. Click to ${flipped ? "see photo" : "see stats"}.`}
        onClick={toggle}
        onKeyDown={onKey}
      >
        {/* Front */}
        <div className="flip-face flip-front">
          <div className="card-photo">
            <Image
              src={creator.images[0].src}
              alt={creator.images[0].alt}
              fill
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 360px"
              className="object-cover"
              style={{ objectPosition: creator.imagePosition ?? "center" }}
              priority={creator.slug === "maximo"}
            />
            <div className="card-photo-overlay" />
          </div>
          <div className="card-front-info">
            <h3 className="card-name">{creator.name}</h3>
            <p className="card-role">{creator.shortRole}</p>
            <span className="card-flip-hint">Tap for stats →</span>
          </div>
        </div>

        {/* Back */}
        <div className="flip-face flip-back">
          <div className="card-back-header">
            <div>
              <h3 className="card-name">{creator.name}</h3>
              <p className="card-role">{creator.fullRole}</p>
            </div>
            <a
              href={creator.instagram}
              className="card-ig"
              target="_blank"
              rel="noreferrer"
              aria-label={`${creator.name} on Instagram`}
              onClick={(e) => e.stopPropagation()}
            >
              <InstagramIcon />
            </a>
          </div>

          <div className="card-back-tags">
            {creator.tags.map((tag) => (
              <span key={tag} className="card-tag">
                {tag}
              </span>
            ))}
          </div>

          <ul className="card-stats">
            {creator.stats.map((stat) => (
              <li key={stat.label}>
                <span>{stat.label}</span>
                <span>{stat.value}</span>
              </li>
            ))}
          </ul>

          <span className="card-flip-hint card-flip-hint-back">← Tap to flip back</span>
        </div>
      </div>
    </div>
  );
}

export function CreatorsCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
      dragFree: false,
    },
    [autoplay.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="carousel-section">
      <div className="container">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {CREATORS.map((creator) => (
                <div className="embla__slide" key={creator.slug}>
                  <TradingCard creator={creator} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="embla__btn embla__btn--prev"
            aria-label="Previous creator"
            onClick={scrollPrev}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 6l-6 6 6 6"
              />
            </svg>
          </button>
          <button
            type="button"
            className="embla__btn embla__btn--next"
            aria-label="Next creator"
            onClick={scrollNext}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6l6 6-6 6"
              />
            </svg>
          </button>

          <div className="embla__dots" role="tablist" aria-label="Select creator">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === selectedIndex}
                aria-label={`Go to creator ${index + 1}`}
                className={`embla__dot ${index === selectedIndex ? "is-active" : ""}`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>

        <div className="carousel-cta">
          <Link href="/talent" className="carousel-cta-link">
            See Full Roster →
          </Link>
        </div>
      </div>
    </section>
  );
}
