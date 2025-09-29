
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

interface PaymentDetail {
  paymentId: string;
  date: string;
  name: string;
  class: string;
  feesGroup: string;
  feeType: string;
  mode: string;
  paid: number;
  discount: number;
  fine: number;
}

const mockPaymentDetail: PaymentDetail = {
  paymentId: "1181/1",
  date: "09/10/2025",
  name: "Edward Thomas (1800011)",
  class: "Class 5 (A)",
  feesGroup: "Class 5 General",
  feeType: "September Month Fees (sep-month-fees)",
  mode: "Bank Payment",
  paid: 350.00,
  discount: 0.00,
  fine: 0.00
};

export default function SearchFeesPayment() {
  const [paymentId, setPaymentId] = useState("");
  const [paymentDetail, setPaymentDetail] = useState<PaymentDetail | null>(null);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = () => {
    setIsSearched(true);
    if (paymentId === "1181/1") {
      setPaymentDetail(mockPaymentDetail);
    } else {
      setPaymentDetail(null);
    }
  };

  const handleMenuItemClick = (section: string, item: string) => {
     console.log(`Menu clicked: ${section} > ${item}`);
   };
   return (
     <SidebarProvider>
                     <div className="flex h-screen w-full">
                         <AppSidebar onMenuItemClick={handleMenuItemClick} />
                         <SidebarInset>
    
    <div className="min-h-screen bg-background p-6" data-testid="search-fees-payment-page">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Search Fees Payment</CardTitle>
        </CardHeader>

        <CardContent>
          {/* Search Section */}
          <div className="mb-6">
            <div className="flex items-end space-x-4">
              <div className="flex-1">
                <Label htmlFor="paymentId">Payment ID</Label>
                <Input
                  id="paymentId"
                  value={paymentId}
                  onChange={(e) => setPaymentId(e.target.value)}
                  placeholder="Enter Payment ID (e.g., 1181/1)"
                />
              </div>
              <Button onClick={handleSearch}>
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Payment Detail Section */}
          {isSearched && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Payment ID Detail</h3>
              {paymentDetail ? (
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Payment ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Class</TableHead>
                        <TableHead>Fees Group</TableHead>
                        <TableHead>Fee Type</TableHead>
                        <TableHead>Mode</TableHead>
                        <TableHead>Paid</TableHead>
                        <TableHead>Discount</TableHead>
                        <TableHead>Fine</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">{paymentDetail.paymentId}</TableCell>
                        <TableCell>{paymentDetail.date}</TableCell>
                        <TableCell>{paymentDetail.name}</TableCell>
                        <TableCell>{paymentDetail.class}</TableCell>
                        <TableCell>{paymentDetail.feesGroup}</TableCell>
                        <TableCell>{paymentDetail.feeType}</TableCell>
                        <TableCell>{paymentDetail.mode}</TableCell>
                        <TableCell>${paymentDetail.paid.toFixed(2)}</TableCell>
                        <TableCell>${paymentDetail.discount.toFixed(2)}</TableCell>
                        <TableCell>${paymentDetail.fine.toFixed(2)}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            View Receipt
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="p-4 text-sm text-muted-foreground">
                    Records: 1 to 1 of 1
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No payment found with ID: {paymentId}</p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
      </SidebarInset>
                    </div>
                </SidebarProvider>
  );
}
