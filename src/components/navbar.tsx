
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Moon, Sun, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

// Inlined cn to prevent ESM resolution issues during static pre-rendering
function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "ACADEMY", href: "/academy" },
  { name: "GALLERY", href: "/gallery" },
  { name: "ABOUT US", href: "/about" },
  { name: "REVIEWS", href: "/reviews" },
  { name: "CONTACT", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (savedTheme === "dark" || (!savedTheme && systemTheme)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-b border-primary/5 py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1500px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0 transition-transform hover:scale-105 relative z-10">
          <div className="bg-white p-2 rounded-full shadow-lg border border-primary/10">
            <Image 
              src="/logo.png" 
              alt="The Glam House Logo" 
              width={140} 
              height={140} 
              className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-contain" 
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[12px] font-bold tracking-[0.2em] transition-all hover:text-primary relative group/link",
                pathname === link.href ? "text-primary" : "text-foreground/80"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300",
                pathname === link.href ? "w-full" : "w-0 group-hover/link:w-full"
              )} />
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 md:gap-8 ml-auto">
          <div className="hidden xl:flex flex-col items-end">
            <div className="flex items-center gap-1.5 text-[10px] text-primary uppercase font-bold tracking-[0.1em] mb-1">
              <Phone className="w-3 h-3" /> Call / WhatsApp
            </div>
            <a href="tel:+917087657000" className="font-bold text-sm text-foreground hover:text-primary transition-colors tracking-wider">70876 57000</a>
          </div>

          <Button asChild className="hidden sm:flex bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold rounded-full px-8 h-12 gap-2 text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 border-none">
            <Link href="/book"><Calendar className="w-4 h-4" /> BOOK APPOINTMENT</Link>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-primary/10 text-primary"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-8 pt-16 bg-white/95 backdrop-blur-xl border-l border-primary/5">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-xl font-bold tracking-[0.2em] transition-all",
                      pathname === link.href ? "text-primary translate-x-2" : "text-foreground/70"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="h-px w-full bg-primary/10" />
              <div className="flex flex-col gap-6">
                <a href="tel:+917087657000" className="flex items-center gap-4 text-sm font-bold tracking-widest text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  70876 57000
                </a>
                <Button asChild className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full h-14 gap-3 uppercase tracking-[0.2em] shadow-lg border-none">
                  <Link href="/book"><Calendar className="w-5 h-5" /> Book Appointment</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

