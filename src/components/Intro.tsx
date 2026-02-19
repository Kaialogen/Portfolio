import Link from "next/link";

export default function Intro() {
  return (
    <div className="flex flex-col gap-4 text-center">
      <h2 className="text-2xl text-WhiteChalk">
        Backend & Systems Engineer - Fintech and Trading Systems
      </h2>
      <p className="text-sm text-neutral-300">
        Hi, I’m Kai, a backend-focused software engineer with a cybersecurity
        background, working on data-intensive and performance-aware systems in
        fintech and trading contexts.
      </p>
      <p className="text-sm text-neutral-300">
        My core experience is in <strong>Python and Go</strong>, building
        backend services, APIs, and infrastructure where correctness,
        scalability, and latency trade-offs matter. I enjoy working close to
        system boundaries; understanding how data flows, how failures happen,
        and how systems behave under real-world load.
      </p>
      <p className="text-sm text-neutral-300">
        I’m especially interested in{" "}
        <strong>
          trading systems, market data processing, and real-time software
        </strong>
        , and I’m gradually building toward quantitative development roles.
      </p>
      <p className="text-sm text-neutral-300">Based in the UK</p>
      <div className="mt-1 flex justify-center gap-3">
        <Link
          href="/projects"
          className="rounded-md border border-neutral-700 px-3 py-2 text-sm hover:border-neutral-500"
        >
          View Projects
        </Link>
        <a
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-neutral-700 px-3 py-2 text-sm hover:border-neutral-500"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
