import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/PostCard";
import {
  categoryMeta,
  getPostsByCategory,
  type Category,
} from "@/content/posts";

const aliases: Record<string, Category> = {
  events: "events",
  "local-business": "local-business",
  "food-and-drink": "food-and-drink",
  school: "school",
  community: "community",
  nature: "community",
  recreation: "recreation",
  relaxation: "recreation",
  random: "random",
  photography: "random",
  travel: "school",
};

export function generateStaticParams() {
  return Object.keys(aliases).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const key = aliases[slug];
    if (!key) return { title: "Category" };
    const meta = categoryMeta[key];
    return {
      title: meta.label,
      description: `${meta.description} San Carlos and Del Cerro neighborhood coverage from San Cerro.`,
      alternates: { canonical: meta.href },
    };
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const key = aliases[slug];
  if (!key) notFound();
  const meta = categoryMeta[key];
  const posts = getPostsByCategory(key);

  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow" style={{ color: "#c9dce6" }}>
            Category
          </span>
          <h1>{meta.label}</h1>
          <p>{meta.description}</p>
        </div>
      </section>
      <section className="section">
        <div className="shell post-grid">
          {posts.length ? (
            posts.map((post) => <PostCard key={post.slug} post={post} />)
          ) : (
            <p>No posts in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
