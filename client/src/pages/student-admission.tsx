
import { useState } from "react";
import { Upload, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

interface StudentAdmissionData {
  // Basic Details
  admissionNo: string;
  rollNumber: string;
  class: string;
  section: string;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  category: string;
  religion: string;
  caste: string;
  mobileNumber: string;
  email: string;
  admissionDate: string;
  studentPhoto: File | null;
  bloodGroup: string;
  house: string;
  height: string;
  weight: string;
  measurementDate: string;
  medicalHistory: string;
  
  // Transport Details
  routeList: string;
  pickupPoint: string;
  feesMonth: string;
  
  // Hostel Details
  hostel: string;
  roomNo: string;
  
  // Fees Details
  selectedFees: string[];
  
  // Fee Discounts
  selectedDiscounts: string[];
  
  // Parent/Guardian Details
  fatherName: string;
  fatherPhone: string;
  fatherOccupation: string;
  fatherPhoto: File | null;
  motherName: string;
  motherPhone: string;
  motherOccupation: string;
  motherPhoto: File | null;
  guardianType: string;
  guardianName: string;
  guardianRelation: string;
  guardianEmail: string;
  guardianPhone: string;
  guardianOccupation: string;
  guardianAddress: string;
  guardianPhoto: File | null;
}

const initialFormData: StudentAdmissionData = {
  admissionNo: "",
  rollNumber: "",
  class: "",
  section: "",
  firstName: "",
  lastName: "",
  gender: "",
  dateOfBirth: "",
  category: "",
  religion: "",
  caste: "",
  mobileNumber: "",
  email: "",
  admissionDate: "09/29/2025",
  studentPhoto: null,
  bloodGroup: "",
  house: "",
  height: "",
  weight: "",
  measurementDate: "09/29/2025",
  medicalHistory: "",
  routeList: "",
  pickupPoint: "",
  feesMonth: "",
  hostel: "",
  roomNo: "",
  selectedFees: [],
  selectedDiscounts: [],
  fatherName: "",
  fatherPhone: "",
  fatherOccupation: "",
  fatherPhoto: null,
  motherName: "",
  motherPhone: "",
  motherOccupation: "",
  motherPhoto: null,
  guardianType: "Father",
  guardianName: "",
  guardianRelation: "",
  guardianEmail: "",
  guardianPhone: "",
  guardianOccupation: "",
  guardianAddress: "",
  guardianPhoto: null,
};

const feeOptions = [
  { id: "class1-general", label: "Class 1 General", amount: 5600.00 },
  { id: "class1-lump", label: "Class 1 Lump Sum", amount: 2750.00 },
  { id: "class1-installment1", label: "Class 1 - I Installment", amount: 2000.00 },
  { id: "class1-installment2", label: "Class 1-II Installment", amount: 350.00 },
  { id: "class2-general", label: "Class 2 General", amount: 6100.00 },
  { id: "class2-lump", label: "Class 2 Lump Sum", amount: 3000.00 },
  { id: "class2-installment", label: "Class 2 - I Installment", amount: 350.00 },
];

const discountOptions = [
  { id: "sibling-discount", label: "Sibling Discount - sibling-disc" },
  { id: "handicapped-discount", label: "Handicapped Discount - handicap-disc" },
  { id: "class-topper-discount", label: "Class Topper Discount - cls-top-disc" },
];

export default function StudentAdmission() {
  const [formData, setFormData] = useState<StudentAdmissionData>(initialFormData);
  const [siblings, setSiblings] = useState<number>(1);

  const handleInputChange = (field: keyof StudentAdmissionData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (field: keyof StudentAdmissionData, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleFeeSelection = (feeId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      selectedFees: checked 
        ? [...prev.selectedFees, feeId]
        : prev.selectedFees.filter(id => id !== feeId)
    }));
  };

  const handleDiscountSelection = (discountId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      selectedDiscounts: checked 
        ? [...prev.selectedDiscounts, discountId]
        : prev.selectedDiscounts.filter(id => id !== discountId)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your API
  };

  const addSibling = () => {
    setSiblings(prev => prev + 1);
  };

  const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];
  const sections = ["A", "B", "C", "D"];
  const genders = ["Male", "Female", "Other"];
  const categories = ["General", "OBC", "SC", "ST"];
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const houses = ["Red House", "Blue House", "Green House", "Yellow House"];
 const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>
    <div className="min-h-screen bg-background p-6" data-testid="student-admission-page">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold">Student Admission</CardTitle>
          <Button variant="outline" data-testid="import-student-btn">
            Import Student
          </Button>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Student Information */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="admissionNo">Admission No *</Label>
                <Input
                  id="admissionNo"
                  value={formData.admissionNo}
                  onChange={(e) => handleInputChange('admissionNo', e.target.value)}
                  data-testid="admission-no-input"
                />
              </div>
              <div>
                <Label htmlFor="rollNumber">Roll Number</Label>
                <Input
                  id="rollNumber"
                  value={formData.rollNumber}
                  onChange={(e) => handleInputChange('rollNumber', e.target.value)}
                  data-testid="roll-number-input"
                />
              </div>
              <div>
                <Label htmlFor="class">Class *</Label>
                <Select value={formData.class} onValueChange={(value) => handleInputChange('class', value)}>
                  <SelectTrigger data-testid="class-select">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((cls) => (
                      <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="section">Section *</Label>
                <Select value={formData.section} onValueChange={(value) => handleInputChange('section', value)}>
                  <SelectTrigger data-testid="section-select">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections.map((section) => (
                      <SelectItem key={section} value={section}>{section}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  data-testid="first-name-input"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  data-testid="last-name-input"
                />
              </div>
              <div>
                <Label htmlFor="gender">Gender *</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                  <SelectTrigger data-testid="gender-select">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {genders.map((gender) => (
                      <SelectItem key={gender} value={gender}>{gender}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date Of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  data-testid="dob-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger data-testid="category-select">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="religion">Religion</Label>
                <Input
                  id="religion"
                  value={formData.religion}
                  onChange={(e) => handleInputChange('religion', e.target.value)}
                  data-testid="religion-input"
                />
              </div>
              <div>
                <Label htmlFor="caste">Caste</Label>
                <Input
                  id="caste"
                  value={formData.caste}
                  onChange={(e) => handleInputChange('caste', e.target.value)}
                  data-testid="caste-input"
                />
              </div>
              <div>
                <Label htmlFor="mobileNumber">Mobile Number</Label>
                <Input
                  id="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                  data-testid="mobile-input"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  data-testid="email-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="admissionDate">Admission Date</Label>
                <Input
                  id="admissionDate"
                  type="date"
                  value={formData.admissionDate}
                  onChange={(e) => handleInputChange('admissionDate', e.target.value)}
                  data-testid="admission-date-input"
                />
              </div>
              <div>
                <Label htmlFor="studentPhoto">Student Photo (100px X 100px)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500">Drag and drop a file here or click</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange('studentPhoto', e.target.files?.[0] || null)}
                    className="hidden"
                    id="student-photo-upload"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="bloodGroup">Blood Group</Label>
                <Select value={formData.bloodGroup} onValueChange={(value) => handleInputChange('bloodGroup', value)}>
                  <SelectTrigger data-testid="blood-group-select">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {bloodGroups.map((group) => (
                      <SelectItem key={group} value={group}>{group}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="house">House</Label>
                <Select value={formData.house} onValueChange={(value) => handleInputChange('house', value)}>
                  <SelectTrigger data-testid="house-select">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {houses.map((house) => (
                      <SelectItem key={house} value={house}>{house}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  value={formData.height}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  placeholder="Height in cm"
                  data-testid="height-input"
                />
              </div>
              <div>
                <Label htmlFor="weight">Weight</Label>
                <Input
                  id="weight"
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  placeholder="Weight in kg"
                  data-testid="weight-input"
                />
              </div>
              <div>
                <Label htmlFor="measurementDate">Measurement Date</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="measurementDate"
                    type="date"
                    value={formData.measurementDate}
                    onChange={(e) => handleInputChange('measurementDate', e.target.value)}
                    data-testid="measurement-date-input"
                  />
                  <Button type="button" variant="outline" onClick={addSibling} data-testid="add-sibling-btn">
                    + Add Sibling
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="medicalHistory">Medical History</Label>
              <Textarea
                id="medicalHistory"
                value={formData.medicalHistory}
                onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                placeholder="Enter medical history details"
                rows={4}
                data-testid="medical-history-textarea"
              />
            </div>

            {/* Transport Details */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Transport Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="routeList">Route List</Label>
                  <Select value={formData.routeList} onValueChange={(value) => handleInputChange('routeList', value)}>
                    <SelectTrigger data-testid="route-list-select">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="route1">Route 1</SelectItem>
                      <SelectItem value="route2">Route 2</SelectItem>
                      <SelectItem value="route3">Route 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="pickupPoint">Pickup Point</Label>
                  <Select value={formData.pickupPoint} onValueChange={(value) => handleInputChange('pickupPoint', value)}>
                    <SelectTrigger data-testid="pickup-point-select">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="point1">Point 1</SelectItem>
                      <SelectItem value="point2">Point 2</SelectItem>
                      <SelectItem value="point3">Point 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="feesMonth">Fees Month</Label>
                  <Select value={formData.feesMonth} onValueChange={(value) => handleInputChange('feesMonth', value)}>
                    <SelectTrigger data-testid="fees-month-select">
                      <SelectValue placeholder="Select Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="january">January</SelectItem>
                      <SelectItem value="february">February</SelectItem>
                      <SelectItem value="march">March</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Hostel Details */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Hostel Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="hostel">Hostel</Label>
                  <Select value={formData.hostel} onValueChange={(value) => handleInputChange('hostel', value)}>
                    <SelectTrigger data-testid="hostel-select">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hostel1">Boys Hostel</SelectItem>
                      <SelectItem value="hostel2">Girls Hostel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="roomNo">Room No.</Label>
                  <Select value={formData.roomNo} onValueChange={(value) => handleInputChange('roomNo', value)}>
                    <SelectTrigger data-testid="room-no-select">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="room101">Room 101</SelectItem>
                      <SelectItem value="room102">Room 102</SelectItem>
                      <SelectItem value="room103">Room 103</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Fees Details */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Fees Details</h3>
              <div className="space-y-3">
                {feeOptions.map((fee) => (
                  <div key={fee.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={fee.id}
                        checked={formData.selectedFees.includes(fee.id)}
                        onCheckedChange={(checked) => handleFeeSelection(fee.id, checked as boolean)}
                      />
                      <Label htmlFor={fee.id} className="flex-1">{fee.label}</Label>
                    </div>
                    <span className="font-semibold">{fee.amount.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fees Discount Details */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Fees Discount Details</h3>
              <div className="space-y-3">
                {discountOptions.map((discount) => (
                  <div key={discount.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Checkbox
                      id={discount.id}
                      checked={formData.selectedDiscounts.includes(discount.id)}
                      onCheckedChange={(checked) => handleDiscountSelection(discount.id, checked as boolean)}
                    />
                    <Label htmlFor={discount.id}>{discount.label}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Parent Guardian Detail */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Parent Guardian Detail</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <Label htmlFor="fatherName">Father Name</Label>
                  <Input
                    id="fatherName"
                    value={formData.fatherName}
                    onChange={(e) => handleInputChange('fatherName', e.target.value)}
                    data-testid="father-name-input"
                  />
                </div>
                <div>
                  <Label htmlFor="fatherPhone">Father Phone</Label>
                  <Input
                    id="fatherPhone"
                    value={formData.fatherPhone}
                    onChange={(e) => handleInputChange('fatherPhone', e.target.value)}
                    data-testid="father-phone-input"
                  />
                </div>
                <div>
                  <Label htmlFor="fatherOccupation">Father Occupation</Label>
                  <Input
                    id="fatherOccupation"
                    value={formData.fatherOccupation}
                    onChange={(e) => handleInputChange('fatherOccupation', e.target.value)}
                    data-testid="father-occupation-input"
                  />
                </div>
                <div>
                  <Label>Father Photo (100px X 100px)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-xs text-gray-500">Drag and drop a file here or click</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <Label htmlFor="motherName">Mother Name</Label>
                  <Input
                    id="motherName"
                    value={formData.motherName}
                    onChange={(e) => handleInputChange('motherName', e.target.value)}
                    data-testid="mother-name-input"
                  />
                </div>
                <div>
                  <Label htmlFor="motherPhone">Mother Phone</Label>
                  <Input
                    id="motherPhone"
                    value={formData.motherPhone}
                    onChange={(e) => handleInputChange('motherPhone', e.target.value)}
                    data-testid="mother-phone-input"
                  />
                </div>
                <div>
                  <Label htmlFor="motherOccupation">Mother Occupation</Label>
                  <Input
                    id="motherOccupation"
                    value={formData.motherOccupation}
                    onChange={(e) => handleInputChange('motherOccupation', e.target.value)}
                    data-testid="mother-occupation-input"
                  />
                </div>
                <div>
                  <Label>Mother Photo (100px X 100px)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-xs text-gray-500">Drag and drop a file here or click</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <Label>If Guardian Is *</Label>
                <RadioGroup
                  value={formData.guardianType}
                  onValueChange={(value) => handleInputChange('guardianType', value)}
                  className="flex space-x-6 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Father" id="father" />
                    <Label htmlFor="father">Father</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Mother" id="mother" />
                    <Label htmlFor="mother">Mother</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="guardianName">Guardian Name *</Label>
                  <Input
                    id="guardianName"
                    value={formData.guardianName}
                    onChange={(e) => handleInputChange('guardianName', e.target.value)}
                    data-testid="guardian-name-input"
                  />
                </div>
                <div>
                  <Label htmlFor="guardianRelation">Guardian Relation</Label>
                  <Input
                    id="guardianRelation"
                    value={formData.guardianRelation}
                    onChange={(e) => handleInputChange('guardianRelation', e.target.value)}
                    data-testid="guardian-relation-input"
                  />
                </div>
                <div>
                  <Label htmlFor="guardianEmail">Guardian Email</Label>
                  <Input
                    id="guardianEmail"
                    type="email"
                    value={formData.guardianEmail}
                    onChange={(e) => handleInputChange('guardianEmail', e.target.value)}
                    data-testid="guardian-email-input"
                  />
                </div>
                <div>
                  <Label>Guardian Photo (100px X 100px)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-xs text-gray-500">Drag and drop a file here or click</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <Label htmlFor="guardianPhone">Guardian Phone *</Label>
                  <Input
                    id="guardianPhone"
                    value={formData.guardianPhone}
                    onChange={(e) => handleInputChange('guardianPhone', e.target.value)}
                    data-testid="guardian-phone-input"
                  />
                </div>
                <div>
                  <Label htmlFor="guardianOccupation">Guardian Occupation</Label>
                  <Input
                    id="guardianOccupation"
                    value={formData.guardianOccupation}
                    onChange={(e) => handleInputChange('guardianOccupation', e.target.value)}
                    data-testid="guardian-occupation-input"
                  />
                </div>
                <div>
                  <Label htmlFor="guardianAddress">Guardian Address</Label>
                  <Input
                    id="guardianAddress"
                    value={formData.guardianAddress}
                    onChange={(e) => handleInputChange('guardianAddress', e.target.value)}
                    data-testid="guardian-address-input"
                  />
                </div>
              </div>
            </div>

            {/* Add More Details */}
            <div>
              <Button type="button" variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add More Details
              </Button>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button type="submit" className="px-8" data-testid="save-btn">
                Save
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
      </SidebarInset>
                </div>
            </SidebarProvider>
  );
}
