import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Truck, CreditCard, Package, RotateCcw, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ | MBA Boutique",
  description:
    "Trouvez des réponses à vos questions sur les commandes, les livraisons, les paiements et les retours chez MBA Boutique.",
}

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Comment Ça Marche</h1>
        <p className="text-xl text-muted-foreground">
          Trouvez des réponses à vos questions sur les commandes, les livraisons, les paiements et les retours.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-16">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="h-12 w-12 rounded-full bg-[#9370DB]/10 flex items-center justify-center mx-auto mb-4">
              <Package className="h-6 w-6 text-[#9370DB]" />
            </div>
            <h3 className="font-bold mb-2">Commandes</h3>
            <p className="text-sm text-muted-foreground">Comment passer commande et suivre vos achats</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="h-12 w-12 rounded-full bg-[#9370DB]/10 flex items-center justify-center mx-auto mb-4">
              <Truck className="h-6 w-6 text-[#9370DB]" />
            </div>
            <h3 className="font-bold mb-2">Livraisons</h3>
            <p className="text-sm text-muted-foreground">Délais et zones de livraison au Sénégal</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="h-12 w-12 rounded-full bg-[#9370DB]/10 flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-6 w-6 text-[#9370DB]" />
            </div>
            <h3 className="font-bold mb-2">Paiements</h3>
            <p className="text-sm text-muted-foreground">Méthodes de paiement sécurisées disponibles</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="h-12 w-12 rounded-full bg-[#9370DB]/10 flex items-center justify-center mx-auto mb-4">
              <RotateCcw className="h-6 w-6 text-[#9370DB]" />
            </div>
            <h3 className="font-bold mb-2">Retours</h3>
            <p className="text-sm text-muted-foreground">Politique de retour et remboursements</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="commandes" className="max-w-3xl mx-auto mb-16">
        <TabsList className="w-full grid grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="commandes">Commandes</TabsTrigger>
          <TabsTrigger value="livraisons">Livraisons</TabsTrigger>
          <TabsTrigger value="paiements">Paiements</TabsTrigger>
          <TabsTrigger value="retours">Retours</TabsTrigger>
        </TabsList>
        <TabsContent value="commandes" className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Comment passer une commande sur MBA Boutique ?</AccordionTrigger>
              <AccordionContent>
                Pour passer une commande, parcourez notre catalogue, sélectionnez les produits qui vous intéressent,
                ajoutez-les à votre panier, puis procédez au paiement en suivant les étapes indiquées. Vous pouvez créer
                un compte pour suivre vos commandes ou commander en tant qu'invité.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Comment suivre ma commande ?</AccordionTrigger>
              <AccordionContent>
                Après avoir passé votre commande, vous recevrez un email de confirmation avec un numéro de suivi. Vous
                pouvez également suivre votre commande en vous connectant à votre compte sur notre site et en accédant à
                la section "Mes commandes".
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Puis-je modifier ma commande après l'avoir passée ?</AccordionTrigger>
              <AccordionContent>
                Vous pouvez modifier votre commande uniquement si elle n'a pas encore été traitée. Pour ce faire,
                contactez notre service client dès que possible par téléphone ou par email avec votre numéro de
                commande.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Comment annuler ma commande ?</AccordionTrigger>
              <AccordionContent>
                Pour annuler votre commande, contactez notre service client immédiatement. Si la commande n'a pas encore
                été expédiée, nous pourrons procéder à l'annulation et au remboursement. Une fois expédiée, vous devrez
                suivre notre procédure de retour.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="livraisons" className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Quels sont les délais de livraison ?</AccordionTrigger>
              <AccordionContent>
                Les délais de livraison varient selon votre localisation. À Dakar, la livraison est généralement
                effectuée sous 24 à 48 heures. Pour les autres régions du Sénégal, comptez 2 à 4 jours ouvrables. Ces
                délais sont indicatifs et peuvent varier selon la disponibilité des produits.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quelles sont les zones de livraison couvertes ?</AccordionTrigger>
              <AccordionContent>
                Nous livrons dans toutes les régions du Sénégal. Les frais de livraison varient selon la distance et le
                poids des articles. Pour les zones éloignées, des frais supplémentaires peuvent s'appliquer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Comment suivre ma livraison ?</AccordionTrigger>
              <AccordionContent>
                Une fois votre commande expédiée, vous recevrez un email avec un numéro de suivi. Vous pourrez suivre
                votre colis en temps réel via notre site ou l'application de notre partenaire de livraison. Notre
                service client est également disponible pour vous fournir des mises à jour.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Que faire si je ne suis pas disponible lors de la livraison ?</AccordionTrigger>
              <AccordionContent>
                Si vous n'êtes pas disponible lors de la livraison, notre livreur tentera de vous contacter par
                téléphone. Vous pouvez également convenir d'un lieu de livraison alternatif ou d'une heure qui vous
                convient mieux. En cas d'absence répétée, le colis sera retourné à notre entrepôt et vous serez contacté
                pour organiser une nouvelle livraison.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="paiements" className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Quels modes de paiement acceptez-vous ?</AccordionTrigger>
              <AccordionContent>
                Nous acceptons plusieurs modes de paiement : paiement à la livraison (espèces), transferts d'argent via
                Orange Money, Wave, ou Free Money, cartes bancaires (Visa, Mastercard) et virements bancaires pour les
                commandes importantes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Le paiement en ligne est-il sécurisé ?</AccordionTrigger>
              <AccordionContent>
                Oui, tous nos paiements en ligne sont sécurisés. Nous utilisons des protocoles de cryptage SSL pour
                protéger vos informations personnelles et bancaires. Nous ne stockons jamais vos données de carte
                bancaire sur nos serveurs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Puis-je payer en plusieurs fois ?</AccordionTrigger>
              <AccordionContent>
                Pour les commandes importantes, nous proposons des options de paiement échelonné. Contactez notre
                service client pour discuter des modalités et établir un plan de paiement adapté à vos besoins.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Quand suis-je débité après ma commande ?</AccordionTrigger>
              <AccordionContent>
                Pour les paiements par carte bancaire, le débit est effectué immédiatement après la validation de votre
                commande. Pour les paiements à la livraison, vous payez au moment de la réception de votre colis. Pour
                les virements bancaires, la commande est traitée après réception du paiement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="retours" className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Quelle est votre politique de retour ?</AccordionTrigger>
              <AccordionContent>
                Vous disposez de 7 jours à compter de la réception de votre commande pour retourner un article. Le
                produit doit être dans son état d'origine, non utilisé et dans son emballage d'origine. Certains
                articles comme les produits personnalisés ou les articles d'hygiène ne sont pas éligibles au retour.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Comment effectuer un retour ?</AccordionTrigger>
              <AccordionContent>
                Pour effectuer un retour, contactez notre service client pour obtenir un numéro d'autorisation de
                retour. Emballez soigneusement l'article avec tous ses accessoires et la facture originale. Vous pouvez
                soit déposer le colis à notre boutique, soit organiser un enlèvement avec notre service de livraison
                (des frais peuvent s'appliquer).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Comment obtenir un remboursement ?</AccordionTrigger>
              <AccordionContent>
                Une fois votre retour reçu et vérifié, nous procéderons au remboursement selon le mode de paiement
                utilisé lors de l'achat. Les remboursements par carte bancaire prennent généralement 5 à 10 jours
                ouvrables pour apparaître sur votre compte. Pour les autres modes de paiement, le délai peut varier.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Que faire si j'ai reçu un produit défectueux ?</AccordionTrigger>
              <AccordionContent>
                Si vous recevez un produit défectueux, contactez immédiatement notre service client avec des photos du
                défaut. Nous organiserons un échange ou un remboursement selon votre préférence. Les frais de retour
                pour les produits défectueux sont pris en charge par MBA Boutique.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold font-heading text-center mb-8">Vous avez d'autres questions ?</h2>
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <div className="h-16 w-16 rounded-full bg-[#9370DB]/10 flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-[#9370DB]" />
          </div>
          <h3 className="text-xl font-bold mb-4">Contactez notre équipe</h3>
          <p className="text-muted-foreground mb-6">
            Notre équipe de support client est disponible pour répondre à toutes vos questions du lundi au samedi, de 9h
            à 18h.
          </p>
          <Button asChild className="bg-[#9370DB] hover:bg-[#9370DB]/90">
            <Link href="/contact">
              Nous Contacter <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
