
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

interface FeeGroup {
  id: string;
  name: string;
  fees: FeeType[];
}

interface FeeType {
  id: string;
  name: string;
  checked: boolean;
}

const mockFeeGroups: FeeGroup[] = [
  {
    id: "class1-general",
    name: "Class 1 General",
    fees: [
      { id: "admission-fees", name: "Admission Fees (admission-fees)", checked: true },
      { id: "april-month-fees", name: "April Month Fees (apr-month-fees)", checked: true },
      { id: "may-month-fees", name: "May Month Fees (may-month-fees)", checked: true }
    ]
  }
];

export default function SearchDueFees() {
  const [selectedFeesGroup, setSelectedFeesGroup] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [feeGroups, setFeeGroups] = useState<FeeGroup[]>(mockFeeGroups);

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    setFeeGroups(feeGroups.map(group => ({
      ...group,
      fees: group.fees.map(fee => ({ ...fee, checked }))
    })));
  };

  const handleFeeCheck = (groupId: string, feeId: string, checked: boolean) => {
    setFeeGroups(feeGroups.map(group => 
      group.id === groupId 
        ? {
            ...group,
            fees: group.fees.map(fee => 
              fee.id === feeId ? { ...fee, checked } : fee
            )
          }
        : group
    ));
  };

  const handleSearch = () => {
    console.log("Search due fees with criteria:", {
      feesGroup: selectedFeesGroup,
      class: selectedClass,
      section: selectedSection,
      selectedFees: feeGroups.flatMap(group => 
        group.fees.filter(fee => fee.checked).map(fee => fee.id)
      )
    });
  };

  const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];
  const sections = ["A", "B", "C", "D"];
 const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>
    <div className="min-h-screen bg-background p-6" data-testid="search-due-fees-page">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Search Due Fees</CardTitle>
        </CardHeader>

        <CardContent>
          {/* Select Criteria Section */}
          <div className=" p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-4">Select Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <Label htmlFor="feesGroup">Fees Group *</Label>
                <Select value={selectedFeesGroup} onValueChange={setSelectedFeesGroup}>
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
                <Label htmlFor="class">Class</Label>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
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
                    <SelectValue placeholder="Select" />
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
            </div>

            {/* Fee Selection */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="select-all"
                  checked={selectAll}
                  onCheckedChange={handleSelectAll}
                />
                <Label htmlFor="select-all" className="font-medium">Select All</Label>
              </div>

              {feeGroups.map((group) => (
                <div key={group.id} className="space-y-2">
                  <h4 className="font-medium text-sm text-muted-foreground">{group.name}</h4>
                  {group.fees.map((fee) => (
                    <div key={fee.id} className="flex items-center space-x-2 ml-4">
                      <Checkbox
                        id={fee.id}
                        checked={fee.checked}
                        onCheckedChange={(checked) => handleFeeCheck(group.id, fee.id, checked as boolean)}
                      />
                      <Label htmlFor={fee.id} className="text-sm">{fee.name}</Label>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button onClick={handleSearch} className="w-32">
                <Search className="w-4 h-4 mr-2" />
                Search
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
