import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Home, Heart, Share2, Star, Truck, RotateCcw } from "lucide-react"
import AddToCartButton from "@/components/add-to-cart-button"
import ProductImageGallery from "@/components/product-image-gallery"
import RelatedProducts from "@/components/related-products"
import { getProductBySlug } from "@/lib/products"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    return {
      title: "Produit non trouvé | MBA Boutique",
      description: "Le produit que vous recherchez n'existe pas.",
    }
  }

  return {
    title: `${product.name} | MBA Boutique`,
    description: product.description,
    openGraph: {
      images: [{ url: product.images[0], width: 1200, height: 630, alt: product.name }],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  // Schema.org Product structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images[0],
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "XOF",
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
    brand: {
      "@type": "Brand",
      name: "MBA Boutique",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
          <BreadcrumbItem>
            <BreadcrumbLink href={`/boutique?category=${product.category}`}>
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink isCurrentPage>{product.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <ProductImageGallery images={product.images} name={product.name} />

          <div className="space-y-6">
            {product.isNew && <Badge className="bg-[#9370DB] hover:bg-[#9370DB]/90">Nouveau</Badge>}

            <h1 className="text-3xl font-bold font-heading">{product.name}</h1>

            <div className="flex items-center gap-2">
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviewCount} avis)</span>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold">{product.price.toLocaleString()} FCFA</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {product.originalPrice.toLocaleString()} FCFA
                </span>
              )}
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            <div className="space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <AddToCartButton product={product} />
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Ajouter aux favoris</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Partager</span>
                </Button>
              </div>
            </div>

            <div className="border-t border-b py-6 space-y-4">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-[#9370DB] mt-0.5" />
                <div>
                  <h3 className="font-medium">Livraison Rapide</h3>
                  <p className="text-sm text-muted-foreground">
                    Livraison en 24-48h à Dakar, 2-4 jours pour le reste du Sénégal
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="h-5 w-5 text-[#9370DB] mt-0.5" />
                <div>
                  <h3 className="font-medium">Retours Faciles</h3>
                  <p className="text-sm text-muted-foreground">Retours gratuits sous 7 jours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Spécifications</TabsTrigger>
              <TabsTrigger value="reviews">Avis Clients</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <p>{product.fullDescription || product.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="mt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {product.specifications?.map((spec, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="font-medium">{spec.name}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {product.reviews?.map((review, index) => (
                  <div key={index} className="border-b pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                      </div>
                      <span className="font-medium">{review.author}</span>
                    </div>
                    <p className="text-muted-foreground">{review.content}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold font-heading mb-8">Produits Similaires</h2>
          <RelatedProducts category={product.category} currentProductId={product.id} />
        </div>

        {/* AdSense Section */}
        <div className="mt-16 w-full h-[250px] bg-gray-100 flex items-center justify-center">
          {/* <!-- INSERT GOOGLE ADSENSE CODE HERE --> */}
          <p className="text-muted-foreground">Espace Publicitaire</p>
        </div>
      </div>
    </>
  )
}
