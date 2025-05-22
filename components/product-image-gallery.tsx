"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductImageGalleryProps {
  images: string[]
  name: string
}

export default function ProductImageGallery({ images, name }: ProductImageGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={mainImage || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-square overflow-hidden rounded-md bg-gray-100 ${
              mainImage === image ? "ring-2 ring-[#9370DB]" : ""
            }`}
            onClick={() => setMainImage(image)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${name} - Vue ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 10vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
