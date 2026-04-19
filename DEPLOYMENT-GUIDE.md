# Deploying Rathi Hospital to Vercel

## 🚀 Quick Deployment (5 Minutes)

### Prerequisites
- GitHub account
- Vercel account (free)
- Your Supabase credentials
- Your Resend API key

---

## Step 1: Prepare Your Code

### 1.1 Create `.gitignore` (if not exists)
Make sure these are in your `.gitignore`:

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

### 1.2 Verify `package.json` has build script

Your `package.json` should have:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## Step 2: Push to GitHub

### 2.1 Initialize Git (if not done)
```bash
git init
git add .
git commit -m "Initial commit - Rathi Hospital website"
```

### 2.2 Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `rathi-hospital-website`
3. Description: "Modern hospital website for Rathi Hospital, Aligarh"
4. Choose **Private** or **Public**
5. Click "Create repository"

### 2.3 Push to GitHub
```bash
# Replace with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/rathi-hospital-website.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### 3.1 Sign Up / Login to Vercel

1. Go to https://vercel.com
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### 3.2 Import Your Project

1. Click "Add New..." → "Project"
2. Find `rathi-hospital-website` in the list
3. Click "Import"

### 3.3 Configure Project

**Framework Preset:** Next.js (auto-detected)

**Root Directory:** `./` (leave as is)

**Build Command:** `next build` (auto-filled)

**Output Directory:** `.next` (auto-filled)

**Install Command:** `npm install` (auto-filled)

### 3.4 Add Environment Variables

Click "Environment Variables" and add these:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://jyobsibvopamncibepsz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key_here

# Resend API Key
RESEND_API_KEY=re_hvywzqkB_MzYjwygpzLetQc2aAPmaDYqv
```

**Important:** 
- Get your actual `NEXT_PUBLIC_SUPABASE_ANON_KEY` from Supabase dashboard
- Go to: Project Settings → API → anon public key
- It should be a long JWT token starting with `eyJ...`

### 3.5 Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. You'll see "Congratulations!" when done

---

## Step 4: Get Your Live URL

After deployment:
1. You'll get a URL like: `https://rathi-hospital-website.vercel.app`
2. Click "Visit" to see your live site
3. Test all features:
   - ✅ Book an appointment
   - ✅ Send contact message
   - ✅ Check if emails are sent

---

## Step 5: Add Custom Domain (Optional)

### 5.1 Buy a Domain
- Namecheap, GoDaddy, or any domain registrar
- Suggested: `rathihospital.com` or `rathihospitalaligarh.com`

### 5.2 Add Domain in Vercel

1. Go to your project in Vercel
2. Click "Settings" → "Domains"
3. Enter your domain name
4. Click "Add"

### 5.3 Configure DNS

Vercel will show you DNS records to add:

