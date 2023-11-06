//import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
//import janibulbashirImage from "./JanibSir.jpg";
import axios from "axios";
import bannerImage from "./../../../assets/images/image.webp";
//import { InfoOutlineIcon } from "@chakra-ui/icons";
//import { AiOutlineMail } from "react-icons/ai";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

//import Footer from "../Layout/Footer";

function Course() {
  let teacherName = async (id) => {
    console.log(id);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/public/getteacher/?Id=${id}`
      );
      console.log(response.data);
      return "hello";
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [courses, setCourses] = useState([
    {
      course_id: "ITT250",
      name: "Operating System",
      credit: 4,
      semester: "5TH",
      syllabus:
        "Operating system acts as an intermediary between the user of a computer and computer hardware.",
      description:
        "Operating system is concerned with the allocation of resources and services, such as memory, processors, devices, and information.",
      teacher: "Dr.Janib ul Bashir",
    },
  ]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/public/courseget/"
      );
      const course = response.data; // Assuming the API returns an array of teachers
      setCourses(course); // Update the state with the fetched data
      console.log(course[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <VStack bg={"whitesmoke"}>
        <VStack
          w={"full"}
          h={"200px"}
          bg={"brown"}
          color={"white"}
          p={6}
          backgroundImage={bannerImage}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          justifyContent="center"
          textShadow={"0 0 24px black"}
        >
          <Heading as="h2" size="xl" mb={2}>
          </Heading>
        </VStack>
        <VStack w={"80%"} marginTop={1} spacing={6}>
          
          {courses.map((item) => (
            <Flex
              w={"full"}
              p={2}
              boxShadow="0px 4px 16px rgba(149, 157, 165, 0.2)"
              borderRadius={'1em'}
              key={item.id}
              bg={"white"}
              userSelect={"none"}
            >
              <Card shadow={"none"}>
                <CardHeader py={2}>
                  <Heading size="md">
                    {item.course_id}
                    {" | "}
                    {item.name}
                  </Heading>
                  <Badge colorScheme="purple">{item.semester}</Badge>
                  {"\n"}
                  <Badge colorScheme="purple">Credit:{item.credit}</Badge>
                </CardHeader>
                <CardBody py={0}>
                  <Badge colorScheme="purple">
                    Assigned Teacher: {item.teacher}
                  </Badge>
                </CardBody>

                <CardBody py={0}>
                  <Badge>Description</Badge>
                  <Text px={1}>{item.description}</Text>
                </CardBody>
              </Card>
            </Flex>
          ))}
        </VStack>
      </VStack>
    </>
  );
}

export default Course;
