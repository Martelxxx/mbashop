import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    name: "Vêtements",
    slug: "vetements",
    image: "/placeholder.svg?height=600&width=600&query=elegant clothing fashion",
    count: 120,
  },
  {
    name: "Montres",
    slug: "montres",
    image: "/placeholder.svg?height=600&width=600&query=luxury watches collection",
    count: 45,
  },
  {
    name: "Parfums",
    slug: "parfums",
    image: "/placeholder.svg?height=600&width=600&query=luxury perfume bottles",
    count: 38,
  },
  {
    name: "Électronique",
    slug: "electronique",
    image: "/placeholder.svg?height=600&width=600&query=modern electronics gadgets",
    count: 67,
  },
  {
    name: "Maison",
    slug: "maison",
    image: "/placeholder.svg?height=600&width=600&query=modern home decor",
    count: 52,
  },
  {
    name: "Accessoires",
    slug: "accessoires",
    image: "/placeholder.svg?height=600&width=600&query=fashion accessories",
    count: 83,
  },
]

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/boutique?category=${category.slug}`}
          className="group relative overflow-hidden rounded-lg"
        >
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
              <p className="text-white/80 text-sm">{category.count} produits</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
