import React, { useEffect, useState } from 'react';
import { Box, Center, CircularProgress, Divider, Flex, HStack, Heading, Link, SimpleGrid, Spinner, Text, VStack, baseTheme } from '@chakra-ui/react';

function UpcomingEvents({ events }) {
    return (
        <Box w={'full'}>
            <Heading fontSize={'1.5em'} my={'0.5em'} textAlign={'center'} color={'darkblue'}>UPCOMING EVENTS</Heading>
            <VStack borderRadius={'1em'} spacing={'1em'} bg={'white'} p={'1em'} boxShadow={'0 0 12px rgba(0,0,0,0.05)'} w={'full'}>
                {events ? (events.map((event, index) => (
                    <VStack w={'full'} key={index}>
                        <Flex  w={'full'} gap={4}>
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
                    </VStack>
                ))) : (<Spinner/>)
                }
            </VStack>

        </Box>
    );
}

export default UpcomingEvents;
