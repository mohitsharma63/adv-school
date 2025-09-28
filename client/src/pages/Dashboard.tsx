import { useState } from "react";
import AppSidebar from "@/components/AppSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardContent from "@/components/DashboardContent";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Dashboard() {
  const [selectedSection, setSelectedSection] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleMenuItemClick = (section: string, item: string) => {
    setSelectedSection(section);
    setSelectedItem(item);
  };

  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar onMenuItemClick={handleMenuItemClick} />
        <div className="flex flex-col flex-1">
          <DashboardHeader 
            title={selectedItem || "Dashboard"}
            userName="Admin User"
            userRole="System Administrator"
          />
          <main className="flex-1 overflow-auto bg-background">
            <DashboardContent 
              selectedSection={selectedSection}
              selectedItem={selectedItem}
            />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}