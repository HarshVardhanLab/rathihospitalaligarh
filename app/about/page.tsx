'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Users, Award, Building2, CheckCircle, Target, Eye } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-surface-container-low py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 md:px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase mb-3 md:mb-4">
              About Rathi Hospital
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-on-background font-headline leading-tight tracking-tighter mb-4 md:mb-6">
              Excellence in Healthcare Since 1995
            </h1>
            <p className="text-base md:text-xl text-on-surface-variant leading-relaxed">
              Rathi Hospital is Aligarh's trusted multispeciality hospital, providing affordable and compassionate healthcare to the community for over 25 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          <motion.div
            className="bg-surface-container-lowest p-6 md:p-10 rounded-lg editorial-shadow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Target className="text-primary w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6" strokeWidth={1.5} />
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-headline">Our Mission</h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              To provide world-class medical care that is accessible, affordable, and compassionate. We strive to combine advanced medical technology with personalized attention to ensure every patient receives the best possible treatment.
            </p>
          </motion.div>

          <motion.div
            className="bg-surface-container-lowest p-6 md:p-10 rounded-lg editorial-shadow"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Eye className="text-primary w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6" strokeWidth={1.5} />
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-headline">Our Vision</h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              To be recognized as the leading healthcare provider in Aligarh and surrounding regions, known for clinical excellence, patient satisfaction, and innovative medical practices that improve community health outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface-container-low py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-3 md:mb-4 font-headline">Why Choose Rathi Hospital</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-base md:text-lg px-4">
              We combine medical excellence with compassionate care to provide the best healthcare experience in Aligarh.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Heart,
                title: 'Compassionate Care',
                description: 'Every patient is treated with dignity, respect, and personalized attention from our dedicated medical team.'
              },
              {
                icon: Users,
                title: 'Expert Doctors',
                description: 'Our team of highly qualified specialists brings decades of combined experience across multiple medical disciplines.'
              },
              {
                icon: Award,
                title: 'Quality Standards',
                description: 'We maintain the highest standards of medical care with modern equipment and evidence-based treatment protocols.'
              },
              {
                icon: Building2,
                title: 'Modern Facilities',
                description: 'State-of-the-art infrastructure including advanced ICU, operation theaters, and diagnostic equipment.'
              },
              {
                icon: CheckCircle,
                title: 'Affordable Pricing',
                description: 'Quality healthcare at reasonable costs with cashless insurance facilities for major providers.'
              },
              {
                icon: Award,
                title: '24/7 Emergency',
                description: 'Round-the-clock emergency services with immediate medical attention and critical care support.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-surface-container-lowest p-6 md:p-8 rounded-lg editorial-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="text-primary w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4" strokeWidth={1.5} />
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 font-headline">{item.title}</h3>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-4 font-headline">Our Infrastructure</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Modern medical facilities designed for optimal patient care and comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'ICU', description: 'Advanced Intensive Care Unit with 24/7 monitoring and life support systems' },
            { title: 'Operation Theater', description: 'Fully equipped OT with modern surgical instruments and sterilization' },
            { title: 'Diagnostics', description: 'In-house pathology lab and imaging services including X-ray and ultrasound' },
            { title: 'Pharmacy', description: '24/7 pharmacy with comprehensive medicine stock and emergency supplies' }
          ].map((facility, index) => (
            <motion.div
              key={index}
              className="bg-surface-container-lowest p-6 rounded-lg editorial-shadow"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3 text-primary font-headline">{facility.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden editorial-shadow">
                <Image
                  src="/images/hospital-team.jpeg"
                  alt="Rathi Hospital Team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4 md:gap-8 text-center">
              {[
                { number: '25+', label: 'Years of Service' },
                { number: '50,000+', label: 'Patients Treated' },
                { number: '12', label: 'Departments' },
                { number: '4.0★', label: 'Patient Rating' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-primary mb-1 md:mb-2 font-headline">{stat.number}</div>
                  <div className="text-on-primary/80 text-xs md:text-sm uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-4 font-headline">Awards & Recognition</h2>
          <p className="text-on-surface-variant text-lg mb-12">
            Honored for our commitment to healthcare excellence and community service
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
          <motion.div
            className="relative h-48 md:h-80 rounded-lg overflow-hidden editorial-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/ima-award.jpeg"
              alt="IMA UP Award - Dr. Asha Rathi"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 md:p-4">
              <p className="text-white font-bold text-xs md:text-sm">IMA UP Award</p>
              <p className="text-white text-[10px] md:text-xs mt-0.5 md:mt-1 hidden md:block">Dr. Asha Rathi - Excellence in Gynaecology</p>
            </div>
          </motion.div>
          <motion.div
            className="relative h-80 rounded-lg overflow-hidden editorial-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Image
              src="/images/corona-warrior-award.jpeg"
              alt="Corona Warrior Award - Rathi Hospital"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 md:p-4">
              <p className="text-white font-bold text-xs md:text-sm">Corona Warrior Award</p>
            </div>
          </motion.div>
          <motion.div
            className="relative h-80 rounded-lg overflow-hidden editorial-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/images/awards.jpeg"
              alt="Medical excellence awards"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 md:p-4">
              <p className="text-white font-bold text-xs md:text-sm">Excellence in Healthcare</p>
            </div>
          </motion.div>
          <motion.div
            className="relative h-80 rounded-lg overflow-hidden editorial-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Image
              src="/images/rathi-camps.jpeg"
              alt="Community health camps"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 md:p-4">
              <p className="text-white font-bold text-xs md:text-sm">Community Health Camps</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-4 font-headline">Our Community Impact</h2>
          <p className="text-on-surface-variant text-lg mb-12">
            Serving the community through medical camps, health awareness programs, and quality healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
          <motion.div
            className="relative h-48 md:h-64 rounded-lg overflow-hidden editorial-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/camps.jpeg"
              alt="Medical camps by Rathi Hospital"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="relative h-64 rounded-lg overflow-hidden editorial-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Image
              src="/images/awards.jpeg"
              alt="Awards and recognition"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="relative h-64 rounded-lg overflow-hidden editorial-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/images/hospital-building.jpeg"
              alt="Rathi Hospital facility"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-3 md:mb-4 font-headline">Visit Us</h2>
          <p className="text-on-surface-variant text-sm md:text-lg px-4">
            HIG-6, Agra Road, Vikas Nagar, Aligarh, Uttar Pradesh – 202001
          </p>
        </div>

        <div className="bg-surface-container-low rounded-lg overflow-hidden editorial-shadow h-64 md:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4730.657799501896!2d78.07240327547285!3d27.861268876094663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a37074f0a231%3A0xece9f1e7e6fbdadd!2sRathi%20Hospital!5e1!3m2!1sen!2sin!4v1776570156470!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  )
}
