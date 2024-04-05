import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, redirect, useNavigate } from "react-router-dom";
import Layout from './Layout/Main/Layout';
import Home from './Pages/Home/Home';
import LoginForm from './Auth/Login';
import DashboardLayout from './Layout/Dashboard/Layout';
import Dashboard from './DashboardPages/Dashboard/Dashboard';
import MyProfile from './DashboardPages/MyProfile/MyProfile';
import ManageAccounts from './DashboardPages/ManageAccounts/ManageAccounts';
import ManageCourses from './DashboardPages/ManageCourses/ManageCourses';
import ManageStudents from './DashboardPages/ManageStudents/ManageStudents';
import ManageEventsAnnouncements from './DashboardPages/ManageEventsAnnouncements/ManageEventsAnnouncements';
import ManageCourseStudyMaterial from './DashboardPages/ManageCourseStudyMaterial/ManageCourseStudyMaterial';
import DegreePrograms from './Pages/Academics/Degree Programs/DegreePrograms';
import VissionMission from './Pages/Academics/Vision Mission/VissionMission';
import Outcomes from './Pages/Academics/Outcomes/Outcomes';
import Courses from './Pages/Academics/Courses/Courses';
import Coordinators from './Pages/Academics/Coordinators/Coordinators';
import DepartmentNewsletter from './Pages/Academics/Department Newsletter/DepartmentNewsletter';
import Faculty from './Pages/People/Faculty';
import FacultyDetails from './Pages/People/FacultyDetails';
import Areas from './Pages/Research/Areas';
import Labs from './Pages/Research/Labs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Gallery from './DashboardPages/Gallery/Gallery';
import GalleryView from './DashboardPages/Gallery/GalleryView';
import ManageAlumni from './DashboardPages/ManageAlumni/ManageAlumni';
import MyCourses from './DashboardPages/MyCourses/MyCourses';
import SiteFiles from './DashboardPages/SiteFiles/SiteFiles';
import PhdScholar from './Pages/People/PhdScholar';
import BtechStudents from './Pages/People/BtechStudent';
import BtechBatches from './Pages/People/BtechBatches';
import Alumni from './Pages/People/Alumni';
import ResearchPapers from './Pages/Research/ResearchPapers';
import Downloads from './Pages/Downloads/Downloads';
import GalleryPublicView from './Pages/Student_Activities/GalleryPublicView';
import GalleryPublic from './Pages/Student_Activities/GalleryPublic';
import Placements from './Pages/Student_Activities/Placement';
import Semesters from './Pages/Academics/Course Work/Semesters';
import SemesterCourses from './Pages/Academics/Course Work/SemesterCourses';
import CourseStudyMaterial from './Pages/Academics/Course Work/CourseStudyMaterial';
import ManagePhdScholars from './DashboardPages/ManagePhdScholars.js/ManagePhdScholars';
import PasswordResetForm from './Auth/ForgetPassword';
import ResetPassword from './Auth/ResetPassword';
import Projects from './Pages/Research/Projects';

const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const isLogedin = token ? true : false;
        if (!isLogedin) navigate('/login')
    }, [])

    return (<Component />)

}

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="degree-program" element={<DegreePrograms />} title="Degree Programs" />
                    <Route path="vision-mission" element={<VissionMission />} title="Vision Mission" />
                    <Route path="outcomes" element={<Outcomes />} title="Outcomes" />
                    <Route path="courses" element={<Courses />} title="Courses" />
                    <Route path="semesters" element={<Semesters />} title="Semesters" />
                    <Route path="semesters/:semesterId/courses" element={<SemesterCourses />} title="Semesters" />
                    <Route path="semesters/:semesterId/courses/:courseId" element={<CourseStudyMaterial />} title="Semesters" />
                    <Route path="coordinators" element={<Coordinators />} title="Coordinators" />
                    <Route path="newsletter" element={<DepartmentNewsletter />} title="Department Newsletter" />
                    <Route path="faculty" element={<Faculty />} title="Faculty" />
                    <Route path="faculty/details/:id" element={<FacultyDetails />} title="Faculty Details" />
                    <Route path="phd-scholars" element={<PhdScholar />} title="Phd Scholars" />
                    <Route path="btech-students" element={<BtechBatches />} title="B-Tech Students" />
                    <Route path="btech-students/:batch" element={<BtechStudents />} title="B-Tech Students" />
                    <Route path="alumni" element={<Alumni />} title="Alumni" />
                    <Route path="areas" element={<Areas />} title="Research Areas" />
                    <Route path="research-papers" element={<ResearchPapers />} title="Research Papers" />
                    <Route path="projects" element={<Projects />} title="Projects" />
                    <Route path="labs" element={<Labs />} title="Research Labs" />
                    <Route path="gallery" element={<GalleryPublic />} title="Gallery" />
                    <Route path="gallery/:id" element={<GalleryPublicView />} title="Gallery View" />
                    {/* <Route path="awards" element={<AwardsPage />} title="Awards" /> */}
                    {/* <Route path="facilities" element={<FacilitiesPage />} title="Facilities" /> */}
                    <Route path="placements" element={<Placements />} title="Placement Brochure" />
                    <Route path="downloads" element={<Downloads />} title="Downloads" />
                    <Route path="contact-us" element={<ContactUs />} title="Contact Us" />

                </Route>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/reset-password/:uid/:token" element={<ResetPassword />} />
                <Route path="/forget-password" element={<PasswordResetForm />} />
                <Route path="/dashboard" element={<Protected Component={DashboardLayout} />}>
                    <Route index element={<Dashboard />}></Route>
                    <Route path='/dashboard/myprofile' element={<MyProfile />}></Route>
                    <Route path='/dashboard/mycourses' element={<MyCourses />}></Route>
                    <Route path='/dashboard/mycourses/:courseId' element={<ManageCourseStudyMaterial />}></Route>
                    <Route path='/dashboard/manage-accounts' element={<ManageAccounts />}></Route>
                    <Route path='/dashboard/manage-courses' element={<ManageCourses />}></Route>
                    <Route path='/dashboard/manage-students' element={<ManageStudents />}></Route>
                    <Route path='/dashboard/manage-phd-scholars' element={<ManagePhdScholars />}></Route>
                    <Route path='/dashboard/manage-alumni' element={<ManageAlumni />}></Route>
                    <Route path='/dashboard/events-announcements' element={<ManageEventsAnnouncements />}></Route>
                    <Route path='/dashboard/gallery' element={<Gallery />}></Route>
                    <Route path='/dashboard/gallery/:id' element={<GalleryView />}></Route>
                    <Route path='/dashboard/site-files' element={<SiteFiles />}></Route>
                    <Route path='*' element={<Home />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes