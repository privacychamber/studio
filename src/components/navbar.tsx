
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Academy", href: "/academy" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
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
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-headline font-bold text-xs text-center p-1 border-2 border-accent transition-transform group-hover:rotate-12">
            THE GLAM HOUSE
          </div>
          <div className="hidden sm:block">
            <h1 className="font-headline font-bold text-lg leading-tight text-primary">THE GLAM HOUSE</h1>
            <p className="text-[10px] tracking-[0.2em] font-medium opacity-70">SALON & ACADEMY</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                pathname === link.href ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold">
            <Phone className="w-4 h-4 text-primary" />
            <a href="tel:+917087657000" className="hover:text-primary transition-colors">70876 57000</a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>

          <Button asChild className="hidden sm:flex shimmer-button bg-primary hover:bg-primary/90 text-white font-semibold">
            <Link href="/book">Book Appointment</Link>
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
                      "text-lg font-headline font-bold transition-colors",
                      pathname === link.href ? "text-primary" : "text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Separator />
              <div className="flex flex-col gap-4">
                <a href="tel:+917087657000" className="flex items-center gap-3 text-sm font-medium">
                  <Phone className="w-4 h-4 text-primary" />
                  Call 70876 57000
                </a>
                <Button asChild className="shimmer-button w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                  <Link href="/book">Book Appointment</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

function Separator() {
  return <div className="h-px w-full bg-border" />
}
