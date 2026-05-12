
"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react"

// Inlined to avoid ESM bundling issues during static pre-rendering
function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Academy", href: "/academy" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-primary/5 mt-auto relative overflow-hidden">
      {/* Abstract Background Accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mb-32" />

      <div className="max-w-[1500px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 relative z-10">
        {/* Brand */}
        <div className="flex flex-col items-start gap-6">
          <Link href="/" className="flex items-center group transition-transform hover:scale-105">
            <div className="w-[120px] h-[120px] relative bg-white rounded-full p-2 shadow-md border border-primary/5">
              <Image 
                src="/studio/logo.png" 
                alt="The Glam House Logo" 
                fill 
                className="object-contain p-2" 
              />
            </div>
          </Link>
          <p className="text-xs font-medium text-muted-foreground leading-relaxed max-w-xs">
            Where luxury meets skill. We provide premium beauty transformations 
            and world-class academy training in Mohali.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="font-bold text-xs uppercase tracking-[0.3em] text-primary">QUICK LINKS</h3>
          <div className="grid grid-cols-2 gap-y-3">
            {quickLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-foreground/70 hover:text-primary transition-all text-[11px] font-bold tracking-wider uppercase">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div className="space-y-6">
          <h3 className="font-bold text-xs uppercase tracking-[0.3em] text-primary">CONTACT US</h3>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Phone className="w-3.5 h-3.5 text-primary" />
              </div>
              <a href="tel:+917087657000" className="text-foreground/80 hover:text-primary transition-colors text-[11px] font-bold tracking-wider mt-2">70876 57000</a>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Mail className="w-3.5 h-3.5 text-primary" />
              </div>
              <a href="mailto:theglamhouse.salon@gmail.com" className="text-foreground/80 hover:text-primary transition-colors text-[11px] font-bold tracking-wider mt-2 break-all">theglamhouse.salon@gmail.com</a>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-3.5 h-3.5 text-primary" />
              </div>
              <p className="text-foreground/80 text-[11px] font-bold tracking-wider leading-relaxed mt-2">
                Sco No. 122, Phase 1&2, M&M Market,<br />Sector 60, Mohali, Punjab 160059
              </p>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="space-y-6">
          <h3 className="font-bold text-xs uppercase tracking-[0.3em] text-primary">FOLLOW US</h3>
          <div className="flex gap-4">
            {[
              { icon: Instagram, href: "https://instagram.com/the_glam_house_salon", color: "from-yellow-400 via-pink-500 to-purple-500" },
              { icon: Facebook, href: "#", color: "bg-[#1877F2]" },
              { icon: Youtube, href: "#", color: "bg-[#FF0000]" },
              { icon: Phone, href: "https://wa.me/917087657000", color: "bg-[#25D366]" }
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg bg-gradient-to-tr",
                social.color
              )}>
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 mt-20 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted-foreground font-bold tracking-[0.1em] uppercase">
        <p>© 2024 The Glam House Salon & Academy. All Rights Reserved.</p>
        <div className="flex gap-6">
           <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
           <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}
