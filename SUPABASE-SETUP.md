# Supabase Setup Guide for Rathi Hospital

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in:
   - **Name**: Rathi Hospital
   - **Database Password**: (create a strong password)
   - **Region**: Choose closest to India (e.g., Mumbai)
5. Click "Create new project"

## Step 2: Create Database Tables

Go to **SQL Editor** in your Supabase dashboard and run these SQL commands:

### Create Appointments Table

```sql
-- Create appointments table
CREATE TABLE appointments (
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

-- Create index for faster queries
CREATE INDEX idx_appointments_date ON appointments(date);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_appointments_created_at ON appointments(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for booking appointments)
CREATE POLICY "Allow public to insert appointments" ON appointments
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reading appointments (for admin dashboard)
CREATE POLICY "Allow authenticated users to read appointments" ON appointments
  FOR SELECT USING (auth.role() = 'authenticated');
```

### Create Contact Messages Table

```sql
-- Create contact_messages table
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index for faster queries
CREATE INDEX idx_contact_messages_status ON contact_messages(status);
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for contact form)
CREATE POLICY "Allow public to insert contact messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reading messages (for admin dashboard)
CREATE POLICY "Allow authenticated users to read messages" ON contact_messages
  FOR SELECT USING (auth.role() = 'authenticated');
```

## Step 3: Get API Keys

1. Go to **Project Settings** → **API**
2. Copy these values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

## Step 4: Configure Environment Variables

1. Create `.env.local` file in your project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

2. Replace the values with your actual Supabase credentials

## Step 5: Test the Integration

1. Restart your Next.js development server:
```bash
npm run dev
```

2. Try booking an appointment or sending a contact message
3. Check your Supabase dashboard → **Table Editor** to see the data

## Step 6: View Data in Supabase Dashboard

### View Appointments
1. Go to **Table Editor**
2. Select `appointments` table
3. You'll see all appointment bookings

### View Contact Messages
1. Go to **Table Editor**
2. Select `contact_messages` table
3. You'll see all contact form submissions

## Optional: Set Up Email Notifications

To send email notifications when appointments are booked:

1. Install Resend (recommended):
```bash
npm install resend
```

2. Get API key from [https://resend.com](https://resend.com)

3. Add to `.env.local`:
```bash
RESEND_API_KEY=your_resend_api_key
```

4. Update API routes to send emails (code provided separately)

## Security Best Practices

1. **Never commit `.env.local`** - it's already in `.gitignore`
2. **Use Row Level Security (RLS)** - already configured above
3. **Create admin user** for viewing appointments:
   - Go to **Authentication** → **Users**
   - Add a user for hospital staff
4. **Set up proper policies** for production

## Database Schema

### Appointments Table
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| name | TEXT | Patient name |
| phone | TEXT | Patient phone |
| email | TEXT | Patient email (optional) |
| department | TEXT | Department name |
| doctor | TEXT | Doctor name (optional) |
| date | DATE | Appointment date |
| message | TEXT | Additional message |
| status | TEXT | pending/confirmed/cancelled |
| created_at | TIMESTAMP | When created |

### Contact Messages Table
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| name | TEXT | Sender name |
| email | TEXT | Sender email |
| phone | TEXT | Sender phone |
| subject | TEXT | Message subject |
| message | TEXT | Message content |
| status | TEXT | new/read/replied |
| created_at | TIMESTAMP | When created |

## Troubleshooting

### Error: "Failed to fetch"
- Check if Supabase URL and key are correct in `.env.local`
- Restart your dev server after adding env variables

### Error: "Row Level Security policy violation"
- Make sure you ran the RLS policies SQL commands
- Check that policies allow public inserts

### Data not showing in Supabase
- Check browser console for errors
- Verify API routes are working: `/api/appointments` and `/api/contact`
- Check Supabase logs in dashboard

## Next Steps

1. ✅ Set up Supabase project
2. ✅ Create database tables
3. ✅ Configure environment variables
4. ✅ Test appointment booking
5. ✅ Test contact form
6. 🔄 Set up email notifications (optional)
7. 🔄 Create admin dashboard to view appointments
8. 🔄 Add WhatsApp integration for confirmations

## Support

- Supabase Docs: https://supabase.com/docs
- Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
