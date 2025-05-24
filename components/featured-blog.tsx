import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"

// Mock featured blog post data
const featuredPost = {
  id: "1",
  title: "Les Tendances Mode 2024 : Ce qu'il Faut Savoir",
  slug: "tendances-mode-2024",
  excerpt:
    "Découvrez les dernières tendances mode qui vont marquer l'année 2024. De la mode durable aux couleurs vibrantes, explorez ce qui définira le style de cette année.",
  author: "MBA Team",
  publishedAt: "15 Mai 2024",
  image: "/placeholder.svg?height=400&width=600&text=Fashion+Trends+2024",
  readTime: "5 min de lecture",
}

export default function FeaturedBlog() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Article à la Une</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Restez informé des dernières tendances et conseils mode avec nos articles exclusifs
        </p>
      </div>

      <Card className="overflow-hidden max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-auto">
            <img
              src={featuredPost.image || "/placeholder.svg"}
              alt={featuredPost.title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-8 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.publishedAt}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {featuredPost.author}
                </div>
                <span>{featuredPost.readTime}</span>
              </div>

              <h3 className="text-2xl font-bold leading-tight">{featuredPost.title}</h3>

              <p className="text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>

              <div className="pt-4">
                <Button asChild>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Lire l'Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>

      <div className="text-center mt-8">
        <Button variant="outline" asChild>
          <Link href="/blog">
            Voir Tous les Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
