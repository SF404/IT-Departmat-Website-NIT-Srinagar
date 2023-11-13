import React, { useEffect, useState } from 'react'
import SmallBanner from '../../Layout/SmallBanner'
import SearchTable from '../../components/Tables/SearchTable'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Card, Center, Divider, Flex, Heading, Icon, Popover, PopoverTrigger, Spinner, Text, VStack, WrapItem } from '@chakra-ui/react'
import axios from 'axios'
import * as XLSX from 'xlsx'
import { EmailIcon } from '@chakra-ui/icons'

function Alumni() {
  const [alumni, setAlumni] = useState(null)
  const [excelData, setExcelData] = useState(null);
  const [phdAlumni, setPhdAlumni] = useState(null);

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
    if (index < 0) return
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
    const fetchBtechData = async () => {
      try {
        const response = await axios.get(`/api/public/fileget/?q=alumni&&type=btech_student_list`);
        console.log(response.data)
        setAlumni(response.data)
      } catch (error) {
        console.error('Error fetching Excel file:', error);
      }
    }
    const fetchPhdData = async () => {
      try {
        const response = await axios.get(
          "/api/public/getphdstudent/?alumni=True"
        );
        setPhdAlumni(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPhdData();
    fetchBtechData();
  }, [])

  return (
    <>
      <SmallBanner heading={'ALUMNI'} />
      <Center>
        <VStack w={{ base: 'full', md: '80%' }} my={4}>
          <Heading fontSize={'1.5em'} my={'0.5em'} textAlign={'center'} color={'darkblue'} className='family-3'>PHD Graduates</Heading>
          <VStack w={'full'}>
            <Accordion allowToggle gap={6} w={'full'} >
              <AccordionItem border={"none"} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} w={'full'}>
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
                          PHD Graduates from IT, NIT Srinagar
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
                    <VStack w={'full'} spacing={6} my={4}>
                      {phdAlumni ? (phdAlumni.map((item, index) => (
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
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </VStack>
          <Heading fontSize={'1.5em'} my={'0.5em'} textAlign={'center'} color={'darkblue'} className='family-3'>B-TECH Graduates</Heading>
          <VStack w={'full'}>
            <Accordion allowToggle gap={6} reduceMotion onChange={(index) => { setExcelData(null); index >= 0 ? renderData(index) : setExcelData(null) }} w={'full'} >
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

        </VStack>
      </Center>
    </>
  )
}

export default Alumni