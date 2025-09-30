
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Save, DollarSign, Edit, Trash2, Search } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function ExpenseHead() {
  const [expenseHead, setExpenseHead] = useState("");
  const [description, setDescription] = useState("");

  const expenseHeads = [
    {
      id: 1,
      name: "Stationery Purchase",
      description: ""
    },
    {
      id: 2,
      name: "Electricity Bill",
      description: ""
    },
    {
      id: 3,
      name: "Telephone Bill",
      description: ""
    },
    {
      id: 4,
      name: "Miscellaneous",
      description: ""
    },
    {
      id: 5,
      name: "Flower",
      description: ""
    }
  ];

  const handleSave = () => {
    console.log("Saving expense head:", { expenseHead, description });
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
          Add Expense Head
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add Expense Head</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="expense-head">Expense Head *</Label>
              <Input
                id="expense-head"
                value={expenseHead}
                onChange={(e) => setExpenseHead(e.target.value)}
                placeholder=""
              />
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
            <CardTitle>Expense Head List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Input placeholder="Search..." className="flex-1" />
              <span className="text-sm text-muted-foreground">100</span>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Expense Head</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expenseHeads.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.description || "-"}</TableCell>
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
