
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function ExamResult() {
  const resultData = [
    {
      admissionNo: "120036",
      rollNumber: "23620",
      studentName: "Ayan Desai",
      english: "32.00 (F)",
      hindi: "(F) Absent",
      mathematics: "42.00",
      science: "44.00",
      grandTotal: "118.00/400.00",
      percent: "29.50 (B-)",
      rank: "29",
      result: "Fail"
    },
    {
      admissionNo: "1001",
      rollNumber: "0201",
      studentName: "Hudson",
      english: "89.00",
      hindi: "86.00",
      mathematics: "78.00",
      science: "98.00",
      grandTotal: "351.00/400.00",
      percent: "87.75 (A+)",
      rank: "3",
      result: "Pass"
    },
    {
      admissionNo: "96302",
      rollNumber: "221002",
      studentName: "Jacob Bethell",
      english: "58.00",
      hindi: "67.00",
      mathematics: "55.00",
      science: "87.00",
      grandTotal: "267.00/400.00",
      percent: "66.75 (B++)",
      rank: "6",
      result: "Pass"
    },
    {
      admissionNo: "2152",
      rollNumber: "0205",
      studentName: "Kaylen",
      english: "44.00",
      hindi: "66.00",
      mathematics: "78.00",
      science: "34.00 (F)",
      grandTotal: "222.00/400.00",
      percent: "55.50 (B+)",
      rank: "12",
      result: "Fail"
    },
    {
      admissionNo: "1020",
      rollNumber: "0204",
      studentName: "Marlie",
      english: "43.00",
      hindi: "46.00",
      mathematics: "44.00",
      science: "76.00",
      grandTotal: "209.00/400.00",
      percent: "52.25 (B+)",
      rank: "10",
      result: "Pass"
    },
    {
      admissionNo: "7663",
      rollNumber: "6230",
      studentName: "Paul S. Bealer",
      english: "55.00",
      hindi: "75.00",
      mathematics: "34.00 (F)",
      science: "55.00",
      grandTotal: "219.00/400.00",
      percent: "54.75 (B+)",
      rank: "13",
      result: "Fail"
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
        <h1 className="text-3xl font-bold">Exam Result</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Criteria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
                  <SelectValue placeholder="Final Exam (March-2025)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="final">Final Exam (March-2025)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="session">Session *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="2024-25" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-25">2024-25</SelectItem>
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
          </div>
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Exam Result</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Admission No</TableHead>
                  <TableHead>Roll Number</TableHead>
                  <TableHead>Student Name</TableHead>
                  <TableHead>English (35.00/100.00 - 210)</TableHead>
                  <TableHead>Hindi (35.00/100.00 - 230)</TableHead>
                  <TableHead>Mathematics (35.00/100.00 - 110)</TableHead>
                  <TableHead>Science (35.00/100.00 - 111)</TableHead>
                  <TableHead>Grand Total</TableHead>
                  <TableHead>Percent (%)</TableHead>
                  <TableHead>Rank</TableHead>
                  <TableHead>Result</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resultData.map((student, index) => (
                  <TableRow key={index}>
                    <TableCell>{student.admissionNo}</TableCell>
                    <TableCell>{student.rollNumber}</TableCell>
                    <TableCell className="text-blue-600">{student.studentName}</TableCell>
                    <TableCell>{student.english}</TableCell>
                    <TableCell>{student.hindi}</TableCell>
                    <TableCell>{student.mathematics}</TableCell>
                    <TableCell>{student.science}</TableCell>
                    <TableCell>{student.grandTotal}</TableCell>
                    <TableCell>{student.percent}</TableCell>
                    <TableCell>{student.rank}</TableCell>
                    <TableCell>
                      <Badge variant={student.result === "Pass" ? "default" : "destructive"}>
                        {student.result}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
      </SidebarInset>
                    </div>
                </SidebarProvider>
  );
}
