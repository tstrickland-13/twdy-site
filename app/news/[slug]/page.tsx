import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return ARTICLES.filter((a) => a.body?.length).map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article | TWDY Agency" };
  return {
    title: `${article.title} | TWDY Agency`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article || !article.body?.length) {
    notFound();
  }

  return (
    <article>
      <header className="bg-black pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="container">
          <Link
            href="/news"
            className="font-[family-name:var(--font-oswald)] inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
          >
            <span aria-hidden="true">←</span> Back to News
          </Link>

          <p className="font-[family-name:var(--font-oswald)] mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] md:mt-14">
            {article.date}
          </p>
          <h1
            className="font-[family-name:var(--font-oswald)] mt-7 max-w-4xl font-bold uppercase leading-[1.02] tracking-tight text-white"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
          >
            {article.title}
          </h1>

          <dl className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm md:mt-12">
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
        </div>
      </header>

      <div className="bg-black pb-8 md:pb-12">
        <div className="container">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <Image
              src={article.cover.src}
              alt={article.cover.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              quality={95}
              className="object-cover"
              style={{ objectPosition: article.cover.position ?? "center" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/0" />
          </div>
        </div>
      </div>

      <div className="border-b border-[var(--color-border)] bg-black py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {article.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg leading-[1.95] text-[var(--color-text-secondary)] [&:not(:first-child)]:mt-9 md:text-xl"
                style={{ textIndent: "2.5rem" }}
              >
                {paragraph}
              </p>
            ))}

            {article.source && (
              <p className="mt-14 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-text-muted)]">
                Originally published on{" "}
                <a
                  href={article.source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-accent)] underline-offset-4 hover:underline"
                >
                  {article.source.label}
                </a>
                .
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
