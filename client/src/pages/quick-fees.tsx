
import { useState } from "react";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

interface QuickFee {
  feesGroup: string;
  feesType: string;
  feesCode: string;
  dueDate: string;
  fineAmount: number;
  amount: number;
}

const mockQuickFees: QuickFee[] = [
  {
    feesGroup: "192-1001-Hudson",
    feesType: "Hudson (1001) - Installment-1",
    feesCode: "Hudson (1001) - Installment-1",
    dueDate: "03/10/2025",
    fineAmount: 50.00,
    amount: 100.00
  },
  {
    feesGroup: "192-1001-Hudson",
    feesType: "Hudson (1001) - Installment-2",
    feesCode: "Hudson (1001) - Installment-2",
    dueDate: "04/10/2025",
    fineAmount: 50.00,
    amount: 100.00
  },
  {
    feesGroup: "192-1001-Hudson",
    feesType: "Hudson (1001) - Installment-3",
    feesCode: "Hudson (1001) - Installment-3",
    dueDate: "05/10/2025",
    fineAmount: 50.00,
    amount: 100.00
  },
  {
    feesGroup: "192-1001-Hudson",
    feesType: "Hudson (1001) - Installment-4",
    feesCode: "Hudson (1001) - Installment-4",
    dueDate: "06/10/2025",
    fineAmount: 50.00,
    amount: 100.00
  },
  {
    feesGroup: "192-1001-Hudson",
    feesType: "Hudson (1001) - Installment-5",
    feesCode: "Hudson (1001) - Installment-5",
    dueDate: "07/10/2025",
    fineAmount: 50.00,
    amount: 100.00
  }
];

export default function QuickFees() {
  const [selectedClass, setSelectedClass] = useState("Class 1");
  const [selectedSection, setSelectedSection] = useState("A");
  const [selectedStudent, setSelectedStudent] = useState("Hudson (1001)");
  const [quickFees] = useState<QuickFee[]>(mockQuickFees);

  const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];
  const sections = ["A", "B", "C", "D"];
  const students = ["Hudson (1001)", "Marlie (1020)", "Ayan Desai (120036)"];
 const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>
    <div className="min-h-screen bg-background p-6" data-testid="quick-fees-page">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <Zap className="w-6 h-6 mr-2" />
            Quick Fees Master
          </CardTitle>
        </CardHeader>

        <CardContent>
          {/* Selection Criteria */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <Label htmlFor="class">Class</Label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((cls) => (
                    <SelectItem key={cls} value={cls}>
                      {cls}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="section">Section</Label>
              <Select value={selectedSection} onValueChange={setSelectedSection}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Section" />
                </SelectTrigger>
                <SelectContent>
                  {sections.map((section) => (
                    <SelectItem key={section} value={section}>
                      {section}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="student">Student</Label>
              <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Student" />
                </SelectTrigger>
                <SelectContent>
                  {students.map((student) => (
                    <SelectItem key={student} value={student}>
                      {student}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Fee Already Assigned Notice */}
          <Alert className="mb-6">
            <AlertDescription className="text-blue-600">
              Note: Fee Already Assigned
            </AlertDescription>
          </Alert>

          {/* Quick Fees Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fees Group</TableHead>
                  <TableHead>Fees Type</TableHead>
                  <TableHead>Fees Code</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Fine Amount ($)</TableHead>
                  <TableHead>Amount ($)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quickFees.map((fee, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{fee.feesGroup}</TableCell>
                    <TableCell>{fee.feesType}</TableCell>
                    <TableCell>{fee.feesCode}</TableCell>
                    <TableCell>{fee.dueDate}</TableCell>
                    <TableCell>{fee.fineAmount.toFixed(2)}</TableCell>
                    <TableCell>{fee.amount.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-muted-foreground">
              Showing {quickFees.length} fee entries for {selectedStudent}
            </div>
            <Button>
              Assign Fees
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
      </SidebarInset>
                    </div>
                </SidebarProvider>
  );
}
