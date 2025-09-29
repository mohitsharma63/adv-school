
import { useState } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

interface ReminderSetting {
  id: string;
  action: boolean;
  reminderType: string;
  days: number;
}

const mockReminderSettings: ReminderSetting[] = [
  { id: "1", action: false, reminderType: "Before", days: 2 },
  { id: "2", action: false, reminderType: "Before", days: 5 },
  { id: "3", action: false, reminderType: "After", days: 2 },
  { id: "4", action: false, reminderType: "After", days: 5 }
];

export default function FeesReminder() {
  const [reminderSettings, setReminderSettings] = useState<ReminderSetting[]>(mockReminderSettings);

  const handleActionChange = (id: string, checked: boolean) => {
    setReminderSettings(settings =>
      settings.map(setting =>
        setting.id === id ? { ...setting, action: checked } : setting
      )
    );
  };

  const handleDaysChange = (id: string, days: number) => {
    setReminderSettings(settings =>
      settings.map(setting =>
        setting.id === id ? { ...setting, days } : setting
      )
    );
  };

  const handleSave = () => {
    const activeReminders = reminderSettings.filter(setting => setting.action);
    console.log("Save reminder settings:", activeReminders);
  };

  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>
    <div className="min-h-screen bg-background p-6" data-testid="fees-reminder-page">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <Bell className="w-6 h-6 mr-2" />
            Fees Reminder
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="font-medium">Action</div>
              <div className="font-medium">Reminder Type</div>
              <div className="font-medium">Days</div>
              <div></div>
            </div>

            {reminderSettings.map((setting) => (
              <div key={setting.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center p-4 border rounded-lg">
                <div className="flex items-center">
                  <Checkbox
                    id={`active-${setting.id}`}
                    checked={setting.action}
                    onCheckedChange={(checked) => handleActionChange(setting.id, checked as boolean)}
                  />
                  <Label htmlFor={`active-${setting.id}`} className="ml-2">
                    Active
                  </Label>
                </div>

                <div className="text-sm text-muted-foreground">
                  {setting.reminderType}
                </div>

                <div>
                  <Input
                    type="number"
                    value={setting.days}
                    onChange={(e) => handleDaysChange(setting.id, parseInt(e.target.value) || 0)}
                    className="w-20"
                    min="1"
                  />
                </div>

                <div className="text-sm text-muted-foreground">
                  {setting.reminderType === "Before" 
                    ? `${setting.days} days before due date`
                    : `${setting.days} days after due date`
                  }
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Button onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">How Fees Reminders Work</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Before reminders: Send notifications X days before the fee due date</li>
              <li>• After reminders: Send notifications X days after the fee due date has passed</li>
              <li>• Only active reminders will be sent to parents/guardians</li>
              <li>• Reminders can be sent via SMS, Email, or both depending on your settings</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
      </SidebarInset>
                    </div>
                </SidebarProvider>
  );
}
