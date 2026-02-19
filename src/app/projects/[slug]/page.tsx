import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found | Kai Constantine" };
  }

  return {
    title: `${project.title} | Projects | Kai Constantine`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="w-full max-w-[800px] p-4">
      <Link href="/projects" className="text-sm text-neutral-400 hover:text-neutral-100">
        ← Back to projects
      </Link>
      <h1 className="mt-4 text-3xl text-WhiteChalk">{project.title}</h1>
      <p className="mt-2 text-sm text-neutral-300">{project.summary}</p>

      <section className="mt-6 rounded-xl border border-neutral-800 bg-white/2 p-4">
        <h2 className="text-xl text-WhiteChalk">Highlights</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="mt-4 rounded-xl border border-dashed border-neutral-700 p-4">
        <h2 className="text-xl text-WhiteChalk">Case Study Scaffold</h2>
        <p className="mt-2 text-sm text-neutral-300">
          Use this page to add architecture diagrams, key trade-offs, performance constraints, and
          lessons learned.
        </p>
      </section>
    </article>
  );
}
