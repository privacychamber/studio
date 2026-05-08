
"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check, Star, Instagram, Calendar, GraduationCap, MapPin, ShieldCheck, User, Sparkles, Heart } from "lucide-react"
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
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 min-h-[90vh] flex items-center bg-card">
        <div className="absolute inset-0 z-0 overflow-hidden hidden lg:block">
          {/* Subtle background circle/arch */}
          <div className="absolute right-0 top-0 w-[50%] h-full bg-primary/5 rounded-l-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="max-w-2xl"
            >
              <motion.p variants={fadeInUp} className="font-accent text-primary text-2xl md:text-3xl mb-4 tracking-wide">
                Enhance. Elevate. Empower.
              </motion.p>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[5.5rem] font-headline font-bold mb-6 leading-[1.1] tracking-tight">
                FLAWLESS <br />
                <span className="text-primary font-bold">BEAUTY</span> <br />
                STARTS HERE
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-foreground/80 mb-8 font-medium tracking-wide">
                Permanent Makeup | Hair Treatments | <br className="hidden md:block" /> Lash & Brow | Skin | Certified Courses
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-12">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 h-14 gap-3 text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                  <Link href="/book"><Calendar className="w-5 h-5" /> BOOK APPOINTMENT</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/20 hover:border-primary bg-transparent text-foreground hover:bg-primary/5 rounded-sm px-8 h-14 gap-3 text-sm font-bold uppercase tracking-wider">
                  <Link href="/academy"><GraduationCap className="w-5 h-5 text-primary" /> EXPLORE COURSES</Link>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-border pt-8">
                {[
                  { title: "1000+", subtitle: "Happy Clients", icon: User },
                  { title: "Certified", subtitle: "Beauty Academy", icon: GraduationCap },
                  { title: "Premium Salon", subtitle: "in Your City", icon: MapPin },
                  { title: "Hygienic & Safe", subtitle: "Environment", icon: ShieldCheck }
                ].map((badge, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-background flex flex-shrink-0 items-center justify-center border border-primary/20">
                      <badge.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold leading-tight">{badge.title}</p>
                      <p className="text-[10px] text-muted-foreground uppercase font-medium">{badge.subtitle}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image & Side Cards */}
            <div className="relative h-[600px] lg:h-[700px] w-full flex items-center justify-end">
               <div className="relative w-full max-w-[400px] lg:max-w-[500px] h-full rounded-[40px] md:rounded-[100px] md:rounded-tr-[200px] overflow-hidden border-[8px] border-background shadow-2xl">
                 <Image
                    src={heroImage?.imageUrl || "https://picsum.photos/seed/hero/800/1000"}
                    alt="Hero Portrait"
                    fill
                    className="object-cover"
                    priority
                  />
               </div>

               {/* Right Side Floating Cards */}
               <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 flex flex-col gap-4 z-20">
                  {[
                    { label: "BROWS", img1: "https://picsum.photos/seed/brow1/150/100", img2: "https://picsum.photos/seed/brow2/150/100" },
                    { label: "HAIR", img1: "https://picsum.photos/seed/hair1/150/100", img2: "https://picsum.photos/seed/hair2/150/100" },
                    { label: "LIPS", img1: "https://picsum.photos/seed/lip1/150/100", img2: "https://picsum.photos/seed/lip2/150/100" }
                  ].map((card, i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + (i * 0.2) }}
                      className="bg-background p-2 rounded-lg shadow-xl border border-border flex flex-col items-center w-[120px] lg:w-[140px]"
                    >
                      <span className="text-[10px] font-bold tracking-widest mb-2 mt-1 uppercase">{card.label}</span>
                      <div className="flex flex-col gap-1 w-full">
                        <div className="relative w-full aspect-[3/2] rounded overflow-hidden">
                          <Image src={card.img1} alt={`${card.label} Before`} fill className="object-cover" />
                        </div>
                        <div className="relative w-full aspect-[3/2] rounded overflow-hidden">
                          <Image src={card.img2} alt={`${card.label} After`} fill className="object-cover" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-headline font-bold uppercase tracking-wider">
              REAL RESULTS. REAL <span className="text-primary">TRANSFORMATIONS.</span>
            </h2>
          </div>

          <div className="flex gap-2 md:gap-4 overflow-x-auto pb-8 snap-x no-scrollbar justify-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative w-[150px] md:w-[200px] lg:w-[220px] aspect-[4/5] flex-shrink-0 snap-center rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors cursor-pointer group">
                <Image
                  src={`https://picsum.photos/seed/transform${i}/400/500`}
                  alt={`Transformation ${i}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 uppercase tracking-wider">
              OUR <span className="text-primary">PREMIUM</span> SERVICES
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-primary/40"></div>
              <div className="w-2 h-2 rotate-45 bg-primary/40"></div>
              <div className="h-px w-12 bg-primary/40"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "KERATIN TREATMENT", img: keratinImg, desc: "Smooth, frizz-free, and shiny hair that lasts.", icon: Sparkles },
              { title: "MICROBLADING", img: browImg, desc: "Natural, fuller brows that frame your face perfectly.", icon: Sparkles },
              { title: "LASH EXTENSIONS", img: lashImg, desc: "Wake up with flawless, voluminous lashes.", icon: Sparkles },
              { title: "HAIR COLOR", img: colorImg, desc: "Vibrant colors, stunning transformations.", icon: Sparkles }
            ].map((service, i) => (
              <Card key={i} className="overflow-hidden border border-border shadow-md hover:shadow-xl transition-all h-full bg-background group cursor-pointer rounded-xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={service.img?.imageUrl || `https://picsum.photos/seed/service${i}/600/400`} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <CardContent className="p-6 relative pt-8 text-left">
                  <div className="absolute -top-6 left-6 w-12 h-12 bg-background rounded-full border border-primary/20 flex items-center justify-center shadow-sm">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary">{service.title}</h3>
                  <p className="text-sm text-foreground/70 mb-6 line-clamp-2">{service.desc}</p>
                  <Link href="/services" className="text-primary font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    KNOW MORE <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-sm px-10 h-12 text-xs font-bold uppercase tracking-widest">
            <Link href="/services">VIEW ALL SERVICES</Link>
          </Button>
        </div>
      </section>

      {/* Academy Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-8 lg:p-12 border border-primary/10 shadow-lg">
            <div className="grid lg:grid-cols-[1fr_1fr_auto] gap-8 lg:gap-12 items-center">
              
              {/* Left Images Collage */}
              <div className="grid grid-cols-2 gap-2 h-full">
                <div className="col-span-2 relative aspect-[2/1] rounded-lg overflow-hidden">
                   <Image src="https://picsum.photos/seed/academy1/800/400" alt="Academy Class" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                   <Image src="https://picsum.photos/seed/academy2/400/400" alt="Academy Practical" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                   <Image src="https://picsum.photos/seed/academy3/400/400" alt="Academy Graduation" fill className="object-cover" />
                </div>
              </div>

              {/* Middle Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">START YOUR CAREER IN</h3>
                  <h2 className="text-4xl lg:text-5xl font-headline font-bold uppercase">BEAUTY INDUSTRY</h2>
                </div>

                <ul className="space-y-4">
                  {[
                    "Certified Professional Courses",
                    "Hands-on Practical Training",
                    "Learn from Industry Experts",
                    "Lifetime Support & Guidance",
                    "Placement Assistance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-bold text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider mb-1">LIMITED SEATS PER BATCH!</p>
                  <p className="font-accent text-primary text-3xl">Book Your Seat Now!</p>
                </div>
              </div>

              {/* Right Course Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-[400px]">
                {[
                  { title: "NAIL COURSE", duration: "15 Days", price: "₹14,999/-", img: "https://picsum.photos/seed/nail/400/300" },
                  { title: "EYELASH COURSE", duration: "7 Days", price: "₹9,999/-", img: "https://picsum.photos/seed/lash/400/300" }
                ].map((course, i) => (
                  <Card key={i} className="overflow-hidden border border-border shadow-md bg-background rounded-xl flex flex-col h-full">
                    <div className="relative aspect-[4/3]">
                      <Image src={course.img} alt={course.title} fill className="object-cover" />
                    </div>
                    <CardContent className="p-4 text-center flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-1">{course.title}</h4>
                        <p className="text-[10px] text-muted-foreground uppercase font-medium mb-3">Duration: {course.duration}</p>
                        <p className="text-xl font-bold mb-4">{course.price}</p>
                      </div>
                      <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm h-10 text-xs font-bold uppercase tracking-widest mt-auto">
                        <Link href="/enroll">ENROLL NOW</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Glam House */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-headline font-bold uppercase tracking-widest mb-12">
            WHY CHOOSE GLAM HOUSE?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "EXPERT PROFESSIONALS", desc: "Experienced & certified beauty experts", icon: User },
              { title: "PREMIUM PRODUCTS", desc: "We use high-quality, skin-friendly products", icon: Sparkles },
              { title: "HYGIENE & SAFETY", desc: "100% hygienic tools & sanitized environment", icon: ShieldCheck },
              { title: "CUSTOMER SATISFACTION", desc: "Your satisfaction is our top priority", icon: Heart }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-16 uppercase tracking-widest">
            WHAT OUR <span className="text-primary">CLIENTS</span> SAY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Neha Sharma", img: "https://i.pravatar.cc/150?u=1", review: "The best keratin treatment I've ever had! My hair feels amazing and looks so healthy." },
              { name: "Pooja Verma", img: "https://i.pravatar.cc/150?u=2", review: "Microblading done perfectly! My brows look so natural. Highly recommended." },
              { name: "Priya Mehta", img: "https://i.pravatar.cc/150?u=3", review: "Lash extensions are just perfect. The team is so professional and friendly." },
              { name: "Ankita Singh", img: "https://i.pravatar.cc/150?u=4", review: "Joined the nail course and it changed my career! Best academy in the city." }
            ].map((item, i) => (
              <Card key={i} className="bg-card border border-border shadow-sm p-6 relative rounded-2xl flex flex-col items-center pt-10 mt-8">
                <div className="absolute -top-8 w-16 h-16 rounded-full overflow-hidden border-4 border-card">
                  <Image src={item.img} alt={item.name} fill className="object-cover" />
                </div>
                <div className="text-primary text-4xl font-headline leading-none mb-2 absolute top-4 left-4">"</div>
                <h4 className="font-bold text-sm mt-2">{item.name}</h4>
                <div className="flex justify-center mb-4 gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 text-accent fill-accent" />)}
                </div>
                <p className="text-sm text-foreground/80 text-center">"{item.review}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-2xl font-headline font-bold uppercase tracking-widest inline-flex items-center gap-3">
              FOLLOW US ON <span className="text-primary">INSTAGRAM</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 mb-10 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="aspect-square relative group overflow-hidden rounded-xl border border-border shadow-sm">
                <Image
                  src={`https://picsum.photos/seed/insta${i}/400/400`}
                  alt="Instagram Post"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>

          <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-white rounded-full px-8 h-10 text-xs font-bold tracking-widest uppercase">
            <a href="https://instagram.com/the_glam_house_salon" target="_blank">@the_glam_house_salon</a>
          </Button>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-12 bg-background pb-24">
        <div className="container mx-auto px-4">
           <div className="bg-card rounded-2xl p-8 md:p-12 border border-primary/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
             {/* Background glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
             
             <div className="relative z-10 text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-headline font-bold uppercase mb-2">
                  READY FOR YOUR <span className="text-primary">TRANSFORMATION?</span>
                </h2>
                <p className="text-sm text-foreground/70">Let our experts bring out the most beautiful you.</p>
             </div>
             
             <div className="flex flex-wrap gap-4 relative z-10">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-sm h-12 px-8 text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                  <a href="https://wa.me/917087657000"><Phone className="w-4 h-4 mr-2" /> BOOK ON WHATSAPP</a>
                </Button>
                <Button asChild variant="outline" className="border-border bg-background hover:bg-background/80 text-foreground rounded-sm h-12 px-8 text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Link href="/book"><Calendar className="w-4 h-4 mr-2 text-primary" /> SCHEDULE APPOINTMENT</Link>
                </Button>
             </div>
           </div>
        </div>
      </section>
    </div>
  )
}
