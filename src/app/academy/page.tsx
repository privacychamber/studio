
"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, GraduationCap, Users, Trophy, BookOpen, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const courses = [
  {
    id: "microblading",
    title: "Microblading Course",
    duration: "Intensive Training",
    batch: "PMU Series",
    price: "₹30,000/-",
    imgUrl: "/studio/images/IMG_2856.JPG.jpeg",
    features: ["Skin Anatomy", "Blade Techniques", "Color Theory", "Live Model Practice"]
  },
  {
    id: "lip-blush",
    title: "Lip Blush Course",
    duration: "Professional Training",
    batch: "PMU Series",
    price: "₹20,000/-",
    imgUrl: "/studio/images/IMG_2853.JPG.jpeg",
    features: ["Lip Anatomy", "Pigment Mixing", "Machine Technique", "Healing Process"]
  },
  {
    id: "pmu",
    title: "Complete PMU Course",
    duration: "Comprehensive",
    batch: "Best Value",
    price: "₹50,000/-",
    imgUrl: "/studio/images/IMG_4490.JPG.jpeg",
    features: ["Microblading", "Lip Blush", "Machine Work", "Portfolio Building"]
  },
  {
    id: "nail",
    title: "Nail Course",
    duration: "15 Days",
    batch: "Limited Seats",
    price: "₹15,000/-",
    imgUrl: "/studio/images/IMG_3594.PNG",
    features: ["Gel Nails & Art", "Acrylic Extensions", "Product Knowledge", "Business Setup Tips"]
  },
  {
    id: "lash",
    title: "Eyelash Course",
    duration: "7 Days",
    batch: "Practical Focus",
    price: "₹10,000/-",
    imgUrl: "/studio/images/IMG_0810.JPG.jpeg",
    features: ["Classic & Volume", "Lash Mapping", "Safety & Hygiene", "Maintenance Guide"]
  },
  {
    id: "makeup",
    title: "Makeup Course",
    duration: "Professional Training",
    batch: "Beginner Friendly",
    price: "₹20,000/-",
    imgUrl: "/studio/images/IMG_0722.JPG.jpeg",
    features: ["HD Makeup", "Bridal Looks", "Skin Prep", "Color Theory"]
  },
  {
    id: "hair",
    title: "Hair Course",
    duration: "Comprehensive",
    batch: "Advanced",
    price: "₹45,000/-",
    imgUrl: "/studio/images/IMG_1401.JPG.jpeg",
    features: ["Cuts & Styling", "Keratin & Smoothing", "Hair Coloring", "Trichology Basics"]
  },
  {
    id: "beauty",
    title: "Beauty Course",
    duration: "Complete Program",
    batch: "All-in-One",
    price: "₹15,000/-",
    imgUrl: "/studio/images/IMG_0568.JPG.jpeg",
    features: ["Facials & Skincare", "Waxing & Threading", "Mani-Pedi", "Client Handling"]
  }
]

export default function AcademyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-white rounded-full animate-pulse delay-700" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-headline">START YOUR CAREER <br /> IN BEAUTY</h1>
            <p className="text-xl md:text-2xl font-accent opacity-90">Unlock Your Potential with The Glam House Academy</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, title: "Expert Faculty", desc: "Learn from top industry masters." },
              { icon: BookOpen, title: "Practical Labs", desc: "Hands-on experience on live models." },
              { icon: Trophy, title: "Global Certificates", desc: "Recognized certificates for your career." },
              { icon: Users, title: "Placement Help", desc: "Support to land your first job." }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-headline">CERTIFIED COURSES</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-none shadow-2xl h-full flex flex-col group">
                  <div className="relative aspect-video">
                    <Image src={course.imgUrl} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                      {course.batch}
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{course.title}</h3>
                        <p className="text-muted-foreground text-sm font-semibold flex items-center gap-1">
                          Duration: {course.duration}
                        </p>
                      </div>
                      <p className="text-3xl font-bold text-primary">{course.price}</p>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {course.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-accent shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto space-y-4">
                      <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold shimmer-button h-12">
                        <Link href={`/enroll?course=${course.id}`}>Enroll Now</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full h-12 border-accent text-accent hover:bg-accent/5 font-bold">
                        <Link href="https://wa.me/917087657000">Inquire on WhatsApp</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-foreground text-background py-16 overflow-hidden relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-accent">LIMITED SEATS PER BATCH!</h2>
            <p className="text-xl max-w-2xl mx-auto opacity-80">We maintain small batch sizes to ensure personalized attention for every student. Don't miss out on your spot.</p>
            <div className="flex justify-center items-center gap-8 pt-8">
              <div>
                <p className="text-4xl font-bold text-primary">05</p>
                <p className="text-xs font-bold tracking-widest uppercase opacity-60">Seats/Batch</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <p className="text-4xl font-bold text-primary">100%</p>
                <p className="text-xs font-bold tracking-widest uppercase opacity-60">Practical</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <p className="text-4xl font-bold text-primary">Yes</p>
                <p className="text-xs font-bold tracking-widest uppercase opacity-60">Certificate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center font-headline">ACADEMY FAQS</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border px-6 rounded-xl bg-card">
              <AccordionTrigger className="font-bold text-lg hover:no-underline">Will I get a certificate after completion?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, absolutely! Upon successful completion of your course and practical assessment, you will receive a professional certification recognized in the beauty industry.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border px-6 rounded-xl bg-card">
              <AccordionTrigger className="font-bold text-lg hover:no-underline">Do I need any previous experience?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No previous experience is required for our beginner courses (Nail Art, Eyelash). We start from the basics. For advanced courses like Microblading, some basic beauty industry background is helpful but not mandatory.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border px-6 rounded-xl bg-card">
              <AccordionTrigger className="font-bold text-lg hover:no-underline">Is the training hands-on?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, our training is 80% practical. You will practice on artificial surfaces first and then move to live models under expert supervision.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border px-6 rounded-xl bg-card">
              <AccordionTrigger className="font-bold text-lg hover:no-underline">Do you provide job assistance?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we help our top students with placement in reputed salons and also provide guidance on how to start your own freelance business or studio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-24 bg-card border-y">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-6xl font-bold font-headline leading-tight">YOUR JOURNEY TO BECOMING A <br /><span className="text-primary">BEAUTY PRO</span> STARTS HERE.</h2>
            <Button asChild size="lg" className="shimmer-button bg-primary text-white px-12 py-8 h-auto text-xl font-bold rounded-full">
              <Link href="/enroll">Secure Your Spot Today <ArrowRight className="w-6 h-6 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
