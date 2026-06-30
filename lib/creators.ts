export type CreatorImage = {
  src: string;
  alt: string;
};

export type CreatorStat = {
  label: string;
  value: string;
};

export type CreatorCategory = "creator" | "athlete";

export type Creator = {
  slug: string;
  name: string;
  shortRole: string;
  fullRole: string;
  category: CreatorCategory;
  instagram: string;
  description: string;
  tags: string[];
  images: CreatorImage[];
  stats: CreatorStat[];
  /** CSS object-position for the card photo. Defaults to "center". */
  imagePosition?: string;
};

export const CREATORS: Creator[] = [
  {
    slug: "laura",
    name: "Laura Gomez",
    shortRole: "Model · Influencer · Creator",
    fullRole: "Model · Influencer · Content Creator",
    category: "creator",
    instagram: "https://www.instagram.com/laurgmzz",
    description:
      "A model and content creator with a massive, highly engaged audience across TikTok, Instagram, and X. Her polished, fashion-forward presence makes her a natural fit for beauty, fashion, swimwear, and lifestyle brands.",
    tags: ["Fashion", "Beauty", "Lifestyle", "Modeling"],
    images: [{ src: "/images/laura-1.png", alt: "Laura Gomez" }],
    imagePosition: "center 20%",
    stats: [
      { label: "TikTok", value: "3.3M Followers" },
      { label: "Instagram", value: "427K Followers" },
      { label: "X", value: "147.1K Followers" },
    ],
  },
  {
    slug: "tayvion",
    name: "Tayvion Power",
    shortRole: "Artist · Model · Creator",
    fullRole: "Artist · Model · Entrepreneur · Content Creator",
    category: "creator",
    instagram: "https://www.instagram.com/tayvionpower/",
    description:
      "A multi-hyphenate creator blending music, fashion, and entrepreneurship. Tayvion's massive cross-platform audience makes him a standout for lifestyle, fashion, and culture-driven brands.",
    tags: ["Lifestyle", "Fashion", "Music", "Entertainment"],
    images: [
      { src: "/images/tayvion-1.png", alt: "Tayvion Power" },
      { src: "/images/maximo-2.png", alt: "Tayvion Power" },
    ],
    imagePosition: "center 30%",
    stats: [
      { label: "TikTok", value: "1.7M Followers" },
      { label: "Instagram", value: "94.3K Followers" },
      { label: "YouTube", value: "76.6K Subscribers" },
    ],
  },
  {
    slug: "maximo",
    name: "Maximo Rivano",
    shortRole: "Model · Athlete · Creator",
    fullRole: "Model · Athlete · Content Creator",
    category: "creator",
    instagram: "https://www.instagram.com/maximorivano/",
    description:
      "A creator who blends sport, fashion, and culture with effortless style. His clean visual style, athletic credibility, and creative direction make him ideal for brands at the intersection of performance and lifestyle.",
    tags: ["Lifestyle", "Fashion", "Athlete", "Health & Wellness"],
    images: [
      { src: "/images/maximo-runway.png", alt: "Maximo Rivano" },
      { src: "/images/maximo-2.png", alt: "Maximo Rivano" },
    ],
    imagePosition: "center 20%",
    stats: [
      { label: "TikTok", value: "1M Followers" },
      { label: "Instagram", value: "106K Followers" },
    ],
  },
  {
    slug: "aris",
    name: "Aris",
    shortRole: "Creator · Gamer · Streamer",
    fullRole: "Content Creator · Gamer · Twitch Streamer",
    category: "creator",
    instagram: "https://www.instagram.com/resistible/",
    description:
      "A fast-rising streamer and content creator recognized for her personality, authenticity, and loyal community. Her mix of humor, authenticity, and on-camera presence makes her exceptional for brands in beauty, fitness, food, and lifestyle.",
    tags: ["Food & Beverage", "Fitness", "Beauty", "Broadcasting"],
    images: [
      { src: "/images/aris-portrait.png", alt: "Aris" },
      { src: "/images/aris-2.png", alt: "Aris" },
    ],
    imagePosition: "center 15%",
    stats: [
      { label: "TikTok", value: "90.1K Followers" },
      { label: "Twitch", value: "37K Followers" },
      { label: "YouTube", value: "16K Subscribers" },
      { label: "Instagram", value: "14.4K Followers" },
    ],
  },
  {
    slug: "jordan",
    name: "Jordan Lanier",
    shortRole: "Basketball · Creator",
    fullRole: "Forward · University of Tampa Men's Basketball",
    category: "athlete",
    instagram: "https://www.instagram.com/_jordanlanier_/",
    description:
      "A rising athlete at the University of Tampa who brings charisma, confidence, and authenticity to everything he does. His ability to combine performance and personality positions him as a strong voice in NIL and lifestyle marketing.",
    tags: ["Athlete", "NIL", "Lifestyle", "Fashion"],
    images: [
      { src: "/images/jordan-1.jpeg", alt: "Jordan Lanier" },
      { src: "/images/jordan-2.png", alt: "Jordan Lanier" },
    ],
    imagePosition: "center top",
    stats: [
      { label: "TikTok", value: "50.3K Followers" },
      { label: "Instagram", value: "7.9K Followers" },
    ],
  },
];
