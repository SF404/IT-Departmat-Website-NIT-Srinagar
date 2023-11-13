import { EmailIcon, Icon, PhoneIcon } from "@chakra-ui/icons";
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

function PhdStudents() {
  const [phdStudent, setphdStudent] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "/api/public/getphdstudent/?alumni=False"
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
      <SmallBanner heading={'PHD'} />
      <Center>
        <VStack w={{ base: '100%', md: '80%' }} spacing={6} my={4}>
          {phdStudent ? (phdStudent.map((item, index) => (
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
                      src={item.profile_photo}
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
                <Divider borderWidth="0.5px" my={2} borderColor="teal.500"/>
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
