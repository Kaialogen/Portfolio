import type { Metadata } from "next";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../content/projects";

export const metadata: Metadata = {
  title: "Projects | Kai Constantine",
  description: "Selected software projects and case-study scaffolds by Kai Constantine.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full max-w-[1000px] xl:max-w-[1200px] p-4 xl:p-6">
      <header className="mb-6 border-b border-neutral-800 pb-4">
        <h1 className="text-3xl text-WhiteChalk">Projects</h1>
        <p className="mt-2 text-sm text-neutral-300">
          A mix of shipped work and evolving experiments. Case studies are scaffolded for deeper
          write-ups over time.
        </p>
      </header>
      <section className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
