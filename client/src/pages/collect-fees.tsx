
import { useState } from "react";
import { Search, DollarSign } from "lucide-react";
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
  admissionNo: string;
  studentName: string;
  class: string;
  section: string;
  fatherName: string;
  dateOfBirth: string;
  mobileNo: string;
}

const mockStudents: Student[] = [
  {
    id: "1",
    admissionNo: "1001",
    studentName: "Hudson",
    class: "Class 1",
    section: "A",
    fatherName: "Emrys",
    dateOfBirth: "02/06/2019",
    mobileNo: "16514840184"
  },
  {
    id: "2",
    admissionNo: "1020",
    studentName: "Marlie",
    class: "Class 1",
    section: "A",
    fatherName: "Lester",
    dateOfBirth: "05/22/2019",
    mobileNo: "6505480481"
  },
  {
    id: "3",
    admissionNo: "120036",
    studentName: "Ayan Desai",
    class: "Class 1",
    section: "A",
    fatherName: "Abhinand",
    dateOfBirth: "10/15/2015",
    mobileNo: "9067875674"
  },
  {
    id: "4",
    admissionNo: "2152",
    studentName: "Kaylen",
    class: "Class 1",
    section: "A",
    fatherName: "Lyndon",
    dateOfBirth: "06/19/2019",
    mobileNo: "54180185420"
  },
  {
    id: "5",
    admissionNo: "7663",
    studentName: "Paul S. Bealer",
    class: "Class 1",
    section: "A",
    fatherName: "McMahon",
    dateOfBirth: "08/13/2005",
    mobileNo: "789067867"
  },
  {
    id: "6",
    admissionNo: "96302",
    studentName: "Jacob Bethell",
    class: "Class 1",
    section: "A",
    fatherName: "Brydon",
    dateOfBirth: "08/19/2016",
    mobileNo: "065758878"
  }
];

export default function CollectFees() {
  const [selectedClass, setSelectedClass] = useState<string>("Class 1");
  const [selectedSection, setSelectedSection] = useState<string>("A");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(mockStudents);

  const handleSearch = () => {
    const filtered = mockStudents.filter(student => 
      student.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.admissionNo.includes(searchTerm) ||
      student.fatherName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(filtered);
  };

  const handleCollectFees = (studentId: string) => {
    console.log("Collect fees for student:", studentId);
    // Navigate to fee collection form
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
    <div className="min-h-screen bg-background p-6" data-testid="collect-fees-page">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <DollarSign className="w-6 h-6 mr-2" />
            Collect Fees
          </CardTitle>
        </CardHeader>

        <CardContent>
          {/* Select Criteria Section */}
          <div className="p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-4">Select Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
                <Label htmlFor="section">Section</Label>
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

              <div>
                <Label htmlFor="search">Search By Keyword</Label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Search by Student Name, Roll Number, Enroll Number, National Id, Local Id Etc."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleSearch}>
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Student List */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Student List</h3>
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Class</TableHead>
                    <TableHead>Section</TableHead>
                    <TableHead>Admission No</TableHead>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Father Name</TableHead>
                    <TableHead>Date of Birth</TableHead>
                    <TableHead>Mobile No.</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.class}</TableCell>
                      <TableCell>{student.section}</TableCell>
                      <TableCell>{student.admissionNo}</TableCell>
                      <TableCell className="text-blue-600 font-medium">
                        {student.studentName}
                      </TableCell>
                      <TableCell>{student.fatherName}</TableCell>
                      <TableCell>{student.dateOfBirth}</TableCell>
                      <TableCell>{student.mobileNo}</TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          onClick={() => handleCollectFees(student.id)}
                        >
                          Collect Fees
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Records: 1 to {filteredStudents.length} of {filteredStudents.length}
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
