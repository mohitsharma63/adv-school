
import { useState } from "react";
import { Plus, Search, MoreVertical, Eye, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
// import Header from "@/components/header";

interface Visitor {
  id: string;
  purpose: string;
  meetingWith: string;
  visitorName: string;
  phone: string;
  idCard: string;
  numberOfPerson: number;
  date: string;
  inTime: string;
  outTime: string;
}

const mockVisitors: Visitor[] = [
  {
    id: "1",
    purpose: "Curriculum Enrichment",
    meetingWith: "Student (Edward Thomas - 18001)",
    visitorName: "David Wilson",
    phone: "0967546678",
    idCard: "097855",
    numberOfPerson: 5,
    date: "09/26/2025",
    inTime: "11:30 AM",
    outTime: "12:55 PM"
  },
  {
    id: "2",
    purpose: "School Events",
    meetingWith: "Student (Edward Thomas - 18001)",
    visitorName: "Darren K. Hubbard",
    phone: "9065343532",
    idCard: "23111",
    numberOfPerson: 5,
    date: "09/22/2025",
    inTime: "12:40 PM",
    outTime: "01:45 PM"
  },
  {
    id: "3",
    purpose: "Student Meeting",
    meetingWith: "Student (Edward Thomas - 18001)",
    visitorName: "David Wood",
    phone: "9806345342",
    idCard: "342",
    numberOfPerson: 5,
    date: "09/11/2025",
    inTime: "11:22 AM",
    outTime: "12:30 PM"
  },
  {
    id: "4",
    purpose: "Parent Teacher Meeting",
    meetingWith: "Student (Edward Thomas - 18001)",
    visitorName: "Bella McCallum",
    phone: "8908967846",
    idCard: "45352",
    numberOfPerson: 4,
    date: "09/01/2025",
    inTime: "11:22 AM",
    outTime: "12:22 PM"
  },
  {
    id: "5",
    purpose: "Parent Teacher Meeting",
    meetingWith: "Student (Edward Thomas - 1800011)",
    visitorName: "James",
    phone: "805675677",
    idCard: "6879",
    numberOfPerson: 5,
    date: "09/25/2025",
    inTime: "11:30 AM",
    outTime: "12:30 PM"
  },
  {
    id: "6",
    purpose: "Principal Meeting",
    meetingWith: "Staff (William Abbot - 9003)",
    visitorName: "Charlie Barrett",
    phone: "789075764",
    idCard: "5673",
    numberOfPerson: 6,
    date: "09/22/2025",
    inTime: "12:30 PM",
    outTime: "01:30 PM"
  },
  {
    id: "7",
    purpose: "Staff Meeting",
    meetingWith: "Staff (Jason Sharlton - 90006)",
    visitorName: "David Wilson",
    phone: "980575667",
    idCard: "567323",
    numberOfPerson: 6,
    date: "09/16/2025",
    inTime: "10:30 AM",
    outTime: "11:45 AM"
  },
  {
    id: "8",
    purpose: "Marketing",
    meetingWith: "Student (Edward Thomas - 1800011)",
    visitorName: "Preeti Mehra",
    phone: "7689067567",
    idCard: "5673345",
    numberOfPerson: 6,
    date: "09/11/2025",
    inTime: "12:30 PM",
    outTime: "01:30 PM"
  }
];

export default function Visitors() {
  const [visitors, setVisitors] = useState<Visitor[]>(mockVisitors);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVisitors = visitors.filter(visitor =>
    visitor.visitorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    visitor.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
    visitor.meetingWith.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddVisitor = () => {
    console.log("Add visitor clicked");
  };

  const handleEditVisitor = (id: string) => {
    console.log("Edit visitor:", id);
  };

  const handleDeleteVisitor = (id: string) => {
    setVisitors(visitors.filter(visitor => visitor.id !== id));
  };

  const handleViewVisitor = (id: string) => {
    console.log("View visitor:", id);
  };

  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };

  return (
    <SidebarProvider>
         <div className="flex h-screen w-full">
      <AppSidebar onMenuItemClick={handleMenuItemClick} />
      <SidebarInset>
        {/* <Header /> */}
        <div className="p-6" data-testid="visitors-page">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <CardTitle className="text-2xl font-bold" data-testid="page-title">
                  Visitor List
                </CardTitle>
              </div>
              <Button 
                onClick={handleAddVisitor}
                className="bg-primary hover:bg-primary/90"
                data-testid="add-visitor-button"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </CardHeader>
            
            <CardContent>
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                    data-testid="search-input"
                  />
                </div>
              </div>

              {/* Visitors Table */}
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Meeting With</TableHead>
                      <TableHead>Visitor Name</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>ID Card</TableHead>
                      <TableHead>Number Of Person</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>In Time</TableHead>
                      <TableHead>Out Time</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredVisitors.map((visitor) => (
                      <TableRow key={visitor.id} data-testid={`visitor-row-${visitor.id}`}>
                        <TableCell>
                          <Badge variant="outline" className="text-xs">
                            {visitor.purpose}
                          </Badge>
                        </TableCell>
                        <TableCell className="max-w-[200px] truncate">
                          {visitor.meetingWith}
                        </TableCell>
                        <TableCell className="font-medium">
                          {visitor.visitorName}
                        </TableCell>
                        <TableCell>{visitor.phone}</TableCell>
                        <TableCell>{visitor.idCard}</TableCell>
                        <TableCell className="text-center">
                          {visitor.numberOfPerson}
                        </TableCell>
                        <TableCell>{visitor.date}</TableCell>
                        <TableCell>{visitor.inTime}</TableCell>
                        <TableCell>{visitor.outTime}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" data-testid={`action-menu-${visitor.id}`}>
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleViewVisitor(visitor.id)}>
                                <Eye className="w-4 h-4 mr-2" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleEditVisitor(visitor.id)}>
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleDeleteVisitor(visitor.id)}
                                className="text-destructive"
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {filteredVisitors.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No visitors found matching your search.</p>
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
