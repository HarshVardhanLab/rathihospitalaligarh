'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface DoctorCardProps {
  name: string
  specialty: string
  experience: string
  fee: string
  opdTiming: string
  image?: string
}

export default function DoctorCard({ name, specialty, experience, fee, opdTiming, image }: DoctorCardProps) {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-8 bg-surface-container-lowest p-8 rounded-lg editorial-shadow border border-outline-variant/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full md:w-56 h-72 rounded-lg overflow-hidden shrink-0 bg-surface-container-high relative">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        )}
      </div>
      
      <div className="flex flex-col justify-center flex-1">
        <div className="text-primary font-bold text-sm tracking-widest uppercase mb-2">{specialty}</div>
        <h3 className="text-3xl font-extrabold text-on-surface mb-3 font-headline">{name}</h3>
        
        <div className="space-y-2 mb-6">
          <p className="text-on-surface-variant leading-relaxed">
            <span className="font-semibold text-on-surface">Experience:</span> {experience}
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            <span className="font-semibold text-on-surface">Consultation Fee:</span> {fee}
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            <span className="font-semibold text-on-surface">OPD Timing:</span> {opdTiming}
          </p>
        </div>
        
        <div className="flex gap-4">
          <Link
            href="/appointment"
            className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-sm active:scale-95 transition-all"
          >
            Book Appointment
          </Link>
          <button className="bg-primary-container/20 text-primary px-6 py-2 rounded-full font-bold text-sm active:scale-95 transition-all">
            View Profile
          </button>
        </div>
      </div>
    </motion.div>
  )
}
