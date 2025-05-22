import type { Metadata } from "next"
import { Suspense } from "react"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"
import ProductSort from "@/components/product-sort"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"
import { Skeleton } from "@/components/ui/skeleton"
import { Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Boutique | MBA Boutique",
  description:
    "Découvrez notre collection de produits de qualité. Vêtements, montres, parfums et plus avec livraison rapide au Sénégal.",
}

export default function ShopPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const category = typeof searchParams.category === "string" ? searchParams.category : undefined
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : undefined
  const minPrice = typeof searchParams.minPrice === "string" ? searchParams.minPrice : undefined
  const maxPrice = typeof searchParams.maxPrice === "string" ? searchParams.maxPrice : undefined

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Home className="h-4 w-4" />
            <span className="sr-only">Accueil</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/boutique">Boutique</BreadcrumbLink>
        </BreadcrumbItem>
        {category && (
          <BreadcrumbItem>
            <BreadcrumbLink href={`/boutique?category=${category}`} isCurrentPage>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <ProductFilters category={category} minPrice={minPrice} maxPrice={maxPrice} />

          {/* AdSense Sidebar */}
          <div className="mt-8 w-full h-[600px] bg-gray-100 flex items-center justify-center">
            {/* <!-- INSERT GOOGLE ADSENSE CODE HERE --> */}
            <p className="text-muted-foreground">Espace Publicitaire</p>
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="text-3xl font-bold font-heading">
              {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : "Tous les Produits"}
            </h1>
            <ProductSort sort={sort} />
          </div>

          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid category={category} sort={sort} minPrice={minPrice} maxPrice={maxPrice} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(9)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border rounded-lg p-4">
            <Skeleton className="w-full aspect-square rounded-md mb-4" />
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-4" />
            <Skeleton className="h-6 w-1/4" />
          </div>
        ))}
    </div>
  )
}
