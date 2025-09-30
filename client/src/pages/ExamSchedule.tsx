
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function ExamSchedule() {
  const scheduleData = [
    {
      subject: "English (210)",
      dateFrom: "04/01/2025",
      startTime: "12:00:00",
      duration: "1",
      roomNo: "12",
      marksMax: "100.00",
      marksMin: "35.00"
    },
    {
      subject: "Hindi (230)",
      dateFrom: "04/04/2025",
      startTime: "12:00:00",
      duration: "1",
      roomNo: "11",
      marksMax: "100.00",
      marksMin: "35.00"
    },
    {
      subject: "Mathematics (110)",
      dateFrom: "04/05/2025",
      startTime: "12:00:00",
      duration: "1",
      roomNo: "12",
      marksMax: "100.00",
      marksMin: "35.00"
    },
    {
      subject: "Social Studies (212)",
      dateFrom: "04/08/2025",
      startTime: "12:00:00",
      duration: "1",
      roomNo: "11",
      marksMax: "100.00",
      marksMin: "35.00"
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
        <h1 className="text-3xl font-bold">Exam Schedule</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Criteria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="exam-group">Exam Group *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="General Exam (Pass / Fail)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Exam (Pass / Fail)</SelectItem>
                  <SelectItem value="grading">Grading System (School Based Grading System)</SelectItem>
                  <SelectItem value="cgpa">CGPA (College Based Grading System)</SelectItem>
                  <SelectItem value="gpa">GPA Exam Grading System</SelectItem>
                  <SelectItem value="average">Average Passing Exam</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="exam">Exam *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Monthly Test April(2025-26)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly Test April(2025-26)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="space-y-2">
              <Label htmlFor="section">Section</Label>
              <Input id="section" placeholder="Enter section" />
            </div>
            <Button className="mt-8">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Date From</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Room No.</TableHead>
                <TableHead>Marks (Max.)</TableHead>
                <TableHead>Marks (Min.)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduleData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.subject}</TableCell>
                  <TableCell>{item.dateFrom}</TableCell>
                  <TableCell>{item.startTime}</TableCell>
                  <TableCell>{item.duration}</TableCell>
                  <TableCell>{item.roomNo}</TableCell>
                  <TableCell>{item.marksMax}</TableCell>
                  <TableCell>{item.marksMin}</TableCell>
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
