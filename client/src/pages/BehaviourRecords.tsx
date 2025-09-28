
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Plus, Search, Settings, FileText } from "lucide-react";
import { format } from "date-fns";

export default function BehaviourRecords() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Behaviour Records</h1>
      </div>

      <Tabs defaultValue="assign-incident" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="assign-incident">Assign Incident</TabsTrigger>
          <TabsTrigger value="incidents">Incidents</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="setting">Setting</TabsTrigger>
        </TabsList>

        <TabsContent value="assign-incident" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Assign Incident</CardTitle>
              <CardDescription>Assign behavioral incidents to students</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="student">Student</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select student" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student1">John Doe</SelectItem>
                      <SelectItem value="student2">Jane Smith</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="incident-type">Incident Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select incident type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tardiness">Tardiness</SelectItem>
                      <SelectItem value="disruption">Classroom Disruption</SelectItem>
                      <SelectItem value="uniform">Uniform Violation</SelectItem>
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
                <div className="space-y-2">
                  <Label htmlFor="severity">Severity</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe the incident..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="action-taken">Action Taken</Label>
                <Textarea id="action-taken" placeholder="Describe actions taken..." />
              </div>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Assign Incident
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="incidents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Incident Records</CardTitle>
              <CardDescription>View and manage all behavior incidents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Input placeholder="Search incidents..." className="flex-1" />
                <Button variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Incident Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Tardiness</TableCell>
                    <TableCell>2024-01-15</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Low</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge>Resolved</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Behaviour Reports</CardTitle>
              <CardDescription>Generate and view behavior analysis reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Total Incidents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">247</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Resolved Cases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">198</div>
                    <p className="text-xs text-muted-foreground">80% resolution rate</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Pending Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">49</div>
                    <p className="text-xs text-muted-foreground">Require attention</p>
                  </CardContent>
                </Card>
              </div>
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="setting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Behaviour Settings</CardTitle>
              <CardDescription>Configure behavior tracking preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="incident-categories">Incident Categories</Label>
                <Textarea id="incident-categories" defaultValue="Tardiness, Classroom Disruption, Uniform Violation, Academic Dishonesty" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="severity-levels">Severity Levels</Label>
                <Input id="severity-levels" defaultValue="Low, Medium, High, Critical" />
              </div>
              <Button>
                <Settings className="mr-2 h-4 w-4" />
                Save Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
