import { EmailIcon, Icon } from "@chakra-ui/icons";
import axios from "axios";
import {
  Avatar,
  Box,
  Card,
  Center,
  Divider,
  Flex,
  Popover,
  PopoverTrigger,
  Spinner,
  Text,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SmallBanner from "../../Layout/SmallBanner";
import default_profile from './../../assets/images/default_profile.jpg'
import image from './../../assets/banners/phd.jpeg';


function PhdStudents() {
  const [phdStudent, setphdStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/api/public/getteacherstudent/?type=phdstudent&alumni=False"
        );
        const phdstudent_data = response.data;
        console.log(response.data)
        setphdStudent(phdstudent_data);
      } catch (error) {
        setphdStudent(null)
        console.error("Error fetching data:", error);
      }
    };
    return () => fetchData();
  }, []);

  return (
    <>
      <SmallBanner image={image} heading={'PHD'} />
      <Center>
        <VStack w={{ base: '100%', md: '80%' }} spacing={6} my={4}>
          {phdStudent ? (phdStudent.sort((a, b) => {
            const enrollA = parseInt(a.enroll.substring(0, 4));
            const enrollB = parseInt(b.enroll.substring(0, 4));
            return enrollA - enrollB;
          }).map((item, index) => (
            <Flex
              w={"full"}
              p={4}
              boxShadow="0px 4px 16px rgba(149, 157, 165, 0.2)"
              borderRadius={'0.5em'}
              key={index}
              bg={"white"}
            >
              <WrapItem ml={2}>
                <Popover placement="top-end">
                  <PopoverTrigger>
                    <Avatar
                      size="2xl"
                      name={item.name}
                      src={item.profile_photo ? item.profile_photo : default_profile}
                    />
                  </PopoverTrigger>
                </Popover>
              </WrapItem>

              <Card marginLeft={8} style={{ boxShadow: "none" }}>
                <Box>
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
                <Divider borderWidth="0.5px" my={2} borderColor="teal.500" />
                <Box>
                  <Flex alignItems="center" mt={2}>
                    <Icon as={EmailIcon} color="gray.600" />
                    <Text ml={2}>{item.email}</Text>
                  </Flex>
                </Box>
              </Card>
            </Flex>
          ))) : (<Spinner />)}
        </VStack>
      </Center>
    </>
  );
}

export default PhdStudents;
