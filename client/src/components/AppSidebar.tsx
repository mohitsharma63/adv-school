import {
  Building2,
  Users,
  CreditCard,
  BookOpen,
  GitBranch,
  Video,
  ChevronDown,
  ChevronRight,
  UserPlus,
  Book,
  Phone,
  Mail,
  MailOpen,
  MessageSquare,
  Settings,
  UserCheck,
  UserX,
  UsersIcon,
  Trash2,
  Tags,
  Home,
  AlertCircle,
  DollarSign,
  Landmark,
  Search,
  FileText,
  Zap,
  Users2,
  Percent,
  ArrowRight,
  Bell,
  Play,
  Calendar,
  BarChart3,
} from "lucide-react";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface MenuItem {
  title: string;
  icon: any;
  onClick?: () => void;
}

interface MenuSection {
  title: string;
  icon: any;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    title: "Front Office",
    icon: Building2,
    items: [
      { title: "Admission Enquiry", icon: UserPlus },
      { title: "Visitor Book", icon: Book },
      { title: "Phone Call Log", icon: Phone },
      { title: "Postal Dispatch", icon: Mail },
      { title: "Postal Receive", icon: MailOpen },
      { title: "Complain", icon: MessageSquare },
      { title: "Setup Front Office", icon: Settings },
    ],
  },
  {
    title: "Student Information",
    icon: Users,
    items: [
      { title: "Student Details", icon: UserCheck },
      { title: "Student Admission", icon: UserPlus },
      { title: "Online Admission", icon: Users },
      { title: "Disabled Students", icon: UserX },
      { title: "Multi Class Student", icon: UsersIcon },
      { title: "Bulk Delete", icon: Trash2 },
      { title: "Student Categories", icon: Tags },
      { title: "Student House", icon: Home },
      { title: "Disable Reason", icon: AlertCircle },
    ],
  },
  {
    title: "Fees Collection",
    icon: CreditCard,
    items: [
      { title: "Collect Fees", icon: DollarSign },
      { title: "Offline Bank Payments", icon: Landmark },
      { title: "Search Fees Payment", icon: Search },
      { title: "Search Due Fees", icon: Search },
      { title: "Fees Master", icon: FileText },
      { title: "Quick Fees", icon: Zap },
      { title: "Fees Group", icon: Users2 },
      { title: "Fees Type", icon: Tags },
      { title: "Fees Discount", icon: Percent },
      { title: "Fees Carry Forward", icon: ArrowRight },
      { title: "Fees Reminder", icon: Bell },
    ],
  },
  {
    title: "Online Course",
    icon: BookOpen,
    items: [
      { title: "Online Course", icon: Play },
      { title: "Offline Payment", icon: DollarSign },
      { title: "Course Category", icon: Tags },
      { title: "Question Bank", icon: FileText },
      { title: "Online Course Report", icon: BarChart3 },
      { title: "Setting", icon: Settings },
    ],
  },
  {
    title: "Multi Branch",
    icon: GitBranch,
    items: [
      { title: "Overview", icon: BarChart3 },
      { title: "Report", icon: FileText },
      { title: "Setting", icon: Settings },
    ],
  },
  {
    title: "Gmeet Live Classes",
    icon: Video,
    items: [
      { title: "Live Classes", icon: Video },
      { title: "Live Meeting", icon: Calendar },
      { title: "Live Classes Report", icon: BarChart3 },
      { title: "Live Meeting Report", icon: FileText },
      { title: "Setting", icon: Settings },
    ],
  },
];

interface AppSidebarProps {
  onMenuItemClick?: (section: string, item: string) => void;
}

export default function AppSidebar({ onMenuItemClick }: AppSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  const toggleSection = (sectionTitle: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionTitle)) {
      newExpanded.delete(sectionTitle);
    } else {
      newExpanded.add(sectionTitle);
    }
    setExpandedSections(newExpanded);
  };

  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Clicked: ${section} > ${item}`);
    onMenuItemClick?.(section, item);
  };

  return (
    <Sidebar data-testid="sidebar-main">
      <SidebarContent>
        {menuSections.map((section) => {
          const isExpanded = expandedSections.has(section.title);
          return (
            <SidebarGroup key={section.title}>
              <SidebarMenuButton
                onClick={() => toggleSection(section.title)}
                className="text-sidebar-primary hover-elevate"
                data-testid={`button-section-${section.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <section.icon className="w-4 h-4" />
                <span className="font-medium">{section.title}</span>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 ml-auto" />
                ) : (
                  <ChevronRight className="w-4 h-4 ml-auto" />
                )}
              </SidebarMenuButton>

              {isExpanded && (
                <SidebarGroupContent className="ml-4">
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          onClick={() => handleMenuItemClick(section.title, item.title)}
                          className="hover-elevate"
                          data-testid={`button-menu-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <item.icon className="w-4 h-4" />
                          <span className="text-sm">{item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              )}
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}