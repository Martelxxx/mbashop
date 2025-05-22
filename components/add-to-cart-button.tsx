"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { useCart } from "./cart-provider"
import { useToast } from "@/components/ui/use-toast"

interface Product {
  id: string
  name: string
  price: number
  image: string
  inStock: boolean
}

export default function AddToCartButton({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const { toast } = useToast()

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    })

    toast({
      title: "Produit ajouté au panier",
      description: `${quantity} x ${product.name} a été ajouté à votre panier.`,
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
          className="rounded-r-none"
        >
          <Minus className="h-4 w-4" />
          <span className="sr-only">Diminuer</span>
        </Button>
        <Input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
          className="w-16 text-center rounded-none border-x-0"
        />
        <Button variant="outline" size="icon" onClick={increaseQuantity} className="rounded-l-none">
          <Plus className="h-4 w-4" />
          <span className="sr-only">Augmenter</span>
        </Button>
      </div>

      <Button onClick={handleAddToCart} className="bg-[#9370DB] hover:bg-[#9370DB]/90" disabled={!product.inStock}>
        <ShoppingCart className="mr-2 h-5 w-5" />
        {product.inStock ? "Ajouter au panier" : "Rupture de stock"}
      </Button>
    </div>
  )
}
