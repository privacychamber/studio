
"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { name: "Services", href: "/services" },
  { name: "Academy", href: "/academy" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Booking", href: "/book" },
]

export function Footer() {
  return (
    <footer className="bg-card pt-16 pb-8 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-headline font-bold text-[10px] text-center p-1 border border-accent">
              THE GLAM HOUSE
            </div>
            <h2 className="font-headline font-bold text-xl leading-tight">THE GLAM HOUSE</h2>
          </Link>
          <p className="text-muted-foreground text-sm font-accent text-lg">"Enhance. Elevate. Empower."</p>
          <div className="flex gap-4">
            <a href="https://instagram.com/the_glam_house_salon" target="_blank" className="p-2 rounded-full bg-background border hover:bg-primary hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-background border hover:bg-primary hover:text-white transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-background border hover:bg-primary hover:text-white transition-all">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-headline font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-headline font-bold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <div className="text-sm">
                <p className="font-semibold">Call / WhatsApp</p>
                <a href="tel:+917087657000" className="text-muted-foreground hover:text-primary transition-colors">70876 57000</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <div className="text-sm">
                <p className="font-semibold">Email</p>
                <a href="mailto:theglamhouse.salon@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">theglamhouse.salon@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="font-headline font-bold text-lg mb-6">Our Location</h3>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            <p className="text-muted-foreground">
              Sco No. 122, Phase 1&2, M&M Market, Sector 60, Mohali, Punjab 160059
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} The Glam House Salon & Academy. All Rights Reserved.</p>
        <p>Crafted with Excellence.</p>
      </div>
    </footer>
  )
}
