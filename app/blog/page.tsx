import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

// Mock blog posts data
const blogPosts = [
  {
    id: "1",
    title: "Les Tendances Mode 2024 : Ce qu'il Faut Savoir",
    slug: "tendances-mode-2024",
    excerpt: "Découvrez les dernières tendances mode qui vont marquer l'année 2024...",
    author: "MBA Team",
    publishedAt: "15 Mai 2024",
    image: "/placeholder.svg?height=300&width=400&text=Fashion+Trends",
    category: "Mode",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Comment Choisir la Montre Parfaite",
    slug: "choisir-montre-parfaite",
    excerpt: "Guide complet pour sélectionner la montre qui correspond à votre style...",
    author: "MBA Team",
    publishedAt: "10 Mai 2024",
    image: "/placeholder.svg?height=300&width=400&text=Watch+Guide",
    category: "Accessoires",
    readTime: "7 min",
  },
  {
    id: "3",
    title: "Parfums d'Été : Nos Recommandations",
    slug: "parfums-ete-recommandations",
    excerpt: "Les fragrances incontournables pour la saison estivale...",
    author: "MBA Team",
    publishedAt: "5 Mai 2024",
    image: "/placeholder.svg?height=300&width=400&text=Summer+Perfumes",
    category: "Parfums",
    readTime: "4 min",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos conseils, tendances et guides pour vous aider à faire les meilleurs choix
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                <Badge className="absolute top-4 left-4 bg-[#9370DB] hover:bg-[#9370DB]/90">{post.category}</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.publishedAt}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold leading-tight mb-2">{post.title}</h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#9370DB] hover:underline font-medium"
                >
                  Lire la suite <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
