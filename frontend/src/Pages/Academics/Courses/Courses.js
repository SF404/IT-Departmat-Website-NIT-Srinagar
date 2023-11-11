import axios from "axios";
import {
  Badge,
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Spinner,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SmallBanner from "./../../../Layout/SmallBanner";
function Course() {
  const [courses, setCourses] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/public/courseget/"
      );
      const course = response.data;
      setCourses(course);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <VStack>
        <SmallBanner heading={'COURSES OFFERED'} />
        <VStack w={{ base: '100%', md: '80%' }} m={4} borderRadius={'0.5em'} bg={"white"} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} p={{base:4, md:8}} className="family-3">

          {(courses && courses.length > 0) ? courses.sort((a, b) => a.semester - b.semester).map((item, index) => (
            <Box key={index} w={"full"} fontSize={'14px'}>
              <Heading size={"md"} color={"darkblue"} className="family-5">{item.course_id} {" | "} {item.name}</Heading>
              <Box display={"flex"}  >Faculty: <Text ml={2} fontWeight={"semibold"}>{item.teacher_name?item.teacher_name:'Unknown'}</Text></Box>
              <Text >{item.description}</Text>
              <Flex mt={2}>
                <Tag colorScheme="facebook" mr={1} >CREDIT: {item.credit} </Tag>
                <Tag colorScheme="facebook" >SEMESTER: {item.semester}</Tag>
              </Flex>

              <Divider my={4} />
            </Box>
          )) : (<Spinner />)}
        </VStack>
      </VStack>
    </>
  );
}

export default Course;
