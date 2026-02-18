import { Link } from "react-router";

export default function BlogPostsSection() {
  return (
    <section>
      <h2 className="text-2xl text-WhiteChalk">Blog Posts</h2>
      <ul>
        <li>
          <Link
            to={"/blog/how-i-learned-to-code"}
            className="hover:underline hover:text-slate-300 cursor-pointer text-sm"
          >
            How I Learned To Code
          </Link>
        </li>
      </ul>
      <div className="my-4 text-center">
        <Link
          to={"/blog"}
          className="text-sm hover:underline text-neutral-300 hover:text-neutral-100"
        >
          More Posts
        </Link>
      </div>
    </section>
  );
}
