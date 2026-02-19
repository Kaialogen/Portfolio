export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-i-learned-to-code",
    title: "How I Learned To Code",
    excerpt: "Lessons that shaped how I learned to build software over time.",
    publishedAt: "2026-01-06",
    readTime: "5 min read",
  },
];
