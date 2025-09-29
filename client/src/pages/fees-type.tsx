
import { useState } from "react";
import { FileText, Edit, Trash2 } from "lucide-react";
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

interface FeesType {
  id: string;
  name: string;
  feesCode: string;
  description?: string;
}

const mockFeesTypes: FeesType[] = [
  { id: "1", name: "Admission Fees", feesCode: "admission-fees", description: "" },
  { id: "2", name: "1st Installment Fees", feesCode: "1-installment-fees", description: "" },
  { id: "3", name: "2nd Installment Fees", feesCode: "2-installment-fees", description: "" },
  { id: "4", name: "3rd Installment Fees", feesCode: "3-installment-fees", description: "" },
  { id: "5", name: "4th Installment Fees", feesCode: "4-installment-fees", description: "" },
  { id: "6", name: "5th Installment Fees", feesCode: "5-installment-fees", description: "" },
  { id: "7", name: "6th Installment Fees", feesCode: "6-installment-fees", description: "" },
  { id: "8", name: "April Month Fees", feesCode: "apr-month-fees", description: "" },
  { id: "9", name: "August Month Fees", feesCode: "aug-month-fees", description: "" },
  { id: "10", name: "Bus-fees", feesCode: "Bus-fees", description: "" },
  { id: "11", name: "Caution Money Fees", feesCode: "caution-money-fees", description: "" },
  { id: "12", name: "Certificate fee", feesCode: "Cert-Fee", description: "" },
  { id: "13", name: "December Month Fees", feesCode: "dec-month-fees", description: "" },
  { id: "14", name: "Exam Fees", feesCode: "exam-fees", description: "" },
  { id: "15", name: "February Month Fees", feesCode: "feb-month-fees", description: "" },
  { id: "16", name: "January Month Fees", feesCode: "jan-month-fees", description: "" },
  { id: "17", name: "July Month Fees", feesCode: "jul-month-fees", description: "" }
];

export default function FeesType() {
  const [feesTypes, setFeesTypes] = useState<FeesType[]>(mockFeesTypes);
  const [formData, setFormData] = useState({
    name: "",
    feesCode: "",
    description: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (formData.name.trim() && formData.feesCode.trim()) {
      const newType: FeesType = {
        id: (feesTypes.length + 1).toString(),
        name: formData.name,
        feesCode: formData.feesCode,
        description: formData.description
      };
      setFeesTypes([...feesTypes, newType]);
      setFormData({ name: "", feesCode: "", description: "" });
    }
  };

  const handleEdit = (id: string) => {
    const type = feesTypes.find(t => t.id === id);
    if (type) {
      setFormData({
        name: type.name,
        feesCode: type.feesCode,
        description: type.description || ""
      });
    }
  };

  const handleDelete = (id: string) => {
    setFeesTypes(feesTypes.filter(type => type.id !== id));
  };

  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>
    <div className="min-h-screen bg-background p-6" data-testid="fees-type-page">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add Fees Type Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Add Fees Type
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter fees type name"
              />
            </div>

            <div>
              <Label htmlFor="feesCode">Fees Code *</Label>
              <Input
                id="feesCode"
                value={formData.feesCode}
                onChange={(e) => handleInputChange('feesCode', e.target.value)}
                placeholder="Enter fees code"
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

        {/* Fees Type List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Fees Type List</CardTitle>
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
                    <TableHead>Fees Code</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {feesTypes.map((type) => (
                    <TableRow key={type.id}>
                      <TableCell className="font-medium">{type.name}</TableCell>
                      <TableCell>{type.feesCode}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" onClick={() => handleEdit(type.id)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDelete(type.id)}>
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
              Showing {feesTypes.length} fees types
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
