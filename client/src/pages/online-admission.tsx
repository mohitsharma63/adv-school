
import { useState, useMemo } from "react";
import { Search, Eye, Edit, Trash2, Download, MoreVertical, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

interface OnlineAdmissionStudent {
  id: string;
  referenceNo: string;
  studentName: string;
  class: string;
  fatherName: string;
  dateOfBirth: string;
  gender: string;
  category: string;
  studentMobileNumber: string;
  formStatus: "Submitted" | "Not Submitted";
  paymentStatus: "Paid" | "Unpaid";
  enrolled: boolean;
  createdAt: string;
}

const mockAdmissionStudents: OnlineAdmissionStudent[] = [
  {
    id: "1",
    referenceNo: "526104",
    studentName: "Nicholas kirton",
    class: "Class 1(A)",
    fatherName: "Jason kirton",
    dateOfBirth: "12/24/2010",
    gender: "Male",
    category: "General",
    studentMobileNumber: "9098067878",
    formStatus: "Submitted",
    paymentStatus: "Paid",
    enrolled: true,
    createdAt: "09/02/2025"
  },
  {
    id: "2",
    referenceNo: "993685",
    studentName: "Arvind Sharma",
    class: "Class 2(D)",
    fatherName: "Ankit sharma",
    dateOfBirth: "06/11/2014",
    gender: "Male",
    category: "General",
    studentMobileNumber: "8909807886",
    formStatus: "Not Submitted",
    paymentStatus: "Unpaid",
    enrolled: false,
    createdAt: "09/02/2025"
  },
  {
    id: "3",
    referenceNo: "217014",
    studentName: "Liam Dawson",
    class: "Class 2(A)",
    fatherName: "John",
    dateOfBirth: "06/17/2020",
    gender: "Male",
    category: "Special",
    studentMobileNumber: "80678456",
    formStatus: "Submitted",
    paymentStatus: "Paid",
    enrolled: true,
    createdAt: "08/02/2025"
  },
  {
    id: "4",
    referenceNo: "595040",
    studentName: "Dion Ebrahim",
    class: "Class 1(A)",
    fatherName: "David",
    dateOfBirth: "06/13/2000",
    gender: "Male",
    category: "General",
    studentMobileNumber: "9856732322",
    formStatus: "Not Submitted",
    paymentStatus: "Unpaid",
    enrolled: false,
    createdAt: "08/02/2025"
  },
  {
    id: "5",
    referenceNo: "973064",
    studentName: "Lauren Bell",
    class: "Class 2(A)",
    fatherName: "David Bell",
    dateOfBirth: "11/20/2015",
    gender: "Female",
    category: "General",
    studentMobileNumber: "8905667845",
    formStatus: "Not Submitted",
    paymentStatus: "Unpaid",
    enrolled: false,
    createdAt: "07/01/2025"
  },
  {
    id: "6",
    referenceNo: "391931",
    studentName: "Steven Taylor",
    class: "Class 2(A)",
    fatherName: "Jason Taylor",
    dateOfBirth: "08/17/2017",
    gender: "Male",
    category: "General",
    studentMobileNumber: "890567345",
    formStatus: "Submitted",
    paymentStatus: "Paid",
    enrolled: true,
    createdAt: "07/01/2025"
  },
  {
    id: "7",
    referenceNo: "467588",
    studentName: "Rocky Flintoff",
    class: "Class 2(A)",
    fatherName: "Jordan",
    dateOfBirth: "04/20/2012",
    gender: "Male",
    category: "General",
    studentMobileNumber: "809905673",
    formStatus: "Not Submitted",
    paymentStatus: "Unpaid",
    enrolled: true,
    createdAt: "06/02/2025"
  },
  {
    id: "8",
    referenceNo: "340886",
    studentName: "James Rew",
    class: "Class 1(A)",
    fatherName: "John Rew",
    dateOfBirth: "08/13/2009",
    gender: "Male",
    category: "General",
    studentMobileNumber: "890678678",
    formStatus: "Submitted",
    paymentStatus: "Paid",
    enrolled: false,
    createdAt: "06/02/2025"
  },
  {
    id: "9",
    referenceNo: "716657",
    studentName: "vijaykumar wadhak",
    class: "Class 1(A)",
    fatherName: "Arnold",
    dateOfBirth: "06/25/2019",
    gender: "Male",
    category: "General",
    studentMobileNumber: "806867846",
    formStatus: "Not Submitted",
    paymentStatus: "Unpaid",
    enrolled: false,
    createdAt: "05/01/2025"
  },
  {
    id: "10",
    referenceNo: "254563",
    studentName: "Nehal Wadhera",
    class: "Class 1(A)",
    fatherName: "Karun wadhera",
    dateOfBirth: "11/23/2006",
    gender: "Male",
    category: "General",
    studentMobileNumber: "9907867884",
    formStatus: "Submitted",
    paymentStatus: "Paid",
    enrolled: true,
    createdAt: "05/01/2025"
  }
];

export default function OnlineAdmission() {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState("100");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredStudents = useMemo(() => {
    return mockAdmissionStudents.filter(student =>
      student.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.referenceNo.includes(searchTerm) ||
      student.fatherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.class.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleView = (studentId: string) => {
    console.log("View student:", studentId);
  };

  const handleEdit = (studentId: string) => {
    console.log("Edit student:", studentId);
  };

  const handleDelete = (studentId: string) => {
    console.log("Delete student:", studentId);
  };

  const getFormStatusBadge = (status: string, date: string) => {
    const isSubmitted = status === "Submitted";
    return (
      <Badge 
        variant={isSubmitted ? "default" : "destructive"}
        className={isSubmitted ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-red-100 text-red-800 hover:bg-red-200"}
      >
        {isSubmitted ? `Submitted (${date})` : status}
      </Badge>
    );
  };

  const getPaymentStatusBadge = (status: string) => {
    const isPaid = status === "Paid";
    return (
      <Badge 
        variant={isPaid ? "default" : "destructive"}
        className={isPaid ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-red-100 text-red-800 hover:bg-red-200"}
      >
        {status}
      </Badge>
    );
  };
 const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>
    <div className="min-h-screen bg-background p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Student List</CardTitle>
        </CardHeader>

        <CardContent>
          {/* Search and Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                  data-testid="search-input"
                />
              </div>
              
              <Select value={itemsPerPage} onValueChange={setItemsPerPage}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow className="">
                  <TableHead className="font-semibold text-gray-700">Reference No</TableHead>
                  <TableHead className="font-semibold text-gray-700">Student Name</TableHead>
                  <TableHead className="font-semibold text-gray-700">Class</TableHead>
                  <TableHead className="font-semibold text-gray-700">Father Name</TableHead>
                  <TableHead className="font-semibold text-gray-700">Date Of Birth</TableHead>
                  <TableHead className="font-semibold text-gray-700">Gender</TableHead>
                  <TableHead className="font-semibold text-gray-700">Category</TableHead>
                  <TableHead className="font-semibold text-gray-700">Student Mobile Number</TableHead>
                  <TableHead className="font-semibold text-gray-700">Form Status</TableHead>
                  <TableHead className="font-semibold text-gray-700">Payment Status</TableHead>
                  <TableHead className="font-semibold text-gray-700">Enrolled</TableHead>
                  <TableHead className="font-semibold text-gray-700">Created At</TableHead>
                  <TableHead className="font-semibold text-gray-700">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id} className="">
                    <TableCell className="font-medium">{student.referenceNo}</TableCell>
                    <TableCell>{student.studentName}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>{student.fatherName}</TableCell>
                    <TableCell>{student.dateOfBirth}</TableCell>
                    <TableCell>{student.gender}</TableCell>
                    <TableCell>{student.category}</TableCell>
                    <TableCell>{student.studentMobileNumber}</TableCell>
                    <TableCell>
                      {getFormStatusBadge(student.formStatus, "09/02/2025")}
                    </TableCell>
                    <TableCell>
                      {getPaymentStatusBadge(student.paymentStatus)}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        {student.enrolled ? (
                          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        ) : (
                          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{student.createdAt}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleView(student.id)}
                          className="h-8 w-8 p-0"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(student.id)}
                          className="h-8 w-8 p-0"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(student.id)}
                          className="h-8 w-8 p-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination Info */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-600">
              Showing {filteredStudents.length} of {mockAdmissionStudents.length} entries
            </div>
            <div className="text-sm text-gray-600">
              Page {currentPage} of 1
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
