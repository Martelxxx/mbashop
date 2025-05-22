"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Eye } from "lucide-react"
import { useCart } from "./cart-provider"
import { useToast } from "@/components/ui/use-toast"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  image: string
  images: string[]
  slug: string
  category: string
  isNew?: boolean
  inStock: boolean
}

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    })

    toast({
      title: "Produit ajouté au panier",
      description: `${product.name} a été ajouté à votre panier.`,
    })
  }

  return (
    <div className="group relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link href={`/boutique/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Quick actions */}
          <div
            className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-2 transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Ajouter au panier</span>
            </Button>
            <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Ajouter aux favoris</span>
            </Button>
            <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full" asChild>
              <Link href={`/boutique/${product.slug}`}>
                <Eye className="h-4 w-4" />
                <span className="sr-only">Voir le produit</span>
              </Link>
            </Button>
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && <Badge className="bg-[#9370DB] hover:bg-[#9370DB]/90">Nouveau</Badge>}
            {product.originalPrice && (
              <Badge variant="outline" className="bg-red-500 text-white hover:bg-red-600 border-none">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="outline" className="bg-gray-500 text-white hover:bg-gray-600 border-none">
                Rupture
              </Badge>
            )}
          </div>
        </div>

        <div className="mt-3">
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{product.description}</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-medium">{product.price.toLocaleString()} FCFA</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {product.originalPrice.toLocaleString()} FCFA
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}
