
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Settings, Save } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function GmeetLiveClassesSetting() {
  const [apiKey, setApiKey] = useState("988720996993-ctjb5ldg5bb451u50bl3v310bv5dr79.apps.googleusercontent.com");
  const [apiSecret, setApiSecret] = useState("XkSqRpcFactJZ6pGqrcZPRkVP");
  const [useGoogleCalendar, setUseGoogleCalendar] = useState("disabled");
  const [parentLiveClass, setParentLiveClass] = useState("disabled");

  const handleSave = () => {
    console.log("Settings saved:", {
      apiKey,
      apiSecret,
      useGoogleCalendar,
      parentLiveClass
    });
  };

    const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center">
          <Settings className="mr-3 h-8 w-8" />
          Setting
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Google Meet Configuration</CardTitle>
          <CardDescription>Configure your Google Meet API settings for live classes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="api-key">API Key</Label>
            <Input
              id="api-key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Google API Key"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="api-secret">API Secret</Label>
            <Input
              id="api-secret"
              value={apiSecret}
              onChange={(e) => setApiSecret(e.target.value)}
              placeholder="Enter your API Secret"
            />
          </div>

          <div className="space-y-4">
            <Label>Use Google Calendar Api</Label>
            <RadioGroup
              value={useGoogleCalendar}
              onValueChange={setUseGoogleCalendar}
              className="flex space-x-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="disabled" id="calendar-disabled" />
                <Label htmlFor="calendar-disabled">Disabled</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="enabled" id="calendar-enabled" />
                <Label htmlFor="calendar-enabled">Enabled</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label>Parent Live Class</Label>
            <RadioGroup
              value={parentLiveClass}
              onValueChange={setParentLiveClass}
              className="flex space-x-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="disabled" id="parent-disabled" />
                <Label htmlFor="parent-disabled">Disabled</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="enabled" id="parent-enabled" />
                <Label htmlFor="parent-enabled">Enabled</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-between items-center pt-4">
            <Button onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Save
            </Button>
            <span className="text-sm text-muted-foreground">Version 6.0</span>
          </div>
        </CardContent>
      </Card>
    </div>
    </SidebarInset>
                        </div>
                    </SidebarProvider>
  );
}
