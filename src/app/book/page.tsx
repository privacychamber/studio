
"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { CheckCircle2, Calendar, Clock, Phone, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const SERVICES = [
  "Keratin Treatment",
  "Smoothing Treatment",
  "Nail Art",
  "Facial",
  "Mani Pedicure",
  "Hair Colour",
  "Root Touch-Up",
  "Makeup",
  "Eyelash Extensions",
  "Botox Treatment",
  "Silk Therapy",
  "Men's Beard Styling",
  "Hair Cut",
  "Lip Blush",
  "Microblading",
  "BB Glow",
  "Eyelash Tint",
  "Eyebrow Tint",
  "Other"
]

const TIME_SLOTS = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  "05:00 PM", "06:00 PM", "07:00 PM"
]

function BookingFormContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toast } = useToast()

  const serviceParam = searchParams.get("service") || ""
  // Map "keratin-treatment" back to display name
  const matchedService = SERVICES.find(
    s => s.toLowerCase().replace(/ /g, '-') === serviceParam.toLowerCase()
  ) || ""

  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    email: "",
    service: matchedService,
    date: "",
    time: "",
    requests: ""
  })

  React.useEffect(() => {
    if (matchedService) {
      setFormData(prev => ({ ...prev, service: matchedService }))
    }
  }, [matchedService])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Form Validation (Simple)
    if (!formData.fullName || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all required fields.",
        variant: "destructive"
      })
      return
    }

    // Success State
    setIsSubmitted(true)
    localStorage.setItem("lastBooking", JSON.stringify(formData))

    toast({
      title: "Booking Received!",
      description: "We'll confirm your slot shortly via WhatsApp or Phone."
    })
  }

  const generateWaLink = () => {
    const message = `Hi! I'd like to book ${formData.service} on ${formData.date} at ${formData.time}. My name is ${formData.fullName}.`
    return `https://wa.me/917087657000?text=${encodeURIComponent(message)}`
  }

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 container mx-auto px-4 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-8 p-12 bg-card rounded-2xl shadow-2xl border border-primary/20"
        >
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2 font-headline">Booking Confirmed!</h2>
            <p className="text-muted-foreground">🎉 Thank you, {formData.fullName.split(' ')[0]}! Our experts will call you within 2 hours to confirm your appointment details.</p>
          </div>
          <div className="space-y-4">
            <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 h-auto text-lg font-bold shadow-lg">
              <a href={generateWaLink()} target="_blank">Confirm on WhatsApp</a>
            </Button>
            <Button variant="outline" className="w-full py-6 h-auto font-bold" onClick={() => router.push('/')}>
              Return Home
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-12 bg-card rounded-3xl overflow-hidden shadow-2xl border">

          {/* Form Side */}
          <div className="p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-2 font-headline">Book Your Slot</h1>
            <p className="text-muted-foreground mb-8">Take the first step towards your beauty transformation.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="fullName" name="fullName" placeholder="John Doe" className="pl-10" required onChange={handleInputChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="phone" name="phone" placeholder="+91 70876 XXXXX" className="pl-10" required onChange={handleInputChange} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="john@example.com" onChange={handleInputChange} />
              </div>

              <div className="space-y-2">
                <Label>Select Service *</Label>
                <Select value={formData.service} onValueChange={(val) => handleSelectChange("service", val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="What are you looking for?" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date *</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <Input id="date" name="date" type="date" className="pl-10" required min={new Date().toISOString().split('T')[0]} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Preferred Time Slot *</Label>
                  <Select onValueChange={(val) => handleSelectChange("time", val)}>
                    <SelectTrigger>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <SelectValue placeholder="Select Time" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {TIME_SLOTS.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requests">Special Requests</Label>
                <Textarea id="requests" name="requests" placeholder="Any specific requirements or questions?" className="min-h-[100px]" onChange={handleInputChange} />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 text-lg shimmer-button">
                Confirm My Booking
              </Button>
              
              <div className="text-center pt-2">
                <p className="text-xs text-muted-foreground mb-2">Or skip the form and book instantly:</p>
                <Button asChild variant="outline" className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/5 font-bold h-12 rounded-full">
                  <a href={`https://wa.me/917087657000?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20with%20The%20Glam%20House.`}>
                    Book Direct via WhatsApp
                  </a>
                </Button>
              </div>
            </form>
          </div>

          {/* Info Side */}
          <div className="hidden md:block bg-gradient-to-br from-primary to-accent p-12 text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl font-headline font-bold">Why Choose Us?</h2>

              <ul className="space-y-6">
                {[
                  { icon: User, title: "Expert Artists", desc: "Certified professionals with years of experience." },
                  { icon: Clock, title: "On-Time Service", desc: "We value your time as much as you do." },
                  { icon: MessageSquare, title: "Premium Products", desc: "Only high-end, safe products for your skin." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <p className="text-sm opacity-80">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-12">
                <p className="text-sm opacity-80 mb-2">Need help?</p>
                <a href="tel:+917087657000" className="text-2xl font-bold hover:underline">70876 57000</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default function BookingPage() {
  return (
    <React.Suspense fallback={<div className="pt-32 pb-24 text-center">Loading booking details...</div>}>
      <BookingFormContent />
    </React.Suspense>
  )
}
