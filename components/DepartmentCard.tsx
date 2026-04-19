'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

interface DepartmentCardProps {
  icon: LucideIcon
  title: string
  description: string
  treatments: string[]
  id?: string
}

export default function DepartmentCard({ icon: Icon, title, description, treatments, id }: DepartmentCardProps) {
  return (
    <motion.div
      id={id}
      className="group bg-surface-container-lowest rounded-lg p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
      
      <Icon className="text-primary w-10 h-10 mb-6 relative z-10" strokeWidth={1.5} />
      
      <h3 className="text-2xl font-bold font-headline mb-3 text-on-surface relative z-10">{title}</h3>
      
      <p className="text-on-surface-variant text-sm mb-6 leading-relaxed relative z-10">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-8 relative z-10">
        {treatments.map((treatment, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs rounded-full"
          >
            {treatment}
          </span>
        ))}
      </div>
      
      <a
        href={`/departments#${id}`}
        className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline underline-offset-4 relative z-10"
      >
        View Details <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  )
}
