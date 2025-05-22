"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Clock } from "lucide-react"

export default function DealOfTheDay() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    // Check if the user has previously closed the popup
    const dealClosed = localStorage.getItem("dealOfDayClosed")
    const lastClosedDate = localStorage.getItem("dealOfDayClosedDate")
    const today = new Date().toDateString()

    // Only show if not closed today
    if (dealClosed !== "true" || lastClosedDate !== today) {
      // Show the popup after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const newSeconds = prev.seconds - 1
        if (newSeconds >= 0) {
          return { ...prev, seconds: newSeconds }
        }

        const newMinutes = prev.minutes - 1
        if (newMinutes >= 0) {
          return { ...prev, minutes: newMinutes, seconds: 59 }
        }

        const newHours = prev.hours - 1
        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 }
        }

        clearInterval(interval)
        return { hours: 0, minutes: 0, seconds: 0 }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm">
      <Card className="shadow-lg border-[#9370DB]/20">
        <CardContent className="p-0">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-6 w-6 rounded-full bg-white/80 hover:bg-white z-10"
              onClick={() => {
                setIsVisible(false)
                // Store that user closed the popup today
                localStorage.setItem("dealOfDayClosed", "true")
                localStorage.setItem("dealOfDayClosedDate", new Date().toDateString())
              }}
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Fermer</span>
            </Button>
            <div className="relative h-40 w-full">
              <Image src="/placeholder-rfbp9.png" alt="Deal of the day" fill className="object-cover rounded-t-lg" />
              <div className="absolute top-2 left-2">
                <Badge className="bg-red-500 hover:bg-red-600">-40%</Badge>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">Offre du Jour</h3>
              <p className="text-sm text-muted-foreground mb-3">Montre Classique Homme - Edition Limitée</p>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-lg">59,900 FCFA</span>
                  <span className="text-sm text-muted-foreground line-through">99,900 FCFA</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-[#9370DB]">
                  <Clock className="h-4 w-4" />
                  <span>
                    {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <Button asChild className="w-full bg-[#9370DB] hover:bg-[#9370DB]/90">
                <Link href="/boutique/montre-classique-homme">Acheter Maintenant</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
