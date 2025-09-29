
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

interface Student {
  id: string;
  studentName: string;
  admissionNo: string;
  admissionDate: string;
  rollNumber: string;
  fatherName: string;
  balance: number;
}

const mockStudents: Student[] = [
  {
    id: "1",
    studentName: "Ayan Desai",
    admissionNo: "120036",
    admissionDate: "10/10/2024",
    rollNumber: "23620",
    fatherName: "Abhinand",
    balance: 0.00
  },
  {
    id: "2",
    studentName: "Hudson",
    admissionNo: "1001",
    admissionDate: "04/02/2024",
    rollNumber: "0201",
    fatherName: "Emrys",
    balance: 0.00
  },
  {
    id: "3",
    studentName: "Jacob Bethell",
    admissionNo: "96302",
    admissionDate: "12/10/2024",
    rollNumber: "221002",
    fatherName: "Brydon",
    balance: 0.00
  },
  {
    id: "4",
    studentName: "Kaylen",
    admissionNo: "2152",
    admissionDate: "04/02/2024",
    rollNumber: "0205",
    fatherName: "Lyndon",
    balance: 0.00
  },
  {
    id: "5",
    studentName: "Marlie",
    admissionNo: "1020",
    admissionDate: "04/02/2024",
    rollNumber: "0204",
    fatherName: "Lester",
    balance: 0.00
  },
  {
    id: "6",
    studentName: "Paul S. Bealer",
    admissionNo: "7663",
    admissionDate: "07/10/2024",
    rollNumber: "6230",
    fatherName: "McMahon",
    balance: 0.00
  }
];

export default function FeesCarryForward() {
  const [selectedClass, setSelectedClass] = useState("Class 1");
  const [selectedSection, setSelectedSection] = useState("A");
  const [students] = useState<Student[]>(mockStudents);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Search with criteria:", { class: selectedClass, section: selectedSection });
  };

  const handleSave = () => {
    console.log("Save carry forward balances");
  };

  const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];
  const sections = ["A", "B", "C", "D"];

 const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>

    <div className="min-h-screen bg-background p-6" data-testid="fees-carry-forward-page">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <ArrowRight className="w-6 h-6 mr-2" />
            Fees Carry Forward
          </CardTitle>
        </CardHeader>

        <CardContent>
          {/* Select Criteria Section */}
          <div className=" p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-4">Select Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="class">Class *</Label>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((cls) => (
                      <SelectItem key={cls} value={cls}>
                        {cls}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="section">Section *</Label>
                <Select value={selectedSection} onValueChange={setSelectedSection}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Section" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections.map((section) => (
                      <SelectItem key={section} value={section}>
                        {section}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={handleSearch}>
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>

          {/* Previous Session Balance Fees */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Previous Session Balance Fees</h3>
              <div className="text-sm text-red-600">
                Due Date: 11/28/2025
              </div>
            </div>

            <div className="mb-4">
              <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>

            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Admission No</TableHead>
                    <TableHead>Admission Date</TableHead>
                    <TableHead>Roll Number</TableHead>
                    <TableHead>Father Name</TableHead>
                    <TableHead>Balance ($)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.studentName}</TableCell>
                      <TableCell>{student.admissionNo}</TableCell>
                      <TableCell>{student.admissionDate}</TableCell>
                      <TableCell>{student.rollNumber}</TableCell>
                      <TableCell>{student.fatherName}</TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          step="0.01"
                          defaultValue={student.balance.toFixed(2)}
                          className="w-24"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-muted-foreground">
                Showing {students.length} students
              </div>
              <Button onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
      </SidebarInset>
                    </div>
                </SidebarProvider>
  );
}
