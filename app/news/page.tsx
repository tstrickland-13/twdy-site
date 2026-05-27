import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News | TWDY Agency",
  description: "Latest news, campaigns, and announcements from TWDY Agency.",
};

type Article = {
  slug: string;
  title: string;
  author: string;
  readMin: number;
  date: string;
  cover: { src: string; alt: string; position?: string };
  excerpt: string;
};

const ARTICLES: Article[] = [
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

export default function NewsPage() {
  return (
    <>
      <section className="bg-black pb-12 pt-32 md:pt-40">
        <div className="container">
          <p className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] md:text-base">
            The Latest
          </p>
          <h1
            className="font-[family-name:var(--font-oswald)] mt-6 font-bold uppercase leading-[0.9] tracking-[0.01em] text-white"
            style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
          >
            New<span className="text-[var(--color-accent)]">s</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
            Campaigns, signings, and stories from inside TWDY.
          </p>
        </div>
      </section>

      <div>
        {ARTICLES.map((article, idx) => (
          <ArticleRow
            key={article.slug}
            article={article}
            flip={idx % 2 === 1}
            dark={idx % 2 === 0}
          />
        ))}
      </div>
    </>
  );
}

function ArticleRow({
  article,
  flip,
  dark,
}: {
  article: Article;
  flip: boolean;
  dark: boolean;
}) {
  return (
    <section
      className={[
        "border-t border-[var(--color-border)] py-20 md:py-28",
        dark ? "bg-[var(--color-surface)]" : "bg-black",
      ].join(" ")}
    >
      <div className="container">
        <article className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Link
            href={`/news/${article.slug}`}
            aria-label={`Read: ${article.title}`}
            className={[
              "group block",
              flip ? "md:order-2" : "md:order-1",
            ].join(" ")}
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-black">
              <Image
                src={article.cover.src}
                alt={article.cover.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={{ objectPosition: article.cover.position ?? "center" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/0" />
            </div>
            <p className="font-[family-name:var(--font-oswald)] mt-5 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              {article.date}
            </p>
          </Link>

          <div className={flip ? "md:order-1" : "md:order-2"}>
            <h2
              className="font-[family-name:var(--font-oswald)] font-bold uppercase leading-[1.0] tracking-tight text-white"
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
            >
              {article.title}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-secondary)]">
              {article.excerpt}
            </p>
            <dl className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
              <div className="flex items-baseline gap-2">
                <dt className="font-[family-name:var(--font-oswald)] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  By
                </dt>
                <dd className="text-white">{article.author}</dd>
              </div>
              <div className="flex items-baseline gap-2">
                <dt className="sr-only">Read time</dt>
                <dd className="text-[var(--color-text-secondary)]">
                  {article.readMin} min read
                </dd>
              </div>
            </dl>
            <Link
              href={`/news/${article.slug}`}
              className="font-[family-name:var(--font-oswald)] mt-10 inline-flex w-fit items-center gap-2 border-b-2 border-[var(--color-accent)] pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] transition-opacity hover:opacity-80"
            >
              Read article <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
