import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';

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
        <>
            <VStack  align="center" p={6} >
                <Heading size={'md'} mb={6} color={'blue.900'}>B-TECH</Heading>
                <SimpleGrid columns={[2, 3, 4]} spacing={4}>
                    {semesters.map((semester) => (
                        <Button as={Link} to={`/semester/${semester.id}`} boxShadow={'0 0 6px rgba(0,0,0,0.1)'}>
                            {semester.name}
                        </Button>
                    ))}
                </SimpleGrid>
                <Heading size={'md'} mb={6} color={'blue.900'} mt={6} >M-TECH</Heading>
                <SimpleGrid columns={[2, 3, 4]} spacing={4}>
                    {semesters.map((semester) => (
                        <Button as={Link} to={`/semester/${semester.id}`}  boxShadow={'0 0 6px rgba(0,0,0,0.1)'}>
                            {semester.name}
                        </Button>
                    ))}
                </SimpleGrid>
                <Heading size={'md'} mb={6} color={'blue.900'} mt={6}>PHD</Heading>
                <SimpleGrid columns={[2, 3, 4]} spacing={4}>
                    {semesters.map((semester) => (
                        <Button as={Link} to={`/semester/${semester.id}`}  boxShadow={'0 0 6px rgba(0,0,0,0.1)'}>
                            {semester.name}
                        </Button>
                    ))}
                </SimpleGrid>
            </VStack>
        </>
    );
};

export default SemesterAll;
