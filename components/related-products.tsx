import ProductCard from "@/components/product-card"
import { getRelatedProducts } from "@/lib/products"

interface RelatedProductsProps {
  category: string
  currentProductId: string
}

export default async function RelatedProducts({ category, currentProductId }: RelatedProductsProps) {
  const products = await getRelatedProducts(category, currentProductId)

  if (products.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
