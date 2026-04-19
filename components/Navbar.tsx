'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/departments', label: 'Departments' },
    { href: '/doctors', label: 'Doctors' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]
  
  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm shadow-emerald-900/5">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold tracking-tighter text-emerald-900 font-headline">
          Rathi Hospital
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors ${
                pathname === link.href
                  ? 'text-emerald-700 font-bold border-b-2 border-emerald-500 pb-1'
                  : 'text-slate-600 hover:text-emerald-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <Link
            href="/opd"
            className="hidden lg:block text-emerald-600 font-semibold px-4 py-2 hover:bg-emerald-50 rounded-full transition-all active:scale-95"
          >
            OPD Schedule
          </Link>
          <Link
            href="/appointment"
            className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Book Appointment
          </Link>
        </div>
      </nav>
    </header>
  )
}
