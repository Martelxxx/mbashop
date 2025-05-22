import { notFound } from "next/navigation"
import ProductForm from "@/components/admin/product-form"
import { getProductBySlug } from "@/lib/products"

interface ProductEditPageProps {
  params: {
    id: string
  }
}

export default async function ProductEditPage({ params }: ProductEditPageProps) {
  // In a real app, you would fetch the product by ID
  // For this example, we'll use the slug to find the product
  const product = await getProductBySlug(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Edit Product</h1>
      <ProductForm product={product} />
    </div>
  )
}
