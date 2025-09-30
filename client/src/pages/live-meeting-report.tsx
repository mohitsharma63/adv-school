
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, BarChart3, Download, Users } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function LiveClassesReport() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  const reportData = [
    {
      id: 1,
      title: "Mathematics Classes",
      description: "Mathematics Classes",
      dateTime: "09/01/2025 12:30:00",
      createdBy: "Self",
      createdFor: "Shivam Verma (Teacher - 9002)",
      totalJoin: 2
    },
    {
      id: 2,
      title: "Mathematics Classes",
      description: "Mathematics Classes",
      dateTime: "08/01/2025 13:30:00",
      createdBy: "Self",
      createdFor: "Jason Sharlton (Teacher - 90006)",
      totalJoin: 3
    },
    {
      id: 3,
      title: "Combine Classes for Hindi",
      description: "Combine Classes for Hindi",
      dateTime: "05/01/2025 12:00:00",
      createdBy: "Self",
      createdFor: "Shivam Verma (Teacher - 9002)",
      totalJoin: 2
    },
    {
      id: 4,
      title: "Mathematics Classes",
      description: "Mathematics Classes",
      dateTime: "04/01/2025 10:00:00",
      createdBy: "Self",
      createdFor: "Shivam Verma (Teacher - 9002)",
      totalJoin: 2
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
        <h1 className="text-3xl font-bold flex items-center">
          <BarChart3 className="mr-3 h-8 w-8" />
          Live Classes Report
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Criteria</CardTitle>
          <CardDescription>Filter your live classes report</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="class">Class</Label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Class 1" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="class1">Class 1</SelectItem>
                  <SelectItem value="class2">Class 2</SelectItem>
                  <SelectItem value="class3">Class 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="section">Section</Label>
              <Select value={selectedSection} onValueChange={setSelectedSection}>
                <SelectTrigger>
                  <SelectValue placeholder="A" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">A</SelectItem>
                  <SelectItem value="b">B</SelectItem>
                  <SelectItem value="c">C</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Live Classes Report</CardTitle>
          <CardDescription>Detailed report of conducted live classes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-6">
            <Input placeholder="Search..." className="flex-1" />
            <Button variant="outline">
              <Download className="h-4 w-4" />
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Class Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date Time</TableHead>
                <TableHead>Created By</TableHead>
                <TableHead>Created For</TableHead>
                <TableHead>Total Join</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.dateTime}</TableCell>
                  <TableCell>{item.createdBy}</TableCell>
                  <TableCell>{item.createdFor}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      {item.totalJoin}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </TableCell>
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
