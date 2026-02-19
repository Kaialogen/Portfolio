export type Project = {
  slug: string;
  title: string;
  summary: string;
  repoUrl: string;
  liveUrl?: string;
  status: "live" | "wip";
  featured: boolean;
  tech: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "apple-music-cli",
    title: "Apple Music CLI",
    summary: "CLI for exporting and analyzing playlist/library data.",
    repoUrl: "https://github.com/Kaialogen/apple-music-cli",
    status: "live",
    featured: true,
    tech: ["Python", "CLI", "Data Processing"],
    highlights: [
      "Structured command-based interface for fast workflows",
      "Data export tooling for downstream analysis",
    ],
  },
  {
    slug: "enchiridion",
    title: "Enchiridion",
    summary: "2D dungeon crawler focused on gameplay systems and low-level control.",
    repoUrl: "https://github.com/Kaialogen/Enchiridion",
    status: "live",
    featured: true,
    tech: ["C", "Game Systems"],
    highlights: [
      "Core gameplay loop and combat mechanics",
      "Hands-on systems programming foundations",
    ],
  },
  {
    slug: "duskhollow-rpg",
    title: "DuskHollow",
    summary: "Text-based RPG with progression and branching interactions.",
    repoUrl: "https://github.com/Kaialogen/duskhollow_rpg",
    status: "live",
    featured: true,
    tech: ["Python", "Game Logic"],
    highlights: ["Narrative-driven progression", "Modular game state management"],
  },
];
