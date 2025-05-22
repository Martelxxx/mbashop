"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Search, User, Settings, LogOut, ExternalLink } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function AdminHeader() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Get the current page title based on the pathname
  const getPageTitle = () => {
    if (pathname === "/admin") return "Dashboard"
    if (pathname.startsWith("/admin/products")) return "Products"
    if (pathname.startsWith("/admin/categories")) return "Categories"
    if (pathname.startsWith("/admin/orders")) return "Orders"
    if (pathname.startsWith("/admin/customers")) return "Customers"
    if (pathname.startsWith("/admin/content")) return "Content"
    if (pathname.startsWith("/admin/media")) return "Media"
    if (pathname.startsWith("/admin/navigation")) return "Navigation"
    if (pathname.startsWith("/admin/deals")) return "Deals"
    if (pathname.startsWith("/admin/analytics")) return "Analytics"
    if (pathname.startsWith("/admin/settings")) return "Settings"
    return "Admin"
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex flex-1 items-center gap-4">
        {isSearchOpen ? (
          <div className="flex-1 md:max-w-sm">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-background pl-8 md:w-[300px]"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          </div>
        ) : (
          <h1 className="text-xl font-semibold">{getPageTitle()}</h1>
        )}
      </div>
      <div className="flex items-center gap-2">
        {!isSearchOpen && (
          <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setIsSearchOpen(true)}>
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        )}
        <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
          <Link href="/" target="_blank">
            <ExternalLink className="h-4 w-4" />
            <span className="sr-only">View Site</span>
          </Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9 relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-primary text-[10px]">
                3
              </Badge>
              <span className="sr-only">Notifications</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>New order received</DropdownMenuItem>
            <DropdownMenuItem>Product out of stock</DropdownMenuItem>
            <DropdownMenuItem>Customer review received</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative h-9 w-9">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/diverse-group.png" alt="Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
