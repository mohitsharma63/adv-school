
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Plus, Search, Video, Clock, Users, Trash2, Edit } from "lucide-react";
import { format } from "date-fns";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function LiveClasses() {
  const [date, setDate] = useState<Date>();

  const liveClasses = [
    {
      id: 1,
      title: "Online Learning Class",
      description: "Online Learning Class",
      dateTime: "09/30/2025 04:00:00",
      duration: 35,
      createdBy: "Joe Black (Super Admin - 9000)",
      createdFor: "Albert Thomas (Teacher - 54545454)",
      classes: ["Class 2 (A)", "Class 2 (B)", "Class 2 (C)", "Class 2 (D)"],
      status: "Awaited"
    },
    {
      id: 2,
      title: "Syllabus Discussion",
      description: "Syllabus Discussion",
      dateTime: "09/25/2025 02:30:00",
      duration: 35,
      createdBy: "Joe Black (Super Admin - 9000)",
      createdFor: "Shivam Verma (Teacher - 9002)",
      classes: ["Class 1 (A)", "Class 1 (B)", "Class 1 (C)", "Class 1 (D)"],
      status: "Awaited"
    },
    {
      id: 3,
      title: "Combine Classes for Hindi",
      description: "Combine Classes for Hindi",
      dateTime: "09/22/2025 13:00:00",
      duration: 35,
      createdBy: "Jason Sharlton (Teacher - 90006)",
      createdFor: "Albert Thomas (Teacher - 54545454)",
      classes: ["Class 3 (A)", "Class 3 (B)", "Class 3 (C)", "Class 3 (D)"],
      status: "Awaited"
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
        <h1 className="text-3xl font-bold flex items-center">
          <Video className="mr-3 h-8 w-8" />
          Live Classes
        </h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Scheduled Live Classes</CardTitle>
          <CardDescription>Manage your live video classes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-6">
            <Input placeholder="Search..." className="flex-1" />
            <Button variant="outline">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Class Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date Time</TableHead>
                <TableHead>Duration (Minutes)</TableHead>
                <TableHead>Created By</TableHead>
                <TableHead>Created For</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {liveClasses.map((classItem) => (
                <TableRow key={classItem.id}>
                  <TableCell className="font-medium">{classItem.title}</TableCell>
                  <TableCell>{classItem.description}</TableCell>
                  <TableCell>{classItem.dateTime}</TableCell>
                  <TableCell>{classItem.duration}</TableCell>
                  <TableCell>{classItem.createdBy}</TableCell>
                  <TableCell>{classItem.createdFor}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {classItem.classes.map((cls, index) => (
                        <div key={index} className="text-sm">{cls}</div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select defaultValue={classItem.status.toLowerCase()}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="awaited">Awaited</SelectItem>
                        <SelectItem value="started">Started</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="h-4 w-4" />
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
