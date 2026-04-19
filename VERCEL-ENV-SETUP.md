# Setting Up Environment Variables in Vercel

## ⚠️ Important: You Must Add Environment Variables

The build error you encountered was because environment variables weren't set in Vercel. Here's how to fix it:

---

## 🔧 Step-by-Step Guide

### Step 1: Get Your Supabase Anon Key

1. Go to https://app.supabase.com
2. Select your project: **jyobsibvopamncibepsz**
3. Click **Settings** (gear icon) in the sidebar
4. Click **API** in the left menu
5. Find **Project API keys** section
6. Copy the **anon public** key (long JWT token starting with `eyJ...`)

**Example format:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5b2JzaWJ2b3BhbW5jaWJlcHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1NTU5NzcsImV4cCI6MjA1MDEzMTk3N30.YOUR_SECRET_HERE
```

---

### Step 2: Add Environment Variables in Vercel

#### Option A: During Initial Deployment

When you click "Deploy" in Vercel:

1. Look for **Environment Variables** section
2. Click "Add" for each variable
3. Add these three variables:

```bash
# Variable 1
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://jyobsibvopamncibepsz.supabase.co

# Variable 2
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: [paste your actual anon key from Step 1]

# Variable 3
Name: RESEND_API_KEY
Value: re_hvywzqkB_MzYjwygpzLetQc2aAPmaDYqv
```

4. Click "Deploy"

#### Option B: After Deployment (If You Already Deployed)

1. Go to your project in Vercel dashboard
2. Click **Settings** tab
3. Click **Environment Variables** in sidebar
4. Click "Add New" button
5. Add each variable one by one:

**Variable 1:**
- Key: `NEXT_PUBLIC_SUPABASE_URL`
- Value: `https://jyobsibvopamncibepsz.supabase.co`
- Environment: Production, Preview, Development (check all)
- Click "Save"

**Variable 2:**
- Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Value: [paste your actual anon key]
- Environment: Production, Preview, Development (check all)
- Click "Save"

**Variable 3:**
- Key: `RESEND_API_KEY`
- Value: `re_hvywzqkB_MzYjwygpzLetQc2aAPmaDYqv`
- Environment: Production, Preview, Development (check all)
- Click "Save"

6. After adding all variables, click **Deployments** tab
7. Click the three dots (...) on the latest deployment
8. Click **Redeploy**
9. Check "Use existing Build Cache"
10. Click "Redeploy"

---

## ✅ Verification

After redeployment:

1. Visit your Vercel URL
2. Go to `/appointment` page
3. Fill and submit the form
4. Should work without errors!

---

## 🔍 How to Check if Variables are Set

### In Vercel Dashboard:

1. Go to your project
2. Settings → Environment Variables
3. You should see 3 variables listed:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `RESEND_API_KEY`

### In Deployment Logs:

1. Go to Deployments tab
2. Click on latest deployment
3. Check "Build Logs"
4. Look for: `- Environments: .env.local` (means env vars are loaded)

---

## 🚨 Common Mistakes

### ❌ Wrong: Using service_role key
```
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...service_role...
```
**Fix:** Use the **anon public** key, not service_role key!

### ❌ Wrong: Missing NEXT_PUBLIC_ prefix
```
SUPABASE_URL=https://...
```
**Fix:** Must start with `NEXT_PUBLIC_` for client-side access

### ❌ Wrong: Not checking all environments
Only checking "Production"

**Fix:** Check all three: Production, Preview, Development

### ❌ Wrong: Not redeploying after adding variables
Just adding variables without redeploying

**Fix:** Always redeploy after adding/changing environment variables

---

## 📋 Quick Copy-Paste Template

Copy this and fill in your actual anon key:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://jyobsibvopamncibepsz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.YOUR_ACTUAL_KEY_HERE
RESEND_API_KEY=re_hvywzqkB_MzYjwygpzLetQc2aAPmaDYqv
```

---

## 🔐 Security Notes

### Safe to Expose (NEXT_PUBLIC_):
- ✅ `NEXT_PUBLIC_SUPABASE_URL` - Public URL
- ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Public anon key (protected by RLS)

### Keep Secret:
- 🔒 `RESEND_API_KEY` - Never expose to client
- 🔒 Supabase `service_role` key - Never use in frontend

---

## 🆘 Still Getting Errors?

### Error: "supabaseUrl is required"
**Solution:** Make sure `NEXT_PUBLIC_SUPABASE_URL` is set in Vercel

### Error: "Invalid API key"
**Solution:** 
1. Get fresh anon key from Supabase dashboard
2. Make sure you copied the **anon public** key (not service_role)
3. Update in Vercel and redeploy

### Error: "Database not configured"
**Solution:**
1. Check all 3 environment variables are set
2. Redeploy the project
3. Check deployment logs for errors

### Build Still Failing?
1. Check Vercel build logs for specific error
2. Verify all environment variables are set
3. Try redeploying with "Clear Cache and Redeploy"

---

## 📞 Need Help?

### Check These:
1. Supabase Dashboard → Settings → API (get correct keys)
2. Vercel Dashboard → Settings → Environment Variables (verify all set)
3. Vercel Deployment Logs (check for errors)

### Useful Links:
- Vercel Env Vars: https://vercel.com/docs/concepts/projects/environment-variables
- Supabase Keys: https://supabase.com/docs/guides/api/api-keys

---

## ✅ Success Checklist

After following this guide:

- [ ] Got Supabase anon key from dashboard
- [ ] Added all 3 environment variables in Vercel
- [ ] Checked all environments (Production, Preview, Development)
- [ ] Redeployed the project
- [ ] Build succeeded
- [ ] Tested appointment booking on live site
- [ ] Verified data saved in Supabase
- [ ] Verified email sent

---

**Once environment variables are set, your deployment will succeed!** 🚀
