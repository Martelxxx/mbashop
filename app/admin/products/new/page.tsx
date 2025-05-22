import ProductForm from "@/components/admin/product-form"

export default function NewProductPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Add New Product</h1>
      <ProductForm />
    </div>
  )
}
