
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Award, Users, GraduationCap, Heart } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const stats = [
  { icon: Heart, count: "1000+", label: "Happy Clients" },
  { icon: Award, count: "5+", label: "Years Experience" },
  { icon: GraduationCap, count: "500+", label: "Students Trained" },
  { icon: Users, count: "10+", label: "Expert Artists" }
]

export default function AboutPage() {
  const founderImg = PlaceHolderImages.find(i => i.id === "founder")

  return (
    <div className="pt-20">
      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold font-headline">OUR STORY</h1>
              <p className="text-xl font-accent text-primary">"Where Glamour Meets Expertise"</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  THE GLAM HOUSE started with a simple vision: to create a space where beauty is not just a service, but a transformative experience. Established in Mohali, we have grown from a small studio into a premium salon and a renowned beauty academy.
                </p>
                <p>
                  Our journey is defined by our commitment to excellence, hygiene, and customer satisfaction. We believe in empowering our clients by enhancing their natural beauty and empowering our students by providing them with industry-leading skills.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-3xl font-bold text-primary">{stat.count}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-background relative z-10">
                <Image src={founderImg?.imageUrl || ""} alt="Founder" fill className="object-cover" />
              </div>
              <div className="absolute inset-0 translate-x-8 translate-y-8 bg-accent/20 rounded-[3rem] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 font-headline">WHAT WE STAND FOR</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Excellence", desc: "We never settle for anything less than perfection in our work." },
              { title: "Empowerment", desc: "Training the next generation of beauty leaders." },
              { title: "Hygiene", desc: "Safe, clean, and medical-grade standards of sanitation." }
            ].map((v, i) => (
              <div key={i} className="p-8 bg-background rounded-3xl shadow-xl space-y-4 border border-accent/10">
                <div className="w-12 h-1 bg-primary mx-auto" />
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 font-headline">MEET OUR EXPERTS</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="space-y-4 group">
                <div className="aspect-square rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-primary transition-colors">
                  <Image src={`https://picsum.photos/seed/team${i}/400/400`} alt="Team Member" width={400} height={400} className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Expert Artist {i}</h4>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest">Specialist</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
