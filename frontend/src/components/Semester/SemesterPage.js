// SemesterPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, List, ListItem, Button, HStack, Divider, Flex, TabIndicator, UnorderedList, Badge, Spinner } from '@chakra-ui/react';
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

    // states
    const [loading, setLoading] = useState(true);


    function TabSection() {
        return (
            <>
                <Tabs  minH={'100px'} position="relative" defaultIndex={0} size='md' variant="unstyled" borderRadius={16} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}>
                    <TabList bg={'green.100'} borderRadius='16px 16px 0 0 '>
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
                    {
                        loading ? (<Spinner />) : (
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
                        )
                    }
                </Tabs>
            </>
        )
    }

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



                <Accordion allowToggle userSelect={'none'}>

                    {
                        semester.subjects.map((subject) => (
                            <AccordionItem w={'full'} cursor={'pointer'}>
                                <h2>
                                    <AccordionButton _expanded={{ bg: '#009688', color: 'white' }} h={'64px'} as={Badge}>
                                        <Box as="span" flex='1' textAlign='left' fontWeight={'bold'}>
                                            <Flex justifyContent={'space-between'}>
                                                <Text> {subject.courseId} | {subject.name}</Text>
                                            </Flex>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <HStack justifyContent={'space-between'}>
                                        <Box>
                                            <Text>{subject.instructor}</Text>
                                            <Badge colorScheme='green'>Credit: {subject.credit}</Badge>
                                        </Box>
                                        <Text>Syllabus: <Button>Download</Button></Text>
                                    </HStack>

                                    <Divider my={2} />

                                    <TabSection />


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
