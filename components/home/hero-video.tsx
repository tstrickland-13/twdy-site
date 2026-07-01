"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";

const HERO_VIDEO = { src: "/videos/hero.mp4", type: "video/mp4" } as const;

// Small beat before the hero video fades in, so it doesn't slam in the instant
// the page opens. The element mounts immediately so autoplay can start early.
const START_DELAY_MS = 900;

export function HeroVideo() {
  const heroRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Fade in after a short delay.
  useEffect(() => {
    const id = window.setTimeout(() => setVisible(true), START_DELAY_MS);
    return () => window.clearTimeout(id);
  }, []);

  // Start playback as soon as the video is in the DOM; retry once media is ready.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const attemptPlay = () => {
      void video.play().catch(() => {
        // Autoplay blocked by browser policy — video stays on first frame.
      });
    };

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      attemptPlay();
    } else {
      video.addEventListener("canplay", attemptPlay, { once: true });
    }

    return () => {
      video.removeEventListener("canplay", attemptPlay);
    };
  }, []);

  // Replay the video from the start when the user scrolls back to the top.
  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    if (!hero || !video) return;

    let hasScrolledPast = false;

    const onScroll = () => {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > heroBottom && !hasScrolledPast) {
        hasScrolledPast = true;
      }
      if (hasScrolledPast && scrollPosition < hero.offsetHeight * 0.5) {
        // Scrolled back to the top: replay from the beginning.
        hasScrolledPast = false;
        video.currentTime = 0;
        void video.play();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleSkip = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("main-content");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    // Move focus to the content so keyboard / screen-reader users continue
    // from there instead of being stranded on the hero.
    target.focus({ preventScroll: true });
  };

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <video
        key={HERO_VIDEO.src}
        className={`hero-video${visible ? " hero-video-fade-in" : " hero-video-pending"}`}
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        loop={false}
      >
        <source src={HERO_VIDEO.src} type={HERO_VIDEO.type} />
      </video>
      <div className="hero-overlay" />

      <a
        href="#main-content"
        onClick={handleSkip}
        aria-label="Skip video and scroll to main content"
        className="hero-scroll-indicator group absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 rounded-full px-4 py-2 text-white/75 transition-colors hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] md:bottom-9"
      >
        <span className="font-[family-name:var(--font-oswald)] text-[0.7rem] font-semibold uppercase tracking-[0.3em] md:text-xs">
          Scroll
        </span>
        <svg
          className="hero-scroll-chevron h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
