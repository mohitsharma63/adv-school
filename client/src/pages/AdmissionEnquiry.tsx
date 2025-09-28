
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Phone, Edit, Trash2, Plus } from "lucide-react";

const enquiryData = [
  {
    name: "Charlie Barrett",
    phone: "8905674352",
    source: "Google Ads",
    enquiryDate: "09/26/2025",
    lastFollowUpDate: "10/30/2025",
    nextFollowUpDate: "10/25/2025",
    status: "Active"
  },
  {
    name: "David Wilson",
    phone: "9067845634",
    source: "Front Office",
    enquiryDate: "09/22/2025",
    lastFollowUpDate: "",
    nextFollowUpDate: "10/25/2025",
    status: "Active"
  },
  {
    name: "Darren K. Hubbard",
    phone: "0890567376",
    source: "Admission Campaign",
    enquiryDate: "09/16/2025",
    lastFollowUpDate: "",
    nextFollowUpDate: "10/18/2025",
    status: "Active"
  },
  {
    name: "Sweta Sharma",
    phone: "8907685463",
    source: "Google Ads",
    enquiryDate: "09/11/2025",
    lastFollowUpDate: "",
    nextFollowUpDate: "10/15/2025",
    status: "Active"
  },
  {
    name: "Mukesh Kumar",
    phone: "0907896765",
    source: "Google Ads",
    enquiryDate: "09/11/2025",
    lastFollowUpDate: "",
    nextFollowUpDate: "10/12/2025",
    status: "Active"
  },
  {
    name: "Charlie Barrett",
    phone: "8905674352",
    source: "Google Ads",
    enquiryDate: "08/26/2025",
    lastFollowUpDate: "",
    nextFollowUpDate: "09/30/2025",
    status: "Active"
  },
  {
    name: "David Wilson",
    phone: "9067845634",
    source: "Front Office",
    enquiryDate: "08/21/2025",
    lastFollowUpDate: "",
    nextFollowUpDate: "09/25/2025",
    status: "Active"
  },
  {
    name: "Darren K. Hubbard",
    phone: "0890567376",
    source: "Admission Campaign",
    enquiryDate: "08/16/2025",
    lastFollowUpDate: "",
    nextFollowUpDate: "09/18/2025",
    status: "Active"
  },
  {
    name: "Sweta Sharma",
    phone: "8907685463",
    source: "Google Ads",
    enquiryDate: "08/11/2025",
    lastFollowUpDate: "",
    nextFollowUpDate: "09/14/2025",
    status: "Active"
  },
  {
    name: "Mukesh Kumar",
    phone: "0907896765",
    source: "Google Ads",
    enquiryDate: "08/11/2025",
    lastFollowUpDate: "",
    nextFollowUpDate: "09/12/2025",
    status: "Active"
  },
  {
    name: "Charlie Barrett",
    phone: "8905674352",
    source: "Google Ads",
    enquiryDate: "07/26/2025",
    lastFollowUpDate: "",
    nextFollowUpDate: "07/30/2025",
    status: "Active"
  },
  {
    name: "David Wilson",
    phone: "9067845634",
    source: "Front Office",
    enquiryDate: "07/21/2025",
    lastFollowUpDate: "",
    nextFollowUpDate: "07/25/2025",
    status: "Active"
  },
  {
    name: "Darren K. Hubbard",
    phone: "0890567376",
    source: "Admission Campaign",
    enquiryDate: "07/16/2025",
    lastFollowUpDate: "",
    nextFollowUpDate: "07/18/2025",
    status: "Active"
  }
];

export default function AdmissionEnquiry() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const [enquiryFromDate, setEnquiryFromDate] = useState("");
  const [enquiryToDate, setEnquiryToDate] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Active");

  const filteredData = enquiryData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedSource === "" || item.source === selectedSource) &&
    (selectedStatus === "" || item.status === selectedStatus)
  );

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admission Enquiry</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add
        </Button>
      </div>

      {/* Search Criteria Card */}
      <Card>
        <CardHeader>
          <CardTitle>Select Criteria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="class">Class</Label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Class 1</SelectItem>
                  <SelectItem value="2">Class 2</SelectItem>
                  <SelectItem value="3">Class 3</SelectItem>
                  <SelectItem value="4">Class 4</SelectItem>
                  <SelectItem value="5">Class 5</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="source">Source</Label>
              <Select value={selectedSource} onValueChange={setSelectedSource}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Sources</SelectItem>
                  <SelectItem value="Google Ads">Google Ads</SelectItem>
                  <SelectItem value="Front Office">Front Office</SelectItem>
                  <SelectItem value="Admission Campaign">Admission Campaign</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="enquiry-from-date">Enquiry From Date</Label>
              <Input 
                id="enquiry-from-date" 
                type="date" 
                value={enquiryFromDate}
                onChange={(e) => setEnquiryFromDate(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="enquiry-to-date">Enquiry To Date</Label>
              <Input 
                id="enquiry-to-date" 
                type="date" 
                value={enquiryToDate}
                onChange={(e) => setEnquiryToDate(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Active" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="mt-4">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </CardContent>
      </Card>

      {/* Admission Enquiry Table */}
      <Card>
        <CardHeader>
          <CardTitle>Admission Enquiry</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              placeholder="Search by Student Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Enquiry Date</TableHead>
                  <TableHead>Last Follow Up Date</TableHead>
                  <TableHead>Next Follow Up Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((enquiry, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{enquiry.name}</TableCell>
                    <TableCell>{enquiry.phone}</TableCell>
                    <TableCell>{enquiry.source}</TableCell>
                    <TableCell>{enquiry.enquiryDate}</TableCell>
                    <TableCell>{enquiry.lastFollowUpDate || "-"}</TableCell>
                    <TableCell>{enquiry.nextFollowUpDate}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={enquiry.status === "Active" ? "default" : "secondary"}
                        className="bg-green-100 text-green-800 hover:bg-green-200"
                      >
                        {enquiry.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
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
  );
}
