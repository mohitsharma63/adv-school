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
      <Route path="/offline-payment" component={OfflinePayment} />
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