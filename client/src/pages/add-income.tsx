
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

export default function AddIncome() {
  const [date, setDate] = useState<Date>();
  const [incomeHead, setIncomeHead] = useState("");
  const [name, setName] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const incomeList = [
    {
      id: 1,
      name: "Happy Independence Day Celebration",
      description: "Happy Independence Day! Let's celebrate the freedom and unity of our nation, remembering the sacrifices of our heroes and striving for a better future.",
      invoiceNumber: "3422",
      date: "09/26/2025",
      incomeHead: "Miscellaneous",
      amount: "$200.00"
    },
    {
      id: 2,
      name: "Monthly Bus Rent",
      description: "The transporting students to and from school or school-related activities, often through a charter bus.",
      invoiceNumber: "5234",
      date: "09/22/2025",
      incomeHead: "Rent",
      amount: "$150.00"
    },
    {
      id: 3,
      name: "NCRT NEW Books Publisher",
      description: "NCRT Books are essential materials for students of all classes.",
      invoiceNumber: "8794",
      date: "09/16/2025",
      incomeHead: "Book Sale",
      amount: "$150.00"
    },
    {
      id: 4,
      name: "Class III to V - Patriotic Song Competition",
      description: "A patriotic song competition will be held for students of classes III to V encouraging them to express their love for the country.",
      invoiceNumber: "2341",
      date: "09/11/2025",
      incomeHead: "Miscellaneous",
      amount: "$150.00"
    },
    {
      id: 5,
      name: "School Donation",
      description: "Donation fee is fee which you have to give to make you eligible for admission of a",
      invoiceNumber: "88678",
      date: "09/05/2025",
      incomeHead: "Donation",
      amount: "$200.00"
    }
  ];

  const handleSave = () => {
    console.log("Saving income:", {
      incomeHead,
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
          Add Income
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add New Income</CardTitle>
            <CardDescription>Record a new income transaction</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="income-head">Income Head *</Label>
              <Select value={incomeHead} onValueChange={setIncomeHead}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="donation">Donation</SelectItem>
                  <SelectItem value="rent">Rent</SelectItem>
                  <SelectItem value="miscellaneous">Miscellaneous</SelectItem>
                  <SelectItem value="book-sale">Book Sale</SelectItem>
                  <SelectItem value="uniform-sale">Uniform Sale</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="invoice-number">Invoice Number</Label>
              <Input
                id="invoice-number"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                placeholder="Enter invoice number"
              />
            </div>

            <div className="space-y-2">
              <Label>Date *</Label>
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
              <Label htmlFor="amount">Amount ($) *</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="attach-document">Attach Document</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">Drag and drop a file here or click</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
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
            <CardTitle>Income List</CardTitle>
            <CardDescription>Recent income transactions</CardDescription>
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
                  <TableHead>Income Head</TableHead>
                  <TableHead>Amount ($)</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {incomeList.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell className="max-w-xs truncate">{item.description}</TableCell>
                    <TableCell>{item.invoiceNumber}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.incomeHead}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
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
          </CardContent>
        </Card>
      </div>
    </div>
    </SidebarInset>
                    </div>
                </SidebarProvider>
  );
}
