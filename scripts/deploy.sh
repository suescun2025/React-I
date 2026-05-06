#!/usr/bin/env zsh
# Script de despliegue para GitHub Pages (macOS zsh)
# - Ejecuta build (genera docs/)
# - Muestra los cambios y pide confirmación antes de commitear y pushear

set -euo pipefail

echo "Ejecutando build..."
npm run build

echo
if [ ! -d "docs" ]; then
  echo "Error: no se generó la carpeta docs/. Abortando."
  exit 1
fi

echo "Archivos modificados desde el último commit (limpieza):"
# mostrar un diff limitado para que el usuario revise
git status --porcelain || true

echo
read -q "RESP?¿Deseas commitear y pushear docs/ a main? (y/n): "
echo
if [[ "$RESP" != "y" && "$RESP" != "Y" ]]; then
  echo "Despliegue cancelado por el usuario. La carpeta docs/ está lista para revisar."
  exit 0
fi

# Añadir solo la carpeta docs/ y vite.config.js en caso de que base haya cambiado
git add docs/ vite.config.js || true

echo "Introduce un mensaje de commit (o deja vacío para usar 'Deploy docs'):
"
read COMMIT_MSG
if [[ -z "$COMMIT_MSG" ]]; then
  COMMIT_MSG="Deploy docs"
fi

git commit -m "$COMMIT_MSG" || echo "No hay cambios para commitear"

echo "Pusheando a origin main..."

git push origin main

echo "Despliegue completado. Comprueba GitHub Pages en la URL: https://<usuario>.github.io/Ejercicios-React/"
