
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Users, DollarSign, Calendar, UserCheck, UserX, Star } from "lucide-react";

export default function HumanResource() {
  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar onMenuItemClick={handleMenuItemClick} />
        <SidebarInset className="flex-1">
          <DashboardHeader title="Human Resource" />
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Human Resource Management</h1>
              </div>

              <ScrollArea className="h-[80vh]">
                <Tabs defaultValue="staff-directory" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="staff-directory">Staff Directory</TabsTrigger>
                    <TabsTrigger value="staff-attendance">Staff Attendance</TabsTrigger>
                    <TabsTrigger value="payroll">Payroll</TabsTrigger>
                    <TabsTrigger value="more">More</TabsTrigger>
                  </TabsList>

                  <TabsContent value="staff-directory" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Staff Directory</CardTitle>
                        <CardDescription>Manage staff information and records</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold">45</div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm font-medium">Teachers</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold">32</div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm font-medium">Admin Staff</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold">13</div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm font-medium">Present Today</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-green-600">42</div>
                            </CardContent>
                          </Card>
                        </div>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Name</TableHead>
                              <TableHead>Employee ID</TableHead>
                              <TableHead>Department</TableHead>
                              <TableHead>Designation</TableHead>
                              <TableHead>Contact</TableHead>
                              <TableHead>Status</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>John Smith</TableCell>
                              <TableCell>EMP001</TableCell>
                              <TableCell>Mathematics</TableCell>
                              <TableCell>Senior Teacher</TableCell>
                              <TableCell>john@school.com</TableCell>
                              <TableCell><Badge>Active</Badge></TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="staff-attendance" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Staff Attendance</CardTitle>
                        <CardDescription>Track staff attendance and leave records</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm font-medium">Present Today</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-green-600">42</div>
                              <p className="text-xs text-muted-foreground">93% attendance</p>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm font-medium">On Leave</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-orange-600">3</div>
                              <p className="text-xs text-muted-foreground">Approved leave</p>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm font-medium">Late Arrivals</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-red-600">2</div>
                              <p className="text-xs text-muted-foreground">Today</p>
                            </CardContent>
                          </Card>
                        </div>
                        <Button className="w-full">Mark Staff Attendance</Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="payroll" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Payroll Management</CardTitle>
                        <CardDescription>Manage staff salaries and payroll</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm font-medium">Total Payroll</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold">$45,000</div>
                              <p className="text-xs text-muted-foreground">This month</p>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm font-medium">Processed</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-green-600">40</div>
                              <p className="text-xs text-muted-foreground">Salaries paid</p>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm font-medium">Pending</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-orange-600">5</div>
                              <p className="text-xs text-muted-foreground">To be processed</p>
                            </CardContent>
                          </Card>
                        </div>
                        <Button className="w-full">Generate Payroll</Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="more" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Leave Requests</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            <Calendar className="mr-2 h-4 w-4" />
                            Approve Leave
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Apply Leave</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            <UserX className="mr-2 h-4 w-4" />
                            Apply Leave
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Leave Types</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            <Calendar className="mr-2 h-4 w-4" />
                            Manage Leave Types
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Teachers Rating</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            <Star className="mr-2 h-4 w-4" />
                            View Ratings
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Department</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            <Users className="mr-2 h-4 w-4" />
                            Manage Departments
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Designation</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            <Badge className="mr-2 h-4 w-4" />
                            Manage Designations
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
