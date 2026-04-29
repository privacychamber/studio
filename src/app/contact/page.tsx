
"use client"

import { Phone, Mail, MapPin, Instagram, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly."
    })
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">GET IN TOUCH</h1>
            <p className="text-muted-foreground font-accent text-xl">We're Here to Assist Your Transformation</p>
          </div>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12">
            {/* Form */}
            <Card className="p-8 md:p-12 border shadow-2xl rounded-[2rem]">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest">Interested In</Label>
                  <Input id="interest" placeholder="e.g. Keratin Treatment, Nail Course" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="msg">Message</Label>
                  <Textarea id="msg" placeholder="How can we help you?" className="min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 shimmer-button">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Call / WhatsApp</h3>
                    <p className="text-muted-foreground">70876 57000</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-muted-foreground">theglamhouse.salon@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-muted-foreground">Sco No. 122, Phase 1&2, M&M Market, Sector 60, Mohali, Punjab 160059</p>
                  </div>
                </div>
              </div>

              <Card className="bg-card border p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-4 font-bold">
                  <Clock className="w-5 h-5 text-primary" /> Opening Hours
                </div>
                <table className="w-full text-sm">
                  <tbody className="divide-y">
                    <tr className="py-2">
                      <td className="py-2 text-muted-foreground">Mon – Sat</td>
                      <td className="py-2 text-right font-semibold">9 AM – 8 PM</td>
                    </tr>
                    <tr className="py-2">
                      <td className="py-2 text-muted-foreground">Sunday</td>
                      <td className="py-2 text-right font-semibold">10 AM – 6 PM</td>
                    </tr>
                  </tbody>
                </table>
              </Card>

              {/* Map Placeholder */}
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors flex flex-col items-center justify-center text-center p-4">
                  <MapPin className="w-10 h-10 text-primary mb-2" />
                  <p className="font-bold text-sm">Find Us in Sector 60, Mohali</p>
                  <p className="text-[10px] opacity-60">Google Maps Integration Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
