import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | MBA Boutique",
  description: "Contactez l'équipe MBA Boutique pour toute question ou assistance. Nous sommes là pour vous aider.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Contactez-Nous</h1>
        <p className="text-xl text-muted-foreground">
          Notre équipe est à votre disposition pour répondre à toutes vos questions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16">
        <div>
          <h2 className="text-2xl font-bold font-heading mb-6">Envoyez-nous un message</h2>
          <ContactForm />
        </div>
        <div>
          <h2 className="text-2xl font-bold font-heading mb-6">Nos coordonnées</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="h-10 w-10 rounded-full bg-[#9370DB]/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-[#9370DB]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Téléphone</h3>
                  <p className="text-muted-foreground mb-1">Appelez-nous directement</p>
                  <a href="tel:+221781234567" className="text-[#9370DB] hover:underline">
                    +221 78 123 45 67
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="h-10 w-10 rounded-full bg-[#9370DB]/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-[#9370DB]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground mb-1">Écrivez-nous à tout moment</p>
                  <a href="mailto:contact@mbaboutique.sn" className="text-[#9370DB] hover:underline">
                    contact@mbaboutique.sn
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="h-10 w-10 rounded-full bg-[#9370DB]/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-[#9370DB]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Adresse</h3>
                  <p className="text-muted-foreground mb-1">Visitez notre boutique</p>
                  <p>123 Avenue Cheikh Anta Diop, Dakar, Sénégal</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="h-10 w-10 rounded-full bg-[#9370DB]/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-[#9370DB]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Heures d'ouverture</h3>
                  <p className="text-muted-foreground mb-1">Notre disponibilité</p>
                  <p>Lundi - Samedi: 9h - 18h</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold font-heading text-center mb-8">Notre emplacement</h2>
        <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15436.02125199514!2d-17.47260565!3d14.7132503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f3b8e1d71d%3A0xb17c3947f28dce76!2sDakar%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653060291045!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MBA Boutique Location"
          ></iframe>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 md:p-16 text-center">
        <h2 className="text-2xl font-bold font-heading mb-4">Suivez-nous sur les réseaux sociaux</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Restez connecté avec nous et rejoignez notre communauté sur les réseaux sociaux pour découvrir nos dernières
          nouveautés.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://facebook.com/mbaboutique"
            className="h-12 w-12 rounded-full bg-[#9370DB]/10 flex items-center justify-center hover:bg-[#9370DB]/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#9370DB]"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://instagram.com/mbaboutique"
            className="h-12 w-12 rounded-full bg-[#9370DB]/10 flex items-center justify-center hover:bg-[#9370DB]/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#9370DB]"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://twitter.com/mbaboutique"
            className="h-12 w-12 rounded-full bg-[#9370DB]/10 flex items-center justify-center hover:bg-[#9370DB]/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#9370DB]"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://linkedin.com/company/mbaboutique"
            className="h-12 w-12 rounded-full bg-[#9370DB]/10 flex items-center justify-center hover:bg-[#9370DB]/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#9370DB]"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}
