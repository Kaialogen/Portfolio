# Portfolio Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/986df36f-094c-42bb-a9b2-e82e8e3ca227/deploy-status)](https://app.netlify.com/projects/glistening-capybara-6190ce/deploys)

Personal portfolio site built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16 (App Router, static export)
- React 19
- TypeScript
- Tailwind CSS v4
- Biome (format/lint)

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev`: start local dev server
- `npm run build`: production build
- `npm run start`: run production server
- `npm run format`: format with Biome
- `npm run lint`: lint with Biome

## Project Structure

```text
src/
  app/
    layout.tsx                      # global app shell (navbar/footer)
    page.tsx                        # home page
    blog/
      page.tsx                      # blog index
      how-i-learned-to-code/page.tsx
  components/                       # reusable UI sections
  assets/                           # local imported assets (e.g. profile image)
  types/                            # global/custom TypeScript declarations
  index.css                         # global styles + Tailwind theme tokens
public/
  CV.pdf                            # static file served at /CV.pdf
```

## Naming Conventions

- Route folders: `kebab-case`
- React components/files: `PascalCase`
- Static assets: `lowercase` file names
- Type declarations: `src/types/*.d.ts`

## Notes

- The project has been fully moved off React Router/Vite to Next.js App Router.
- `next.config.mjs` is configured with `output: "export"` for static output.
