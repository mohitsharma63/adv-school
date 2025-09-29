
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, DollarSign, TrendingUp, Users } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function MultiBranchReport() {
  const reports = [
    {
      title: "Daily Collection Report",
      description: "View daily fee collection across all branches",
      icon: FileText,
      category: "Finance"
    },
    {
      title: "Payroll Report", 
      description: "Staff payroll summary for all branches",
      icon: DollarSign,
      category: "HR"
    },
    {
      title: "Income Report",
      description: "Income analysis across branches",
      icon: TrendingUp,
      category: "Finance"
    },
    {
      title: "Expense Report",
      description: "Expense breakdown by branch",
      icon: FileText,
      category: "Finance"
    },
    {
      title: "User Log Report",
      description: "User activity logs across all branches",
      icon: Users,
      category: "System"
    }
  ];

 const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Multi Branch Report</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="flex items-center space-x-2">
                <report.icon className="h-5 w-5 text-orange-500" />
                <div>
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                  <p className="text-sm text-gray-500">{report.category}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{report.description}</p>
              <Button className="w-full" variant="outline">
                Generate Report
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Generation History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No reports generated yet</p>
            <p className="text-sm">Generated reports will appear here</p>
          </div>
        </CardContent>
      </Card>
    </div>
    </SidebarInset>
                    </div>
                </SidebarProvider>
  );
}
