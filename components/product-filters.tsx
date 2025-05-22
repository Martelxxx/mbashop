"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

interface ProductFiltersProps {
  category?: string
  minPrice?: string
  maxPrice?: string
}

export default function ProductFilters({ category, minPrice, maxPrice }: ProductFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()

  const [priceRange, setPriceRange] = useState<[number, number]>([
    minPrice ? Number.parseInt(minPrice) : 0,
    maxPrice ? Number.parseInt(maxPrice) : 500000,
  ])

  const [selectedCategories, setSelectedCategories] = useState<string[]>(category ? [category] : [])

  const [availability, setAvailability] = useState<string[]>([])

  useEffect(() => {
    if (category && !selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category])
    }
  }, [category, selectedCategories])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category)
      } else {
        return [...prev, category]
      }
    })
  }

  const handleAvailabilityChange = (value: string) => {
    setAvailability((prev) => {
      if (prev.includes(value)) {
        return prev.filter((v) => v !== value)
      } else {
        return [...prev, value]
      }
    })
  }

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]])
  }

  const applyFilters = () => {
    const params = new URLSearchParams()

    if (selectedCategories.length > 0) {
      params.set("category", selectedCategories[0])
    }

    if (priceRange[0] > 0) {
      params.set("minPrice", priceRange[0].toString())
    }

    if (priceRange[1] < 500000) {
      params.set("maxPrice", priceRange[1].toString())
    }

    if (availability.length > 0) {
      params.set("availability", availability.join(","))
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  const resetFilters = () => {
    setPriceRange([0, 500000])
    setSelectedCategories([])
    setAvailability([])
    router.push(pathname)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Filtres</h3>
        <Accordion type="multiple" defaultValue={["categories", "price", "availability"]} className="w-full">
          <AccordionItem value="categories">
            <AccordionTrigger>Catégories</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="vetements"
                    checked={selectedCategories.includes("vetements")}
                    onCheckedChange={() => handleCategoryChange("vetements")}
                  />
                  <Label htmlFor="vetements">Vêtements</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="montres"
                    checked={selectedCategories.includes("montres")}
                    onCheckedChange={() => handleCategoryChange("montres")}
                  />
                  <Label htmlFor="montres">Montres</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="parfums"
                    checked={selectedCategories.includes("parfums")}
                    onCheckedChange={() => handleCategoryChange("parfums")}
                  />
                  <Label htmlFor="parfums">Parfums</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="electronique"
                    checked={selectedCategories.includes("electronique")}
                    onCheckedChange={() => handleCategoryChange("electronique")}
                  />
                  <Label htmlFor="electronique">Électronique</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="maison"
                    checked={selectedCategories.includes("maison")}
                    onCheckedChange={() => handleCategoryChange("maison")}
                  />
                  <Label htmlFor="maison">Maison</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="accessoires"
                    checked={selectedCategories.includes("accessoires")}
                    onCheckedChange={() => handleCategoryChange("accessoires")}
                  />
                  <Label htmlFor="accessoires">Accessoires</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger>Prix</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Slider
                  defaultValue={[priceRange[0], priceRange[1]]}
                  max={500000}
                  step={5000}
                  value={[priceRange[0], priceRange[1]]}
                  onValueChange={handlePriceChange}
                />
                <div className="flex items-center justify-between">
                  <span>{priceRange[0].toLocaleString()} FCFA</span>
                  <span>{priceRange[1].toLocaleString()} FCFA</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="availability">
            <AccordionTrigger>Disponibilité</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="in-stock"
                    checked={availability.includes("in-stock")}
                    onCheckedChange={() => handleAvailabilityChange("in-stock")}
                  />
                  <Label htmlFor="in-stock">En stock</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="out-of-stock"
                    checked={availability.includes("out-of-stock")}
                    onCheckedChange={() => handleAvailabilityChange("out-of-stock")}
                  />
                  <Label htmlFor="out-of-stock">Rupture de stock</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col gap-2">
        <Button onClick={applyFilters} className="w-full bg-[#9370DB] hover:bg-[#9370DB]/90">
          Appliquer les filtres
        </Button>
        <Button onClick={resetFilters} variant="outline" className="w-full">
          Réinitialiser
        </Button>
      </div>
    </div>
  )
}
