'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Phone, CheckCircle, Star, ArrowRight, Heart, Users } from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[700px] md:min-h-[870px] flex items-center px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hospital-building.jpeg"
            alt="Rathi Hospital Building"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Mobile: stronger overlay for text readability, Desktop: lighter overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 to-transparent md:from-white/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl bg-white/75 p-6 md:p-8 rounded-2xl shadow-lg">
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-primary-container/40 text-primary font-semibold text-xs md:text-sm mb-4 md:mb-6 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              BEST HOSPITAL IN ALIGARH
            </motion.span>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tighter mb-6 md:mb-8 font-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Excellence in <br />
              <span className="text-primary">Healthcare</span>
            </motion.h1>
            
            <motion.p
              className="text-base md:text-lg text-on-surface-variant mb-8 md:mb-10 leading-relaxed max-w-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Rathi Hospital combines restorative medical expertise with compassionate care to provide Aligarh's most trusted multispeciality clinical environment.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/appointment"
                className="bg-primary text-on-primary px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base tracking-wide flex items-center justify-center gap-2 editorial-shadow active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                Book Appointment
              </Link>
              <a
                href="tel:05712410992"
                className="bg-surface-container-lowest text-on-surface px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base flex items-center justify-center gap-2 editorial-shadow active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-error" />
                0571-241-0992
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-8 text-center md:border-r border-outline-variant/20">
            <div className="text-primary text-3xl font-extrabold mb-1 font-headline">24/7</div>
            <div className="text-on-surface-variant text-sm font-medium uppercase tracking-widest">Emergency</div>
          </div>
          <div className="p-8 text-center md:border-r border-outline-variant/20">
            <div className="text-tertiary text-3xl font-extrabold mb-1 flex justify-center items-center gap-1 font-headline">
              4.0<Star className="w-5 h-5 fill-current" />
            </div>
            <div className="text-on-surface-variant text-sm font-medium uppercase tracking-widest">Rating</div>
          </div>
          <div className="p-8 text-center md:border-r border-outline-variant/20">
            <div className="text-primary text-3xl font-extrabold mb-1 font-headline">95+</div>
            <div className="text-on-surface-variant text-sm font-medium uppercase tracking-widest">Reviews</div>
          </div>
          <div className="p-8 text-center">
            <div className="text-primary text-3xl font-extrabold mb-1 font-headline">Expert</div>
            <div className="text-on-surface-variant text-sm font-medium uppercase tracking-widest">Care</div>
          </div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="aspect-square rounded-lg overflow-hidden editorial-shadow bg-surface-container-high relative">
            <Image
              src="/images/medical-care.jpeg"
              alt="Medical care at Rathi Hospital"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 p-8 bg-primary text-on-primary rounded-lg editorial-shadow hidden md:block">
            <div className="text-4xl font-bold mb-2 font-headline">25+</div>
            <div className="text-sm opacity-90 leading-tight">Years of Trusted Healthcare in Aligarh.</div>
          </div>
        </motion.div>
        
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface leading-tight font-headline">
            Restorative Excellence. <br />Trusted multispeciality hospital in Aligarh.
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Rathi Hospital has been a cornerstone of Aligarh's medical landscape, providing advanced diagnostics and specialized treatments. Our philosophy centers on combining clinical precision with a healing environment that prioritizes patient comfort and rapid recovery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Advanced ICU Units',
              'Modern Pathology Lab',
              '24/7 Pharmacy Service',
              'In-house Imaging'
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-primary w-6 h-6" />
                <span className="font-semibold">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Departments Bento Grid */}
      <section className="bg-surface-container-low py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-4 font-headline">Specialized Departments</h2>
              <p className="text-on-surface-variant max-w-xl">Focused expertise across all major medical disciplines, ensuring comprehensive family care.</p>
            </div>
            <Link
              href="/departments"
              className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group"
            >
              View All Departments <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Gynaecology - Large Card */}
            <motion.div
              className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-lg editorial-shadow bg-surface-container-lowest h-[400px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              <div className="relative h-full p-10 flex flex-col justify-end">
                <Heart className="text-primary w-12 h-12 mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-extrabold mb-4 font-headline">Gynaecology & Obstetrics</h3>
                <p className="text-on-surface-variant max-w-sm mb-6">Comprehensive care for women's health, from adolescence to menopause and maternity.</p>
                <Link
                  href="/departments#gynaecology"
                  className="w-fit text-primary font-bold uppercase text-xs tracking-widest bg-white px-6 py-3 rounded-full shadow-sm"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
            
            {/* Orthopaedics */}
            <motion.div
              className="group relative overflow-hidden rounded-lg editorial-shadow bg-surface-container-lowest h-[400px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="p-10 h-full flex flex-col">
                <Users className="text-primary w-12 h-12 mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-extrabold mb-4 font-headline">Orthopaedics</h3>
                <p className="text-on-surface-variant mb-auto">Specialized bone, joint, and spine care including advanced trauma surgery.</p>
                <div className="mt-6 flex items-center gap-2 text-primary font-bold">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
            
            {/* Cardiology */}
            <motion.div
              className="group relative overflow-hidden rounded-lg editorial-shadow bg-surface-container-lowest h-[400px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-10 h-full flex flex-col">
                <Heart className="text-primary w-12 h-12 mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-extrabold mb-4 font-headline">Cardiology</h3>
                <p className="text-on-surface-variant mb-auto">Heart wellness monitoring and specialized cardiovascular treatments for all ages.</p>
                <div className="mt-6 flex items-center gap-2 text-primary font-bold">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        {/* IMA Award Highlight */}
        <motion.div
          className="mb-16 bg-gradient-to-r from-tertiary-container to-tertiary-fixed p-8 md:p-12 rounded-2xl editorial-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/ima-award.jpeg"
                alt="IMA UP Award - Dr. Asha Rathi"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-4">
                <span className="text-on-tertiary-container font-bold text-sm">🏆 AWARD WINNER</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 font-headline text-on-tertiary-container">
                IMA Uttar Pradesh Award
              </h3>
              <p className="text-on-tertiary-container/90 text-lg mb-6 leading-relaxed">
                Dr. Asha Rathi has been honored with the prestigious Indian Medical Association (IMA) Uttar Pradesh Award for her exceptional work and dedication in the field of Gynaecology and Obstetrics.
              </p>
              <Link
                href="/doctors"
                className="inline-block bg-white text-tertiary-container px-8 py-3 rounded-full font-bold active:scale-95 transition-all"
              >
                Meet Dr. Asha Rathi
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-4 font-headline">Meet Our Experts</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Headed by pioneers Dr. Asha Rathi and Dr. G.M. Rathi, our clinical team brings decades of combined expertise to your care.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Dr. G.M. Rathi */}
          <motion.div
            className="flex flex-col gap-8 bg-surface-container-lowest p-8 rounded-lg editorial-shadow border border-outline-variant/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-72 rounded-lg overflow-hidden bg-surface-container-high relative">
              <Image
                src="/images/dr-gm-rathi.png"
                alt="Dr. G.M. Rathi"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Senior Physician</div>
              <h3 className="text-3xl font-extrabold text-on-surface mb-3 font-headline">Dr. G.M. Rathi</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">Renowned for clinical diagnostics and specialized care, ensuring patient wellness through evidence-based medicine for 30+ years.</p>
              <div className="flex gap-4">
                <Link
                  href="/appointment"
                  className="bg-primary-container/20 text-primary px-6 py-2 rounded-full font-bold text-sm active:scale-95 transition-all"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Dr. Asha Rathi */}
          <motion.div
            className="flex flex-col gap-8 bg-surface-container-lowest p-8 rounded-lg editorial-shadow border border-outline-variant/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-full h-72 rounded-lg overflow-hidden bg-surface-container-high relative">
              <Image
                src="/images/dr-asha-rathi.png"
                alt="Dr. Asha Rathi"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Senior Gynaecologist</div>
              <h3 className="text-3xl font-extrabold text-on-surface mb-3 font-headline">Dr. Asha Rathi</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">Dedicated to providing maternal healthcare and surgical gynaecological solutions for over 28 years in Aligarh.</p>
              <div className="flex gap-4">
                <Link
                  href="/appointment"
                  className="bg-primary-container/20 text-primary px-6 py-2 rounded-full font-bold text-sm active:scale-95 transition-all"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Dr. Rubina Rathi */}
          <motion.div
            className="flex flex-col gap-8 bg-surface-container-lowest p-8 rounded-lg editorial-shadow border border-outline-variant/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-full h-72 rounded-lg overflow-hidden bg-surface-container-high relative">
              <Image
                src="/images/dr-rubina-rathi.png"
                alt="Dr. Rubina Rathi"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Chest Specialist</div>
              <h3 className="text-3xl font-extrabold text-on-surface mb-3 font-headline">Dr. Rubina Rathi</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">Expert in respiratory medicine and pulmonary care, providing specialized treatment for chest and lung conditions.</p>
              <div className="flex gap-4">
                <Link
                  href="/appointment"
                  className="bg-primary-container/20 text-primary px-6 py-2 rounded-full font-bold text-sm active:scale-95 transition-all"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-primary-fixed-dim text-6xl mb-8">"</div>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-primary mb-12 italic leading-snug font-headline">
                "The medical attention and hospitality at Rathi Hospital were exceptional. From the reception to the doctors, everyone was professional and comforting. Truly the best healthcare experience in Aligarh."
              </h2>
              <div className="flex flex-col items-center">
                <div className="text-primary-fixed-dim font-bold text-xl mb-1">Rohan Sharma</div>
                <div className="text-on-primary/70 text-sm tracking-widest uppercase">Satisfied Patient</div>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              { text: "Excellent maternity care. Dr. Asha Rathi is incredibly knowledgeable.", author: "Priya Verma" },
              { text: "Modern facilities and very clean environment. Highly recommended.", author: "Amit K." },
              { text: "Emergency services were quick and effective. Life-saving care.", author: "Suresh Gupta" }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-left border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex text-tertiary-fixed-dim mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-on-primary/90 mb-6 italic">"{testimonial.text}"</p>
                <div className="text-on-primary font-bold">{testimonial.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
