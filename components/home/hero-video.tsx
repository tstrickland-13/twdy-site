"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const heroRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    if (!hero || !video) return;

    let hasScrolledPast = false;
    let userHasScrolled = false;
    let autoScrollTimeout: ReturnType<typeof setTimeout> | null = null;
    let isAutoScrolling = false;

    const markScrolled = () => {
      userHasScrolled = true;
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Space"].includes(e.code)
      ) {
        userHasScrolled = true;
      }
    };

    const onEnded = () => {
      if (!userHasScrolled && window.scrollY < hero.offsetHeight * 0.5) {
        autoScrollTimeout = setTimeout(() => {
          isAutoScrolling = true;
          const aboutSection = document.querySelector<HTMLElement>(
            ".about-section",
          );
          if (aboutSection) {
            const scrollTo = aboutSection.offsetTop - 60;
            window.scrollTo({ top: scrollTo, behavior: "smooth" });
            setTimeout(() => {
              isAutoScrolling = false;
            }, 1000);
          }
        }, 500);
      }
    };

    const onScroll = () => {
      if (autoScrollTimeout && !isAutoScrolling) {
        clearTimeout(autoScrollTimeout);
        autoScrollTimeout = null;
      }
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > heroBottom && !hasScrolledPast) {
        hasScrolledPast = true;
      }
      if (hasScrolledPast && scrollPosition < hero.offsetHeight * 0.5) {
        video.currentTime = 0;
        void video.play();
        hasScrolledPast = false;
        userHasScrolled = false;
      }
    };

    window.addEventListener("wheel", markScrolled, { passive: true });
    window.addEventListener("touchmove", markScrolled, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    video.addEventListener("ended", onEnded);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", markScrolled);
      window.removeEventListener("touchmove", markScrolled);
      window.removeEventListener("keydown", onKeyDown);
      video.removeEventListener("ended", onEnded);
      window.removeEventListener("scroll", onScroll);
      if (autoScrollTimeout) clearTimeout(autoScrollTimeout);
    };
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <video
        className="hero-video"
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop={false}
      >
        <source src="/videos/twdy_intro_combined.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
    </section>
  );
}
