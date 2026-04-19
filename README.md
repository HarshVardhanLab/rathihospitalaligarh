# Rathi Hospital - Modern Hospital Website

A complete, production-ready hospital website built with Next.js 14, TypeScript, Tailwind CSS, and **Supabase backend**.

## 🏥 About Rathi Hospital

Rathi Hospital is a trusted multispeciality hospital in Aligarh, Uttar Pradesh, providing excellence in healthcare for over 25 years.

**Location:** HIG-6, Agra Road, Vikas Nagar, Aligarh, UP – 202001  
**Phone:** 0571-241-0992  
**Emergency:** 24/7 Available  
**Rating:** 4.0★ (95+ reviews)

## 🌟 Features

### Frontend
- ✅ 8 fully responsive pages (Home, About, Departments, Doctors, Services, Appointment, OPD Schedule, Contact)
- ✅ Modern UI with "The Restorative Archive" design system
- ✅ Mobile-first responsive design with bottom navigation
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized for Aligarh healthcare searches
- ✅ WhatsApp integration
- ✅ Google Maps integration

### Backend (NEW! 🎉)
- ✅ **Supabase database integration**
- ✅ **Appointment booking system with API**
- ✅ **Contact form system with API**
- ✅ Secure data storage with Row Level Security
- ✅ Real-time data sync
- ✅ Production-ready API endpoints

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Backend (5 minutes)
Follow the **[QUICK-START.md](QUICK-START.md)** guide to:
1. Create Supabase account
2. Create database tables
3. Get API keys
4. Configure environment variables

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📚 Documentation

- **[QUICK-START.md](QUICK-START.md)** - Get backend running in 5 minutes
- **[SUPABASE-SETUP.md](SUPABASE-SETUP.md)** - Detailed backend setup guide
- **[BACKEND-IMPLEMENTATION.md](BACKEND-IMPLEMENTATION.md)** - Complete API documentation
- **[IMAGES-IMPLEMENTATION.md](IMAGES-IMPLEMENTATION.md)** - Image integration guide

## 📄 Pages

1. **Home (/)** - Hero section, stats, departments, doctors, testimonials
2. **About (/about)** - Hospital info, mission, vision, awards, location
3. **Departments (/departments)** - 12 medical departments with details
4. **Doctors (/doctors)** - Doctor profiles with specialties and OPD timings
5. **Services (/services)** - Hospital services (ICU, OT, Diagnostics, etc.)
6. **Appointment (/appointment)** - Online appointment booking form (saves to database)
7. **OPD Schedule (/opd)** - Doctor availability and timings
8. **Contact (/contact)** - Contact form (saves to database) and location map

## 🔧 Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

### Backend
- **Database:** Supabase (PostgreSQL)
- **API:** Next.js API Routes
- **Authentication:** Supabase Auth (ready for admin dashboard)

## 📊 API Endpoints

### Appointments
- `POST /api/appointments` - Create appointment
- `GET /api/appointments` - Get appointments (with filters)

### Contact
- `POST /api/contact` - Send contact message
- `GET /api/contact` - Get messages (with filters)

See [BACKEND-IMPLEMENTATION.md](BACKEND-IMPLEMENTATION.md) for detailed API documentation.

## 🗄️ Database Schema

### Appointments Table
- Patient name, phone, email
- Department, doctor, date
- Message, status (pending/confirmed/cancelled)
- Timestamps

### Contact Messages Table
- Sender name, email, phone
- Subject, message
- Status (new/read/replied)
- Timestamps

## 🎨 Design System

### Colors
- **Primary:** #006c49 (Medical Green)
- **Primary Container:** #10b981 (Emerald)
- **Tertiary:** #795900 (Accent Yellow)

### Typography
- **Headlines:** Plus Jakarta Sans (Bold, Extrabold)
- **Body:** Inter (Regular, Medium, Semibold)

### Key Design Principles
- No hard borders (tonal layering)
- Generous white space
- Rounded corners
- Editorial shadows
- Glassmorphism effects

## 📸 Images & Assets

Real images from Rathi Hospital:
- Doctor photos (Dr. Asha Rathi, Dr. G.M. Rathi, Dr. Rubina Rathi)
- Hospital building and facilities
- Medical camps and community service
- Awards and recognition

All images optimized with Next.js Image component.

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
vercel --prod
```

### Environment Variables for Production
```bash
NEXT_PUBLIC_SUPABASE_URL=your_production_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_key
```

## � Future Enhancements

### Phase 2 (Recommended)
- [ ] Email notifications (Resend/SendGrid)
- [ ] WhatsApp confirmations (Twilio)
- [ ] Admin dashboard for managing appointments
- [ ] Export data to Excel

### Phase 3 (Advanced)
- [ ] SMS notifications
- [ ] Payment integration
- [ ] Patient portal
- [ ] Real-time slot booking

## � Troubleshooting

### Backend not working?
1. Check if `.env.local` exists with correct credentials
2. Verify Supabase tables are created
3. Restart dev server: `npm run dev`
4. Check browser console for errors

See [BACKEND-IMPLEMENTATION.md](BACKEND-IMPLEMENTATION.md) for more troubleshooting tips.

## 👨‍⚕️ Doctors

- **Dr. G.M. Rathi** - General Physician (30+ years)
- **Dr. Asha Rathi** - Gynaecologist (28+ years, IMA UP Award Winner)
- **Dr. Rubina Rathi** - Chest Specialist (15+ years)

## 🏆 Awards & Recognition

- IMA Uttar Pradesh Award (Dr. Asha Rathi)
- Corona Warrior Award
- Excellence in Healthcare

## 📄 License

© 2024 Rathi Hospital. All rights reserved.

## 📞 Support

For technical support:
- Check documentation files
- Review Supabase dashboard logs
- Refer to troubleshooting guides

---

**Built with ❤️ for Rathi Hospital - Excellence in Healthcare Since 1995**
