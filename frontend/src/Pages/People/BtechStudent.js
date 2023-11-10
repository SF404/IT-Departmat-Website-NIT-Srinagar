import React, { useState } from "react";
import bannerImage from "./../../assets/images/image.webp";
import data from "./b-tech_data.json";
import { Box, Heading, Text, Button, Divider, Flex, Badge, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, TableContainer, } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import * as XLSX from 'xlsx';
import SmallBanner from "../../Layout/SmallBanner";

function BTechStudents() {
  const [student, setstudent] = useState([
    { degree: "B-Tech", name: "2022 Batch", batch: 2022 },
    { degree: "B-Tech", name: "2021 Batch", batch: 2021 },
    { degree: "B-Tech", name: "2020 Batch", batch: 2020 },
    { degree: "B-Tech", name: "2019 Batch", batch: 2019 },
    { degree: "B-Tech", name: "2018 Batch", batch: 2018 },
    { degree: "B-Tech", name: "2017 Batch", batch: 2017 },
    { degree: "B-Tech", name: "2016 Batch", batch: 2016 },
    { degree: "B-Tech", name: "2015 Batch", batch: 2015 },
  ]);

  function DataTabs(batch, id) {
    const selectedData = (() => {
      switch (batch) {
        case 2022:
          return data["2022"];
        case 2021:
          return data["2021"];
        case 2020:
          return data["2020"];
        case 2019:
          return data["2019"];
        case 2018:
          return data["2018"];
        case 2017:
          return data["2017"];
        case 2016:
          return data["2016"];
        case 2015:
          return data["2015"];
        default:
          return [];
      }
    })();
    return (
      <TableContainer>
        <Table variant="striped" colorScheme="teal" id={id}>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Registration number</Th>
              <Th>Name</Th>
              <Th>Enrollment number</Th>
            </Tr>
          </Thead>
          <Tbody fontSize={'14px'} className="family-3">
            {selectedData.map((item) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.Reg}</Td>
                <Td>{item.name}</Td>
                <Td>{item.enroll}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }

  const downloadExcel = (id) => {
    const table = document.getElementById(id); // Get the HTML table
    const ws = XLSX.utils.table_to_sheet(table); // Convert the table to a worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1'); // Add the worksheet to a workbook
    XLSX.writeFile(wb, 'download.xlsx'); // Trigger the download
  };
  return (
    <>
      <SmallBanner heading={'B-TECH STUDENTS'} />
      <Box p={{base:2, md:4}} borderRadius="lg" overflow="hidden" fontSize={{ base: "sm", md: "md" }} >
        <Accordion allowToggle gap={6}>
          {student &&
            student.map((course, index) => (
              <AccordionItem
                key={course.degree}
                mt={2}
                borderRadius={8}
              >
                <h2>
                  <AccordionButton
                    as={Badge}
                    colorScheme="blackAlpha"
                    cursor={"pointer"}
                    borderRadius={"8px 8px 0 0"}
                    h={"64px"}
                    _expanded={{ bg: "teal", color: "white" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                      overflow={"hidden"}
                    >
                      <Flex justifyContent={"space-between"}>
                        <Text>
                          {" "}
                          {course.degree} | {course.name}
                        </Text>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box>
                      <Badge colorScheme="blue">{course.name}</Badge>
                    </Box>
                    <Text>
                      <Button size={"sm"} colorScheme="teal" onClick={() => downloadExcel(("table" + index))}>Download .xlsx</Button>
                    </Text>
                  </Box>

                  <Divider my={2} />

                  {DataTabs(course.batch, ("table" + index))}
                </AccordionPanel>
              </AccordionItem>
            ))}
        </Accordion>
      </Box>
    </>
  );
}
export default BTechStudents;