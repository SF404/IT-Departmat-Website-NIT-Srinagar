import React, { useEffect, useState } from 'react'
import SmallBanner from '../../Layout/SmallBanner'
import SearchTable from '../../components/Tables/SearchTable'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import * as XLSX from 'xlsx'

function Alumni() {
  const [alumni, setAlumni] = useState([])
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
      const fileURL = alumni[index].file;
      const fileResponse = await axios.get(fileURL, { responseType: 'blob' });
      const blob = fileResponse.data;
      const file = new File([blob], 'table.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      handleFileChange(file);
    } catch (error) {
      console.error('Error fetching Excel file:', error);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/public/fileget/?q=alumni&&type=btech_student_list`);
        console.log(response.data)
        setAlumni(response.data)
      } catch (error) {
        console.error('Error fetching Excel file:', error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <SmallBanner heading={'ALUMNI'} />
      <Center>
        <Box w={'full'}>
          <VStack w={{ base: 'full', md: '80%' }}>
            <Heading fontSize={'1.5em'} my={'0.5em'} textAlign={'center'} color={'darkblue'}>PHD</Heading>
            <Accordion allowToggle gap={6} onChange={(index) => renderData(index)} w={}>
              {alumni &&
                alumni.sort((a, b) => b.name - a.name).map((course, index) => (
                  <AccordionItem
                    key={index}
                    border={"none"} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} w={'full'}
                  >
                    <h2>
                      <AccordionButton
                        w={'full'}
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
          </VStack>
          <VStack w={{ base: 'full', md: '80%' }}>
            <Heading fontSize={'1.5em'} my={'0.5em'} textAlign={'center'} color={'darkblue'}>B-TECH</Heading>

          </VStack>
        </Box>
      </Center>
    </>
  )
}

export default Alumni