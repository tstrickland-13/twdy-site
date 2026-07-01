import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ARTICLES, type Article } from "@/lib/articles";
import { SectionDivider } from "@/components/section-divider";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news, campaigns, and announcements from TWDY Agency.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <section className="bg-black pb-8 pt-32 md:pt-40">
        <div className="container">
          <p className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] md:text-base">
            The Latest
          </p>
          <h1
            className="font-[family-name:var(--font-oswald)] mt-6 font-bold uppercase leading-[0.9] tracking-[0.01em] text-white"
            style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
          >
            News
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
            Campaigns, signings, and stories from inside TWDY.
          </p>
        </div>
      </section>

      <SectionDivider compact />

      <div>
        {ARTICLES.map((article, idx) => (
          <ArticleRow
            key={article.slug}
            article={article}
            flip={idx % 2 === 1}
            dark={idx % 2 === 0}
            first={idx === 0}
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
  first = false,
}: {
  article: Article;
  flip: boolean;
  dark: boolean;
  first?: boolean;
}) {
  const published = Boolean(article.body?.length);
  const href = `/news/${article.slug}`;

  const cover = (
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
  );

  return (
    <section
      className={[
        first
          ? "pt-12 pb-20 md:pt-16 md:pb-28"
          : "border-t border-[var(--color-border)] py-20 md:py-28",
        dark ? "bg-black" : "bg-[var(--color-surface)]",
      ].join(" ")}
    >
      <div className="container">
        <article className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className={flip ? "md:order-2" : "md:order-1"}>
            {published ? (
              <Link
                href={href}
                aria-label={`Read: ${article.title}`}
                className="group block"
              >
                {cover}
                <p className="font-[family-name:var(--font-oswald)] mt-5 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                  {article.date}
                </p>
              </Link>
            ) : (
              <div className="group block">
                {cover}
                <p className="font-[family-name:var(--font-oswald)] mt-5 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                  {article.date}
                </p>
              </div>
            )}
          </div>

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
            {published ? (
              <Link
                href={href}
                className="font-[family-name:var(--font-oswald)] mt-10 inline-flex w-fit items-center gap-2 border-b-2 border-[var(--color-accent)] pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] transition-opacity hover:opacity-80"
              >
                Read article <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <span className="font-[family-name:var(--font-oswald)] mt-10 inline-flex w-fit items-center gap-2 pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                Coming Soon
              </span>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
