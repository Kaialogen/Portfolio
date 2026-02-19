import type { Metadata } from "next";
import "@fontsource/inter";
import "@fontsource/instrument-serif";
import "../index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kai Constantine",
    template: "%s | Kai Constantine",
  },
  description:
    "Backend and systems engineer focused on fintech and trading systems, with projects, writing, and experience.",
  openGraph: {
    title: "Kai Constantine",
    description:
      "Backend and systems engineer focused on fintech and trading systems.",
    url: siteUrl,
    siteName: "Kai Constantine",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kai Constantine",
    description: "Backend and systems engineer focused on fintech and trading systems.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kai Constantine",
    url: siteUrl,
    sameAs: [
      "https://github.com/Kaialogen",
      "https://www.linkedin.com/in/kai-constantine",
      "https://x.com/Kaialogen",
    ],
    jobTitle: "Backend & Systems Engineer",
  };

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-Obsidian text-relic">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Navbar />
        <main className="flex-1 flex justify-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
