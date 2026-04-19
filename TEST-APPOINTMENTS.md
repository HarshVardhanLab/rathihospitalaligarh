# Testing Appointment System

## Step 1: Get Correct Supabase Keys

1. Go to your Supabase dashboard: https://app.supabase.com
2. Select your project: **jyobsibvopamncibepsz**
3. Click **Project Settings** (gear icon in sidebar)
4. Click **API** in the left menu
5. Copy these two values:
   - **Project URL**: Should be `https://jyobsibvopamncibepsz.supabase.co`
   - **anon public** key: A long JWT token starting with `eyJ...`

## Step 2: Update .env.local

Replace the `NEXT_PUBLIC_SUPABASE_ANON_KEY` in your `.env.local` file with the actual anon key from Step 1.

Your `.env.local` should look like:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://jyobsibvopamncibepsz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5b2JzaWJ2b3BhbW5jaWJlcHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1NTU5NzcsImV4cCI6MjA1MDEzMTk3N30.ACTUAL_SECRET_HERE
```

## Step 3: Create Database Tables

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy and paste this SQL:

```sql
-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  department TEXT NOT NULL,
  doctor TEXT,
  date DATE NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(date);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments(created_at DESC);

-- Enable Row Level Security
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public to insert appointments" ON appointments;
DROP POLICY IF EXISTS "Allow authenticated users to read appointments" ON appointments;

-- Create policy to allow anyone to insert appointments
CREATE POLICY "Allow public to insert appointments" ON appointments
  FOR INSERT WITH CHECK (true);

-- Create policy to allow anyone to read appointments (for testing)
-- In production, you should restrict this to authenticated users only
CREATE POLICY "Allow public to read appointments" ON appointments
  FOR SELECT USING (true);
```

4. Click **Run** or press `Ctrl+Enter`
5. You should see "Success. No rows returned"

## Step 4: Verify Table Creation

1. Go to **Table Editor** in Supabase
2. You should see `appointments` table in the list
3. Click on it to see the columns

## Step 5: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

**IMPORTANT:** You MUST restart the server after changing `.env.local`

## Step 6: Test Appointment Booking

### Method 1: Using the Website

1. Open http://localhost:3000/appointment
2. Fill out the form:
   - Name: Test Patient
   - Phone: 9876543210
   - Department: Select any department
   - Date: Select a future date
3. Click "Submit Appointment Request"
4. You should see "Appointment Request Received!" message

### Method 2: Using Browser Console

1. Open http://localhost:3000/appointment
2. Press F12 to open Developer Tools
3. Go to **Console** tab
4. Paste this code:

```javascript
fetch('/api/appointments', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test Patient',
    phone: '9876543210',
    email: 'test@example.com',
    department: 'general-medicine',
    date: '2026-04-25',
    message: 'Test appointment'
  })
})
.then(res => res.json())
.then(data => console.log('Response:', data))
.catch(err => console.error('Error:', err))
```

5. Press Enter
6. Check the response in console

### Method 3: Using cURL

```bash
curl -X POST http://localhost:3000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Patient",
    "phone": "9876543210",
    "email": "test@example.com",
    "department": "general-medicine",
    "date": "2026-04-25",
    "message": "Test appointment"
  }'
```

## Step 7: Verify Data in Supabase

1. Go to Supabase dashboard
2. Click **Table Editor**
3. Select `appointments` table
4. You should see your test appointment!

## Troubleshooting

### Error: "Failed to book appointment"

**Check Browser Console:**
1. Press F12
2. Go to Console tab
3. Look for error messages

**Common Issues:**

#### 1. "Failed to fetch" or Network Error
- **Solution**: Check if `.env.local` has correct values
- Restart dev server: `npm run dev`

#### 2. "Row Level Security policy violation"
- **Solution**: Make sure you ran the SQL commands in Step 3
- Check that RLS policies are created

#### 3. "relation 'appointments' does not exist"
- **Solution**: Run the SQL commands in Step 3 to create the table

#### 4. "Invalid API key"
- **Solution**: 
  - Go to Supabase dashboard > Project Settings > API
  - Copy the **anon public** key (not service_role key!)
  - Update `.env.local`
  - Restart server

### Check API Endpoint Directly

Visit: http://localhost:3000/api/appointments

You should see an empty array: `{"success":true,"data":[]}`

If you see an error, check:
1. Is the server running?
2. Are environment variables set?
3. Check terminal for error messages

### Check Supabase Connection

Run the test script:
```bash
node test-supabase.js
```

This will test if your Supabase connection is working.

## Expected Results

### ✅ Success Indicators:
- Form submits without errors
- Success message appears
- Data appears in Supabase Table Editor
- No errors in browser console
- API returns `{"success": true, ...}`

### ❌ Failure Indicators:
- Error message appears
- Console shows errors
- Data doesn't appear in Supabase
- API returns error

## Next Steps After Success

1. ✅ Test contact form: http://localhost:3000/contact
2. ✅ View all appointments in Supabase
3. ✅ Test filtering: http://localhost:3000/api/appointments?status=pending
4. 🔄 Set up email notifications (optional)
5. 🔄 Create admin dashboard (optional)

## Need Help?

### Check These Files:
- `.env.local` - Environment variables
- `lib/supabase.ts` - Supabase client
- `app/api/appointments/route.ts` - API endpoint
- `app/appointment/page.tsx` - Form component

### Useful Commands:
```bash
# Restart server
npm run dev

# Check if Supabase package is installed
npm list @supabase/supabase-js

# Test connection
node test-supabase.js
```

### Still Stuck?
1. Check Supabase logs in dashboard
2. Check browser Network tab (F12 > Network)
3. Check terminal for server errors
4. Verify all SQL commands ran successfully
