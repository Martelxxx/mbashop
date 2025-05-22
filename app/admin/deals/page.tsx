"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, Eye, Save } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { DatePicker } from "@/components/ui/date-picker"
import { TimePicker } from "@/components/ui/time-picker"

// Mock deals data
const initialDeals = [
  {
    id: "1",
    title: "Montre Classique Homme - Edition Limitée",
    description: "Profitez de 40% de réduction sur cette montre élégante",
    image: "/placeholder-b7mst.png",
    originalPrice: 99900,
    salePrice: 59900,
    startDate: new Date("2025-05-15"),
    endDate: new Date("2025-05-25"),
    active: true,
    featured: true,
    productId: "2",
  },
  {
    id: "2",
    title: "Parfum Élégance - Édition Spéciale",
    description: "Offre exclusive: 30% de réduction sur ce parfum de luxe",
    image: "/luxury-perfume.png",
    originalPrice: 65000,
    salePrice: 45500,
    startDate: new Date("2025-05-20"),
    endDate: new Date("2025-05-30"),
    active: false,
    featured: false,
    productId: "3",
  },
]

export default function DealsPage() {
  const [deals, setDeals] = useState(initialDeals)
  const [editingDeal, setEditingDeal] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("all-deals")

  const handleEdit = (deal: any) => {
    setEditingDeal(deal)
    setActiveTab("edit-deal")
  }

  const handleSaveEdit = () => {
    if (!editingDeal) return

    setDeals(deals.map((deal) => (deal.id === editingDeal.id ? editingDeal : deal)))

    setEditingDeal(null)
    setActiveTab("all-deals")
  }

  const toggleActive = (id: string) => {
    setDeals(deals.map((deal) => (deal.id === id ? { ...deal, active: !deal.active } : deal)))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Deal of the Day Management</h1>
        <Button onClick={() => setActiveTab("new-deal")}>
          <Plus className="mr-2 h-4 w-4" /> Create New Deal
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all-deals">All Deals</TabsTrigger>
          <TabsTrigger value="new-deal">Create New Deal</TabsTrigger>
          <TabsTrigger value="edit-deal" disabled={!editingDeal}>
            Edit Deal
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all-deals">
          <Card>
            <CardHeader>
              <CardTitle>All Deals</CardTitle>
              <CardDescription>Manage your special deals and promotions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">Image</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {deals.map((deal) => (
                      <TableRow key={deal.id}>
                        <TableCell>
                          <div className="h-12 w-12 rounded-md overflow-hidden bg-gray-100">
                            <Image
                              src={deal.image || "/placeholder.svg"}
                              alt={deal.title}
                              width={48}
                              height={48}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{deal.title}</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="text-sm line-through text-muted-foreground">
                              {deal.originalPrice.toLocaleString()} FCFA
                            </span>
                            <span className="font-medium">{deal.salePrice.toLocaleString()} FCFA</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col text-sm">
                            <span>From: {deal.startDate.toLocaleDateString()}</span>
                            <span>To: {deal.endDate.toLocaleDateString()}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Switch checked={deal.active} onCheckedChange={() => toggleActive(deal.id)} />
                            <span>{deal.active ? "Active" : "Inactive"}</span>
                          </div>
                          {deal.featured && <Badge className="mt-1 bg-[#9370DB]">Featured</Badge>}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">Preview</span>
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleEdit(deal)}>
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

        <TabsContent value="new-deal">
          <DealForm />
        </TabsContent>

        <TabsContent value="edit-deal">
          {editingDeal && <DealForm deal={editingDeal} onSave={handleSaveEdit} onChange={setEditingDeal} />}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function DealForm({ deal, onSave, onChange }: any) {
  const isEditing = !!deal

  const handleChange = (field: string, value: any) => {
    if (onChange) {
      onChange({ ...deal, [field]: value })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditing ? "Edit Deal" : "Create New Deal"}</CardTitle>
        <CardDescription>
          {isEditing ? "Update the details of your special deal" : "Create a new special deal or promotion"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter deal title"
              value={deal?.title || ""}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter deal description"
              value={deal?.description || ""}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="originalPrice">Original Price (FCFA)</Label>
              <Input
                id="originalPrice"
                type="number"
                placeholder="Original price"
                value={deal?.originalPrice || ""}
                onChange={(e) => handleChange("originalPrice", Number(e.target.value))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="salePrice">Sale Price (FCFA)</Label>
              <Input
                id="salePrice"
                type="number"
                placeholder="Sale price"
                value={deal?.salePrice || ""}
                onChange={(e) => handleChange("salePrice", Number(e.target.value))}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Start Date</Label>
              <div className="flex gap-2">
                <div className="flex-1">
                  <DatePicker date={deal?.startDate} setDate={(date) => handleChange("startDate", date)} />
                </div>
                <div className="flex-1">
                  <TimePicker date={deal?.startDate} setDate={(date) => handleChange("startDate", date)} />
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <Label>End Date</Label>
              <div className="flex gap-2">
                <div className="flex-1">
                  <DatePicker date={deal?.endDate} setDate={(date) => handleChange("endDate", date)} />
                </div>
                <div className="flex-1">
                  <TimePicker date={deal?.endDate} setDate={(date) => handleChange("endDate", date)} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              placeholder="Enter image URL"
              value={deal?.image || ""}
              onChange={(e) => handleChange("image", e.target.value)}
            />
            {deal?.image && (
              <div className="mt-2">
                <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                <div className="h-40 w-full max-w-xs rounded-md overflow-hidden bg-gray-100">
                  <Image
                    src={deal.image || "/placeholder.svg"}
                    alt="Deal preview"
                    width={320}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Switch
                id="active"
                checked={deal?.active || false}
                onCheckedChange={(checked) => handleChange("active", checked)}
              />
              <Label htmlFor="active">Active</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                id="featured"
                checked={deal?.featured || false}
                onCheckedChange={(checked) => handleChange("featured", checked)}
              />
              <Label htmlFor="featured">Featured (Show as Deal of the Day)</Label>
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={onSave}>
              <Save className="mr-2 h-4 w-4" /> {isEditing ? "Update Deal" : "Create Deal"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
