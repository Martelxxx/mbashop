"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Search, Menu, ShoppingCart, User, Heart, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "./cart-provider"
import MegaMenu from "./mega-menu"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const { cartItems } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur-md",
      )}
    >
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 h-10 flex items-center justify-between text-sm">
          <p className="hidden sm:block text-muted-foreground">Livraison gratuite à partir de 25,000 FCFA</p>
          <div className="flex items-center gap-4">
            <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
              Aide
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between py-4 border-b">
                <Link href="/" className="font-bold text-xl font-heading">
                  MBA Boutique
                </Link>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Fermer</span>
                  </Button>
                </SheetTrigger>
              </div>
              <div className="py-4">
                <Input placeholder="Rechercher..." className="mb-4" />
                <nav className="space-y-6">
                  <div className="space-y-3">
                    <Link
                      href="/"
                      className={cn(
                        "block text-lg font-medium",
                        pathname === "/" ? "text-[#9370DB]" : "text-foreground",
                      )}
                    >
                      Accueil
                    </Link>
                    <Link
                      href="/boutique"
                      className={cn(
                        "block text-lg font-medium",
                        pathname.startsWith("/boutique") ? "text-[#9370DB]" : "text-foreground",
                      )}
                    >
                      Boutique
                    </Link>
                    <Link
                      href="/a-propos"
                      className={cn(
                        "block text-lg font-medium",
                        pathname === "/a-propos" ? "text-[#9370DB]" : "text-foreground",
                      )}
                    >
                      À Propos
                    </Link>
                    <Link
                      href="/faq"
                      className={cn(
                        "block text-lg font-medium",
                        pathname === "/faq" ? "text-[#9370DB]" : "text-foreground",
                      )}
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/contact"
                      className={cn(
                        "block text-lg font-medium",
                        pathname === "/contact" ? "text-[#9370DB]" : "text-foreground",
                      )}
                    >
                      Contact
                    </Link>
                  </div>
                  <div className="space-y-3 border-t pt-6">
                    <h3 className="text-sm font-medium text-muted-foreground">Catégories</h3>
                    <div className="space-y-2">
                      <Link href="/boutique?category=vetements" className="block">
                        Vêtements
                      </Link>
                      <Link href="/boutique?category=montres" className="block">
                        Montres
                      </Link>
                      <Link href="/boutique?category=parfums" className="block">
                        Parfums
                      </Link>
                      <Link href="/boutique?category=electronique" className="block">
                        Électronique
                      </Link>
                      <Link href="/boutique?category=maison" className="block">
                        Maison
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="mt-auto border-t pt-4">
                <div className="flex gap-4">
                  <Link href="https://facebook.com/mbaboutique" className="text-muted-foreground hover:text-foreground">
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
                  <Link
                    href="https://instagram.com/mbaboutique"
                    className="text-muted-foreground hover:text-foreground"
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
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="https://twitter.com/mbaboutique" className="text-muted-foreground hover:text-foreground">
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
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-heading font-bold text-xl md:text-2xl">MBA Boutique</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-[#9370DB]",
              pathname === "/" ? "text-[#9370DB]" : "text-foreground",
            )}
          >
            Accueil
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <Link
              href="/boutique"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#9370DB] flex items-center gap-1",
                pathname.startsWith("/boutique") ? "text-[#9370DB]" : "text-foreground",
              )}
            >
              Boutique
              <ChevronDown className="h-4 w-4" />
            </Link>
            {isMegaMenuOpen && <MegaMenu />}
          </div>
          <Link
            href="/a-propos"
            className={cn(
              "text-sm font-medium transition-colors hover:text-[#9370DB]",
              pathname === "/a-propos" ? "text-[#9370DB]" : "text-foreground",
            )}
          >
            À Propos
          </Link>
          <Link
            href="/faq"
            className={cn(
              "text-sm font-medium transition-colors hover:text-[#9370DB]",
              pathname === "/faq" ? "text-[#9370DB]" : "text-foreground",
            )}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium transition-colors hover:text-[#9370DB]",
              pathname === "/contact" ? "text-[#9370DB]" : "text-foreground",
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Search and Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {isSearchOpen ? (
            <div className="flex items-center">
              <Input placeholder="Rechercher..." className="w-full md:w-[200px] h-9" autoFocus />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Fermer</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Rechercher</span>
            </Button>
          )}

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Compte</span>
          </Button>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Favoris</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-[#9370DB]">
                    {totalItems}
                  </Badge>
                )}
                <span className="sr-only">Panier</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <h2 className="font-bold text-lg">Votre Panier</h2>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Fermer</span>
                    </Button>
                  </SheetTrigger>
                </div>

                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center flex-1 py-12">
                    <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">Votre panier est vide</h3>
                    <p className="text-muted-foreground mb-6">Découvrez nos produits et ajoutez-les à votre panier</p>
                    <SheetTrigger asChild>
                      <Button asChild className="bg-[#9370DB] hover:bg-[#9370DB]/90">
                        <Link href="/boutique">Continuer mes achats</Link>
                      </Button>
                    </SheetTrigger>
                  </div>
                ) : (
                  <>
                    <div className="flex-1 overflow-auto py-4">
                      <ul className="space-y-4">
                        {cartItems.map((item) => (
                          <li key={item.id} className="flex gap-4">
                            <div className="h-20 w-20 bg-gray-100 rounded-md overflow-hidden">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-sm text-muted-foreground">Quantité: {item.quantity}</p>
                              <p className="font-medium">{item.price.toLocaleString()} FCFA</p>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <X className="h-4 w-4" />
                              <span className="sr-only">Supprimer</span>
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t py-4">
                      <div className="flex justify-between mb-2">
                        <span>Sous-total</span>
                        <span className="font-medium">
                          {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}{" "}
                          FCFA
                        </span>
                      </div>
                      <div className="flex justify-between mb-6">
                        <span>Livraison</span>
                        <span>Calculé à la caisse</span>
                      </div>
                      <Button className="w-full bg-[#9370DB] hover:bg-[#9370DB]/90">Passer à la caisse</Button>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="w-full mt-2">
                          Continuer mes achats
                        </Button>
                      </SheetTrigger>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
