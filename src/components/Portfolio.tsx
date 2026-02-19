import Link from "next/link";
import { projects } from "../content/projects";

export default function Portfolio() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-2xl text-WhiteChalk">Portfolio</h2>
        <Link
          href="/projects"
          className="text-sm text-neutral-300 hover:underline"
        >
          View all
        </Link>
      </div>
      <ul className="mt-3 space-y-2">
        {featuredProjects.map((project) => (
          <li key={project.slug} className="text-sm">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:text-slate-300 hover:underline"
            >
              {project.title}
            </Link>
            <span className="text-neutral-400"> - {project.summary}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
