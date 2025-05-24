"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Save, ArrowLeft } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Import the rich text editor dynamically to avoid SSR issues
const RichTextEditor = dynamic(() => import("@/components/admin/rich-text-editor"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
})

export default function NewBlogPost() {
  const [post, setPost] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    metaTitle: "",
    metaDescription: "",
    featured: false,
    status: "draft",
    image: "",
  })

  const handleChange = (field: string, value: any) => {
    setPost({ ...post, [field]: value })

    // Auto-generate slug from title
    if (field === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
      setPost((prev) => ({ ...prev, slug }))
    }
  }

  const handleSave = () => {
    console.log("Saving post:", post)
    // Here you would save to your database
    alert("Post saved successfully!")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/blog">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Create New Blog Post</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Content</CardTitle>
              <CardDescription>Write your blog post content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter post title"
                  value={post.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="slug">Slug</Label>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">/blog/</span>
                  <Input
                    id="slug"
                    placeholder="post-slug"
                    value={post.slug}
                    onChange={(e) => handleChange("slug", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Brief description of the post"
                  value={post.excerpt}
                  onChange={(e) => handleChange("excerpt", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="grid gap-2">
                <Label>Content</Label>
                <div className="min-h-[400px] border rounded-md">
                  <RichTextEditor value={post.content} onChange={(value) => handleChange("content", value)} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={post.status}
                  onChange={(e) => handleChange("status", e.target.value)}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={post.featured}
                  onCheckedChange={(checked) => handleChange("featured", checked)}
                />
                <Label htmlFor="featured">Featured Post</Label>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="image">Featured Image URL</Label>
                <Input
                  id="image"
                  placeholder="https://example.com/image.jpg"
                  value={post.image}
                  onChange={(e) => handleChange("image", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  placeholder="SEO title"
                  value={post.metaTitle}
                  onChange={(e) => handleChange("metaTitle", e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  placeholder="SEO description"
                  value={post.metaDescription}
                  onChange={(e) => handleChange("metaDescription", e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Button onClick={handleSave} className="w-full">
            <Save className="mr-2 h-4 w-4" /> Save Post
          </Button>
        </div>
      </div>
    </div>
  )
}
