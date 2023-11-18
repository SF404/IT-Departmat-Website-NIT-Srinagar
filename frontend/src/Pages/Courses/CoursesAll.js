import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Center, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import SmallBanner from './../../Layout/SmallBanner'
const btech = [
    { id: 1, name: 'SEMESTER 1', nicname: 'AUTUMN' },
    { id: 2, name: 'SEMESTER 2', nicname: 'SPRING' },
    { id: 3, name: 'SEMESTER 3', nicname: 'AUTUMN' },
    { id: 4, name: 'SEMESTER 4', nicname: 'SPRING' },
    { id: 5, name: 'SEMESTER 5', nicname: 'AUTUMN' },
    { id: 6, name: 'SEMESTER 6', nicname: 'SPRING' },
    { id: 7, name: 'SEMESTER 7', nicname: 'AUTUMN' },
    { id: 8, name: 'SEMESTER 8', nicname: 'SPRING' },
];
const phd = [];
const mtech = [];

const SemesterAll = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <>
            <SmallBanner heading={'COURSE WORK'} />
            <Center>
                <VStack align="center" p={6} width={{ base: '100%', md: '60%' }}>
                    <Heading size={'md'} mb={6} color={'blue.900'}>B-TECH</Heading>
                    <SimpleGrid columns={[2, 3, 4]} spacing={4} w={'full'}>
                        {btech.map((semester) => (
                            <Button transition={'all 0.2s ease-in'} _hover={{ transform: 'scale(1.02)', boxShadow: '0 0 12px rgba(63,81,181,0.5)' }} display={'flex'} flexDirection={'column'} colorScheme='whiteAlpha' color={'#192e59'} aspectRatio={19 / 6} w={'full'} h={'full'} as={Link} to={`/semester/${semester.id}`} boxShadow={'0 0 6px rgba(0,0,0,0.1)'}>
                                {semester.name}
                                <Text fontSize={'10px'}>{semester.nicname} {year}</Text>
                            </Button>
                        ))}
                    </SimpleGrid>
                    <Heading size={'md'} mb={6} color={'blue.900'} mt={6} >M-TECH</Heading>
                    <SimpleGrid columns={[2, 3, 4]} spacing={4} w={'full'}>
                        {mtech.length > 0 ? mtech.map((semester) => (
                            <Button transition={'all 0.2s ease-in'} _hover={{ transform: 'scale(1.02)', boxShadow: '0 0 12px rgba(63,81,181,0.5)' }} display={'flex'} flexDirection={'column'} colorScheme='whiteAlpha' color={'#192e59'} aspectRatio={19 / 6} w={'full'} h={'full'} as={Link} to={`/semester/${semester.id}`} boxShadow={'0 0 6px rgba(0,0,0,0.1)'}>
                                {semester.name}
                                <Text fontSize={'10px'}>{semester.nicname} {year}</Text>
                            </Button>
                        )) : (<Box textAlign={'center'}>Update Comming...</Box>)}
                    </SimpleGrid>
                    <Heading size={'md'} mb={6} color={'blue.900'} mt={6}>PHD</Heading>
                    <SimpleGrid columns={[2, 3, 4]} spacing={4} w={'full'}>
                        {phd.length > 0 ? phd.map((semester) => (
                            <Button transition={'all 0.2s ease-in'} _hover={{ transform: 'scale(1.02)', boxShadow: '0 0 12px rgba(63,81,181,0.5)' }} display={'flex'} flexDirection={'column'} colorScheme='whiteAlpha' color={'#192e59'} aspectRatio={19 / 6} w={'full'} h={'full'} as={Link} to={`/semester/${semester.id}`} boxShadow={'0 0 6px rgba(0,0,0,0.1)'}>
                                {semester.name}
                                <Text fontSize={'10px'}>{semester.nicname} {year}</Text>
                            </Button>
                        )) : (<Box textAlign={'center'}>Update Comming...</Box>)}
                    </SimpleGrid>
                </VStack>
            </Center>
        </>
    );
};

export default SemesterAll;
