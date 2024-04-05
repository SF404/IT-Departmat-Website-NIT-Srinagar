import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import {  getCourseInfo,   } from '../../Api/api';
import { Box, Button, DarkMode, Divider, Flex, IconButton, SimpleGrid, Stack, Table, Tbody, Td, Text, Tr } from '@chakra-ui/react';
import { FcFile } from 'react-icons/fc';
import { getCourse, getStudyMaterialListByCourse } from '../../../Api/public_api';
import { BsXLg } from 'react-icons/bs';
import Masonry from 'react-layout-masonry';

const CourseStudyMaterial = () => {
    const { courseId } = useParams();
    const [studyMaterials, setStudyMaterials] = useState([]);
    const [course, setCourse] = useState('');

    const fetchStudyMaterials = async () => {
        try {
            const data = await getStudyMaterialListByCourse(courseId);
            setStudyMaterials(data);
            console.log(data)
        } catch (error) {
            console.error('Error fetching study materials:', error.message);
        }
    };

    const fetchCourseInfo = async () => {
        try {
            const data = await getCourse(courseId);
            setCourse(data);
        } catch (error) {
            console.error('Error fetching course information:', error.message);
        }
    };

    useEffect(() => {
        fetchStudyMaterials();
        fetchCourseInfo();
    }, [courseId]);


    const filterLectureNotes = (materials) => materials.filter((material) => material.type === 'lecture_notes');
    const filterAssignments = (materials) => materials.filter((material) => material.type === 'assignment');
    const filterTextbooks = (materials) => materials.filter((material) => material.type === 'textbook');
    const filterLabManuals = (materials) => materials.filter((material) => material.type === 'lab_manual');
    const filterQuestionPapers = (materials) => materials.filter((material) => material.type === 'question_papers');
    const filterSolutions = (materials) => materials.filter((material) => material.type === 'solutions');
    const filterProjectGuidelines = (materials) => materials.filter((material) => material.type === 'project_guidelines');
    const filterOtherMaterials = (materials) => materials.filter((material) => material.type === 'other');

    const handleDownload = (url) => {
        window.open(url, '_blank');
    };

    const formatDate = (date_string) => {
        const date = new Date(date_string);
        return date.toLocaleDateString("en-GB", { day: 'numeric', month: 'short' })
    }

    return (
        <Box bg={'gray.200'} w={'full'} minH={'100vh'}>
            <Box w={'full'} p={4}>
                <Flex justifyContent={'space-between'} alignItems={'center'} fontFamily={'exo'}>
                    <Box>
                        <Text fontWeight={'semibold'} fontSize={'lg'}>{course.course_id} | {course.name}</Text>
                        <Text fontSize={'14px'} mb={2}>{course.semester} semester | {course.department} | credit: {course.credit}</Text>
                    </Box>
                </Flex>
                <SimpleGrid gap={4} columns={[1,1, 2, 2, 3]}>
                    {filterLectureNotes(studyMaterials).length > 0 && (
                        <Box w={'full'} bg={'white'} rounded={16} p={4}>
                            <Text fontFamily={'exo'} fontWeight={'bold'} mb={2}>Lecture Notes</Text>
                            <Divider />
                            <Table mt={2}>
                                <Tbody>
                                    {
                                        filterLectureNotes(studyMaterials).map((item) => (
                                            <Tr>
                                                <Td p={0}> <FcFile fontSize={'18px'} /></Td>
                                                <Td px={1} py={2} fontSize={'14px'} onClick={() => handleDownload(item.attachment)} _hover={{ color: 'blue' }} cursor={'pointer'}>{item.title}</Td>
                                                <Td p={0} textAlign={'right'}>
                                                    <Button size={'xs'} variant={'outline'} colorScheme='messenger' onClick={() => handleDownload(item.attachment)} >Download</Button>
                                                </Td>
                                            </Tr>
                                        ))
                                    }
                                </Tbody>
                            </Table>
                        </Box>
                    )}

                    {filterAssignments(studyMaterials).length > 0 && (
                        <Box w={'full'} p={4} bg={'white'} rounded={16}>
                            <Text fontFamily={'exo'} fontWeight={'bold'} mb={2}>Assignments</Text>
                            <Divider />
                            <Table mt={2}>
                                <Tbody>
                                    {
                                        filterAssignments(studyMaterials).map((item) => (
                                            <Tr>
                                                <Td p={0}> <FcFile fontSize={'18px'} /></Td>
                                                <Td px={1} py={2} fontSize={'14px'} onClick={() => handleDownload(item.attachment)} _hover={{ color: 'blue' }} cursor={'pointer'}>{item.title}</Td>
                                                <Td px={1} py={2} fontSize={'14px'} textAlign={'right'}>{formatDate(item.created_at)}</Td>
                                                <Td p={0} textAlign={'right'}>
                                                    <Button size={'xs'} variant={'outline'} colorScheme='messenger' onClick={() => handleDownload(item.attachment)} >Download</Button>
                                                </Td>
                                            </Tr>
                                        ))
                                    }
                                </Tbody>
                            </Table>
                        </Box>
                    )}

                    {filterTextbooks(studyMaterials).length > 0 && (
                        <Box w={'full'} p={4} bg={'white'} rounded={16}>
                            <Text fontFamily={'exo'} fontWeight={'bold'} mb={2}>Text Books</Text>
                            <Divider />
                            <Table mt={2}>
                                <Tbody>
                                    {
                                        filterTextbooks(studyMaterials).map((item) => (
                                            <Tr>
                                                <Td p={0}> <FcFile fontSize={'18px'} /></Td>
                                                <Td px={1} py={2} fontSize={'14px'} onClick={() => handleDownload(item.attachment)} _hover={{ color: 'blue' }} cursor={'pointer'}>{item.title}</Td>
                                                <Td p={0} textAlign={'right'}>
                                                    <Button size={'xs'} variant={'outline'} colorScheme='messenger' onClick={() => handleDownload(item.attachment)} >Download</Button>
                                                </Td>
                                            </Tr>
                                        ))
                                    }
                                </Tbody>
                            </Table>
                        </Box>
                    )}

                    {filterLabManuals(studyMaterials).length > 0 && (
                        <Box w={'full'} p={4} bg={'white'} rounded={16}>
                            <Text fontFamily={'exo'} fontWeight={'bold'} mb={2}>Lab Manuals</Text>
                            <Divider />
                            <Table mt={2}>
                                <Tbody>
                                    {
                                        filterLabManuals(studyMaterials).map((item) => (
                                            <Tr>
                                                <Td p={0}> <FcFile fontSize={'18px'} /></Td>
                                                <Td px={1} py={2} fontSize={'14px'} onClick={() => handleDownload(item.attachment)} _hover={{ color: 'blue' }} cursor={'pointer'}>{item.title}</Td>
                                                <Td p={0} textAlign={'right'}>
                                                    <Button size={'xs'} variant={'outline'} colorScheme='messenger' onClick={() => handleDownload(item.attachment)} >Download</Button>
                                                </Td>
                                            </Tr>
                                        ))
                                    }
                                </Tbody>
                            </Table>
                        </Box>
                    )}

                    {filterQuestionPapers(studyMaterials).length > 0 && (
                        <Box w={'full'} p={4} bg={'white'} rounded={16}>
                            <Text fontFamily={'exo'} fontWeight={'bold'} mb={2}>Question Papers</Text>
                            <Divider />
                            <Table mt={2}>
                                <Tbody>
                                    {
                                        filterQuestionPapers(studyMaterials).map((item) => (
                                            <Tr>
                                                <Td p={0}> <FcFile fontSize={'18px'} /></Td>
                                                <Td px={1} py={2} fontSize={'14px'} onClick={() => handleDownload(item.attachment)} _hover={{ color: 'blue' }} cursor={'pointer'}>{item.title}</Td>
                                                <Td p={0} textAlign={'right'}>
                                                    <Button size={'xs'} variant={'outline'} colorScheme='messenger' onClick={() => handleDownload(item.attachment)} >Download</Button>
                                                </Td>
                                            </Tr>
                                        ))
                                    }
                                </Tbody>
                            </Table>
                        </Box>
                    )}

                    {filterSolutions(studyMaterials).length > 0 && (
                        <Box w={'full'} p={4} bg={'white'} rounded={16}>
                            <Text fontFamily={'exo'} fontWeight={'bold'} mb={2}>Solutions</Text>
                            <Divider />
                            <Table mt={2}>
                                <Tbody>
                                    {
                                        filterSolutions(studyMaterials).map((item) => (
                                            <Tr>
                                                <Td p={0}> <FcFile fontSize={'18px'} /></Td>
                                                <Td px={1} py={2} fontSize={'14px'} onClick={() => handleDownload(item.attachment)} _hover={{ color: 'blue' }} cursor={'pointer'}>{item.title}</Td>
                                                <Td p={0} textAlign={'right'}>
                                                    <Button size={'xs'} variant={'outline'} colorScheme='messenger' onClick={() => handleDownload(item.attachment)} >Download</Button>
                                                </Td>
                                            </Tr>
                                        ))
                                    }
                                </Tbody>
                            </Table>
                        </Box>
                    )}

                    {filterProjectGuidelines(studyMaterials).length > 0 && (
                        <Box w={'full'} p={4} bg={'white'} rounded={16}>
                            <Text fontFamily={'exo'} fontWeight={'bold'} mb={2}>Project Guidelines</Text>
                            <Divider />
                            <Table mt={2}>
                                <Tbody>
                                    {
                                        filterProjectGuidelines(studyMaterials).map((item) => (
                                            <Tr>
                                                <Td p={0}> <FcFile fontSize={'18px'} /></Td>
                                                <Td px={1} py={2} fontSize={'14px'} onClick={() => handleDownload(item.attachment)} _hover={{ color: 'blue' }} cursor={'pointer'}>{item.title}</Td>
                                                <Td p={0} textAlign={'right'}>
                                                    <Button size={'xs'} variant={'outline'} colorScheme='messenger' onClick={() => handleDownload(item.attachment)} >Download</Button>
                                                </Td>
                                            </Tr>
                                        ))
                                    }
                                </Tbody>
                            </Table>
                        </Box>
                    )}

                    {filterOtherMaterials(studyMaterials).length > 0 && (
                        <Box w={'full'} p={4} bg={'white'} rounded={16}>
                            <Text fontFamily={'exo'} fontWeight={'bold'} mb={2}>Others</Text>
                            <Divider />
                            <Table mt={2}>
                                <Tbody>
                                    {
                                        filterOtherMaterials(studyMaterials).map((item) => (
                                            <Tr>
                                                <Td p={0}> <FcFile fontSize={'18px'} /></Td>
                                                <Td px={1} py={2} fontSize={'14px'} onClick={() => handleDownload(item.attachment)} _hover={{ color: 'blue' }} cursor={'pointer'}>{item.title}</Td>
                                                <Td p={0} textAlign={'right'}>
                                                    <Button size={'xs'} variant={'outline'} colorScheme='messenger' onClick={() => handleDownload(item.attachment)} >Download</Button>
                                                </Td>
                                            </Tr>
                                        ))
                                    }
                                </Tbody>
                            </Table>
                        </Box>
                    )}
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default CourseStudyMaterial;
