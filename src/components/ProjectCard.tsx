import Link from "next/link";
import type { Project } from "../content/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-neutral-800 bg-white/2 p-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg text-WhiteChalk">{project.title}</h3>
        <span className="text-xs uppercase tracking-wide text-neutral-400">{project.status}</span>
      </div>
      <p className="mt-2 text-sm text-neutral-300">{project.summary}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-full border border-neutral-700 px-2 py-1 text-xs text-neutral-300"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-4 text-sm">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-slate-300"
        >
          Source
        </a>
        <Link href={`/projects/${project.slug}`} className="hover:underline hover:text-slate-300">
          Case Study
        </Link>
      </div>
    </article>
  );
}
