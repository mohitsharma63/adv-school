
import { useState } from "react";
import { Search, Filter, User, Phone, Mail, Calendar, BookOpen, Users, Eye, Edit, Trash2, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

interface Student {
  id: string;
  admissionNo: string;
  rollNo: string;
  studentName: string;
  class: string;
  section: string;
  fatherName: string;
  dateOfBirth: string;
  gender: string;
  category: string;
  mobileNumber: string;
  localIdNumber?: string;
  guardianName?: string;
  guardianPhone?: string;
  address?: string;
  avatar?: string;
}

const mockStudents: Student[] = [
  {
    id: "1",
    admissionNo: "1001",
    rollNo: "0201",
    studentName: "Hudson",
    class: "Class 1(A)",
    section: "A",
    fatherName: "Emrys",
    dateOfBirth: "02/06/2019",
    gender: "Male",
    category: "General",
    mobileNumber: "16514840184",
    localIdNumber: "51165121015Z",
    guardianName: "Emrys",
    guardianPhone: "16514840184",
    address: "Kathmandu, Nepal"
  },
  {
    id: "2",
    admissionNo: "1020",
    rollNo: "0204",
    studentName: "Marlie",
    class: "Class 1(A)",
    section: "A",
    fatherName: "Lester",
    dateOfBirth: "05/22/2019",
    gender: "Female",
    category: "General",
    mobileNumber: "6505480481",
    localIdNumber: "66048048",
    guardianName: "Lester",
    guardianPhone: "6505480481",
    address: "Lalitpur, Nepal"
  },
  {
    id: "3",
    admissionNo: "120036",
    rollNo: "23620",
    studentName: "Ayan Desai",
    class: "Class 1(A)",
    section: "A",
    fatherName: "Abhinand",
    dateOfBirth: "10/15/2015",
    gender: "Male",
    category: "General",
    mobileNumber: "9067875674",
    localIdNumber: "906787567",
    guardianName: "Abhinand",
    guardianPhone: "9067875674",
    address: "Bhaktapur, Nepal"
  },
  {
    id: "4",
    admissionNo: "2152",
    rollNo: "0205",
    studentName: "Kaylen",
    class: "Class 1(A)",
    section: "A",
    fatherName: "Lyndon",
    dateOfBirth: "06/19/2019",
    gender: "Female",
    category: "General",
    mobileNumber: "54180185420",
    localIdNumber: "541801854",
    guardianName: "Lyndon",
    guardianPhone: "54180185420",
    address: "Pokhara, Nepal"
  },
  {
    id: "5",
    admissionNo: "7663",
    rollNo: "6230",
    studentName: "Paul S. Bealer",
    class: "Class 1(A)",
    section: "A",
    fatherName: "McMahon",
    dateOfBirth: "08/13/2005",
    gender: "Male",
    category: "General",
    mobileNumber: "789067867",
    localIdNumber: "789067867",
    guardianName: "McMahon",
    guardianPhone: "789067867",
    address: "Chitwan, Nepal"
  },
  {
    id: "6",
    admissionNo: "96302",
    rollNo: "221002",
    studentName: "Jacob Bethell",
    class: "Class 1(A)",
    section: "A",
    fatherName: "Brydon",
    dateOfBirth: "08/19/2016",
    gender: "Male",
    category: "General",
    mobileNumber: "065758878",
    localIdNumber: "065758878",
    guardianName: "Brydon",
    guardianPhone: "065758878",
    address: "Biratnagar, Nepal"
  }
];

export default function StudentDetails() {
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState<string>("all");
  const [selectedSection, setSelectedSection] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"list" | "details">("list");

  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.admissionNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.mobileNumber.includes(searchTerm);
    
    const matchesClass = selectedClass === "all" || student.class.includes(selectedClass);
    const matchesSection = selectedSection === "all" || student.section === selectedSection;
    
    return matchesSearch && matchesClass && matchesSection;
  });

  const handleSearch = () => {
    // Search functionality already handled by filteredStudents
    console.log("Search triggered");
  };

  const handleEditStudent = (id: string) => {
    console.log("Edit student:", id);
  };

  const handleDeleteStudent = (id: string) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const handleViewStudent = (id: string) => {
    console.log("View student:", id);
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
    <div className="min-h-screen bg-background p-6" data-testid="student-details-page">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold" data-testid="page-title">
            Student Details
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          {/* Select Criteria Section */}
          <div className="p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-4">Select Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">Class *</label>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger data-testid="class-select">
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Classes</SelectItem>
                    {classes.map((cls) => (
                      <SelectItem key={cls} value={cls}>
                        {cls}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Section</label>
                <Select value={selectedSection} onValueChange={setSelectedSection}>
                  <SelectTrigger data-testid="section-select">
                    <SelectValue placeholder="Select Section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sections</SelectItem>
                    {sections.map((section) => (
                      <SelectItem key={section} value={section}>
                        {section}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Search By Keyword</label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Search by Student Name, Roll Number, Enroll Number, National Id, Local Id Etc."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1"
                    data-testid="search-input"
                  />
                  <Button onClick={handleSearch} data-testid="search-button">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex items-center justify-between mb-6">
            <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as "list" | "details")}>
              <TabsList>
                <TabsTrigger value="list" data-testid="list-view-tab">
                  📋 List View
                </TabsTrigger>
                <TabsTrigger value="details" data-testid="details-view-tab">
                  📄 Details View
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="text-sm text-muted-foreground">
              Records: 1 to {filteredStudents.length} of {filteredStudents.length}
            </div>
          </div>

          {/* Content based on view mode */}
          {viewMode === "list" ? (
            /* List View */
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Admission No ▲</TableHead>
                    <TableHead>Student Name ▼</TableHead>
                    <TableHead>Roll No. ▲</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Father Name</TableHead>
                    <TableHead>Date of Birth</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Mobile Number</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id} data-testid={`student-row-${student.id}`}>
                      <TableCell className="font-medium">{student.admissionNo}</TableCell>
                      <TableCell className="text-blue-600 font-medium">{student.studentName}</TableCell>
                      <TableCell>{student.rollNo}</TableCell>
                      <TableCell>{student.class}</TableCell>
                      <TableCell>{student.fatherName}</TableCell>
                      <TableCell>{student.dateOfBirth}</TableCell>
                      <TableCell>{student.gender}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{student.category}</Badge>
                      </TableCell>
                      <TableCell>{student.mobileNumber}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="sm" onClick={() => handleViewStudent(student.id)}>
                            👁️
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleEditStudent(student.id)}>
                            ✏️
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDeleteStudent(student.id)}>
                            🗑️
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            /* Details View */
            <div className="space-y-6">
              {filteredStudents.map((student) => (
                <Card key={`detail-${student.id}`} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={student.avatar} />
                        <AvatarFallback className="bg-gray-200">
                          <User className="w-10 h-10 text-gray-500" />
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">{student.studentName}</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium">Class:</span> {student.class}
                              </div>
                              <div>
                                <span className="font-medium">Local Identification Number:</span>
                              </div>
                              <div>
                                <span className="font-medium">Admission No:</span> {student.admissionNo}
                              </div>
                              <div>
                                <span className="font-medium">Guardian Name:</span> {student.guardianName}
                              </div>
                              <div>
                                <span className="font-medium">Date Of Birth:</span> {student.dateOfBirth}
                              </div>
                              <div>
                                <span className="font-medium">Guardian Phone:</span> 📞 {student.guardianPhone}
                              </div>
                              <div>
                                <span className="font-medium">Gender:</span> {student.gender}
                              </div>
                              <div>
                                <span className="font-medium">Contact Address:</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-1">
                            <Button variant="ghost" size="sm" onClick={() => handleViewStudent(student.id)}>
                              👁️
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleEditStudent(student.id)}>
                              ✏️
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleDeleteStudent(student.id)}>
                              🗑️
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {filteredStudents.length === 0 && (
            <div className="text-center py-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No students found</h3>
              <p className="text-gray-600">No students match your search criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {filteredStudents.length > 0 && (
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-muted-foreground">
                Showing {filteredStudents.length} of {students.length} students
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  ‹
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                  1
                </Button>
                <Button variant="outline" size="sm" disabled>
                  ›
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
            </SidebarInset>
                </div>
            </SidebarProvider>
  );
}
