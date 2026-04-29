
"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Clock, Star, Sparkles, Zap, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const SERVICES_LIST = [
  {
    title: "Keratin Treatment",
    problem: "Struggling with frizzy, unmanageable hair?",
    solution: "Our Keratin treatment deep-conditions and smooths your hair for weeks.",
    price: "₹3,500 – ₹8,000",
    duration: "2 – 3 Hours",
    img: PlaceHolderImages.find(i => i.id === "keratin-treatment"),
    details: ["Eliminates 90% frizz", "Adds intense shine", "Long-lasting results", "Safe for colored hair"]
  },
  {
    title: "Microblading",
    problem: "Tired of drawing your eyebrows every morning?",
    solution: "Get perfectly shaped, natural-looking semi-permanent brows.",
    price: "₹8,000 – ₹15,000",
    duration: "2 Hours",
    img: PlaceHolderImages.find(i => i.id === "microblading"),
    details: ["Natural hair strokes", "Custom pigment matching", "Lasts 1-2 years", "Virtually painless"]
  },
  {
    title: "Lash Extensions",
    problem: "Wish for longer, fuller lashes without mascara?",
    solution: "Enhance your eyes with our premium, lightweight extensions.",
    price: "₹2,500 – ₹6,000",
    duration: "1.5 Hours",
    img: PlaceHolderImages.find(i => i.id === "lash-extensions"),
    details: ["Classic or Volume options", "Safe adhesive", "Customized styling", "Lightweight feel"]
  },
  {
    title: "Hair Color",
    problem: "Bored with your current hair look?",
    solution: "From subtle highlights to bold transformations, we do it all.",
    price: "₹2,000 – ₹10,000",
    duration: "Varies",
    img: PlaceHolderImages.find(i => i.id === "hair-color"),
    details: ["Global coloring", "Balayage experts", "Moisture-lock formulas", "Trend-based styling"]
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-card py-24 border-b">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-headline">OUR PREMIUM SERVICES</h1>
            <p className="text-xl text-muted-foreground font-accent">Crafted Specifically for Your Beauty Needs</p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 space-y-32">
        {SERVICES_LIST.map((service, i) => (
          <div key={i} className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group">
                  <Image src={service.img?.imageUrl || ""} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 flex gap-4">
                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {service.duration}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-primary font-bold tracking-[0.2em] uppercase text-sm">
                    <Sparkles className="w-5 h-5" /> Professional Solution
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold font-headline">{service.title}</h2>
                </div>

                <div className="space-y-4 bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
                  <p className="text-muted-foreground italic">"{service.problem}"</p>
                  <p className="text-lg font-semibold text-foreground">{service.solution}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {service.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <Zap className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm font-medium">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Starting From</p>
                    <p className="text-3xl font-bold text-primary">{service.price}</p>
                  </div>
                  <Button asChild size="lg" className="w-full sm:w-auto px-12 shimmer-button bg-primary text-white">
                    <Link href={`/book?service=${service.title.toLowerCase().replace(' ', '-')}`}>Book Now <ArrowRight className="w-5 h-5 ml-2" /></Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <ShieldCheck className="w-12 h-12 text-accent mx-auto" />
            <h3 className="text-xl font-bold">Safe & Hygienic</h3>
            <p className="opacity-70 text-sm">We strictly follow all safety protocols and use sterilized tools for every client.</p>
          </div>
          <div className="space-y-4">
            <Star className="w-12 h-12 text-accent mx-auto" />
            <h3 className="text-xl font-bold">Premium Quality</h3>
            <p className="opacity-70 text-sm">Only international standard products from brands you know and trust.</p>
          </div>
          <div className="space-y-4">
            <Sparkles className="w-12 h-12 text-accent mx-auto" />
            <h3 className="text-xl font-bold">Expert Care</h3>
            <p className="opacity-70 text-sm">All treatments performed by certified professionals with years of experience.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
