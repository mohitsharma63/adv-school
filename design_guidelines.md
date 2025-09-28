# Dashboard Design Guidelines

## Design Approach
**System-Based Approach**: Using Material Design principles adapted for educational management software, emphasizing utility and information hierarchy over visual appeal.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary** (matching screenshots):
- Background: 220 15% 8% (very dark blue-gray)
- Sidebar: 220 18% 12% (dark charcoal)
- Primary Orange: 25 95% 53% (vibrant orange accent)
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 220 5% 65% (muted gray)
- Border/Divider: 220 10% 20% (subtle dark borders)

### B. Typography
- **Primary Font**: Inter or Roboto via Google Fonts
- **Hierarchy**: 
  - Page Headers: 24px, semi-bold
  - Section Headers: 18px, medium
  - Body Text: 14px, regular
  - Navigation: 14px, medium

### C. Layout System
**Tailwind Spacing**: Use units 2, 4, 6, and 8 consistently
- Sidebar: Fixed 64 width (w-64)
- Content padding: p-6
- Component spacing: space-y-4
- Icon-text spacing: gap-2

### D. Component Library

**Sidebar Navigation**:
- Dark background with subtle borders
- Expandable sections with smooth animations
- Orange accent for active states
- Icons from Heroicons (24px)
- Hover states with subtle background lightening

**Main Content Area**:
- Clean white cards on gray background
- Subtle shadows for depth
- Consistent padding and margins
- Data tables with alternating row colors

**Forms & Inputs**:
- Dark-themed form controls
- Orange focus states
- Proper label positioning
- Validation states

**Data Tables**:
- Zebra striping for readability
- Sortable headers
- Action buttons in orange theme
- Responsive design with horizontal scroll

**Cards & Containers**:
- Rounded corners (rounded-lg)
- Subtle drop shadows
- Dark backgrounds with lighter borders

### E. Interaction Design
- **Sidebar Expansion**: Smooth slide animations (300ms)
- **Hover States**: Subtle background color changes
- **Active States**: Orange accent color highlighting
- **Loading States**: Skeleton screens for data loading
- **Transitions**: Use transition-all duration-200 for micro-interactions

## Key Design Principles
1. **Information Hierarchy**: Clear visual hierarchy with consistent typography scales
2. **Professional Aesthetics**: Clean, corporate design suitable for educational institutions
3. **Functional Focus**: Prioritize usability and data accessibility over decorative elements
4. **Consistency**: Maintain consistent spacing, colors, and component behaviors
5. **Accessibility**: High contrast ratios and proper focus states for all interactive elements

## Navigation Structure
Replicate the exact menu structure from screenshots:
- Front Office (6 sub-items)
- Student Information (9 sub-items) 
- Fees Collection (8 sub-items)
- Online Course (6 sub-items)
- Multi Branch (3 sub-items)
- Gmeet Live Classes (4 sub-items)

Each section should expand/collapse with smooth animations and maintain the professional, data-focused aesthetic throughout.