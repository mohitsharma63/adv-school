
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users, CheckSquare, Clock, Search } from "lucide-react";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";

export default function Attendance() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Attendance Management</h1>
      </div>

      <Tabs defaultValue="student-attendance" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="student-attendance">Student Attendance</TabsTrigger>
          <TabsTrigger value="approve-leave">Approve Leave</TabsTrigger>
          <TabsTrigger value="attendance-by-date">Attendance By Date</TabsTrigger>
        </TabsList>

        <TabsContent value="student-attendance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Take Attendance</CardTitle>
              <CardDescription>Mark student attendance for today</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="class-select">Class</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Class 1</SelectItem>
                      <SelectItem value="2">Class 2</SelectItem>
                      <SelectItem value="10">Class 10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section-select">Section</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select section" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A">Section A</SelectItem>
                      <SelectItem value="B">Section B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <Button>Load Students</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Student List</CardTitle>
              <CardDescription>Mark attendance for Class 10 - Section A</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Roll No</TableHead>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Present</TableHead>
                    <TableHead>Late</TableHead>
                    <TableHead>Absent</TableHead>
                    <TableHead>Half Day</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>001</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell><Checkbox defaultChecked /></TableCell>
                    <TableCell><Checkbox /></TableCell>
                    <TableCell><Checkbox /></TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>002</TableCell>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell><Checkbox /></TableCell>
                    <TableCell><Checkbox /></TableCell>
                    <TableCell><Checkbox defaultChecked /></TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4">
                <Button className="w-full">
                  <CheckSquare className="mr-2 h-4 w-4" />
                  Save Attendance
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approve-leave" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Leave Requests</CardTitle>
              <CardDescription>Review and approve student leave applications</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Leave Type</TableHead>
                    <TableHead>From Date</TableHead>
                    <TableHead>To Date</TableHead>
                    <TableHead>Days</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Class 10-A</TableCell>
                    <TableCell>Sick Leave</TableCell>
                    <TableCell>2024-01-20</TableCell>
                    <TableCell>2024-01-22</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Fever</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Pending</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Approve</Button>
                        <Button size="sm" variant="destructive">Reject</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance-by-date" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Report by Date</CardTitle>
              <CardDescription>View attendance statistics for specific dates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>From Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label>To Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="report-class">Class</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Classes</SelectItem>
                      <SelectItem value="1">Class 1</SelectItem>
                      <SelectItem value="10">Class 10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button>
                <Search className="mr-2 h-4 w-4" />
                Generate Report
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">250</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Present</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">235</div>
                    <p className="text-xs text-muted-foreground">94% attendance</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Absent</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-600">15</div>
                    <p className="text-xs text-muted-foreground">6% absent</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Late Arrivals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-600">8</div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
