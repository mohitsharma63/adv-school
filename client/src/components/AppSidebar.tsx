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
  Users as UsersGroup,
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
  Award,
  Layers,
  QrCode,
  BookMarked,
  CalendarDays,
  BookA,
  Calendar1,
  Shield,
  Building,
  Package,
  Library,
  Download,
  Newspaper,
  Grid3x3,
  ShieldCheck,
  MapPin,
  Bus,
  FileUser,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
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
  {
    title: "Income",
    icon: DollarSign,
    items: [
      { title: "Add Income", icon: DollarSign },
      { title: "Search Income", icon: Search },
      { title: "Income Head", icon: Tags },
    ],
  },
  {
    title: "Expenses",
    icon: DollarSign,
    items: [
      { title: "Add Expense", icon: DollarSign },
      { title: "Search Expense", icon: Search },
      { title: "Expense Head", icon: Tags },
    ],
  },
  {
    title: "CBSE Examination",
    icon: Award,
    items: [
      { title: "CBSE Examination", icon: Award },
    ],
  },
  {
    title: "Examinations",
    icon: FileText,
    items: [
      { title: "Exam Group", icon: Users2 },
      { title: "Exam Schedule", icon: Calendar },
      { title: "Exam Result", icon: BarChart3 },
      { title: "Design Admit Card", icon: CreditCard },
      { title: "Print Admit Card", icon: FileText },
      { title: "Design Marksheet", icon: FileText },
      { title: "Print Marksheet", icon: FileText },
      { title: "Marks Grade", icon: Award },
      { title: "Marks Division", icon: Layers },
    ],
  },
  {
    title: "Attendance",
    icon: UserCheck,
    items: [
      { title: "Attendance", icon: UserCheck },
    ],
  },
  {
    title: "QR Code Attendance",
    icon: QrCode,
    items: [
      { title: "QR Code Attendance", icon: QrCode },
    ],
  },
  {
    title: "Online Examinations",
    icon: Play,
    items: [
      { title: "Online Exam", icon: Play },
      { title: "Question Bank", icon: BookMarked },
    ],
  },
  {
    title: "Academics",
    icon: BookOpen,
    items: [
      { title: "Academics", icon: BookOpen },
      { title: "Annual Calendar", icon: Calendar },
      { title: "Attendance", icon: UserCheck },
      { title: "Behaviour Records", icon: FileText },
      { title: "CBSE Examination", icon: BarChart3 },
      { title: "Examinations", icon: FileText },
      { title: "Expenses", icon: DollarSign },
      { title: "Income", icon: DollarSign },
      { title: "Online Examinations", icon: Play },
      { title: "QR Code Attendance", icon: Settings },
    ],
  },
  {
    title: "Annual Calendar",
    icon: CalendarDays,
    items: [
      { title: "Annual Calendar", icon: CalendarDays },
    ],
  },
  {
    title: "Lesson Plan",
    icon: BookA,
    items: [
      { title: "Copy Old Lessons", icon: Book },
      { title: "Manage Lesson Plan", icon: BookA },
      { title: "Manage Syllabus Status", icon: BarChart3 },
      { title: "Lesson", icon: Book },
      { title: "Topic", icon: FileText },
    ],
  },
  {
    title: "Human Resource",
    icon: Users,
    items: [
      { title: "Staff Directory", icon: Users },
      { title: "Staff Attendance", icon: UserCheck },
      { title: "Payroll", icon: DollarSign },
      { title: "Approve Leave Request", icon: UserX },
      { title: "Apply Leave", icon: Calendar },
      { title: "Leave Type", icon: Calendar1 },
      { title: "Teachers Rating", icon: Award },
      { title: "Department", icon: Building2 },
      { title: "Designation", icon: Tags },
      { title: "Disabled Staff", icon: UserX },
    ],
  },
  {
    title: "Communicate",
    icon: MessageSquare,
    items: [
      { title: "Notice Board", icon: Bell },
      { title: "Send Email", icon: Mail },
      { title: "Send SMS", icon: MessageSquare },
      { title: "Email / SMS Log", icon: MailOpen },
      { title: "Schedule Email SMS Log", icon: Calendar },
      { title: "Login Credentials Send", icon: Shield },
      { title: "Email Template", icon: Mail },
      { title: "SMS Template", icon: MessageSquare },
    ],
  },

  {
    title: "Download Center",
    icon: Download,
    items: [
      { title: "Content Type", icon: FileText },
      { title: "Content Share List", icon: Layers },
      { title: "Upload/Share Content", icon: Download },
      { title: "Video Tutorial", icon: Video },
    ],
  },
  {
    title: "Homework",
    icon: BookOpen,
    items: [
      { title: "Add Homework", icon: BookOpen },
      { title: "Daily Assignment", icon: Calendar },
    ],
  },
  {
    title: "Library",
    icon: Library,
    items: [
      { title: "Book List", icon: Book },
      { title: "Issue - Return", icon: ArrowRight },
      { title: "Add Student", icon: UserPlus },
      { title: "Add Staff Member", icon: Users },
    ],
  },
  {
    title: "Inventory",
    icon: Package,
    items: [
      { title: "Issue Item", icon: Package },
      { title: "Add Item Stock", icon: Package },
      { title: "Add Item", icon: Package },
      { title: "Item Category", icon: Tags },
      { title: "Item Store", icon: Building },
      { title: "Item Supplier", icon: Users },
    ],
  },

  {
    title: "Student CV",
    icon: FileUser,
    items: [
      { title: "Build CV", icon: FileUser },
      { title: "Download CV", icon: Download },
    ],
  },
  {
    title: "Transport",
    icon: Bus,
    items: [
      { title: "Fees Master", icon: DollarSign },
      { title: "Pickup Point", icon: MapPin },
      { title: "Routes", icon: MapPin },
      { title: "Vehicles", icon: Bus },
      { title: "Assign Vehicle", icon: Bus },
      { title: "Route Pickup Point", icon: MapPin },
      { title: "Student Transport Fees", icon: DollarSign },
    ],
  },
  {
    title: "Hostel",
    icon: Building,
    items: [
      { title: "Hostel Rooms", icon: Building },
      { title: "Room Type", icon: Tags },
      { title: "Hostel", icon: Building },
    ],
  },
  {
    title: "Certificate",
    icon: ShieldCheck,
    items: [
      { title: "Student Certificate", icon: ShieldCheck },
      { title: "Generate Certificate", icon: ShieldCheck },
      { title: "Student ID Card", icon: CreditCard },
      { title: "Generate ID Card", icon: CreditCard },
      { title: "Staff ID Card", icon: CreditCard },
      { title: "Generate Staff ID Card", icon: CreditCard },
    ],
  },
  {
    title: "Front CMS",
    icon: Newspaper,
    items: [
      { title: "Event", icon: Calendar },
      { title: "Gallery", icon: Grid3x3 },
      { title: "News", icon: Newspaper },
      { title: "Media Manager", icon: Video },
      { title: "Pages", icon: FileText },
      { title: "Menus", icon: Layers },
      { title: "Banner Images", icon: Grid3x3 },
    ],
  },

  {
    title: "Alumni",
    icon: UsersGroup,
    items: [
      { title: "Manage Alumni", icon: UsersGroup },
      { title: "Events", icon: Calendar },
    ],
  },
  {
    title: "Reports",
    icon: TrendingUp,
    items: [
      { title: "Student Information", icon: Users },
      { title: "Finance", icon: DollarSign },
      { title: "Attendance", icon: UserCheck },
      { title: "Examinations", icon: Award },
      { title: "Online Examinations", icon: Play },
      { title: "Lesson Plan", icon: BookA },
      { title: "Human Resource", icon: Users },
      { title: "Homework", icon: BookOpen },
      { title: "Library", icon: Library },
      { title: "Inventory", icon: Package },
      { title: "Transport", icon: Bus },
      { title: "Hostel", icon: Building },
      { title: "Alumni", icon: UsersGroup },
      { title: "User Log", icon: Shield },
      { title: "Audit Trail Report", icon: Shield },
    ],
  },
];

