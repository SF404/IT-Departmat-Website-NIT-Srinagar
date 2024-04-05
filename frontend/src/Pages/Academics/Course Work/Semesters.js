import { Box, Button, Divider, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import SmallBanner from '../../../Components/SmallBanner'
import { NavLink } from 'react-router-dom';

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

const Semesters = () => {
    return (
        <Box w={'full'} minH={'100vh'}>
            <SmallBanner heading={'SEMESTERS'} />
            <Box w={{ base: 'full', md: '60%' }} mx={'auto'} p={4}>
                <Heading size={'md'} color={'blue.900'} textAlign={'center'}>B-TECH</Heading>
                <SimpleGrid columns={[1, 2, 3, 4]} gap={4} mt={4}>
                    {semesters.map((semester) => (
                        <NavLink to={`${semester.id}/courses`}>
                            <Button colorScheme='gray' bg={'white'} height={'100px'} w={'full'} rounded={24} _hover={{ border: '1px solid gray' }}>
                                <Box>
                                    <Text fontFamily={'exo'} fontSize={'lg'}>
                                        {semester.name}
                                    </Text> <br />
                                    <Text fontSize={'xs'} fontWeight={'normal'}>{semester.nicname}</Text>
                                </Box>
                            </Button>
                        </NavLink>
                    ))}

                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default Semesters