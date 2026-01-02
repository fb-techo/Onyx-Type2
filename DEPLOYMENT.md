# Deployment Guide

This Next.js application is configured to deploy to GitHub Pages.

## Configuration

- **Base Path**: `/Onyx-Type2` (configured in `next.config.js`)
- **Build Output**: Static export to `out/` directory
- **Deployment**: Automated via GitHub Actions

## GitHub Pages Setup

1. Go to repository Settings → Pages
2. Source: Select "GitHub Actions"
3. The workflow will automatically build and deploy on push to `main` branch

## Manual Deployment

If you need to deploy manually:

```bash
npm install
npm run build
# The out/ directory contains the static files
# Upload the contents of out/ to your GitHub Pages branch
```

## Local Development

For local development without basePath:

```bash
npm run dev
```

The app will run on `http://localhost:3000`

## Production Build

The production build creates a static export optimized for GitHub Pages:

```bash
npm run build
```

Output will be in the `out/` directory.

