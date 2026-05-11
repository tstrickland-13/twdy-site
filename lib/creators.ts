export type CreatorImage = {
  src: string;
  alt: string;
};

export type CreatorStat = {
  label: string;
  value: string;
};

export type Creator = {
  slug: string;
  name: string;
  shortRole: string;
  fullRole: string;
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
    slug: "maximo",
    name: "Maximo Rivano",
    shortRole: "Lifestyle · Fashion · Soccer",
    fullRole: "Lifestyle Creator · Fashion · Soccer Player",
    instagram: "https://www.instagram.com/maximorivano/",
    description:
      "A creator who blends sport, fashion, and culture with effortless style. His clean visual style, athletic credibility, and creative direction make him ideal for brands at the intersection of performance and lifestyle.",
    tags: ["Lifestyle", "Fashion", "Athlete", "Health & Wellness"],
    images: [
      { src: "/images/maximo-1.jpg", alt: "Maximo Rivano" },
      { src: "/images/maximo-2.png", alt: "Maximo Rivano" },
    ],
    stats: [
      { label: "TikTok", value: "1.1M Followers" },
      { label: "Instagram", value: "110K Followers" },
      { label: "Snapchat", value: "111.7K Followers" },
      { label: "Total Likes", value: "75.2M+" },
    ],
  },
  {
    slug: "aris",
    name: "Aris",
    shortRole: "Twitch · Content · Personality",
    fullRole: "Twitch Streamer · Content Creator · Personality",
    instagram: "https://www.instagram.com/resistible/",
    description:
      "A fast-rising Twitch streamer recognized for her personality, authenticity, and loyal community. Her mix of humor, authenticity, and on-camera presence makes her exceptional for brands in beauty, fitness, food, and lifestyle.",
    tags: ["Food & Beverage", "Fitness", "Beauty", "Broadcasting"],
    images: [
      { src: "/images/aris-1.png", alt: "Aris" },
      { src: "/images/aris-2.png", alt: "Aris" },
    ],
    imagePosition: "center top",
    stats: [
      { label: "Twitch", value: "38K Followers" },
      { label: "TikTok", value: "110K Followers" },
      { label: "YouTube", value: "16K Subscribers" },
      { label: "Hours Watched", value: "244K" },
    ],
  },
  {
    slug: "jordan",
    name: "Jordan Lanier",
    shortRole: "Basketball · Creator · Influencer",
    fullRole: "College Basketball Player · Creator · Influencer",
    instagram: "https://www.instagram.com/_jordanlanier_/",
    description:
      "A rising athlete at the University of Tampa who brings charisma, confidence, and authenticity to everything he does. His ability to combine performance and personality positions him as a strong voice in NIL and lifestyle marketing.",
    tags: ["Fashion", "Food", "Athlete", "Lifestyle"],
    images: [
      { src: "/images/jordan-1.jpeg", alt: "Jordan Lanier" },
      { src: "/images/jordan-2.png", alt: "Jordan Lanier" },
    ],
    imagePosition: "center top",
    stats: [
      { label: "TikTok", value: "46.1K Followers" },
      { label: "Instagram", value: "8.3K Followers" },
      { label: "Snapchat", value: "3.6K Followers" },
      { label: "Total Likes", value: "1.1M+" },
    ],
  },
];
