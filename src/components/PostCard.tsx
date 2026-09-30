import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/content/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      <Link href={`/blog/${post.slug}`} className="post-card-link">
        <div className="post-card-media">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
          <span
            className="post-card-tag"
            style={{ backgroundColor: tagColor(post.category) }}
          >
            {post.categoryLabel}
          </span>
          {post.archived ? <span className="archive-pill">Archive</span> : null}
        </div>
        <div className="post-card-body">
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
      </Link>
    </article>
  );
}

export function FeaturedCard({ post }: { post: Post }) {
  return (
    <article className="featured-card">
      <Link href={`/blog/${post.slug}`} className="featured-card-link">
        <div className="featured-media">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="featured-body">
          <span className="eyebrow">{post.categoryLabel}</span>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function tagColor(category: Post["category"]) {
  const map: Record<Post["category"], string> = {
    events: "#2f6b5a",
    "food-and-drink": "#c46b2d",
    "local-business": "#3d5a80",
    school: "#3f8f4c",
    community: "#4a6fa5",
    recreation: "#5a7d4a",
    random: "#7a5c8a",
  };
  return map[category];
}
