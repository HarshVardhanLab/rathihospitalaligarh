'use client'

import { motion } from 'framer-motion'
import DepartmentCard from '@/components/DepartmentCard'
import { Heart, Bone, Activity, Ear, Scissors, Stethoscope, Droplet, Pizza, Baby, Sparkles, Brain, Eye } from 'lucide-react'

export default function DepartmentsPage() {
  const departments = [
    {
      id: 'gynaecology',
      icon: Heart,
      title: 'Gynaecology & Obstetrics',
      description: 'Dedicated maternity wing providing advanced prenatal, childbirth, and postnatal care with compassion and expertise.',
      treatments: ['Antenatal Care', 'High-Risk Pregnancy', 'Normal Delivery', 'C-Section', 'Infertility Treatment']
    },
    {
      id: 'orthopaedics',
      icon: Bone,
      title: 'Orthopaedics & Trauma',
      description: 'Expert solutions for bone, joint, and spine conditions, including advanced trauma and joint replacement surgeries.',
      treatments: ['Joint Replacement', 'Trauma Care', 'Fracture Management', 'Spine Surgery', 'Sports Injuries']
    },
    {
      id: 'cardiology',
      icon: Activity,
      title: 'Cardiology',
      description: 'State-of-the-art diagnostic and interventional heart care focused on restoring cardiovascular health and longevity.',
      treatments: ['ECG & Echo', 'Stress Testing', 'Angiography', 'Heart Disease Management', 'Cardiac Rehabilitation']
    },
    {
      id: 'ent',
      icon: Ear,
      title: 'ENT (Ear, Nose & Throat)',
      description: 'Comprehensive care for ear, nose, and throat disorders by the leading ENT specialist Aligarh recommends.',
      treatments: ['Sinus Surgery', 'Audiology', 'Tonsillectomy', 'Hearing Tests', 'Voice Disorders']
    },
    {
      id: 'general-surgery',
      icon: Scissors,
      title: 'General Surgery',
      description: 'Advanced surgical interventions ranging from minimally invasive procedures to complex general surgeries.',
      treatments: ['Laparoscopy', 'Hernia Repair', 'Appendectomy', 'Gallbladder Surgery', 'Thyroid Surgery']
    },
    {
      id: 'general-medicine',
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Holistic management of chronic and acute adult illnesses with a focus on preventive healthcare and wellness.',
      treatments: ['Diabetes Management', 'Hypertension', 'Fever Treatment', 'Health Checkups', 'Chronic Disease Care']
    },
    {
      id: 'urology',
      icon: Droplet,
      title: 'Urology',
      description: 'Specialized treatment for urinary tract conditions and male reproductive health issues using modern diagnostics.',
      treatments: ['Stone Removal', 'Kidney Care', 'Prostate Treatment', 'UTI Management', 'Dialysis']
    },
    {
      id: 'gastroenterology',
      icon: Pizza,
      title: 'Gastroenterology',
      description: 'Comprehensive management of digestive system disorders including liver, gallbladder, and pancreatic health.',
      treatments: ['Endoscopy', 'Liver Clinic', 'Colonoscopy', 'Acid Reflux', 'IBS Treatment']
    },
    {
      id: 'paediatrics',
      icon: Baby,
      title: 'Paediatrics',
      description: 'Compassionate medical care for infants, children, and adolescents, prioritizing growth and developmental wellness.',
      treatments: ['Vaccination', 'Neonatal Care', 'Growth Monitoring', 'Child Nutrition', 'Pediatric Emergencies']
    },
    {
      id: 'dermatology',
      icon: Sparkles,
      title: 'Dermatology',
      description: 'Expert dermatological services for skin, hair, and nail health, combining clinical excellence with aesthetic care.',
      treatments: ['Acne Treatment', 'Skin Biopsy', 'Hair Loss', 'Eczema Care', 'Cosmetic Procedures']
    },
    {
      id: 'neurology',
      icon: Brain,
      title: 'Neurology',
      description: 'Specialized care for disorders of the nervous system, including the brain, spinal cord, and peripheral nerves.',
      treatments: ['Stroke Management', 'EEG', 'Epilepsy Care', 'Migraine Treatment', 'Parkinson\'s Disease']
    },
    {
      id: 'ophthalmology',
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Advanced eye care services focusing on vision preservation, diagnostic examinations, and surgical solutions.',
      treatments: ['Cataract Surgery', 'Glaucoma', 'Retina Care', 'Eye Checkups', 'LASIK Consultation']
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-surface-container-low py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-3 md:px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase mb-3 md:mb-4">
                Centers of Clinical Excellence
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-on-background font-headline leading-tight tracking-tighter">
                Specialized Care for Every Life.
              </h1>
            </motion.div>
            <motion.div
              className="max-w-md pb-2 md:pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-on-surface-variant text-sm md:text-lg leading-relaxed">
                From being a premier pregnancy hospital Aligarh trusts to housing top ENT specialist Aligarh residents rely on, we offer comprehensive medical expertise across twelve distinct departments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {departments.map((dept, index) => (
            <DepartmentCard
              key={dept.id}
              id={dept.id}
              icon={dept.icon}
              title={dept.title}
              description={dept.description}
              treatments={dept.treatments}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <motion.div
            className="lg:col-span-8 bg-primary rounded-lg p-8 md:p-12 text-white relative overflow-hidden group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-extrabold font-headline mb-4 md:mb-6 tracking-tight">
                Experience Restorative <br />Healthcare Today.
              </h2>
              <p className="text-primary-fixed-dim text-sm md:text-lg mb-6 md:mb-10 max-w-lg leading-relaxed">
                Connect with Aligarh's most respected medical team. We're here to guide you through every step of your health journey.
              </p>
              <a
                href="/appointment"
                className="inline-block px-6 md:px-8 py-3 md:py-4 bg-white text-primary rounded-full font-bold uppercase tracking-widest text-xs shadow-lg hover:shadow-primary-container/20 active:scale-95 transition-all"
              >
                Request Your Consultation
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
            <motion.div
              className="bg-tertiary-container p-6 md:p-8 rounded-lg flex-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-headline font-bold text-on-tertiary-container mb-2 text-sm md:text-base">Emergency Care</h4>
              <p className="text-xs md:text-sm text-on-tertiary-container/80 mb-4 md:mb-6">
                24/7 dedicated emergency unit for immediate medical attention.
              </p>
              <a href="tel:05712410992" className="text-xl md:text-2xl font-black text-on-tertiary-container">
                0571-241-0992
              </a>
            </motion.div>

            <motion.div
              className="bg-surface-container-high p-6 md:p-8 rounded-lg flex-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-headline font-bold text-on-surface mb-2 text-sm md:text-base">OPD Schedule</h4>
              <p className="text-xs md:text-sm text-on-surface-variant mb-4 md:mb-6">
                View visiting hours for our specialists across all departments.
              </p>
              <a href="/opd" className="text-primary font-bold text-xs md:text-sm inline-flex items-center gap-2">
                View Schedule →
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
