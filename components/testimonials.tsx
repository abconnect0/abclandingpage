import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Any Business Connect has transformed how I manage my property rentals. The booking system is seamless, and I've seen a 40% increase in inquiries since joining.",
      author: "Avery Burell",
      title: "Property Rental",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As a DJ, I need a platform that lets me promote events and share my music. ABC does both perfectly, and the streaming feature has helped me reach fans who can't make it to live shows.",
      author: "DJ ZWavy",
      title: "Live DJ & Events",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The storefront feature has been a game-changer for my custom rug business. I can showcase my work, take orders, and manage my schedule all in one place.",
      author: "JohnnyRugz",
      title: "Custom Rugs",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "I've tried other platforms, but ABC's focus on local businesses and community members makes all the difference. My fitness classes are consistently booked, and the community is incredibly supportive.",
      author: "Coach Thornton",
      title: "Fitness Training",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="bg-card border-purple-800/30">
          <CardContent className="pt-6">
            <QuoteIcon className="h-8 w-8 text-purple-500 mb-2 opacity-50" />
            <p className="text-purple-100 italic">{testimonial.quote}</p>
          </CardContent>
          <CardFooter>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden relative">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-white">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
