
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Moon, Sun, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

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
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 py-2",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md border-b"
          : "bg-background"
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full border border-accent/30 flex flex-col items-center justify-center text-center p-2 relative bg-background">
            <span className="text-[8px] md:text-[10px] font-accent text-accent uppercase tracking-wider mb-[-4px]">Welcome</span>
            <h1 className="font-headline font-bold text-sm md:text-lg leading-tight text-foreground uppercase">THE GLAM HOUSE</h1>
            <div className="w-1/2 h-px bg-accent/50 my-1"></div>
            <p className="text-[6px] md:text-[8px] tracking-[0.1em] font-medium opacity-80 uppercase">SALON & ACADEMY</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[13px] font-bold tracking-widest transition-colors hover:text-primary relative",
                pathname === link.href ? "text-primary after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-primary" : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 md:gap-6 ml-auto">
          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-1">
              <Phone className="w-3 h-3 text-primary" /> Call / WhatsApp
            </div>
            <a href="tel:+917087657000" className="font-extrabold text-sm text-foreground">70876 57000</a>
          </div>

          <Button asChild className="hidden sm:flex bg-primary hover:bg-primary/90 text-white font-bold rounded-sm px-6 h-12 gap-2 text-xs uppercase tracking-wider shadow-lg shadow-primary/20 transition-transform active:scale-95">
            <Link href="/book"><Calendar className="w-4 h-4" /> BOOK APPOINTMENT</Link>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
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
            <SheetContent side="right" className="flex flex-col gap-6 pt-12">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-lg font-bold tracking-wider transition-colors",
                      pathname === link.href ? "text-primary" : "text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="h-px w-full bg-border" />
              <div className="flex flex-col gap-4">
                <a href="tel:+917087657000" className="flex items-center gap-3 text-sm font-bold">
                  <Phone className="w-4 h-4 text-primary" />
                  Call 70876 57000
                </a>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-sm h-12 gap-2 uppercase tracking-wider">
                  <Link href="/book"><Calendar className="w-4 h-4" /> Book Appointment</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

