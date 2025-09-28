
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Plus, Search, Minus, TrendingDown } from "lucide-react";
import { format } from "date-fns";

export default function Expenses() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Expense Management</h1>
      </div>

      <Tabs defaultValue="add-expense" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="add-expense">Add Expense</TabsTrigger>
          <TabsTrigger value="search-expense">Search Expense</TabsTrigger>
          <TabsTrigger value="expense-head">Expense Head</TabsTrigger>
        </TabsList>

        <TabsContent value="add-expense" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Expense</CardTitle>
              <CardDescription>Record a new expense transaction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expense-head">Expense Head</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select expense head" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="salaries">Staff Salaries</SelectItem>
                      <SelectItem value="utilities">Utilities</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="supplies">Office Supplies</SelectItem>
                      <SelectItem value="transport">Transport</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input id="amount" type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment-method">Payment Method</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                      <SelectItem value="card">Credit/Debit Card</SelectItem>
                      <SelectItem value="cheque">Cheque</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vendor">Vendor/Payee</Label>
                  <Input id="vendor" placeholder="Enter vendor name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="invoice">Invoice Number</Label>
                  <Input id="invoice" placeholder="Enter invoice number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Enter expense description" />
              </div>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Expense
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="search-expense" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Search Expense Records</CardTitle>
              <CardDescription>Find and view expense transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Input placeholder="Search by vendor or invoice..." className="flex-1" />
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Expense Head" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="salaries">Staff Salaries</SelectItem>
                    <SelectItem value="utilities">Utilities</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Expense Head</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2024-01-15</TableCell>
                    <TableCell>ABC Supplies</TableCell>
                    <TableCell>Office Supplies</TableCell>
                    <TableCell>$150.00</TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell>
                      <Badge>Paid</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expense-head" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Expense Categories</CardTitle>
              <CardDescription>Manage expense categories and heads</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-600">$12,850</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Staff Salaries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$8,500</div>
                    <p className="text-xs text-muted-foreground">66% of total</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Utilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$2,100</div>
                    <p className="text-xs text-muted-foreground">16% of total</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Other Expenses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$2,250</div>
                    <p className="text-xs text-muted-foreground">18% of total</p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Input placeholder="Add new expense category..." className="flex-1" />
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Category
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Category</TableHead>
                      <TableHead>Total Amount</TableHead>
                      <TableHead>Transactions</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Staff Salaries</TableCell>
                      <TableCell>$8,500</TableCell>
                      <TableCell>12</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
