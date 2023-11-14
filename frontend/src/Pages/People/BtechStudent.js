import React, { useEffect, useState } from "react";
import { Box, Text, Flex, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Center, } from "@chakra-ui/react";
import * as XLSX from 'xlsx';
import SmallBanner from "../../Layout/SmallBanner";
import SearchTable from "../../components/Tables/SearchTable";
import axios from "axios";

function BTechStudents() {
  const [student, setStudent] = useState(null);
  const [excelData, setExcelData] = useState([]);

  const handleFileChange = (file) => {
    console.log(file)
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        setExcelData(jsonData);
      };
      reader.readAsBinaryString(file);
    }
  }

  const renderData = async (index) => {
    if (index < 0) return;
    try {
      const fileURL = student[index].file;
      const fileResponse = await axios.get(fileURL, { responseType: 'blob' });
      const blob = fileResponse.data;
      const file = new File([blob], 'table.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      handleFileChange(file);
    } catch (error) {
      console.error('Error fetching Excel file:', error);
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/public/fileget/?q=btech&&type=btech_student_list`);
      console.log(response.data)
      setStudent(response.data)
    } catch (error) {
      console.error('Error fetching Excel file:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <SmallBanner heading={'B-TECH STUDENTS'} />
      <Center>
        <Box p={{ base: 2, md: 4 }}
          borderRadius="lg"
          overflow="hidden"
          fontSize={{ base: "sm", md: "md" }}
          width={{ base: '100%', md: '90%', lg: '80%' }}
          className="family-5" >
          <Accordion allowToggle reduceMotion gap={6} onChange={(index) => {setExcelData(null);index < 0 ? setExcelData(null) : renderData(index)}} >
            {student &&
              student.sort((a, b) => b.name - a.name).map((course, index) => (
                <AccordionItem
                  key={index}
                  border={"none"} boxShadow={'0 0 6px rgba(0,0,0,0.1)'}
                >
                  <h2>
                    <AccordionButton
                      bg={"white"}
                      my={2}
                      cursor={"pointer"}
                      h={"64px"}
                      _expanded={{ bg: "blackAlpha.100", }}

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
                            {"B-TECH"} | {course.name + " BATCH"}
                          </Text>
                        </Flex>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel p={0} >
                    <VStack
                      width={"full"}
                      bg={"white"}
                      spacing={8}
                      boxShadow={'0 0 6px rgba(0,0,0,0.05)'}
                      borderRadius={'0.5em'}
                      p={4}
                    >
                      <SearchTable excelData={excelData} />
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              ))}
          </Accordion>
        </Box>
      </Center>
    </>
  );
}
export default BTechStudents;