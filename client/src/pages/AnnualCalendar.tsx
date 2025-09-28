import React from 'react';
import { useState } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Plus, Edit, Trash2, Clock } from "lucide-react";
import { format } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AnnualCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const events = [
    {
      id: 1,
      title: "First Day of School",
      date: "2024-08-15",
      type: "academic",
      description: "School reopens for the new academic year"
    },
    {
      id: 2,
      title: "Independence Day",
      date: "2024-08-15",
      type: "holiday",
      description: "National Holiday"
    },
    {
      id: 3,
      title: "Mid-term Examinations",
      date: "2024-10-15",
      type: "exam",
      description: "Mid-term exams for all classes"
    },
    {
      id: 4,
      title: "Diwali Vacation",
      date: "2024-11-01",
      type: "holiday",
      description: "Festival holidays"
    },
    {
      id: 5,
      title: "Annual Sports Day",
      date: "2024-12-10",
      type: "event",
      description: "School sports competition"
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'holiday': return 'bg-red-100 text-red-800';
      case 'exam': return 'bg-orange-100 text-orange-800';
      case 'event': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar onMenuItemClick={handleMenuItemClick} />
        <SidebarInset className="flex-1">
          <DashboardHeader title="Annual Calendar" />
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Annual Calendar</h1>
              </div>

              <ScrollArea className="h-[80vh]">
                <Tabs defaultValue="calendar-view" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="calendar-view">Calendar View</TabsTrigger>
                    <TabsTrigger value="add-event">Add Event</TabsTrigger>
                    <TabsTrigger value="event-list">Event List</TabsTrigger>
                  </TabsList>

                  <TabsContent value="calendar-view" className="space-y-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <Card>
                          <CardHeader>
                            <CardTitle>Academic Year 2024-25</CardTitle>
                            <CardDescription>
                              Select a date to view scheduled events
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              className="rounded-md border w-full"
                            />
                          </CardContent>
                        </Card>
                      </div>

                      <div className="space-y-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Upcoming Events</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            {events.slice(0, 5).map((event) => (
                              <div key={event.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                                <Clock className="h-4 w-4 mt-1 text-muted-foreground" />
                                <div className="flex-1 space-y-1">
                                  <p className="text-sm font-medium">{event.title}</p>
                                  <p className="text-xs text-muted-foreground">{event.date}</p>
                                  <Badge className={`text-xs ${getEventTypeColor(event.type)}`}>
                                    {event.type}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Quick Stats</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm">Total Events:</span>
                                <span className="text-sm font-medium">{events.length}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm">Holidays:</span>
                                <span className="text-sm font-medium">
                                  {events.filter(e => e.type === 'holiday').length}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm">Exams:</span>
                                <span className="text-sm font-medium">
                                  {events.filter(e => e.type === 'exam').length}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="add-event" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Add New Event</CardTitle>
                        <CardDescription>
                          Create a new event for the academic calendar
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="event-title">Event Title</Label>
                            <Input id="event-title" placeholder="Enter event title" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="event-type">Event Type</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select event type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="academic">Academic</SelectItem>
                                <SelectItem value="holiday">Holiday</SelectItem>
                                <SelectItem value="exam">Examination</SelectItem>
                                <SelectItem value="event">School Event</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="event-date">Date</Label>
                            <Input id="event-date" type="date" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="event-time">Time</Label>
                            <Input id="event-time" type="time" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="event-description">Description</Label>
                          <Input id="event-description" placeholder="Enter event description" />
                        </div>
                        <Button className="w-full">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Event
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="event-list" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>All Events</CardTitle>
                        <CardDescription>
                          Manage all events in the academic calendar
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {events.map((event) => (
                            <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="space-y-1">
                                <h3 className="font-medium">{event.title}</h3>
                                <p className="text-sm text-muted-foreground">{event.description}</p>
                                <div className="flex items-center space-x-2">
                                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm">{event.date}</span>
                                  <Badge className={`text-xs ${getEventTypeColor(event.type)}`}>
                                    {event.type}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
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