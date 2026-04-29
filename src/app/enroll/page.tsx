
"use client"

import * as React from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { GraduationCap, Phone, User, MapPin, Mail, BookOpen, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const COURSES = [
  { id: "nail", name: "Nail Art Masterclass" },
  { id: "lash", name: "Eyelash Extension Course" },
  { id: "microblading", name: "Professional Microblading" },
  { id: "pmu", name: "Advance Permanent Makeup" },
  { id: "other", name: "Other / Custom Training" }
]

function EnrollContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toast } = useToast()

  const initialCourse = searchParams.get("course") || ""

  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    course: initialCourse,
    education: "",
    experience: "no",
    source: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName || !formData.phone || !formData.course || !formData.city) {
      toast({
        title: "Missing Information",
        description: "Please fill in all mandatory fields.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitted(true)
    localStorage.setItem("lastEnrollment", JSON.stringify(formData))

    toast({
      title: "Application Received!",
      description: "Our academy coordinator will reach out to you within 24 hours."
    })
  }

  const generateWaLink = () => {
    const message = `Hi! I'm ${formData.fullName} from ${formData.city}, interested in the ${formData.course} course. Please send more details.`
    return `https://wa.me/917087657000?text=${encodeURIComponent(message)}`
  }

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 container mx-auto px-4 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full text-center space-y-8 p-12 bg-card rounded-2xl shadow-2xl border border-accent/20"
        >
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
            <Sparkles className="w-10 h-10 text-accent" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 font-headline">Application Successful!</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">🎓 Thank you for choosing The Glam House Academy. Our enrollment team will call you shortly to discuss batch timings and fees.</p>
          </div>
          <div className="space-y-4 max-w-md mx-auto">
            <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-7 h-auto text-xl font-bold shadow-xl">
              <a href={generateWaLink()} target="_blank">Chat with Coordinator</a>
            </Button>
            <Button variant="ghost" className="w-full py-4 font-bold" onClick={() => router.push('/academy')}>
              Back to Courses
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-bold uppercase tracking-widest">
              <GraduationCap className="w-4 h-4" /> Academy Admissions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-headline">Enroll in Excellence</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Fill out the form below to start your professional journey in the beauty industry.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-12 bg-card p-8 md:p-16 rounded-[3rem] shadow-2xl border border-accent/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-accent" />

            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-headline flex items-center gap-2">
                <User className="w-6 h-6 text-primary" /> Personal Details
              </h3>

              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" name="fullName" placeholder="Enter your full name" required onChange={handleInputChange} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" onChange={handleInputChange} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City / Location *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="city" name="city" placeholder="e.g. Mohali, Chandigarh" className="pl-10" required onChange={handleInputChange} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Highest Education</Label>
                <Select onValueChange={(val) => handleSelectChange("education", val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Education" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10th">10th Standard</SelectItem>
                    <SelectItem value="12th">12th Standard</SelectItem>
                    <SelectItem value="graduate">Graduate</SelectItem>
                    <SelectItem value="post-graduate">Post Graduate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-headline flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" /> Course Selection
              </h3>

              <div className="space-y-2">
                <Label>Interested Course *</Label>
                <Select defaultValue={formData.course} onValueChange={(val) => handleSelectChange("course", val)}>
                  <SelectTrigger className="border-accent/40 bg-accent/5">
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {COURSES.map(c => <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Previous Beauty Experience?</Label>
                <RadioGroup defaultValue="no" onValueChange={(val) => handleSelectChange("experience", val)} className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="exp-yes" />
                    <Label htmlFor="exp-yes" className="font-normal">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="exp-no" />
                    <Label htmlFor="exp-no" className="font-normal">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>How did you hear about us?</Label>
                <Select onValueChange={(val) => handleSelectChange("source", val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="google">Google Search</SelectItem>
                    <SelectItem value="referral">Friend / Referral</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Any specific questions?</Label>
                <Textarea id="message" name="message" placeholder="Ask us anything about batch dates, fees, or training." className="min-h-[120px]" onChange={handleInputChange} />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-16 text-xl shadow-xl shimmer-button mt-4">
                Apply for Enrollment
              </Button>

              <p className="text-[10px] text-center text-muted-foreground opacity-60">
                By submitting this form, you agree to be contacted by our academy team via call/message.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function EnrollPage() {
  return (
    <React.Suspense fallback={<div className="pt-32 pb-24 text-center">Loading...</div>}>
      <EnrollContent />
    </React.Suspense>
  )
}
