"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, Save, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"

// Mock navigation data
const initialMainNavItems = [
  { id: "1", label: "Accueil", url: "/", visible: true },
  { id: "2", label: "Boutique", url: "/boutique", visible: true },
  { id: "3", label: "À Propos", url: "/a-propos", visible: true },
  { id: "4", label: "FAQ", url: "/faq", visible: true },
  { id: "5", label: "Contact", url: "/contact", visible: true },
]

const initialFooterNavItems = [
  { id: "1", label: "Accueil", url: "/", visible: true },
  { id: "2", label: "Boutique", url: "/boutique", visible: true },
  { id: "3", label: "À Propos", url: "/a-propos", visible: true },
  { id: "4", label: "FAQ", url: "/faq", visible: true },
  { id: "5", label: "Contact", url: "/contact", visible: true },
  { id: "6", label: "Politique de Confidentialité", url: "/privacy-policy", visible: true },
  { id: "7", label: "Conditions d'Utilisation", url: "/terms", visible: true },
  { id: "8", label: "Livraison", url: "/shipping", visible: true },
]

export default function NavigationPage() {
  const [mainNavItems, setMainNavItems] = useState(initialMainNavItems)
  const [footerNavItems, setFooterNavItems] = useState(initialFooterNavItems)
  const [editingItem, setEditingItem] = useState<{ id: string; label: string; url: string } | null>(null)

  const handleDragEnd = (result: any, navType: "main" | "footer") => {
    if (!result.destination) return

    const items = navType === "main" ? [...mainNavItems] : [...footerNavItems]
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    if (navType === "main") {
      setMainNavItems(items)
    } else {
      setFooterNavItems(items)
    }
  }

  const toggleVisibility = (id: string, navType: "main" | "footer") => {
    if (navType === "main") {
      setMainNavItems(mainNavItems.map((item) => (item.id === id ? { ...item, visible: !item.visible } : item)))
    } else {
      setFooterNavItems(footerNavItems.map((item) => (item.id === id ? { ...item, visible: !item.visible } : item)))
    }
  }

  const handleEdit = (item: { id: string; label: string; url: string }) => {
    setEditingItem(item)
  }

  const handleSaveEdit = () => {
    if (!editingItem) return

    setMainNavItems(
      mainNavItems.map((item) =>
        item.id === editingItem.id ? { ...item, label: editingItem.label, url: editingItem.url } : item,
      ),
    )

    setFooterNavItems(
      footerNavItems.map((item) =>
        item.id === editingItem.id ? { ...item, label: editingItem.label, url: editingItem.url } : item,
      ),
    )

    setEditingItem(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Navigation Management</h1>
        <Button>
          <Save className="mr-2 h-4 w-4" /> Save Changes
        </Button>
      </div>

      <Tabs defaultValue="main-nav">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="main-nav">Main Navigation</TabsTrigger>
          <TabsTrigger value="footer-nav">Footer Navigation</TabsTrigger>
        </TabsList>

        <TabsContent value="main-nav">
          <Card>
            <CardHeader>
              <CardTitle>Main Navigation</CardTitle>
              <CardDescription>Manage the main navigation items that appear in the header</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end mb-4">
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add Item
                </Button>
              </div>

              <DragDropContext onDragEnd={(result) => handleDragEnd(result, "main")}>
                <Droppable droppableId="main-nav-items">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Order</TableHead>
                            <TableHead>Label</TableHead>
                            <TableHead>URL</TableHead>
                            <TableHead>Visible</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {mainNavItems.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided) => (
                                <TableRow
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <TableCell>{index + 1}</TableCell>
                                  <TableCell className="font-medium">{item.label}</TableCell>
                                  <TableCell>{item.url}</TableCell>
                                  <TableCell>
                                    <Switch
                                      checked={item.visible}
                                      onCheckedChange={() => toggleVisibility(item.id, "main")}
                                    />
                                  </TableCell>
                                  <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                      <Button variant="ghost" size="icon" onClick={() => handleEdit(item)}>
                                        <Edit className="h-4 w-4" />
                                        <span className="sr-only">Edit</span>
                                      </Button>
                                      <Button variant="ghost" size="icon">
                                        <Trash2 className="h-4 w-4" />
                                        <span className="sr-only">Delete</span>
                                      </Button>
                                      <Button variant="ghost" size="icon">
                                        <ExternalLink className="h-4 w-4" />
                                        <span className="sr-only">View</span>
                                      </Button>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="footer-nav">
          <Card>
            <CardHeader>
              <CardTitle>Footer Navigation</CardTitle>
              <CardDescription>Manage the navigation items that appear in the footer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end mb-4">
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add Item
                </Button>
              </div>

              <DragDropContext onDragEnd={(result) => handleDragEnd(result, "footer")}>
                <Droppable droppableId="footer-nav-items">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Order</TableHead>
                            <TableHead>Label</TableHead>
                            <TableHead>URL</TableHead>
                            <TableHead>Visible</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {footerNavItems.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided) => (
                                <TableRow
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <TableCell>{index + 1}</TableCell>
                                  <TableCell className="font-medium">{item.label}</TableCell>
                                  <TableCell>{item.url}</TableCell>
                                  <TableCell>
                                    <Switch
                                      checked={item.visible}
                                      onCheckedChange={() => toggleVisibility(item.id, "footer")}
                                    />
                                  </TableCell>
                                  <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                      <Button variant="ghost" size="icon" onClick={() => handleEdit(item)}>
                                        <Edit className="h-4 w-4" />
                                        <span className="sr-only">Edit</span>
                                      </Button>
                                      <Button variant="ghost" size="icon">
                                        <Trash2 className="h-4 w-4" />
                                        <span className="sr-only">Delete</span>
                                      </Button>
                                      <Button variant="ghost" size="icon">
                                        <ExternalLink className="h-4 w-4" />
                                        <span className="sr-only">View</span>
                                      </Button>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {editingItem && (
        <Card>
          <CardHeader>
            <CardTitle>Edit Navigation Item</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="label">Label</Label>
                <Input
                  id="label"
                  value={editingItem.label}
                  onChange={(e) => setEditingItem({ ...editingItem, label: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="url">URL</Label>
                <Input
                  id="url"
                  value={editingItem.url}
                  onChange={(e) => setEditingItem({ ...editingItem, url: e.target.value })}
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={handleSaveEdit}>
                  <Save className="mr-2 h-4 w-4" /> Save
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
