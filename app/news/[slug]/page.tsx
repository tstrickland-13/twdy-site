import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type ReactNode } from "react";
import { ARTICLES, getArticle } from "@/lib/articles";
import { SectionDivider } from "@/components/section-divider";
import { BackToTop } from "@/components/back-to-top";

// Renders inline markdown-style links — [label](https://url) — inside body
// text as accent-colored anchors. Plain text passes through unchanged.
function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={key++}
        href={match[2]}
        target="_blank"
        rel="noreferrer"
        className="text-[var(--color-accent)] underline-offset-4 hover:underline"
      >
        {match[1]}
      </a>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

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
          <div className="mx-auto w-full max-w-4xl">
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
            className="font-[family-name:var(--font-oswald)] mt-7 font-bold uppercase leading-[1.02] tracking-tight text-white"
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
        </div>
      </header>

      <div className="bg-black">
        <div className="container">
          <div className="relative mx-auto aspect-[21/9] w-full max-w-4xl overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <Image
              src={article.cover.src}
              alt={article.cover.alt}
              fill
              priority
              sizes="100vw"
              quality={95}
              className="object-cover"
              style={{ objectPosition: article.cover.position ?? "center" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/0" />
          </div>
        </div>
      </div>

      <SectionDivider />

      <div className="border-b border-[var(--color-border)] bg-black pb-32 pt-2 md:pb-44 md:pt-4">
        <div className="container">
          <div className="mx-auto w-full max-w-4xl">
            {article.body.map((block, i) =>
              block.type === "heading" ? (
                <h2
                  key={i}
                  className="font-[family-name:var(--font-oswald)] text-left font-bold uppercase tracking-tight text-white [&:not(:first-child)]:mt-16"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
                >
                  {block.text}
                </h2>
              ) : (
                <p
                  key={i}
                  className="mt-7 text-left text-lg leading-[1.85] text-[var(--color-text-secondary)] md:text-xl"
                >
                  {renderInline(block.text)}
                </p>
              )
            )}

            {article.source && (
              <p className="mt-14 border-t border-[var(--color-border)] pt-6 text-left text-sm text-[var(--color-text-muted)]">
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

            <BackToTop />
          </div>
        </div>
      </div>
    </article>
  );
}
