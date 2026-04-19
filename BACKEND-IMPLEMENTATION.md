# Backend Implementation - Rathi Hospital

## Overview

The Rathi Hospital website now has a complete backend implementation using **Supabase** and **Next.js API Routes**.

## Architecture

```
Frontend (Next.js)
    ↓
API Routes (/app/api/)
    ↓
Supabase (PostgreSQL Database)
```

## Features Implemented

### ✅ 1. Appointment Booking System
- **Endpoint**: `POST /api/appointments`
- **Features**:
  - Store patient appointment requests
  - Track appointment status (pending/confirmed/cancelled)
  - Capture patient details, department, preferred date
  - Optional doctor selection
  
### ✅ 2. Contact Form System
- **Endpoint**: `POST /api/contact`
- **Features**:
  - Store contact messages
  - Track message status (new/read/replied)
  - Capture sender details and message content

### ✅ 3. Data Retrieval
- **Endpoint**: `GET /api/appointments`
- **Endpoint**: `GET /api/contact`
- **Features**:
  - Filter by status
  - Filter by date
  - Sorted by creation time

## File Structure

```
rathi-hospital/
├── app/
│   ├── api/
│   │   ├── appointments/
│   │   │   └── route.ts          # Appointment API endpoints
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoints
│   ├── appointment/
│   │   └── page.tsx              # Updated with API integration
│   └── contact/
│       └── page.tsx              # Updated with API integration
├── lib/
│   └── supabase.ts               # Supabase client configuration
├── .env.local.example            # Environment variables template
├── SUPABASE-SETUP.md            # Complete setup guide
└── BACKEND-IMPLEMENTATION.md    # This file
```

## API Endpoints

### 1. Appointments API

#### Create Appointment
```http
POST /api/appointments
Content-Type: application/json

{
  "name": "John Doe",
  "phone": "9876543210",
  "email": "john@example.com",
  "department": "gynaecology",
  "doctor": "Dr. Asha Rathi",
  "date": "2026-04-25",
  "message": "First visit"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Appointment booked successfully",
  "data": {
    "id": "uuid",
    "name": "John Doe",
    "status": "pending",
    "created_at": "2026-04-19T..."
  }
}
```

#### Get Appointments
```http
GET /api/appointments?status=pending&date=2026-04-25
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "John Doe",
      "phone": "9876543210",
      "department": "gynaecology",
      "status": "pending",
      "created_at": "2026-04-19T..."
    }
  ]
}
```

### 2. Contact API

#### Send Contact Message
```http
POST /api/contact
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "9876543210",
  "subject": "general",
  "message": "I have a question about your services"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "data": {
    "id": "uuid",
    "name": "Jane Smith",
    "status": "new",
    "created_at": "2026-04-19T..."
  }
}
```

#### Get Contact Messages
```http
GET /api/contact?status=new
```

## Database Schema

### Appointments Table
```sql
appointments (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  department TEXT NOT NULL,
  doctor TEXT,
  date DATE NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
)
```

### Contact Messages Table
```sql
contact_messages (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
)
```

## Setup Instructions

### Quick Start

1. **Install Dependencies**
```bash
npm install @supabase/supabase-js
```

2. **Create Supabase Project**
   - Follow instructions in `SUPABASE-SETUP.md`

3. **Configure Environment Variables**
```bash
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials
```

4. **Run Database Migrations**
   - Copy SQL from `SUPABASE-SETUP.md`
   - Run in Supabase SQL Editor

5. **Start Development Server**
```bash
npm run dev
```

6. **Test the Forms**
   - Visit `/appointment` to test appointment booking
   - Visit `/contact` to test contact form

## Security Features

### ✅ Row Level Security (RLS)
- Public can insert appointments and messages
- Only authenticated users can read data
- Prevents unauthorized access

### ✅ Input Validation
- Required field validation
- Type checking
- SQL injection prevention (via Supabase)

### ✅ Environment Variables
- API keys stored securely
- Not committed to version control
- Separate for development/production

## Future Enhancements

### 🔄 Phase 2 (Recommended)
1. **Email Notifications**
   - Send confirmation emails to patients
   - Notify hospital staff of new appointments
   - Use Resend or SendGrid

2. **WhatsApp Integration**
   - Send appointment confirmations via WhatsApp
   - Use Twilio or WhatsApp Business API

3. **Admin Dashboard**
   - View all appointments
   - Update appointment status
   - Manage contact messages
   - Export data to Excel

### 🔄 Phase 3 (Advanced)
1. **SMS Notifications**
   - Appointment reminders
   - Status updates

2. **Payment Integration**
   - Online consultation fees
   - Advance booking payments

3. **Patient Portal**
   - View appointment history
   - Download prescriptions
   - Book follow-up appointments

4. **Doctor Availability**
   - Real-time slot booking
   - Calendar integration
   - Automatic scheduling

## Testing

### Test Appointment Booking
```bash
curl -X POST http://localhost:3000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Patient",
    "phone": "9876543210",
    "department": "general-medicine",
    "date": "2026-04-25"
  }'
```

### Test Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "9876543210",
    "subject": "general",
    "message": "Test message"
  }'
```

## Monitoring & Analytics

### View Data in Supabase
1. Go to Supabase Dashboard
2. Navigate to **Table Editor**
3. Select `appointments` or `contact_messages`
4. View, filter, and export data

### Check API Logs
1. Check browser console for errors
2. Check Supabase logs in dashboard
3. Use Next.js server logs for debugging

## Deployment

### Environment Variables for Production
```bash
# Vercel/Netlify
NEXT_PUBLIC_SUPABASE_URL=your_production_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_key
```

### Deploy to Vercel
```bash
vercel --prod
```

### Deploy to Netlify
```bash
netlify deploy --prod
```

## Support & Documentation

- **Supabase Docs**: https://supabase.com/docs
- **Next.js API Routes**: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- **TypeScript**: https://www.typescriptlang.org/docs

## Troubleshooting

### Common Issues

1. **"Failed to fetch" error**
   - Check if `.env.local` exists
   - Verify Supabase credentials
   - Restart dev server

2. **"Row Level Security policy violation"**
   - Run RLS policies SQL in Supabase
   - Check policy configuration

3. **Form not submitting**
   - Check browser console
   - Verify API endpoint is accessible
   - Check network tab for errors

## Contact

For questions or issues with the backend implementation, refer to:
- `SUPABASE-SETUP.md` for setup instructions
- Supabase documentation for database queries
- Next.js documentation for API routes
