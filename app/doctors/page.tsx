'use client'

import { motion } from 'framer-motion'
import DoctorCard from '@/components/DoctorCard'

export default function DoctorsPage() {
  const doctors = [
    {
      name: 'Dr. G.M. Rathi',
      specialty: 'General Physician',
      experience: '30+ Years',
      fee: '₹300',
      opdTiming: '10:00 AM - 2:00 PM (Mon-Sun)',
      image: '/images/dr-gm-rathi.png'
    },
    {
      name: 'Dr. Asha Rathi',
      specialty: 'Gynaecologist & Obstetrician',
      experience: '28+ Years',
      fee: '₹400',
      opdTiming: '11:00 AM - 3:00 PM (Mon-Sun)',
      image: '/images/dr-asha-rathi.png'
    },
    {
      name: 'Dr. Rubina Rathi',
      specialty: 'Chest Specialist (Pulmonology)',
      experience: '15+ Years',
      fee: '₹350',
      opdTiming: 'By Appointment',
      image: '/images/dr-rubina-rathi.png'
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
              Our Medical Team
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-on-background font-headline leading-tight tracking-tighter mb-6">
              Meet Our Expert Doctors
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Our team of highly qualified and experienced doctors is dedicated to providing you with the best medical care in Aligarh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors List */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialty={doctor.specialty}
              experience={doctor.experience}
              fee={doctor.fee}
              opdTiming={doctor.opdTiming}
              image={doctor.image}
            />
          ))}
        </div>
      </section>

      {/* Visiting Specialists */}
      <section className="bg-surface-container-low py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-4 font-headline">
              Visiting Specialists
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
              We also have visiting specialists for various departments. Please contact us for their schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Orthopaedics',
              'Cardiology',
              'ENT',
              'General Surgery',
              'Urology',
              'Gastroenterology',
              'Paediatrics',
              'Dermatology',
              'Neurology',
              'Ophthalmology'
            ].map((specialty, index) => (
              <motion.div
                key={index}
                className="bg-surface-container-lowest p-6 rounded-lg editorial-shadow text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <h3 className="text-lg font-bold text-primary font-headline mb-2">{specialty}</h3>
                <p className="text-sm text-on-surface-variant">By Appointment</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="tel:05712410992"
              className="inline-block bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-base tracking-wide shadow-lg shadow-primary/20 active:scale-95 transition-all"
            >
              Call for Specialist Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Our Doctors */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-4 font-headline">
            Why Choose Our Doctors
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Highly Qualified',
              description: 'All our doctors are highly qualified with degrees from reputed medical institutions and years of practical experience.'
            },
            {
              title: 'Patient-Centric',
              description: 'Our doctors believe in patient-centric care, taking time to understand your concerns and explain treatment options clearly.'
            },
            {
              title: 'Continuous Learning',
              description: 'Our medical team stays updated with the latest medical advancements through continuous education and training.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-surface-container-lowest p-8 rounded-lg editorial-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3 font-headline text-primary">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
