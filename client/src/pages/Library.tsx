
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
import { Book, Users, ArrowRight, UserPlus } from "lucide-react";

export default function Library() {
  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar onMenuItemClick={handleMenuItemClick} />
        <SidebarInset className="flex-1">
          <DashboardHeader title="Library Management" />
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Library Management</h1>
              </div>

              <ScrollArea className="h-[80vh]">
                <Tabs defaultValue="book-list" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="book-list">Book List</TabsTrigger>
                    <TabsTrigger value="issue-return">Issue - Return</TabsTrigger>
                    <TabsTrigger value="add-student">Add Student</TabsTrigger>
                    <TabsTrigger value="add-staff">Add Staff Member</TabsTrigger>
                  </TabsList>

                  <TabsContent value="book-list" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Library Books</CardTitle>
                        <CardDescription>Manage library book inventory</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm font-medium">Total Books</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold">2,547</div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm font-medium">Available</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-green-600">2,103</div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm font-medium">Issued</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-orange-600">444</div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm font-medium">Overdue</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-red-600">23</div>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="space-y-4">
                          <div className="flex space-x-2">
                            <Input placeholder="Search books..." className="flex-1" />
                            <Button>Search</Button>
                          </div>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Book Title</TableHead>
                                <TableHead>Author</TableHead>
                                <TableHead>ISBN</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Actions</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell>Advanced Mathematics</TableCell>
                                <TableCell>John Smith</TableCell>
                                <TableCell>978-0123456789</TableCell>
                                <TableCell>Mathematics</TableCell>
                                <TableCell><Badge>Available</Badge></TableCell>
                                <TableCell>
                                  <Button variant="outline" size="sm">View</Button>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="issue-return" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Issue - Return Books</CardTitle>
                        <CardDescription>Manage book lending and returns</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="member-id">Member ID</Label>
                            <Input id="member-id" placeholder="Enter member ID" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="book-id">Book ID</Label>
                            <Input id="book-id" placeholder="Enter book ID" />
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button className="flex-1">
                            <ArrowRight className="mr-2 h-4 w-4" />
                            Issue Book
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <ArrowRight className="mr-2 h-4 w-4" />
                            Return Book
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="add-student" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Add Student to Library</CardTitle>
                        <CardDescription>Register students for library access</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="student-name">Student Name</Label>
                            <Input id="student-name" placeholder="Enter student name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="student-class">Class</Label>
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
                        <Button className="w-full">
                          <UserPlus className="mr-2 h-4 w-4" />
                          Add Student
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="add-staff" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Add Staff Member to Library</CardTitle>
                        <CardDescription>Register staff for library access</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="staff-name">Staff Name</Label>
                            <Input id="staff-name" placeholder="Enter staff name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="staff-department">Department</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select department" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="math">Mathematics</SelectItem>
                                <SelectItem value="english">English</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button className="w-full">
                          <Users className="mr-2 h-4 w-4" />
                          Add Staff Member
                        </Button>
                      </CardContent>
                    </Card>
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
