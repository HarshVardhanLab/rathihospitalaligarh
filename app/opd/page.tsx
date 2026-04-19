'use client'

import { motion } from 'framer-motion'
import { Clock, Calendar, Phone, AlertCircle } from 'lucide-react'

export default function OPDPage() {
  const opdSchedule = [
    {
      department: 'Gynaecology & Obstetrics',
      doctor: 'Dr. Asha Rathi',
      timing: '11:00 AM - 3:00 PM',
      days: 'Monday - Saturday',
      fee: '₹400'
    },
    {
      department: 'General Medicine',
      doctor: 'Dr. G.M. Rathi',
      timing: '10:00 AM - 2:00 PM',
      days: 'Monday - Saturday',
      fee: '₹300'
    },
    {
      department: 'Orthopaedics',
      doctor: 'Visiting Specialist',
      timing: 'By Appointment',
      days: 'Tuesday, Thursday, Saturday',
      fee: 'Contact for details'
    },
    {
      department: 'Cardiology',
      doctor: 'Visiting Specialist',
      timing: 'By Appointment',
      days: 'Monday, Wednesday, Friday',
      fee: 'Contact for details'
    },
    {
      department: 'ENT',
      doctor: 'Visiting Specialist',
      timing: 'By Appointment',
      days: 'Wednesday, Saturday',
      fee: 'Contact for details'
    },
    {
      department: 'General Surgery',
      doctor: 'Visiting Specialist',
      timing: 'By Appointment',
      days: 'Monday - Friday',
      fee: 'Contact for details'
    },
    {
      department: 'Paediatrics',
      doctor: 'Visiting Specialist',
      timing: 'By Appointment',
      days: 'Daily',
      fee: 'Contact for details'
    },
    {
      department: 'Dermatology',
      doctor: 'Visiting Specialist',
      timing: 'By Appointment',
      days: 'Tuesday, Friday',
      fee: 'Contact for details'
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
              OPD Schedule
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-on-background font-headline leading-tight tracking-tighter mb-6">
              Outpatient Department Timings
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              View our OPD schedule and plan your visit. We recommend booking an appointment in advance for a better experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="max-w-7xl mx-auto px-6 py-6 md:py-8">
        <motion.div
          className="bg-tertiary-container p-4 md:p-6 rounded-lg flex items-start gap-3 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-on-tertiary-container shrink-0 mt-0.5 md:mt-1" />
          <div>
            <h3 className="font-bold text-on-tertiary-container mb-1 md:mb-2 font-headline text-sm md:text-base">24/7 Emergency Services Available</h3>
            <p className="text-on-tertiary-container/80 text-xs md:text-sm">
              Our emergency department is open round the clock for immediate medical attention. Call 0571-241-0992 for emergencies.
            </p>
          </div>
        </motion.div>
      </section>

      {/* OPD Schedule Table */}
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="bg-surface-container-lowest rounded-lg editorial-shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead className="bg-surface-container-high">
                <tr>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-on-surface font-headline">Department</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-on-surface font-headline">Doctor</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-on-surface font-headline">Timing</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-on-surface font-headline hidden sm:table-cell">Days</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-on-surface font-headline">Fee</th>
                </tr>
              </thead>
              <tbody>
                {opdSchedule.map((schedule, index) => (
                  <motion.tr
                    key={index}
                    className="border-t border-outline-variant/20"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <td className="px-4 md:px-6 py-3 md:py-4 font-semibold text-on-surface text-xs md:text-base">{schedule.department}</td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-on-surface-variant text-xs md:text-base">{schedule.doctor}</td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-on-surface-variant text-xs md:text-base">{schedule.timing}</td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-on-surface-variant text-xs md:text-base hidden sm:table-cell">{schedule.days}</td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-primary font-semibold text-xs md:text-base">{schedule.fee}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            className="bg-surface-container-low p-6 md:p-8 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Clock className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-headline">Important Notes</h3>
            <ul className="space-y-2 md:space-y-3 text-on-surface-variant text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>OPD timings may vary on public holidays</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Visiting specialists schedule may change, please call to confirm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>We recommend booking appointments in advance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Please arrive 15 minutes before your appointment time</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-primary text-on-primary p-6 md:p-8 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-headline">Book Your Appointment</h3>
            <p className="mb-4 md:mb-6 text-on-primary/90 text-sm md:text-base">
              Schedule your visit in advance for a hassle-free experience. Our team will confirm your appointment shortly.
            </p>
            <div className="flex flex-col gap-2 md:gap-3">
              <a
                href="/appointment"
                className="bg-white text-primary px-5 md:px-6 py-2.5 md:py-3 rounded-full font-bold text-sm md:text-base text-center active:scale-95 transition-all"
              >
                Book Online
              </a>
              <a
                href="tel:05712410992"
                className="bg-primary-container text-on-primary px-5 md:px-6 py-2.5 md:py-3 rounded-full font-bold text-sm md:text-base text-center active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Call: 0571-241-0992
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
