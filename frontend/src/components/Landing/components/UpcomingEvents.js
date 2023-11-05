import React, { useEffect, useState } from 'react';
import './z_style.css'
import { Box, Center, CircularProgress, Divider, Flex, HStack, Heading, Link, SimpleGrid, Text, VStack, baseTheme } from '@chakra-ui/react';
import { FaFreeCodeCamp } from "react-icons/fa6";
import Holidays from './Holidays';
import { BsCalendar2Event, BsCalendar4Event } from 'react-icons/bs';

function UpcomingEvents({ events }) {
    return (
        <Box w={'full'}>
            <Heading fontSize={'1.5em'} my={'0.5em'} textAlign={'center'} color={'darkblue'}>UPCOMING EVENTS</Heading>
            <VStack borderRadius={'1em'} spacing={'1em'} bg={'white'} p={'1em'} boxShadow={'0 0 12px rgba(0,0,0,0.05)'} w={'full'}>
                {events ? (events.map((event, index) => (
                    <>
                        <Flex key={index} w={'full'} gap={4}>
                            <Box aspectRatio={1 / 1} maxH={'80px'} minW={'80px'} textAlign={'center'} p={1} bg={'#d8dcf0'} borderRadius={'0.2em'} color={'darkblue'} borderBottom={'5px solid darkblue'} >
                                <Heading>{event.date}</Heading>
                                <Text>{event.month}</Text>
                            </Box>
                            <Flex flexDirection={'column'} justifyContent={'space-between'}>
                                <Text as={Link} href={"https://nitsri.ac.in/" + event.url} fontWeight={'semibold'} fontSize={'lg'} className='family-1'>{event.title}</Text>
                                <Text color={'darkblue'} >{event.time}  &nbsp; | &nbsp;  {event.location}</Text>
                            </Flex>
                        </Flex>
                        <Divider />
                    </>
                ))) : (<CircularProgress isIndeterminate color='#5cc181' />)
                }
            </VStack>

        </Box>
    );
}

export default UpcomingEvents;
