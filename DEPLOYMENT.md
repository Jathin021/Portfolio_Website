# Deployment Guide

This guide covers multiple deployment options for your Embedded & IoT Enthusiast Portfolio.

## Prerequisites

1. **Build the project locally first** to ensure everything works:
   ```bash
   npm install
   npm run build
   ```

2. **Test the production build**:
   ```bash
   npm run preview
   ```

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is the easiest option with automatic deployments from GitHub.

#### Steps:

1. **Push your code to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Click "Deploy"

3. **Your site will be live** at `https://your-project.vercel.app`

#### Automatic Deployments:
- Every push to `main` branch = automatic production deployment
- Every pull request = preview deployment

---

### Option 2: Netlify

Similar to Vercel, great for static sites.

#### Steps:

1. **Push code to GitHub** (same as Vercel step 1)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Configure:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

3. **Your site will be live** at `https://random-name.netlify.app`

#### Custom Domain:
- Go to Site settings → Domain management
- Add your custom domain

---

### Option 3: GitHub Pages

Free hosting directly from GitHub.

#### Steps:

1. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   Add these scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts**:
   Add base path for GitHub Pages:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Replace with your actual repo name
     // ... rest of config
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

6. **Your site will be live** at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

### Option 4: Cloudflare Pages

Fast and free hosting with Cloudflare's CDN.

#### Steps:

1. **Push code to GitHub** (same as Vercel step 1)

2. **Deploy to Cloudflare Pages**:
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to Pages
   - Click "Create a project"
   - Connect your GitHub account
   - Select your repository
   - Configure:
     - **Framework preset**: Vite
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
   - Click "Save and Deploy"

3. **Your site will be live** at `https://your-project.pages.dev`

---

### Option 5: Render

Simple deployment platform.

#### Steps:

1. **Push code to GitHub**

2. **Deploy to Render**:
   - Go to [render.com](https://render.com)
   - Sign up/Login with GitHub
   - Click "New +" → "Static Site"
   - Connect your repository
   - Configure:
     - **Name**: Your project name
     - **Build Command**: `npm run build`
     - **Publish Directory**: `dist`
   - Click "Create Static Site"

3. **Your site will be live** at `https://your-project.onrender.com`

---

## Environment Variables

If you need to add environment variables:

1. **Vercel/Netlify**: Add in dashboard → Settings → Environment Variables
2. **GitHub Pages**: Use `.env.production` file (not recommended for secrets)
3. **Create `.env.production`** for production-specific variables

## Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions

### For Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS as instructed

### For GitHub Pages:
1. Create `CNAME` file in `public/` folder:
   ```
   yourdomain.com
   ```
2. Configure DNS:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `YOUR_USERNAME.github.io`

## Post-Deployment Checklist

- [ ] Test all pages and navigation
- [ ] Verify all links work correctly
- [ ] Check mobile responsiveness
- [ ] Test form submissions (if any)
- [ ] Verify images load correctly
- [ ] Check console for errors
- [ ] Test on different browsers
- [ ] Verify SEO meta tags
- [ ] Test social media sharing previews

## Troubleshooting

### Build Fails:
- Check Node.js version (should be 18+)
- Run `npm install` again
- Check for TypeScript errors: `npm run build`
- Verify all imports are correct

### 404 Errors on Refresh:
- For Vercel/Netlify: This is handled automatically
- For GitHub Pages: Ensure `base` is set correctly in `vite.config.ts`

### Assets Not Loading:
- Check `base` path in `vite.config.ts`
- Ensure all assets are in `public/` folder
- Verify paths are relative, not absolute

### Routing Issues:
- Ensure React Router is configured for client-side routing
- Add redirect rules for SPA (Vercel/Netlify handle this automatically)

## Quick Deploy Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages (after setup)
npm run deploy
```

## Recommended: Vercel

**Why Vercel?**
- ✅ Zero configuration needed
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments
- ✅ Preview deployments for PRs
- ✅ Free tier is generous
- ✅ Custom domains included
- ✅ Analytics available

---

**Need Help?** Check the official docs:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
