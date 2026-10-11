# Deployment guide

This portfolio is a client-only Vite + React site. It can be deployed to either GitHub Pages or Vercel without a server.

## Before deploying

```bash
pnpm install
pnpm check
pnpm build:static
pnpm preview
```

The static output is generated in `dist/public`.

## GitHub Pages

1. Push this project to a GitHub repository.
2. Keep the default branch named `main` (or change the workflow trigger in `.github/workflows/deploy-pages.yml`).
3. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Push to `main`, or run **Deploy portfolio to GitHub Pages** manually from the Actions tab.

The workflow automatically sets the correct Vite base path for both project pages (`username.github.io/repository-name`) and user pages (`username.github.io`).

### Custom domain on GitHub Pages

After choosing a domain, add a `CNAME` file containing the hostname (for example, `vitorojas.dev`) to `client/public/`, then configure the domain's DNS records as GitHub instructs. Because `client/public/` is copied into the static build, the file will be published automatically.

## Vercel

1. Import the repository into Vercel.
2. Vercel will use `vercel.json` automatically.
3. The build command is `pnpm build:static` and the output directory is `dist/public`.
4. Add your custom domain in **Project Settings → Domains**.

No environment variables are required for Vercel. The default base path is `/`.

## Notes

- `pnpm build` remains available for the existing WebDev/Node preview workflow.
- `pnpm build:static` is the deployment-safe command for GitHub Pages and Vercel.
- Gallery images use public CDN URLs, so they remain available when the site is deployed outside WebDev.
