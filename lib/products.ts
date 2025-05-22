// Mock product data
const products = [
  {
    id: "1",
    name: "Costume Élégant Homme",
    slug: "costume-elegant-homme",
    price: 79900,
    originalPrice: 99900,
    description: "Costume élégant pour homme, parfait pour les occasions spéciales.",
    fullDescription:
      "Ce costume élégant pour homme est confectionné dans un tissu de haute qualité, offrant confort et style. Parfait pour les mariages, cérémonies et événements professionnels, il vous garantit une allure sophistiquée et raffinée.",
    image: "/placeholder.svg?height=600&width=600&query=elegant men suit",
    images: [
      "/placeholder.svg?height=600&width=600&query=elegant men suit front",
      "/placeholder.svg?height=600&width=600&query=elegant men suit side",
      "/placeholder.svg?height=600&width=600&query=elegant men suit back",
      "/placeholder.svg?height=600&width=600&query=elegant men suit detail",
    ],
    category: "vetements",
    isNew: false,
    inStock: true,
    rating: 4.8,
    reviewCount: 24,
    specifications: [
      { name: "Matière", value: "98% Coton, 2% Élasthanne" },
      { name: "Couleur", value: "Noir" },
      { name: "Tailles disponibles", value: "S, M, L, XL, XXL" },
      { name: "Entretien", value: "Nettoyage à sec uniquement" },
    ],
    reviews: [
      {
        author: "Mamadou N.",
        rating: 5,
        content: "Excellent costume, très bonne qualité et coupe parfaite. Je recommande vivement !",
      },
      {
        author: "Abdoulaye D.",
        rating: 4,
        content: "Bon rapport qualité-prix, livraison rapide. Seul bémol : les manches un peu longues.",
      },
    ],
    featured: true,
  },
  {
    id: "2",
    name: "Montre Classique Homme",
    slug: "montre-classique-homme",
    price: 59900,
    originalPrice: 99900,
    description: "Montre classique pour homme avec bracelet en cuir véritable.",
    fullDescription:
      "Cette montre classique pour homme allie élégance et fonctionnalité. Dotée d'un mouvement à quartz précis, d'un boîtier en acier inoxydable et d'un bracelet en cuir véritable, elle est résistante à l'eau jusqu'à 30 mètres et parfaite pour un usage quotidien.",
    image: "/placeholder.svg?height=600&width=600&query=classic men watch with leather strap",
    images: [
      "/placeholder.svg?height=600&width=600&query=classic men watch front",
      "/placeholder.svg?height=600&width=600&query=classic men watch side",
      "/placeholder.svg?height=600&width=600&query=classic men watch strap",
      "/placeholder.svg?height=600&width=600&query=classic men watch detail",
    ],
    category: "montres",
    isNew: false,
    inStock: true,
    rating: 4.9,
    reviewCount: 36,
    specifications: [
      { name: "Mouvement", value: "Quartz" },
      { name: "Matériau du boîtier", value: "Acier inoxydable" },
      { name: "Matériau du bracelet", value: "Cuir véritable" },
      { name: "Résistance à l'eau", value: "30 mètres" },
      { name: "Garantie", value: "2 ans" },
    ],
    reviews: [
      {
        author: "Ibrahim S.",
        rating: 5,
        content:
          "Superbe montre, très élégante. Elle fonctionne parfaitement et le bracelet est de très bonne qualité.",
      },
      {
        author: "Cheikh M.",
        rating: 5,
        content:
          "Excellent rapport qualité-prix. Je la porte tous les jours depuis 3 mois et elle est toujours comme neuve.",
      },
    ],
    featured: true,
  },
  {
    id: "3",
    name: "Parfum Élégance",
    slug: "parfum-elegance",
    price: 45900,
    originalPrice: null,
    description: "Parfum de luxe aux notes boisées et épicées pour homme.",
    fullDescription:
      "Ce parfum de luxe pour homme combine des notes boisées et épicées pour une fragrance sophistiquée et durable. Idéal pour les occasions spéciales ou pour un usage quotidien, il vous enveloppera d'une aura d'élégance et de confiance tout au long de la journée.",
    image: "/placeholder.svg?height=600&width=600&query=luxury men perfume bottle",
    images: [
      "/placeholder.svg?height=600&width=600&query=luxury men perfume bottle front",
      "/placeholder.svg?height=600&width=600&query=luxury men perfume bottle side",
      "/placeholder.svg?height=600&width=600&query=luxury men perfume bottle packaging",
      "/placeholder.svg?height=600&width=600&query=luxury men perfume bottle detail",
    ],
    category: "parfums",
    isNew: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 18,
    specifications: [
      { name: "Volume", value: "100 ml" },
      { name: "Type", value: "Eau de Parfum" },
      { name: "Notes de tête", value: "Bergamote, Poivre noir" },
      { name: "Notes de cœur", value: "Lavande, Géranium" },
      { name: "Notes de fond", value: "Bois de cèdre, Vétiver, Musc" },
    ],
    reviews: [
      {
        author: "Ousmane K.",
        rating: 5,
        content: "Fragrance exceptionnelle, tenue toute la journée. J'ai reçu de nombreux compliments !",
      },
      {
        author: "Moussa T.",
        rating: 4,
        content: "Très bon parfum, odeur agréable et persistante. Seul bémol : le prix un peu élevé.",
      },
    ],
    featured: true,
  },
  {
    id: "4",
    name: "Smartphone Pro X",
    slug: "smartphone-pro-x",
    price: 349900,
    originalPrice: 399900,
    description: "Smartphone haut de gamme avec appareil photo professionnel et écran AMOLED.",
    fullDescription:
      "Ce smartphone haut de gamme est équipé d'un puissant processeur octa-core, d'un appareil photo professionnel de 108MP, d'un écran AMOLED de 6,7 pouces et d'une batterie longue durée de 5000mAh. Avec sa mémoire de 256Go et ses 12Go de RAM, il offre des performances exceptionnelles pour tous vos besoins.",
    image: "/placeholder.svg?height=600&width=600&query=modern smartphone with professional camera",
    images: [
      "/placeholder.svg?height=600&width=600&query=modern smartphone front",
      "/placeholder.svg?height=600&width=600&query=modern smartphone back",
      "/placeholder.svg?height=600&width=600&query=modern smartphone side",
      "/placeholder.svg?height=600&width=600&query=modern smartphone camera detail",
    ],
    category: "electronique",
    isNew: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 42,
    specifications: [
      { name: "Processeur", value: "Octa-core 2.8GHz" },
      { name: "Mémoire", value: "256Go, 12Go RAM" },
      { name: "Écran", value: "AMOLED 6,7 pouces, 120Hz" },
      { name: "Appareil photo", value: "Principal: 108MP, Frontal: 32MP" },
      { name: "Batterie", value: "5000mAh, charge rapide 65W" },
      { name: "Système d'exploitation", value: "Android 13" },
    ],
    reviews: [
      {
        author: "Amadou D.",
        rating: 5,
        content:
          "Smartphone exceptionnel ! L'appareil photo est incroyable et la batterie tient facilement deux jours.",
      },
      {
        author: "Fatou S.",
        rating: 5,
        content: "Performances au top, écran magnifique. Je suis très satisfaite de mon achat.",
      },
    ],
    featured: true,
  },
  {
    id: "5",
    name: "Robe Élégante Femme",
    slug: "robe-elegante-femme",
    price: 54900,
    originalPrice: 69900,
    description: "Robe élégante pour femme, parfaite pour les occasions spéciales.",
    fullDescription:
      "Cette robe élégante pour femme est confectionnée dans un tissu fluide de haute qualité, offrant confort et style. Parfaite pour les mariages, cérémonies et soirées, elle vous garantit une allure sophistiquée et raffinée. Sa coupe flatteuse convient à toutes les morphologies.",
    image: "/placeholder.svg?height=600&width=600&query=elegant women dress",
    images: [
      "/placeholder.svg?height=600&width=600&query=elegant women dress front",
      "/placeholder.svg?height=600&width=600&query=elegant women dress side",
      "/placeholder.svg?height=600&width=600&query=elegant women dress back",
      "/placeholder.svg?height=600&width=600&query=elegant women dress detail",
    ],
    category: "vetements",
    isNew: false,
    inStock: true,
    rating: 4.8,
    reviewCount: 29,
    specifications: [
      { name: "Matière", value: "95% Polyester, 5% Élasthanne" },
      { name: "Couleur", value: "Bleu nuit" },
      { name: "Tailles disponibles", value: "36, 38, 40, 42, 44" },
      { name: "Entretien", value: "Lavage à 30°C" },
    ],
    reviews: [
      {
        author: "Aïssatou N.",
        rating: 5,
        content: "Magnifique robe, très élégante et confortable. J'ai reçu beaucoup de compliments !",
      },
      {
        author: "Mariama D.",
        rating: 4,
        content: "Belle robe, bonne qualité. Taille un peu grand, prenez une taille en dessous.",
      },
    ],
    featured: true,
  },
  {
    id: "6",
    name: "Bracelet en Or",
    slug: "bracelet-en-or",
    price: 129900,
    originalPrice: null,
    description: "Bracelet élégant en or 18 carats, parfait pour toutes les occasions.",
    fullDescription:
      "Ce bracelet élégant en or 18 carats est un accessoire intemporel qui ajoutera une touche de sophistication à n'importe quelle tenue. Parfait pour les occasions spéciales ou pour un usage quotidien, il est livré dans un écrin de luxe, idéal également pour offrir en cadeau.",
    image: "/placeholder.svg?height=600&width=600&query=gold bracelet luxury jewelry",
    images: [
      "/placeholder.svg?height=600&width=600&query=gold bracelet front",
      "/placeholder.svg?height=600&width=600&query=gold bracelet side",
      "/placeholder.svg?height=600&width=600&query=gold bracelet clasp",
      "/placeholder.svg?height=600&width=600&query=gold bracelet packaging",
    ],
    category: "accessoires",
    isNew: false,
    inStock: true,
    rating: 4.9,
    reviewCount: 15,
    specifications: [
      { name: "Matériau", value: "Or 18 carats" },
      { name: "Poids", value: "12g" },
      { name: "Longueur", value: "19cm" },
      { name: "Fermoir", value: "Mousqueton" },
      { name: "Garantie", value: "5 ans" },
    ],
    reviews: [
      {
        author: "Rama S.",
        rating: 5,
        content: "Magnifique bracelet, très bien fini. Un cadeau parfait pour ma femme qui l'adore !",
      },
      {
        author: "Aminata D.",
        rating: 5,
        content: "Superbe qualité, très élégant. Le fermoir est solide et facile à manipuler.",
      },
    ],
    featured: true,
  },
  {
    id: "7",
    name: "Écouteurs Sans Fil Pro",
    slug: "ecouteurs-sans-fil-pro",
    price: 89900,
    originalPrice: 119900,
    description: "Écouteurs sans fil avec réduction de bruit active et autonomie de 30 heures.",
    fullDescription:
      "Ces écouteurs sans fil haut de gamme offrent une qualité sonore exceptionnelle avec leur technologie de réduction de bruit active. Avec une autonomie de 30 heures, une résistance à l'eau IPX5 et des commandes tactiles intuitives, ils sont parfaits pour le sport, les déplacements ou un usage quotidien.",
    image: "/placeholder.svg?height=600&width=600&query=wireless earbuds with case",
    images: [
      "/placeholder.svg?height=600&width=600&query=wireless earbuds front",
      "/placeholder.svg?height=600&width=600&query=wireless earbuds in ear",
      "/placeholder.svg?height=600&width=600&query=wireless earbuds case open",
      "/placeholder.svg?height=600&width=600&query=wireless earbuds charging",
    ],
    category: "electronique",
    isNew: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 31,
    specifications: [
      { name: "Type", value: "Intra-auriculaires sans fil" },
      { name: "Autonomie", value: "8h (écouteurs), 30h (avec boîtier)" },
      { name: "Connectivité", value: "Bluetooth 5.2" },
      { name: "Résistance", value: "IPX5 (résistant à l'eau)" },
      { name: "Réduction de bruit", value: "Active, jusqu'à 35dB" },
      { name: "Garantie", value: "2 ans" },
    ],
    reviews: [
      {
        author: "Babacar M.",
        rating: 5,
        content: "Son exceptionnel, réduction de bruit efficace. Parfait pour mes trajets quotidiens !",
      },
      {
        author: "Sokhna D.",
        rating: 4,
        content:
          "Très bons écouteurs, confortables même après plusieurs heures. Seul bémol : les commandes tactiles parfois capricieuses.",
      },
    ],
    featured: true,
  },
  {
    id: "8",
    name: "Lampe Design Moderne",
    slug: "lampe-design-moderne",
    price: 34900,
    originalPrice: 44900,
    description: "Lampe de table design avec variateur d'intensité et éclairage LED.",
    fullDescription:
      "Cette lampe de table au design moderne apportera une touche d'élégance à votre intérieur. Équipée d'un éclairage LED économique et d'un variateur d'intensité, elle offre un éclairage personnalisable pour créer l'ambiance parfaite dans votre salon ou votre chambre.",
    image: "/placeholder.svg?height=600&width=600&query=modern design table lamp",
    images: [
      "/placeholder.svg?height=600&width=600&query=modern design table lamp lit",
      "/placeholder.svg?height=600&width=600&query=modern design table lamp side",
      "/placeholder.svg?height=600&width=600&query=modern design table lamp detail",
      "/placeholder.svg?height=600&width=600&query=modern design table lamp in room",
    ],
    category: "maison",
    isNew: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 22,
    specifications: [
      { name: "Matériaux", value: "Base en marbre, corps en métal" },
      { name: "Dimensions", value: "H: 45cm, L: 20cm, P: 20cm" },
      { name: "Ampoule", value: "LED intégrée, 8W" },
      { name: "Couleur de lumière", value: "Blanc chaud (3000K)" },
      { name: "Fonctionnalités", value: "Variateur d'intensité tactile" },
    ],
    reviews: [
      {
        author: "Dieynaba F.",
        rating: 5,
        content: "Superbe lampe, très élégante et fonctionnelle. Le variateur est vraiment pratique !",
      },
      {
        author: "Omar S.",
        rating: 4,
        content: "Bon produit, design moderne qui s'intègre bien dans mon salon. Éclairage agréable.",
      },
    ],
    featured: true,
  },
]

export async function getFeaturedProducts() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return products.filter((product) => product.featured)
}

export async function getProductBySlug(slug: string) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return products.find((product) => product.slug === slug) || null
}

export async function getProductsByCategory(category?: string) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  if (!category) {
    return products
  }

  return products.filter((product) => product.category === category)
}

export async function getRelatedProducts(category: string, currentProductId: string) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  return products.filter((product) => product.category === category && product.id !== currentProductId).slice(0, 4)
}
