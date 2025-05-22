import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from "@/components/cart-provider"
import SynapseSignature from "@/components/synapse-signature"

// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

// Configure Playfair Display font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MBA Boutique | Shopping Fiable & Rapide au Sénégal",
  description:
    "Achetez vêtements, montres, parfums et plus. Livraison rapide, qualité garantie. Faites confiance à MBA Boutique.",
  openGraph: {
    type: "website",
    locale: "fr_SN",
    url: "https://mbaboutique.sn",
    title: "MBA Boutique | Shopping Fiable & Rapide au Sénégal",
    description:
      "Achetez vêtements, montres, parfums et plus. Livraison rapide, qualité garantie. Faites confiance à MBA Boutique.",
    siteName: "MBA Boutique",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Boutique | Shopping Fiable & Rapide au Sénégal",
    description:
      "Achetez vêtements, montres, parfums et plus. Livraison rapide, qualité garantie. Faites confiance à MBA Boutique.",
  },
  alternates: {
    canonical: "https://mbaboutique.sn",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${playfair.variable}`}>
      <head>
        {/* Google Analytics Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'XXXXXXXXXXXXXXXXX');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <SynapseSignature />
          <Toaster />
        </CartProvider>
        {/* <!-- INSERT GOOGLE ADSENSE CODE HERE --> */}
      </body>
    </html>
  )
}
