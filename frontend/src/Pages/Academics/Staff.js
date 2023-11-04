import React from "react";
import {
  ChakraProvider,
  CSSReset,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import bannerImage from "./../../assets/images/image.webp";

const staffData = [
  { staffMember: "Mr. Muzaffar Ahmad Beigh", designation: "Lab. Attendant" },
  { staffMember: "Mr.Mohammad Ashraf Kumar", designation: "Lab. Attendant" },
  { staffMember: "Mr. Shahid-ul-Islam", designation: "Office Attendant" },
  { staffMember: "Mr.Gh. Nabi", designation: "Orderly" },
  // Add more staff members as needed
];

function App() {
  return (
    <>
      <Divider></Divider>
      <ChakraProvider>
        <CSSReset />
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
            Staff Members
          </Heading>
        </VStack>
        <Box
          boxShadow="md"
          rounded="lg"
          p={4}
          bg="white"
          overflowX="auto"
          maxW="80%"
          mx="auto"
          marginTop={"40px"}
        >
          <Table variant="simple">
            <Thead bg={"#d8dcf0"}>
              <Tr>
                <Th>SR No.</Th>
                <Th>Staff Member</Th>
                <Th>Designation</Th>
              </Tr>
            </Thead>
            <Tbody>
              {staffData.map((item, index) => (
                <Tr key={index} bg={index % 2 === 1 ? "gray.100" : "white"}>
                  <Td>{index + 1}</Td>
                  <Td>{item.staffMember}</Td>
                  <Td>{item.designation}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
