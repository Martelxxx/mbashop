import Link from "next/link"
import { Shirt, Watch, Sparkles, Smartphone, HomeIcon, Briefcase, Baby, Utensils, Gem } from "lucide-react"

export default function MegaMenu() {
  return (
    <div className="absolute top-full left-0 w-screen bg-white shadow-lg rounded-b-lg z-50 border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Vêtements</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/boutique?category=vetements&subcategory=hommes"
                  className="text-muted-foreground hover:text-[#9370DB] flex items-center gap-2"
                >
                  <Shirt className="h-4 w-4" />
                  <span>Hommes</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/boutique?category=vetements&subcategory=femmes"
                  className="text-muted-foreground hover:text-[#9370DB] flex items-center gap-2"
                >
                  <Shirt className="h-4 w-4" />
                  <span>Femmes</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/boutique?category=vetements&subcategory=enfants"
                  className="text-muted-foreground hover:text-[#9370DB] flex items-center gap-2"
                >
                  <Baby className="h-4 w-4" />
                  <span>Enfants</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/boutique?category=vetements&subcategory=costumes"
                  className="text-muted-foreground hover:text-[#9370DB] flex items-center gap-2"
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Costumes</span>
                </Link>
              </li>
              <li>
                <Link href="/boutique?category=vetements" className="text-[#9370DB] hover:underline font-medium">
                  Voir tout
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Accessoires</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/boutique?category=montres"
                  className="text-muted-foreground hover:text-[#9370DB] flex items-center gap-2"
                >
                  <Watch className="h-4 w-4" />
                  <span>Montres</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/boutique?category=bijoux"
                  className="text-muted-foreground hover:text-[#9370DB] flex items-center gap-2"
                >
                  <Gem className="h-4 w-4" />
                  <span>Bijoux</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/boutique?category=sacs"
                  className="text-muted-foreground hover:text-[#9370DB] flex items-center gap-2"
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Sacs</span>
                </Link>
              </li>
              <li>
                <Link href="/boutique?category=accessoires" className="text-[#9370DB] hover:underline font-medium">
                  Voir tout
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Beauté</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/boutique?category=parfums"
                  className="text-muted-foreground hover:text-[#9370DB] flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Parfums</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/boutique?category=maquillage"
                  className="text-muted-foreground hover:text-[#9370DB] flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Maquillage</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/boutique?category=soins"
                  className="text-muted-foreground hover:text-[#9370DB] flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Soins</span>
                </Link>
              </li>
              <li>
                <Link href="/boutique?category=beaute" className="text-[#9370DB] hover:underline font-medium">
                  Voir tout
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Maison & Tech</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/boutique?category=electronique"
                  className="text-muted-foreground hover:text-[#9370DB] flex items-center gap-2"
                >
                  <Smartphone className="h-4 w-4" />
                  <span>Électronique</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/boutique?category=maison"
                  className="text-muted-foreground hover:text-[#9370DB] flex items-center gap-2"
                >
                  <HomeIcon className="h-4 w-4" />
                  <span>Décoration</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/boutique?category=cuisine"
                  className="text-muted-foreground hover:text-[#9370DB] flex items-center gap-2"
                >
                  <Utensils className="h-4 w-4" />
                  <span>Cuisine</span>
                </Link>
              </li>
              <li>
                <Link href="/boutique?category=maison-tech" className="text-[#9370DB] hover:underline font-medium">
                  Voir tout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
