# GitHub Pages Deployment Guide

This repository contains a pre-configured GitHub Actions workflow in [deploy.yml](file:///.github-tmp/workflows/deploy.yml) that builds and deploys your Next.js application to GitHub Pages automatically whenever changes are pushed to the `main` branch.

---

## Step 1: Configure Your Repository on GitHub

Before pushing your code, you need to enable GitHub Actions as the deployment source for GitHub Pages:

1. Open your repository on GitHub.
2. Go to **Settings** (gear icon) in the top navigation bar.
3. Select **Pages** from the left sidebar (under the *Code and automation* section).
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** from the dropdown menu (instead of "Deploy from a branch").

---

## Step 2: Handle Subfolder Paths vs. Custom Domains

Depending on where your site will be hosted on GitHub Pages, you may need to adjust the paths in `next.config.ts`.

### Option A: Custom Domain (e.g., `https://www.grinxo.com`)
If you are mapping a custom domain to your GitHub Pages site, your default configuration in `next.config.ts` is already correct.
No changes are required.

### Option B: Repository URL (e.g., `https://<your-username>.github.io/grinxo-website-tmp/`)
If you are hosting the site under the default GitHub Pages URL (which includes the repository name as a subfolder), Next.js needs to know the subfolder path to load images and scripts correctly.

Open `next.config.ts` and update it as follows:

```typescript
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Replace 'grinxo-website-tmp' with your actual GitHub repository name
  basePath: isProd ? "/grinxo-website-tmp" : "", 
  assetPrefix: isProd ? "/grinxo-website-tmp/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

> [!WARNING]
> If you set `basePath`, make sure to update any absolute links (like `/assets/logo.png`) to load correctly. In React, Next.js `Image` components will automatically prepend the `basePath`, but raw HTML image/anchor tags might not.

---

## Step 3: Push Your Code to GitHub

Once your configuration is set, commit and push your changes to the `main` branch to trigger the deployment workflow:

```powershell
# Add all changes to git
git add .

# Commit your changes
git commit -m "chore: setup deployment configuration and guide"

# Push to your remote repository on GitHub
git push origin main
```

---

## Step 4: Monitor the Deployment

1. On your GitHub repository page, click the **Actions** tab.
2. You will see a workflow running named **Deploy to GitHub Pages**.
3. Once the workflow finishes successfully, it will display the live URL of your deployed site in the logs.
