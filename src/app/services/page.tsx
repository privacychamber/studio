
"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Star, Sparkles, Zap, ShieldCheck, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const SERVICES_LIST = [
  {
    title: "Keratin Treatment",
    problem: "Struggling with frizzy, unmanageable hair?",
    solution: "Our Keratin treatment deep-conditions and smooths your hair for weeks.",
    price: "Starting ₹1,999/-",
    imgUrl: "/images/IMG_1401.JPG.jpeg",
    details: ["Eliminates 90% frizz", "Adds intense shine", "Long-lasting results", "Safe for colored hair"]
  },
  {
    title: "Smoothing Treatment",
    problem: "Want silky-smooth, salon-straight hair at home?",
    solution: "Professional smoothing therapy for ultra-sleek, frizz-free hair.",
    price: "Starting ₹1,999/-",
    imgUrl: "/images/IMG_1796.JPG.jpeg",
    details: ["Salon-grade formula", "Lasting smoothness", "Zero damage", "Suitable all hair types"]
  },
  {
    title: "Nail Art",
    problem: "Want creative, eye-catching nails?",
    solution: "Stunning nail art designs crafted with precision by our experts.",
    price: "Starting ₹500/-",
    imgUrl: "/images/IMG_3592.PNG",
    details: ["Gel & acrylic options", "Custom designs", "Long-lasting polish", "Nail health care"]
  },
  {
    title: "Facial",
    problem: "Looking for a glowing, refreshed complexion?",
    solution: "Luxury facial treatments to rejuvenate your skin and restore radiance.",
    price: "Starting ₹1,000/-",
    imgUrl: "/images/IMG_2831.JPG.jpeg",
    details: ["Deep cleansing", "Skin brightening", "Anti-aging formulas", "Tailored to skin type"]
  },
  {
    title: "Mani Pedicure",
    problem: "Want perfectly groomed hands and feet?",
    solution: "Relaxing manicure and pedicure sessions for pampered, beautiful results.",
    price: "Starting ₹1,000/-",
    imgUrl: "/images/IMG_3593.PNG",
    details: ["Cuticle care", "Exfoliation & massage", "Polish of choice", "Soothing soak"]
  },
  {
    title: "Hair Colour",
    problem: "Bored with your current hair look?",
    solution: "Expert color formulation for a stunning, dimensional look that suits you.",
    price: "Price on Consultation",
    imgUrl: "/images/IMG_1413.JPG.jpeg",
    details: ["Global coloring", "Balayage experts", "Moisture-lock formulas", "Trend-based styling"]
  },
  {
    title: "Root Touch-Up",
    problem: "Grey roots making an unwelcome appearance?",
    solution: "Precise root touch-up to seamlessly blend and cover regrowth.",
    price: "Price on Consultation",
    imgUrl: "/images/IMG_1404.JPG.jpeg",
    details: ["Perfect color match", "Seamless blending", "Ammonia-free options", "Quick & effective"]
  },
  {
    title: "Makeup",
    problem: "Want a flawless look for your special occasion?",
    solution: "Professional makeup for bridal, party, editorial, and all special events.",
    price: "Price on Consultation",
    imgUrl: "/images/IMG_0584.JPG.jpeg",
    details: ["Bridal & party looks", "HD & airbrush options", "Long-lasting finish", "Skin-safe products"]
  },
  {
    title: "Eyelash Extensions",
    problem: "Wish for longer, fuller lashes without mascara?",
    solution: "Enhance your eyes with our premium, lightweight lash extensions.",
    price: "Price on Consultation",
    imgUrl: "/images/IMG_2515.JPG.jpeg",
    details: ["Classic or Volume", "Safe adhesive", "Customized curl/length", "Lightweight feel"]
  },
  {
    title: "Botox Treatment",
    problem: "Noticing fine lines and wrinkles?",
    solution: "Smooth and rejuvenate your skin with our professional botox treatments.",
    price: "Price on Consultation",
    imgUrl: "/images/IMG_4260.JPG.jpeg",
    details: ["Reduces fine lines", "Non-surgical", "Quick procedure", "Natural-looking results"]
  },
  {
    title: "Silk Therapy",
    problem: "Is your hair dry, dull and lifeless?",
    solution: "Restore your hair's natural shine and softness with our silk therapy.",
    price: "Price on Consultation",
    imgUrl: "/images/IMG_1405.JPG.jpeg",
    details: ["Deep hydration", "Frizz control", "Mirror-like shine", "Heat protection"]
  },
  {
    title: "Men's Beard Styling",
    problem: "Want a sharp, well-groomed beard?",
    solution: "Precision beard shaping and grooming for the modern gentleman.",
    price: "Price on Consultation",
    imgUrl: "/images/IMG_1536.JPG.jpeg",
    details: ["Shape & define", "Beard conditioning", "Precision trimming", "Style consultation"]
  },
  {
    title: "Hair Cut",
    problem: "Need a fresh, modern cut that suits your face?",
    solution: "Expert haircuts tailored to your face shape and personal style.",
    price: "Price on Consultation",
    imgUrl: "/images/IMG_1403.JPG.jpeg",
    details: ["Face-shape analysis", "Trending styles", "Blowdry finish", "Styling advice"]
  },
  {
    title: "Lip Blush",
    problem: "Want naturally tinted, fuller-looking lips?",
    solution: "Semi-permanent lip blush for a natural, lasting tinted look.",
    price: "Price on Consultation",
    imgUrl: "/images/IMG_1538.JPG.jpeg",
    details: ["Semi-permanent", "Custom shade mixing", "Natural finish", "Long-lasting color"]
  },
  {
    title: "Microblading",
    problem: "Tired of drawing your eyebrows every morning?",
    solution: "Get perfectly shaped, natural-looking semi-permanent brows.",
    price: "Price on Consultation",
    imgUrl: "/images/IMG_3132.JPG.jpeg",
    details: ["Natural hair strokes", "Custom pigment matching", "Lasts 1-2 years", "Virtually painless"]
  },
  {
    title: "BB Glow",
    problem: "Dreaming of a filter-like glowing complexion?",
    solution: "Semi-permanent BB glow treatment for a radiant, poreless finish.",
    price: "Price on Consultation",
    imgUrl: "/images/IMG_2930.JPG.jpeg",
    details: ["Even skin tone", "Luminous glow", "Semi-permanent", "Skin nourishing"]
  },
  {
    title: "Eyelash Tint",
    problem: "Want dark, defined lashes without mascara?",
    solution: "Professional eyelash tinting to darken and define your natural lashes.",
    price: "Price on Consultation",
    imgUrl: "/images/IMG_0810.JPG.jpeg",
    details: ["Long-lasting color", "Safe formula", "Natural enhancement", "Quick service"]
  },
  {
    title: "Eyebrow Tint",
    problem: "Want bold, well-defined brows instantly?",
    solution: "Professional eyebrow tinting for fuller, more defined brows.",
    price: "Price on Consultation",
    imgUrl: "/images/IMG_1633.JPG.jpeg",
    details: ["Custom shade match", "Lasts 3-4 weeks", "Defines brow shape", "Quick & easy"]
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

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(233,30,99,0.1)] border border-primary/5 group transition-all flex flex-col"
              >
                {/* Service Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={service.imgUrl}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white font-bold text-lg drop-shadow">{service.title}</div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="inline-flex items-center gap-2 text-primary font-bold tracking-[0.15em] uppercase text-xs mb-4">
                    <Sparkles className="w-4 h-4" /> Professional Service
                  </div>
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-4 mb-5 space-y-1">
                    <p className="text-muted-foreground text-sm italic">"{service.problem}"</p>
                    <p className="text-sm font-semibold text-foreground">{service.solution}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.details.map((detail, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                          <Zap className="w-2.5 h-2.5 text-accent" />
                        </div>
                        <span className="text-xs font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-primary/10">
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-0.5">Price</p>
                      <p className="text-xl font-bold text-primary">{service.price}</p>
                    </div>
                    <Button asChild size="sm" className="bg-primary text-white rounded-full px-6 font-bold hover:opacity-90">
                      <Link href={`/book?service=${service.title.toLowerCase().replace(/ /g, '-')}`}>
                        Book Now <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Not sure which service is right for you?</h2>
          <p className="text-white/80 max-w-xl mx-auto">Chat with our beauty experts on WhatsApp and get a free consultation today.</p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 font-bold">
            <a href="https://wa.me/917087657000"><Phone className="w-5 h-5 mr-2" /> WhatsApp Us</a>
          </Button>
        </div>
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
