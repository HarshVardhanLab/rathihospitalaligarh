import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface AppointmentEmailData {
  patientName: string
  patientPhone: string
  patientEmail?: string
  department: string
  doctor?: string
  date: string
  message?: string
}

export async function sendAppointmentNotification(data: AppointmentEmailData) {
  try {
    // Email to hospital staff
    const hospitalEmail = await resend.emails.send({
      from: 'Rathi Hospital <onboarding@resend.dev>', // Change this to your verified domain
      to: ['harendrakashyap027@gmail.com'], // Hospital staff email
      subject: `New Appointment Request - ${data.department}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #006c49; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .detail-row { margin: 15px 0; padding: 10px; background: white; border-radius: 4px; }
              .label { font-weight: bold; color: #006c49; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🏥 New Appointment Request</h1>
              </div>
              <div class="content">
                <p>A new appointment has been booked through the website:</p>
                
                <div class="detail-row">
                  <span class="label">Patient Name:</span> ${data.patientName}
                </div>
                
                <div class="detail-row">
                  <span class="label">Phone:</span> ${data.patientPhone}
                </div>
                
                ${data.patientEmail ? `
                <div class="detail-row">
                  <span class="label">Email:</span> ${data.patientEmail}
                </div>
                ` : ''}
                
                <div class="detail-row">
                  <span class="label">Department:</span> ${data.department}
                </div>
                
                ${data.doctor ? `
                <div class="detail-row">
                  <span class="label">Doctor:</span> ${data.doctor}
                </div>
                ` : ''}
                
                <div class="detail-row">
                  <span class="label">Preferred Date:</span> ${new Date(data.date).toLocaleDateString('en-IN', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                
                ${data.message ? `
                <div class="detail-row">
                  <span class="label">Message:</span><br/>
                  ${data.message}
                </div>
                ` : ''}
                
                <p style="margin-top: 30px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 4px;">
                  <strong>⚠️ Action Required:</strong> Please contact the patient to confirm the appointment.
                </p>
              </div>
              <div class="footer">
                <p>Rathi Hospital - Excellence in Healthcare</p>
                <p>HIG-6, Agra Road, Vikas Nagar, Aligarh, UP – 202001</p>
                <p>Phone: 0571-241-0992</p>
              </div>
            </div>
          </body>
        </html>
      `
    })

    // Email to patient (if email provided)
    let patientEmail = null
    if (data.patientEmail) {
      patientEmail = await resend.emails.send({
        from: 'Rathi Hospital <onboarding@resend.dev>', // Change this to your verified domain
        to: [data.patientEmail],
        subject: 'Appointment Request Received - Rathi Hospital',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #006c49; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
                .detail-row { margin: 15px 0; padding: 10px; background: white; border-radius: 4px; }
                .label { font-weight: bold; color: #006c49; }
                .button { display: inline-block; padding: 12px 30px; background: #006c49; color: white; text-decoration: none; border-radius: 25px; margin: 20px 0; }
                .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🏥 Appointment Request Received</h1>
                </div>
                <div class="content">
                  <p>Dear ${data.patientName},</p>
                  
                  <p>Thank you for choosing Rathi Hospital. We have received your appointment request with the following details:</p>
                  
                  <div class="detail-row">
                    <span class="label">Department:</span> ${data.department}
                  </div>
                  
                  ${data.doctor ? `
                  <div class="detail-row">
                    <span class="label">Doctor:</span> ${data.doctor}
                  </div>
                  ` : ''}
                  
                  <div class="detail-row">
                    <span class="label">Preferred Date:</span> ${new Date(data.date).toLocaleDateString('en-IN', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  
                  <p style="margin-top: 30px; padding: 15px; background: #d4edda; border-left: 4px solid #28a745; border-radius: 4px;">
                    <strong>✅ What's Next?</strong><br/>
                    Our team will contact you shortly at <strong>${data.patientPhone}</strong> to confirm your appointment time.
                  </p>
                  
                  <div style="text-align: center;">
                    <a href="https://wa.me/919927991621" class="button">Contact Us on WhatsApp</a>
                  </div>
                  
                  <p style="margin-top: 20px; font-size: 14px; color: #666;">
                    For urgent matters, please call us at <strong>0571-241-0992</strong> (24/7 Emergency)
                  </p>
                </div>
                <div class="footer">
                  <p><strong>Rathi Hospital</strong> - Excellence in Healthcare</p>
                  <p>HIG-6, Agra Road, Vikas Nagar, Aligarh, UP – 202001</p>
                  <p>Phone: 0571-241-0992 | Emergency: 24/7 Available</p>
                </div>
              </div>
            </body>
          </html>
        `
      })
    }

    return {
      success: true,
      hospitalEmailId: hospitalEmail.data?.id,
      patientEmailId: patientEmail?.data?.id
    }
  } catch (error) {
    console.error('Error sending appointment email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

export async function sendContactNotification(data: {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}) {
  try {
    // Email to hospital staff
    const hospitalEmail = await resend.emails.send({
      from: 'Rathi Hospital <onboarding@resend.dev>',
      to: ['harendrakashyap027@gmail.com'],
      subject: `New Contact Message - ${data.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #006c49; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .detail-row { margin: 15px 0; padding: 10px; background: white; border-radius: 4px; }
              .label { font-weight: bold; color: #006c49; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📧 New Contact Message</h1>
              </div>
              <div class="content">
                <p>A new message has been received through the contact form:</p>
                
                <div class="detail-row">
                  <span class="label">Name:</span> ${data.name}
                </div>
                
                <div class="detail-row">
                  <span class="label">Email:</span> ${data.email}
                </div>
                
                <div class="detail-row">
                  <span class="label">Phone:</span> ${data.phone}
                </div>
                
                <div class="detail-row">
                  <span class="label">Subject:</span> ${data.subject}
                </div>
                
                <div class="detail-row">
                  <span class="label">Message:</span><br/>
                  ${data.message}
                </div>
                
                <p style="margin-top: 30px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 4px;">
                  <strong>⚠️ Action Required:</strong> Please respond to this inquiry.
                </p>
              </div>
              <div class="footer">
                <p>Rathi Hospital - Excellence in Healthcare</p>
                <p>HIG-6, Agra Road, Vikas Nagar, Aligarh, UP – 202001</p>
              </div>
            </div>
          </body>
        </html>
      `
    })

    return {
      success: true,
      emailId: hospitalEmail.data?.id
    }
  } catch (error) {
    console.error('Error sending contact email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}
