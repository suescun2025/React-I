# Copilot / AI agent instructions for this repo

Short, actionable guidance to make AI coding agents productive in this project.

Project summary
- Small React app scaffolded with Vite (React 19). Source lives in `src/`.
- Main entry: `src/main.jsx` mounts `<App />` into `#root` in `index.html`.
- UI components are under `src/components/`; exercises each live in `src/components/ejercicios/` (e.g., `Ejercicio1.jsx`).
- Build output is configured to `docs/` so GitHub Pages can serve the site from the `main` branch.

Why things are structured this way
- `outDir: 'docs'` in `vite.config.js` is used so the generated static site can be published by enabling GitHub Pages from the repository root ("/docs" folder). This is an explicit choice in this repo.
- `base` must match the repository URL base path when publishing (e.g., `/<repo-name>/`). The default `index.html` references assets with absolute paths (e.g., `/src/main.jsx`), so the `base` setting matters for production.

Key files to read first
- `vite.config.js` — build base and outDir. Adjust `base` when publishing under `https://<user>.github.io/<repo>/`.
- `index.html` — development entry (references `/src/main.jsx`). In `docs/index.html` you can see the production asset paths prefixed with the repo base.
- `src/main.jsx` and `src/App.jsx` — app bootstrapping and top-level component.
- `src/components/ejercicios/*` — example components and the project's primary UI pieces.
- `package.json` — scripts: `dev`, `build`, `preview`, `deploy` (runs `scripts/deploy.sh`).

Common tasks & exact commands
- Run dev server (local):

```bash
npm install
npm run dev
```

- Create production build for GitHub Pages (outputs to `docs/`):

```bash
# for a typical environment
NODE_ENV=production npm run build
```

- Preview the built site locally (serves `docs/`):

```bash
npx serve docs
# or use `npm run preview` which runs `vite preview` (may expect dist layout)
```

Deployment notes (GitHub Pages)
- Ensure `vite.config.js` `base` matches `/<repo-name>/`. Example repo name used in config: `Ejercicios-de-react-tarea-`.
- After building, verify `docs/index.html` references assets using the repository base (e.g., `/Ejercicios-de-react-tarea-/assets/...`).
- On GitHub repository settings -> Pages, set Source to `main` branch and folder `/docs`.

Common errors leading to a blank page on GH Pages
- Incorrect `base` in `vite.config.js` (assets 404) — check browser console Network tab for missing CSS/JS.
- `docs/index.html` references absolute paths that don't include the repo base.
- Not publishing the `docs/` folder or using the wrong branch/folder in GitHub Pages settings.

Project-specific patterns to follow
- Components are modular: prefer adding new component files under `src/components/` and styles under the same folder (e.g., `Ejercicio3.jsx` + `Ejercicio3.css`).
- Keep static assets referenced via import from JS/JSX (Vite will bundle) rather than hardcoding absolute `/assets/...` paths.
- The `docs/` folder is generated; do not manually edit built asset files except when diagnosing deployment issues.

If you modify build settings
- Update `vite.config.js` `base` and `build.outDir` together.
- Re-run `NODE_ENV=production npm run build` and inspect `docs/index.html` to confirm paths.

Examples from this codebase
- Dev index: `index.html` uses `<script type="module" src="/src/main.jsx"></script>` — this works in dev but will break on GH Pages unless `base` is set.
- Production index: `docs/index.html` includes `/Ejercicios-React/assets/index-C2OUeum7.js` — notice the repo slug prefix.

When making changes, run quick checks
- Build and open `docs/index.html` in a browser (use a simple static server) and check the console for 404s.
- If blank page: open DevTools Console to find runtime errors from missing React bundle or incorrect paths.

If anything in this file is unclear or you want me to expand examples (deploy script, CI workflow, or to auto-generate a `gh-pages` branch deploy), tell me which area and I will iterate.
