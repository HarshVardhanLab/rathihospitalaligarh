# 🚀 Quick Deployment Checklist

## Before Deployment

### ✅ Code Ready
- [ ] All features working locally
- [ ] No console errors
- [ ] Build succeeds: `npm run build`
- [ ] All tests pass (if any)

### ✅ Environment Variables Ready
Get these ready to paste in Vercel:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://jyobsibvopamncibepsz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key
RESEND_API_KEY=re_hvywzqkB_MzYjwygpzLetQc2aAPmaDYqv
```

**Get Supabase Anon Key:**
1. Go to https://app.supabase.com
2. Select your project
3. Settings → API → Copy "anon public" key

---

## Deployment Steps

### Step 1: Push to GitHub (5 min)

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Create GitHub repo at https://github.com/new
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/rathi-hospital.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel (3 min)

1. Go to https://vercel.com
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Add environment variables (paste from above)
5. Click "Deploy"
6. Wait 2-3 minutes

### Step 3: Test Live Site (2 min)

Visit your Vercel URL and test:
- [ ] Home page loads
- [ ] All pages accessible
- [ ] Book appointment works
- [ ] Contact form works
- [ ] Check email received
- [ ] Check Supabase data saved

---

## Quick Commands

### Test Build Locally
```bash
npm run build
npm start
```

### Update and Redeploy
```bash
git add .
git commit -m "Your update message"
git push
```
(Vercel auto-deploys on push)

### Check Logs
1. Vercel Dashboard → Your Project
2. Click "Deployments"
3. Click latest deployment
4. View "Build Logs" or "Function Logs"

---

## Common Issues & Fixes

### Build Failed
```bash
# Test locally first
npm run build

# Fix errors, then:
git add .
git commit -m "Fix build errors"
git push
```

### Environment Variables Not Working
1. Vercel Dashboard → Settings → Environment Variables
2. Add/update variables
3. Redeploy (click "Redeploy" button)

### Database Not Working
1. Check Supabase URL and key in Vercel
2. Verify RLS policies in Supabase
3. Check Supabase logs

---

## Your Live URLs

After deployment, you'll get:
- **Production**: `https://rathi-hospital-website.vercel.app`
- **Preview**: Auto-generated for each branch
- **Custom Domain**: Add in Vercel settings

---

## Post-Deployment

### Immediate
- [ ] Test all forms
- [ ] Verify emails sending
- [ ] Check mobile view
- [ ] Test on different browsers

### Within 24 Hours
- [ ] Monitor Vercel analytics
- [ ] Check Supabase usage
- [ ] Review Resend email logs
- [ ] Fix any issues

### Within 1 Week
- [ ] Add custom domain (optional)
- [ ] Submit to Google Search Console
- [ ] Share with stakeholders
- [ ] Gather feedback

---

## Need Help?

- **Deployment Guide**: See `DEPLOYMENT-GUIDE.md`
- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support

---

**Ready to deploy? Follow Step 1 above!** 🚀
