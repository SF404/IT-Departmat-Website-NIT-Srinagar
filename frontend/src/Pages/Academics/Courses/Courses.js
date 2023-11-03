//import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
//import janibulbashirImage from "./JanibSir.jpg";
import axios from "axios";
import bannerImage from "./../../../assets/images/image.webp";
//import { InfoOutlineIcon } from "@chakra-ui/icons";
//import { AiOutlineMail } from "react-icons/ai";
import {
  Avatar,
  Badge,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
//import { useToast } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
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

  const [showText, setShowText] = useState(false);

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
            Courses Offered
          </Heading>
        </VStack>
        <VStack w={"80%"} spacing={6}>
          <Divider borderColor={"gray.400"}></Divider>
          {courses.map((item) => (
            <Flex
              w={"full"}
              p={2}
              boxShadow="0px 4px 16px rgba(149, 157, 165, 0.2)"
              borderRadius={4}
              key={item.id}
              bg={"white"}
              userSelect={"none"}
            >
              <WrapItem ml={2}>
                <Popover placement="top-end">
                  <PopoverContent
                    boxShadow="0px 7px 29px 0px rgba(100, 100, 111, 0.2)"
                    _focus={{ outline: "none", boxShadow: "none" }}
                    borderColor={"#9fa8da"}
                    bg={"#c5cae8"}
                    fontFamily={"monospace"}
                    borderRadius={10}
                    color="darkblue"
                  >
                    <PopoverArrow bg={"#c5cae8"} />
                    <PopoverBody _focus={{ outline: "none" }}>
                      {showText && (
                        <Typewriter
                          options={{
                            strings: [
                              `${item.syllabus}`,
                              item.speciality,
                              "Thank You",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 20,
                            deleteSpeed: 10,
                          }}
                        />
                      )}
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </WrapItem>
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
