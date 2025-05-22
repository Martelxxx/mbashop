import * as React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode
}

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {}

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean
  href: string
  isCurrentPage?: boolean
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, separator = <ChevronRight className="h-4 w-4" />, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="breadcrumb"
        className={cn("flex items-center text-sm text-muted-foreground", className)}
        {...props}
      />
    )
  },
)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(({ className, ...props }, ref) => {
  return <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
})
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, asChild = false, isCurrentPage = false, ...props }, ref) => {
    if (isCurrentPage) {
      return (
        <span className={cn("font-medium text-foreground", className)} aria-current="page">
          {props.children}
        </span>
      )
    }

    return (
      <>
        <Link ref={ref} className={cn("transition-colors hover:text-foreground", className)} {...props} />
        <span className="mx-1 text-muted-foreground/50">{<ChevronRight className="h-4 w-4" />}</span>
      </>
    )
  },
)
BreadcrumbLink.displayName = "BreadcrumbLink"

export { Breadcrumb, BreadcrumbItem, BreadcrumbLink }
