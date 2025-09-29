
import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

interface FeeMaster {
  id: string;
  feesGroup: string;
  feesCode: string;
  amount: number;
  fineType: string;
  dueDate: string;
  perDay: boolean;
  daysFineAmount: number;
}

const mockFeesMaster: FeeMaster[] = [
  {
    id: "1",
    feesGroup: "Class 1 General",
    feesCode: "Admission Fees (admission-fees)",
    amount: 2000.00,
    fineType: "Fix",
    dueDate: "04/10/2024",
    perDay: false,
    daysFineAmount: 200.00
  },
  {
    id: "2",
    feesGroup: "Class 1 General",
    feesCode: "April Month Fees (apr-month-fees)",
    amount: 300.00,
    fineType: "Fix",
    dueDate: "04/10/2024",
    perDay: false,
    daysFineAmount: 100.00
  },
  {
    id: "3",
    feesGroup: "Class 1 General",
    feesCode: "May Month Fees (may-month-fees)",
    amount: 300.00,
    fineType: "Percentage",
    dueDate: "05/10/2024",
    perDay: false,
    daysFineAmount: 30.00
  }
];

export default function FeesMaster() {
  const [feesMaster, setFeesMaster] = useState<FeeMaster[]>(mockFeesMaster);
  const [formData, setFormData] = useState({
    feesGroup: "",
    feesType: "",
    dueDate: "",
    amount: "",
    fineType: "None",
    percentage: "",
    fixAmount: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log("Save fees master:", formData);
    // Add new fee master logic here
  };

  const handleEdit = (id: string) => {
    console.log("Edit fees master:", id);
  };

  const handleDelete = (id: string) => {
    setFeesMaster(feesMaster.filter(fee => fee.id !== id));
  };

 const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>
    <div className="min-h-screen bg-background p-6" data-testid="fees-master-page">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add Fees Master Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Add Fees Master : 2024-25</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="feesGroup">Fees Group *</Label>
              <Select value={formData.feesGroup} onValueChange={(value) => handleInputChange('feesGroup', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="class1-general">Class 1 General</SelectItem>
                  <SelectItem value="class2-general">Class 2 General</SelectItem>
                  <SelectItem value="class3-general">Class 3 General</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="feesType">Fees Type *</Label>
              <Select value={formData.feesType} onValueChange={(value) => handleInputChange('feesType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admission-fees">Admission Fees</SelectItem>
                  <SelectItem value="tuition-fees">Tuition Fees</SelectItem>
                  <SelectItem value="exam-fees">Exam Fees</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={(e) => handleInputChange('dueDate', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="amount">Amount ($)</Label>
              <Input
                id="amount"
                type="number"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
                placeholder="Enter amount"
              />
            </div>

            <div>
              <Label>Fine Type</Label>
              <RadioGroup
                value={formData.fineType}
                onValueChange={(value) => handleInputChange('fineType', value)}
                className="flex space-x-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="None" id="none" />
                  <Label htmlFor="none">None</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Percentage" id="percentage" />
                  <Label htmlFor="percentage">Percentage</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Fix Amount" id="fix" />
                  <Label htmlFor="fix">Fix Amount</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Cumulative" id="cumulative" />
                  <Label htmlFor="cumulative">Cumulative</Label>
                </div>
              </RadioGroup>
            </div>

            {formData.fineType === "Percentage" && (
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

            {formData.fineType === "Fix Amount" && (
              <div>
                <Label htmlFor="fixAmount">Fix Amount ($)</Label>
                <Input
                  id="fixAmount"
                  type="number"
                  value={formData.fixAmount}
                  onChange={(e) => handleInputChange('fixAmount', e.target.value)}
                  placeholder="Enter fix amount"
                />
              </div>
            )}

            <Button onClick={handleSave} className="w-full">
              Save
            </Button>
          </CardContent>
        </Card>

        {/* Fees Master List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Fees Master List : 2024-25</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fees Group</TableHead>
                    <TableHead>Fees Code</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Fine Type</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Per Day</TableHead>
                    <TableHead>Days Fine Amount</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {feesMaster.map((fee) => (
                    <TableRow key={fee.id}>
                      <TableCell className="font-medium">{fee.feesGroup}</TableCell>
                      <TableCell>{fee.feesCode}</TableCell>
                      <TableCell>${fee.amount.toFixed(2)}</TableCell>
                      <TableCell>{fee.fineType}</TableCell>
                      <TableCell>{fee.dueDate}</TableCell>
                      <TableCell>{fee.perDay ? "Yes" : "No"}</TableCell>
                      <TableCell>Fine: ${fee.daysFineAmount.toFixed(2)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" onClick={() => handleEdit(fee.id)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDelete(fee.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
