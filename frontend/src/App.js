import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout/Layout';
import Dashboard from './Dashboard/Dashboard';
import Home from './Pages/Landing/Home';
import CoursesAll from './Pages/Courses/CoursesAll';
import Faculty from './Pages/People/Faculty';
import FacultyDetails from './Pages/People/FacultyDetails';

import NotFound from './Pages/Error Pages/NotFound';
import DegreePrograms from './Pages/Academics/Degree Programs/DegreePrograms';
import VissionMission from './Pages/Academics/Vision Mission/VissionMission';
import Outcomes from './Pages/Academics/Outcomes/Outcomes';
import Courses from './Pages/Academics/Courses/Courses';
import SemesterPage from './Pages/Courses/SemesterPage'
import Coordinators from './Pages/Academics/Coordinators/Coordinators';
import BTechStudents from './Pages/People/BtechStudent';
import PhdStudents from './Pages/People/PhdStudent';
import Areas from './Pages/Research/Areas';
import Papers from './Pages/Research/Papers';
import Labs from './Pages/Research/Labs';
import ContactUs from './Pages/contact_us/contact';
import AwardsPage from './Pages/Student_Activities/Awards';
import FacilitiesPage from './Pages/Student_Activities/Facilities';
import PlacementBrochure from './Pages/Student_Activities/PlacementBrochure';
import ImageGallery from './Pages/Gallery/ImageGallery';
import CreditsPage from './Pages/contact_us/Credits1';
import StaffTable from './Pages/People/Staff';
import './App.css'
import Alumni from './Pages/People/Alumni';
import IndexDashboard from './Dashboard/IndexDashboard';
import MyProfile from './Dashboard/components/MyProfile1';
import TimeTable from './Pages/Gallery/TimeTable';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return children;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />} title="IT NIT SRINAGAR">
            <Route index element={<Home />} title="Home" />
            <Route path="semester/all" element={<CoursesAll />} title="All Semesters" />
            <Route path="semester/:semesterId" element={<SemesterPage />} />
            <Route path="faculty" element={<Faculty />} title="Faculty" />
            <Route path="faculty/details/:id" element={<FacultyDetails />} title="Faculty Details" />
            <Route path="degree-program" element={<DegreePrograms />} title="Degree Programs" />
            <Route path="vision-mission" element={<VissionMission />} title="Vision Mission" />
            <Route path="outcomes" element={<Outcomes />} title="Outcomes" />
            <Route path="courses" element={<Courses />} title="Courses" />
            <Route path="coordinators" element={<Coordinators />} title="Coordinators" />
            <Route path="staff" element={<StaffTable />} title="Staff" />
            <Route path="areas" element={<Areas />} title="Research Areas" />
            <Route path="papers" element={<Papers />} title="Research Papers" />
            <Route path="labs" element={<Labs />} title="Research Labs" />
            <Route path="contact-us" element={<ContactUs />} title="Contact Us" />
            <Route path="awards" element={<AwardsPage />} title="Awards" />
            <Route path="facilities" element={<FacilitiesPage />} title="Facilities" />
            <Route path="placement-brochure" element={<PlacementBrochure />} title="Placement Brochure" />
            <Route path="gallery" element={<ImageGallery />} title="Image Gallery" />
            <Route path="timetable" element={<TimeTable />} title="Image Gallery" />
            <Route path="credits" element={<CreditsPage />} title="Credits" />
            <Route path="btech-students" element={<BTechStudents />} title="B.Tech Students" />
            <Route path="phd-students" element={<PhdStudents />} title="Ph.D. Students" />
            <Route path="alumni" element={<Alumni />} title="Alumni" />
            <Route path="*" element={<NotFound />} title="Not Found" />
          </Route>
          <Route path="dashboard" element={<IndexDashboard />} >
            <Route index element={<Dashboard />} title="Security" />
            <Route path='myprofile' element={<MyProfile />} title="Security" />

          </Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
