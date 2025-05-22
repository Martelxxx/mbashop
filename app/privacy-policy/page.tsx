import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de Confidentialité | MBA Boutique",
  description: "Découvrez comment MBA Boutique protège vos données personnelles et respecte votre vie privée.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-heading mb-8">Politique de Confidentialité</h1>

        <div className="prose max-w-none">
          <p>Dernière mise à jour : 20 mai 2025</p>

          <h2>Introduction</h2>
          <p>
            MBA Boutique ("nous", "notre", "nos") s'engage à protéger votre vie privée. Cette politique de
            confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations
            lorsque vous visitez notre site web mbaboutique.sn (le "Site") ou utilisez nos services.
          </p>

          <h2>Informations que nous collectons</h2>
          <p>Nous collectons plusieurs types d'informations auprès de nos utilisateurs, notamment :</p>
          <ul>
            <li>
              <strong>Informations personnelles</strong> : Nom, adresse email, numéro de téléphone, adresse postale,
              informations de paiement lorsque vous effectuez un achat.
            </li>
            <li>
              <strong>Informations de navigation</strong> : Adresse IP, type de navigateur, fournisseur d'accès
              Internet, pages de référence/sortie, système d'exploitation, horodatage et données de parcours de
              navigation.
            </li>
            <li>
              <strong>Informations sur l'appareil</strong> : Type d'appareil, identifiants uniques d'appareil, adresse
              IP, système d'exploitation, type de navigateur, informations sur le réseau mobile.
            </li>
          </ul>

          <h2>Comment nous utilisons vos informations</h2>
          <p>Nous utilisons les informations que nous collectons pour :</p>
          <ul>
            <li>Traiter vos commandes et gérer votre compte</li>
            <li>Améliorer notre site web et votre expérience d'achat</li>
            <li>Communiquer avec vous concernant votre commande, nos produits, nos promotions</li>
            <li>Personnaliser votre expérience et vous fournir du contenu et des offres adaptés à vos intérêts</li>
            <li>Surveiller et analyser les tendances, l'utilisation et les activités liées à notre site</li>
            <li>Détecter, prévenir et résoudre les problèmes techniques ou de sécurité</li>
          </ul>

          <h2>Google Analytics et Google AdSense</h2>
          <p>
            Nous utilisons Google Analytics pour analyser l'utilisation de notre site. Google Analytics utilise des
            cookies pour collecter des informations sur la façon dont les visiteurs utilisent notre site. Ces
            informations sont utilisées pour compiler des rapports et nous aider à améliorer notre site. Les cookies
            collectent des informations de manière anonyme, y compris le nombre de visiteurs sur le site, d'où viennent
            les visiteurs et les pages qu'ils ont visitées.
          </p>
          <p>
            Nous utilisons également Google AdSense pour diffuser des publicités sur notre site. Google AdSense utilise
            des cookies pour diffuser des annonces pertinentes pour vous en fonction de vos intérêts, déterminés par vos
            visites précédentes sur notre site et d'autres sites sur Internet. Google et ses partenaires utilisent des
            technologies telles que les cookies pour recueillir des informations sur vos activités sur ce site et sur
            d'autres sites afin de vous proposer des publicités basées sur vos intérêts et vos recherches précédentes.
          </p>
          <p>
            Vous pouvez désactiver l'utilisation de cookies par Google en visitant la page de désactivation des annonces
            Google. Vous pouvez également désactiver l'utilisation de cookies par un fournisseur tiers en visitant la
            page de désactivation du Network Advertising Initiative.
          </p>

          <h2>Partage de vos informations</h2>
          <p>Nous pouvons partager vos informations personnelles avec :</p>
          <ul>
            <li>
              <strong>Prestataires de services</strong> : Entreprises qui nous aident à fournir nos services (traitement
              des paiements, livraison, service client).
            </li>
            <li>
              <strong>Partenaires commerciaux</strong> : Avec votre consentement, nous pouvons partager vos informations
              avec des partenaires commerciaux sélectionnés.
            </li>
            <li>
              <strong>Conformité légale</strong> : Lorsque nous sommes légalement tenus de le faire, pour protéger nos
              droits ou en réponse à une demande gouvernementale.
            </li>
          </ul>

          <h2>Sécurité de vos informations</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre
            tout accès, altération, divulgation ou destruction non autorisés. Cependant, aucune méthode de transmission
            sur Internet ou de stockage électronique n'est totalement sécurisée, et nous ne pouvons garantir une
            sécurité absolue.
          </p>

          <h2>Vos droits</h2>
          <p>Vous avez le droit de :</p>
          <ul>
            <li>Accéder aux informations personnelles que nous détenons à votre sujet</li>
            <li>Corriger toute information inexacte</li>
            <li>Demander la suppression de vos informations personnelles</li>
            <li>Vous opposer au traitement de vos informations personnelles</li>
            <li>Demander la limitation du traitement de vos informations personnelles</li>
            <li>Demander la portabilité de vos informations personnelles</li>
          </ul>

          <h2>Modifications de cette politique</h2>
          <p>
            Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de
            tout changement en publiant la nouvelle politique de confidentialité sur cette page et en mettant à jour la
            date de "dernière mise à jour" en haut de cette politique.
          </p>

          <h2>Nous contacter</h2>
          <p>Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :</p>
          <p>
            MBA Boutique
            <br />
            123 Avenue Cheikh Anta Diop
            <br />
            Dakar, Sénégal
            <br />
            Email : privacy@mbaboutique.sn
            <br />
            Téléphone : +221 78 123 45 67
          </p>
        </div>
      </div>
    </div>
  )
}
