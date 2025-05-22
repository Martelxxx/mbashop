"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductSortProps {
  sort?: string
}

export default function ProductSort({ sort }: ProductSortProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", value)
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <Select defaultValue={sort || "featured"} onValueChange={handleSortChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Trier par" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="featured">Produits vedettes</SelectItem>
        <SelectItem value="newest">Nouveautés</SelectItem>
        <SelectItem value="price-asc">Prix: croissant</SelectItem>
        <SelectItem value="price-desc">Prix: décroissant</SelectItem>
        <SelectItem value="rating">Mieux notés</SelectItem>
      </SelectContent>
    </Select>
  )
}
