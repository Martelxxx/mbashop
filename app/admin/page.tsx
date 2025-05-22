import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingBag, Users, CreditCard, ArrowUpRight, ArrowDownRight, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import RecentOrdersTable from "@/components/admin/recent-orders-table"
import SalesChart from "@/components/admin/sales-chart"
import TopProductsChart from "@/components/admin/top-products-chart"
import AdminHeader from "@/components/admin/admin-header"
import AdminSidebar from "@/components/admin/admin-sidebar"

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <main className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <Button asChild>
                <Link href="/admin/orders">View All Orders</Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <CreditCard className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12,345,678 FCFA</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <span className="text-green-500 flex items-center mr-1">
                      <ArrowUpRight className="w-3 h-3 mr-1" />
                      +12.5%
                    </span>
                    from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Orders</CardTitle>
                  <ShoppingBag className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <span className="text-green-500 flex items-center mr-1">
                      <ArrowUpRight className="w-3 h-3 mr-1" />
                      +8.2%
                    </span>
                    from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Customers</CardTitle>
                  <Users className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+1,234</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <span className="text-green-500 flex items-center mr-1">
                      <ArrowUpRight className="w-3 h-3 mr-1" />
                      +5.7%
                    </span>
                    from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  <Eye className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2%</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <span className="text-red-500 flex items-center mr-1">
                      <ArrowDownRight className="w-3 h-3 mr-1" />
                      -0.3%
                    </span>
                    from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Sales Overview</CardTitle>
                      <CardDescription>View your sales data for the past 30 days</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <SalesChart />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Top Products</CardTitle>
                      <CardDescription>Your best-selling products this month</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <TopProductsChart />
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>You have received 32 orders this week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentOrdersTable />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics">
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced Analytics</CardTitle>
                    <CardDescription>Detailed analytics will be displayed here</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <p className="text-muted-foreground">Advanced analytics module coming soon</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reports">
                <Card>
                  <CardHeader>
                    <CardTitle>Reports</CardTitle>
                    <CardDescription>Generate and download reports</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <p className="text-muted-foreground">Reports module coming soon</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
