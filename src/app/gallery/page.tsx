
"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Play } from "lucide-react"

const CATEGORIES = ["All", "Brows", "Hair", "Lashes", "Nails", "Skin"]

const GALLERY_ITEMS = [
  { id: 1, cat: "Brows", img: "https://picsum.photos/seed/b1/600/600", title: "Microblading Finish" },
  { id: 2, cat: "Hair", img: "https://picsum.photos/seed/h1/600/800", title: "Keratin Smoothness" },
  { id: 3, cat: "Lashes", img: "https://picsum.photos/seed/l1/600/600", title: "Voluminous Lashes" },
  { id: 4, cat: "Nails", img: "https://picsum.photos/seed/n1/800/600", title: "Wedding Nail Art" },
  { id: 5, cat: "Skin", img: "https://picsum.photos/seed/s1/600/600", title: "Hydra Facial Glow" },
  { id: 6, cat: "Brows", img: "https://picsum.photos/seed/b2/600/800", title: "Ombre Powder Brows" },
  { id: 7, cat: "Hair", img: "https://picsum.photos/seed/h2/600/600", title: "Vibrant Hair Color" },
  { id: 8, cat: "Lashes", img: "https://picsum.photos/seed/l2/800/600", title: "Natural Lash Look" },
  { id: 9, cat: "Nails", img: "https://picsum.photos/seed/n2/600/800", title: "Custom Extensions" },
  { id: 10, cat: "Skin", img: "https://picsum.photos/seed/s2/600/600", title: "Microneedling Result" },
  { id: 11, cat: "Brows", img: "https://picsum.photos/seed/b3/600/600", title: "Brow Lamination" },
  { id: 12, cat: "Hair", img: "https://picsum.photos/seed/h3/600/800", title: "Balayage Magic" },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = React.useState("All")

  const filteredItems = activeFilter === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.cat === activeFilter)

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">OUR GALLERY</h1>
          <p className="text-muted-foreground font-accent text-xl">Transformations that Speak for Themselves</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-2 rounded-full border font-bold text-sm transition-all ${
                activeFilter === cat 
                  ? "bg-primary text-white border-primary shadow-lg" 
                  : "bg-card hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-2xl cursor-pointer"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint="beauty result"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest mb-1">{item.cat}</span>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Video Reel Section */}
        <div className="mt-24 bg-card rounded-[3rem] p-12 lg:p-24 text-center border overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-headline">WATCH OUR WORK IN ACTION</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">See the detailed process behind our premium transformations in these short reels.</p>
          
          <div className="max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden bg-black relative group cursor-pointer shadow-2xl">
            <Image 
              src="https://picsum.photos/seed/reel/1200/675" 
              alt="Video Preview" 
              fill 
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
