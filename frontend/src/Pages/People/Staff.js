import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Center,
} from "@chakra-ui/react";
import SmallBanner from "../../Layout/SmallBanner";

const staffData = [
  { staffMember: "Mr. Muzaffar Ahmad Beigh", designation: "Lab. Attendant" },
  { staffMember: "Mr.Mohammad Ashraf Kumar", designation: "Lab. Attendant" },
  { staffMember: "Mr. Shahid-ul-Islam", designation: "Office Attendant" },
  { staffMember: "Mr.Gh. Nabi", designation: "Orderly" },
];

function App() {
  return (
    <>
      <SmallBanner heading={"STAFF MEMBERS"} />
      <Center>
        <TableContainer w={{ base: '100%', md: '80%' }} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} m={4}>
          <Table variant="striped" bg={"white"}>
            <Thead bg={"#d8dcf0"}>
              <Tr>
                <Th>SR No.</Th>
                <Th>Staff Member</Th>
                <Th>Designation</Th>
              </Tr>
            </Thead>
            <Tbody className="family-3" fontSize={'14px'}>
              {staffData.map((item, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{item.staffMember}</Td>
                  <Td>{item.designation}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </>
  );
}

export default App;
