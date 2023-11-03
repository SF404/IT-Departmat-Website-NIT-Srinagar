import { Box, Flex, useDisclosure, } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "./components/Calender";
import Navbar from "../Layout/Navbar";
import SideBar from "./components/SideBar";
import CoursePanel from "./components/CoursePanel";
import MyProfile from "./components/MyProfile";
import AnnouncementsPanel from "./components/Announcements";
import PlaceHolder from "./components/PlaceHolder";

function Dashboard1() {
    const navigate = useNavigate();
    // states

    const [currentComponent, setCurrentComponent] = useState('placeholder');

    const [user, setUser] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [assignments, setAssignments] = useState(null);
    const [notes, setNotes] = useState(null);
    const [calenderShow, setCalenderShow] = useState(false);
    const { isOpen: openMyProfile, onOpen: showMyProfile, onClose: closeMyProfile, } = useDisclosure();

    const renderComponent = () => {
        switch (currentComponent) {
            case 'placeholder':
                return <PlaceHolder />;
            case 'coursePanel':
                return <CoursePanel selectedCourse={selectedCourse} notes={notes} assignments={assignments} fetchAssignmnets={fetchAssignments} fetchNotes={fetchNotes} />;
            case 'AnnouncementsPanel':
                return <AnnouncementsPanel />;
            default:
                return null;
        }
    };

    // Variables
    let TokenA, TokenR;

    // function
    function get_token() {
        return {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("TokenA")}`,
            },
        };
    }

    const fetchUser = async () => {
        TokenA = localStorage.getItem("TokenA");
        TokenR = localStorage.getItem("TokenR");
        console.log(TokenA, TokenR)
        if (!TokenA || !TokenR) {
            navigate("/login");
            return;
        }
        try {
            const body = { refresh_token: TokenR, };
            const new_token = await axios.post(`/api/auth/refresh-token/`, body, get_token());
            const accessToken = new_token.data.access_token;
            const refreshToken = new_token.data.refresh_token;
            localStorage.setItem("TokenA", accessToken);
            localStorage.setItem("TokenR", refreshToken);
            const getUser = await axios.get("/api/auth/getuser/",
                {
                    params: {
                        refresh_token: localStorage.getItem("TokenR"),
                        access_token: localStorage.getItem("TokenA"),
                    },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("TokenA")}`,
                    },
                }
            );
            setUser(getUser.data[0]);
            const response = await axios.get("/api/courses/",
                {
                    params: {
                        sid: getUser.data[0].teacher_id,
                    },
                },
                get_token()
            );
            setCourses(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            navigate("/login");
        }
    };

    const fetchNotes = async () => {
        try {
            const notes = await axios.get(`/api/shownotes/?cid=${selectedCourse}`);
            setNotes(notes.data);
            console.log(notes)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const fetchAssignments = async () => {
        try {
            const assignment = await axios.get(`/api/showassignment/?cid=${selectedCourse}`);
            setAssignments(assignment.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleMyProfile = () => {
        showMyProfile();
    }

    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        if (selectedCourse != null) {
            fetchNotes();
            fetchAssignments();
        }
    }, [selectedCourse]);

    return (
        <>
            <Navbar />
            <Flex position={"fixed"} bottom={0} w={{ base: '200', md: 'full' }} top={'110px'} >
                <SideBar user={user} courses={courses} selectedCourse={selectedCourse} calenderShow={calenderShow} setCalenderShow={setCalenderShow} setSelectedCourse={setSelectedCourse} handleMyProfile={handleMyProfile} currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} />
                {renderComponent()}
                <Box m={3} ml={0} display={calenderShow ? 'block' : 'none'}>
                    <Calendar />
                </Box>
            </Flex>
            {
                user && Object.keys(user).length > 0 && <MyProfile openMyProfile={openMyProfile} closeMyProfile={closeMyProfile} user={user} />
            }
        </>
    )
}

export default Dashboard1