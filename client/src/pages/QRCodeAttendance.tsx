
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QrCode, Settings, Smartphone, Scan } from "lucide-react";

export default function QRCodeAttendance() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">QR Code Attendance</h1>
      </div>

      <Tabs defaultValue="attendance" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="setting">Setting</TabsTrigger>
        </TabsList>

        <TabsContent value="attendance" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Generate QR Code</CardTitle>
                <CardDescription>Generate QR code for attendance scanning</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                  <div className="text-center">
                    <QrCode className="mx-auto h-24 w-24 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">QR Code will appear here</p>
                  </div>
                </div>
                <Button className="w-full">
                  <QrCode className="mr-2 h-4 w-4" />
                  Generate QR Code
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scan QR Code</CardTitle>
                <CardDescription>Students can scan QR code to mark attendance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                  <div className="text-center">
                    <Smartphone className="mx-auto h-24 w-24 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">Camera view for scanning</p>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  <Scan className="mr-2 h-4 w-4" />
                  Start Scanning
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Today's Attendance Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Total Scans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">89</div>
                    <p className="text-xs text-muted-foreground">Students marked present</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <p className="text-xs text-muted-foreground">Successful scans</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Last Scan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">10:30 AM</div>
                    <p className="text-xs text-muted-foreground">John Doe - Class 10A</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">QR codes active</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="setting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>QR Code Settings</CardTitle>
              <CardDescription>Configure QR code attendance parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Input id="session-timeout" type="number" defaultValue="30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="refresh-interval">Auto Refresh (seconds)</Label>
                  <Input id="refresh-interval" type="number" defaultValue="300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-distance">Max Distance (meters)</Label>
                  <Input id="max-distance" type="number" defaultValue="50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duplicate-prevention">Duplicate Scan Prevention (minutes)</Label>
                  <Input id="duplicate-prevention" type="number" defaultValue="5" />
                </div>
              </div>
              <Button>
                <Settings className="mr-2 h-4 w-4" />
                Save Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
