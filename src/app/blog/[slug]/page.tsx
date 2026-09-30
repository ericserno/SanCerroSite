import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/content/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getPost(slug);
    if (!post) return { title: "Post" };
    return { title: post.title, description: post.excerpt };
  });
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
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 1120px"
              priority
            />
          </div>
          <div className="prose">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
            <p>
              <Link href="/">← Back home</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
