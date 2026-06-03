export type Article = {
  slug: string;
  title: string;
  author: string;
  /** Display date, e.g. "Jun 19, 2024" or "Coming Soon". */
  date: string;
  readMin: number;
  cover: { src: string; alt: string; position?: string };
  excerpt: string;
  /** Full body as an ordered list of paragraphs. Empty = coming soon. */
  body?: string[];
  /** Optional source attribution for syndicated/originally published posts. */
  source?: { label: string; href: string };
};

export const ARTICLES: Article[] = [
  {
    slug: "wnba-rising-stars-brand-power",
    title:
      "Rising Stars and Brand Power: How Young Talent Is Propelling the WNBA to New Heights",
    author: "Miles Tweedy",
    date: "Jun 19, 2024",
    readMin: 4,
    cover: {
      src: "/images/rotator/05-tampa-basketball.png",
      alt: "Young basketball talent driving the WNBA's growth",
      position: "center 20%",
    },
    excerpt:
      "A new generation — Caitlin Clark, Angel Reese, Cameron Brink, and more — is elevating the WNBA on the court and unlocking major brand partnerships off it.",
    body: [
      "The WNBA has been gaining significant traction. With this new generation's up-and-coming talent like Caitlin Clark, Angel Reese, and Cameron Brink, the WNBA is not only elevated by their level of play on the court but they've also increased the league's marketability, drawing in substantial brand partnerships.",
      "Leading the charge is the 2024 number one pick, Caitlin Clark. Clark has been driving viewership for women's basketball since her college days. This included a matchup against South Carolina that drew nearly 19 million viewers, shattering records as the most-watched women's college basketball game ever. This momentum has carried into the WNBA, significantly enhancing her marketability. Rick Morrissey of the Chicago Sun-Times said, \u201CClark is going to put money in their pockets, just as Tiger Woods did for professional golfers when he burst onto the scene.\u201D What Morrissey means is that Clark will put money into some of the veterans' pockets just because of her influence, which will grow the WNBA as a whole. Clark recently signed with Wilson Basketball to a multi-year deal for a signature basketball line, a distinction previously held only by Michael Jordan.",
      "Another standout is Sabrina Ionescu of the New York Liberty. Her record-breaking college career at the University of Oregon and her seamless transition to the WNBA have made her a prominent figure. Ionescu's on-court prowess and charismatic personality have attracted endorsements from major brands like Nike, which signed her to a multi-year deal. This Nike endorsement came with her own signature shoe, which she and Nike decided to make unisex. The New York Times asked her about her shoe, and Ionescu said, \u201Cbridging the gap between women's and men's sports, and being able to do that by creating a unisex line that was available for everyone, that was obviously the most important (aspect) to me while designing this shoe.\u201D",
      "The influx of talent and its subsequent marketability have not gone unnoticed by brands seeking to tap into the growing popularity of the WNBA. Partnerships with companies such as SKIMS, AT&T, Google, and Deloitte underscore the league's expanding commercial footprint. These partnerships exemplify how the WNBA's rising talent pool attracts diverse brand collaborations, each bringing unique value and exposure to the league. The involvement of high-profile companies not only boosts the WNBA's financial stability but also helps in elevating the league's profile, driving a cycle of growth and popularity.",
      "The young talent in the WNBA is propelling the league forward, both in terms of competitive excellence and market presence. These athletes are not only stars on the court but also influential figures in the world of sports marketing, drawing in brand partnerships that enhance the league's status and contribute to its continued growth.",
    ],
  },
  {
    slug: "coming-soon-1",
    title: "TWDY Signs Rising Creator Class of 2026",
    author: "Miles Tweedy",
    readMin: 4,
    date: "Coming Soon",
    cover: {
      src: "/images/maximo-2.png",
      alt: "TWDY signing announcement",
      position: "center",
    },
    excerpt:
      "A look at the next wave of athletes and creators joining the TWDY roster.",
  },
  {
    slug: "coming-soon-2",
    title: "How NIL Is Reshaping College Sports Marketing",
    author: "TWDY Agency",
    readMin: 6,
    date: "Coming Soon",
    cover: {
      src: "/images/jordan-2.png",
      alt: "NIL article cover",
      position: "center top",
    },
    excerpt:
      "Inside the strategies brands and athletes are using to win in the NIL era.",
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
