# 🌐 Deploy Your Portfolio to GitHub Pages (FREE!)

GitHub Pages is the perfect free hosting solution for your portfolio. Here's exactly how to set it up:

## 🚀 Method 1: Automated Deployment (Recommended)

### Step 1: Update package.json

Add these lines to your `package.json`:

```json
{
  "name": "rodney-portfolio-2025",
  "version": "0.1.0",
  "homepage": "https://rodneygitonga.github.io/rodney-portfolio-2025",
  "private": true,
  "dependencies": {
    // ... your existing dependencies
  },
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "devDependencies": {
    // ... your existing devDependencies
    "gh-pages": "^6.1.1"
  }
}
```

### Step 2: Install gh-pages package

```bash
npm install --save-dev gh-pages
```

### Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

That's it! Your portfolio will be live at:
**https://rodneygitonga.github.io/rodney-portfolio-2025**

## 🔧 Method 2: Manual Deployment

### Step 1: Build your project

```bash
npm run build
```

### Step 2: Create gh-pages branch

```bash
git checkout --orphan gh-pages
git --orphan gh-pages
git rm -rf .
```

### Step 3: Copy build files

```bash
cp -r build/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

### Step 4: Switch back to main branch

```bash
git checkout main
```

## ⚙️ GitHub Repository Settings

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select:
   - **Deploy from a branch**
   - **Branch: gh-pages**
   - **Folder: / (root)**
5. Click **Save**

### Step 2: Custom Domain (Optional)

If you have a custom domain:
1. In Pages settings, add your domain in **Custom domain**
2. Create a CNAME file in your repository root:
```
your-domain.com
```

## 🔄 Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

## 📱 Complete Setup Workflow

### 1. Complete File Structure for GitHub Pages:

```
rodney-portfolio-2025/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── craco.config.js
└── README.md
```

### 2. Updated package.json for GitHub Pages:

```json
{
  "name": "rodney-portfolio-2025",
  "version": "1.0.0",
  "homepage": "https://rodneygitonga.github.io/rodney-portfolio-2025",
  "description": "Modern portfolio website with Three.js and React",
  "private": true,
  "dependencies": {
    "@react-three/drei": "^10.4.1",
    "@react-three/fiber": "^9.1.4",
    "framer-motion": "^12.20.2",
    "lucide-react": "^0.525.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-intersection-observer": "^9.16.0",
    "react-scripts": "5.0.1",
    "three": "^0.178.0"
  },
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "devDependencies": {
    "@craco/craco": "^7.1.0",
    "autoprefixer": "^10.4.20",
    "gh-pages": "^6.1.1",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

## 🎯 SEO & Performance for GitHub Pages

### Add to public/index.html:

```html
<!-- Canonical URL -->
<link rel="canonical" href="https://rodneygitonga.github.io/rodney-portfolio-2025/" />

<!-- Performance optimizations -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="https://images.unsplash.com">

<!-- Social media preview -->
<meta property="og:url" content="https://rodneygitonga.github.io/rodney-portfolio-2025/" />
<meta property="twitter:url" content="https://rodneygitonga.github.io/rodney-portfolio-2025/" />
```

## 🔍 Important Notes for GitHub Pages

### 1. **URL Structure:**
Your site will be available at:
`https://YOUR_USERNAME.github.io/REPOSITORY_NAME`

For you: `https://rodneygitonga.github.io/rodney-portfolio-2025`

### 2. **Build Optimization:**
GitHub Pages serves static files, so your React app gets built into optimized HTML, CSS, and JavaScript.

### 3. **Custom 404 Page:**
Create `public/404.html` for custom error pages:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Page Not Found</title>
    <meta http-equiv="refresh" content="0; url=https://rodneygitonga.github.io/rodney-portfolio-2025/">
</head>
<body>
    <p>Redirecting to portfolio...</p>
</body>
</html>
```

## 🚀 Deploy Commands Summary

```bash
# One-time setup
npm install --save-dev gh-pages

# Every time you want to deploy updates
npm run deploy

# Or if using GitHub Actions, just push to main:
git add .
git commit -m "Update portfolio"
git push origin main
```

## ✅ Benefits of GitHub Pages

- ✅ **100% Free** hosting
- ✅ **Automatic HTTPS** 
- ✅ **Custom domains** supported
- ✅ **Fast CDN** delivery
- ✅ **Easy updates** with git push
- ✅ **Professional** github.io subdomain
- ✅ **No server maintenance** required

## 🎉 Final Result

Your portfolio will be live at:
**https://rodneygitonga.github.io/rodney-portfolio-2025**

Perfect for:
- 📄 Resume applications
- 💼 Job interviews
- 🤝 Client presentations
- 🔗 Social media profiles
- 📧 Email signatures

This GitHub Pages URL looks professional and shows you understand modern web development practices!