
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Monitor, Plus, FileText, HelpCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function OnlineExaminations() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Online Examinations</h1>
      </div>

      <Tabs defaultValue="online-exam" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="online-exam">Online Exam</TabsTrigger>
          <TabsTrigger value="question-bank">Question Bank</TabsTrigger>
        </TabsList>

        <TabsContent value="online-exam" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create Online Exam</CardTitle>
              <CardDescription>Set up a new online examination</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="exam-title">Exam Title</Label>
                  <Input id="exam-title" placeholder="Enter exam title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="exam-subject">Subject</Label>
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
                <div className="space-y-2">
                  <Label htmlFor="exam-class">Class</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9">Class 9</SelectItem>
                      <SelectItem value="10">Class 10</SelectItem>
                      <SelectItem value="11">Class 11</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input id="duration" type="number" placeholder="60" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="total-marks">Total Marks</Label>
                  <Input id="total-marks" type="number" placeholder="100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pass-marks">Pass Marks</Label>
                  <Input id="pass-marks" type="number" placeholder="40" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="instructions">Instructions</Label>
                <Textarea id="instructions" placeholder="Enter exam instructions..." />
              </div>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Create Exam
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Online Exams</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Exam Title</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Mid Term Math Test</TableCell>
                    <TableCell>Mathematics</TableCell>
                    <TableCell>Class 10</TableCell>
                    <TableCell>60 min</TableCell>
                    <TableCell>
                      <Badge>Active</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Monitor className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="question-bank" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add Question to Bank</CardTitle>
              <CardDescription>Build your question repository</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="question-subject">Subject</Label>
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
                <div className="space-y-2">
                  <Label htmlFor="question-type">Question Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mcq">Multiple Choice</SelectItem>
                      <SelectItem value="true-false">True/False</SelectItem>
                      <SelectItem value="short">Short Answer</SelectItem>
                      <SelectItem value="essay">Essay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="question-text">Question</Label>
                <Textarea id="question-text" placeholder="Enter your question here..." />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="option-a">Option A</Label>
                  <Input id="option-a" placeholder="Enter option A" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="option-b">Option B</Label>
                  <Input id="option-b" placeholder="Enter option B" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="option-c">Option C</Label>
                  <Input id="option-c" placeholder="Enter option C" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="option-d">Option D</Label>
                  <Input id="option-d" placeholder="Enter option D" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="correct-answer">Correct Answer</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select correct answer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a">Option A</SelectItem>
                      <SelectItem value="b">Option B</SelectItem>
                      <SelectItem value="c">Option C</SelectItem>
                      <SelectItem value="d">Option D</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="marks">Marks</Label>
                  <Input id="marks" type="number" placeholder="1" />
                </div>
              </div>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Question
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Question Bank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Total Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,247</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Mathematics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">425</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Science</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">398</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">English</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">424</div>
                  </CardContent>
                </Card>
              </div>
              <Button variant="outline">
                <HelpCircle className="mr-2 h-4 w-4" />
                View All Questions
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
