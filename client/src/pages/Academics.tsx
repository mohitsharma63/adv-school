import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Users, BookOpen, Plus, Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { useLocation } from "wouter";

export default function Academics() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [selectedSection, setSelectedSection] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [location, navigate] = useLocation();

  const handleMenuItemClick = (section: string, item: string) => {
    setSelectedSection(section);
    setSelectedItem(item);

    const routeMap: { [key: string]: string } = {
      "Dashboard": "/",
      "Annual Calendar": "/annual-calendar",
      "Attendance": "/attendance",
      "Behaviour Records": "/behaviour-records",
      "CBSE Examination": "/cbse-examination",
      "Examinations": "/examinations",
      "Expenses": "/expenses",
      "Income": "/income",
      "Online Examinations": "/online-examinations",
      "QR Code Attendance": "/qr-code-attendance"
    };

    if (routeMap[item]) {
      navigate(routeMap[item]);
    }
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar onMenuItemClick={handleMenuItemClick} />
        <SidebarInset className="flex-1">
          <DashboardHeader title="Academics" />
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Academics</h1>
              </div>

              <ScrollArea className="h-[80vh]">
                <Tabs defaultValue="class-timetable" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="class-timetable">Class Timetable</TabsTrigger>
                    <TabsTrigger value="teachers-timetable">Teachers</TabsTrigger>
                    <TabsTrigger value="subjects">Subjects</TabsTrigger>
                    <TabsTrigger value="more">More</TabsTrigger>
                  </TabsList>

                  <TabsContent value="class-timetable" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Create Class Timetable</CardTitle>
                        <CardDescription>Set up class schedules and periods</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="timetable-class">Class</Label>
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
                            <Label htmlFor="timetable-section">Section</Label>
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
                            <Label htmlFor="day">Day</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select day" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="monday">Monday</SelectItem>
                                <SelectItem value="tuesday">Tuesday</SelectItem>
                                <SelectItem value="wednesday">Wednesday</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button>
                          <Calendar className="mr-2 h-4 w-4" />
                          Load Timetable
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Weekly Timetable - Class 10A</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Period</TableHead>
                              <TableHead>Time</TableHead>
                              <TableHead>Monday</TableHead>
                              <TableHead>Tuesday</TableHead>
                              <TableHead>Wednesday</TableHead>
                              <TableHead>Thursday</TableHead>
                              <TableHead>Friday</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>1</TableCell>
                              <TableCell>9:00-9:45</TableCell>
                              <TableCell>
                                <Badge>Mathematics</Badge>
                                <br />
                                <small>Mr. Smith</small>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">English</Badge>
                                <br />
                                <small>Ms. Johnson</small>
                              </TableCell>
                              <TableCell>
                                <Badge>Science</Badge>
                                <br />
                                <small>Dr. Brown</small>
                              </TableCell>
                              <TableCell>
                                <Badge>Mathematics</Badge>
                                <br />
                                <small>Mr. Smith</small>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">History</Badge>
                                <br />
                                <small>Mrs. Davis</small>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>2</TableCell>
                              <TableCell>9:45-10:30</TableCell>
                              <TableCell>
                                <Badge variant="outline">English</Badge>
                                <br />
                                <small>Ms. Johnson</small>
                              </TableCell>
                              <TableCell>
                                <Badge>Mathematics</Badge>
                                <br />
                                <small>Mr. Smith</small>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">English</Badge>
                                <br />
                                <small>Ms. Johnson</small>
                              </TableCell>
                              <TableCell>
                                <Badge>Science</Badge>
                                <br />
                                <small>Dr. Brown</small>
                              </TableCell>
                              <TableCell>
                                <Badge>Mathematics</Badge>
                                <br />
                                <small>Mr. Smith</small>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="teachers-timetable" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Teacher's Timetable</CardTitle>
                        <CardDescription>View and assign teacher schedules</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="teacher-select">Select Teacher</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select teacher" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="smith">Mr. Smith (Mathematics)</SelectItem>
                                <SelectItem value="johnson">Ms. Johnson (English)</SelectItem>
                                <SelectItem value="brown">Dr. Brown (Science)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="assign-class">Assign to Class</Label>
                            <Button variant="outline" className="w-full">
                              <Users className="mr-2 h-4 w-4" />
                              Assign Class Teacher
                            </Button>
                          </div>
                        </div>
                        <Button>Load Teacher Schedule</Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Mr. Smith's Weekly Schedule</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">Monday</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="text-xs">
                                <Badge size="sm">9:00-9:45</Badge>
                                <p>Class 10A - Math</p>
                              </div>
                              <div className="text-xs">
                                <Badge size="sm">10:30-11:15</Badge>
                                <p>Class 9B - Math</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">Tuesday</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="text-xs">
                                <Badge size="sm">9:45-10:30</Badge>
                                <p>Class 10A - Math</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">Wednesday</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="text-xs">
                                <Badge size="sm">11:15-12:00</Badge>
                                <p>Class 8A - Math</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">Thursday</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="text-xs">
                                <Badge size="sm">9:00-9:45</Badge>
                                <p>Class 10A - Math</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">Friday</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="text-xs">
                                <Badge size="sm">9:45-10:30</Badge>
                                <p>Class 10A - Math</p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="subjects" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Subject Management</CardTitle>
                        <CardDescription>Manage subjects and subject groups</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="subject-name">Subject Name</Label>
                            <Input id="subject-name" placeholder="Enter subject name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subject-code">Subject Code</Label>
                            <Input id="subject-code" placeholder="Enter subject code" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subject-type">Subject Type</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="core">Core Subject</SelectItem>
                                <SelectItem value="elective">Elective</SelectItem>
                                <SelectItem value="optional">Optional</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="credit-hours">Credit Hours</Label>
                            <Input id="credit-hours" type="number" placeholder="3" />
                          </div>
                        </div>
                        <Button className="w-full">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Subject
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Existing Subjects</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Subject Name</TableHead>
                              <TableHead>Code</TableHead>
                              <TableHead>Type</TableHead>
                              <TableHead>Credit Hours</TableHead>
                              <TableHead>Classes</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>Mathematics</TableCell>
                              <TableCell>MATH101</TableCell>
                              <TableCell>
                                <Badge>Core</Badge>
                              </TableCell>
                              <TableCell>4</TableCell>
                              <TableCell>9, 10, 11, 12</TableCell>
                              <TableCell>
                                <Button variant="outline" size="sm">Edit</Button>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>English</TableCell>
                              <TableCell>ENG101</TableCell>
                              <TableCell>
                                <Badge>Core</Badge>
                              </TableCell>
                              <TableCell>3</TableCell>
                              <TableCell>9, 10, 11, 12</TableCell>
                              <TableCell>
                                <Button variant="outline" size="sm">Edit</Button>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="more" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Promote Students</CardTitle>
                          <CardDescription>Move students to next class</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            <GraduationCap className="mr-2 h-4 w-4" />
                            Bulk Promotion
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Subject Groups</CardTitle>
                          <CardDescription>Manage subject combinations</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Manage Groups
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Class Management</CardTitle>
                          <CardDescription>Add and manage classes</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            <Users className="mr-2 h-4 w-4" />
                            Manage Classes
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Sections</CardTitle>
                          <CardDescription>Create class sections</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Sections
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </ScrollArea>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}