**For root domain (rathihospital.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Add these in your domain registrar's DNS settings.

### 5.4 Wait for DNS Propagation
- Usually takes 5-30 minutes
- Can take up to 48 hours
- Vercel will auto-issue SSL certificate

---

## Step 6: Verify Production Setup

### 6.1 Test Appointment Booking
1. Go to your live URL
2. Navigate to `/appointment`
3. Fill and submit the form
4. Check if email is received

### 6.2 Test Contact Form
1. Navigate to `/contact`
2. Fill and submit
3. Check if email is received

### 6.3 Check Supabase Data
1. Go to Supabase dashboard
2. Table Editor → `appointments`
3. Verify data is being saved

### 6.4 Check Email Delivery
1. Go to https://resend.com/emails
2. Verify emails are being sent
3. Check delivery status

---

## Step 7: Configure Production Email

### 7.1 Add Your Domain to Resend (Recommended)

1. Go to https://resend.com/domains
2. Click "Add Domain"
3. Enter your domain (e.g., `rathihospital.com`)
4. Add DNS records shown by Resend
5. Wait for verification

### 7.2 Update Email "From" Address

In `lib/email.ts`, change:
```typescript
from: 'Rathi Hospital <noreply@rathihospital.com>'
```

### 7.3 Redeploy
```bash
git add .
git commit -m "Update email from address"
git push
```

Vercel will auto-deploy the changes.

---

## 🔧 Troubleshooting

### Build Failed?

**Check Build Logs:**
1. Click on the failed deployment
2. Read the error message
3. Common issues:
   - TypeScript errors
   - Missing dependencies
   - Environment variables not set

**Fix and Redeploy:**
```bash
# Fix the issue locally
npm run build  # Test build locally
git add .
git commit -m "Fix build issue"
git push
```

### Environment Variables Not Working?

1. Go to Vercel project → Settings → Environment Variables
2. Verify all variables are set
3. Click "Redeploy" to apply changes

### Emails Not Sending in Production?

1. Check Resend dashboard for errors
2. Verify `RESEND_API_KEY` is set in Vercel
3. Check if you hit rate limits (100/day on free plan)

### Database Not Working?

1. Verify Supabase URL and key in Vercel
2. Check Supabase RLS policies
3. Test connection from production URL

### 404 Errors?

1. Check if all pages are committed to Git
2. Verify `app/` directory structure
3. Clear Vercel cache and redeploy

---

## 📊 Monitoring Your Site

### Vercel Analytics (Free)

1. Go to your project in Vercel
2. Click "Analytics"
3. See:
   - Page views
   - Unique visitors
   - Top pages
   - Performance metrics

### Vercel Logs

1. Click "Deployments"
2. Click on any deployment
3. Click "Functions" to see API logs
4. Debug errors in real-time

---

## 🔄 Updating Your Site

### Make Changes Locally
```bash
# Make your changes
npm run dev  # Test locally
```

### Deploy Updates
```bash
git add .
git commit -m "Description of changes"
git push
```

Vercel will automatically:
1. Detect the push
2. Build your site
3. Deploy to production
4. Update your live URL

---

## 🎯 Post-Deployment Checklist

- [ ] Site is live and accessible
- [ ] All pages load correctly
- [ ] Appointment booking works
- [ ] Contact form works
- [ ] Emails are being sent
- [ ] Data is saved to Supabase
- [ ] Mobile view works properly
- [ ] Images load correctly
- [ ] WhatsApp button works
- [ ] Google Maps loads
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (https://)

---

## 🚀 Performance Optimization

### Enable Vercel Speed Insights

1. Go to project → Settings → Speed Insights
2. Enable it (free)
3. Get real user performance data

### Enable Vercel Web Analytics

1. Go to project → Settings → Analytics
2. Enable it (free)
3. Track visitors without cookies

---

## 💰 Costs

### Free Tier Includes:
- ✅ Unlimited deployments
- ✅ Automatic HTTPS
- ✅ 100GB bandwidth/month
- ✅ Serverless functions
- ✅ Analytics
- ✅ Custom domains

### Paid Plans (if needed):
- **Pro**: $20/month - More bandwidth, team features
- **Enterprise**: Custom pricing

**For Rathi Hospital:** Free tier is sufficient for most use cases.

---

## 📞 Support

### Vercel Documentation
- https://vercel.com/docs

### Vercel Support
- https://vercel.com/support

### Common Issues
- Build errors: Check build logs
- Environment variables: Verify in settings
- Domain issues: Check DNS records
- Performance: Enable Speed Insights

---

## 🎉 You're Live!

Your Rathi Hospital website is now:
- ✅ Deployed to production
- ✅ Accessible worldwide
- ✅ Auto-scaling
- ✅ HTTPS enabled
- ✅ Fast and reliable

**Share your live URL:**
- With hospital staff
- On social media
- On Google My Business
- In marketing materials

---

## 📈 Next Steps

1. **SEO Optimization**
   - Submit sitemap to Google Search Console
   - Add meta descriptions
   - Optimize images

2. **Marketing**
   - Share on social media
   - Update Google My Business
   - Add to hospital materials

3. **Monitoring**
   - Check analytics weekly
   - Monitor email delivery
   - Review appointment bookings

4. **Enhancements**
   - Add more features
   - Improve based on feedback
   - Regular updates

---

**Congratulations! Your hospital website is now live! 🎊**
