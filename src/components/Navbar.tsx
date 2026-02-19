"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

type NavbarVariant = "cathedral" | "crypt" | "arc";

const NAVBAR_VARIANT: NavbarVariant = "cathedral";

const stylesByVariant: Record<
  NavbarVariant,
  {
    shell: string;
    brand: string;
    item: string;
    mobilePanel: string;
  }
> = {
  cathedral: {
    shell:
      "border border-neutral-700/80 bg-gradient-to-b from-[#12100f] to-[#0b0908] shadow-[0_10px_30px_rgba(0,0,0,0.45)]",
    brand: "text-WhiteChalk tracking-wide",
    item: "text-neutral-300 hover:text-[#f0e7df] hover:bg-[#221715] border border-transparent hover:border-[#4a2e2a]",
    mobilePanel: "border-t border-[#4a2e2a]/70 bg-[#0b0908]/95",
  },
  crypt: {
    shell:
      "border border-neutral-800 bg-[#0e0c0c]/90 backdrop-blur shadow-[0_10px_25px_rgba(0,0,0,0.4)]",
    brand: "text-neutral-100",
    item: "text-neutral-300 hover:text-white hover:bg-neutral-800 border border-transparent hover:border-neutral-700",
    mobilePanel: "border-t border-neutral-800 bg-[#0e0c0c]",
  },
  arc: {
    shell:
      "border border-[#3f2a28] bg-[linear-gradient(135deg,#120f0f,#171111_40%,#0d0a0a)] shadow-[0_12px_28px_rgba(0,0,0,0.45)]",
    brand: "text-[#f6f0ea]",
    item: "text-[#d4ccc4] hover:text-white hover:bg-[#2a1b18] border border-transparent hover:border-[#5d3933]",
    mobilePanel: "border-t border-[#5d3933]/70 bg-[#120d0c]/95",
  },
};

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeStyles = stylesByVariant[NAVBAR_VARIANT];

  return (
    <header className="w-full px-4 pt-5 md:pt-6">
      <nav
        className={`relative mx-auto w-full max-w-[1100px] rounded-2xl px-4 py-3 md:px-6 md:py-4 ${activeStyles.shell}`}
      >
        <div className="flex items-center justify-between">
          <Link
            className={`text-xl md:text-2xl font-semibold ${activeStyles.brand}`}
            href="/"
          >
            Kai Constantine
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm transition ${activeStyles.item}`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-lg px-3 py-2 text-sm transition ${activeStyles.item}`}
            >
              CV
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
            className={`md:hidden rounded-lg p-2 transition ${activeStyles.item}`}
          >
            {menuOpen ? (
              <FaTimes className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div
            className={`mt-3 rounded-xl px-3 py-3 md:hidden ${activeStyles.mobilePanel}`}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm transition ${activeStyles.item}`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-lg px-3 py-2 text-sm transition ${activeStyles.item}`}
              >
                CV
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
