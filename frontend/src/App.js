import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Faculty from "./Pages/People/Faculty";
import CoursesAll from "./Pages/Courses/CoursesAll";
import SemesterPage from "./Pages/Courses/SemesterPage";
import Reset_pass from "./Auth/forgot_password";
import Request_page from "./Auth/Request";
import Home from "./Pages/Landing/Home";
import DegreePrograms from "./Pages/Academics/Degree Programs/DegreePrograms";
import NotFound from "./Pages/Error Pages/NotFound";
import VissionMission from "./Pages/Academics/Vision Mission/VissionMission";
import Outcomes from "./Pages/Academics/Outcomes/Outcomes";
import Courses from "./Pages/Academics/Courses/Courses";
import Coordinators from "./Pages/Academics/Coordinators/Coordinators";
import Committee from "./Pages/Academics/Committee/Committee";
import DepartmentNewsletter from "./Pages/Academics/Department Newsletter/DepartmentNewsletter";
import BTechStudents from "./Pages/People/BtechStudent";
import PhdStudents from "./Pages/People/PhdStudent";
import Areas from "./Pages/Research/Areas";
import Papers from "./Pages/Research/Papers";
import Labs from "./Pages/Research/Labs";
import ContactUs from "./Pages/contact_us/contact";
import AwardsPage from "./Pages/Student_Activities/Awards";
import FacilitiesPage from "./Pages/Student_Activities/Facilities";
import PlacementBrochure from "./Pages/Student_Activities/PlacementBrochure";
import FacultyDetails from "./Pages/People/FacultyDetails";
import ImageGallery from "./Pages/Gallery/ImageGallery";
import CreditsPage from "./Pages/contact_us/Credits1";
import StaffTable from "./Pages/People/Staff";
import Activate from "./Auth/Activate";
import Alumni from "./Pages/People/Alumni";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="semester/all" element={<CoursesAll />}></Route>
          <Route path="faculty" element={<Faculty />}></Route>
          <Route path="faculty/details/:id" element={<FacultyDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route exact path="/reset-password" component={ResetPassword} /> */}
          {/* <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            component={ResetPasswordConfirm}
          /> */}
          <Route exact path="/activate/:uid/:token" component={Activate} />
          <Route path="semester/:semesterId" element={<SemesterPage />} />
          <Route path="degree-program" element={<DegreePrograms />}></Route>
          <Route path="phd-students" element={<PhdStudents />}></Route>
          <Route path="btech-students" element={<BTechStudents />}></Route>
          <Route path="vision-mission" element={<VissionMission />}></Route>
          <Route path="outcomes" element={<Outcomes />}></Route>
          <Route path="courses" element={<Courses />}></Route>
          <Route path="coordinators" element={<Coordinators />}></Route>
          <Route path="committee" element={<Committee />}></Route>
          <Route path="newsletter" element={<DepartmentNewsletter />}></Route>
          <Route path="staff" element={<StaffTable />}></Route>
          <Route path="areas" element={<Areas />}></Route>
          <Route path="papers" element={<Papers />}></Route>
          <Route path="labs" element={<Labs />}></Route>
          <Route path="gallery" element={<ImageGallery />}></Route>
          <Route path="awards" element={<AwardsPage />}></Route>
          <Route path="contact-us" element={<ContactUs />}></Route>
          <Route path="facilities" element={<FacilitiesPage />}></Route>
          <Route path="alumni" element={<Alumni />}></Route>
          <Route
            path="placement-brochure"
            element={<PlacementBrochure />}
          ></Route>
          <Route path="credits" element={<CreditsPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
