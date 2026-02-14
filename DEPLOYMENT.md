# 🚀 Deployment Guide

Step-by-step instructions for deploying your anniversary app to the web!

## Before You Deploy

### Pre-Deployment Checklist:
- [ ] All photos added and optimized
- [ ] Love letter personalized
- [ ] Special dates updated in calendar
- [ ] Audio file added and tested
- [ ] Tested on desktop browser
- [ ] Tested on mobile device
- [ ] All pages load correctly
- [ ] No console errors (press F12 to check)

### Build Your App:
```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

---

## Option 1: Vercel (Recommended) ⚡

**Why Vercel:**
- ✅ Free for personal projects
- ✅ Automatic HTTPS
- ✅ Lightning fast CDN
- ✅ Easy custom domains
- ✅ Deploys in 2 minutes

### Method A: Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to your project
cd anniversary-app

# Deploy
vercel
```

**Follow the prompts:**
1. "Set up and deploy...?" → `Y`
2. "Which scope?" → Choose your account
3. "Link to existing project?" → `N`
4. "What's your project's name?" → `anniversary-app` (or any name)
5. "In which directory is your code?" → `./` (press Enter)
6. "Want to override settings?" → `N`

**That's it!** You'll get a URL like: `https://anniversary-app-xyz.vercel.app`

### Method B: Vercel GitHub Integration

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/anniversary-app.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Auto-Deploy:**
   - Every push to GitHub auto-deploys
   - Perfect for updates!

### Custom Domain on Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your domain
4. Follow DNS instructions
5. Domain active in 24-48 hours

---

## Option 2: Netlify 🌐

**Why Netlify:**
- ✅ Free tier generous
- ✅ Drag-and-drop deployment
- ✅ Form handling (if you add forms later)
- ✅ Great for static sites

### Method A: Drag and Drop (Easiest)

1. **Build your app:**
   ```bash
   npm run build
   ```

2. **Go to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Sign up (free)
   - Drag the `dist` folder to the deploy zone
   - Wait 30 seconds
   - Get your URL!

### Method B: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Method C: GitHub Integration

Similar to Vercel:
1. Push to GitHub
2. Connect repository in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Custom Domain on Netlify:
1. Go to "Domain settings"
2. Add custom domain
3. Follow DNS instructions
4. SSL auto-configures

---

## Option 3: GitHub Pages (Free) 📄

**Why GitHub Pages:**
- ✅ Completely free
- ✅ Direct from GitHub
- ✅ Good for public projects
- ✅ `username.github.io` subdomain

### Setup:

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these lines:
   ```json
   {
     "homepage": "https://yourusername.github.io/anniversary-app",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js:**
   Add base URL:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/anniversary-app/'  // Add this line
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable in GitHub:**
   - Go to repository settings
   - Scroll to "Pages"
   - Source: `gh-pages` branch
   - Save

Your site: `https://yourusername.github.io/anniversary-app`

---

## Option 4: Firebase Hosting 🔥

**Why Firebase:**
- ✅ Google infrastructure
- ✅ Great for scalability
- ✅ Free tier available
- ✅ Easy analytics integration

### Setup:

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize:**
   ```bash
   firebase init hosting
   ```
   
   Choose:
   - Create new project or use existing
   - Public directory: `dist`
   - Single-page app: `Yes`
   - Automatic builds: `No`

4. **Build and Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

Your site: `https://project-id.web.app`

---

## Option 5: Custom Server (Advanced) 🖥️

If you have your own server (VPS, shared hosting):

### Requirements:
- Node.js installed
- Web server (nginx, Apache)

### Steps:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload dist folder:**
   - Use FTP/SFTP
   - Upload to public_html or www directory

3. **Configure web server:**
   Point to the `dist` folder

4. **That's it!**
   Your site is live

---

## Deployment Comparison

| Platform | Speed | Free Tier | Custom Domain | Auto-Deploy | Difficulty |
|----------|-------|-----------|---------------|-------------|------------|
| **Vercel** | ⚡⚡⚡ | Generous | ✅ Free | ✅ Yes | ⭐ Easy |
| **Netlify** | ⚡⚡⚡ | Generous | ✅ Free | ✅ Yes | ⭐ Easy |
| **GitHub Pages** | ⚡⚡ | Free | ✅ Yes | ✅ Yes | ⭐⭐ Medium |
| **Firebase** | ⚡⚡⚡ | Limited | ✅ Free | ⚠️ Manual | ⭐⭐ Medium |
| **Custom** | Varies | N/A | ✅ Yes | ❌ No | ⭐⭐⭐ Hard |

