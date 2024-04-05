import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Text,} from '@chakra-ui/react';
import { getFacultyCourses } from '../../Api/api';
import { NavLink } from 'react-router-dom';

const MyCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const fetchedCourses = await getFacultyCourses();
            setCourses(fetchedCourses);
            console.log(fetchedCourses)
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const tileTheme = [
        'gray.100',
        'red.50',
        'orange.50',
        'yellow.50',
        'green.50',
        'teal.50',
        'blue.50',
        'cyan.50',
        'purple.50',
        'pink.50',
    ];

    return (
        <Box w={'full'} rounded={16}>
            <SimpleGrid columns={[1, 2, 2, 3]} gap={[4]} w={'full'}>
                {courses.map((course, index) => (
                    <NavLink to={`${course.course_id}`}>
                        <Box key={course.course_id} rounded={16} h={'full'} overflow="hidden" boxShadow={'md'} border={'1px solid transparent'}
                            _hover={{ border: '1px solid gray' }} transition={'all 0.2s ease-in'} cursor={'pointer'} bg={'white'}>
                            <Box w={'full'} h={'100px'} bg={tileTheme[index % 10]}></Box>
                            <Box  p={4}>

                                <Text fontWeight={'bold'} color={'gray.700'}>{course.course_id} | {course.name}</Text>
                                <Box fontSize={'14px'} color={'GrayText'}>
                                    <Text mb={1}>
                                        {course.department}
                                    </Text>
                                    <Text>
                                        Instructor: {course.instructor}
                                    </Text>
                                    <Text>
                                        Semester: {course.semester}
                                    </Text>
                                    <Text>
                                        Credit: {course.credit}
                                    </Text>

                                </Box>
                            </Box>
                        </Box>
                    </NavLink>
                ))
                }
            </SimpleGrid >
        </Box >
    );
};

export default MyCourses;
