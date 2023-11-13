import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Text,  HStack, Divider, Flex, Badge, Spinner, VStack,  useDisclosure, Center, IconButton, Tag, Tooltip, Table, Tbody, Td, Tr, TableContainer, } from "@chakra-ui/react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import axios from "axios";
import SmallBanner from "../../Layout/SmallBanner";
import { PiDownloadDuotone } from "react-icons/pi";

const SemesterPage = () => {
  const { semesterId } = useParams();
  const colors = ["blackAlpha.200", "blackAlpha.100"];

  // states
  const [notes, setNotes] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [details, setDetails] = useState({
    name: "",
    details: "",
    deadline: "",
  });
  const [activeTab, setActiveTab] = useState(0);
  const [courses, setCourses] = useState(null);


  function handleTabChange(index) {
    setActiveTab(index);
  }

  async function fetchCourses() {
    try {
      const response = await axios.get(
        `/api/semester/?semesterId=${semesterId}`
      );
      const data = response.data;
      setCourses(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchAssignments() {
    try {
      const assignment = await axios.get(
        `/api/showassignment/?cid=${selectedCourse}`
      );
      setAssignments(assignment.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchNotes() {
    try {
      const notes = await axios.get(
        `/api/shownotes/?cid=${selectedCourse}`
      );
      setNotes(notes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const showDetails = (name, details, deadline) => {
    setDetails({ name, details, deadline });
    onOpen();
  };

  const download_notes = async (notes_id) => {
    console.log(notes_id);
    try {
      const response = await axios.post(
        "/api/notesdownload/",
        { nid: notes_id },
        { responseType: "blob" } // Make sure to set responseType to 'blob'
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "notes.pdf"); // You can set the filename here
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
        "/api/assignmentdownload/",
        { aid: assignment_id },
        { responseType: "blob" } // Make sure to set responseType to 'blob'
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "assignment.pdf"); // You can set the filename here
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading notes:", error);
    }
  };

  // use effects
  useEffect(() => {
    if (selectedCourse != null) {
      fetchNotes();
      fetchAssignments();
    }
  }, [selectedCourse,]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    fetchCourses();
  }, [, semesterId]);

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
                  <Tbody>
                    {notes ? (
                      notes.length > 0 ? (
                        notes.map((item, index) => (
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
                          </Tr>
                        ))) : (<Box textAlign={"center"}>Empty...</Box>)) : (<Spinner />)}
                  </Tbody>
                </Table>
              </TableContainer>

            </TabPanel>
            <TabPanel>
              <TableContainer p={2}>
                <Table variant={'simple'} >
                  <Tbody>
                    {assignments ? (
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
                              <Badge>
                                Due:{" "}
                                <span style={{ color: "red" }}>{item.validity}</span>
                              </Badge>
                            </Td>
                          </Tr>
                        ))) : (<Box textAlign={"center"}>Empty...</Box>)) : (<Spinner />)}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <VStack>
                <TableContainer p={2}>
                  <Table variant={'simple'} >
                    <Tbody>
                      <Box>Empty...</Box>
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
          <Accordion allowToggle gap={2} >
            {courses && courses.length > 0 ?
              courses.map((course) => (
                <AccordionItem key={course.course_id} border={"none"} boxShadow={'0 0 6px rgba(0,0,0,0.1)'}>
                  <h2>
                    <AccordionButton
                      my={2}
                      cursor={"pointer"}
                      h={"64px"}
                      bg={"white"}
                      _expanded={{ bg: "blackAlpha.100", }}
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
