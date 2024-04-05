import React, { useEffect, useState } from 'react';
import { Box, Button, Center, DarkMode, Divider, Flex, Heading, Link, Spinner, Stack, Text, VStack } from '@chakra-ui/react';
import { getCollegeEvents } from '../../../Api/public_api';
import { FcCalendar, FcClock } from 'react-icons/fc';
import { FaDownload, FaFeatherPointed, FaLink } from 'react-icons/fa6';

function Events() {
    const [events, setEvents] = useState([])

    const fetchEvents = async() => {
        try {
            const data = await getCollegeEvents();
            setEvents(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchEvents();
    }, [])


    const formatDate = (dateString) => {
        const dateTime = new Date(dateString);
        return dateTime;
    }

    return (
        <Box w={'full'}>
            <Flex fontWeight={'semibold'} gap={2} fontSize={'24px'} justifyContent={'left'} my={2}>
                <Text color={'darkblue'}>COLLEGE</Text>
                <Text color={'blackAlpha'}>EVENTS</Text>
            </Flex>
            <Stack>
                {
                    events.map((item) => (
                        <Flex gap={4} mb={4}>
                            <Flex flex={1} gap={4}>
                                <Center boxSize={'80px'} minW={'80px'} bg={'blackAlpha.200'} rounded={4} color={'primary'} borderBottom={'4px solid darkblue'}>
                                    <Box textAlign={'center'}>
                                        <Text fontSize={'32px'} fontWeight={'bold'}>{formatDate(item.start_date).getDate()}</Text>
                                        <Text>{formatDate(item.start_date).toLocaleString('default', { month: 'short' })}</Text>
                                    </Box>
                                </Center>
                                <Box>
                                    <Flex justifyContent={'space-between'}>
                                        <Text fontWeight={'semibold'}>{item.title}</Text>
                                    </Flex>
                                    <Box fontSize={'14px'}>
                                        <Flex alignItems={'center'} gap={1} >
                                            <FcCalendar fontSize={'18px'} />
                                            <Text>{formatDate(item.start_date).toLocaleString('default', { day: 'numeric', month: 'short' })} {item.end_date ? (" - " + formatDate(item.end_date).toLocaleString('default', { day: 'numeric', month: 'short' })) : ''}</Text>
                                        </Flex>

                                        <Flex alignItems={'center'} gap={1} >
                                            <FcClock fontSize={'18px'} />
                                            {formatDate(item.start_date).toLocaleTimeString('en-US', { timeStyle: 'short' })} at {item.location}
                                        </Flex>
                                    </Box>
                                    <Text mt={1} fontSize={'14px'} textAlign={'justify'}>{item.description}</Text>
                                    <Flex gap={2}>
                                        <DarkMode>
                                            {
                                                item.attachment && <Button leftIcon={<FaDownload />} size={'xs'} colorScheme='blackAlpha' fontWeight={'normal'} rounded={'full'}>Download</Button>
                                            }
                                            {
                                                item.registration_link && <Link href={item.registration_link} target='_blank'><Button leftIcon={<FaLink />} size={'xs'} colorScheme='blackAlpha' fontWeight={'normal'} rounded={'full'}>Register</Button></Link>
                                            }
                                        </DarkMode>
                                    </Flex>
                                </Box>
                            </Flex>

                        </Flex>
                    ))
                }

            </Stack>

        </Box>
    );
}

export default Events;
