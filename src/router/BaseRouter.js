import { Route, Routes } from "react-router-dom";
import EmployeeList from "../pages/EmployeeList/EmployeeList";
import EmployeeHomePage from "../pages/HomePage/EmployeeHomePage";
import HomePage from "../pages/HomePage/EmployeeHomePage";
import AppointmentLetter from "../pages/MyDocument/AppointmentLetter/AppointmentLetter";
import IncrementLetter from "../pages/MyDocument/IncrementLetter/IncrementLetter";
import JoiningLetter from "../pages/MyDocument/JoiningLetter/JoiningLetter";
import MyDocuments from "../pages/MyDocument/MyDocuments";
import SalarySlip from "../pages/MyDocument/SalarySlip/SalarySlip";
import AddNewsFeed from "../pages/NewsFeed/AddNewsFeed";
import NewsFeed from "../pages/NewsFeed/NewsFeed";
import Notification from "../pages/Notification/Notification";
import OurServices from "../pages/OurServices/OurServices";
import PolicyDocuments from "../pages/PolicyDocuments/PolicyDocuments";
import Sop from "../pages/PolicyDocuments/Sop";
import AddProject from "../pages/ProjectPage/AddProject";
import ProjectDetails from "../pages/ProjectPage/ProjectDetails";
import ProjectList from "../pages/ProjectPage/ProjectList";
import UpdateProject from "../pages/ProjectPage/UpdateProject";
import PrivateRoute from "./PrivateRoute";

const BaseRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/project/:projectId" element={<PrivateRoute children={<ProjectDetails />} />} />
        <Route path="/employee-login" element={<PrivateRoute children={<EmployeeHomePage />} />} />
        <Route
          path="/news-feed"
          element={<PrivateRoute children={<NewsFeed />} />} />
        <Route path="/projects" element={<PrivateRoute children={<ProjectList />} />} />
        <Route path="/policy-documents" element={<PrivateRoute children={<PolicyDocuments />} />} />
        <Route path="/employee-list" element={<PrivateRoute children={<EmployeeList />} />} />
        <Route path="/my-documents" element={<PrivateRoute children={<MyDocuments />} />} />
        <Route path="/appointment-letter" element={<PrivateRoute children={<AppointmentLetter />} />} />
        <Route path="/increment-letter" element={<PrivateRoute children={<IncrementLetter />} />} />
        <Route path="/joining-letter" element={<PrivateRoute children={<JoiningLetter />} />} />
        <Route path="/salaryslip" element={<PrivateRoute children={<SalarySlip />} />} />
        <Route path="/our-services" element={<PrivateRoute children={<OurServices />} />} />
        <Route path="/add-news-feed" element={<PrivateRoute children={<AddNewsFeed />} />} />
        <Route path="/add-project" element={<PrivateRoute children={<AddProject />} />} />
        <Route path="/update-project" element={<PrivateRoute children={<UpdateProject />} />} />
        <Route path="/send-mails" element={<PrivateRoute children={<Notification />} />} />
        <Route path="/sops" element={<PrivateRoute children={<Sop />} />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default BaseRouter;
