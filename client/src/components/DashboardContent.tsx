import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  GraduationCap, 
  DollarSign, 
  BookOpen,
  TrendingUp,
  Calendar,
  UserCheck,
  AlertCircle 
} from "lucide-react";

interface DashboardContentProps {
  selectedSection?: string;
  selectedItem?: string;
}

// Mock data for dashboard
const dashboardStats = [
  {
    title: "Total Students",
    value: "2,847",
    change: "+12%",
    icon: Users,
    trend: "up"
  },
  {
    title: "Active Teachers",
    value: "156",
    change: "+3%",
    icon: GraduationCap,
    trend: "up"
  },
  {
    title: "Fees Collected",
    value: "$348,921",
    change: "+18%",
    icon: DollarSign,
    trend: "up"
  },
  {
    title: "Online Courses",
    value: "42",
    change: "+7%",
    icon: BookOpen,
    trend: "up"
  }
];

const recentActivities = [
  {
    id: 1,
    type: "admission",
    title: "New student admission",
    description: "John Smith has been admitted to Grade 10-A",
    time: "2 minutes ago",
    status: "completed"
  },
  {
    id: 2,
    type: "payment",
    title: "Fee payment received",
    description: "Payment of $1,250 received from Sarah Johnson",
    time: "15 minutes ago",
    status: "completed"
  },
  {
    id: 3,
    type: "meeting",
    title: "Live class scheduled",
    description: "Mathematics class for Grade 9 at 2:00 PM",
    time: "1 hour ago",
    status: "scheduled"
  },
  {
    id: 4,
    type: "enquiry",
    title: "Admission enquiry",
    description: "New enquiry from parent for Grade 5 admission",
    time: "2 hours ago",
    status: "pending"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Parent-Teacher Meeting",
    date: "March 15, 2024",
    time: "10:00 AM",
    type: "meeting"
  },
  {
    id: 2,
    title: "Monthly Fee Due",
    date: "March 20, 2024",
    time: "All Day",
    type: "payment"
  },
  {
    id: 3,
    title: "Science Fair",
    date: "March 25, 2024",
    time: "9:00 AM",
    type: "event"
  }
];

export default function DashboardContent({ selectedSection, selectedItem }: DashboardContentProps) {
  const handleQuickAction = (action: string) => {
    console.log(`Quick action triggered: ${action}`);
  };

  // If a specific menu item is selected, show that content
  if (selectedSection && selectedItem) {
    return (
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2" data-testid="text-section-title">
            {selectedItem}
          </h2>
          <p className="text-muted-foreground">
            Manage {selectedItem.toLowerCase()} in the {selectedSection.toLowerCase()} module
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{selectedItem} Management</CardTitle>
            <CardDescription>
              This is where you would manage {selectedItem.toLowerCase()} functionality.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button data-testid="button-add-new">Add New</Button>
                <Button variant="outline" data-testid="button-export">Export</Button>
                <Button variant="outline" data-testid="button-import">Import</Button>
              </div>
              
              <div className="border rounded-lg p-4 bg-muted/50">
                <p className="text-sm text-muted-foreground">
                  {/* TODO: Remove mock functionality */}
                  This section will contain the actual {selectedItem.toLowerCase()} management interface 
                  with forms, tables, and interactive features specific to this module.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Default dashboard view
  return (
    <div className="p-6 space-y-6">
      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <Card key={index} className="hover-elevate">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground" data-testid={`text-stat-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {stat.value}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    <span className="text-xs text-green-500">{stat.change}</span>
                  </div>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Recent Activities
            </CardTitle>
            <CardDescription>Latest updates across all modules</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover-elevate">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                      <Badge variant={activity.status === "completed" ? "default" : "secondary"} className="text-xs">
                        {activity.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Upcoming Events
            </CardTitle>
            <CardDescription>Important dates and deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-3 p-3 rounded-lg hover-elevate">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.date} • {event.time}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {event.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2"
              onClick={() => handleQuickAction('add-student')}
              data-testid="button-quick-add-student"
            >
              <UserCheck className="w-5 h-5" />
              Add Student
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2"
              onClick={() => handleQuickAction('collect-fees')}
              data-testid="button-quick-collect-fees"
            >
              <DollarSign className="w-5 h-5" />
              Collect Fees
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2"
              onClick={() => handleQuickAction('schedule-class')}
              data-testid="button-quick-schedule-class"
            >
              <Calendar className="w-5 h-5" />
              Schedule Class
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2"
              onClick={() => handleQuickAction('view-reports')}
              data-testid="button-quick-view-reports"
            >
              <TrendingUp className="w-5 h-5" />
              View Reports
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}