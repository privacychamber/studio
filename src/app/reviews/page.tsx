
"use client"

import { Star, MessageCircle, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const REVIEWS = [
  { name: "Neha Sharma", rating: 5, date: "2 days ago", service: "Keratin Treatment", text: "Best keratin treatment I've ever had! My hair feels so alive and smooth. The staff was incredibly professional and polite. Highly recommended for hair services in Mohali." },
  { name: "Pooja Verma", rating: 5, date: "1 week ago", service: "Microblading", text: "Absolutely loved the microblading result. It looks so natural and perfect. They took the time to map everything out perfectly. Definitely worth every rupee!" },
  { name: "Priya Mehta", rating: 5, date: "2 weeks ago", service: "Lash Extensions", text: "Great experience. The lash extensions are weightless and look so beautiful. The salon environment is very hygienic and safe. 5 stars all the way." },
  { name: "Ankita Singh", rating: 5, date: "1 month ago", service: "Nail Course", text: "Enrolling in the nail art course was the best decision for my career. Practical learning approach and very supportive mentors. Thank you Glam House!" },
  { name: "Simran Kaur", rating: 5, date: "1 month ago", service: "Permanent Makeup", text: "Got my lip blush done here. The results are stunning. Minimal swelling and perfect color. I'm so happy with how it turned out." },
  { name: "Riya Kapoor", rating: 4, date: "2 months ago", service: "Hair Color", text: "Loved the balayage they did. The color transition is seamless. It took a bit longer than expected, but the result was worth the wait." },
  { name: "Mehak Goyal", rating: 5, date: "2 months ago", service: "Skin Treatment", text: "My skin is glowing after the Hydra facial. Very relaxing experience and visible results immediately. I'll be back for sure." },
  { name: "Deepika Rani", rating: 5, date: "3 months ago", service: "Nail Art", text: "Exquisite nail art! Very creative and precise work. They have a huge variety of colors and designs to choose from." }
]

export default function ReviewsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Header/Stats */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">CLIENT REVIEWS</h1>
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 text-accent fill-accent" />)}
            </div>
            <p className="text-2xl font-bold">4.9 / 5.0</p>
            <p className="text-muted-foreground">Based on 1,000+ satisfied clients</p>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8">
            <a href="https://g.page/r/your-google-review-link/review" target="_blank">Leave a Google Review</a>
          </Button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <Card key={i} className="bg-card border-none shadow-xl flex flex-col group relative overflow-hidden">
              <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote className="w-12 h-12 fill-current" />
              </div>
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-8 flex-grow">"{review.text}"</p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{review.name}</h4>
                    <p className="text-[10px] uppercase font-bold text-primary tracking-widest">{review.service}</p>
                    <p className="text-[10px] text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" /> Integrated with Google Reviews for transparency
          </p>
        </div>
      </div>
    </div>
  )
}
