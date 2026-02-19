import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "../../content/blog";

export const metadata: Metadata = {
  title: "Blog | Kai Constantine",
  description: "Writing on software engineering, systems, and learning.",
};

export default function BlogPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6 p-4 xl:p-6 auto-rows-min overflow-y-auto w-full max-w-[800px] xl:max-w-[960px] md:mx-auto">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-2xl text-center">Blog Posts</h2>
      </div>
      <div className="col-span-1 md:col-span-2">
        <p className="text-sm border-b-[1px] border-neutral-800 pb-3.5">
          My collection of blog posts.
        </p>
      </div>
      <div className="col-span-1 md:col-span-2">
        <ul className="space-y-3">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="hover:underline hover:text-slate-300 cursor-pointer text-sm"
              >
                {post.title}
              </Link>
              <p className="mt-1 text-xs text-neutral-400">
                {post.publishedAt} · {post.readTime}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
