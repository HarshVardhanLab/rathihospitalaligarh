import Link from 'next/link'
import { Phone, Mail, MapPin, Share2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[3rem] mt-20 bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-16">
        <div className="space-y-6">
          <div className="text-xl font-bold text-emerald-800 font-headline">Rathi Hospital</div>
          <p className="text-slate-500 leading-relaxed">
            Providing high-end medical care with a focus on restorative wellness in the heart of Aligarh.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/rathihospital"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <Share2 className="w-5 h-5" />
            </a>
            <a
              href="https://maps.google.com/?q=HIG-6,+Agra+Road,+Vikas+Nagar,+Aligarh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <MapPin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-on-surface mb-6 font-headline">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-slate-500 hover:text-emerald-500 transition-colors hover:underline underline-offset-4">About Us</Link></li>
            <li><Link href="/services" className="text-slate-500 hover:text-emerald-500 transition-colors hover:underline underline-offset-4">Emergency Care</Link></li>
            <li><Link href="/opd" className="text-slate-500 hover:text-emerald-500 transition-colors hover:underline underline-offset-4">OPD Schedule</Link></li>
            <li><Link href="/appointment" className="text-slate-500 hover:text-emerald-500 transition-colors hover:underline underline-offset-4">Book Appointment</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-on-surface mb-6 font-headline">Departments</h4>
          <ul className="space-y-4">
            <li><Link href="/departments#gynaecology" className="text-slate-500 hover:text-emerald-500 transition-colors">Gynaecology</Link></li>
            <li><Link href="/departments#orthopaedics" className="text-slate-500 hover:text-emerald-500 transition-colors">Orthopaedics</Link></li>
            <li><Link href="/departments#cardiology" className="text-slate-500 hover:text-emerald-500 transition-colors">Cardiology</Link></li>
            <li><Link href="/departments#ent" className="text-slate-500 hover:text-emerald-500 transition-colors">ENT</Link></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-bold text-on-surface mb-6 font-headline">Contact Us</h4>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-primary mt-1" />
            <div className="text-slate-600">
              <a href="tel:05712410992" className="hover:text-primary transition-colors">0571-241-0992</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary mt-1" />
            <div className="text-slate-600">
              <a href="mailto:info@rathihospital.com" className="hover:text-primary transition-colors">info@rathihospital.com</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1" />
            <div className="text-slate-600">
              HIG-6, Agra Road, Vikas Nagar<br />
              Aligarh, UP – 202001
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-200 text-center">
        <p className="text-slate-500 text-sm">© 2024 Rathi Hospital. Dedicated to Restorative Excellence.</p>
      </div>
    </footer>
  )
}
