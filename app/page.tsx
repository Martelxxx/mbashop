import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShieldCheck, Truck, Star } from "lucide-react"
import ProductCard from "@/components/product-card"
import InstagramFeed from "@/components/instagram-feed"
import TestimonialCarousel from "@/components/testimonial-carousel"
import CategoryGrid from "@/components/category-grid"
import DealOfTheDay from "@/components/deal-of-the-day"
import { getFeaturedProducts } from "@/lib/products"
import FeaturedBlog from "@/components/featured-blog"

export const metadata: Metadata = {
  title: "MBA Boutique | Shopping Fiable & Rapide au Sénégal",
  description:
    "Achetez vêtements, montres, parfums et plus. Livraison rapide, qualité garantie. Faites confiance à MBA Boutique.",
}

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] bg-gradient-to-r from-[#9370DB] to-[#6A0DAD] text-white">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-6">
            <Badge className="bg-white text-[#9370DB] hover:bg-white/90">Nouveau Collection</Badge>
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-up">La Qualité, à Votre Rythme.</h1>
            <p className="text-lg md:text-xl opacity-90">
              Découvrez notre sélection exclusive de produits de qualité, livrés rapidement partout au Sénégal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-white text-[#9370DB] hover:bg-white/90">
                <Link href="/boutique">
                  Voir les Produits <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/boutique">Commandez Maintenant</Link>
              </Button>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)" }}
        ></div>
      </section>

      {/* Deal of the Day Popup */}
      <DealOfTheDay />

      {/* Featured Categories */}
      <section className="py-16 px-4 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Catégories Populaires</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explorez notre sélection de produits de qualité dans nos catégories les plus populaires
          </p>
        </div>
        <CategoryGrid />
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-[#9370DB]/10 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-[#9370DB]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Rapidité</h3>
                <p className="text-muted-foreground">
                  Livraison express dans tout le Sénégal, avec suivi en temps réel de votre commande.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-[#9370DB]/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-[#9370DB]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fiabilité</h3>
                <p className="text-muted-foreground">
                  Produits authentiques et de qualité, avec garantie de satisfaction ou remboursement.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-[#9370DB]/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#9370DB]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Qualité</h3>
                <p className="text-muted-foreground">
                  Sélection rigoureuse de produits premium pour une expérience client exceptionnelle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold mb-0">Produits Populaires</h2>
          <Link href="/boutique" className="text-[#9370DB] hover:underline flex items-center">
            Voir tout <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-[#9370DB] to-[#6A0DAD] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clients</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              Découvrez les témoignages de nos clients satisfaits qui nous font confiance depuis plus de 5 ans
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Suivez-nous sur Instagram</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rejoignez notre communauté et découvrez nos dernières nouveautés
          </p>
        </div>
        <InstagramFeed />
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à découvrir nos produits?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Rejoignez plus de 1000 clients satisfaits et découvrez pourquoi ils nous font confiance
          </p>
          <Button asChild size="lg" className="bg-[#9370DB] hover:bg-[#9370DB]/90">
            <Link href="/boutique">
              Acheter Maintenant <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Blog */}
      <FeaturedBlog />

      {/* AdSense Section */}
      <section className="py-8 container mx-auto px-4">
        <div className="w-full h-[250px] bg-gray-100 flex items-center justify-center">
          {/* <!-- INSERT GOOGLE ADSENSE CODE HERE --> */}
          <p className="text-muted-foreground">Espace Publicitaire</p>
        </div>
      </section>
    </div>
  )
}
