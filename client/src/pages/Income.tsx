
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
import { CalendarIcon, Plus, Search, DollarSign, TrendingUp } from "lucide-react";
import { format } from "date-fns";

export default function Income() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Income Management</h1>
      </div>

      <Tabs defaultValue="add-income" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="add-income">Add Income</TabsTrigger>
          <TabsTrigger value="search-income">Search Income</TabsTrigger>
          <TabsTrigger value="income-head">Income Head</TabsTrigger>
        </TabsList>

        <TabsContent value="add-income" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Income</CardTitle>
              <CardDescription>Record a new income transaction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="income-head">Income Head</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select income head" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tuition">Tuition Fees</SelectItem>
                      <SelectItem value="admission">Admission Fees</SelectItem>
                      <SelectItem value="transport">Transport Fees</SelectItem>
                      <SelectItem value="hostel">Hostel Fees</SelectItem>
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
                  <Label htmlFor="student-name">Student Name</Label>
                  <Input id="student-name" placeholder="Enter student name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reference">Reference Number</Label>
                  <Input id="reference" placeholder="Enter reference number" />
                </div>
              </div>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Income
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="search-income" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Search Income Records</CardTitle>
              <CardDescription>Find and view income transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Input placeholder="Search by student name or reference..." className="flex-1" />
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Income Head" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="tuition">Tuition Fees</SelectItem>
                    <SelectItem value="admission">Admission Fees</SelectItem>
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
                    <TableHead>Student</TableHead>
                    <TableHead>Income Head</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2024-01-15</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Tuition Fees</TableCell>
                    <TableCell>$500.00</TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell>
                      <Badge>Confirmed</Badge>
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

        <TabsContent value="income-head" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Income Categories</CardTitle>
              <CardDescription>Manage income categories and heads</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Total Income</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$25,430</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Tuition Fees</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$18,200</div>
                    <p className="text-xs text-muted-foreground">71% of total</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Admission Fees</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$4,800</div>
                    <p className="text-xs text-muted-foreground">19% of total</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Other Fees</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$2,430</div>
                    <p className="text-xs text-muted-foreground">10% of total</p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Input placeholder="Add new income category..." className="flex-1" />
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
                      <TableCell>Tuition Fees</TableCell>
                      <TableCell>$18,200</TableCell>
                      <TableCell>45</TableCell>
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
