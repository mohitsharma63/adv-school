
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Upload } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function DesignMarksheet() {
  const [formData, setFormData] = useState({
    template: "",
    examName: "",
    schoolName: "",
    examCenter: "",
    bodyText: "",
    footerText: "",
    printingDate: "",
    name: true,
    fatherName: false,
    motherName: false,
    examSession: false,
    admissionNo: false,
    division: false,
    rank: false,
    rollNumber: false,
    photo: false,
    class: false,
    section: false,
    dateOfBirth: false,
    remark: false
  });

  const marksheetList = [
    {
      certificateName: "school marksheet",
      backgroundImage: "📄",
      action: "active"
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
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Design Marksheet</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add Marksheet Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add Marksheet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="template">Template *</Label>
              <Input id="template" placeholder="Enter template name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="exam-name">Exam Name</Label>
              <Input id="exam-name" placeholder="Enter exam name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="school-name">School Name</Label>
              <Input id="school-name" placeholder="Enter school name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="exam-center">Exam Center</Label>
              <Input id="exam-center" placeholder="Enter exam center" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="body-text">Body Text</Label>
              <Textarea id="body-text" placeholder="Enter body text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="footer-text">Footer Text</Label>
              <Textarea id="footer-text" placeholder="Enter footer text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="printing-date">Printing Date</Label>
              <Input id="printing-date" type="date" />
            </div>
            <div className="space-y-2">
              <Label>Header Image</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <Upload className="mx-auto h-8 w-8 text-gray-400" />
                <p className="text-sm text-gray-500 mt-2">Drag and drop a file here or click</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Marksheet List */}
        <Card>
          <CardHeader>
            <CardTitle>Marksheet List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Certificate Name</TableHead>
                  <TableHead>Background Image</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {marksheetList.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-blue-600">{item.certificateName}</TableCell>
                    <TableCell>{item.backgroundImage}</TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button variant="outline" size="sm">≡</Button>
                        <Button variant="outline" size="sm">✏</Button>
                        <Button variant="outline" size="sm">✗</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
              <span>Records: 1 to 1 of 1</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* File Upload Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label>Left Logo</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <Upload className="mx-auto h-8 w-8 text-gray-400" />
            <p className="text-sm text-gray-500 mt-2">Drag and drop a file here or click</p>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Right Logo</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <Upload className="mx-auto h-8 w-8 text-gray-400" />
            <p className="text-sm text-gray-500 mt-2">Drag and drop a file here or click</p>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Left Sign</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <Upload className="mx-auto h-8 w-8 text-gray-400" />
            <p className="text-sm text-gray-500 mt-2">Drag and drop a file here or click</p>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Middle Sign</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <Upload className="mx-auto h-8 w-8 text-gray-400" />
            <p className="text-sm text-gray-500 mt-2">Drag and drop a file here or click</p>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Right Sign</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <Upload className="mx-auto h-8 w-8 text-gray-400" />
            <p className="text-sm text-gray-500 mt-2">Drag and drop a file here or click</p>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Background Image</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <Upload className="mx-auto h-8 w-8 text-gray-400" />
            <p className="text-sm text-gray-500 mt-2">Drag and drop a file here or click</p>
          </div>
        </div>
      </div>

      {/* Switch Options */}
      <Card>
        <CardHeader>
          <CardTitle>Display Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(formData).filter(([key]) => typeof formData[key] === 'boolean').map(([key, value]) => (
              <div key={key} className="flex items-center space-x-2">
                <Switch
                  checked={value}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, [key]: checked }))}
                />
                <Label className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</Label>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button>Save</Button>
          </div>
        </CardContent>
      </Card>
    </div>
      </SidebarInset>
                        </div>
                    </SidebarProvider>
  );
}
