import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración para GitHub Pages
// - build.outDir = 'docs' para publicar desde "main" -> "/docs" en GitHub Pages
// - `base` en producción debe coincidir con el nombre del repositorio: `/<repo-name>/`
//   aquí usamos una regla simple: cuando NODE_ENV === 'production' usamos el base con el
//   nombre del repo; en desarrollo mantenemos '/'.
// Si prefieres rutas relativas, puedes usar `base: './'`.
// GitHub repo slug (used to form the production `base` path). Update to match the
// actual repository: https://github.com/suescun2025/React-I
const repoName = 'React-I'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})
