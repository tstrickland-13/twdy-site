"use client";

import { useEffect, useRef, useState } from "react";

const SEGMENTS = [
  { src: "/videos/orange_Logo.mp4", type: "video/mp4" },
  { src: "/videos/logo_words_v2.mp4", type: "video/mp4" },
] as const;

export function HeroVideo() {
  const heroRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [segment, setSegment] = useState(0);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    if (!hero || !video) return;

    let hasScrolledPast = false;

    const onEnded = () => {
      // Advance to the next segment if there is one. The final segment
      // holds on the last frame.
      if (segment < SEGMENTS.length - 1) {
        setSegment((s) => s + 1);
      }
    };

    const onScroll = () => {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > heroBottom && !hasScrolledPast) {
        hasScrolledPast = true;
      }
      if (hasScrolledPast && scrollPosition < hero.offsetHeight * 0.5) {
        // Scrolled back to the top: replay from segment 1.
        hasScrolledPast = false;
        setSegment(0);
      }
    };

    video.addEventListener("ended", onEnded);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      video.removeEventListener("ended", onEnded);
      window.removeEventListener("scroll", onScroll);
    };
  }, [segment]);

  // Whenever the segment changes, force a reload + play of the new clip.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    void video.play().catch(() => {
      /* autoplay rejection is fine; user can scroll past */
    });
  }, [segment]);

  const current = SEGMENTS[segment];

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <video
        key={current.src}
        className="hero-video"
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop={false}
      >
        <source src={current.src} type={current.type} />
      </video>
      <div className="hero-overlay" />
    </section>
  );
}
