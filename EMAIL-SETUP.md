# Email Notifications Setup

## ✅ What's Implemented

Email notifications are now fully integrated! When someone books an appointment or sends a contact message:

1. **Hospital Staff** receives an email with all details
2. **Patient** receives a confirmation email (if they provided email)

## 📧 Email Features

### Appointment Emails
- **To Hospital**: Full appointment details with patient info
- **To Patient**: Confirmation with next steps and contact info
- Beautiful HTML templates with Rathi Hospital branding
- Includes WhatsApp button for easy contact

### Contact Form Emails
- **To Hospital**: Full message details with sender info
- Action required notification

## 🔧 Current Configuration

Your `.env.local` already has:
```bash
RESEND_API_KEY=re_hvywzqkB_MzYjwygpzLetQc2aAPmaDYqv
```

## ⚠️ Important: Update Email Addresses

### Step 1: Change "From" Email (Required for Production)

Currently using: `onboarding@resend.dev` (Resend's test domain)

**For production, you need to:**

1. **Option A: Use Your Own Domain** (Recommended)
   - Add your domain in Resend dashboard
   - Verify DNS records
   - Update `lib/email.ts`:
   ```typescript
   from: 'Rathi Hospital <noreply@rathihospital.com>'
   ```

2. **Option B: Continue with Resend Test Domain**
   - Works for testing
   - Limited to 100 emails/day
   - May go to spam

### Step 2: Update Hospital Email Address

In `lib/email.ts`, change:
```typescript
to: ['harendrakashyap027@gmail.com']
```

To your actual hospital email:
```typescript
to: ['info@rathihospital.com'] // or your preferred email
```

You can add multiple recipients:
```typescript
to: ['info@rathihospital.com', 'appointments@rathihospital.com']
```

## 🧪 Testing Email Notifications

### Test 1: Book an Appointment

1. Restart your dev server:
```bash
npm run dev
```

2. Go to http://localhost:3000/appointment

3. Fill out the form with:
   - Name: Test Patient
   - Phone: 9876543210
   - **Email: your-test-email@gmail.com** (important!)
   - Department: Any
   - Date: Future date

4. Submit the form

5. Check your email inbox:
   - Hospital email: `harendrakashyap027@gmail.com`
   - Patient email: The email you entered in the form

### Test 2: Contact Form

1. Go to http://localhost:3000/contact
2. Fill out and submit
3. Check hospital email inbox

## 📊 Check Email Status in Resend

1. Go to https://resend.com/emails
2. You'll see all sent emails
3. Click on any email to see:
   - Delivery status
   - Open rate
   - Click rate
   - Full email content

## 🎨 Email Templates

The emails include:
- ✅ Rathi Hospital branding (green #006c49)
- ✅ Professional HTML layout
- ✅ Mobile responsive
- ✅ All appointment/contact details
- ✅ Action buttons (WhatsApp, etc.)
- ✅ Hospital contact information

## 🔍 Troubleshooting

### Emails Not Sending?

**Check 1: Resend API Key**
```bash
# In .env.local
RESEND_API_KEY=re_hvywzqkB_MzYjwygpzLetQc2aAPmaDYqv
```

**Check 2: Restart Server**
```bash
# Stop server (Ctrl+C)
npm run dev
```

**Check 3: Check Browser Console**
- Press F12
- Look for errors
- Check Network tab for API response

**Check 4: Check Server Logs**
- Look at terminal where `npm run dev` is running
- Check for error messages

**Check 5: Verify in Resend Dashboard**
- Go to https://resend.com/emails
- Check if emails appear (even if failed)
- Click on email to see error details

### Emails Going to Spam?

**Solutions:**
1. Use your own verified domain (not `onboarding@resend.dev`)
2. Add SPF, DKIM records in Resend dashboard
3. Ask recipients to whitelist your email

### Email Sent But Not Received?

1. Check spam/junk folder
2. Check Resend dashboard for delivery status
3. Verify email address is correct
4. Try different email provider (Gmail, Outlook, etc.)

## 📝 Customizing Email Templates

Edit `lib/email.ts` to customize:

### Change Hospital Email
```typescript
to: ['your-hospital-email@example.com']
```

### Change Email Subject
```typescript
subject: 'Your Custom Subject'
```

### Modify Email Content
Edit the HTML in the `html` field. Current template includes:
- Header with hospital name
- Patient/contact details
- Action required notice
- Footer with hospital info

### Add More Recipients
```typescript
to: [
  'doctor@rathihospital.com',
  'reception@rathihospital.com',
  'admin@rathihospital.com'
]
```

## 🚀 Production Checklist

Before going live:

- [ ] Add your own domain in Resend
- [ ] Update "from" email address
- [ ] Update hospital email recipients
- [ ] Test with real email addresses
- [ ] Verify emails don't go to spam
- [ ] Set up email forwarding if needed
- [ ] Monitor Resend dashboard for issues

## 📈 Email Limits

**Resend Free Plan:**
- 100 emails/day
- 3,000 emails/month
- Test domain included

**For Higher Volume:**
- Upgrade to paid plan
- Or use your own SMTP server

## 🔐 Security

- ✅ API key stored in environment variables
- ✅ Not exposed to client-side
- ✅ Emails sent from server-side only
- ✅ Patient data encrypted in transit

## 📞 Support

### Resend Documentation
- https://resend.com/docs

### Common Issues
- **Rate limit exceeded**: Upgrade plan or wait 24 hours
- **Invalid API key**: Check `.env.local`
- **Domain not verified**: Add domain in Resend dashboard

## 🎯 Next Steps

1. ✅ Test appointment booking with email
2. ✅ Test contact form with email
3. ✅ Check Resend dashboard
4. 🔄 Add your own domain (optional)
5. 🔄 Customize email templates (optional)
6. 🔄 Add SMS notifications (future)
7. 🔄 Add WhatsApp notifications (future)

---

**Email notifications are now live! Test them by booking an appointment.** 📧
