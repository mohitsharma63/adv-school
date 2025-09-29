
import { useState } from "react";
import { CreditCard, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

interface Payment {
  id: string;
  requestId: string;
  admissionNo: string;
  name: string;
  class: string;
  paymentDate: string;
  submitDate: string;
  amount: number;
  status: "Approved" | "Pending";
  statusDate?: string;
  paymentId?: string;
}

const mockPayments: Payment[] = [
  {
    id: "208",
    requestId: "208",
    admissionNo: "1800011",
    name: "Edward Thomas",
    class: "Class 5(A)",
    paymentDate: "09/10/2025",
    submitDate: "09/02/2025 06:23 pm",
    amount: 350.00,
    status: "Approved",
    statusDate: "09/02/2025 06:27 pm",
    paymentId: "1181/1"
  },
  {
    id: "207",
    requestId: "207",
    admissionNo: "980867",
    name: "Vinni Khatri",
    class: "Class 2(B)",
    paymentDate: "09/10/2025",
    submitDate: "09/02/2025 06:12 pm",
    amount: 250.00,
    status: "Pending"
  },
  {
    id: "206",
    requestId: "206",
    admissionNo: "12003",
    name: "Jasaon Martin",
    class: "Class 3(A)",
    paymentDate: "08/05/2025",
    submitDate: "08/01/2025 05:26 pm",
    amount: 400.00,
    status: "Pending"
  },
  {
    id: "205",
    requestId: "205",
    admissionNo: "120036",
    name: "Ayan Desai",
    class: "Class 2(A)",
    paymentDate: "08/12/2025",
    submitDate: "08/01/2025 05:17 pm",
    amount: 300.00,
    status: "Pending"
  },
  {
    id: "204",
    requestId: "204",
    admissionNo: "18001",
    name: "Edward Thomas",
    class: "Class 1(A)",
    paymentDate: "07/10/2025",
    submitDate: "07/03/2025 12:09 pm",
    amount: 50.00,
    status: "Pending"
  },
  {
    id: "203",
    requestId: "203",
    admissionNo: "18020",
    name: "Jhony Taylor",
    class: "Class 4(B)",
    paymentDate: "07/10/2025",
    submitDate: "07/01/2025 01:41 pm",
    amount: 320.00,
    status: "Approved",
    statusDate: "07/01/2025 01:41 pm",
    paymentId: "1117/1"
  }
];

export default function OfflineBankPayments() {
  const [payments, setPayments] = useState<Payment[]>(mockPayments);

  const handleApprove = (paymentId: string) => {
    setPayments(payments.map(payment => 
      payment.id === paymentId 
        ? { ...payment, status: "Approved" as const, statusDate: new Date().toLocaleString(), paymentId: `${Math.floor(Math.random() * 9999)}/1` }
        : payment
    ));
  };

  const handleReject = (paymentId: string) => {
    console.log("Reject payment:", paymentId);
  };

  const handleEdit = (paymentId: string) => {
    console.log("Edit payment:", paymentId);
  };

  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>
    <div className="min-h-screen bg-background p-6" data-testid="offline-bank-payments-page">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <CreditCard className="w-6 h-6 mr-2" />
            Offline Bank Payments
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Admission No</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Payment Date</TableHead>
                  <TableHead>Submit Date</TableHead>
                  <TableHead>Amount ($)</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Status Date</TableHead>
                  <TableHead>Payment ID</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.requestId}</TableCell>
                    <TableCell>{payment.admissionNo}</TableCell>
                    <TableCell className="font-medium">{payment.name}</TableCell>
                    <TableCell>{payment.class}</TableCell>
                    <TableCell>{payment.paymentDate}</TableCell>
                    <TableCell>{payment.submitDate}</TableCell>
                    <TableCell>{payment.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={payment.status === "Approved" ? "default" : "secondary"}
                        className={payment.status === "Approved" ? "bg-green-500" : "bg-orange-500"}
                      >
                        {payment.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{payment.statusDate || "-"}</TableCell>
                    <TableCell>{payment.paymentId || "-"}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {payment.status === "Pending" && (
                            <DropdownMenuItem onClick={() => handleApprove(payment.id)}>
                              Approve
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem onClick={() => handleEdit(payment.id)}>
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleReject(payment.id)} className="text-red-600">
                            Reject
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="text-sm text-muted-foreground mt-4">
            Showing {payments.length} payments
          </div>
        </CardContent>
      </Card>
    </div>
      </SidebarInset>
                    </div>
                </SidebarProvider>
  );
}
