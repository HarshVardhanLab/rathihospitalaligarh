'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Calendar, Stethoscope, Phone, Menu, Info, Briefcase, Users } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileBottomNav() {
  const pathname = usePathname()
  const [showMenu, setShowMenu] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true)
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setShowMenu(false) // Close menu when hiding navbar
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])
  
  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/about', icon: Info, label: 'About' },
    { href: '/departments', icon: Briefcase, label: 'Departments' },
    { href: '/doctors', icon: Users, label: 'Doctors' },
    { href: '/services', icon: Stethoscope, label: 'Services' },
    { href: '/contact', icon: Phone, label: 'Contact' },
  ]

  const menuItems = [
    { href: '/appointment', label: 'Book Appointment' },
    { href: '/opd', label: 'OPD Schedule' },
  ]

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMenu(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Menu Popup */}
      <AnimatePresence>
        {showMenu && isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 left-6 right-6 bg-surface-container-lowest rounded-2xl shadow-2xl z-50 md:hidden overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-outline-variant/20">
                <h3 className="font-bold text-lg font-headline">Quick Links</h3>
                <button
                  onClick={() => setShowMenu(false)}
                  className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setShowMenu(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      pathname === item.href
                        ? 'bg-primary text-on-primary'
                        : 'hover:bg-surface-container-high text-on-surface'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-outline-variant/20">
                <a
                  href="tel:05712410992"
                  className="block w-full bg-error text-white px-4 py-3 rounded-full font-bold text-center active:scale-95 transition-all"
                >
                  Emergency: 0571-241-0992
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : 100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-xl border-t border-outline-variant/20 safe-area-bottom"
      >
        <div className="flex justify-around items-center px-1 py-2 overflow-x-auto scrollbar-hide">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setShowMenu(false)}
                className="relative flex flex-col items-center justify-center min-w-[50px] flex-shrink-0 group"
              >
                <motion.div
                  className={`flex flex-col items-center justify-center ${
                    isActive ? 'text-primary' : 'text-on-surface-variant'
                  }`}
                  whileTap={{ scale: 0.9 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -top-1 w-10 h-10 bg-primary/10 rounded-full"
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    />
                  )}
                  <Icon 
                    className={`w-5 h-5 mb-0.5 relative z-10 ${
                      isActive ? 'stroke-[2.5]' : 'stroke-[2]'
                    }`}
                  />
                  <span className={`text-[9px] font-medium tracking-wide relative z-10 ${
                    isActive ? 'font-bold' : ''
                  }`}>
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            )
          })}
          
          {/* Menu Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="relative flex flex-col items-center justify-center min-w-[50px] flex-shrink-0"
          >
            <motion.div
              className={`flex flex-col items-center justify-center ${
                showMenu ? 'text-primary' : 'text-on-surface-variant'
              }`}
              whileTap={{ scale: 0.9 }}
            >
              {showMenu && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-1 w-10 h-10 bg-primary/10 rounded-full"
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                />
              )}
              <Menu 
                className={`w-5 h-5 mb-0.5 relative z-10 ${
                  showMenu ? 'stroke-[2.5]' : 'stroke-[2]'
                }`}
              />
              <span className={`text-[9px] font-medium tracking-wide relative z-10 ${
                showMenu ? 'font-bold' : ''
              }`}>
                More
              </span>
            </motion.div>
          </button>
        </div>
      </motion.nav>
    </>
  )
}
