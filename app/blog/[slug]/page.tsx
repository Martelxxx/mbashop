import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Mock blog post data
const blogPost = {
  title: "Les Tendances Mode 2024 : Ce qu'il Faut Savoir",
  author: "MBA Team",
  publishedAt: "15 Mai 2024",
  readTime: "5 min de lecture",
  image: "/placeholder.svg?height=400&width=800&text=Fashion+Trends+2024",
  content: `
    <p>La mode évolue constamment, et 2024 ne fait pas exception. Cette année, nous assistons à un mélange fascinant entre durabilité, innovation technologique et retour aux classiques intemporels.</p>
    
    <h2>1. La Mode Durable au Premier Plan</h2>
    <p>L'éco-responsabilité n'est plus une option mais une nécessité. Les consommateurs recherchent des marques qui s'engagent pour l'environnement avec des matériaux recyclés et des processus de production éthiques.</p>
    
    <h2>2. Le Retour des Couleurs Vibrantes</h2>
    <p>Après des années de tons neutres, 2024 voit le retour des couleurs audacieuses. Le violet, l'orange vif et le vert émeraude dominent les collections.</p>
    
    <h2>3. L'Influence de la Technologie</h2>
    <p>Les vêtements intelligents et les accessoires connectés deviennent mainstream. De la montre qui surveille votre santé aux vêtements qui régulent la température.</p>
    
    <h2>Conclusion</h2>
    <p>2024 s'annonce comme une année passionnante pour la mode, alliant conscience environnementale et innovation. Chez MBA Boutique, nous nous engageons à vous proposer les meilleures pièces qui reflètent ces tendances.</p>
  `,
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour au Blog
          </Link>
        </Button>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {blogPost.publishedAt}
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {blogPost.author}
              </div>
              <span>{blogPost.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{blogPost.title}</h1>

            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <img
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </article>
      </div>
    </div>
  )
}
