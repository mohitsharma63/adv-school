
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Download, FileText } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function PrintMarksheet() {
  const studentData = [
    {
      admissionNo: "120020",
      studentName: "Ashwani Kumar",
      fatherName: "Arjun Kumar",
      dateOfBirth: "09/25/2009",
      gender: "Male",
      category: "General",
      mobileNumber: "980678463"
    },
    {
      admissionNo: "18001",
      studentName: "Edward Thomas",
      fatherName: "Olivier Thomas",
      dateOfBirth: "10/24/2013",
      gender: "Male",
      category: "General",
      mobileNumber: "8906785675"
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
        <h1 className="text-3xl font-bold">Print Marksheet</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Criteria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="space-y-2">
              <Label htmlFor="exam-group">Exam Group *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="General Exam (Pass / Fail)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Exam (Pass / Fail)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="exam">Exam *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Monthly Test April(2025-...)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly Test April(2025-26)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="session">Session *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="2025-26" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025-26">2025-26</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="class">Class *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Class 1" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Class 1</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="section">Section *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="A" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">A</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="marksheet-template">Marksheet Template *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="school marksheet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="school">school marksheet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Student List</CardTitle>
          <div className="flex justify-end">
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Bulk Download
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Checkbox />
                </TableHead>
                <TableHead>Admission No</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Father Name</TableHead>
                <TableHead>Date Of Birth</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Mobile Number</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentData.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{student.admissionNo}</TableCell>
                  <TableCell className="text-blue-600">{student.studentName}</TableCell>
                  <TableCell>{student.fatherName}</TableCell>
                  <TableCell>{student.dateOfBirth}</TableCell>
                  <TableCell>{student.gender}</TableCell>
                  <TableCell>{student.category}</TableCell>
                  <TableCell>{student.mobileNumber}</TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4" />
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
      </SidebarInset>
                        </div>
                    </SidebarProvider>
  );
}
