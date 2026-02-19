import Link from "next/link";
import { blogPosts } from "../content/blog";

export default function BlogPostsSection() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-2xl text-WhiteChalk">Blog Posts</h2>
        <Link href="/blog" className="text-sm text-neutral-300 hover:underline">
          More Posts
        </Link>
      </div>
      <ul className="mt-2 space-y-2">
        {blogPosts.slice(0, 3).map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="hover:underline hover:text-slate-300 cursor-pointer text-sm"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
