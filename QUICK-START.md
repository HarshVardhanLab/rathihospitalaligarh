# Quick Start Guide - Rathi Hospital Backend

## 🚀 Get Started in 5 Minutes

### Step 1: Create Supabase Account (2 min)
1. Go to https://supabase.com
2. Sign up with GitHub or email
3. Click "New Project"
4. Name: **Rathi Hospital**
5. Choose region: **Mumbai** (closest to India)
6. Click "Create new project"

### Step 2: Create Database Tables (1 min)
1. In Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste this SQL:

```sql
-- Appointments table
CREATE TABLE appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  department TEXT NOT NULL,
  doctor TEXT,
  date DATE NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact messages table
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow public inserts
CREATE POLICY "Allow public inserts" ON appointments FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public inserts" ON contact_messages FOR INSERT WITH CHECK (true);
```

4. Click "Run" or press `Ctrl+Enter`

### Step 3: Get API Keys (1 min)
1. Go to **Project Settings** (gear icon)
2. Click **API** in sidebar
3. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

### Step 4: Configure Your Project (1 min)
1. Create `.env.local` file in your project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=paste_your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=paste_your_anon_key_here
```

2. Replace the values with what you copied in Step 3

### Step 5: Test It! (30 sec)
1. Restart your dev server:
```bash
npm run dev
```

2. Open http://localhost:3000/appointment
3. Fill out the form and submit
4. Go back to Supabase → **Table Editor** → `appointments`
5. You should see your test appointment! 🎉

## ✅ You're Done!

Your backend is now live and working. All appointment bookings and contact form submissions are being saved to Supabase.

## 📊 View Your Data

### See Appointments
1. Supabase Dashboard → **Table Editor**
2. Select `appointments` table
3. View all bookings

### See Contact Messages
1. Supabase Dashboard → **Table Editor**
2. Select `contact_messages` table
3. View all messages

## 🔔 Next Steps (Optional)

### Add Email Notifications
Want to get emails when someone books an appointment?
- See `BACKEND-IMPLEMENTATION.md` for email setup

### Create Admin Dashboard
Want to manage appointments from a dashboard?
- Coming soon in Phase 2

### Add WhatsApp Confirmations
Want to send WhatsApp confirmations?
- See `BACKEND-IMPLEMENTATION.md` for WhatsApp integration

## 🆘 Need Help?

### Error: "Failed to fetch"
- Make sure `.env.local` file exists
- Check that you copied the correct URL and key
- Restart your dev server: `npm run dev`

### Data not showing in Supabase
- Check browser console (F12) for errors
- Make sure you ran the SQL commands in Step 2
- Try submitting the form again

### Still stuck?
- Read `SUPABASE-SETUP.md` for detailed instructions
- Check Supabase docs: https://supabase.com/docs

## 🎯 What You Have Now

✅ Appointment booking system  
✅ Contact form system  
✅ Data stored in cloud database  
✅ Secure API endpoints  
✅ Production-ready backend  

All forms on your website now save data to Supabase automatically!
