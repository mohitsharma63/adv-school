
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Plus } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function MultiBranchSetting() {
  const branches = [
    {
      id: 1,
      name: "Mount Carmel School 1",
      url: "https://demo.smart-school.in/branch1/"
    },
    {
      id: 2,
      name: "Mount Carmel School 2", 
      url: "https://demo.smart-school.in/branch2/"
    },
    {
      id: 3,
      name: "Mount Carmel School 3",
      url: "https://demo.smart-school.in/branch3/"
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
        <h1 className="text-2xl font-bold">Setting</h1>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          Add New
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Branch Management</CardTitle>
            <div className="flex items-center space-x-4">
              <Input 
                placeholder="Search..." 
                className="w-64"
              />
              <Badge variant="secondary">100</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b  ">
                  <th className="text-left p-3 font-medium">Branch</th>
                  <th className="text-left p-3 font-medium">URL</th>
                  <th className="text-left p-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {branches.map((branch, index) => (
                  <tr key={branch.id} className={index % 2 === 0 ? " " : " "}>
                    <td className="p-3">{branch.name}</td>
                    <td className="p-3">
                      <a 
                        href={branch.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        {branch.url}
                      </a>
                    </td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
            <span>Records 1 to 3 of 3</span>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>‹</Button>
              <span className="px-3 py-1 bg-blue-500 text-white rounded">1</span>
              <Button variant="outline" size="sm" disabled>›</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-right text-sm text-gray-500">
        Version 3.0
      </div>
    </div>
    </SidebarInset>
                        </div>
                    </SidebarProvider>
  );
}
