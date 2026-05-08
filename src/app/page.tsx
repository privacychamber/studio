"use client"

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  ArrowRight, Check, Star, Instagram, Calendar, 
  GraduationCap, MapPin, ShieldCheck, User, 
  Sparkles, Heart, Phone, Loader2 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BeforeAfterSlider } from "@/components/before-after-slider"

export default function HomePage() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(db => {
        setData(db)
        setLoading(false)
      })
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Loader2 className="w-12 h-12 animate-spin text-primary" />
    </div>
  )

  return (
    <div className="overflow-hidden bg-background font-body">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center">
        {/* Organic Background Shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[120%] bg-secondary/50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[80%] bg-primary/5 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-2xl text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Luxury Beauty Salon & Academy
              </motion.div>
              <motion.p variants={fadeInUp} className="font-accent text-accent text-3xl md:text-5xl mb-4 font-bold">
                Enhance. Elevate. Empower.
              </motion.p>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[6.5rem] font-headline font-bold mb-8 leading-[0.95] tracking-tight text-foreground">
                FLAWLESS <br />
                <span className="text-primary italic">BEAUTY</span> <br />
                STARTS HERE
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Experience world-class permanent makeup and hair transformations 
                delivered with precision and luxury.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center lg:justify-start gap-5 mb-16">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-full px-10 h-14 text-sm font-bold uppercase tracking-widest shadow-2xl shadow-primary/30 border-none transition-transform hover:scale-105 active:scale-95">
                  <Link href="/book"><Calendar className="w-5 h-5 mr-2" /> Book Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/20 hover:border-primary bg-white/50 backdrop-blur-sm text-foreground hover:bg-primary/5 rounded-full px-10 h-14 text-sm font-bold uppercase tracking-widest transition-all">
                  <Link href="/academy"><GraduationCap className="w-5 h-5 mr-2 text-primary" /> Explore Courses</Link>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-primary/10">
                {[
                  { label: "Happy Clients", value: "1000+", icon: User },
                  { label: "Certified Courses", value: "Expert", icon: GraduationCap },
                  { label: "Premium Services", value: "Luxury", icon: Sparkles },
                  { label: "Safety First", value: "Hygienic", icon: ShieldCheck }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center lg:items-start gap-1">
                    <stat.icon className="w-5 h-5 text-accent mb-2" />
                    <span className="text-xl font-bold text-foreground">{stat.value}</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image & Floating Cards */}
            <div className="relative h-[600px] lg:h-[800px] w-full flex items-center justify-center lg:justify-end">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                 whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                 transition={{ duration: 1.2 }}
                 className="relative w-full max-w-[450px] lg:max-w-[550px] h-[90%] rounded-full overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-[12px] border-white z-10"
               >
                 <Image
                    src="https://images.unsplash.com/photo-1596415901403-22390175973f?auto=format&fit=crop&q=80&w=800"
                    alt="Luxury Beauty Model"
                    fill
                    className="object-cover"
                    priority
                  />
               </motion.div>

               {/* Glassmorphism Floating Cards */}
               <div className="absolute left-0 lg:-left-20 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-20">
                  {data.transformations.slice(0, 3).map((item: any, i: number) => (
                    <motion.div 
                      key={i}
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.2), duration: 0.8 }}
                      className="bg-white/70 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white/50 flex items-center gap-4 w-[180px] md:w-[220px] transition-transform hover:scale-105"
                    >
                      <div className="w-12 h-12 rounded-2xl overflow-hidden relative border-2 border-primary/20">
                        <Image src={item.afterImage} alt={item.category} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-0.5">{item.category}</p>
                        <p className="text-xs font-bold text-foreground">FLAWLESS RESULTS</p>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Comparison Slider */}
      <section className="py-32 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-primary text-sm font-bold tracking-[0.4em] uppercase mb-4">Real Transformations</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">SEE THE GLAM HOUSE MAGIC</h3>
            <p className="text-muted-foreground font-medium">Drag the slider to compare our high-end transformations. Excellence in every detail.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.transformations.map((item: any, i: number) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <BeforeAfterSlider 
                  beforeImage={item.beforeImage} 
                  afterImage={item.afterImage} 
                  category={item.category} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-20">
            <h2 className="text-primary text-sm font-bold tracking-[0.4em] uppercase mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">LUXURY BEAUTY SERVICES</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.services.map((service: any, i: number) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-none shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(233,30,99,0.1)] transition-all group rounded-3xl bg-white h-full flex flex-col">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image 
                      src={service.imageUrl} 
                      alt={service.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <Button className="w-full bg-white text-black hover:bg-primary hover:text-white rounded-full font-bold uppercase tracking-widest text-[10px]">
                        Book Service
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-8 text-left flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed font-medium">{service.desc}</p>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-primary font-bold text-lg">{service.price}</span>
                      <Link href="/services" className="text-foreground font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 group-hover:text-primary transition-all">
                        KNOW MORE <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy CTA Section */}
      <section className="py-24 bg-nude relative">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-10 lg:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-primary/5">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800" alt="Training" fill className="object-cover" />
                </div>
                <div className="space-y-4 pt-12">
                  <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl">
                    <Image src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800" alt="Practical" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-[3/2] rounded-[2rem] overflow-hidden shadow-xl bg-accent p-6 flex flex-col justify-center text-white">
                    <p className="text-3xl font-bold mb-1">100%</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest">Placement Assistance</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-accent text-sm font-bold tracking-[0.4em] uppercase mb-4">Glam House Academy</h3>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground leading-tight">
                    START YOUR CAREER IN <br />
                    <span className="text-primary italic">BEAUTY INDUSTRY</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {data.courses.map((course: any) => (
                    <Card key={course.id} className="overflow-hidden border-none shadow-xl rounded-3xl bg-secondary/20 hover:bg-secondary/40 transition-colors">
                      <div className="p-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-2">{course.title}</h4>
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">{course.duration}</span>
                        </div>
                        <p className="text-2xl font-bold text-primary mb-4">{course.price}</p>
                        <Button className="w-full bg-foreground text-background hover:bg-primary rounded-full text-[10px] font-bold uppercase tracking-widest py-6">
                          Enroll Now
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="pt-6 flex items-center gap-6">
                   <div className="flex -space-x-4">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden relative">
                           <Image src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Student" fill />
                        </div>
                      ))}
                   </div>
                   <div>
                      <p className="text-sm font-bold text-foreground">Join 500+ Graduated Students</p>
                      <div className="flex items-center gap-1">
                         {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-accent fill-accent" />)}
                         <span className="text-xs text-muted-foreground ml-1">4.9/5 Rating</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto mb-20">
             <h2 className="text-primary text-sm font-bold tracking-[0.4em] uppercase mb-4">Wall of Love</h2>
             <h3 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">WHAT OUR GUESTS SAY</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.testimonials.map((item: any, i: number) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-primary/5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-10 rounded-[3rem] relative flex flex-col items-center pt-20 mt-10 hover:shadow-2xl hover:shadow-primary/5 transition-all"
              >
                <div className="absolute -top-10 w-20 h-20 rounded-full overflow-hidden border-8 border-background shadow-xl">
                  <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                </div>
                <div className="text-primary/20 text-[10rem] font-headline absolute top-0 leading-none pointer-events-none">“</div>
                <div className="flex justify-center mb-6 gap-1">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 text-accent fill-accent" />)}
                </div>
                <p className="text-sm text-foreground/80 text-center font-medium leading-relaxed mb-6 italic">"{item.review}"</p>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-foreground mt-auto">{item.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-background pb-48">
        <div className="container mx-auto px-4">
           <div className="bg-foreground rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
             {/* Abstract Accents */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48" />
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -ml-48 -mb-48" />
             
             <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-7xl font-headline font-bold text-background leading-tight">
                  READY FOR YOUR <br />
                  <span className="text-primary italic">TRANSFORMATION?</span>
                </h2>
                <p className="text-xl text-background/60 max-w-2xl mx-auto font-medium">
                  Experience the ultimate blend of luxury, skill, and care. 
                  Book your session at The Glam House today.
                </p>
                <div className="flex flex-wrap justify-center gap-6 pt-6">
                   <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full h-16 px-12 text-sm font-bold uppercase tracking-widest shadow-2xl transition-transform hover:scale-105 active:scale-95">
                     <a href="https://wa.me/917087657000"><Phone className="w-5 h-5 mr-2" /> Book on WhatsApp</a>
                   </Button>
                   <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-full h-16 px-12 text-sm font-bold uppercase tracking-widest transition-all">
                     <Link href="/book">Schedule Appointment</Link>
                   </Button>
                </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  )
}
