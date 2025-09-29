
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  FileText, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award,
  DollarSign,
  Download,
  Eye
} from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

interface ReportType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  count?: number;
}

const reportTypes: ReportType[] = [
  {
    id: "student-purchase",
    title: "Student Course Purchase Report",
    description: "View detailed reports of course purchases by students",
    icon: <Users className="w-5 h-5" />,
    count: 245
  },
  {
    id: "course-sell-count",
    title: "Course Sell Count Report",
    description: "Analysis of course sales performance and statistics",
    icon: <BarChart3 className="w-5 h-5" />,
    count: 48
  },
  {
    id: "course-trending",
    title: "Course Trending Report",
    description: "Most popular and trending courses analysis",
    icon: <TrendingUp className="w-5 h-5" />,
    count: 12
  },
  {
    id: "course-complete",
    title: "Course Complete Report",
    description: "Track course completion rates and student progress",
    icon: <Award className="w-5 h-5" />,
    count: 156
  },
  {
    id: "course-rating",
    title: "Course Rating Report",
    description: "Course ratings and feedback from students",
    icon: <BookOpen className="w-5 h-5" />,
    count: 89
  },
  {
    id: "guest-report",
    title: "Guest Report",
    description: "Guest user activity and engagement metrics",
    icon: <Eye className="w-5 h-5" />,
    count: 67
  },
  {
    id: "course-assignment",
    title: "Course Assignment Report",
    description: "Assignment submission and completion tracking",
    icon: <FileText className="w-5 h-5" />,
    count: 234
  },
  {
    id: "course-exam-result",
    title: "Course Exam Result Report",
    description: "Detailed exam results and performance analysis",
    icon: <Award className="w-5 h-5" />,
    count: 123
  },
  {
    id: "course-exam",
    title: "Course Exam Report",
    description: "Exam scheduling and participation reports",
    icon: <FileText className="w-5 h-5" />,
    count: 98
  },
  {
    id: "course-exam-attempt",
    title: "Course Exam Attempt Report",
    description: "Track exam attempts and retry statistics",
    icon: <BarChart3 className="w-5 h-5" />,
    count: 187
  }
];

const quickStats = [
  { label: "Total Courses", value: "48", trend: "+12%", color: "text-blue-600" },
  { label: "Active Students", value: "1,245", trend: "+8%", color: "text-green-600" },
  { label: "Course Sales", value: "$12,450", trend: "+15%", color: "text-purple-600" },
  { label: "Completion Rate", value: "78%", trend: "+5%", color: "text-orange-600" }
];

export default function OnlineCourseReport() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const handleGenerateReport = (reportId: string) => {
    setSelectedReport(reportId);
    // Here you would typically fetch report data
    console.log("Generating report for:", reportId);
  };

   const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>
    <div className="min-h-screen bg-background p-6" data-testid="online-course-report-page">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <BarChart3 className="w-6 h-6 mr-2" />
            Online Course Report
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className={`text-sm ${stat.color}`}>{stat.trend}</p>
                </div>
                <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportTypes.map((report) => (
          <Card key={report.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  {report.icon}
                </div>
                {report.count && (
                  <Badge variant="secondary">{report.count}</Badge>
                )}
              </div>
              
              <h3 className="font-semibold text-lg mb-2">{report.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
              
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleGenerateReport(report.id)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Report
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Recent Report Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="font-medium">Course Sales Report - December 2024</p>
                  <p className="text-sm text-muted-foreground">Generated 2 hours ago</p>
                </div>
              </div>
              <Button size="sm" variant="outline">
                <Download className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-green-500" />
                <div>
                  <p className="font-medium">Student Enrollment Report</p>
                  <p className="text-sm text-muted-foreground">Generated 5 hours ago</p>
                </div>
              </div>
              <Button size="sm" variant="outline">
                <Download className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="font-medium">Course Completion Analytics</p>
                  <p className="text-sm text-muted-foreground">Generated yesterday</p>
                </div>
              </div>
              <Button size="sm" variant="outline">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </SidebarInset>
                    </div>
                </SidebarProvider>
  );
}
