
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Mail, MessageSquare, Bell, Send, Calendar } from "lucide-react";

export default function Communicate() {
  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar onMenuItemClick={handleMenuItemClick} />
        <SidebarInset className="flex-1">
          <DashboardHeader title="Communicate" />
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Communication Center</h1>
              </div>

              <ScrollArea className="h-[80vh]">
                <Tabs defaultValue="notice-board" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="notice-board">Notice Board</TabsTrigger>
                    <TabsTrigger value="send-email">Send Email</TabsTrigger>
                    <TabsTrigger value="send-sms">Send SMS</TabsTrigger>
                    <TabsTrigger value="more">More</TabsTrigger>
                  </TabsList>

                  <TabsContent value="notice-board" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Notice Board</CardTitle>
                        <CardDescription>Create and manage school notices</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="notice-title">Notice Title</Label>
                          <Input id="notice-title" placeholder="Enter notice title" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="notice-content">Notice Content</Label>
                          <Textarea id="notice-content" placeholder="Enter notice content..." />
                        </div>
                        <Button className="w-full">
                          <Bell className="mr-2 h-4 w-4" />
                          Publish Notice
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="send-email" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Send Email</CardTitle>
                        <CardDescription>Send emails to students, parents, or staff</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email-subject">Subject</Label>
                          <Input id="email-subject" placeholder="Enter email subject" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email-recipients">Recipients</Label>
                          <Input id="email-recipients" placeholder="Enter email addresses" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email-message">Message</Label>
                          <Textarea id="email-message" placeholder="Enter your message..." />
                        </div>
                        <Button className="w-full">
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="send-sms" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Send SMS</CardTitle>
                        <CardDescription>Send SMS messages to parents and students</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="sms-recipients">Recipients</Label>
                          <Input id="sms-recipients" placeholder="Enter phone numbers" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="sms-message">Message</Label>
                          <Textarea id="sms-message" placeholder="Enter your SMS message..." maxLength={160} />
                        </div>
                        <Button className="w-full">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Send SMS
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="more" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Email/SMS Log</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            <Mail className="mr-2 h-4 w-4" />
                            View Communication Log
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Schedule Email/SMS</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            <Calendar className="mr-2 h-4 w-4" />
                            Schedule Messages
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Login Credentials Send</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            <Send className="mr-2 h-4 w-4" />
                            Send Credentials
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Email Template</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            <Mail className="mr-2 h-4 w-4" />
                            Manage Templates
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
