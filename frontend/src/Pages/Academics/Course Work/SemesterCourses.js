import {
    Box,
    SimpleGrid,
    Text,
    useToast,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import SmallBanner from "../../../Components/SmallBanner";
  import { getCourseListBySemester } from "../../../Api/public_api";
import { NavLink, useParams } from "react-router-dom";
  
  function SemesterCourses() {
    const {semesterId} = useParams();
    const [courses, setCourses] = useState([]);
    const toast = useToast()
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getCourseListBySemester(semesterId)
          setCourses(data);
          console.log(data)
        } catch (error) {
          setCourses(null);
          toast({
            title: 'Error',
            description: error.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
      };
      return () => fetchData();
    }, []);
  
    const tileTheme = [
      'red.50',
      'orange.50',
      'yellow.50',
      'green.50',
      'teal.50',
      'blue.50',
      'cyan.50',
      'purple.50',
      'pink.50',
    ];
  
  
    return (
      <Box w={'full'} minH={'100vh'}>
        <SmallBanner heading={semesterId+"th SEMESTER "+"COURSES"}></SmallBanner>
        <SimpleGrid columns={[1, 2, 2, 3]} gap={[4]} w={{base:'full', md:'80%'}} p={4} mx={'auto'} mt={4}>
          {courses.map((course, index) => (
            <NavLink to={`${course.course_id}`}>
            <Box key={course.course_id} rounded={16} h={'full'} overflow="hidden" boxShadow={'md'} border={'1px solid'} borderColor={'gray.200'}
              _hover={{ border: '1px solid gray' }} transition={'all 0.2s ease-in'} cursor={'pointer'} bg={'white'}>
              <Box w={'full'} h={'100px'} bg={tileTheme[index % 9]}></Box>
              <Box p={4}>
                <Text fontWeight={'bold'} color={'gray.700'}>{course.course_id} | {course.name}</Text>
                <Box fontSize={'14px'} color={'GrayText'}>
                  <Text mb={1}>
                    {course.department}
                  </Text>
                  <Text>
                    Instructor: {course.instructor?.first_name +" "} {course.instructor?.last_name}
                  </Text>
                  <Text>
                    Semester: {course.semester}
                  </Text>
                  <Text>
                    Credit: {course.credit}
                  </Text>
  
                </Box>
              </Box>
            </Box>
         </NavLink>
          ))
          }
        </SimpleGrid >
      </Box >
    );
  }
  
  export default SemesterCourses;
  