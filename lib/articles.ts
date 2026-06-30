export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string };

export type Article = {
  slug: string;
  title: string;
  author: string;
  /** Display date, e.g. "Jun 19, 2024" or "Coming Soon". */
  date: string;
  readMin: number;
  cover: { src: string; alt: string; position?: string };
  excerpt: string;
  /** Full body as an ordered list of blocks. Empty = coming soon. */
  body?: ArticleBlock[];
  /** Optional source attribution for syndicated/originally published posts. */
  source?: { label: string; href: string };
};

export const ARTICLES: Article[] = [
  {
    slug: "curacao-world-cup-overnight-roi",
    title:
      "15 Saves, 1 Million Followers, 158K Citizens: Inside the Overnight ROI of the World Cup's Smallest Nation",
    author: "Max Butterfass",
    date: "Jun 30, 2026",
    readMin: 3,
    cover: {
      src: "/images/rotator/03-santoros-soccer.png",
      alt: "Soccer player representing the underdog World Cup story",
      position: "center 20%",
    },
    excerpt:
      "Curaçao — the smallest nation ever to qualify for a World Cup — turned a historic first goal and a 15-save clean sheet into a global marketing moment, sending goalkeeper Eloy Room from 45K to over a million followers overnight.",
    body: [
      {
        type: "paragraph",
        text: 'The FIFA World Cup is as much about the big names as the underdog stories, and no nation represents the latter as much as Curaçao. Curaçao is a Caribbean island with a population of roughly 158,000 people, the smallest ever to qualify for the World Cup. Led by legendary veteran Dutch manager Dick Advocaat, the "Blue Wave" relied on a dual-identity talent pool, with 25 of their 26 players born and raised in the Netherlands with ancestral Curaçaoan roots. Curaçao had an impressive ten match unbeaten run through qualifiers to earn their historic first ever trip to the World Cup. While massively unknown to most people, Curaçao quickly leveraged their unique story well before their opening match to prepare for their newfound spotlight. From hanging up billboards showcasing the team with the slogan "Small Island, Big Dreams" to riding into the tournament in an old school blue and yellow bus, Curaçao demonstrated efficient marketing of the Blue Wave to set themselves up for success beyond the pitch.',
      },
      {
        type: "paragraph",
        text: "Facing the tough task of opening up World Cup play against an international powerhouse in Germany, Curaçao stood strong. Even though the final score was 7-1, the highlight of the match was Curaçao's Livano Comenencia tying the score 1-1 in the 21st minute, a historic first goal for Curaçao. The team ran away with this moment by effectively building anticipation for it in the days and weeks prior. It is remarkable how a single play on the losing side of a blowout can become the focus of the match through effective marketing.",
      },
      {
        type: "paragraph",
        text: "Keeping public sentiment high proved to prevent a moral collapse, as Curaçao secured a historic 0-0 clean sheet draw against Ecuador, giving the nation its first ever World Cup point. 37 year old goalkeeper Eloy Room was the hero, racking up 15 saves, the second most ever in a single World Cup game. Room's performance had a ripple effect just as much off the field as on it. In just 24 hours, Eloy Room went from 45K followers to over one million.",
      },
      {
        type: "paragraph",
        text: "Room's social explosion is a perfect example of the modern athlete-creator economy. Overnight, he transformed from a second-division club goalkeeper to a globally recognized asset that will open doors for brand collaborations and popularity lasting well beyond the next few weeks. Internet culture and sports performance have become highly aligned. Sports marketers must understand how to prepare for and capitalize on brief viral moments to create lasting success.",
      },
      {
        type: "paragraph",
        text: "Regardless of the final result, Curaçao has positioned itself well for tourism and global outreach. Curaçao is set up to capitalize on consumer ad campaigns and more importantly, the ability to develop and bring talent to their soccer program.",
      },
    ],
  },
  // Cover image is a placeholder — replace with Miles's final image
  {
    slug: "smart-brands-micro-influencers",
    title:
      "Why Smart Brands Are Ditching Celebrities for Micro and Nano Influencers in 2026",
    author: "Miles Tweedy",
    date: "May 27, 2026",
    readMin: 5,
    cover: {
      src: "/images/rotator/12-leather-jacket.png",
      alt: "Creator-led brand campaign",
      position: "center 18%",
    },
    excerpt:
      "More followers doesn't mean more sales. The brands quietly outperforming everyone are building rosters of micro and nano influencers with real, engaged communities — at a fraction of the cost of celebrity deals.",
    body: [
      {
        type: "paragraph",
        text: "Let's be honest, more followers does not mean more sales. Brands are figuring this out, and the ones who already have are quietly outperforming everyone else. The idea that you need a celebrity with millions of followers to move product is quickly becoming outdated. What's actually working right now is smaller creators with communities they've built brick by brick, who actually believe what they promote. The numbers tell the story, according to [Digital Applied](https://www.digitalapplied.com/blog/influencer-marketing-2026-micro-nano-strategy), micro-influencers deliver 60% higher engagement rates than mega-influencers at roughly 1/10th the cost. [Influee](https://influee.co/blog/influencer-marketing-trends) reports nano influencers are hitting up to 11.9% engagement on TikTok compared to under 1% for macro accounts. For brands still chasing reach over connection, they won't see the same return they would with micro or nano influencers.",
      },
      {
        type: "paragraph",
        text: "A creator with 8,000 skincare followers has spent months, maybe years, building a real relationship with those people. When they recommend something, their audience listens because it feels like advice from a friend, not a sponsored post. This drives action, leading to sales. [Nano influencer performance data](https://archive.com/blog/nano-influencer-performance) shows nano creators convert 7% of engagements into actual sales compared to just 3% for macro-influencers. That's more than double the conversion for a fraction of the price.",
      },
      {
        type: "paragraph",
        text: "And the cost difference is significant. [Markhub24](https://www.markhub24.com/post/micro-vs-macro-influencers-what-delivers-better-roi-in-2026) found brands pay approximately 65% more per meaningful interaction through macro partnerships. When you're trying to justify every dollar in your marketing budget, that math matters.",
      },
      {
        type: "paragraph",
        text: "The brands winning right now are not putting all their money into one big name and hoping for the best. [Digital Applied](https://www.digitalapplied.com/blog/influencer-marketing-2026-micro-nano-strategy) highlights that the smarter approach is building a roster of 20 to 50 micro and nano influencers posting consistently over months. That steady, ongoing presence creates social proof that compounds over time and outperforms one-off celebrity campaigns every time. And for brands working with smaller budgets, here's something worth knowing. [Nano influencer performance data](https://archive.com/blog/nano-influencer-performance) shows that gifted product collaborations generate 12.9% higher engagement and 215% more views than paid partnerships. Meaning you don't always need to spend big to get results. Sometimes getting the right product in the right hands is enough.",
      },
      {
        type: "paragraph",
        text: "Repeat partnerships are also on the rise. [Influencer Advisory](https://influenceradvisory.com/blog/influencer-marketing-trends-2026/) reports that brands renewing with the same creator multiple times per quarter is up roughly 40% year-over-year. That makes sense, because the creator that built its community is also helping build that brand. The more a creator talks about your brand, the more natural it feels to their audience. People can tell when it's genuine and when someone just cashed a check. One off campaigns don't show the same authenticity to a content creator's community, it's easy to spot a money grab.",
      },
      {
        type: "paragraph",
        text: "This shift has been building for a while but 2026 is when it's becoming the norm. [Influee](https://influee.co/blog/influencer-marketing-trends) reports 71% of brands are increasing their creator program budgets, with nearly two-thirds pulling money away from traditional channels. And with over 51.5% of U.S. creators reporting income growth year-over-year per the [Brand Deals Report 2026](https://theinfluencermarketingfactory.com/brand-deals-analysis/), the creator economy is only getting bigger and more professional.",
      },
      {
        type: "paragraph",
        text: "The brands building real creator relationships now, the ones focused on authenticity over audience size, are the ones who will be ahead of the curve. If your strategy still starts and ends with follower count, it might be time to rethink your approach.",
      },
    ],
  },
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
      {
        type: "paragraph",
        text: "The WNBA has been gaining significant traction. With this new generation's up-and-coming talent like Caitlin Clark, Angel Reese, and Cameron Brink, the WNBA is not only elevated by their level of play on the court but they've also increased the league's marketability, drawing in substantial brand partnerships.",
      },
      {
        type: "paragraph",
        text: "Leading the charge is the 2024 number one pick, Caitlin Clark. Clark has been driving viewership for women's basketball since her college days. This included a matchup against South Carolina that drew nearly 19 million viewers, shattering records as the most-watched women's college basketball game ever. This momentum has carried into the WNBA, significantly enhancing her marketability. Rick Morrissey of the [Chicago Sun-Times](https://chicago.suntimes.com/sports/2024/05/15/wnba-its-two-opposing-camps-caitlin-clark-indiana-fever-chicago-sky-angel-reese) said, \u201CClark is going to put money in their pockets, just as Tiger Woods did for professional golfers when he burst onto the scene.\u201D What Morrissey means is that Clark will put money into some of the veterans' pockets just because of her influence, which will grow the WNBA as a whole. Clark recently signed with Wilson Basketball to a multi-year deal for a signature basketball line, a distinction previously held only by Michael Jordan.",
      },
      {
        type: "paragraph",
        text: "Another standout is Sabrina Ionescu of the New York Liberty. Her record-breaking college career at the University of Oregon and her seamless transition to the WNBA have made her a prominent figure. Ionescu's on-court prowess and charismatic personality have attracted endorsements from major brands like Nike, which signed her to a multi-year deal. This Nike endorsement came with her own signature shoe, which she and Nike decided to make unisex. The [New York Times](https://www.nytimes.com/athletic/5282023/2024/02/17/sabrina-ionescu-shoes-nike-nba-steph-curry/) asked her about her shoe, and Ionescu said, \u201Cbridging the gap between women's and men's sports, and being able to do that by creating a unisex line that was available for everyone, that was obviously the most important (aspect) to me while designing this shoe.\u201D",
      },
      {
        type: "paragraph",
        text: "The influx of talent and its subsequent marketability have not gone unnoticed by brands seeking to tap into the growing popularity of the WNBA. Partnerships with companies such as SKIMS, AT&T, Google, and Deloitte underscore the league's expanding commercial footprint. These partnerships exemplify how the WNBA's rising talent pool attracts diverse brand collaborations, each bringing unique value and exposure to the league. The involvement of high-profile companies not only boosts the WNBA's financial stability but also helps in elevating the league's profile, driving a cycle of growth and popularity.",
      },
      {
        type: "paragraph",
        text: "The young talent in the WNBA is propelling the league forward, both in terms of competitive excellence and market presence. These athletes are not only stars on the court but also influential figures in the world of sports marketing, drawing in brand partnerships that enhance the league's status and contribute to its continued growth.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
