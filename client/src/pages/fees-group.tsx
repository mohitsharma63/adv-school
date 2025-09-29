
import { useState } from "react";
import { Users, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

interface FeesGroup {
  id: string;
  name: string;
  description?: string;
}

const mockFeesGroups: FeesGroup[] = [
  { id: "1", name: "Class 1 General", description: "" },
  { id: "2", name: "Class 1 Lump Sum", description: "" },
  { id: "3", name: "Class 1- I Installment", description: "" },
  { id: "4", name: "Class 1-II Installment", description: "" },
  { id: "5", name: "Class 2 General", description: "" },
  { id: "6", name: "Class 2 Lump Sum", description: "" },
  { id: "7", name: "Class 2 - I Installment", description: "" },
  { id: "8", name: "Class 2 - II Installment", description: "" },
  { id: "9", name: "Class 3 General", description: "" },
  { id: "10", name: "Class 3- I Installment", description: "" },
  { id: "11", name: "Class 3-II Installment", description: "" },
  { id: "12", name: "Class 4 General", description: "" },
  { id: "13", name: "Discount", description: "" },
  { id: "14", name: "March Fees", description: "" },
  { id: "15", name: "Exam", description: "" },
  { id: "16", name: "Fees", description: "" },
  { id: "17", name: "Class 4- I Installment", description: "" }
];

export default function FeesGroup() {
  const [feesGroups, setFeesGroups] = useState<FeesGroup[]>(mockFeesGroups);
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (formData.name.trim()) {
      const newGroup: FeesGroup = {
        id: (feesGroups.length + 1).toString(),
        name: formData.name,
        description: formData.description
      };
      setFeesGroups([...feesGroups, newGroup]);
      setFormData({ name: "", description: "" });
    }
  };

  const handleEdit = (id: string) => {
    const group = feesGroups.find(g => g.id === id);
    if (group) {
      setFormData({
        name: group.name,
        description: group.description || ""
      });
    }
  };

  const handleDelete = (id: string) => {
    setFeesGroups(feesGroups.filter(group => group.id !== id));
  };

 const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>
    <div className="min-h-screen bg-background p-6" data-testid="fees-group-page">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add Fees Group Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Add Fees Group
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter fees group name"
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Enter description (optional)"
                rows={4}
              />
            </div>

            <Button onClick={handleSave} className="w-full">
              Save
            </Button>
          </CardContent>
        </Card>

        {/* Fees Group List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Fees Group List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Input
                placeholder="Search..."
                className="max-w-sm"
              />
            </div>
            
            <div className="border rounded-lg max-h-96 overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {feesGroups.map((group) => (
                    <TableRow key={group.id}>
                      <TableCell className="font-medium">{group.name}</TableCell>
                      <TableCell>{group.description || "-"}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" onClick={() => handleEdit(group.id)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDelete(group.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="text-sm text-muted-foreground mt-2">
              Showing {feesGroups.length} fees groups
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
      </SidebarInset>
                    </div>
                </SidebarProvider>
  );
}
