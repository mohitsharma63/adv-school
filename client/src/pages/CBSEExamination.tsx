
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
import { CalendarIcon, Plus, Search, FileText, Printer, Settings, Eye } from "lucide-react";
import { format } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CBSEExamination() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">CBSE Examination</h1>
      </div>

      <ScrollArea className="h-[80vh]">
        <Tabs defaultValue="exam" className="space-y-4">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="exam">Exam</TabsTrigger>
            <TabsTrigger value="exam-schedule">Schedule</TabsTrigger>
            <TabsTrigger value="print-marksheet">Marksheet</TabsTrigger>
            <TabsTrigger value="exam-grade">Grade</TabsTrigger>
            <TabsTrigger value="assign-observation">Observation</TabsTrigger>
            <TabsTrigger value="more">More</TabsTrigger>
          </TabsList>

          <TabsContent value="exam" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>CBSE Exam Management</CardTitle>
                <CardDescription>Create and manage CBSE examinations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="exam-name">Exam Name</Label>
                    <Input id="exam-name" placeholder="Enter exam name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="exam-type">Exam Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select exam type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mid-term">Mid Term</SelectItem>
                        <SelectItem value="final">Final Exam</SelectItem>
                        <SelectItem value="unit-test">Unit Test</SelectItem>
                        <SelectItem value="practical">Practical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="class">Class</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Class 1</SelectItem>
                        <SelectItem value="2">Class 2</SelectItem>
                        <SelectItem value="9">Class 9</SelectItem>
                        <SelectItem value="10">Class 10</SelectItem>
                        <SelectItem value="11">Class 11</SelectItem>
                        <SelectItem value="12">Class 12</SelectItem>
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
                </div>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Exam
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Existing CBSE Exams</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Exam Name</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Session</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Mid Term Examination</TableCell>
                      <TableCell>Class 10</TableCell>
                      <TableCell>Mid Term</TableCell>
                      <TableCell>2024-25</TableCell>
                      <TableCell>
                        <Badge>Active</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
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
                <CardDescription>Manage CBSE exam schedules and timetables</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="exam-select">Select Exam</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select exam" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mid-term-10">Mid Term - Class 10</SelectItem>
                        <SelectItem value="final-12">Final - Class 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="math">Mathematics</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="social">Social Studies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  Schedule Exam
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="print-marksheet" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Print Marksheet</CardTitle>
                <CardDescription>Generate and print CBSE marksheets</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="marksheet-exam">Select Exam</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select exam" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mid-term-10">Mid Term - Class 10</SelectItem>
                        <SelectItem value="final-12">Final - Class 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="marksheet-class">Class</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">Class 10</SelectItem>
                        <SelectItem value="12">Class 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button className="flex-1">
                    <Printer className="mr-2 h-4 w-4" />
                    Print Individual
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <FileText className="mr-2 h-4 w-4" />
                    Print Bulk
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exam-grade" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>CBSE Grading System</CardTitle>
                <CardDescription>Manage grades and assessment parameters</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Grade</TableHead>
                      <TableHead>Marks Range</TableHead>
                      <TableHead>Grade Point</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell><Badge>A1</Badge></TableCell>
                      <TableCell>91-100</TableCell>
                      <TableCell>10.0</TableCell>
                      <TableCell>Outstanding</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><Badge>A2</Badge></TableCell>
                      <TableCell>81-90</TableCell>
                      <TableCell>9.0</TableCell>
                      <TableCell>Excellent</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><Badge>B1</Badge></TableCell>
                      <TableCell>71-80</TableCell>
                      <TableCell>8.0</TableCell>
                      <TableCell>Very Good</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assign-observation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Assign Observation</CardTitle>
                <CardDescription>Assign observation parameters for CBSE assessment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="obs-student">Student</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select student" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="john">John Doe</SelectItem>
                        <SelectItem value="jane">Jane Smith</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="obs-parameter">Observation Parameter</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select parameter" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="thinking">Thinking Skills</SelectItem>
                        <SelectItem value="social">Social Skills</SelectItem>
                        <SelectItem value="emotional">Emotional Skills</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="obs-grade">Grade</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A">A - Excellent</SelectItem>
                      <SelectItem value="B">B - Very Good</SelectItem>
                      <SelectItem value="C">C - Good</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Assign Observation
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="more" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Observation Parameters</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Settings className="mr-2 h-4 w-4" />
                    Manage Parameters
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Assessment Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Assessment Templates
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Term Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Manage Terms
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>CBSE Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Generate Reports
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </ScrollArea>
    </div>
  );
}
