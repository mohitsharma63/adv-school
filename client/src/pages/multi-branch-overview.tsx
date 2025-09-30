
import AppSidebar from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function MultiBranchOverview() {
  const feesData = [
    { branch: "Home Branch", session: "2024-25", totalStudents: 61, totalFees: "$4,69,050.00", totalPaidFees: "$99,890.00", totalBalanceFees: "$3,69,160.00" },
    { branch: "Mount Carmel School 1", session: "2025-26", totalStudents: 15, totalFees: "$42,750.00", totalPaidFees: "$3,030.00", totalBalanceFees: "$39,720.00" },
    { branch: "Mount Carmel School 2", session: "2025-26", totalStudents: 13, totalFees: "$21,750.00", totalPaidFees: "$4,750.00", totalBalanceFees: "$17,000.00" },
    { branch: "Mount Carmel School 3", session: "2025-26", totalStudents: 14, totalFees: "$48,050.00", totalPaidFees: "$4,060.00", totalBalanceFees: "$43,990.00" },
  ];

  const transportFeesData = [
    { branch: "Home Branch", session: "2024-25", totalFees: "$31,850.00", totalPaidFees: "$1,360.00", totalBalanceFees: "$30,490.00" },
    { branch: "Mount Carmel School 1", session: "2025-26", totalFees: "$2,950.00", totalPaidFees: "$100.00", totalBalanceFees: "$2,850.00" },
    { branch: "Mount Carmel School 2", session: "2025-26", totalFees: "$4,550.00", totalPaidFees: "$100.00", totalBalanceFees: "$4,450.00" },
    { branch: "Mount Carmel School 3", session: "2025-26", totalFees: "$2,850.00", totalPaidFees: "$50.00", totalBalanceFees: "$2,800.00" },
  ];

  const studentAdmissionData = [
    { branch: "Home Branch", session: "2024-25", offlineAdmission: 19, onlineAdmission: 3 },
    { branch: "Mount Carmel School 1", session: "2025-26", offlineAdmission: 3, onlineAdmission: 2 },
    { branch: "Mount Carmel School 2", session: "2025-26", offlineAdmission: 5, onlineAdmission: 2 },
    { branch: "Mount Carmel School 3", session: "2025-26", offlineAdmission: 3, onlineAdmission: 2 },
  ];

  const libraryData = [
    { branch: "Home Branch", totalBooks: 44, members: 48, bookIssued: 473 },
    { branch: "Mount Carmel School 1", totalBooks: 12, members: 16, bookIssued: 40 },
    { branch: "Mount Carmel School 2", totalBooks: 11, members: 16, bookIssued: 40 },
    { branch: "Mount Carmel School 3", totalBooks: 8, members: 21, bookIssued: 37 },
  ];

  const alumniData = [
    { branch: "Home Branch", alumniStudents: 4 },
    { branch: "Mount Carmel School 1", alumniStudents: 2 },
    { branch: "Mount Carmel School 2", alumniStudents: 5 },
    { branch: "Mount Carmel School 3", alumniStudents: 2 },
  ];

  const staffPayrollData = [
    { branch: "Home Branch", totalStaff: 8, payrollGenerated: 2, payrollNotGenerated: 1, payrollPaid: 5, netAmount: "$1,31,730.00", paidAmount: "$79,250.00" },
    { branch: "Mount Carmel School 1", totalStaff: 7, payrollGenerated: 0, payrollNotGenerated: 7, payrollPaid: 0, netAmount: "$0.00", paidAmount: "$0.00" },
    { branch: "Mount Carmel School 2", totalStaff: 7, payrollGenerated: 0, payrollNotGenerated: 7, payrollPaid: 0, netAmount: "$0.00", paidAmount: "$0.00" },
    { branch: "Mount Carmel School 3", totalStaff: 8, payrollGenerated: 0, payrollNotGenerated: 8, payrollPaid: 0, netAmount: "$0.00", paidAmount: "$0.00" },
  ];

  const staffAttendanceData = [
    { branch: "Home Branch", totalStaff: 8, present: "-", absent: "-" },
    { branch: "Mount Carmel School 1", totalStaff: 7, present: "-", absent: "-" },
    { branch: "Mount Carmel School 2", totalStaff: 7, present: "-", absent: "-" },
    { branch: "Mount Carmel School 3", totalStaff: 8, present: "-", absent: "-" },
  ];

  const userLogData = [
    { branch: "Home Branch", totalUserLog: 2 },
    { branch: "Mount Carmel School 1", totalUserLog: 137 },
    { branch: "Mount Carmel School 2", totalUserLog: 106 },
    { branch: "Mount Carmel School 3", totalUserLog: 106 },
  ];

  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Overview</h1>
      
      {/* Fees Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Fees Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b  ">
                  <th className="text-left p-3">Branch</th>
                  <th className="text-left p-3">Current Session</th>
                  <th className="text-left p-3">Total Students</th>
                  <th className="text-left p-3">Total Fees</th>
                  <th className="text-left p-3">Total Paid Fees</th>
                  <th className="text-left p-3">Total Balance Fees</th>
                </tr>
              </thead>
              <tbody>
                {feesData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? " " : " "}>
                    <td className="p-3">{row.branch}</td>
                    <td className="p-3">{row.session}</td>
                    <td className="p-3">{row.totalStudents}</td>
                    <td className="p-3">{row.totalFees}</td>
                    <td className="p-3">{row.totalPaidFees}</td>
                    <td className="p-3">{row.totalBalanceFees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Transport Fees Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Transport Fees Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b  ">
                  <th className="text-left p-3">Branch</th>
                  <th className="text-left p-3">Current Session</th>
                  <th className="text-left p-3">Total Fees</th>
                  <th className="text-left p-3">Total Paid Fees</th>
                  <th className="text-left p-3">Total Balance Fees</th>
                </tr>
              </thead>
              <tbody>
                {transportFeesData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? " " : " "}>
                    <td className="p-3">{row.branch}</td>
                    <td className="p-3">{row.session}</td>
                    <td className="p-3">{row.totalFees}</td>
                    <td className="p-3">{row.totalPaidFees}</td>
                    <td className="p-3">{row.totalBalanceFees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Student Admission */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Student Admission</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b  ">
                  <th className="text-left p-3">Branch</th>
                  <th className="text-left p-3">Current Session</th>
                  <th className="text-left p-3">Offline Admission</th>
                  <th className="text-left p-3">Online Admission</th>
                </tr>
              </thead>
              <tbody>
                {studentAdmissionData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? " " : " "}>
                    <td className="p-3">{row.branch}</td>
                    <td className="p-3">{row.session}</td>
                    <td className="p-3">{row.offlineAdmission}</td>
                    <td className="p-3">{row.onlineAdmission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Library Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Library Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b  ">
                  <th className="text-left p-3">Branch</th>
                  <th className="text-left p-3">Total Books</th>
                  <th className="text-left p-3">Members</th>
                  <th className="text-left p-3">Book Issued</th>
                </tr>
              </thead>
              <tbody>
                {libraryData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? " " : " "}>
                    <td className="p-3">{row.branch}</td>
                    <td className="p-3">{row.totalBooks}</td>
                    <td className="p-3">{row.members}</td>
                    <td className="p-3">{row.bookIssued}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Alumni Students */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Alumni Students</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b  ">
                  <th className="text-left p-3">Branch</th>
                  <th className="text-left p-3">Alumni Students</th>
                </tr>
              </thead>
              <tbody>
                {alumniData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? " " : " "}>
                    <td className="p-3">{row.branch}</td>
                    <td className="p-3">{row.alumniStudents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Staff Payroll Of August */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Staff Payroll Of August</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b  ">
                  <th className="text-left p-3">Branch</th>
                  <th className="text-left p-3">Total Staff</th>
                  <th className="text-left p-3">Payroll Generated</th>
                  <th className="text-left p-3">Payroll Not Generated</th>
                  <th className="text-left p-3">Payroll Paid</th>
                  <th className="text-left p-3">Net Amount</th>
                  <th className="text-left p-3">Paid Amount</th>
                </tr>
              </thead>
              <tbody>
                {staffPayrollData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? " " : " "}>
                    <td className="p-3">{row.branch}</td>
                    <td className="p-3">{row.totalStaff}</td>
                    <td className="p-3">{row.payrollGenerated}</td>
                    <td className="p-3">{row.payrollNotGenerated}</td>
                    <td className="p-3">{row.payrollPaid}</td>
                    <td className="p-3">{row.netAmount}</td>
                    <td className="p-3">{row.paidAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Staff Attendance Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Staff Attendance Details At 09/29/2025</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b  ">
                  <th className="text-left p-3">Branch</th>
                  <th className="text-left p-3">Total Staff</th>
                  <th className="text-left p-3">Present</th>
                  <th className="text-left p-3">Absent</th>
                </tr>
              </thead>
              <tbody>
                {staffAttendanceData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? " " : " "}>
                    <td className="p-3">{row.branch}</td>
                    <td className="p-3">{row.totalStaff}</td>
                    <td className="p-3">{row.present}</td>
                    <td className="p-3">{row.absent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* User Log Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">User Log Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b  ">
                  <th className="text-left p-3">Branch</th>
                  <th className="text-left p-3">Total User Log</th>
                </tr>
              </thead>
              <tbody>
                {userLogData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? " " : " "}>
                    <td className="p-3">{row.branch}</td>
                    <td className="p-3">{row.totalUserLog}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
    </SidebarInset>
                    </div>
                </SidebarProvider>
  );
}
