
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Dashboard from "@/pages/Dashboard";
import Academics from "@/pages/Academics";
import AnnualCalendar from "@/pages/AnnualCalendar";
import Attendance from "@/pages/Attendance";
import BehaviourRecords from "@/pages/BehaviourRecords";
import CBSEExamination from "@/pages/CBSEExamination";
import Examinations from "@/pages/Examinations";
import Expenses from "@/pages/Expenses";
import Income from "@/pages/Income";
import OnlineExaminations from "@/pages/OnlineExaminations";
import QRCodeAttendance from "@/pages/QRCodeAttendance";
import LessonPlan from "@/pages/LessonPlan";
import HumanResource from "@/pages/HumanResource";
import Communicate from "@/pages/Communicate";
import Library from "@/pages/Library";
import AdmissionEnquiry from "@/pages/AdmissionEnquiry";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/academics" component={Academics} />
      <Route path="/annual-calendar" component={AnnualCalendar} />
      <Route path="/attendance" component={Attendance} />
      <Route path="/behaviour-records" component={BehaviourRecords} />
      <Route path="/cbse-examination" component={CBSEExamination} />
      <Route path="/examinations" component={Examinations} />
      <Route path="/expenses" component={Expenses} />
      <Route path="/income" component={Income} />
      <Route path="/online-examinations" component={OnlineExaminations} />
      <Route path="/qr-code-attendance" component={QRCodeAttendance} />
      <Route path="/lesson-plan" component={LessonPlan} />
      <Route path="/human-resource" component={HumanResource} />
      <Route path="/communicate" component={Communicate} />
      <Route path="/library" component={Library} />
      <Route path="/admission-enquiry" component={AdmissionEnquiry} />
      <Route component={NotFound} />
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
