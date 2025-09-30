
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Save, Upload, DollarSign, Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function AddExpense() {
  const [date, setDate] = useState<Date>();
  const [expenseHead, setExpenseHead] = useState("");
  const [name, setName] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const expenseList = [
    {
      id: 1,
      name: "CBSE BOOKS",
      description: "NCRT Books are essential materials for students of all classes.",
      invoiceNumber: "5667",
      date: "09/25/2025",
      expenseHead: "Stationery Purchase",
      amount: "$150.00"
    },
    {
      id: 2,
      name: "Staff Training",
      description: "Staff Training Teaches programs",
      invoiceNumber: "7868",
      date: "09/22/2025",
      expenseHead: "Miscellaneous",
      amount: "$200.00"
    },
    {
      id: 3,
      name: "Stock Flower",
      description: "Stock is an odd name for a flower. It seems to be a reference to the 'stocky'",
      invoiceNumber: "7894",
      date: "09/16/2025",
      expenseHead: "Flower",
      amount: "$150.00"
    },
    {
      id: 4,
      name: "Airtel Broad Band",
      description: "The new billing solution is faster and more accurate than its existing systems.",
      invoiceNumber: "2341",
      date: "09/11/2025",
      expenseHead: "Telephone Bill",
      amount: "$150.00"
    },
    {
      id: 5,
      name: "The Power Center",
      description: "The new billing solution is faster and more accurate than its existing systems.",
      invoiceNumber: "345345",
      date: "09/05/2025",
      expenseHead: "Electricity Bill",
      amount: "$200.00"
    }
  ];

  const handleSave = () => {
    console.log("Saving expense:", {
      expenseHead,
      name,
      invoiceNumber,
      date,
      amount,
      description
    });
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
          <DollarSign className="mr-3 h-8 w-8" />
          Add Expense
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add Expense</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="expense-head">Expense Head *</Label>
              <Select value={expenseHead} onValueChange={setExpenseHead}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stationery">Stationery Purchase</SelectItem>
                  <SelectItem value="electricity">Electricity Bill</SelectItem>
                  <SelectItem value="telephone">Telephone Bill</SelectItem>
                  <SelectItem value="miscellaneous">Miscellaneous</SelectItem>
                  <SelectItem value="flower">Flower</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=""
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="invoice-number">Invoice Number</Label>
              <Input
                id="invoice-number"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                placeholder=""
              />
            </div>

            <div className="space-y-2">
              <Label>Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "MM/dd/yyyy") : <span>09/30/2025</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount ($) *</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder=""
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="attach-document">Attach Document</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Drag and drop a file here or click</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder=""
                rows={3}
              />
            </div>

            <Button onClick={handleSave} className="w-full">
              <Save className="mr-2 h-4 w-4" />
              Save
            </Button>
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
                  <TableHead>Description</TableHead>
                  <TableHead>Invoice Number</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Expense Head</TableHead>
                  <TableHead>Amount ($)</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expenseList.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell className="max-w-xs truncate">{item.description}</TableCell>
                    <TableCell>{item.invoiceNumber}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.expenseHead}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
              <span>Records: 1 to 5 of 5</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>‹</Button>
                <Button variant="outline" size="sm">1</Button>
                <Button variant="outline" size="sm" disabled>›</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </SidebarInset>
                        </div>
                    </SidebarProvider>
  );
}
