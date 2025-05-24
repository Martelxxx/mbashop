"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  LayoutDashboard,
  ShoppingBag,
  Tag,
  FileText,
  Settings,
  Users,
  Package,
  BarChart3,
  Menu,
  X,
  ImageIcon,
  Navigation,
  Clock,
  LogOut,
  BookOpen,
} from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AdminSidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      <div
        className={cn(
          "fixed inset-y-0 z-50 flex h-full flex-col border-r bg-background transition-all duration-300 md:relative",
          isCollapsed ? "w-16" : "w-64",
          className,
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <Link href="/admin" className={cn("flex items-center", isCollapsed && "justify-center")}>
            {isCollapsed ? (
              <span className="text-xl font-bold">MB</span>
            ) : (
              <span className="text-xl font-bold">MBA Admin</span>
            )}
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
            {isCollapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
          </Button>
        </div>
        <ScrollArea className="flex-1 overflow-auto">
          <nav className="flex flex-col gap-1 p-2">
            <NavItem
              href="/admin"
              icon={<LayoutDashboard className="h-5 w-5" />}
              label="Dashboard"
              isActive={pathname === "/admin"}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/products"
              icon={<ShoppingBag className="h-5 w-5" />}
              label="Products"
              isActive={pathname.startsWith("/admin/products")}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/categories"
              icon={<Tag className="h-5 w-5" />}
              label="Categories"
              isActive={pathname.startsWith("/admin/categories")}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/orders"
              icon={<Package className="h-5 w-5" />}
              label="Orders"
              isActive={pathname.startsWith("/admin/orders")}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/customers"
              icon={<Users className="h-5 w-5" />}
              label="Customers"
              isActive={pathname.startsWith("/admin/customers")}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/blog"
              icon={<BookOpen className="h-5 w-5" />}
              label="Blog"
              isActive={pathname.startsWith("/admin/blog")}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/content"
              icon={<FileText className="h-5 w-5" />}
              label="Content"
              isActive={pathname.startsWith("/admin/content")}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/media"
              icon={<ImageIcon className="h-5 w-5" />}
              label="Media"
              isActive={pathname.startsWith("/admin/media")}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/navigation"
              icon={<Navigation className="h-5 w-5" />}
              label="Navigation"
              isActive={pathname.startsWith("/admin/navigation")}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/deals"
              icon={<Clock className="h-5 w-5" />}
              label="Deals"
              isActive={pathname.startsWith("/admin/deals")}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/analytics"
              icon={<BarChart3 className="h-5 w-5" />}
              label="Analytics"
              isActive={pathname.startsWith("/admin/analytics")}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/settings"
              icon={<Settings className="h-5 w-5" />}
              label="Settings"
              isActive={pathname.startsWith("/admin/settings")}
              isCollapsed={isCollapsed}
            />
          </nav>
        </ScrollArea>
        <div className="border-t p-2">
          <NavItem
            href="/admin/logout"
            icon={<LogOut className="h-5 w-5" />}
            label="Logout"
            isActive={false}
            isCollapsed={isCollapsed}
          />
        </div>
      </div>
      {/* Mobile overlay */}
      {!isCollapsed && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden" onClick={toggleSidebar} />
      )}
    </>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  isActive: boolean
  isCollapsed: boolean
}

function NavItem({ href, icon, label, isActive, isCollapsed }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        isCollapsed && "justify-center px-2",
      )}
    >
      {icon}
      {!isCollapsed && <span>{label}</span>}
    </Link>
  )
}
