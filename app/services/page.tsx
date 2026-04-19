'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Heart, Siren, TestTube, Pill, CreditCard, Bed, Ambulance } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Siren,
      title: '24/7 Emergency Care',
      description: 'Round-the-clock emergency services with immediate medical attention. Our emergency department is equipped to handle all types of medical emergencies with trained staff and advanced equipment.',
      features: ['Immediate Triage', 'Trauma Care', 'Critical Care', 'Ambulance Service']
    },
    {
      icon: Heart,
      title: 'ICU & Critical Care',
      description: 'Advanced Intensive Care Unit with state-of-the-art monitoring systems and life support equipment. Our ICU is staffed 24/7 by experienced critical care specialists.',
      features: ['Ventilator Support', 'Cardiac Monitoring', 'Post-Operative Care', 'Specialized Nursing']
    },
    {
      icon: Bed,
      title: 'Operation Theater',
      description: 'Fully equipped modern operation theaters with advanced surgical instruments and sterilization facilities. We perform a wide range of surgical procedures with high success rates.',
      features: ['General Surgery', 'Laparoscopic Surgery', 'Gynecological Surgery', 'Orthopedic Surgery']
    },
    {
      icon: TestTube,
      title: 'Diagnostics & Lab',
      description: 'Comprehensive diagnostic services including pathology, radiology, and imaging. Our in-house laboratory ensures quick and accurate test results.',
      features: ['Blood Tests', 'X-Ray', 'Ultrasound', 'ECG & Echo']
    },
    {
      icon: Pill,
      title: '24/7 Pharmacy',
      description: 'Round-the-clock pharmacy service with a comprehensive stock of medicines and medical supplies. We ensure availability of all prescribed medications.',
      features: ['Generic Medicines', 'Branded Drugs', 'Emergency Supplies', 'Home Delivery']
    },
    {
      icon: CreditCard,
      title: 'Cashless Insurance',
      description: 'We accept cashless treatment for major insurance providers. Our dedicated team assists with insurance paperwork and claim processing.',
      features: ['Major Insurance Accepted', 'Claim Assistance', 'Direct Billing', 'TPA Coordination']
    },
    {
      icon: Ambulance,
      title: 'Ambulance Service',
      description: 'Well-equipped ambulance service for emergency patient transport. Our ambulances are fitted with basic life support equipment and trained paramedics.',
      features: ['24/7 Availability', 'Trained Paramedics', 'Life Support Equipment', 'Quick Response']
    },
    {
      icon: Bed,
      title: 'In-Patient Care',
      description: 'Comfortable and hygienic patient rooms with modern amenities. We provide personalized care with regular monitoring by our nursing staff.',
      features: ['Private Rooms', 'General Wards', 'Nursing Care', 'Visitor Facilities']
    }
  ]

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
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-on-background font-headline leading-tight tracking-tighter mb-6">
              Comprehensive Healthcare Services
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              From emergency care to specialized treatments, we offer a complete range of medical services under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-surface-container-lowest p-6 md:p-8 rounded-lg editorial-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <service.icon className="text-primary w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-headline">{service.title}</h3>
              <p className="text-on-surface-variant mb-4 md:mb-6 text-sm md:text-base leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs md:text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-on-surface-variant">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-error py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AlertCircle className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 md:mb-6 font-headline">
              Medical Emergency?
            </h2>
            <p className="text-white/90 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Our emergency department is open 24/7 to provide immediate medical care. Don't hesitate to reach out in case of any medical emergency.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center px-4">
              <a
                href="tel:05712410992"
                className="bg-white text-error px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg active:scale-95 transition-all"
              >
                Call Emergency: 0571-241-0992
              </a>
              <a
                href="https://wa.me/919105712410992"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg active:scale-95 transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-4 font-headline">
            Insurance Partners
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            We accept cashless treatment from major insurance providers. Contact us to verify your insurance coverage.
          </p>
        </div>

        <div className="bg-surface-container-lowest p-12 rounded-lg editorial-shadow text-center">
          <p className="text-on-surface-variant mb-6">
            We work with most major insurance companies and TPAs to provide cashless treatment facilities.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-on-primary px-8 py-3 rounded-full font-bold text-sm active:scale-95 transition-all"
          >
            Contact for Insurance Queries
          </a>
        </div>
      </section>
    </main>
  )
}
