"use client";

import Image from "next/image";
import { useState } from "react";
import type { Creator } from "@/lib/creators";
import { InstagramIcon } from "@/components/icons/instagram-icon";

export function TradingCard({ creator }: { creator: Creator }) {
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

          <span className="card-flip-hint card-flip-hint-back">
            ← Tap to flip back
          </span>
        </div>
      </div>
    </div>
  );
}
