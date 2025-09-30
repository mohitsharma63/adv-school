
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Trash2 } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function MarksGrade() {
  const gradeData = [
    { examType: "General Purpose (Pass/Fail)", grades: [
      { name: "B-", percentFrom: "0.00", percentUpto: "40.00", gradePoint: "0.0" },
      { name: "B", percentFrom: "40.00", percentUpto: "50.00", gradePoint: "0.0" },
      { name: "B+", percentFrom: "50.00", percentUpto: "60.00", gradePoint: "0.0" },
      { name: "B++", percentFrom: "60.00", percentUpto: "70.00", gradePoint: "0.0" },
      { name: "A", percentFrom: "70.00", percentUpto: "80.00", gradePoint: "0.0" },
      { name: "A+", percentFrom: "80.00", percentUpto: "90.00", gradePoint: "0.0" },
      { name: "A++", percentFrom: "90.00", percentUpto: "100.00", gradePoint: "0.0" }
    ]},
    { examType: "School Based Grading System", grades: [
      { name: "B-", percentFrom: "0.00", percentUpto: "40.00", gradePoint: "0.0" },
      { name: "B", percentFrom: "40.00", percentUpto: "50.00", gradePoint: "0.0" },
      { name: "B+", percentFrom: "50.00", percentUpto: "60.00", gradePoint: "0.0" },
      { name: "B++", percentFrom: "60.00", percentUpto: "70.00", gradePoint: "0.0" },
      { name: "A", percentFrom: "70.00", percentUpto: "80.00", gradePoint: "0.0" },
      { name: "A+", percentFrom: "80.00", percentUpto: "90.00", gradePoint: "0.0" },
      { name: "A++", percentFrom: "90.00", percentUpto: "100.00", gradePoint: "0.0" }
    ]},
    { examType: "College Based Grading System", grades: [
      { name: "B-", percentFrom: "0.00", percentUpto: "40.00", gradePoint: "0.0" },
      { name: "B", percentFrom: "40.00", percentUpto: "50.00", gradePoint: "0.0" },
      { name: "B+", percentFrom: "50.00", percentUpto: "60.00", gradePoint: "0.0" },
      { name: "B++", percentFrom: "60.00", percentUpto: "70.00", gradePoint: "0.0" },
      { name: "A", percentFrom: "70.00", percentUpto: "80.00", gradePoint: "0.0" },
      { name: "A+", percentFrom: "80.00", percentUpto: "90.00", gradePoint: "0.0" },
      { name: "A++", percentFrom: "90.00", percentUpto: "100.00", gradePoint: "0.0" }
    ]},
    { examType: "GPA Grading System", grades: [
      { name: "A+", percentFrom: "90.00", percentUpto: "100.00", gradePoint: "4.5" },
      { name: "A", percentFrom: "80.00", percentUpto: "90.00", gradePoint: "4.0" },
      { name: "B+", percentFrom: "70.00", percentUpto: "80.00", gradePoint: "3.5" },
      { name: "B", percentFrom: "60.00", percentUpto: "70.00", gradePoint: "3.0" },
      { name: "C+", percentFrom: "50.00", percentUpto: "60.00", gradePoint: "2.5" }
    ]}
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
        <h1 className="text-3xl font-bold">Marks Grade Management</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Add Marks Grade Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add Marks Grade</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
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
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="grade-name">Grade Name *</Label>
              <Input id="grade-name" placeholder="Enter grade name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="percent-upto">Percent Upto *</Label>
              <Input id="percent-upto" type="number" placeholder="Enter percentage" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="percent-from">Percent From *</Label>
              <Input id="percent-from" type="number" placeholder="Enter percentage" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="grade-point">Grade Point *</Label>
              <Input id="grade-point" type="number" step="0.1" placeholder="Enter grade point" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter description" />
            </div>
            <Button className="w-full">Save</Button>
          </CardContent>
        </Card>

        {/* Grade List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Grade List</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {gradeData.map((examTypeData, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-3">{examTypeData.examType}</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Exam Type</TableHead>
                      <TableHead>Grade Name</TableHead>
                      <TableHead>Percent From / Upto</TableHead>
                      <TableHead>Grade Point</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {examTypeData.grades.map((grade, gradeIndex) => (
                      <TableRow key={gradeIndex}>
                        <TableCell>{examTypeData.examType}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{grade.name}</Badge>
                        </TableCell>
                        <TableCell>{grade.percentFrom} To {grade.percentUpto}</TableCell>
                        <TableCell>{grade.gradePoint}</TableCell>
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
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
      </SidebarInset>
                    </div>
                </SidebarProvider>
  );
}
