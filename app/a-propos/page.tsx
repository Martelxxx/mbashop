import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "À Propos | MBA Boutique",
  description:
    "Découvrez l'histoire de MBA Boutique, notre mission et nos valeurs. Votre partenaire de confiance pour le shopping en ligne au Sénégal.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Notre Histoire</h1>
        <p className="text-xl text-muted-foreground">
          Depuis plus de 5 ans, MBA Boutique est devenu le partenaire de confiance pour le shopping en ligne au Sénégal.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold font-heading mb-6">Notre Mission</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Chez MBA Boutique, notre mission est simple : offrir une expérience d'achat en ligne exceptionnelle aux
            Sénégalais, en combinant qualité des produits, rapidité de livraison et service client irréprochable.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Nous croyons que chaque client mérite le meilleur, c'est pourquoi nous sélectionnons rigoureusement chaque
            produit que nous proposons, en veillant à ce qu'il réponde à nos standards élevés de qualité.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-[#9370DB] shrink-0 mt-0.5" />
              <p>Plus de 1000 clients satisfaits à travers le Sénégal</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-[#9370DB] shrink-0 mt-0.5" />
              <p>Livraison rapide et sécurisée dans tout le pays</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-[#9370DB] shrink-0 mt-0.5" />
              <p>Service client disponible 7j/7 pour vous accompagner</p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/modern-office-teamwork.png" alt="L'équipe MBA Boutique" fill className="object-cover" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#9370DB] to-[#6A0DAD] text-white rounded-xl p-8 md:p-16 mb-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold font-heading mb-6">Notre Engagement</h2>
            <p className="text-lg opacity-90 mb-6">
              Nous nous engageons à offrir une expérience d'achat en ligne exceptionnelle, basée sur trois piliers
              fondamentaux :
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Rapidité</h3>
                <p className="opacity-90">
                  Nous comprenons l'importance de recevoir vos achats rapidement. C'est pourquoi nous avons optimisé
                  notre chaîne logistique pour garantir des délais de livraison courts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fiabilité</h3>
                <p className="opacity-90">
                  La confiance est au cœur de notre relation avec nos clients. Nous tenons nos promesses et veillons à
                  ce que chaque transaction soit sécurisée et transparente.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Qualité</h3>
                <p className="opacity-90">
                  Nous ne faisons aucun compromis sur la qualité. Chaque produit que nous proposons est soigneusement
                  sélectionné pour répondre à nos standards élevés.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image src="/happy-customers-package.png" alt="Livraison MBA Boutique" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold font-heading text-center mb-12">Notre Parcours</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#9370DB]/20"></div>
          <div className="space-y-16">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#9370DB] border-4 border-white"></div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-16">
                  <h3 className="text-xl font-bold mb-2">2018</h3>
                  <p className="text-muted-foreground">
                    Lancement de MBA Boutique avec une petite sélection de produits et une vision ambitieuse.
                  </p>
                </div>
                <div className="md:pl-16"></div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#9370DB] border-4 border-white"></div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="md:pr-16"></div>
                <div className="md:pl-16">
                  <h3 className="text-xl font-bold mb-2">2020</h3>
                  <p className="text-muted-foreground">
                    Expansion de notre catalogue et mise en place d'un réseau de livraison couvrant tout le Sénégal.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#9370DB] border-4 border-white"></div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-16">
                  <h3 className="text-xl font-bold mb-2">2022</h3>
                  <p className="text-muted-foreground">
                    Célébration de notre 1000ème client et lancement de notre programme de fidélité.
                  </p>
                </div>
                <div className="md:pl-16"></div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#9370DB] border-4 border-white"></div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="md:pr-16"></div>
                <div className="md:pl-16">
                  <h3 className="text-xl font-bold mb-2">2025</h3>
                  <p className="text-muted-foreground">
                    Aujourd'hui, MBA Boutique est une référence du e-commerce au Sénégal, avec une communauté fidèle et
                    grandissante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-24">
        <h2 className="text-3xl font-bold font-heading mb-6">Nos Partenaires</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Nous collaborons avec les meilleures marques et entreprises pour vous offrir des produits et services de
          qualité.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                <Image
                  src="/placeholder-logo.svg"
                  alt={`Partenaire ${i + 1}`}
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 md:p-16 text-center">
        <h2 className="text-3xl font-bold font-heading mb-6">Rejoignez l'Aventure</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Découvrez notre sélection de produits de qualité et rejoignez notre communauté de clients satisfaits.
        </p>
        <Button asChild size="lg" className="bg-[#9370DB] hover:bg-[#9370DB]/90">
          <Link href="/boutique">
            Découvrir nos Produits <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
