import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function RecentOrdersTable() {
  // Sample data for demonstration
  const orders = [
    {
      id: "ORD-001",
      customer: "Fatou Diop",
      date: "2023-05-20",
      total: "45,000 FCFA",
      status: "completed",
      items: 3,
    },
    {
      id: "ORD-002",
      customer: "Amadou Sow",
      date: "2023-05-19",
      total: "78,500 FCFA",
      status: "processing",
      items: 5,
    },
    {
      id: "ORD-003",
      customer: "Mariama Bâ",
      date: "2023-05-18",
      total: "23,750 FCFA",
      status: "completed",
      items: 2,
    },
    {
      id: "ORD-004",
      customer: "Ousmane Diallo",
      date: "2023-05-18",
      total: "125,000 FCFA",
      status: "pending",
      items: 7,
    },
    {
      id: "ORD-005",
      customer: "Aïssatou Ndiaye",
      date: "2023-05-17",
      total: "56,200 FCFA",
      status: "completed",
      items: 4,
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Items</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>
              <Badge
                variant={
                  order.status === "completed" ? "default" : order.status === "processing" ? "secondary" : "outline"
                }
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell>{order.items}</TableCell>
            <TableCell className="text-right">{order.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
