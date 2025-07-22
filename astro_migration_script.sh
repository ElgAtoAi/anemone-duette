#!/bin/bash

# Create src directory structure
mkdir -p src/pages
mkdir -p src/components

# Move page directories to src/pages
mv about-koni src/pages/ 2>/dev/null || true
mv contact src/pages/ 2>/dev/null || true
mv gallery src/pages/ 2>/dev/null || true
mv flower-subscriptions src/pages/ 2>/dev/null || true
mv dallas-wedding-florist src/pages/ 2>/dev/null || true
mv koni-tips src/pages/ 2>/dev/null || true
mv hooks src/pages/ 2>/dev/null || true

# Move components to src/components
mv components/* src/components/ 2>/dev/null || true
rmdir components 2>/dev/null || true

# Delete Next.js specific files
find . -name "page.tsx" -delete
find . -name "layout.tsx" -delete
rm -f next.config.js
rm -f next-env.d.ts

# Remove build folders
rm -rf .next
rm -rf .vercel
rm -rf node_modules/.next

# Git commit
git add .
git commit -m "refactor: migrate structure to Astro format"