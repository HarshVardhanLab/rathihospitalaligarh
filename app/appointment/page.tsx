'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, User, Phone, Mail, MessageSquare, Building2, CheckCircle } from 'lucide-react'

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    date: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitted(true)
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          department: '',
          doctor: '',
          date: '',
          message: ''
        })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert(result.error || 'Failed to book appointment. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to book appointment. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleWhatsAppBooking = () => {
    const message = `Hi, I would like to book an appointment at Rathi Hospital.
Name: ${formData.name}
Phone: ${formData.phone}
Department: ${formData.department}
Preferred Date: ${formData.date}
Message: ${formData.message}`
    
    const whatsappUrl = `https://wa.me/919927991621?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-surface-container-low py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase mb-4">
              Book Appointment
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-on-background font-headline leading-tight tracking-tighter mb-6">
              Schedule Your Visit
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Book an appointment with our expert doctors. We'll get back to you shortly to confirm your appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <motion.div
          className="bg-surface-container-lowest p-6 md:p-8 lg:p-12 rounded-lg editorial-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4 font-headline">Appointment Request Received!</h2>
              <p className="text-on-surface-variant mb-8">
                Thank you for choosing Rathi Hospital. We'll contact you shortly to confirm your appointment.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold active:scale-95 transition-all"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-on-surface">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-on-surface">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-on-surface">
                  Email (Optional)
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-on-surface">
                    Department *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none"
                    >
                      <option value="">Select Department</option>
                      <option value="gynaecology">Gynaecology & Obstetrics</option>
                      <option value="orthopaedics">Orthopaedics</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="ent">ENT</option>
                      <option value="general-surgery">General Surgery</option>
                      <option value="general-medicine">General Medicine</option>
                      <option value="urology">Urology</option>
                      <option value="gastroenterology">Gastroenterology</option>
                      <option value="paediatrics">Paediatrics</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="neurology">Neurology</option>
                      <option value="ophthalmology">Ophthalmology</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-on-surface">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-on-surface">
                  Message (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-on-surface-variant" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    placeholder="Any specific concerns or requirements?"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-base tracking-wide shadow-lg shadow-primary/20 active:scale-95 transition-all"
                >
                  Submit Appointment Request
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="flex-1 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-base active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.43 0 9.856-4.426 9.858-9.855.002-5.43-4.425-9.856-9.853-9.856-5.417 0-9.856 4.439-9.858 9.856 0 2.038.594 3.635 1.593 5.313l-.994 3.63 3.738-.98zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Book via WhatsApp
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-6 pb-12 md:pb-20">
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
          <motion.div
            className="bg-surface-container-low p-4 md:p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Phone className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-3 md:mb-4" />
            <h3 className="font-bold mb-1 md:mb-2 font-headline text-sm md:text-base">Call Us</h3>
            <a href="tel:05712410992" className="text-on-surface-variant hover:text-primary text-xs md:text-base">
              0571-241-0992
            </a>
          </motion.div>

          <motion.div
            className="bg-surface-container-low p-4 md:p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-3 md:mb-4" />
            <h3 className="font-bold mb-1 md:mb-2 font-headline text-sm md:text-base">Email Us</h3>
            <a href="mailto:info@rathihospital.com" className="text-on-surface-variant hover:text-primary text-xs md:text-base break-all">
              info@rathihospital.com
            </a>
          </motion.div>

          <motion.div
            className="bg-surface-container-low p-4 md:p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Calendar className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-3 md:mb-4" />
            <h3 className="font-bold mb-1 md:mb-2 font-headline text-sm md:text-base">OPD Hours</h3>
            <p className="text-on-surface-variant text-xs md:text-base">Mon-Sat: 10 AM - 3 PM</p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
