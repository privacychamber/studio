"use client"

import * as React from "react"
import Link from "next/link"
import { Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileStickyBar() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar only after scrolling down 250px
      if (window.scrollY > 250) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-card/95 backdrop-blur-lg border-t border-primary/10 px-4 py-3 flex gap-3 shadow-[0_-10px_35px_rgba(0,0,0,0.1)] md:hidden transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <Button asChild className="flex-grow bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold rounded-full h-11 text-xs uppercase tracking-widest shadow-lg border-none">
        <Link href="/book">
          <Calendar className="w-3.5 h-3.5 mr-1.5" /> Book Online
        </Link>
      </Button>
      <Button asChild className="flex-grow bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-full h-11 text-xs uppercase tracking-widest border-none shadow-lg">
        <a href="https://wa.me/917087657000?text=Hi!%20I%27d%20like%20to%20book%20an%20appointment%20with%20The%20Glam%20House.">
          <Phone className="w-3.5 h-3.5 mr-1.5" /> WhatsApp
        </a>
      </Button>
    </div>
  )
}
