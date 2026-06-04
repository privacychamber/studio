
"use client"

import { MessageSquare } from "lucide-react"
import { usePathname } from "next/navigation"

export function WhatsAppFloat() {
  const pathname = usePathname()
  
  if (pathname?.startsWith('/admin')) {
    return null
  }

  const message = encodeURIComponent("Hi! I found you on your website and I'm interested in booking an appointment.")
  const waUrl = `https://wa.me/917087657000?text=${message}`

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 group-hover:hidden"></div>
      <MessageSquare className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold text-sm">
        WhatsApp Us
      </span>
    </a>
  )
}
