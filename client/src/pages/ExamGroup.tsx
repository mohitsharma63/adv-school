
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function ExamGroup() {
  const [searchTerm, setSearchTerm] = useState("");

  const examGroups = [
    {
      id: 1,
      name: "General Exam (Pass / Fail)",
      type: "General Purpose (Pass/Fail)",
      noOfExams: 5,
      action: "active"
    },
    {
      id: 2,
      name: "Grading System (School Based Grading System)",
      type: "School Based Grading System",
      noOfExams: 5,
      action: "active"
    },
    {
      id: 3,
      name: "CGPA (College Based Grading System)",
      type: "College Based Grading System",
      noOfExams: 5,
      action: "active"
    },
    {
      id: 4,
      name: "GPA Exam Grading System",
      type: "GPA Grading System",
      noOfExams: 5,
      action: "active"
    },
    {
      id: 5,
      name: "Average Passing Exam",
      type: "Average Passing",
      noOfExams: 4,
      action: "active"
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
        <h1 className="text-3xl font-bold">Exam Group Management</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add Exam Group */}
        <Card>
          <CardHeader>
            <CardTitle>Add Exam Group</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" placeholder="Enter exam group name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="exam-type">Exam Type *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Purpose (Pass/Fail)</SelectItem>
                  <SelectItem value="school">School Based Grading System</SelectItem>
                  <SelectItem value="college">College Based Grading System</SelectItem>
                  <SelectItem value="gpa">GPA Grading System</SelectItem>
                  <SelectItem value="average">Average Passing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter description" />
            </div>
            <Button className="w-full">
              Save
            </Button>
          </CardContent>
        </Card>

        {/* Exam Group List */}
        <Card>
          <CardHeader>
            <CardTitle>Exam Group List</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>No Of Exams</TableHead>
                  <TableHead>Exam Type</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {examGroups.map((group) => (
                  <TableRow key={group.id}>
                    <TableCell>{group.name}</TableCell>
                    <TableCell>{group.noOfExams}</TableCell>
                    <TableCell>{group.type}</TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
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
            <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
              <span>Records: 1 to 5 of 5</span>
              <div className="flex space-x-1">
                <Button variant="outline" size="sm">‹</Button>
                <Button variant="outline" size="sm">1</Button>
                <Button variant="outline" size="sm">›</Button>
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
