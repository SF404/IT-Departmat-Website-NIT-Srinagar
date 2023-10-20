// SemesterPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Button,
  HStack,
  Divider,
  Flex,
  TabIndicator,
  UnorderedList,
  Tag,
  Badge,
  Spinner,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useColorMode,
  Center,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  IconButton,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Footer from "../Layout/Footer";
import axios from "axios";
import CountUp from "react-countup";
import bannerImage from "./../../assets/images/image.jpeg";
import { InfoOutlineIcon } from "@chakra-ui/icons";

const SemesterPage = () => {
  const { semesterId } = useParams();
  const colors = ["blackAlpha.200", "blackAlpha.100"];

  // states
  const [notes, setNotes] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [details, setDetails] = useState({
    name: "",
    details: "",
    deadline: "",
  });
  const [activeTab, setActiveTab] = useState(0);
  const [courses, setCourses] = useState([]);

  const { toggleColorMode } = useColorMode();

  // functions

  function handleTabChange(index) {
    setActiveTab(index);
  }

  async function fetchCourses() {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/semester/?semesterId=${semesterId}`
      );
      const data = response.data;
      setCourses(data);
      console.log(courses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchAssignments() {
    try {
      const assignment = await axios.get(
        `http://localhost:8000/api/showassignment/?cid=${selectedCourse}`
      );
      setAssignments(assignment.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchNotes() {
    setLoading(true);
    try {
      const notes = await axios.get(
        `http://localhost:8000/api/shownotes/?cid=${selectedCourse}`
      );
      setNotes(notes.data);
      if (notes.status === 200) {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
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
        "http://127.0.0.1:8000/api/notesdownload/",
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
        "http://127.0.0.1:8000/api/assignmentdownload/",
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
  }, [selectedCourse]);

  useEffect(() => {
    fetchCourses();
  }, [, semesterId]);

  // handlers

  // Sub Components

  function DataTabs() {
    return (
      <>
        <Tabs
          size="md"
          variant="enclosed"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          index={activeTab}
          onChange={handleTabChange}
          py={2}
        >
          <TabList>
            <Tab fontWeight={"bold"}>Notes</Tab>
            <Tab fontWeight={"bold"}>Assignments</Tab>
            <Tab fontWeight={"bold"}>Other</Tab>
          </TabList>

          <TabPanels minH={50} fontFamily={"sans-serif"} fontSize={"14px"}>
            <TabPanel>
              <VStack gap={0}>
                {loading ? (
                  <Spinner size="lg" />
                ) : (
                  notes.map((item, index) => (
                    <Flex
                      w={"full"}
                      px={4}
                      py={2}
                      key={item.notes_id}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      bg={colors[index % colors.length]}
                    >
                      <Text
                        _hover={{ color: "blue", textDecoration: "underline" }}
                        onClick={() => download_notes(item.notes_id)}
                      >
                        {item.name}
                      </Text>
                    </Flex>
                  ))
                )}
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack gap={0}>
                {loading ? (
                  <Spinner size="lg" />
                ) : (
                  assignments.map((item, index) => (
                    <Flex
                      w={"full"}
                      px={4}
                      py={2}
                      key={item.assignment_id}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      bg={colors[index % colors.length]}
                    >
                      <HStack>
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
                        <Badge>
                          Due:{" "}
                          <span style={{ color: "red" }}>{item.validity}</span>
                        </Badge>
                      </HStack>

                      <HStack>
                        <IconButton
                          isRound={true}
                          variant="ghost"
                          aria-label="Done"
                          color={"blackAlpha.800"}
                          onClick={() => {
                            showDetails(item.name, item.details, item.deadline);
                            onOpen();
                          }}
                          icon={<InfoOutlineIcon />}
                        />
                      </HStack>
                    </Flex>
                  ))
                )}
                <Modal
                  closeOnOverlayClick={false}
                  isOpen={isOpen}
                  onClose={onClose}
                  size={"2xl"}
                >
                  <ModalOverlay bg="rgba(0, 0, 0, 0.1)" />
                  <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}></ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3}>
                        Save
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </VStack>
            </TabPanel>
            <TabPanel>
              <p>Other</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </>
    );
  }

  return (
    <>
      <VStack
        w={"full"}
        h={"200px"}
        bg={"brown"}
        color={"white"}
        p={6}
        backgroundImage={bannerImage} // Replace with your image path
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        textShadow={"0 0 24px black"}
      >
        <Heading as="h2" size="xl" mb={2}>
          Semester {semesterId}
        </Heading>
        <Text>Autumn 2023</Text>
        <Center w={"full"} gap={9}>
          <Heading>
            <CountUp start={0} end={345670} duration={3} delay={0} />+
          </Heading>
          <Heading>
            <CountUp start={0} end={100000} duration={3} delay={0} />+
          </Heading>
        </Center>

        <Text color={"white"}></Text>
      </VStack>
      <Box
        p={6}
        borderRadius="lg"
        overflow="hidden"
        fontSize={{ base: "sm", md: "md" }}
      >
        <Divider my={2} />
        <HStack justifyContent={"center"}>
          <Button onClick={toggleColorMode} colorScheme="purple">
            Download Syllabus
          </Button>
          <Button colorScheme="teal">Teaching Faculty</Button>
          <Button colorScheme="red">Academic Calender</Button>
          <Button colorScheme="orange">List Students</Button>
        </HStack>
        <Divider my={2} />

        <Accordion allowToggle userSelect={"none"} gap={2}>
          {courses.map((course) => (
            <AccordionItem
              key={course.course_id}
              mt={2}
              border={"1px solid #e5e5e5"}
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
                  onClick={() => {
                    setSelectedCourse(course.course_id);
                  }}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight={"bold"} overflow={"hidden"}>
                    <Flex justifyContent={"space-between"}>
                      <Text >
                        {" "}
                        {course.course_id} | {course.name}
                      </Text>
                    </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box>
                    <Text>{course.teacher}</Text>
                    <Badge colorScheme="blue">Credit: {course.credit}</Badge>
                  </Box>
                  <Text>
                    Syllabus: <Button size={"sm"}>Download</Button>
                  </Text>
                </Box>

                <Divider my={2} />

                {selectedCourse && <DataTabs />}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

      <Footer></Footer>
    </>
  );
};

export default SemesterPage;