**Our Recommendation:** Start with Vercel!

---

## Post-Deployment

### 1. Test Your Live Site:
- [ ] Visit the URL on desktop
- [ ] Visit on mobile
- [ ] Test all pages (Home, Calendar, Letter, Journey)
- [ ] Check images load
- [ ] Verify audio plays
- [ ] Test all interactions

### 2. Set Up Analytics (Optional):
Track visitors (if you're curious!):

**Google Analytics:**
```javascript
// Add to index.html <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Share the Link:
```
Hey love! I made something special for you 💕
[your-url-here]

Open it on your phone, make sure sound is on!
```

### 4. Make Updates:
If you need to change something after deploying:

**Vercel/Netlify (GitHub connected):**
```bash
git add .
git commit -m "Update letter text"
git push
```
Auto-deploys in 1-2 minutes!

**Vercel CLI:**
```bash
vercel --prod
```

**Netlify CLI:**
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## Troubleshooting

### "My site shows 404 errors on refresh"
**Solution:** Configure redirects

**Vercel - create `vercel.json`:**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Netlify - create `public/_redirects`:**
```
/*  /index.html  200
```

### "Images don't load on deployed site"
**Causes:**
- ❌ Images not in `public` folder
- ❌ Wrong file paths (check case sensitivity)
- ❌ Images not committed to Git

**Solution:**
1. Ensure images are in `public/assets/images/`
2. Use paths like `/assets/images/photo.jpg`
3. Rebuild and redeploy

### "Audio doesn't autoplay"
**This is normal!** Browsers block autoplay.
Users must interact (click "Begin Experience" button)

### "Site is slow"
**Solutions:**
- Optimize images (use TinyPNG)
- Convert to WebP format
- Reduce image sizes
- Use lazy loading

---

## Domain Setup (Custom URL)

Want `anniversary.yourdomain.com`?

### 1. Buy a Domain:
- Namecheap (~$10/year)
- Google Domains
- GoDaddy

### 2. Point to Your Host:

**For Vercel:**
1. Add domain in Vercel dashboard
2. Update DNS:
   - Type: CNAME
   - Name: www (or anniversary)
   - Value: cname.vercel-dns.com

**For Netlify:**
1. Add domain in Netlify
2. Update DNS:
   - Type: CNAME
   - Name: www (or anniversary)
   - Value: your-site.netlify.app

### 3. Wait:
- DNS propagation: 24-48 hours
- SSL certificate: Auto-configured

---

## Security & Privacy

### Public vs Private:

**Public Deployment:**
- Anyone with link can view
- Good for: Sharing with friends/family
- Consider: What photos are public

**Private Options:**
1. **Password Protection:**
   - Vercel: Use environment variables
   - Netlify: Enable password protection
   
2. **Unlisted Link:**
   - Don't share publicly
   - Only direct link works
   - No SEO indexing

3. **Local Hosting:**
   - Run on home server
   - Share via VPN
   - Most private option

### Protecting Personal Content:

```javascript
// Add password gate (simple method)
// In App.jsx, before routes:

const [authorized, setAuthorized] = useState(false);
const password = "YourSecretPassword";

if (!authorized) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <input 
        type="password"
        placeholder="Enter password"
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value === password) {
            setAuthorized(true);
          }
        }}
      />
    </div>
  );
}
```

---

## Final Checklist

Before sending the link:
- [ ] All content is personalized
- [ ] No placeholder text remains
- [ ] All images work
- [ ] Audio plays
- [ ] Tested on mobile
- [ ] Tested on different browsers
- [ ] Spelling/grammar checked
- [ ] Special dates are correct
- [ ] SSL certificate active (HTTPS)
- [ ] Site loads quickly

---

## Emergency Fixes

If something breaks after deployment:

### Quick Rollback (Vercel/Netlify):
Both platforms keep deployment history.
- Go to deployments
- Find last working version
- Click "Promote to Production"

### Edit Live (Temporary):
Use browser dev tools to test fixes before redeploying.

### Test Locally First:
Always run `npm run preview` before deploying updates.

---

## You're Ready! 🎉

Pick your platform, follow the steps, and deploy with confidence!

Remember: The first deployment might feel scary, but these platforms are designed to be beginner-friendly. You've got this! 💪

Good luck, and happy anniversary! 💕

---

**Quick Deploy Commands:**

```bash
# Vercel
vercel

# Netlify
netlify deploy --prod --dir=dist

# GitHub Pages
npm run deploy

# Firebase
firebase deploy
```

**That's all you need!** 🚀
