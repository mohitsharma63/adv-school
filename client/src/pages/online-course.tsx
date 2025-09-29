
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Search, Grid, List, Plus, Eye, Edit, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

interface Course {
  id: string;
  title: string;
  category: string;
  class: string;
  lessons: number;
  quizzes: number;
  exams: number;
  assignments: number;
  price: number;
  currentPrice: number;
  provider: string;
  lastUpdated: string;
  status: "active" | "inactive";
}

const mockCourses: Course[] = [
  {
    id: "1",
    title: "Mathematics a Graphical Course",
    category: "UPGRADE SKILL",
    class: "Class 1",
    lessons: 2,
    quizzes: 1,
    exams: 1,
    assignments: 1,
    price: 90.00,
    currentPrice: 81.00,
    provider: "Shivam Verma (0002)",
    lastUpdated: "04/02/2025",
    status: "active"
  },
  {
    id: "2",
    title: "Physics - Energy Course",
    category: "UPGRADE SKILL",
    class: "Class 1",
    lessons: 2,
    quizzes: 1,
    exams: 1,
    assignments: 1,
    price: 108.00,
    currentPrice: 97.20,
    provider: "Jason Shelton (0006)",
    lastUpdated: "06/02/2025",
    status: "active"
  },
  {
    id: "3",
    title: "COMMUNICATION SKILLS",
    category: "Personal Development",
    class: "Class 5",
    lessons: 2,
    quizzes: 1,
    exams: 1,
    assignments: 1,
    price: 85.50,
    currentPrice: 76.95,
    provider: "Shivam Verma (0002)",
    lastUpdated: "07/01/2025",
    status: "active"
  },
  {
    id: "4",
    title: "The Life of Plants",
    category: "UPGRADE SKILL",
    class: "Class 5",
    lessons: 2,
    quizzes: 1,
    exams: 1,
    assignments: 1,
    price: 99.00,
    currentPrice: 89.10,
    provider: "Jason Shelton (0006)",
    lastUpdated: "06/02/2025",
    status: "active"
  }
];

export default function OnlineCourse() {
  const [courses] = useState<Course[]>(mockCourses);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.provider.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>

    <div className="min-h-screen bg-background p-6" data-testid="online-course-page">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <BookOpen className="w-6 h-6 mr-2" />
            Course List
          </CardTitle>
        </CardHeader>

        <CardContent>
          {/* Search and Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search By Course Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
              <Button className="ml-2">
                <Plus className="w-4 h-4 mr-2" />
                Add Course
              </Button>
            </div>
          </div>

          {/* Course Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-blue-500" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">{course.title}</h3>
                    <Badge variant="secondary" className="text-xs mb-2">
                      {course.category}
                    </Badge>
                    <div className="text-xs text-muted-foreground space-y-1 mb-3">
                      <div className="flex justify-between">
                        <span>Class: {course.class}</span>
                        <span>Lessons: {course.lessons}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quizzes: {course.quizzes}</span>
                        <span>Exams: {course.exams}</span>
                      </div>
                      <div>Assignments: {course.assignments}</div>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-sm">
                        <span className="line-through text-muted-foreground">${course.price.toFixed(2)}</span>
                        <span className="ml-2 font-semibold">${course.currentPrice.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-3">
                      <div>{course.provider}</div>
                      <div>Last Updated: {course.lastUpdated}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Manage Course
                      </Button>
                      <Button size="sm" variant="secondary" className="flex-1">
                        Course Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredCourses.map((course) => (
                <Card key={course.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{course.title}</h3>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {course.category}
                          </Badge>
                          <div className="text-sm text-muted-foreground mt-1">
                            {course.provider} • {course.class} • {course.lessons} Lessons
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm">
                            <span className="line-through text-muted-foreground">${course.price.toFixed(2)}</span>
                            <span className="ml-2 font-semibold">${course.currentPrice.toFixed(2)}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Updated: {course.lastUpdated}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
    </SidebarInset>
                    </div>
                </SidebarProvider>
  );
}
