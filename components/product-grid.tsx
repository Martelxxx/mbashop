import ProductCard from "@/components/product-card"
import { getProductsByCategory } from "@/lib/products"

interface ProductGridProps {
  category?: string
  sort?: string
  minPrice?: string
  maxPrice?: string
}

export default async function ProductGrid({ category, sort, minPrice, maxPrice }: ProductGridProps) {
  let products = await getProductsByCategory(category)

  // Filter by price if provided
  if (minPrice || maxPrice) {
    const min = minPrice ? Number.parseInt(minPrice) : 0
    const max = maxPrice ? Number.parseInt(maxPrice) : Number.POSITIVE_INFINITY

    products = products.filter((product) => product.price >= min && product.price <= max)
  }

  // Sort products
  if (sort) {
    switch (sort) {
      case "price-asc":
        products.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        products.sort((a, b) => b.price - a.price)
        break
      case "newest":
        products.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1))
        break
      case "rating":
        products.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">Aucun produit trouvé</h3>
        <p className="text-muted-foreground">Essayez de modifier vos filtres ou consultez nos autres catégories.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
