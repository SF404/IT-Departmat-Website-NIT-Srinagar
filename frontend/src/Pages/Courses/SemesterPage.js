import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Text, HStack, Divider, Flex, Spinner, VStack, Center, IconButton, Tag, Tooltip, Table, Tbody, Td, Tr, TableContainer, } from "@chakra-ui/react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import axios from "axios";
import SmallBanner from "../../Layout/SmallBanner";
import { PiDownloadDuotone } from "react-icons/pi";

const SemesterPage = () => {
  const { semesterId } = useParams();

  const [notes, setNotes] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [courses, setCourses] = useState(null);

  function handleTabChange(index) {
    setActiveTab(index);
  }

  const download_notes = async (notes_id) => {
    console.log(notes_id);
    try {
      const response = await axios.post(
        "/api/filedownload/?type=notes",
        { id: notes_id },
        { responseType: "blob" }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "notes.pdf");
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading notes:", error);
    }
  };

  const download_assignment = async (assignment_id) => {
    console.log(assignment_id);
    try {
      const response = await axios.post(
        "/api/filedownload/?type=assignment",
        { id: assignment_id },
        { responseType: "blob" }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "assignment.pdf");
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading notes:", error);
    }
  };

  // use effects
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const assignment = await axios.get(
          `/api/public/showfiles/?type=assignment&cid=${selectedCourse}`
        );
        setAssignments(assignment.data);
        console.log(assignment.data)
      } catch (error) {
        console.log(error)
        setAssignments([])
      }
    }

    const fetchNotes = async () => {
      try {
        const notes = await axios.get(
          `/api/public/showfiles/?type=notes&cid=${selectedCourse}`
        );
        console.log('selected Course', selectedCourse)
        setNotes(notes.data);
        console.log(notes.data)

      } catch (error) {
        setNotes([])
      }
    }

    if (selectedCourse != null) {
      fetchNotes();
      fetchAssignments();
    }
  }, [selectedCourse]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get(
          `/api/public/courses/?semesterId=${semesterId}`
        );
        const data = response.data;
        setCourses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    return () => fetchCourses();
  }, [semesterId]);

  function DataTabs() {
    return (
      <>
        <Tabs
          variant="soft-rounded"
          index={activeTab}
          onChange={handleTabChange}
          colorScheme="facebook"
        >
          <TabList fontSize={'14px'} fontFamily={'body'}>
            <Tab>NOTES</Tab>
            <Tab>ASSIGNMENT</Tab>
            <Tab>OTHER</Tab>
          </TabList>

          <TabPanels my={2} fontFamily={"sans-serif"} fontSize={"14px"} bg={"white"} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} borderRadius={6}>
            <TabPanel >
              <TableContainer p={2}>
                <Table variant={'simple'} >
                  {
                    notes ? (
                      <Tbody>

                        {notes.length > 0 ? notes.map((item, index) => (
                          <Tr key={index}>
                            <Td p={2}>
                              <Text
                                cursor={"pointer"}
                                _hover={{ color: "blue", textDecoration: "underline" }}
                                onClick={() => download_notes(item.notes_id)}
                              >
                                {item.name}
                              </Text>
                            </Td>
                          </Tr>)) : (<Text textAlign={"center"}>Empty...</Text>)}

                      </Tbody>) : (<Spinner />)
                  }
                </Table>
              </TableContainer>

            </TabPanel>
            <TabPanel>
              <TableContainer p={2}>
                <Table variant={'simple'} >
                  {assignments ?
                    <Tbody>
                      {
                        assignments.length > 0 ? (
                          assignments.map((item, index) => (
                            <Tr key={index}>
                              <Td p={2}>
                                <Text
                                  _hover={{
                                    color: "blue",
                                    textDecoration: "underline",
                                  }}
                                  onClick={() =>
                                    download_assignment(item.assignment_id)
                                  }
                                >
                                  {item.name}
                                </Text>
                              </Td>
                              <Td p={2}>
                                <Text>{item.description}</Text>
                              </Td>
                              <Td p={2}>
                                <Text>
                                  Due:{" "}
                                  <span style={{ color: "red" }}>{item.validity}</span>
                                </Text>
                              </Td>
                            </Tr>
                          ))) : (<Text textAlign={"center"}>Empty...</Text>)}
                    </Tbody> : (<Spinner />)
                  }
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <VStack>
                <TableContainer p={2}>
                  <Table variant={'simple'} >
                    <Tbody>
                      <Text>Empty...</Text>
                    </Tbody>
                  </Table>
                </TableContainer>
              </VStack>
            </TabPanel>
          </TabPanels >
        </Tabs >
      </>
    );
  }
  return (
    <>
      <SmallBanner heading={'SEMESTER ' + semesterId} />
      <Center>
        <Box
          p={{ base: 2, md: 4 }}
          borderRadius="lg"
          overflow="hidden"
          fontSize={{ base: "sm", md: "md" }}
          width={{ base: '100%', md: '90%', lg: '80%' }}
          className="family-5"
        >
          <Divider my={2} />
          <Accordion allowToggle gap={2}>
            {courses && courses.length > 0 ?
              courses.map((course) => (
                <AccordionItem key={course.course_id} border={"none"} boxShadow={'0 0 6px rgba(0,0,0,0.05)'}>
                  <h2>
                    <AccordionButton
                      my={2}
                      cursor={"pointer"}
                      h={"64px"}
                      bg={"white"}

                      _expanded={{ bg: "#d8dcf0", }}
                      onClick={() => {
                        setSelectedCourse(course.course_id);
                      }}
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
                            {course.course_id} | {course.name}
                          </Text>
                        </Flex>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} bg={"whitesmoke"} >
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Box>
                        <HStack mb={1}>
                          <Text>Faculty: </Text>
                          <Text>{course.teacher_name}</Text>
                        </HStack>
                        <Tag colorScheme="facebook" >Credit: {course.credit}</Tag>
                      </Box>
                      <Tooltip label={'Syllabus'}>
                        <IconButton icon={<PiDownloadDuotone />}></IconButton>
                      </Tooltip>
                    </Box>

                    <Divider my={2} />

                    {selectedCourse && <DataTabs />}
                  </AccordionPanel>
                </AccordionItem>
              )) : (<Box my={4} textAlign={"center"}><Spinner /><Text>Loading...</Text></Box>)}
          </Accordion>
        </Box>
      </Center>
    </>
  );
};

export default SemesterPage;
