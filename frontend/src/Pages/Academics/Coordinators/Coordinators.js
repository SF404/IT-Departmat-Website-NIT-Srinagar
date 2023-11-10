import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Heading,
  Center,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import SmallBanner from  "./../../../Layout/SmallBanner";

const data = [
  {
    name: "Dr. Shabir Ahmad Sofi",
    responsibility: "Spoken Tutorials Coordinator",
    email: "shabir@nitsri.ac.in",
  },
  {
    name: "Dr. Iqra Altaf",
    responsibility: "Time Table Coordinator",
    email: "iqraaltaf@nitsri.ac.in",
  },
  {
    name: "Dr. Prabal Verma",
    responsibility: "4th Year Coordinator",
    email: "prabal.verma@nitsri.net",
  },
  {
    name: "Dr. Janibul Bashir",
    responsibility: "1st Year Coordinator, Examination Coordinator",
    email: "Janibbashir@nitsri.ac.in",
  },
];

const Page = () => {
  return (
    <>
      <SmallBanner image={null} heading={'FACULTY COORDINATORS'} />
      <Center>
        <TableContainer width={{ base: '100%', md: '80%' }} m={4} bg={"white"}>
          <Table variant="striped">
            <Thead bg="#d8dcf0">
              <Tr >
                <Th>Name</Th>
                <Th>Responsibility</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody fontSize={'14px'} className="family-3">
              {data.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.name}</Td>
                  <Td>{item.responsibility}</Td>
                  <Td>{item.email}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </>
  );
}

export default Page;
