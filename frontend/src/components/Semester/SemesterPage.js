// SemesterPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, List, ListItem, Button, HStack, Divider, Flex, TabIndicator, UnorderedList } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Footer from '../Layout/Footer';

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
                { id: 2, credit: 4, name: 'Data Communication', courseId: 'ITT303', instructor: 'Instructor 2' },
                { id: 2, credit: 4, name: 'Design And Analysis of Algorithm', courseId: 'ITT303', instructor: 'Instructor 3' },
                { id: 2, credit: 4, name: 'Microprocessor', courseId: 'ITT303', instructor: 'Instructor 4' },
                { id: 2, credit: 4, name: 'Theory of Computation', courseId: 'ITT303', instructor: 'Instructor 5' },
                { id: 2, credit: 3, name: 'Introduction to probability and Statistics', courseId: 'ITT303', instructor: 'Instructor 6' },
                { id: 2, credit: 1, name: 'Design And Analysis of Algorithm Lab', courseId: 'ITT303', instructor: 'Instructor 7' },
                { id: 2, credit: 1, name: 'Microprocessor Lab', courseId: 'ITT303', instructor: 'Instructor 7' },
                // Add more subjects as needed
            ],
            // Add more properties as needed
        };
    };

    const semester = fetchSemesterData(semesterId);

    return (
        <>
            <Box p={6} borderRadius="lg" overflow="hidden">
                <Heading as="h2" size="lg" mb={2}>
                    {semester.name}
                </Heading>
                <Text>{semester.nicname}</Text>
                <Divider my={2} />
                <HStack>
                    <Button colorScheme='purple'>Download Syllabus</Button>
                    <Button colorScheme='teal'>Teaching Faculty</Button>
                    <Button colorScheme='red'>Academic Calender</Button>
                    <Button colorScheme='orange'>List Students</Button>
                </HStack>
                <Divider my={2} />



                <Accordion allowToggle>

                    {
                        semester.subjects.map((subject) => (
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: 'purple', color: 'white' }} h={'64px'}>
                                        <Box as="span" flex='1' textAlign='left' fontWeight={'bold'}>
                                            <Flex justifyContent={'space-between'}>
                                                <Text> {subject.courseId} | {subject.name}</Text>
                                                <Text>{subject.instructor}</Text>
                                            </Flex>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} bg={'AppWorkspace'}>
                                    <Box>
                                        <Text>Syllabus: <Button>Download</Button></Text>
                                        <Text>Credit: {subject.credit}</Text>
                                        <Text>Course Outcomes</Text>
                                        <UnorderedList>
                                            <ListItem>Lorem ipsum dolor sit amet</ListItem>
                                            <ListItem>Consectetur adipiscing elit</ListItem>
                                            <ListItem>Integer molestie lorem at massa</ListItem>
                                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                                        </UnorderedList>
                                    </Box>

                                    <Divider my={2} />



                                    <Tabs position="relative" defaultIndex={0} size='md' variant="unstyled" borderRadius={22} border={'2px solid #81c784'}>
                                        <TabList bg={'green.100'} borderRadius={20} pl={5} fontWeight={'semibold'}>
                                            <Tab>Notes</Tab>
                                            <Tab>Assignments</Tab>
                                            <Tab>Other</Tab>
                                        </TabList>
                                        <TabIndicator
                                            mt="-1.5px"
                                            height="2px"
                                            bg="#81c784"
                                            borderRadius="1px"
                                        />
                                        <TabPanels>
                                            <TabPanel>
                                                <p>Notes</p>
                                            </TabPanel>
                                            <TabPanel>
                                                <p>Assignments</p>
                                            </TabPanel>
                                            <TabPanel>
                                                <p>Other</p>
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>
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
