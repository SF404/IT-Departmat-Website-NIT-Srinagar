import axios from "axios";
import {
  Badge,
  Box,
  Divider,
  Heading,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SmallBanner from  "./../../../Layout/SmallBanner";
function Course() {
  const [courses, setCourses] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/public/courseget/"
      );
      const course = response.data;
      setCourses(course);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  
  return (
    <>
      <VStack>
        <SmallBanner heading={'COURSES OFFERED'} />
        <VStack w={{ base: '100%', md: '80%' }} m={4} borderRadius={'0.5em'} bg={"white"} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} p={4} className="family-2">

          {(courses && courses.length > 0) ? courses.sort((a, b) => a.semester - b.semester).map((item, index) => (
            <Box key={index} w={"full"}>
              <Heading size={"md"}  >{item.course_id} {" | "} {item.name}</Heading>
              <Text fontWeight={"bold"}>Faculty: {item.teacher}</Text>

              <Badge colorScheme="facebook" mr={2} px={2}>CREDIT: {item.credit} </Badge>
              <Badge colorScheme="facebook" px={2}>SEMESTER: {item.semester}</Badge>
              <Text >{item.description}</Text>

              <Divider my={4} />
            </Box>
          )) : (<Spinner />)}
        </VStack>
      </VStack>
    </>
  );
}

export default Course;
