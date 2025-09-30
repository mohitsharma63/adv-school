
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2 } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function MarksDivision() {
  const divisionData = [
    {
      divisionName: "First",
      percentageFrom: "100.00",
      percentageUpto: "60.00"
    },
    {
      divisionName: "Second",
      percentageFrom: "60.00",
      percentageUpto: "40.00"
    },
    {
      divisionName: "Third",
      percentageFrom: "40.00",
      percentageUpto: "0.00"
    }
  ];

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
        <h1 className="text-3xl font-bold">Marks Division Management</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add Marks Division Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add Marks Division</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="division-name">Division Name *</Label>
              <Input id="division-name" placeholder="Enter division name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="percent-from">Percent From *</Label>
              <Input id="percent-from" type="number" placeholder="Enter percentage from" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="percent-upto">Percent Upto *</Label>
              <Input id="percent-upto" type="number" placeholder="Enter percentage upto" />
            </div>
            <Button className="w-full">Save</Button>
          </CardContent>
        </Card>

        {/* Division List */}
        <Card>
          <CardHeader>
            <CardTitle>Division List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Division Name</TableHead>
                  <TableHead>Percentage From</TableHead>
                  <TableHead>Percentage Upto</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {divisionData.map((division, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-blue-600">{division.divisionName}</TableCell>
                    <TableCell>{division.percentageFrom}</TableCell>
                    <TableCell>{division.percentageUpto}</TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
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
