# Deploy Frontend to Render

Quick guide to deploy your CreativeArt frontend to Render.

## 📋 Prerequisites

1. GitHub account with your code pushed
2. Render account (sign up at https://render.com)

## 🚀 Deployment Steps

### Step 1: Push Code to GitHub

If you haven't already:
```bash
cd /Users/admin/Desktop/Creative_art
git add .
git commit -m "Ready for deployment"
git push -u origin main
```

### Step 2: Deploy on Render

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com

2. **Create New Static Site**
   - Click "New +" button
   - Select "Static Site"

3. **Connect GitHub Repository**
   - Connect your GitHub account
   - Select repository: `chirag-290/Creativee_art`

4. **Configure Build Settings**
   - **Name**: `creativeart`
   - **Branch**: `main`
   - **Root Directory**: Leave empty (or blank)
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `frontend/dist`

5. **Deploy**
   - Click "Create Static Site"
   - Wait 2-3 minutes for build to complete

### Step 3: Your Site is Live! 🎉

Your site will be available at:
```
https://creativeart.onrender.com
```
(or similar URL provided by Render)

## 🔧 Optional: Custom Domain

1. Go to your site settings on Render
2. Click "Custom Domain"
3. Add your domain (e.g., `www.creativeart.com`)
4. Follow DNS configuration instructions

## 📝 Update Site

To update your website:
```bash
git add .
git commit -m "Update website"
git push origin main
```

Render will automatically rebuild and deploy! ✨

## ⚠️ Important Notes

- Frontend only (no backend/database needed for now)
- All forms and contact features will work as designed
- Payment modal shows instructions (manual PayPal process)
- Free tier may spin down after inactivity (cold starts)

## 🆘 Troubleshooting

**Build Failed?**
- Check build logs on Render dashboard
- Make sure all dependencies are in `frontend/package.json`

**Site Not Loading?**
- Verify `Publish Directory` is set to `frontend/dist`
- Check that build command is correct

**Need Help?**
- Render docs: https://render.com/docs/static-sites
- Check build logs for specific errors

---

Your CreativeArt website is now live and accessible worldwide! 🌍✨

