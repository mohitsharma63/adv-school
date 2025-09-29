import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, Phone, Mail, Edit, Trash2, Search, FileDown, FileUp, Users, Calendar, TrendingUp } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import type { AdmissionEnquiry, InsertAdmissionEnquiry } from "@shared/schema";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import DashboardHeader from "@/components/DashboardHeader";

export default function AdmissionEnquiry() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingEnquiry, setEditingEnquiry] = useState<AdmissionEnquiry | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [enquiryFromDate, setEnquiryFromDate] = useState("");
  const [enquiryToDate, setEnquiryToDate] = useState("");
  const queryClient = useQueryClient();

  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };

  const { data: enquiries = [], isLoading } = useQuery<AdmissionEnquiry[]>({
    queryKey: ["/api/admission-enquiries"],
  });

  const createMutation = useMutation({
    mutationFn: async (data: InsertAdmissionEnquiry) => {
      const response = await apiRequest("POST", "/api/admission-enquiries", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admission-enquiries"] });
      setIsAddDialogOpen(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<AdmissionEnquiry> }) => {
      const response = await apiRequest("PUT", `/api/admission-enquiries/${id}`, data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admission-enquiries"] });
      setEditingEnquiry(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiRequest("DELETE", `/api/admission-enquiries/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admission-enquiries"] });
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const enquiryData: InsertAdmissionEnquiry = {
      studentName: formData.get("studentName") as string,
      parentName: formData.get("parentName") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      class: formData.get("class") as string,
      source: formData.get("source") as string,
      enquiryDate: formData.get("enquiryDate") as string,
      nextFollowUpDate: formData.get("nextFollowUpDate") as string,
      status: (formData.get("status") as "Active" | "Converted" | "Closed") || "Active",
      remarks: formData.get("remarks") as string,
    };

    if (editingEnquiry) {
      updateMutation.mutate({ id: editingEnquiry.id, data: enquiryData });
    } else {
      createMutation.mutate(enquiryData);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Converted": return "bg-green-100 text-green-800 border-green-200";
      case "Closed": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const filteredEnquiries = enquiries.filter(enquiry => {
    const matchesSearch = enquiry.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         enquiry.parentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = !classFilter || classFilter === "all" || enquiry.class === classFilter;
    const matchesSource = !sourceFilter || sourceFilter === "all" || enquiry.source === sourceFilter;
    const matchesStatus = !statusFilter || statusFilter === "all" || enquiry.status === statusFilter;
    const matchesFromDate = !enquiryFromDate || enquiry.enquiryDate >= enquiryFromDate;
    const matchesToDate = !enquiryToDate || enquiry.enquiryDate <= enquiryToDate;

    return matchesSearch && matchesClass && matchesSource && matchesStatus && matchesFromDate && matchesToDate;
  });

  // Stats calculations
  const totalEnquiries = enquiries.length;
  const activeEnquiries = enquiries.filter(e => e.status === "Active").length;
  const convertedEnquiries = enquiries.filter(e => e.status === "Converted").length;
  const conversionRate = totalEnquiries > 0 ? Math.round((convertedEnquiries / totalEnquiries) * 100) : 0;

  if (isLoading) {
    return (
      <SidebarProvider>
        <div className="flex h-screen w-full">
          <AppSidebar onMenuItemClick={handleMenuItemClick} />
          <SidebarInset className="flex-1">
            <DashboardHeader title="Admission Enquiry" />
            <main className="flex-1 overflow-auto">
              <div className="p-6 space-y-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
                </div>
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar onMenuItemClick={handleMenuItemClick} />
        <SidebarInset className="flex-1">
          <DashboardHeader title="Admission Enquiry" />
          <main className="flex-1 overflow-auto">
            <div className="p-6 space-y-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">

              {/* Header Section */}
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">Admission Enquiry</h1>
                  <p className="text-gray-600 text-lg">Manage student admission enquiries efficiently</p>
                </div>
                <div className="flex space-x-3">
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
                    onClick={() => {
                      setEditingEnquiry(null);
                      setIsAddDialogOpen(true);
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Enquiry
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Enquiries</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">{totalEnquiries}</p>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Active Enquiries</p>
                        <p className="text-3xl font-bold text-blue-600 mt-1">{activeEnquiries}</p>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Calendar className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Converted</p>
                        <p className="text-3xl font-bold text-green-600 mt-1">{convertedEnquiries}</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-full">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                        <p className="text-3xl font-bold text-purple-600 mt-1">{conversionRate}%</p>
                      </div>
                      <div className="bg-purple-100 p-3 rounded-full">
                        <TrendingUp className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Search and Filter Section */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b">
                  <CardTitle className="text-xl text-gray-800 flex items-center">
                    <Search className="h-5 w-5 mr-2" />
                    Search & Filter Enquiries
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-4">
                    <div className="lg:col-span-2">
                      <Label htmlFor="search" className="text-sm font-medium text-gray-700">Search</Label>
                      <Input
                        id="search"
                        placeholder="Search by student or parent name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="class" className="text-sm font-medium text-gray-700">Class</Label>
                      <Select value={classFilter} onValueChange={setClassFilter}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="All Classes" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Classes</SelectItem>
                          <SelectItem value="Nursery">Nursery</SelectItem>
                          <SelectItem value="LKG">LKG</SelectItem>
                          <SelectItem value="UKG">UKG</SelectItem>
                          <SelectItem value="1st Grade">1st Grade</SelectItem>
                          <SelectItem value="2nd Grade">2nd Grade</SelectItem>
                          <SelectItem value="3rd Grade">3rd Grade</SelectItem>
                          <SelectItem value="4th Grade">4th Grade</SelectItem>
                          <SelectItem value="5th Grade">5th Grade</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="source" className="text-sm font-medium text-gray-700">Source</Label>
                      <Select value={sourceFilter} onValueChange={setSourceFilter}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="All Sources" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Sources</SelectItem>
                          <SelectItem value="Google Ads">Google Ads</SelectItem>
                          <SelectItem value="Front Office">Front Office</SelectItem>
                          <SelectItem value="Admission Campaign">Admission Campaign</SelectItem>
                          <SelectItem value="Referral">Referral</SelectItem>
                          <SelectItem value="Website">Website</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="status" className="text-sm font-medium text-gray-700">Status</Label>
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Status</SelectItem>
                          <SelectItem value="Active">Active</SelectItem>
                          <SelectItem value="Converted">Converted</SelectItem>
                          <SelectItem value="Closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="enquiryFromDate" className="text-sm font-medium text-gray-700">From Date</Label>
                      <Input
                        id="enquiryFromDate"
                        type="date"
                        value={enquiryFromDate}
                        onChange={(e) => setEnquiryFromDate(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="enquiryToDate" className="text-sm font-medium text-gray-700">To Date</Label>
                      <Input
                        id="enquiryToDate"
                        type="date"
                        value={enquiryToDate}
                        onChange={(e) => setEnquiryToDate(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-end space-x-2">
                      <Button variant="outline" className="flex-1">
                        <FileDown className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <FileUp className="h-4 w-4 mr-2" />
                        Import
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Table */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b">
                  <CardTitle className="text-xl text-gray-800">
                    Enquiry Records ({filteredEnquiries.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="">
                        <TableRow>
                          <TableHead className="font-semibold text-gray-700">Student Details</TableHead>
                          <TableHead className="font-semibold text-gray-700">Contact</TableHead>
                          <TableHead className="font-semibold text-gray-700">Class</TableHead>
                          <TableHead className="font-semibold text-gray-700">Source</TableHead>
                          <TableHead className="font-semibold text-gray-700">Enquiry Date</TableHead>
                          <TableHead className="font-semibold text-gray-700">Follow Up</TableHead>
                          <TableHead className="font-semibold text-gray-700">Status</TableHead>
                          <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredEnquiries.map((enquiry) => (
                          <TableRow key={enquiry.id} className=" transition-colors duration-200">
                            <TableCell>
                              <div>
                                <div className="font-medium text-gray-900">{enquiry.studentName}</div>
                                <div className="text-sm text-gray-600">Parent: {enquiry.parentName}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium text-gray-900">{enquiry.phone}</div>
                                {enquiry.email && <div className="text-sm text-gray-600">{enquiry.email}</div>}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                {enquiry.class}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm font-medium text-gray-700">{enquiry.source}</span>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm text-gray-600">{enquiry.enquiryDate}</span>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm text-gray-600">{enquiry.nextFollowUpDate || "Not scheduled"}</span>
                            </TableCell>
                            <TableCell>
                              <Badge className={getStatusColor(enquiry.status)}>
                                {enquiry.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-1">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="p-2 h-8 w-8 hover:bg-green-50 hover:border-green-200"
                                  title="Call"
                                >
                                  <Phone className="h-3 w-3 text-green-600" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="p-2 h-8 w-8 hover:bg-blue-50 hover:border-blue-200"
                                  title="Email"
                                >
                                  <Mail className="h-3 w-3 text-blue-600" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="p-2 h-8 w-8 hover:bg-yellow-50 hover:border-yellow-200"
                                  title="Edit"
                                  onClick={() => {
                                    setEditingEnquiry(enquiry);
                                    setIsAddDialogOpen(true);
                                  }}
                                >
                                  <Edit className="h-3 w-3 text-yellow-600" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="p-2 h-8 w-8 hover:bg-red-50 hover:border-red-200"
                                  title="Delete"
                                  onClick={() => deleteMutation.mutate(enquiry.id)}
                                >
                                  <Trash2 className="h-3 w-3 text-red-600" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                        {filteredEnquiries.length === 0 && (
                          <TableRow>
                            <TableCell colSpan={8} className="text-center py-8">
                              <div className="text-gray-500">
                                <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                <p className="text-lg font-medium">No enquiries found</p>
                                <p className="text-sm">Try adjusting your search criteria or add a new enquiry</p>
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {/* Add/Edit Dialog */}
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900">
                      {editingEnquiry ? "Edit Enquiry" : "Add New Enquiry"}
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="studentName" className="text-sm font-medium text-gray-700">
                          Student Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="studentName"
                          name="studentName"
                          defaultValue={editingEnquiry?.studentName || ""}
                          placeholder="Enter student name"
                          required
                          className="bg-white border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentName" className="text-sm font-medium text-gray-700">
                          Parent Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="parentName"
                          name="parentName"
                          defaultValue={editingEnquiry?.parentName || ""}
                          placeholder="Enter parent name"
                          required
                          className="bg-white border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          defaultValue={editingEnquiry?.phone || ""}
                          placeholder="Enter phone number"
                          required
                          className="bg-white border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          defaultValue={editingEnquiry?.email || ""}
                          placeholder="Enter email address"
                          className="bg-white border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="class" className="text-sm font-medium text-gray-700">Class</Label>
                        <Select name="class" defaultValue={editingEnquiry?.class || ""}>
                          <SelectTrigger className="bg-white border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm">
                            <SelectValue placeholder="Select Class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Nursery">Nursery</SelectItem>
                            <SelectItem value="LKG">LKG</SelectItem>
                            <SelectItem value="UKG">UKG</SelectItem>
                            <SelectItem value="1st Grade">1st Grade</SelectItem>
                            <SelectItem value="2nd Grade">2nd Grade</SelectItem>
                            <SelectItem value="3rd Grade">3rd Grade</SelectItem>
                            <SelectItem value="4th Grade">4th Grade</SelectItem>
                            <SelectItem value="5th Grade">5th Grade</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="source" className="text-sm font-medium text-gray-700">Source</Label>
                        <Select name="source" defaultValue={editingEnquiry?.source || ""}>
                          <SelectTrigger className="bg-white border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm">
                            <SelectValue placeholder="Select Source" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Google Ads">Google Ads</SelectItem>
                            <SelectItem value="Front Office">Front Office</SelectItem>
                            <SelectItem value="Admission Campaign">Admission Campaign</SelectItem>
                            <SelectItem value="Referral">Referral</SelectItem>
                            <SelectItem value="Website">Website</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="enquiryDate" className="text-sm font-medium text-gray-700">Enquiry Date</Label>
                        <Input
                          id="enquiryDate"
                          name="enquiryDate"
                          type="date"
                          defaultValue={editingEnquiry?.enquiryDate || new Date().toISOString().split('T')[0]}
                          className="bg-white border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nextFollowUpDate" className="text-sm font-medium text-gray-700">Next Follow Up Date</Label>
                        <Input
                          id="nextFollowUpDate"
                          name="nextFollowUpDate"
                          type="date"
                          defaultValue={editingEnquiry?.nextFollowUpDate || ""}
                          className="bg-white border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="status" className="text-sm font-medium text-gray-700">Status</Label>
                        <Select name="status" defaultValue={editingEnquiry?.status || "Active"}>
                          <SelectTrigger className="bg-white border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Active">Active</SelectItem>
                            <SelectItem value="Converted">Converted</SelectItem>
                            <SelectItem value="Closed">Closed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="remarks" className="text-sm font-medium text-gray-700">Remarks</Label>
                      <Input
                        id="remarks"
                        name="remarks"
                        defaultValue={editingEnquiry?.remarks || ""}
                        placeholder="Add any additional notes or comments..."
                        className="bg-white border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm"
                      />
                    </div>
                    <div className="flex justify-end space-x-3 pt-4 border-t">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setIsAddDialogOpen(false);
                          setEditingEnquiry(null);
                        }}
                        className="px-6"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6"
                      >
                        {editingEnquiry ? "Update Enquiry" : "Create Enquiry"}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}