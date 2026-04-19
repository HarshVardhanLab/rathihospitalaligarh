'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
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
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to send message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-on-background font-headline leading-tight tracking-tighter mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Have questions? We're here to help. Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <motion.div
            className="bg-surface-container-lowest p-4 md:p-6 rounded-lg editorial-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Phone className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
            <h3 className="font-bold mb-1 md:mb-2 font-headline text-sm md:text-base">Phone</h3>
            <a href="tel:05712410992" className="text-on-surface-variant hover:text-primary transition-colors text-xs md:text-base">
              0571-241-0992
            </a>
          </motion.div>

          <motion.div
            className="bg-surface-container-lowest p-4 md:p-6 rounded-lg editorial-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Mail className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
            <h3 className="font-bold mb-1 md:mb-2 font-headline text-sm md:text-base">Email</h3>
            <a href="mailto:info@rathihospital.com" className="text-on-surface-variant hover:text-primary transition-colors break-all text-xs md:text-base">
              info@rathihospital.com
            </a>
          </motion.div>

          <motion.div
            className="bg-surface-container-lowest p-4 md:p-6 rounded-lg editorial-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MapPin className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
            <h3 className="font-bold mb-1 md:mb-2 font-headline text-sm md:text-base">Address</h3>
            <p className="text-on-surface-variant text-xs md:text-sm">
              HIG-6, Agra Road, Vikas Nagar<br />
              Aligarh, UP – 202001
            </p>
          </motion.div>

          <motion.div
            className="bg-surface-container-lowest p-4 md:p-6 rounded-lg editorial-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Clock className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
            <h3 className="font-bold mb-1 md:mb-2 font-headline text-sm md:text-base">Hours</h3>
            <p className="text-on-surface-variant text-xs md:text-sm">
              OPD: Mon-Sat, 10 AM - 3 PM<br />
              Emergency: 24/7
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-surface-container-lowest p-6 md:p-8 rounded-lg editorial-shadow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-headline">Send us a Message</h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 font-headline">Message Sent!</h3>
                <p className="text-on-surface-variant mb-8">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold active:scale-95 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-on-surface">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-on-surface">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-on-surface">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="Your phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-on-surface">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Appointment Inquiry</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-on-surface">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-base tracking-wide shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Map */}
          <motion.div
            className="bg-surface-container-low rounded-lg overflow-hidden editorial-shadow h-96 md:h-[600px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4730.657799501896!2d78.07240327547285!3d27.861268876094663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a37074f0a231%3A0xece9f1e7e6fbdadd!2sRathi%20Hospital!5e1!3m2!1sen!2sin!4v1776570156470!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <motion.div
          className="bg-primary text-on-primary p-8 md:p-12 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-headline">Connect With Us</h2>
          <p className="text-on-primary/90 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base px-4">
            Follow us on social media for health tips, updates, and announcements.
          </p>
          <div className="flex justify-center gap-3 md:gap-4">
            <a
              href="https://www.facebook.com/rathihospital"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/919927991621"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.43 0 9.856-4.426 9.858-9.855.002-5.43-4.425-9.856-9.853-9.856-5.417 0-9.856 4.439-9.858 9.856 0 2.038.594 3.635 1.593 5.313l-.994 3.63 3.738-.98zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
