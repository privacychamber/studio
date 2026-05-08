
"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react"

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
    <footer className="bg-card pt-16 pb-8 border-t border-border mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center group flex-shrink-0">
            <div className="w-[120px] h-[120px] relative">
              <Image 
                src="/logo.png" 
                alt="The Glam House Logo" 
                fill 
                className="object-contain drop-shadow-md" 
              />
            </div>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <div className="col-span-2">
             <h3 className="font-bold text-sm uppercase tracking-wider mb-4">QUICK LINKS</h3>
          </div>
          {quickLinks.slice(0, 4).map((link) => (
            <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-xs font-semibold">
              {link.name}
            </Link>
          ))}
          {quickLinks.slice(4).map((link) => (
            <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-xs font-semibold">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider mb-4">CONTACT US</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
              <div className="text-xs">
                <a href="tel:+917087657000" className="text-muted-foreground hover:text-primary transition-colors font-semibold">70876 57000</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
              <div className="text-xs">
                <a href="mailto:theglamhouse.salon@gmail.com" className="text-muted-foreground hover:text-primary transition-colors font-semibold break-all">theglamhouse.salon@gmail.com</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-xs font-semibold leading-relaxed">
                Sco No. 122, Phase 1&2, M&M Market,<br />Sector 60, Mohali, Punjab 160059
              </p>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider mb-4">FOLLOW US</h3>
          <div className="flex gap-3">
            <a href="https://instagram.com/the_glam_house_salon" target="_blank" className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
              <Facebook className="w-4 h-4 fill-current border-none" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
              <Youtube className="w-4 h-4 fill-current" />
            </a>
            <a href="https://wa.me/917087657000" target="_blank" className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
               <Phone className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted-foreground font-semibold">
        <p>© 2024 The Glam House Salon & Academy. All Rights Reserved.</p>
        <div className="flex gap-4">
           <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
           <span>|</span>
           <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}
