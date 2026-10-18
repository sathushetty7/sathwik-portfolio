# Sathwik — Personal Developer Portfolio

A creative agency-level, editorial developer portfolio built for **Sathwik**, a Computer Science student and software engineer focusing on high-performance web systems, distributed architectures, and AI applications.

---

## 🎨 Design Philosophy & Tokens

Inspired by modern editorial typography, Swiss design grids, and architectural systems:

- **Background (`--background`)**: `#DCE3F0` (Pale Blue-Grey)
- **Foreground (`--foreground`)**: `#171717` (Deep Editorial Black)
- **Primary Accent (`--accent`)**: `#7000FF` (Electric Purple)
- **Muted Text (`--muted`)**: `#696D77` (Slate Grey)
- **Structural Lines (`--line`)**: `#B9C3D4` (Architectural Grid Line)
- **Surface Cards (`--surface`)**: `#EDF0F5` (Soft Elevation)
- **Inset Details (`--surface-soft`)**: `#E6E8ED` (Layered Inset)

---

## 📁 Project Architecture

```
sathwik-portfolio/
├── public/
│   ├── images/
│   │   ├── sathwik-portrait.png         # Optional personal portrait photo
│   │   └── projects/
│   │       ├── coastal-kits.png         # Project screenshot
│   │       ├── astroview.png            # Project screenshot
│   │       └── datapulse.png            # Project screenshot
│   ├── icons/
│   │   └── favicon.ico
│   └── resume.pdf                       # (Optional) Resume PDF
├── src/
│   ├── app/
│   │   ├── globals.css                  # Single source of truth design tokens & grids
│   │   ├── layout.tsx                   # Root metadata, SEO & font setup
│   │   ├── not-found.tsx                # Editorial 404 handler
│   │   └── page.tsx                     # Main portfolio page connecting components
│   ├── components/
│   │   ├── Navbar.tsx                   # Floating glassmorphic navbar with active section observer
│   │   ├── Hero.tsx                     # Oversized editorial typography, faded watermark & portrait card
│   │   ├── Projects.tsx                 # Project stack with interactive visual fallbacks
│   │   ├── About.tsx                    # Background, engineering pillars & academic credentials
│   │   ├── Skills.tsx                   # Categorized technical matrix with interactive filtering
│   │   └── Contact.tsx                  # Direct dispatch form, email copy & socials
│   ├── data/
│   │   ├── projects.ts                  # Project data & metadata
│   │   └── skills.ts                    # Structured skills categorization
│   └── lib/
│       └── utils.ts                     # Helper utilities (cn, formatting)
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── eslint.config.mjs
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build

```bash
npm run build
npm start
```

---

## 🖼️ Adding Custom Media

- Drop your portrait image at `public/images/sathwik-portrait.png`.
- Drop project screenshots inside `public/images/projects/`:
  - `coastal-kits.png`
  - `astroview.png`
  - `datapulse.png`

*Note: If an image is not provided, the website automatically displays a high-fidelity bespoke technical canvas card with zero broken layouts.*
