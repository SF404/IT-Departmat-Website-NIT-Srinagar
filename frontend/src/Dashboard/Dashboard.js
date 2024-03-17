import { Flex, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "./components/SideBar";
import CoursePanel from "./components/CoursePanel";
import PlaceHolder from "./components/PlaceHolder";
import Viewer from "./components/Viewer";

function Dashboard1() {
  const navigate = useNavigate();
  // states
  const [user, setUser] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [assignments, setAssignments] = useState(null);
  const [notes, setNotes] = useState(null);
  const [calenderShow, setCalenderShow] = useState(false);
  const [currentView, setCurrentView] = useState(null);


  // functions
  function get_token() {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("TokenA")}`,
        Accept: "application/json",
      },
    };
  }

  function Logout() {
    localStorage.removeItem("TokenA");
    localStorage.removeItem("TokenR");
    document.cookie = "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  }

  async function payload_check() {
    if (localStorage.getItem("TokenA") || localStorage.getItem("TokenR")) {
      try {
        const body = { refresh: localStorage.getItem("TokenR") };
        const new_token = await axios.post(
          "/api/auth/jwt/refresh/",
          body,
          get_token()
        );
        const accessToken = new_token.data.access;
        localStorage.setItem("TokenA", accessToken);
        return;
      } catch (err) {
        console.error(err);
        Logout();
      }
    } else Logout();
    return;
  }

  const fetchUser = async () => {
    try {
      const user = await axios.get("/api/auth/users/me/", get_token());
      const teacher = await axios.get("/api/public/getteacherstudent/", {
        params: {
          type: 'teacher',
          email: user.data.email,
        },
      });
      console.log(teacher.data);
      setUser(teacher.data[0]);
      const response = await axios.get(
        "api/public/courses",
        {
          params: {
            email: user.data.email,
          },
        },
        get_token()
      );
      setCourses(response.data);
      console.log(teacher)
    } catch (error) {
      console.error("Error fetching data:", error);
      Logout();
    }
  };

  const fetchNotes = async () => {
    try {
      const notes = await axios.get(`/api/public/showfiles/?type=notes&cid=${selectedCourse}`);
      setNotes(notes.data);
      console.log(notes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchAssignments = async () => {
    try {
      const assignment = await axios.get(
        `/api/public/showfiles/?type=assignment&cid=${selectedCourse}`
      );
      setAssignments(assignment.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    payload_check();
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
      <Flex
        position={"fixed"}
        bottom={0}
        w={"full"}
        top={"64px"}
      >
        <SideBar
          user={user}
          courses={courses}
          selectedCourse={selectedCourse}
          calenderShow={calenderShow}
          setCalenderShow={setCalenderShow}
          setSelectedCourse={setSelectedCourse}
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
        {selectedCourse ? (
          <CoursePanel
            selectedCourse={selectedCourse}
            notes={notes}
            assignments={assignments}
            fetchNotes={fetchNotes}
            fetchAssignmnets={fetchAssignments}
          />
        ) : (
          <PlaceHolder />
        )}
        <Viewer currentView={currentView} user={user} />
      </Flex>

    </>
  );
}

export default Dashboard1;
