"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, Eye, Save } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import dynamic from "next/dynamic"

// Import the rich text editor dynamically to avoid SSR issues
const RichTextEditor = dynamic(() => import("@/components/admin/rich-text-editor"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
})

// Mock pages data
const initialPages = [
  {
    id: "1",
    title: "À Propos",
    slug: "a-propos",
    lastUpdated: "2025-05-15",
    status: "published",
  },
  {
    id: "2",
    title: "FAQ",
    slug: "faq",
    lastUpdated: "2025-05-10",
    status: "published",
  },
  {
    id: "3",
    title: "Politique de Confidentialité",
    slug: "privacy-policy",
    lastUpdated: "2025-05-05",
    status: "published",
  },
  {
    id: "4",
    title: "Conditions d'Utilisation",
    slug: "terms",
    lastUpdated: "2025-05-01",
    status: "draft",
  },
]

export default function ContentPage() {
  const [pages, setPages] = useState(initialPages)
  const [editingPage, setEditingPage] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("all-pages")
  const [content, setContent] = useState("")

  const handleEdit = (page: any) => {
    setEditingPage(page)
    // In a real app, you would fetch the page content here
    setContent("<h1>Sample Content</h1><p>This is sample content for the page.</p>")
    setActiveTab("edit-page")
  }

  const handleSaveEdit = () => {
    if (!editingPage) return

    setPages(
      pages.map((page) =>
        page.id === editingPage.id ? { ...editingPage, lastUpdated: new Date().toISOString().split("T")[0] } : page,
      ),
    )

    setEditingPage(null)
    setActiveTab("all-pages")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Content Management</h1>
        <Button onClick={() => setActiveTab("new-page")}>
          <Plus className="mr-2 h-4 w-4" /> Create New Page
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all-pages">All Pages</TabsTrigger>
          <TabsTrigger value="new-page">Create New Page</TabsTrigger>
          <TabsTrigger value="edit-page" disabled={!editingPage}>
            Edit Page
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all-pages">
          <Card>
            <CardHeader>
              <CardTitle>All Pages</CardTitle>
              <CardDescription>Manage your website's static pages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Slug</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pages.map((page) => (
                      <TableRow key={page.id}>
                        <TableCell className="font-medium">{page.title}</TableCell>
                        <TableCell>{page.slug}</TableCell>
                        <TableCell>{page.lastUpdated}</TableCell>
                        <TableCell>
                          <span
                            className={`capitalize ${
                              page.status === "published" ? "text-green-500" : "text-amber-500"
                            }`}
                          >
                            {page.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/${page.slug}`} target="_blank">
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Link>
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleEdit(page)}>
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="ghost" size="icon">
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
        </TabsContent>

        <TabsContent value="new-page">
          <PageForm />
        </TabsContent>

        <TabsContent value="edit-page">
          {editingPage && (
            <PageForm
              page={editingPage}
              content={content}
              onContentChange={setContent}
              onSave={handleSaveEdit}
              onChange={setEditingPage}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function PageForm({ page, content, onContentChange, onSave, onChange }: any) {
  const isEditing = !!page
  const [localContent, setLocalContent] = useState(content || "")

  const handleChange = (field: string, value: any) => {
    if (onChange) {
      onChange({ ...page, [field]: value })
    }
  }

  const handleContentChange = (value: string) => {
    setLocalContent(value)
    if (onContentChange) {
      onContentChange(value)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditing ? "Edit Page" : "Create New Page"}</CardTitle>
        <CardDescription>
          {isEditing ? "Update your page content and settings" : "Create a new page for your website"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="title">Page Title</Label>
            <Input
              id="title"
              placeholder="Enter page title"
              value={page?.title || ""}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="slug">Slug</Label>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">/</span>
              <Input
                id="slug"
                placeholder="page-slug"
                value={page?.slug || ""}
                onChange={(e) => handleChange("slug", e.target.value)}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              This will be the URL of your page: https://mbaboutique.sn/{page?.slug || "page-slug"}
            </p>
          </div>

          <div className="grid gap-2">
            <Label>Page Content</Label>
            <div className="min-h-[400px] border rounded-md">
              <RichTextEditor value={localContent} onChange={handleContentChange} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={page?.status || "draft"}
                onChange={(e) => handleChange("status", e.target.value)}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="metaTitle">Meta Title (SEO)</Label>
              <Input
                id="metaTitle"
                placeholder="Enter meta title"
                value={page?.metaTitle || ""}
                onChange={(e) => handleChange("metaTitle", e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="metaDescription">Meta Description (SEO)</Label>
            <textarea
              id="metaDescription"
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter meta description"
              value={page?.metaDescription || ""}
              onChange={(e) => handleChange("metaDescription", e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <Button onClick={onSave}>
              <Save className="mr-2 h-4 w-4" /> {isEditing ? "Update Page" : "Create Page"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
