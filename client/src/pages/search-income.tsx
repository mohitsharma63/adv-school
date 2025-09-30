
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

export default function SearchIncome() {
  const [searchType, setSearchType] = useState("last-12-months");
  const [searchQuery, setSearchQuery] = useState("");

  const incomeData = [
    {
      id: 1,
      name: "School Fees",
      invoiceNumber: "5234",
      incomeHead: "Donation",
      date: "04/05/2025",
      amount: "$250.00"
    },
    {
      id: 2,
      name: "New NCRT Books Collection",
      invoiceNumber: "54634",
      incomeHead: "Book Sale",
      date: "04/10/2025",
      amount: "$200.00"
    },
    {
      id: 3,
      name: "Online Classes",
      invoiceNumber: "4522",
      incomeHead: "Miscellaneous",
      date: "04/15/2025",
      amount: "$200.00"
    },
    {
      id: 4,
      name: "School Bus Rent",
      invoiceNumber: "4352",
      incomeHead: "Rent",
      date: "04/20/2025",
      amount: "$100.00"
    },
    {
      id: 5,
      name: "Health seminars",
      invoiceNumber: "453",
      incomeHead: "Miscellaneous",
      date: "04/25/2025",
      amount: "$150.00"
    },
    {
      id: 6,
      name: "Deepak Publisher",
      invoiceNumber: "2111",
      incomeHead: "Book Sale",
      date: "04/30/2025",
      amount: "$180.00"
    },
    {
      id: 7,
      name: "Student Uniform",
      invoiceNumber: "63542",
      incomeHead: "Uniform Sale",
      date: "05/01/2025",
      amount: "$250.00"
    },
    {
      id: 8,
      name: "School Donation",
      invoiceNumber: "88678",
      incomeHead: "Donation",
      date: "05/05/2025",
      amount: "$200.00"
    },
    {
      id: 9,
      name: "NCC Camp",
      invoiceNumber: "2341",
      incomeHead: "Miscellaneous",
      date: "05/10/2025",
      amount: "$150.00"
    },
    {
      id: 10,
      name: "NCRT NEW Books Publisher",
      invoiceNumber: "8794",
      incomeHead: "Book Sale",
      date: "05/15/2025",
      amount: "$150.00"
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
          Search Income
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Criteria</CardTitle>
          <CardDescription>Filter income records by various criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="search-type">Search Type *</Label>
              <Select value={searchType} onValueChange={setSearchType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-12-months">Last 12 Months</SelectItem>
                  <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                  <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="search">Search *</Label>
              <Input
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Income"
              />
            </div>
            <div className="flex items-end space-x-2">
              <Button onClick={handleSearch} className="flex-1">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
              <Button onClick={handleSearch} variant="outline">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Income List</CardTitle>
          <CardDescription>Search results for income records</CardDescription>
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
                <TableHead>Income Head</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount ($)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {incomeData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.invoiceNumber}</TableCell>
                  <TableCell>{item.incomeHead}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
    </SidebarInset>
                        </div>
                    </SidebarProvider>
  );
}
