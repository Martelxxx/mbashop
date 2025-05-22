import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Edit, Trash2, ArrowUpDown, ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Mock categories data
const categories = [
  {
    id: "1",
    name: "Vêtements",
    slug: "vetements",
    image: "/elegant-clothing-fashion.png",
    productCount: 120,
    featured: true,
  },
  {
    id: "2",
    name: "Montres",
    slug: "montres",
    image: "/luxury-watches.png",
    productCount: 45,
    featured: true,
  },
  {
    id: "3",
    name: "Parfums",
    slug: "parfums",
    image: "/placeholder-zhys8.png",
    productCount: 38,
    featured: true,
  },
  {
    id: "4",
    name: "Électronique",
    slug: "electronique",
    image: "/modern-electronics.png",
    productCount: 67,
    featured: true,
  },
  {
    id: "5",
    name: "Maison",
    slug: "maison",
    image: "/modern-home-decor.png",
    productCount: 52,
    featured: true,
  },
  {
    id: "6",
    name: "Accessoires",
    slug: "accessoires",
    image: "/fashion-accessories-collection.png",
    productCount: 83,
    featured: true,
  },
]

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Categories</h1>
        <Button asChild>
          <Link href="/admin/categories/new">
            <Plus className="mr-2 h-4 w-4" /> Add Category
          </Link>
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search categories..." className="pl-8 w-full" />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Image</TableHead>
                  <TableHead>
                    <div className="flex items-center">
                      Category
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead className="text-right">Products</TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell>
                      <div className="h-12 w-12 rounded-md overflow-hidden bg-gray-100">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{category.name}</TableCell>
                    <TableCell className="text-right">{category.productCount}</TableCell>
                    <TableCell>
                      {category.featured ? (
                        <span className="text-green-500">Yes</span>
                      ) : (
                        <span className="text-muted-foreground">No</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/boutique?category=${category.slug}`} target="_blank">
                            <LayoutGrid className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/categories/${category.id}/edit`}>
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Link>
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

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>1-{categories.length}</strong> of <strong>{categories.length}</strong> categories
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous Page</span>
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next Page</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
