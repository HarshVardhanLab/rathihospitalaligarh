import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import MobileBottomNav from '@/components/MobileBottomNav'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rathi Hospital | Best Multispeciality Hospital in Aligarh',
  description: 'Excellence in Healthcare - Rathi Hospital is the best multispeciality hospital in Aligarh offering 24/7 emergency care, expert doctors, and advanced medical facilities.',
  keywords: 'best hospital in Aligarh, multispeciality hospital Aligarh, ENT specialist Aligarh, pregnancy hospital Aligarh, 24 hour hospital Aligarh, Rathi Hospital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="bg-background text-on-background font-body antialiased pb-20 md:pb-0">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <MobileBottomNav />
      </body>
    </html>
  )
}
