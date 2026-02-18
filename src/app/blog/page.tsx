import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 auto-rows-min overflow-y-auto max-w-[800px] md:mx-auto w-full">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-2xl text-center">Blog Posts</h2>
      </div>
      <div className="col-span-1 md:col-span-2">
        <p className="text-sm border-b-[1px] border-neutral-800 pb-3.5">
          My collection of blog posts.
        </p>
      </div>
      <div className="col-span-1 md:col-span-2">
        <ul>
          <li>
            <Link
              href="/blog/how-i-learned-to-code"
              className="hover:underline hover:text-slate-300 cursor-pointer text-sm"
            >
              How I Learned To Code
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
