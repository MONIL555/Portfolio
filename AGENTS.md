# AGENTS.md — Monil Portfolio Rules

## Tech Stack
- Framework: React 18 + Vite
- Styling: TailwindCSS v3 + custom CSS
- 3D: Three.js + @threlte/core + @threlte/extras
- Animation: framer-motion, animejs, @theatre/core
- Icons: iconsax-react
- Fonts: Space Grotesk, Inter, JetBrains Mono (Google Fonts)

## Code Rules
- Use TypeScript where possible
- Prefer const over let, never use var
- Use arrow functions for all callbacks
- Files under 300 lines — split into smaller components if larger
- All animated elements must check prefers-reduced-motion
- All external links: target="_blank" rel="noopener noreferrer"

## Structure
- Components in /src/components/
- Animation logic in /src/animations/
- All portfolio data (name, projects, skills) in /src/data/portfolio.js
- Never hardcode personal details inside components

## Deployment
- Build command: vite build
- Output: dist/
- Deploy target: Vercel