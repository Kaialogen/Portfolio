import { nowSection } from "../content/site";

export default function NowSection() {
  return (
    <section className="rounded-xl border border-neutral-800 p-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl text-WhiteChalk">Now</h2>
        <span className="text-xs text-neutral-400">Updated {nowSection.updatedAt}</span>
      </div>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
        {nowSection.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
