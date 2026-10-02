import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { getPost, posts } from "@/content/posts";
import { blogPostingJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post" };

  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      modifiedTime: post.date,
      section: post.categoryLabel,
      tags: [post.categoryLabel, "San Cerro", "San Carlos", "Del Cerro"],
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={blogPostingJsonLd(post)} />
      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow" style={{ color: "#c9dce6" }}>
            {post.categoryLabel}
            {post.archived ? " · Archive" : ""}
          </span>
          <h1>{post.title}</h1>
          <p>
            {new Date(post.date + "T12:00:00").toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="shell article-layout">
          <div className="article-hero-image">
            <Image
              src={post.image}
              alt={`${post.title} — San Cerro`}
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 1120px"
              priority
            />
          </div>
          <article className="prose">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
            <p>
              <Link href="/">← Back home</Link>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
