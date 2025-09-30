
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

export default function IncomeHead() {
  const [incomeHead, setIncomeHead] = useState("");
  const [description, setDescription] = useState("");

  const incomeHeads = [
    {
      id: 1,
      name: "Donation",
      description: ""
    },
    {
      id: 2,
      name: "Rent",
      description: ""
    },
    {
      id: 3,
      name: "Miscellaneous",
      description: ""
    },
    {
      id: 4,
      name: "Book Sale",
      description: ""
    },
    {
      id: 5,
      name: "Uniform Sale",
      description: ""
    }
  ];

  const handleSave = () => {
    console.log("Saving income head:", { incomeHead, description });
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
          Add Income Head
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add New Income Head</CardTitle>
            <CardDescription>Create a new income category</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="income-head">Income Head</Label>
              <Input
                id="income-head"
                value={incomeHead}
                onChange={(e) => setIncomeHead(e.target.value)}
                placeholder="Enter income head name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description (optional)"
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
            <CardTitle>Income Head List</CardTitle>
            <CardDescription>Manage existing income categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Input placeholder="Search..." className="flex-1" />
              <Button variant="outline">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Income Head</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {incomeHeads.map((item) => (
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