interface AppSidebarProps {
  onMenuItemClick?: (section: string, item: string) => void;
}

export default function AppSidebar({ onMenuItemClick }: AppSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["Academics", "Front Office", "Student Information", "Fees Collection", "Online Course", "Multi Branch", "Gmeet Live Classes"])
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

  const [location, navigate] = useLocation();

  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Clicked: ${section} > ${item}`);
    
    // Navigation mapping for Front Office and other sections
    const navigationMap: { [key: string]: { [key: string]: string } } = {
      "Front Office": {
        "Admission Enquiry": "/admission-enquiry",
        "Visitor Book": "/visitor-book",
        "Phone Call Log": "/phone-call-log",
        "Postal Dispatch": "/postal-dispatch",
        "Postal Receive": "/postal-receive",
        "Complain": "/complain",
        "Setup Front Office": "/setup-front-office"
      },
      "Student Information": {
        "Student Details": "/student-details",
        "Student Admission": "/student-admission",
        "Online Admission": "/online-admission",
        "Disabled Students": "/disabled-students",
        "Multi Class Student": "/multi-class-student",
        "Bulk Delete": "/bulk-delete",
        "Student Categories": "/student-categories",
        "Student House": "/student-house",
        "Disable Reason": "/disable-reason"
      },
      "Academics": {
        "Annual Calendar": "/annual-calendar",
        "Attendance": "/attendance",
        "Behaviour Records": "/behaviour-records",
        "CBSE Examination": "/cbse-examination",
        "Examinations": "/examinations",
        "Expenses": "/expenses",
        "Income": "/income",
        "Online Examinations": "/online-examinations",
        "QR Code Attendance": "/qr-code-attendance"
      }
    };

    // Check if there's a route for this menu item
    const route = navigationMap[section]?.[item];
    if (route) {
      navigate(route);
    } else {
      // Fallback for items without specific routes
      console.log(`No route defined for ${section} > ${item}`);
    }
    
    onMenuItemClick?.(section, item);
  };

  return (
    <Sidebar data-testid="sidebar-main" className="border-r">
      <SidebarContent className="overflow-y-auto">
        {menuSections.map((section) => {
          const isExpanded = expandedSections.has(section.title);
          return (
            <SidebarGroup key={section.title} className="px-2 py-1">
              <SidebarMenuButton
                onClick={() => toggleSection(section.title)}
                className="text-sidebar-primary hover:bg-accent hover:text-accent-foreground w-full justify-start font-medium py-2"
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
                <SidebarGroupContent className="ml-4 mt-1">
                  <SidebarMenu className="space-y-1">
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          onClick={() => handleMenuItemClick(section.title, item.title)}
                          className="hover:bg-accent hover:text-accent-foreground w-full justify-start text-sm py-1.5 pl-2"
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