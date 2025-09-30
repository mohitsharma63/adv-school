
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, DollarSign } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function SearchExpense() {
  const [searchType, setSearchType] = useState("last-3-months");
  const [searchQuery, setSearchQuery] = useState("");

  const expenseData = [
    {
      id: 1,
      name: "Online Course Classes",
      invoiceNumber: "5342",
      expenseHead: "Miscellaneous",
      date: "07/02/2025",
      amount: "$150.00"
    },
    {
      id: 2,
      name: "The Power Center",
      invoiceNumber: "345345",
      expenseHead: "Electricity Bill",
      date: "07/05/2025",
      amount: "$200.00"
    },
    {
      id: 3,
      name: "Airtel Broad Band",
      invoiceNumber: "2341",
      expenseHead: "Telephone Bill",
      date: "07/10/2025",
      amount: "$150.00"
    },
    {
      id: 4,
      name: "Stock Flower",
      invoiceNumber: "7894",
      expenseHead: "Flower",
      date: "07/16/2025",
      amount: "$150.00"
    },
    {
      id: 5,
      name: "Staff Training",
      invoiceNumber: "7868",
      expenseHead: "Miscellaneous",
      date: "07/21/2025",
      amount: "$200.00"
    },
    {
      id: 6,
      name: "CBSE BOOKS",
      invoiceNumber: "5667",
      expenseHead: "Stationery Purchase",
      date: "07/26/2025",
      amount: "$150.00"
    },
    {
      id: 7,
      name: "Online Course Classes",
      invoiceNumber: "5342",
      expenseHead: "Miscellaneous",
      date: "08/02/2025",
      amount: "$150.00"
    },
    {
      id: 8,
      name: "The Power Center",
      invoiceNumber: "345345",
      expenseHead: "Electricity Bill",
      date: "08/05/2025",
      amount: "$200.00"
    },
    {
      id: 9,
      name: "Airtel Broad Band",
      invoiceNumber: "2341",
      expenseHead: "Telephone Bill",
      date: "08/11/2025",
      amount: "$150.00"
    },
    {
      id: 10,
      name: "Stock Flower",
      invoiceNumber: "7894",
      expenseHead: "Flower",
      date: "08/16/2025",
      amount: "$150.00"
    },
    {
      id: 11,
      name: "Staff Training",
      invoiceNumber: "7868",
      expenseHead: "Miscellaneous",
      date: "08/21/2025",
      amount: "$200.00"
    }
  ];

  const handleSearch = () => {
    console.log("Searching with:", { searchType, searchQuery });
  };

 
    const handleMenuItemClick = (section: string, item: string) => {
     console.log(`Menu clicked: ${section} > ${item}`);
   };
   return (
     <SidebarProvider>
                     <div className="flex h-screen w-full">
                         <AppSidebar onMenuItemClick={handleMenuItemClick} />
                         <SidebarInset>
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center">
          <Search className="mr-3 h-8 w-8" />
          Search Expense
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Criteria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="search-type">Search Type *</Label>
              <Select value={searchType} onValueChange={setSearchType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                  <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                  <SelectItem value="last-12-months">Last 12 Months</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="search">Search *</Label>
              <Input
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Expense"
              />
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <Button onClick={handleSearch}>
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button variant="outline">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Expense List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Input placeholder="Search..." className="flex-1" />
            <span className="text-sm text-muted-foreground">100</span>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Invoice Number</TableHead>
                <TableHead>Expense Head</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount ($)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expenseData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.invoiceNumber}</TableCell>
                  <TableCell>{item.expenseHead}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
            <span>Records: 1 to 11 of 11</span>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>‹</Button>
              <Button variant="outline" size="sm">1</Button>
              <Button variant="outline" size="sm" disabled>›</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </SidebarInset>
                    </div>
                </SidebarProvider>
  );
}
