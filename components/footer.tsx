import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="font-bold text-lg mb-4">MBA Boutique</h3>
            <p className="text-muted-foreground mb-4">
              Votre destination shopping en ligne au Sénégal. Qualité, rapidité et fiabilité garanties.
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com/mbaboutique" className="text-muted-foreground hover:text-[#9370DB]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com/mbaboutique" className="text-muted-foreground hover:text-[#9370DB]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com/mbaboutique" className="text-muted-foreground hover:text-[#9370DB]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/mbaboutique"
                className="text-muted-foreground hover:text-[#9370DB]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://youtube.com/mbaboutique" className="text-muted-foreground hover:text-[#9370DB]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-[#9370DB]">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="text-muted-foreground hover:text-[#9370DB]">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-muted-foreground hover:text-[#9370DB]">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-[#9370DB]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-[#9370DB]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/boutique?category=vetements" className="text-muted-foreground hover:text-[#9370DB]">
                  Vêtements
                </Link>
              </li>
              <li>
                <Link href="/boutique?category=montres" className="text-muted-foreground hover:text-[#9370DB]">
                  Montres
                </Link>
              </li>
              <li>
                <Link href="/boutique?category=parfums" className="text-muted-foreground hover:text-[#9370DB]">
                  Parfums
                </Link>
              </li>
              <li>
                <Link href="/boutique?category=electronique" className="text-muted-foreground hover:text-[#9370DB]">
                  Électronique
                </Link>
              </li>
              <li>
                <Link href="/boutique?category=maison" className="text-muted-foreground hover:text-[#9370DB]">
                  Maison
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Inscrivez-vous pour recevoir nos dernières offres et nouveautés.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Votre email" type="email" className="max-w-[220px]" />
              <Button size="icon" className="bg-[#9370DB] hover:bg-[#9370DB]/90">
                <Mail className="h-4 w-4" />
                <span className="sr-only">S'inscrire</span>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">Intelligence meets design — Synapse.</div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-[#9370DB]">
              Politique de Confidentialité
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-[#9370DB]">
              Conditions d'Utilisation
            </Link>
            <Link href="/shipping" className="text-muted-foreground hover:text-[#9370DB]">
              Livraison
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
