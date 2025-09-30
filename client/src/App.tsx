import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
// import Home from "@/pages/home";
// import Properties from "@/pages/properties";
// import PropertyDetail from "@/pages/property-detail";
// import Agents from "@/pages/agents";
// import Agencies from "@/pages/agencies";
// import Schools from "@/pages/schools";
// import Visitors from "./pages/Visitors";
import StudentDetails from "@/pages/student-details";
import StudentAdmission from "@/pages/student-admission";
import CollectFees from "@/pages/collect-fees";
import OfflineBankPayments from "@/pages/offline-bank-payments";
import SearchFeesPayment from "@/pages/search-fees-payment";
import SearchDueFees from "@/pages/search-due-fees";
import FeesMaster from "@/pages/fees-master";
import QuickFees from "@/pages/quick-fees";
import FeesGroup from "@/pages/fees-group";
import FeesType from "@/pages/fees-type";
import FeesDiscount from "@/pages/fees-discount";
import FeesCarryForward from "@/pages/fees-carry-forward";
import FeesReminder from "@/pages/fees-reminder";
// import Login from "@/pages/login";
// import Signup from "@/pages/signup";
// import Contact from "./pages/contact";
import OnlineCourse from "@/pages/online-course";
import CourseCategory from "@/pages/course-category";
import QuestionBank from "@/pages/question-bank";
import OnlineCourseReport from "@/pages/online-course-report";
import OnlineCourseSetting from "@/pages/online-course-setting";
import OfflinePayment from "@/pages/offline-payment";
import NotFound from "./pages/not-found";
import OnlineAdmission from "./pages/online-admission";
import MultiBranchOverview from "@/pages/multi-branch-overview";
import MultiBranchReport from "@/pages/multi-branch-report";
import MultiBranchSetting from "@/pages/multi-branch-setting";
// Importing new pages
import LiveClasses from "@/pages/live-classes";
import LiveMeeting from "@/pages/live-meeting";
import LiveClassesReport from "@/pages/live-classes-report";
import LiveMeetingReport from "@/pages/live-meeting-report";
import GmeetLiveClassesSetting from "@/pages/gmeet-live-classes-setting";
import AddIncome from "@/pages/add-income";
import SearchIncome from "@/pages/search-income";
import IncomeHead from "@/pages/income-head";
import AddExpense from "./pages/add-expense";
import SearchExpense from "./pages/search-expense";
import ExpenseHead from "./pages/expense-head";
import ExamGroup from "./pages/ExamGroup";
import ExamSchedule from "./pages/ExamSchedule";
import ExamResult from "./pages/ExamResult";
import PrintAdmitCard from "./pages/PrintAdmitCard";
import DesignMarksheet from "./pages/DesignMarksheet";
import PrintMarksheet from "./pages/PrintMarksheet";
import MarksGrade from "./pages/MarksGrade";
import MarksDivision from "./pages/MarksDivision";


function Router() {
  return (
    <Switch>
      {/* <Route path="/" component={Home} />
      <Route path="/properties" component={Properties} />
      <Route path="/properties/:id" component={PropertyDetail} /> */}
      {/* <Route path="/agents" component={Agents} />
      <Route path="/agencies" component={Agencies} />
      <Route path="/schools" component={Schools} /> */}
      <Route path="/online-admission" component={OnlineAdmission} />
      {/* <Route path="/visitors" component={Visitors} /> */}
      <Route path="/student-details" component={StudentDetails} />
      <Route path="/student-admission" component={StudentAdmission} />
      <Route path="/collect-fees" component={CollectFees} />
      <Route path="/offline-bank-payments" component={OfflineBankPayments} />
      <Route path="/search-fees-payment" component={SearchFeesPayment} />
      <Route path="/search-due-fees" component={SearchDueFees} />
      <Route path="/fees-master" component={FeesMaster} />
      <Route path="/quick-fees" component={QuickFees} />
      <Route path="/fees-group" component={FeesGroup} />
      <Route path="/fees-type" component={FeesType} />
      <Route path="/fees-discount" component={FeesDiscount} />
      <Route path="/fees-carry-forward" component={FeesCarryForward} />
      <Route path="/fees-reminder" component={FeesReminder} />
      {/* <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/contact" component={Contact} /> */}

      <Route path="/online-course" component={OnlineCourse} />
      <Route path="/course-category" component={CourseCategory} />
      <Route path="/question-bank" component={QuestionBank} />
      <Route path="/online-course-report" component={OnlineCourseReport} />
      <Route path="/online-course-setting" component={OnlineCourseSetting} />
      <Route path="/multi-branch-overview" component={MultiBranchOverview} />
      <Route path="/multi-branch-report" component={MultiBranchReport} />
      <Route path="/multi-branch-setting" component={MultiBranchSetting} />
      <Route path="/live-classes" component={LiveClasses} />
      <Route path="/live-meeting" component={LiveMeeting} />
      <Route path="/live-classes-report" component={LiveClassesReport} />
      <Route path="/live-meeting-report" component={LiveMeetingReport} />
      <Route path="/gmeet-live-classes-setting" component={GmeetLiveClassesSetting} />
      <Route path="/add-income" component={AddIncome} />
      <Route path="/search-income" component={SearchIncome} />
      <Route path="/income-head" component={IncomeHead} />
      <Route path="/add-expense" component={AddExpense} />
      <Route path="/search-expense" component={SearchExpense} />
      <Route path="/expense-head" component={ExpenseHead} />
      <Route path="/offline-payment" component={OfflinePayment} />

      <Route path="/exam-group" component={ExamGroup} />
      <Route path="/exam-schedule" component={ExamSchedule} />
      <Route path="/exam-result" component={ExamResult} />
      {/* <Route path="/design-admit-card" component={DesignAdmitCard} /> */}
      <Route path="/print-admit-card" component={PrintAdmitCard} />
      <Route path="/design-marksheet" component={DesignMarksheet} />
      <Route path="/print-marksheet" component={PrintMarksheet} />
      <Route path="/marks-grade" component={MarksGrade} />
      <Route path="/marks-division" component={MarksDivision} />
      {/* <Route path="/generate-admit-card" component={GenerateAdmitCard} /> */}
      {/* <Route path="/generate-marksheet" component={GenerateMarksheet} /> */}  
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;