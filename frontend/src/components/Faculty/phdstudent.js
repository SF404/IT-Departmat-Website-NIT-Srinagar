import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import janibulbashirImage from "./JanibSir.jpg";
import bannerImage from "./../../assets/images/image.webp";
import axios from "axios";
import { AiOutlineMail } from "react-icons/ai";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Flex,
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tag,
  Text,
  Tooltip,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useToast, Box, Icon } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import Footer from "../Layout/Footer";

function PhdStudents() {
  const [phdStudent, setphdStudent] = useState([
    {
      phd_student_id: 0,
      name: "temp",
      enroll: "1234678",
      description: "",
      research_field:
        "Wireless Sensor Networks, Internet of Things, Artificial Intelligence, Machine Learning, and Big Data",
      email: "example@example.com",
      phone: "0000000000",
      profile_photo: "",
    },
  ]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/public/getphdstudent/"
      );
      const phdstudent_data = response.data;
      setphdStudent(phdstudent_data);
      console.log(phdstudent_data[0]);
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
            PHD Students, Department of Information Technology
          </Heading>
        </VStack>
        <VStack w={"80%"} spacing={6}>
          <Divider borderColor={"gray.400"}></Divider>
          {phdStudent.map((item) => (
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
                  <PopoverTrigger>
                    <Avatar
                      size="2xl"
                      name={item.name}
                      src={item.profile_photo}
                    />
                  </PopoverTrigger>
                </Popover>
              </WrapItem>

              <Card marginLeft={4} style={{ boxShadow: "none" }}>
                <Box p={4}>
                  <Text fontSize="xl" fontWeight="bold">
                    {item.name}
                  </Text>
                  <Text fontSize="md" color="gray.500">
                    {item.research_field}
                  </Text>
                  <Text fontSize="md" fontWeight="bold" color="gray.500">
                    Enrollment: {item.enroll}
                  </Text>
                </Box>
                <Divider borderWidth="0.5px" borderColor="teal.500" mt={0} />
                <Box p={4}>
                  <Flex alignItems="center">
                    <Icon as={PhoneIcon} color="gray.600" />
                    <Text ml={2}>{item.phone}</Text>
                  </Flex>
                  <Flex alignItems="center" mt={2}>
                    <Icon as={EmailIcon} color="gray.600" />
                    <Text ml={2}>{item.email}</Text>
                  </Flex>
                </Box>
              </Card>
            </Flex>
          ))}
        </VStack>
      </VStack>
    </>
  );
}

export default PhdStudents;
