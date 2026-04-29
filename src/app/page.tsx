
"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check, Star, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-portrait")
  const keratinImg = PlaceHolderImages.find(img => img.id === "keratin-treatment")
  const browImg = PlaceHolderImages.find(img => img.id === "microblading")
  const lashImg = PlaceHolderImages.find(img => img.id === "lash-extensions")
  const colorImg = PlaceHolderImages.find(img => img.id === "hair-color")

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={heroImage?.imageUrl || ""}
            alt={heroImage?.description || ""}
            fill
            className="object-cover opacity-30 dark:opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.p variants={fadeInUp} className="font-accent text-primary text-3xl mb-4">
              Enhance. Elevate. Empower.
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              FLAWLESS BEAUTY <br />
              <span className="text-primary italic">STARTS HERE</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 font-medium">
              Permanent Makeup | Hair Treatments | Lash & Brow | Skin | Certified Courses
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="shimmer-button bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto">
                <Link href="/book">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-primary text-primary hover:bg-primary/5">
                <Link href="/academy">Explore Courses</Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                "1000+ Happy Clients",
                "Certified Academy",
                "Premium Products",
                "Hygienic Space"
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <p className="text-xs font-bold tracking-wider uppercase">{badge}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Thumbnails (Desktop Only) */}
        <div className="hidden xl:block absolute right-[10%] top-1/2 -translate-y-1/2 space-y-4">
          {[
            { label: "BROWS", img: browImg },
            { label: "HAIR", img: keratinImg },
            { label: "LASHES", img: lashImg }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.2 }}
              className="relative group cursor-pointer"
            >
              <div className="w-48 h-32 rounded-lg overflow-hidden border-2 border-accent/20 group-hover:border-primary transition-all shadow-xl">
                <Image src={item.img?.imageUrl || ""} alt={item.label} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-bold tracking-[0.2em] text-sm">{item.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Transformations Carousel */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">REAL RESULTS. REAL TRANSFORMATIONS.</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden border-none shadow-lg group">
                      <div className="relative aspect-[4/5]">
                        <Image
                          src={`https://picsum.photos/seed/trans${i}/600/800`}
                          alt="Transformation"
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          data-ai-hint="beauty makeover"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-black/90 p-3 rounded flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-xs font-bold">Transformation #{i}</span>
                          <Star className="w-4 h-4 text-accent fill-accent" />
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Premium Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">OUR PREMIUM SERVICES</h2>
              <p className="text-muted-foreground max-w-lg">Expert solutions for hair, skin, and beauty. Experience luxury treatments by certified professionals.</p>
            </div>
            <Button asChild variant="link" className="text-primary font-bold gap-2 text-lg">
              <Link href="/services">View All Services <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Keratin Treatment", img: keratinImg, desc: "Frizz-free, silky smooth hair that lasts." },
              { title: "Microblading", img: browImg, desc: "Natural looking, semi-permanent perfect brows." },
              { title: "Lash Extensions", img: lashImg, desc: "Volume and length to enhance your natural beauty." },
              { title: "Hair Color", img: colorImg, desc: "Professional coloring for a vibrant new look." }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-none shadow-xl h-full bg-card">
                  <div className="relative aspect-video">
                    <Image src={service.img?.imageUrl || ""} alt={service.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{service.desc}</p>
                    <Link href="/services" className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Know More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Teaser */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full -ml-48 -mb-48" />

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Start Your Career</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">THE GLAM HOUSE <br /><span className="text-accent italic">BEAUTY ACADEMY</span></h2>
            <p className="text-lg text-muted-foreground">Master the art of beauty with our professional certified courses. Learn from industry experts and start your professional journey today.</p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Certified Professional Courses",
                "Hands-on Practical Training",
                "Industry Expert Mentors",
                "Lifetime Support",
                "Placement Assistance",
                "Business Setup Guidance"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-primary/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 bg-background rounded-xl border-l-4 border-primary shadow-lg">
              <p className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">Limited Availability</p>
              <p className="text-xl font-headline font-bold mb-4">ONLY 5 SEATS PER BATCH!</p>
              <Button asChild size="lg" className="shimmer-button bg-primary text-white w-full sm:w-auto px-12">
                <Link href="/academy">Enroll Now <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "NAIL COURSE", duration: "15 Days", price: "₹14,999", img: PlaceHolderImages.find(i => i.id === "nail-course") },
              { title: "EYELASH COURSE", duration: "7 Days", price: "₹9,999", img: PlaceHolderImages.find(i => i.id === "lash-course") }
            ].map((course, i) => (
              <Card key={i} className="overflow-hidden border-2 border-transparent hover:border-accent transition-all shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <Image src={course.img?.imageUrl || ""} alt={course.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-xs font-bold mb-1 opacity-80">{course.duration}</p>
                    <h4 className="text-white text-xl font-bold">{course.title}</h4>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <p className="text-2xl font-bold text-primary mb-4">{course.price}/-</p>
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                    <Link href={`/enroll?course=${course.title.toLowerCase().split(' ')[0]}`}>Enroll Today</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">WHAT OUR CLIENTS SAY</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Neha Sharma", service: "Keratin treatment", review: "The results were incredible. My hair feels so soft and manageable. Best salon in Mohali!" },
              { name: "Pooja Verma", service: "Microblading", review: "I was nervous about microblading but they made me feel so comfortable. My brows look so natural!" },
              { name: "Priya Mehta", service: "Lash extensions", review: "Obsessed with my new lashes! They look voluminous but still so light. Excellent service." },
              { name: "Ankita Singh", service: "Nail course", review: "Finished my nail art course here. The mentors are amazing and the teaching style is very practical." }
            ].map((item, i) => (
              <Card key={i} className="bg-card border-none shadow-xl p-8 relative">
                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-accent fill-accent" />)}
                </div>
                <p className="text-muted-foreground italic mb-6">"{item.review}"</p>
                <div className="mt-auto">
                  <p className="font-bold text-lg">{item.name}</p>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest">{item.service}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">FOLLOW US ON INSTAGRAM</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-12">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="aspect-square relative group overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/insta${i}/400/400`}
                  alt="Instagram Post"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                  data-ai-hint="beauty aesthetic"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>

          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8">
            <a href="https://instagram.com/the_glam_house_salon" target="_blank">@the_glam_house_salon</a>
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">READY FOR YOUR TRANSFORMATION?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">Let our experts bring out the most beautiful version of you. Book your slot today!</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-7 h-auto font-bold">
              <Link href="/book">Schedule Appointment</Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-12 py-7 h-auto font-bold">
              <Link href="https://wa.me/917087657000">Book on WhatsApp</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
