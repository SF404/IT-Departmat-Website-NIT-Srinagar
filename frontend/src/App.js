import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Faculty from "./components/Faculty/Faculty";
import CoursesAll from "./components/Courses/CoursesAll";
import SemesterPage from "./components/Courses/SemesterPage";
import Reset_pass from "./components/Auth/forgot_password";
import Request_page from "./components/Auth/Request";
import Home from "./components/Landing/Home";
import DegreePrograms from "./Pages/Academics/Degree Programs/DegreePrograms";
import NotFound from "./Pages/Error Pages/NotFound";
import VissionMission from "./Pages/Academics/Vision Mission/VissionMission";
import Outcomes from "./Pages/Academics/Outcomes/Outcomes";
import Courses from "./Pages/Academics/Courses/Courses";
import Coordinators from "./Pages/Academics/Coordinators/Coordinators";
import Committee from "./Pages/Academics/Committee/Committee";
import DepartmentNewsletter from "./Pages/Academics/Department Newsletter/DepartmentNewsletter";
import ImageDisplay from "./components/DisplayImage";
import BTechStudents from "./components/Faculty/btechstudent";
import PhdStudents from "./components/Faculty/phdstudent";
import Areas from "./Pages/Research/Areas";
import Papers from "./Pages/Research/Papers";
import Labs from "./Pages/Research/Labs";
import ImageGallery from "./Pages/Gallery/ImageGallery";
import FacultyDetails from "./components/Faculty/FacultyDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="semester/all" element={<CoursesAll />}></Route>
          <Route path="faculty" element={<Faculty />}></Route>
          <Route path="faculty/details/:id" element={<FacultyDetails/>}/>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="reset" element={<Reset_pass />}></Route>
          <Route path="request" element={<Request_page />}></Route>
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
          <Route path="image" element={<ImageDisplay />}></Route>
          <Route path="areas" element={<Areas />}></Route>
          <Route path="papers" element={<Papers />}></Route>
          <Route path="labs" element={<Labs />}></Route>
          <Route path="gallery" element={<ImageGallery />}></Route>


          <Route path="*" element={<NotFound />}></Route>
        </Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
