import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

const semesters = [
    { id: 1, name: 'Semester 1', nicname: 'Autumn 2023' },
    { id: 2, name: 'Semester 2', nicname: 'Spring 2023' },
    { id: 3, name: 'Semester 3', nicname: 'Autumn 2023' },
    { id: 4, name: 'Semester 4', nicname: 'Spring 2023' },
    { id: 5, name: 'Semester 5', nicname: 'Autumn 2023' },
    { id: 6, name: 'Semester 6', nicname: 'Spring 2023' },
    { id: 7, name: 'Semester 7', nicname: 'Autumn 2023' },
    { id: 8, name: 'Semester 8', nicname: 'Spring 2023' },
];

const SemesterAll = () => {
    return (
        <Flex direction="column" align="center" p={6} >
            <Heading mb={6} color={'blue.900'}>ALL SEMESTER</Heading>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
                {semesters.map((semester) => (
                    <Link to={`/semester/${semester.id}`}>
                        <Box key={semester.id} p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign={'center'}>
                            <Heading as="h3" size="md" mb={2}>
                                {semester.name}
                            </Heading>
                            <Text>
                                {semester.nicname}
                            </Text>
                        </Box>
                    </Link>
                ))}
            </SimpleGrid>
        </Flex>
    );
};

export default SemesterAll;
