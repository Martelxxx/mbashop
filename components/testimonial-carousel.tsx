"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

// Mock testimonials data
const testimonials = [
  {
    id: "1",
    name: "Fatou Diop",
    avatar: "/placeholder.svg?height=100&width=100&query=african woman portrait",
    role: "Cliente fidèle",
    content:
      "Je commande régulièrement chez MBA Boutique depuis plus de 2 ans. La qualité des produits est toujours au rendez-vous et la livraison est rapide. Je recommande vivement !",
    rating: 5,
  },
  {
    id: "2",
    name: "Amadou Sow",
    avatar: "/placeholder.svg?height=100&width=100&query=african man portrait",
    role: "Client satisfait",
    content:
      "J'ai commandé une montre pour l'anniversaire de mon frère. Elle est arrivée en parfait état et dans les délais. Le service client a été très réactif pour répondre à mes questions.",
    rating: 5,
  },
  {
    id: "3",
    name: "Mariama Bâ",
    avatar: "/placeholder.svg?height=100&width=100&query=african woman portrait with headscarf",
    role: "Cliente régulière",
    content:
      "Les parfums vendus par MBA Boutique sont authentiques et à des prix compétitifs. La livraison est toujours rapide et le packaging est soigné. Je suis très satisfaite !",
    rating: 4,
  },
  {
    id: "4",
    name: "Ibrahima Diallo",
    avatar: "/placeholder.svg?height=100&width=100&query=young african man portrait",
    role: "Nouveau client",
    content:
      "Première commande sur MBA Boutique et je suis agréablement surpris. Les produits sont conformes aux descriptions et la livraison a été plus rapide que prévu. Je reviendrai !",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1)
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2)
      } else {
        setVisibleTestimonials(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - visibleTestimonials + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - visibleTestimonials : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
              style={{ flex: `0 0 ${100 / visibleTestimonials}%` }}
            >
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm opacity-80">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-white/30"
                          }`}
                        />
                      ))}
                  </div>
                  <p className="italic">{testimonial.content}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white text-[#9370DB] border-[#9370DB] hover:bg-[#9370DB] hover:text-white rounded-full h-10 w-10 hidden md:flex"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Précédent</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white text-[#9370DB] border-[#9370DB] hover:bg-[#9370DB] hover:text-white rounded-full h-10 w-10 hidden md:flex"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Suivant</span>
      </Button>
    </div>
  )
}
