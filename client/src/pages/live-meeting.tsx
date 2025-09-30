
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Video, Calendar, Users, Trash2, Edit } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function LiveMeeting() {
  const meetings = [
    {
      id: 1,
      title: "School Timetable Preparation",
      description: "School Timetable Preparation",
      dateTime: "09/30/2025 01:00:00",
      duration: 45,
      createdBy: "Self",
      status: "Awaited"
    },
    {
      id: 2,
      title: "Book Stock Discussion",
      description: "Book Stock Discussion",
      dateTime: "09/25/2025 02:30:00",
      duration: 35,
      createdBy: "Self",
      status: "Awaited"
    },
    {
      id: 3,
      title: "Student Health Serve Mission",
      description: "Student Health Serve Mission",
      dateTime: "09/20/2025 10:00:00",
      duration: 35,
      createdBy: "Self",
      status: "Awaited"
    },
    {
      id: 4,
      title: "Urgent Meeting",
      description: "Urgent Meeting",
      dateTime: "09/15/2025 01:00:00",
      duration: 35,
      createdBy: "Self",
      status: "Awaited"
    },
    {
      id: 5,
      title: "Finance Report Discussion",
      description: "Finance Report Discussion",
      dateTime: "09/10/2025 02:00:00",
      duration: 45,
      createdBy: "Self",
      status: "Awaited"
    },
    {
      id: 6,
      title: "Teachers' Day Celebration For meeting",
      description: "Teachers' Day Celebration For meeting",
      dateTime: "09/05/2025 09:00:00",
      duration: 45,
      createdBy: "Self",
      status: "Finished"
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
          <Calendar className="mr-3 h-8 w-8" />
          Live Meeting
        </h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Scheduled Meetings</CardTitle>
          <CardDescription>Manage your live meetings and conferences</CardDescription>
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
                <TableHead>Meeting Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date Time</TableHead>
                <TableHead>Class Duration (Minutes)</TableHead>
                <TableHead>Created By</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {meetings.map((meeting) => (
                <TableRow key={meeting.id}>
                  <TableCell className="font-medium">{meeting.title}</TableCell>
                  <TableCell>{meeting.description}</TableCell>
                  <TableCell>{meeting.dateTime}</TableCell>
                  <TableCell>{meeting.duration}</TableCell>
                  <TableCell>{meeting.createdBy}</TableCell>
                  <TableCell>
                    <Select defaultValue={meeting.status.toLowerCase()}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="awaited">Awaited</SelectItem>
                        <SelectItem value="started">Started</SelectItem>
                        <SelectItem value="finished">Finished</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
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
