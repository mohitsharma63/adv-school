
import { useState } from "react";
import { Percent, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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

interface FeesDiscount {
  id: string;
  name: string;
  discountCode: string;
  percentage: number | null;
  amount: number | null;
  numberOfUseCount: number;
  expiryDate: string;
  description?: string;
}

const mockFeesDiscounts: FeesDiscount[] = [
  {
    id: "1",
    name: "Sibling Discount",
    discountCode: "sibling-disc",
    percentage: null,
    amount: 500.00,
    numberOfUseCount: 5,
    expiryDate: "04/10/2025",
    description: ""
  },
  {
    id: "2",
    name: "Handicapped Discount",
    discountCode: "handicap-disc",
    percentage: null,
    amount: 1000.00,
    numberOfUseCount: 5,
    expiryDate: "04/15/2025",
    description: ""
  },
  {
    id: "3",
    name: "Class Topper Discount",
    discountCode: "cls-top-disc",
    percentage: 100.00,
    amount: null,
    numberOfUseCount: 10,
    expiryDate: "",
    description: ""
  }
];

export default function FeesDiscount() {
  const [feesDiscounts, setFeesDiscounts] = useState<FeesDiscount[]>(mockFeesDiscounts);
  const [formData, setFormData] = useState({
    name: "",
    discountCode: "",
    discountType: "Percentage",
    percentage: "",
    amount: "",
    numberOfUseCount: "",
    expiryDate: "",
    description: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (formData.name.trim() && formData.discountCode.trim()) {
      const newDiscount: FeesDiscount = {
        id: (feesDiscounts.length + 1).toString(),
        name: formData.name,
        discountCode: formData.discountCode,
        percentage: formData.discountType === "Percentage" ? parseFloat(formData.percentage) : null,
        amount: formData.discountType === "Fix Amount" ? parseFloat(formData.amount) : null,
        numberOfUseCount: parseInt(formData.numberOfUseCount) || 0,
        expiryDate: formData.expiryDate,
        description: formData.description
      };
      setFeesDiscounts([...feesDiscounts, newDiscount]);
      setFormData({
        name: "",
        discountCode: "",
        discountType: "Percentage",
        percentage: "",
        amount: "",
        numberOfUseCount: "",
        expiryDate: "",
        description: ""
      });
    }
  };

  const handleEdit = (id: string) => {
    const discount = feesDiscounts.find(d => d.id === id);
    if (discount) {
      setFormData({
        name: discount.name,
        discountCode: discount.discountCode,
        discountType: discount.percentage !== null ? "Percentage" : "Fix Amount",
        percentage: discount.percentage?.toString() || "",
        amount: discount.amount?.toString() || "",
        numberOfUseCount: discount.numberOfUseCount.toString(),
        expiryDate: discount.expiryDate,
        description: discount.description || ""
      });
    }
  };

  const handleDelete = (id: string) => {
    setFeesDiscounts(feesDiscounts.filter(discount => discount.id !== id));
  };

   const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>

    <div className="min-h-screen bg-background p-6" data-testid="fees-discount-page">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add Fees Discount Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center">
              <Percent className="w-5 h-5 mr-2" />
              Add Fees Discount
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter discount name"
              />
            </div>

            <div>
              <Label htmlFor="discountCode">Discount Code *</Label>
              <Input
                id="discountCode"
                value={formData.discountCode}
                onChange={(e) => handleInputChange('discountCode', e.target.value)}
                placeholder="Enter discount code"
              />
            </div>

            <div>
              <Label>Discount Type</Label>
              <RadioGroup
                value={formData.discountType}
                onValueChange={(value) => handleInputChange('discountType', value)}
                className="flex space-x-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Percentage" id="percentage" />
                  <Label htmlFor="percentage">Percentage</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Fix Amount" id="fixAmount" />
                  <Label htmlFor="fixAmount">Fix Amount</Label>
                </div>
              </RadioGroup>
            </div>

            {formData.discountType === "Percentage" && (
              <div>
                <Label htmlFor="percentage">Percentage (%)</Label>
                <Input
                  id="percentage"
                  type="number"
                  value={formData.percentage}
                  onChange={(e) => handleInputChange('percentage', e.target.value)}
                  placeholder="Enter percentage"
                />
              </div>
            )}

            {formData.discountType === "Fix Amount" && (
              <div>
                <Label htmlFor="amount">Amount ($) *</Label>
                <Input
                  id="amount"
                  type="number"
                  value={formData.amount}
                  onChange={(e) => handleInputChange('amount', e.target.value)}
                  placeholder="Enter amount"
                />
              </div>
            )}

            <div>
              <Label htmlFor="numberOfUseCount">Number Of Use Count *</Label>
              <Input
                id="numberOfUseCount"
                type="number"
                value={formData.numberOfUseCount}
                onChange={(e) => handleInputChange('numberOfUseCount', e.target.value)}
                placeholder="Enter use count"
              />
            </div>

            <div>
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input
                id="expiryDate"
                type="date"
                value={formData.expiryDate}
                onChange={(e) => handleInputChange('expiryDate', e.target.value)}
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

        {/* Fees Discount List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Fees Discount List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Input
                placeholder="Search..."
                className="max-w-sm"
              />
            </div>
            
            <div className="border rounded-lg overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Discount Code</TableHead>
                    <TableHead>Percentage (%)</TableHead>
                    <TableHead>Amount ($)</TableHead>
                    <TableHead>Number Of Use Count</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {feesDiscounts.map((discount) => (
                    <TableRow key={discount.id}>
                      <TableCell className="font-medium">{discount.name}</TableCell>
                      <TableCell>{discount.discountCode}</TableCell>
                      <TableCell>{discount.percentage || "-"}</TableCell>
                      <TableCell>{discount.amount?.toFixed(2) || "-"}</TableCell>
                      <TableCell>{discount.numberOfUseCount}</TableCell>
                      <TableCell>{discount.expiryDate || "-"}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" onClick={() => handleEdit(discount.id)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDelete(discount.id)}>
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
              Records: 1 to 3 of 3
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
