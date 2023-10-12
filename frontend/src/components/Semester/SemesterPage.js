// SemesterPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, List, ListItem, Button, HStack, Divider, Flex, TabIndicator, UnorderedList, Tag, Badge, Spinner, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, useColorMode, Center, StatGroup, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Footer from '../Layout/Footer';
import axios from 'axios';
import CountUp from 'react-countup'
import bannerImage from './../../assets/images/image.jpeg'


const SemesterPage = () => {
    const { semesterId } = useParams();

    const fetchSemesterData = (id) => {
        return {
            id: parseInt(id),
            name: `Semester ${id}`,
            nicname: "Autumn 2023",
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            subjects: [
                { id: 1, credit: 4, name: 'Computer Organization and Architecture', courseId: 'ITT303', instructor: 'Instructor 1' },
                { id: 2, credit: 4, name: 'Data Communication', courseId: 'ITT304', instructor: 'Instructor 2' },
                { id: 2, credit: 4, name: 'Design And Analysis of Algorithm', courseId: 'ITT305', instructor: 'Instructor 3' },
                { id: 2, credit: 4, name: 'Microprocessor', courseId: 'ITT306', instructor: 'Instructor 4' },
                { id: 2, credit: 4, name: 'Theory of Computation', courseId: 'ITT307', instructor: 'Instructor 5' },
                { id: 2, credit: 3, name: 'Introduction to probability and Statistics', courseId: 'ITT308', instructor: 'Instructor 6' },
                { id: 2, credit: 1, name: 'Design And Analysis of Algorithm Lab', courseId: 'ITT309', instructor: 'Instructor 7' },
                { id: 2, credit: 1, name: 'Microprocessor Lab', courseId: 'ITT310', instructor: 'Instructor 7' },
                // Add more subjects as needed
            ],
            // Add more properties as needed
        };
    };

    const semester = fetchSemesterData(semesterId);


    // states 
    const [notes, setNotes] = useState([])
    const [assignments, setAssignments] = useState([])
    const [selectedCourse, setSelectedCourse] = useState(null)
    const [loading, setLoading] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [details, setDetails] = useState({
        name: '',
        details: '',
        deadline: '',
    });
    const [activeTab, setActiveTab] = useState(0);
    const [courses, setCourses] = useState([])


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
    };


    async function fetchAssignments() {
        try {
            const assignment = await axios.get(
                `http://localhost:8000/api/showassignment/?cid=${selectedCourse}`
            );
            setAssignments(assignment.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


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
                }, 1000);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    const showDetails = (name, details, deadline) => {
        setDetails({ name, details, deadline });
        onOpen();
    };

    const download_notes = async (nid) => {
        console.log(nid);
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/notesdownload/",
                { nid: nid },
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

    const download_assignment = async (aid) => {
        console.log(aid);
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/assignmentdownload/",
                { aid: aid },
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

    }, [selectedCourse])

    useEffect(() => {
            fetchCourses();
    }, [, semesterId])


    // handlers


    // Sub Components

    function DataTabs() {
        return (<>
            <Tabs position="relative" defaultIndex={0} size='md' variant="unstyled" borderRadius={16} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" index={activeTab} onChange={handleTabChange}>
                <TabList bg={'green.100'} color={'green'} borderRadius="16px 16px 0 0" >
                    <Tab fontWeight={'bold'}>Notes</Tab>
                    <Tab fontWeight={'bold'}>Assignments</Tab>
                    <Tab fontWeight={'bold'}>Other</Tab>
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="#81c784"
                    borderRadius="1px"
                />
                <TabPanels minH={100}>
                    <TabPanel >

                        <VStack spacing={2}>
                            {
                                loading ? (<Spinner size="lg" />) :
                                    notes.map((item) => (
                                        <Flex w={'full'} key={item.id} justifyContent={'space-between'} alignItems={'center'} gap={4}>
                                            <Text>{item.name}</Text>
                                            <Button onClick={() => download_notes(item.nid)}>Download</Button>
                                        </Flex>
                                    ))
                            }
                        </VStack>
                    </TabPanel>
                    <TabPanel>
                        <VStack spacing={2}>
                            {
                                loading ? (<Spinner size="lg" />) :
                                    assignments.map((item) => (
                                        <Flex w={'full'} key={item.id} justifyContent={'space-between'} alignItems={'center'} gap={4}>
                                            <HStack>
                                                <Text >{item.name}</Text>
                                                <Badge>Due: <span style={{ color: 'red' }}>{item.deadline}</span></Badge>

                                            </HStack>

                                            <HStack>
                                                <Button onClick={() => download_assignment(item.aid)}>Download</Button>
                                                <Button onClick={() => { showDetails(item.name, item.details, item.deadline); onOpen() }}>Details</Button>
                                            </HStack>
                                        </Flex>
                                    ))
                            }
                            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'2xl'}>
                                <ModalOverlay bg="rgba(0, 0, 0, 0.1)" />
                                <ModalContent>
                                    <ModalHeader>Create your account</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody pb={6}>

                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3}>
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
        </>)
    }



    return (
        <>
            <VStack w={'full'} h={'200px'} bg={'brown'} color={'white'} p={6}
                backgroundImage={bannerImage} // Replace with your image path
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                textShadow={'0 0 24px black'}
            >
                <Heading as="h2" size="xl" mb={2}>
                    {semester.name}
                </Heading>
                <Text>{semester.nicname}</Text>
                <Center w={'full'} gap={9}>
                    <Heading>
                        <CountUp start={0} end={345670} duration={3} delay={0} />+
                    </Heading>
                    <Heading>
                        <CountUp start={0} end={100000} duration={3} delay={0} />+
                    </Heading>
                </Center>

                <Text color={'white'}>

                </Text>
            </VStack>
            <Box p={6} borderRadius="lg" overflow="hidden" fontSize={{ base: 'sm', md: 'md' }}>

                <Divider my={2} />
                <HStack justifyContent={'center'}>
                    <Button onClick={toggleColorMode} colorScheme='purple'>Download Syllabus</Button>
                    <Button colorScheme='teal'>Teaching Faculty</Button>
                    <Button colorScheme='red'>Academic Calender</Button>
                    <Button colorScheme='orange'>List Students</Button>
                </HStack>
                <Divider my={2} />



                <Accordion allowToggle userSelect={'none'} gap={2}>

                    {
                        courses.map((course) => (
                            <AccordionItem key={course.course_id} mt={2} border={'1px solid #e5e5e5'} borderRadius={8}>
                                <h2>
                                    <AccordionButton as={Badge} colorScheme='blackAlpha' cursor={'pointer'} borderRadius={8} h={'64px'}
                                        _expanded={{ bg: "teal", color: "white" }}
                                        onClick={() => { setSelectedCourse(course.course_id) }}>
                                        <Box as="span" flex='1' textAlign='left' fontWeight={'bold'}>
                                            <Flex justifyContent={'space-between'}>
                                                <Text> {course.course_id} | {course.name}</Text>
                                            </Flex>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} >
                                    <Box display={'flex'} justifyContent={'space-between'}>
                                        <Box>
                                            <Text>{course.teacher}</Text>
                                            <Badge colorScheme='green'>Credit: {course.credit}</Badge>
                                        </Box>
                                        <Text>Syllabus: <Button>Download</Button></Text>
                                    </Box>

                                    <Divider my={2} />

                                    {
                                        selectedCourse && <DataTabs />
                                    }
                                </AccordionPanel>
                            </AccordionItem>
                        ))
                    }

                </Accordion>
            </Box>

            <Footer></Footer>
        </>
    );
};

export default SemesterPage;