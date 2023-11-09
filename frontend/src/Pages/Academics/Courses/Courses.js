import axios from "axios";
import bannerImage from "./../../../assets/images/image.webp";
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
function Course() {
  const [courses, setCourses] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/public/courseget/"
      );
      const course = response.data; // Assuming the API returns an array of teachers
      setCourses(course); // Update the state with the fetched data
      console.log(response.data)
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
        <VStack
          boxShadow={"lg"}
          w={{base:'100%', md:'80%'}}
          borderRadius={'0.5em'}
          h={"200px"}
          bg={"brown"}
          color={"white"}
          mt={4}
          p={6}
          backgroundImage={bannerImage}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          justifyContent="center"
          textShadow={"0 0 24px black"}
        >
          <Heading as="h2" size="xl" mb={2}>
            COURSES OFFERED
          </Heading>
        </VStack>
        <VStack w={{ base: '100%', md: '80%' }} m={4} borderRadius={'0.5em'} bg={"white"} boxShadow={'0 0 12px rgba(0,0,0,0.05)'} p={4} className="family-1">

          {(courses && courses.length > 0) ? courses.map((item, index) => (
            <Box key={index} w={"full"}>
              <Heading size={"md"} className="family-1" >{item.course_id} {" | "} {item.name}</Heading>

              <Badge colorScheme="facebook">CREDIT: {item.credit}</Badge>
              <Text fontFamily={"body"}>{item.description}</Text>

              <Divider my={4} />

              {/* <Card shadow={"none"}>
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
              </Card> */}
            </Box>
          )) : (<Spinner />)}
        </VStack>
      </VStack>
    </>
  );
}

export default Course;
