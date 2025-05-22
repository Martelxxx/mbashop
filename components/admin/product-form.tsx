"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Plus, Trash2, Upload } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"

// Import the rich text editor dynamically to avoid SSR issues
const RichTextEditor = dynamic(() => import("@/components/admin/rich-text-editor"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
})

export default function ProductForm({ product }: any) {
  const isEditing = !!product
  const [formData, setFormData] = useState(
    product || {
      name: "",
      slug: "",
      price: "",
      originalPrice: "",
      description: "",
      fullDescription: "",
      category: "",
      images: [],
      inStock: true,
      isNew: false,
    },
  )
  const [fullDescription, setFullDescription] = useState(product?.fullDescription || "")

  const handleChange = (field: string, value: any) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save the product to the database
    alert(isEditing ? "Product updated successfully!" : "Product created successfully!")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs defaultValue="basic">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">Basic Information</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="inventory">Inventory & Pricing</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4 mt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter product name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="slug">Slug</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">/boutique/</span>
                    <Input
                      id="slug"
                      placeholder="product-slug"
                      value={formData.slug}
                      onChange={(e) => handleChange("slug", e.target.value)}
                      required
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This will be the URL of your product: https://mbaboutique.sn/boutique/
                    {formData.slug || "product-slug"}
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.category}
                    onChange={(e) => handleChange("category", e.target.value)}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="vetements">Vêtements</option>
                    <option value="montres">Montres</option>
                    <option value="parfums">Parfums</option>
                    <option value="electronique">Électronique</option>
                    <option value="maison">Maison</option>
                    <option value="accessoires">Accessoires</option>
                  </select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="description">Short Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter a short description"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Switch
                      id="isNew"
                      checked={formData.isNew}
                      onCheckedChange={(checked) => handleChange("isNew", checked)}
                    />
                    <Label htmlFor="isNew">Mark as New</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      id="inStock"
                      checked={formData.inStock}
                      onCheckedChange={(checked) => handleChange("inStock", checked)}
                    />
                    <Label htmlFor="inStock">In Stock</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images" className="space-y-4 mt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label>Product Images</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formData.images && formData.images.length > 0 ? (
                      formData.images.map((image: string, index: number) => (
                        <div key={index} className="relative group">
                          <div className="aspect-square rounded-md overflow-hidden bg-gray-100">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Product image ${index + 1}`}
                              width={200}
                              height={200}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => {
                              const newImages = [...formData.images]
                              newImages.splice(index, 1)
                              handleChange("images", newImages)
                            }}
                          >
                            <Trash2 className="h-3 w-3" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-8 border-2 border-dashed rounded-md">
                        <p className="text-muted-foreground">No images added yet</p>
                      </div>
                    )}
                    <div className="aspect-square rounded-md border-2 border-dashed flex items-center justify-center">
                      <Button variant="ghost">
                        <Upload className="mr-2 h-4 w-4" /> Upload Image
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="description" className="space-y-4 mt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label>Full Description</Label>
                  <div className="min-h-[400px] border rounded-md">
                    <RichTextEditor
                      value={fullDescription}
                      onChange={(value) => {
                        setFullDescription(value)
                        handleChange("fullDescription", value)
                      }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4 mt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="price">Price (FCFA)</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="Enter price"
                      value={formData.price}
                      onChange={(e) => handleChange("price", e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="originalPrice">Original Price (FCFA)</Label>
                    <Input
                      id="originalPrice"
                      type="number"
                      placeholder="Enter original price (for discounts)"
                      value={formData.originalPrice}
                      onChange={(e) => handleChange("originalPrice", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label>Specifications</Label>
                  {formData.specifications && formData.specifications.length > 0 ? (
                    <div className="space-y-2">
                      {formData.specifications.map((spec: any, index: number) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            placeholder="Name"
                            value={spec.name}
                            onChange={(e) => {
                              const newSpecs = [...formData.specifications]
                              newSpecs[index].name = e.target.value
                              handleChange("specifications", newSpecs)
                            }}
                          />
                          <Input
                            placeholder="Value"
                            value={spec.value}
                            onChange={(e) => {
                              const newSpecs = [...formData.specifications]
                              newSpecs[index].value = e.target.value
                              handleChange("specifications", newSpecs)
                            }}
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              const newSpecs = [...formData.specifications]
                              newSpecs.splice(index, 1)
                              handleChange("specifications", newSpecs)
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No specifications added yet</p>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => {
                      const newSpecs = [...(formData.specifications || [])]
                      newSpecs.push({ name: "", value: "" })
                      handleChange("specifications", newSpecs)
                    }}
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Specification
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6 flex justify-end">
        <Button type="submit">
          <Save className="mr-2 h-4 w-4" /> {isEditing ? "Update Product" : "Create Product"}
        </Button>
      </div>
    </form>
  )
}
