import React, { useEffect, useState } from 'react';
import { Link, renderMatches } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Center, Heading, IconButton, SimpleGrid, Text, Tooltip, VStack } from '@chakra-ui/react';
import SmallBanner from './../../Layout/SmallBanner'
import image from '../../assets/banners/a0.jpeg';
import { PiDownloadDuotone } from 'react-icons/pi';
const btech = [
    { id: 1, name: 'SEMESTER 1', nickname: 'AUTUMN' },
    { id: 2, name: 'SEMESTER 2', nickname: 'SPRING' },
    { id: 3, name: 'SEMESTER 3', nickname: 'AUTUMN' },
    { id: 4, name: 'SEMESTER 4', nickname: 'SPRING' },
    { id: 5, name: 'SEMESTER 5', nickname: 'AUTUMN' },
    { id: 6, name: 'SEMESTER 6', nickname: 'SPRING' },
    { id: 7, name: 'SEMESTER 7', nickname: 'AUTUMN' },
    { id: 8, name: 'SEMESTER 8', nickname: 'SPRING' },
];
const phd = [];
const mtech = [];

const SemesterAll = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    let type;
    if (month >= 1 && month <= 6) {
        type = 'SPRING';
    } else if (month >= 7 && month <= 12) {
        type = 'AUTUMN';
    }
    const year = date.getFullYear();

    const [syllabus, setSyllabus] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/public/fileget/?name=all_sem');
                console.log(response.data[0]);
                setSyllabus(response.data[0]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        // Optionally, you can also perform cleanup if necessary
        return () => {
            // Cancel the request or perform any cleanup
        };
    }, []);

    return (
        <>
            <SmallBanner image={image} heading={'COURSE WORK'} />
            <Center>
                <VStack align="center" p={6} width={{ base: '100%', md: '60%' }}>
                    <Heading size={'md'} mb={6} color={'blue.900'} display="flex" alignItems="center">
                        <Box flex="1" pr={5}>{`B-TECH ${type}-${year}`}</Box>
                        <a href={(syllabus && syllabus.file)} target="_blank" rel="noopener noreferrer">
                            <Tooltip label={`B-Tech ${year} Syllabus`} ml={4}>
                                <IconButton icon={<PiDownloadDuotone />} bg="gray.300" color="black" />
                            </Tooltip>
                        </a>
                    </Heading>

                    <SimpleGrid columns={[2, 3, 4]} spacing={4} w={'full'}>
                        {btech.map((semester) => (
                            (semester.nickname === type) && (<Button transition={'all 0.2s ease-in'} _hover={{ transform: 'scale(1.02)', boxShadow: '0 0 12px rgba(63,81,181,0.5)' }} display={'flex'} flexDirection={'column'} colorScheme='whiteAlpha' color={'#192e59'} aspectRatio={19 / 6} w={'full'} h={'full'} as={Link} to={`/semester/${semester.id}`} boxShadow={'0 0 6px rgba(0,0,0,0.1)'}>
                                {semester.name}
                                <Text fontSize={'10px'}>{semester.nickname}</Text>
                            </Button>)
                        ))}
                    </SimpleGrid>
                    <Heading size={'md'} mb={6} color={'blue.900'} mt={6} >M-TECH</Heading>
                    <SimpleGrid columns={[2, 3, 4]} spacing={4} w={'full'}>
                        {mtech.length > 0 ? mtech.map((semester) => (
                            <Button transition={'all 0.2s ease-in'} _hover={{ transform: 'scale(1.02)', boxShadow: '0 0 12px rgba(63,81,181,0.5)' }} display={'flex'} flexDirection={'column'} colorScheme='whiteAlpha' color={'#192e59'} aspectRatio={19 / 6} w={'full'} h={'full'} as={Link} to={`/semester/${semester.id}`} boxShadow={'0 0 6px rgba(0,0,0,0.1)'}>
                                {semester.name}
                                <Text fontSize={'10px'}>{semester.nickname} {year}</Text>
                            </Button>
                        )) : (<Box textAlign={'center'}>Update Comming...</Box>)}
                    </SimpleGrid>
                    <Heading size={'md'} mb={6} color={'blue.900'} mt={6}>PHD</Heading>
                    <SimpleGrid columns={[2, 3, 4]} spacing={4} w={'full'}>
                        {phd.length > 0 ? phd.map((semester) => (
                            <Button transition={'all 0.2s ease-in'} _hover={{ transform: 'scale(1.02)', boxShadow: '0 0 12px rgba(63,81,181,0.5)' }} display={'flex'} flexDirection={'column'} colorScheme='whiteAlpha' color={'#192e59'} aspectRatio={19 / 6} w={'full'} h={'full'} as={Link} to={`/semester/${semester.id}`} boxShadow={'0 0 6px rgba(0,0,0,0.1)'}>
                                {semester.name}
                                <Text fontSize={'10px'}>{semester.nickname} {year}</Text>
                            </Button>
                        )) : (<Box textAlign={'center'}>Update Comming...</Box>)}
                    </SimpleGrid>
                </VStack>
            </Center>
        </>
    );
};

export default SemesterAll;
