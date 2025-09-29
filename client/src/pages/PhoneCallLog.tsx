
import { useState } from "react";
import { Plus, Search, Edit, Trash2, MoreVertical, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AppSidebar from "@/components/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

interface PhoneCallLog {
    id: number;
    name: string;
    phone: string;
    date: string;
    nextFollowUpDate: string;
    callType: "Incoming" | "Outgoing";
    duration?: string;
    description?: string;
    note?: string;
}

export default function PhoneCallLog() {
    const [searchTerm, setSearchTerm] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        description: "",
        nextFollowUpDate: "",
        callDuration: "",
        note: "",
        callType: "Outgoing" as "Incoming" | "Outgoing",
    });

    // Sample data
    const [callLogs, setCallLogs] = useState<PhoneCallLog[]>([
        {
            id: 1,
            name: "Cleaning Services",
            phone: "9056734523",
            date: "09/30/2025",
            nextFollowUpDate: "09/30/2025",
            callType: "Outgoing",
        },
        {
            id: 2,
            name: "Telephone Office",
            phone: "8096788546",
            date: "09/25/2025",
            nextFollowUpDate: "09/29/2025",
            callType: "Outgoing",
        },
        {
            id: 3,
            name: "Staff Health Checkup",
            phone: "9805674453",
            date: "09/22/2025",
            nextFollowUpDate: "09/23/2025",
            callType: "Outgoing",
        },
        {
            id: 4,
            name: "Electricity Office",
            phone: "8990566734",
            date: "09/16/2025",
            nextFollowUpDate: "09/18/2025",
            callType: "Incoming",
        },
        {
            id: 5,
            name: "New Book Stock",
            phone: "9056734523",
            date: "09/11/2025",
            nextFollowUpDate: "09/12/2025",
            callType: "Outgoing",
        },
        {
            id: 6,
            name: "Exam Center Office",
            phone: "7899806678",
            date: "09/05/2025",
            nextFollowUpDate: "09/09/2025",
            callType: "Incoming",
        },
    ]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelectChange = (value: string) => {
        setFormData({
            ...formData,
            callType: value as "Incoming" | "Outgoing",
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newLog: PhoneCallLog = {
            id: callLogs.length + 1,
            name: formData.name,
            phone: formData.phone,
            date: formData.date,
            nextFollowUpDate: formData.nextFollowUpDate,
            callType: formData.callType,
            duration: formData.callDuration,
            description: formData.description,
            note: formData.note,
        };
        setCallLogs([newLog, ...callLogs]);
        setFormData({
            name: "",
            phone: "",
            date: "",
            description: "",
            nextFollowUpDate: "",
            callDuration: "",
            note: "",
            callType: "Outgoing",
        });
    };

    const filteredLogs = callLogs.filter(log =>
        log.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.phone.includes(searchTerm)
    );
  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
    return (

        <SidebarProvider>
            <div className="flex h-screen w-full">
                <AppSidebar onMenuItemClick={handleMenuItemClick} />
                <SidebarInset>
                    <div className="min-h-screen bg-background" data-testid="page-phone-call-log">


                        <div className="container mx-auto px-4 py-8">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Add Phone Call Log Form */}
                                <div className="lg:col-span-1">
                                    <Card data-testid="add-call-log-form">
                                        <CardHeader>
                                            <CardTitle className="text-xl font-bold">Add Phone Call Log</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                <div>
                                                    <Label htmlFor="name">Name</Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                        data-testid="input-name"
                                                    />
                                                </div>

                                                <div>
                                                    <Label htmlFor="phone">Phone *</Label>
                                                    <Input
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        required
                                                        data-testid="input-phone"
                                                    />
                                                </div>

                                                <div>
                                                    <Label htmlFor="date">Date *</Label>
                                                    <Input
                                                        id="date"
                                                        name="date"
                                                        type="date"
                                                        value={formData.date}
                                                        onChange={handleInputChange}
                                                        required
                                                        data-testid="input-date"
                                                    />
                                                </div>

                                                <div>
                                                    <Label htmlFor="description">Description</Label>
                                                    <textarea
                                                        id="description"
                                                        name="description"
                                                        value={formData.description}
                                                        onChange={handleInputChange}
                                                        className="w-full px-3 py-2 border border-input rounded-md text-sm focus:ring-2 focus:ring-ring focus:border-transparent"
                                                        rows={3}
                                                        data-testid="textarea-description"
                                                    />
                                                </div>

                                                <div>
                                                    <Label htmlFor="nextFollowUpDate">Next Follow Up Date</Label>
                                                    <Input
                                                        id="nextFollowUpDate"
                                                        name="nextFollowUpDate"
                                                        type="date"
                                                        value={formData.nextFollowUpDate}
                                                        onChange={handleInputChange}
                                                        data-testid="input-next-follow-up-date"
                                                    />
                                                </div>

                                                <div>
                                                    <Label htmlFor="callDuration">Call Duration</Label>
                                                    <Input
                                                        id="callDuration"
                                                        name="callDuration"
                                                        placeholder="e.g., 5 minutes"
                                                        value={formData.callDuration}
                                                        onChange={handleInputChange}
                                                        data-testid="input-call-duration"
                                                    />
                                                </div>

                                                <div>
                                                    <Label htmlFor="note">Note</Label>
                                                    <textarea
                                                        id="note"
                                                        name="note"
                                                        value={formData.note}
                                                        onChange={handleInputChange}
                                                        className="w-full px-3 py-2 border border-input rounded-md text-sm focus:ring-2 focus:ring-ring focus:border-transparent"
                                                        rows={3}
                                                        data-testid="textarea-note"
                                                    />
                                                </div>

                                                <div>
                                                    <Label>Call Type</Label>
                                                    <div className="flex space-x-4 mt-2">
                                                        <label className="flex items-center space-x-2">
                                                            <input
                                                                type="radio"
                                                                name="callType"
                                                                value="Incoming"
                                                                checked={formData.callType === "Incoming"}
                                                                onChange={(e) => setFormData({ ...formData, callType: e.target.value as "Incoming" | "Outgoing" })}
                                                                data-testid="radio-incoming"
                                                            />
                                                            <span>Incoming</span>
                                                        </label>
                                                        <label className="flex items-center space-x-2">
                                                            <input
                                                                type="radio"
                                                                name="callType"
                                                                value="Outgoing"
                                                                checked={formData.callType === "Outgoing"}
                                                                onChange={(e) => setFormData({ ...formData, callType: e.target.value as "Incoming" | "Outgoing" })}
                                                                data-testid="radio-outgoing"
                                                            />
                                                            <span>Outgoing</span>
                                                        </label>
                                                    </div>
                                                </div>

                                                <Button type="submit" className="w-full" data-testid="button-submit">
                                                    <Plus className="w-4 h-4 mr-2" />
                                                    Add Call Log
                                                </Button>
                                            </form>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Phone Call Log List */}
                                <div className="lg:col-span-2">
                                    <Card data-testid="call-log-list">
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                                            <CardTitle className="text-xl font-bold">Phone Call Log List</CardTitle>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-sm text-muted-foreground">100</span>
                                                <Button variant="outline" size="sm">
                                                    <Eye className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            {/* Search Bar */}
                                            <div className="mb-6">
                                                <div className="relative">
                                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                                    <Input
                                                        placeholder="Search..."
                                                        value={searchTerm}
                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                        className="pl-10"
                                                        data-testid="search-input"
                                                    />
                                                </div>
                                            </div>

                                            {/* Table */}
                                            <div className="overflow-x-auto">
                                                <table className="w-full border-collapse">
                                                    <thead>
                                                        <tr className="border-b">
                                                            <th className="text-left py-3 px-2 font-medium">Name</th>
                                                            <th className="text-left py-3 px-2 font-medium">Phone</th>
                                                            <th className="text-left py-3 px-2 font-medium">Date</th>
                                                            <th className="text-left py-3 px-2 font-medium">Next Follow Up Date</th>
                                                            <th className="text-left py-3 px-2 font-medium">Call Type</th>
                                                            <th className="text-left py-3 px-2 font-medium">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {filteredLogs.map((log) => (
                                                            <tr key={log.id} className="border-b hover:bg-muted/50">
                                                                <td className="py-3 px-2">{log.name}</td>
                                                                <td className="py-3 px-2">{log.phone}</td>
                                                                <td className="py-3 px-2">{log.date}</td>
                                                                <td className="py-3 px-2">{log.nextFollowUpDate}</td>
                                                                <td className="py-3 px-2">
                                                                    <Badge
                                                                        variant={log.callType === "Incoming" ? "secondary" : "default"}
                                                                        data-testid={`badge-${log.callType.toLowerCase()}`}
                                                                    >
                                                                        {log.callType}
                                                                    </Badge>
                                                                </td>
                                                                <td className="py-3 px-2">
                                                                    <div className="flex items-center space-x-1">
                                                                        <Button variant="ghost" size="sm" data-testid="button-view">
                                                                            <Eye className="w-4 h-4" />
                                                                        </Button>
                                                                        <Button variant="ghost" size="sm" data-testid="button-edit">
                                                                            <Edit className="w-4 h-4" />
                                                                        </Button>
                                                                        <Button variant="ghost" size="sm" data-testid="button-delete">
                                                                            <Trash2 className="w-4 h-4" />
                                                                        </Button>
                                                                        <Button variant="ghost" size="sm" data-testid="button-more">
                                                                            <MoreVertical className="w-4 h-4" />
                                                                        </Button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>

                                            {filteredLogs.length === 0 && (
                                                <div className="text-center py-8 text-muted-foreground">
                                                    No call logs found matching your search.
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                    </div>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}
