
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { useLocation } from "wouter";

export default function LessonPlan() {
  const [location, navigate] = useLocation();

  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar onMenuItemClick={handleMenuItemClick} />
        <SidebarInset className="flex-1">
          <DashboardHeader title="Lesson Plan" />
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Lesson Plan Management</h1>
              </div>

              <ScrollArea className="h-[80vh]">
                <Tabs defaultValue="copy-old-lessons" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="copy-old-lessons">Copy Old Lessons</TabsTrigger>
                    <TabsTrigger value="manage-lesson-plan">Manage Lesson Plan</TabsTrigger>
                    <TabsTrigger value="manage-syllabus-status">Syllabus Status</TabsTrigger>
                    <TabsTrigger value="lesson">Lesson</TabsTrigger>
                    <TabsTrigger value="topic">Topic</TabsTrigger>
                  </TabsList>

                  <TabsContent value="copy-old-lessons" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Copy Old Lessons</CardTitle>
                        <CardDescription>Copy lessons from previous academic sessions</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="from-session">From Session</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select session" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="2023-24">2023-24</SelectItem>
                                <SelectItem value="2022-23">2022-23</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="to-session">To Session</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select session" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="2024-25">2024-25</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button className="w-full">Copy Lessons</Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="manage-lesson-plan" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Manage Lesson Plan</CardTitle>
                        <CardDescription>Create and manage lesson plans</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="class">Class</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select class" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">Class 1</SelectItem>
                                <SelectItem value="10">Class 10</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="section">Section</Label>
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
                            <Label htmlFor="subject">Subject</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select subject" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="math">Mathematics</SelectItem>
                                <SelectItem value="english">English</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lesson-title">Lesson Title</Label>
                          <Input id="lesson-title" placeholder="Enter lesson title" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lesson-content">Lesson Content</Label>
                          <Textarea id="lesson-content" placeholder="Enter lesson content..." />
                        </div>
                        <Button className="w-full">Save Lesson Plan</Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="manage-syllabus-status" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Manage Syllabus Status</CardTitle>
                        <CardDescription>Track syllabus completion progress</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="status-class">Class</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select class" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="10">Class 10</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="status-subject">Subject</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select subject" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="math">Mathematics</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="completion">Completion %</Label>
                              <Input id="completion" type="number" placeholder="75" />
                            </div>
                          </div>
                          <Button>Update Status</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="lesson" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Lesson Management</CardTitle>
                        <CardDescription>Create and organize individual lessons</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="lesson-name">Lesson Name</Label>
                            <Input id="lesson-name" placeholder="Enter lesson name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lesson-description">Description</Label>
                            <Textarea id="lesson-description" placeholder="Enter lesson description..." />
                          </div>
                          <Button className="w-full">Create Lesson</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="topic" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Topic Management</CardTitle>
                        <CardDescription>Organize topics within lessons</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="topic-name">Topic Name</Label>
                            <Input id="topic-name" placeholder="Enter topic name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="parent-lesson">Parent Lesson</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select lesson" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="lesson1">Algebra Basics</SelectItem>
                                <SelectItem value="lesson2">Geometry Fundamentals</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Button className="w-full">Create Topic</Button>
                        </div>
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
