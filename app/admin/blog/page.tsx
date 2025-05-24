"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, Eye, Star, StarOff } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Mock blog posts data
const initialPosts = [
  {
    id: "1",
    title: "Les Tendances Mode 2024 : Ce qu'il Faut Savoir",
    slug: "tendances-mode-2024",
    excerpt: "Découvrez les dernières tendances mode qui vont marquer l'année 2024...",
    author: "MBA Team",
    publishedAt: "2024-05-15",
    status: "published",
    featured: true,
    views: 1250,
    image: "/blog-fashion-trends.jpg",
  },
  {
    id: "2",
    title: "Comment Choisir la Montre Parfaite",
    slug: "choisir-montre-parfaite",
    excerpt: "Guide complet pour sélectionner la montre qui correspond à votre style...",
    author: "MBA Team",
    publishedAt: "2024-05-10",
    status: "published",
    featured: false,
    views: 890,
    image: "/blog-watch-guide.jpg",
  },
  {
    id: "3",
    title: "Parfums d'Été : Nos Recommandations",
    slug: "parfums-ete-recommandations",
    excerpt: "Les fragrances incontournables pour la saison estivale...",
    author: "MBA Team",
    publishedAt: "2024-05-05",
    status: "draft",
    featured: false,
    views: 0,
    image: "/blog-summer-perfumes.jpg",
  },
]

export default function BlogPage() {
  const [posts, setPosts] = useState(initialPosts)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleFeatured = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return { ...post, featured: !post.featured }
        }
        // If setting this post as featured, remove featured from others
        if (post.featured && posts.find((p) => p.id === postId)?.featured === false) {
          return { ...post, featured: false }
        }
        return post
      }),
    )
  }

  const deletePost = (postId: string) => {
    setPosts(posts.filter((post) => post.id !== postId))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <Button asChild>
          <Link href="/admin/blog/new">
            <Plus className="mr-2 h-4 w-4" /> New Post
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Blog Posts</CardTitle>
          <CardDescription>Manage your blog content and featured articles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Published</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{post.title}</div>
                        <div className="text-sm text-muted-foreground">{post.excerpt.substring(0, 60)}...</div>
                      </div>
                    </TableCell>
                    <TableCell>{post.author}</TableCell>
                    <TableCell>{post.publishedAt}</TableCell>
                    <TableCell>
                      <Badge variant={post.status === "published" ? "default" : "secondary"}>{post.status}</Badge>
                    </TableCell>
                    <TableCell>{post.views.toLocaleString()}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleFeatured(post.id)}
                        className={post.featured ? "text-yellow-500" : "text-muted-foreground"}
                      >
                        {post.featured ? <Star className="h-4 w-4 fill-current" /> : <StarOff className="h-4 w-4" />}
                        <span className="sr-only">Toggle Featured</span>
                      </Button>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/blog/${post.slug}`} target="_blank">
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/blog/${post.id}/edit`}>
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => deletePost(post.id)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
