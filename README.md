# Dr. Graziano Raffaele - Sito Web Vetrina

Sito web professionale per la presentazione di servizi di fisioterapia ortopedica manipolativa (OMPT).

## Stack Tecnologico

- **React 19** - Framework UI
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Wouter** - Routing
- **TypeScript** - Type safety
- **Lucide React** - Icons

## Struttura Progetto

```
/
├── index.html              # Entry point HTML
├── package.json            # Dependencies
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # Tailwind config
├── postcss.config.js       # PostCSS config
├── src/
│   ├── main.tsx           # React entry point
│   ├── index.css          # Global styles
│   ├── App.tsx            # Root component
│   ├── components/
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Footer
│   └── pages/
│       ├── Home.tsx       # Homepage
│       ├── ChiSono.tsx    # About page
│       └── NotFound.tsx   # 404 page
└── public/
    └── images/           # Static images
```

## Installazione

```bash
pnpm install
```

## Sviluppo

```bash
pnpm dev
```

Accedi a `http://localhost:3000`

## Build

```bash
pnpm build
```

Output: `dist/`

## Deploy su Vercel

Il progetto è configurato per il deploy automatico su Vercel:

1. Connetti il repository GitHub a Vercel
2. Vercel rileva automaticamente Vite
3. Build command: `pnpm build`
4. Output directory: `dist`

Nessuna configurazione aggiuntiva necessaria.

## Caratteristiche

- ✅ Static Page Application (zero backend)
- ✅ Responsive design (mobile-first)
- ✅ Performance optimized
- ✅ SEO friendly
- ✅ Accessible (WCAG compliant)
- ✅ Fast load times

## Licenza

MIT
