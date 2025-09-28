
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
import { CalendarIcon, Plus, Search, FileText, Printer, Users, Award } from "lucide-react";
import { format } from "date-fns";

export default function Examinations() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Examinations</h1>
      </div>

      <Tabs defaultValue="exam-group" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="exam-group">Exam Group</TabsTrigger>
          <TabsTrigger value="exam-schedule">Schedule</TabsTrigger>
          <TabsTrigger value="exam-result">Results</TabsTrigger>
          <TabsTrigger value="design-admit-card">Admit Card</TabsTrigger>
          <TabsTrigger value="more">More</TabsTrigger>
        </TabsList>

        <TabsContent value="exam-group" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create Exam Group</CardTitle>
              <CardDescription>Create and manage examination groups</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="group-name">Exam Group Name</Label>
                  <Input id="group-name" placeholder="Enter exam group name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="exam-type">Exam Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select exam type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly Test</SelectItem>
                      <SelectItem value="quarterly">Quarterly Exam</SelectItem>
                      <SelectItem value="half-yearly">Half Yearly</SelectItem>
                      <SelectItem value="annual">Annual Exam</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="session">Academic Session</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select session" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024-25">2024-25</SelectItem>
                      <SelectItem value="2023-24">2023-24</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" placeholder="Enter description" />
                </div>
              </div>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Create Exam Group
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Exam Groups</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Group Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Session</TableHead>
                    <TableHead>Created Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>First Term Examination</TableCell>
                    <TableCell>Half Yearly</TableCell>
                    <TableCell>2024-25</TableCell>
                    <TableCell>2024-01-15</TableCell>
                    <TableCell>
                      <Badge>Active</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exam-schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Exam Schedule</CardTitle>
              <CardDescription>Schedule examinations for different classes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="schedule-exam-group">Exam Group</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select exam group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="first-term">First Term Examination</SelectItem>
                      <SelectItem value="second-term">Second Term Examination</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schedule-class">Class</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Class 1</SelectItem>
                      <SelectItem value="2">Class 2</SelectItem>
                      <SelectItem value="9">Class 9</SelectItem>
                      <SelectItem value="10">Class 10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schedule-subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Exam Date</Label>
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
                  <Label htmlFor="start-time">Start Time</Label>
                  <Input id="start-time" type="time" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input id="duration" type="number" placeholder="180" />
                </div>
              </div>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add to Schedule
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exam-result" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Exam Results</CardTitle>
              <CardDescription>Manage and publish exam results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="result-exam-group">Exam Group</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select exam group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="first-term">First Term Examination</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="result-class">Class</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">Class 10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button className="flex-1">
                  <Search className="mr-2 h-4 w-4" />
                  View Results
                </Button>
                <Button variant="outline" className="flex-1">
                  <FileText className="mr-2 h-4 w-4" />
                  Publish Results
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Result Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">150</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Passed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">135</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Failed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-600">15</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">90%</div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="design-admit-card" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Design Admit Card</CardTitle>
                <CardDescription>Create admit card templates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="template-name">Template Name</Label>
                  <Input id="template-name" placeholder="Enter template name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school-logo">School Logo</Label>
                  <Input id="school-logo" type="file" />
                </div>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Template
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Print Admit Card</CardTitle>
                <CardDescription>Generate admit cards for students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="print-exam-group">Exam Group</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select exam group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="first-term">First Term Examination</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="print-class">Class</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">Class 10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full">
                  <Printer className="mr-2 h-4 w-4" />
                  Print Admit Cards
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="more" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Design Marksheet</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Design Templates
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Marks Grade</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Award className="mr-2 h-4 w-4" />
                  Manage Grades
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Marks Division</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Divisions
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
